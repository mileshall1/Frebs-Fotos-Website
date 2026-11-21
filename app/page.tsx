import Image from "next/image";
import HeroVideo from "./HeroVideo";
import PhotoCarousel from "./PhotoCarousel";
import InquiryForm from "./InquiryForm";
import { contactEmail } from "./lib/site";
import { weddingImages } from "./data/wedding";
import { highlightImages } from "./data/highlights";

import { projects, portraits, onSet } from "./data/projects";
import Link from "next/link";

const carouselImages = [weddingImages[5], portraits[0], highlightImages["a-smile"], portraits[1], highlightImages["garden-portrait"], portraits[3], portraits[4], portraits[5], portraits[2]].map((image) => ({
  ...image, href: `/portraits#${image.src.includes("wedding/") ? "wedding" : image.src.includes("a-smile") || image.src.includes("garden-portrait") ? "on-location" : image.src.includes("lumina") ? "beauty" : image.src.includes("helios") || image.src.includes("studio") ? "studies" : "graduation"}`,
}));

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
    <main id="main-content">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Frebruk home">
          FREBRUK
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <Link href="/portraits">Portraits</Link>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="ig-link" href="https://www.instagram.com/freb.fotos/" target="_blank" rel="noreferrer">
          IG ↗
        </a>
      </header>

      <section className="hero" id="top">
        <HeroVideo />
        <div className="hero-side-credit"><span>Moving image</span><p>By Frebruk Mikre</p></div>
        <div className="hero-side-practice"><span>Selected work</span><p>Portraiture<br />Editorial<br />Film</p></div>
        <div className="hero-shade" />
        <div className="hero-text-mask" aria-hidden="true" />
        <p className="hero-kicker">Photographer · Filmmaker</p>
        <h1 aria-label="Freb's Fotos"><span>FREB&apos;S</span><span>FOTOS</span></h1>
        <p className="hero-tagline">Visual emotion,<br />made tangible.</p>
        <a className="hero-cta" href="#work"><span>Explore selected work</span><span>↓</span></a>
        <p className="hero-location">Baltimore, Maryland / Available worldwide</p>
      </section>

      <section className="photo-reel" aria-labelledby="photo-reel-title">
        <div className="photo-reel-head">
          <p className="eyebrow">Recent frames</p>
          <h2 id="photo-reel-title">In the <em>viewfinder.</em></h2>
          <Link href="/portraits" className="text-link">Explore portrait galleries</Link>
        </div>
        <PhotoCarousel images={carouselImages} />
      </section>

      <section className="work editorial-work" id="work" aria-labelledby="work-title">
        <div className="collection-heading"><p className="eyebrow">Selected work / 2025—Now</p><h2 id="work-title">A way of <em>seeing.</em></h2><p>Photography and film. A selection of stories, people, and the spaces between.</p></div>
        <div className="work-list editorial-work-list">
          <article className="work-entry work-entry--featured" data-project="armani">
            <Link href="/work/armani" aria-label="Explore Stronger with You, Emporio Armani spec film">
              <div className="work-image"><Image src="/images/armani-frame-2.jpg" alt="A rooftop portrait from Stronger with You" fill sizes="(max-width: 760px) calc(100vw - 32px), 92vw" /><span className="work-medium">Film / Director’s cut</span></div>
              <div className="editorial-caption"><div><p>Emporio Armani / Spec campaign</p><h3>Stronger with You</h3></div><span>Explore the film</span></div>
            </Link>
          </article>
          <article className="work-entry work-entry--portrait" data-project="portraits">
            <Link href="/portraits#wedding" aria-label="Explore the latest wedding photographs and portrait galleries">
              <div className="work-image"><Image src="/images/wedding/wedding-01.webp" alt="A quiet moment beside the wedding dress" fill sizes="(max-width: 760px) calc(100vw - 32px), 37vw" /><span className="work-medium">Photography</span></div>
              <div className="editorial-caption"><div><p>Latest photographs / Wedding</p><h3>The moments between.</h3></div><span>View portraits</span></div>
            </Link>
          </article>
          {projects.slice(1).map((project) => (
            <article className={`work-entry work-entry--${project.slug}`} data-project={project.slug} key={project.slug}>
              <Link href={`/work/${project.slug}`} aria-label={`Explore ${project.title}, ${project.category}`}>
                <div className="work-image"><Image src={project.cover} alt={`${project.title} — ${project.category}`} fill sizes="(max-width: 760px) calc(100vw - 32px), 52vw" /><span className="work-medium">{project.film ? "Film" : "Four sessions"}</span></div>
                <div className="editorial-caption"><div><p>{project.category}</p><h3>{project.title}</h3></div><span>{project.film ? "Explore the film" : "View collection"}</span></div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="on-set" id="on-set" aria-labelledby="on-set-title">
        <div className="collection-heading"><p className="eyebrow">On set</p><h2 id="on-set-title">Behind <em>the frame.</em></h2><p>A production notebook, collected from the studio and the world outside.</p></div>
        <Link className="on-set-archive-link text-link" href="/on-set">Explore the production notebook</Link>
        <div className="on-set-grid">{onSet.map((moment) => (
          <Link href={moment.href} key={moment.title}>
            <div className="on-set-image"><Image src={moment.image} alt={moment.title} fill sizes="(max-width: 760px) 100vw, 30vw" /></div>
            <h3>{moment.title}</h3><p>{moment.detail}</p><span className="source-label">Explore the notebook</span>
          </Link>
        ))}</div>
      </section>

      <section className="about-showcase" id="about" aria-labelledby="about-title">
        <Image src="/images/about-background.webp" alt="Frebruk on location" fill sizes="100vw" className="about-background" />
        <div className="about-shade" />
        <p className="about-role">Photographer / Filmmaker<br />Baltimore, Maryland</p>
        <div className="about-inset">
          <Image src="/images/about-portrait.webp" alt="Cinematic portrait of Frebruk" fill sizes="(max-width: 760px) 70vw, 38vw" />
        </div>
        <h2 id="about-title">FREBRUK</h2>
        <div className="about-copy">
          <p>Frebruk is a Baltimore-based photographer and filmmaker with a quiet, instinctive approach to visual storytelling.</p>
          <p>Working across portraiture, editorial, sport, campaign, and moving image, he builds photographs around honest expression, thoughtful light, and the tension between memory and motion. His aim is simple: make images you can feel before you understand.</p>
        </div>
        <a className="about-scroll" href="#services" aria-label="Explore services">↓</a>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="collection-heading"><p className="eyebrow">Working together</p><h2 id="services-title">An idea.<br /><em>A point of view.</em></h2><p>Based in Baltimore. Available for projects nearby and further afield.</p></div>
        <div className="services-grid">
          <article><h3>Portraits</h3><p>Personal portraits, graduation, and creative sessions shaped around the person in front of the camera.</p><a href="#contact">Discuss a portrait session</a></article>
          <article><h3>Commercial &amp; editorial</h3><p>Photography for brands, artists, and publications, with an eye for atmosphere, texture, and honest expression.</p><a href="#contact">Discuss a photography project</a></article>
          <article><h3>Moving image</h3><p>Direction, cinematography, editing, and color for films, music videos, and campaigns. The scope comes together around your brief.</p><a href="#contact">Discuss a film</a></article>
        </div>
      </section>

      <section className="closing-frame" aria-label="A final portrait">
        <figure><div className="closing-frame-image"><Image src="/images/blue-gold-jeans.jpg" alt="A footballer and the long shadows of late afternoon on the pitch" fill sizes="(max-width: 760px) calc(100vw - 32px), 720px" /></div><figcaption>Light is the language. People are the story.</figcaption></figure>
      </section>

      <footer id="contact">
        <p className="eyebrow">Let&apos;s make something</p>
        <h2>Have a story<br />worth <em>feeling?</em></h2>
        <div className="contact-layout"><div><p className="contact-intro">Tell me what you have in mind. Share the idea, a possible date, and where you’d like to make it happen.</p><a className="contact-link" href={`mailto:${contactEmail}`}>{contactEmail}</a><a className="contact-instagram" href="https://www.instagram.com/freb.fotos/" target="_blank" rel="noreferrer">Or start a conversation on Instagram</a></div><InquiryForm /></div>
        <div className="footer-bottom">
          <p>Frebruk Mikre<br />Photographer &amp; Filmmaker</p>
          <div><a href="https://www.instagram.com/freb.fotos/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="#top">Back to top ↑</a></div>
          <p>© 2026<br />All images by Frebruk</p>
        </div>
      </footer>
    </main>
    </>
  );
}
