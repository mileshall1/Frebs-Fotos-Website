import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';

async function render(path = '/') {
  const { default: worker } = await import('../dist/server/index.js');
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: 'text/html' } }),
    { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} });
}

test('home presents each collection once with portraits on their own page', async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const slug of ['armani', 'igazi', 'ua-spec', 'nnexus']) assert.ok(html.includes(`href="/work/${slug}"`));
  assert.equal((html.match(/data-project=/g) ?? []).length, 5);
  assert.ok(html.includes('href="/portraits"'));
  assert.doesNotMatch(html, /id="motion"|class="portrait-section"|class="film-list"|gallery-dialog/);
  const order = ['id="top"', 'class="photo-reel"', 'id="work"', 'id="on-set"', 'id="about"', 'id="services"', 'class="closing-frame"', 'id="contact"'].map((marker) => html.indexOf(marker));
  assert.ok(order.every((position, index) => position >= 0 && (index === 0 || position > order[index - 1])));
  for (const section of ['work', 'on-set', 'about', 'services', 'contact']) assert.ok(html.includes(`id="${section}"`));
  assert.match(html, /name="viewport"/);
  assert.match(html, /aria-label="Main navigation"/);
  assert.match(html, /hero-film/);
  for (const asset of ['lumina-frame-1.jpg', 'studio-portrait.jpg', 'helios-portrait.jpg', 'highlights/bts-performance-day-one.webp', 'highlights/bts-white-sweep.webp', 'highlights/bts-last-light.webp']) {
    await access(new URL(`../public/images/${asset}`, import.meta.url));
    assert.ok(html.includes(asset));
  }
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test('film project pages contain distinct local stills, source films, and credits', async () => {
  for (const [slug, prefix, count, film] of [
    ['armani', 'armani', 6, 'RXlD5zKnSOQ'],
    ['igazi', 'igazi', 6, 'DR7xMIsj6Cz'],
    ['ua-spec', 'ua', 4, 'yv_FIf1wVgA'],
  ]) {
    const response = await render(`/work/${slug}`);
    assert.equal(response.status, 200, slug);
    const html = await response.text();
    assert.match(html, /id="film"/);
    assert.match(html, /id="credits"/);
    assert.ok(html.includes(film));
    assert.match(html, /aria-haspopup="dialog"/);
    for (let index = 1; index <= count; index++) {
      const path = `/images/${prefix}-frame-${index}.jpg`;
      assert.ok(html.includes(path), path);
      await access(new URL(`../public${path}`, import.meta.url));
    }
  }
});

test('NNEXUS collection retains all four source sessions', async () => {
  const response = await render('/work/nnexus');
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const [artist, post] of [['Teabee', 'DfaleP0mV6M'], ['Njinjoh', 'DfIdFjLGTXo'], ['Psmoov', 'De2Y5h2mb98'], ['Wildchild', 'DexMr4FmefZ']]) {
    assert.ok(html.includes(artist));
    assert.ok(html.includes(`https://www.instagram.com/p/${post}/`));
  }
});

test('an unknown project returns 404', async () => {
  assert.equal((await render('/work/not-a-project')).status, 404);
});

test('booking details use the confirmed address and an honest email draft flow', async () => {
  const html = await (await render()).text();
  assert.match(html, /mailto:frebfotos@gmail.com/);
  assert.doesNotMatch(html, /hello@frebrukmikre.com/);
  assert.match(html, /id="services"/);
  for (const field of ['name', 'email', 'shoot', 'date', 'location', 'budget', 'details']) assert.ok(html.includes(`name="${field}"`));
  assert.match(html, /Prepare inquiry/);
  assert.match(html, /This form prepares an email/);
  assert.match(html, /Skip to content/);
  assert.match(html, /aria-pressed="true"[^>]*>Play film/);
});

test('search crawlers receive a sitemap with every public project', async () => {
  const robots = await render('/robots.txt');
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/frebruk-visual-emotion\.mileshall423\.chatgpt\.site\/sitemap\.xml/);
  const sitemap = await render('/sitemap.xml');
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  for (const slug of ['armani', 'igazi', 'ua-spec', 'nnexus']) assert.ok(xml.includes(`/work/${slug}</loc>`));
});

test('home and project pages expose distinct canonical links and social previews', async () => {
  for (const path of ['/', '/portraits', '/on-set', '/work/armani', '/work/igazi', '/work/ua-spec', '/work/nnexus']) {
    const html = await (await render(path)).text();
    const canonical = `https://frebruk-visual-emotion.mileshall423.chatgpt.site${path === '/' ? '' : path}`;
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`));
    assert.match(html, /property="og:image"/);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
  }
  await access(new URL('../public/social-preview.jpg', import.meta.url));
  for (const name of ['about-portrait.webp', 'about-background.webp', 'hero-poster.jpg']) await access(new URL(`../public/images/${name}`, import.meta.url));
});


test('portrait collections retain the full image viewer away from the homepage', async () => {
  const response = await render('/portraits');
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const section of ['beauty', 'graduation', 'on-location', 'studies']) assert.ok(html.includes(`id="${section}"`));
  assert.equal((html.match(/class="gallery-thumbnail"/g) ?? []).length, 24);
  assert.match(html, /gallery-dialog/);
  assert.ok(html.includes('href="/#contact"'));
  for (const asset of ['lumina-reflection.jpg', 'grad-02.jpg', 'portrait-02.jpg']) await access(new URL(`../public/images/${asset}`, import.meta.url));
});

test('film captions describe scenes and NNEXUS does not repeat session images in a second gallery', async () => {
  for (const slug of ['armani', 'igazi']) {
    const html = await (await render(`/work/${slug}`)).text();
    assert.doesNotMatch(html, /selected (film|trailer) frame [0-9]/);
    assert.match(html, /class="gallery-thumbnail"/);
  }
  const nnexus = await (await render('/work/nnexus')).text();
  assert.doesNotMatch(nnexus, /class="detail-gallery"/);
  assert.ok(nnexus.includes('id="frames"'));
});


test('the highlight expansion adds sourced images across the project galleries and production notebook', async () => {
  for (const [slug, count] of [['armani', 11], ['igazi', 12], ['ua-spec', 6]]) {
    const html = await (await render(`/work/${slug}`)).text();
    assert.equal((html.match(/class="gallery-thumbnail"/g) ?? []).length, count, slug);
    assert.ok(html.includes('/images/highlights/'));
  }
  const response = await render('/on-set');
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const section of ['performance', 'studio', 'location']) assert.ok(html.includes(`id="${section}"`));
  assert.equal((html.match(/class="gallery-thumbnail"/g) ?? []).length, 20);
  assert.ok(html.includes('17951437932029976'));
  const home = await (await render()).text();
  assert.ok(home.includes('href="/on-set"'));
});

test('every imported highlight asset exists and has distinct, stable source provenance', async () => {
  const sources = JSON.parse(await readFile(new URL('../HIGHLIGHT_SOURCES.json', import.meta.url), 'utf8'));
  assert.equal(sources.length, 40);
  assert.equal(new Set(sources.map((row) => row.storyId)).size, 40);
  assert.equal(new Set(sources.map((row) => row.asset)).size, 40);
  const highlights = new Set(sources.map((row) => row.highlightId));
  assert.equal(highlights.size, 6);
  for (const row of sources) {
    await access(new URL(`../public/images/highlights/${row.asset}`, import.meta.url));
    assert.match(row.storyId, /^\d+$/);
    assert.ok(row.caption.length > 5);
    assert.doesNotMatch(JSON.stringify(row), /cdninstagram|cookie|token|bytestart|byteend/i);
  }
});

 test('latest wedding post keeps all eight source images and the assisting credit', async () => {
 const html = await (await render('/portraits')).text();
 assert.match(html, /id="wedding"/);
 assert.match(html, /wedding Frebruk assisted on/);
 for (let n=1;n<=8;n++) { const asset=`/images/wedding/wedding-${String(n).padStart(2,'0')}.webp`; assert.ok(html.includes(asset)); await access(new URL(`../public${asset}`, import.meta.url)); }
 assert.ok(html.includes('https://www.instagram.com/p/Df7sQsTm-kG/'));
 const home=await(await render('/')).text(); assert.ok(home.includes('href="/portraits#wedding"'));
 });
