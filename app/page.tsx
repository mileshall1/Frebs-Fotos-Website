import Image from "next/image";
import HeroVideo from "./HeroVideo";

const projects = [
  {
    title: "Ahmad",
    type: "Portrait / Campaign",
    year: "2026",
    image: "/images/portrait-02.jpg",
    className: "project-tall project-major",
    summary: "A portrait study shaped by direct gaze, quiet confidence, and sculpted natural light.",
    tags: ["Direction", "Portraiture", "Color"],
  },
  {
    title: "Natalia",
    type: "Portrait / Graduation",
    year: "2026",
    image: "/images/serenity-01.jpg",
    className: "project-tall project-minor",
    summary: "A graduation story photographed with warmth, softness, and a sense of becoming.",
    tags: ["Portraiture", "Graduation"],
  },
  {
    title: "Serenity",
    type: "Editorial Portrait",
    year: "2026",
    image: "/images/grad-01.jpg",
    className: "project-tall project-minor",
    summary: "Still, intimate frames built around gesture, texture, and the space between moments.",
    tags: ["Editorial", "Natural light"],
  },
  {
    title: "After Hours",
    type: "Fashion Film",
    year: "2026",
    image: "/images/nocturne.jpg",
    className: "project-wide project-major",
    summary: "A nocturnal fashion experiment moving between shadow, silhouette, and electric color.",
    tags: ["Film", "Fashion", "Edit"],
  },
  {
    title: "Fight or Flight",
    type: "Portrait / Editorial",
    year: "2026",
    image: "/images/portrait-01.jpg",
    className: "project-tall project-minor",
    summary: "An expressive portrait series balancing vulnerability with a harder editorial edge.",
    tags: ["Portraiture", "Editorial"],
  },
  {
    title: "Touchline",
    type: "Sport / Personal",
    year: "2026",
    image: "/images/touchline-hires.jpg",
    className: "project-square project-minor",
    summary: "Movement, anticipation, and human detail observed from the edge of the game.",
    tags: ["Sport", "Documentary"],
  },
  {
    title: "No. 02",
    type: "Moving Image",
    year: "2026",
    image: "/images/editorial-hires.jpg",
    className: "project-square project-minor",
    summary: "A short visual exercise where rhythm, framing, and atmosphere lead the narrative.",
    tags: ["Motion", "Direction"],
  },
  {
    title: "Serenity II",
    type: "Portrait / Graduation",
    year: "2026",
    image: "/images/grad-02.jpg",
    className: "project-tall project-major",
    summary: "A continuation of the graduation series, carried by sunlight and honest expression.",
    tags: ["Portraiture", "Commission"],
  },
  {
    title: "The Graduate",
    type: "Commission",
    year: "2026",
    image: "/images/serenity-02.jpg",
    className: "project-tall project-minor",
    summary: "A personal milestone translated into relaxed, timeless portraiture.",
    tags: ["Graduation", "Lifestyle"],
  },
  {
    title: "Cologne Spec",
    type: "Campaign Study",
    year: "2025",
    image: "/images/portrait.jpg",
    className: "project-square project-minor",
    summary: "A fragrance-film study focused on tactile detail, restraint, and campaign pacing.",
    tags: ["Spec", "Product", "Film"],
  },
];

const carouselImages = [
  ["/images/serenity-01.jpg", "Natalia graduation portrait"],
  ["/images/portrait-02.jpg", "Ahmad editorial portrait"],
  ["/images/grad-01.jpg", "Serenity portrait"],
  ["/images/portrait-01.jpg", "Fight or Flight portrait"],
  ["/images/grad-02.jpg", "Graduation portrait in sunlight"],
  ["/images/serenity-02.jpg", "Natalia holding flowers"],
  ["/images/touchline-hires.jpg", "Football editorial"],
];

const films = [
  { title: "Cologne Spec", detail: "Spec Film · 01:04", image: "/images/film.jpg", href: "https://www.instagram.com/freb.fotos/reel/DcCZ7lrvqRU/" },
  { title: "Nocturne", detail: "Fashion Film · 00:24", image: "/images/nocturne.jpg", href: "https://www.instagram.com/freb.fotos/reel/DcCafihPYpT/" },
  { title: "Visual Study 01", detail: "Short Film · 00:18", image: "/images/editorial.jpg", href: "https://www.instagram.com/freb.fotos/reel/Dbv-2YWh7vs/" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Frebruk home">
          FREB<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#motion">Motion</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="ig-link" href="https://www.instagram.com/freb.fotos/" target="_blank" rel="noreferrer">
          IG ↗
        </a>
      </header>

      <section className="hero" id="top">
        <HeroVideo />
        <div className="hero-shade" />
        <div className="hero-text-mask" aria-hidden="true" />
        <p className="hero-kicker">Photographer · Filmmaker</p>
        <h1 aria-label="Freb's Fotos">FREB&apos;S FOTOS</h1>
        <p className="hero-tagline">Visual emotion,<br />made tangible.</p>
        <a className="hero-cta" href="#work"><span>Explore selected work</span><span>↓</span></a>
        <p className="hero-location">Washington, D.C. / Available worldwide</p>
      </section>

      <section className="photo-reel" aria-labelledby="photo-reel-title">
        <div className="photo-reel-head">
          <p className="eyebrow">01 / Recent frames</p>
          <h2 id="photo-reel-title">In the <em>viewfinder.</em></h2>
          <p>Drag or swipe to explore ↔</p>
        </div>
        <div className="carousel" role="region" aria-label="Automatically moving Frebruk photography carousel" tabIndex={0}>
          <div className="carousel-track">
            {[...carouselImages, ...carouselImages].map(([src, alt], index) => {
              const position = index % carouselImages.length;
              const duplicate = index >= carouselImages.length;
              return (
                <figure className="carousel-slide" key={`${src}-${index}`} aria-hidden={duplicate || undefined}>
                  <Image src={src} alt={duplicate ? "" : alt} fill sizes="(max-width: 760px) 78vw, 31vw" />
                  <figcaption>{String(position + 1).padStart(2, "0")} / {String(carouselImages.length).padStart(2, "0")}</figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <section className="intro" id="about">
        <p className="eyebrow">02 / Point of view</p>
        <p className="intro-copy">
          I make images that live somewhere between <em>memory</em> and motion—
          honest portraits, quiet tension, and stories you can feel before you understand.
        </p>
        <div className="intro-meta">
          <span>Portrait</span><span>Editorial</span><span>Campaign</span><span>Film</span>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="eyebrow">03 / Selected work</p>
          <h2>Stories in<br /><em>stillness.</em></h2>
          <p className="work-note">A selection of commissioned and personal work, 2025—2026.</p>
        </div>

        <div className="work-overview" aria-label="Portfolio overview">
          <p><span>10</span>Selected stories</p>
          <p><span>04</span>Disciplines</p>
          <p><span>02</span>Years in frame</p>
          <p><span>DC</span>Based / Worldwide</p>
        </div>

        <article className="featured-project">
          <div className="featured-image">
            <Image src="/images/film-still-hires.jpg" alt="Status Update visual study film still" fill sizes="100vw" />
            <span className="featured-label">Featured study / 2026</span>
          </div>
          <div className="featured-copy">
            <p className="eyebrow">Portrait · Motion · Self-directed</p>
            <h3>Status<br /><em>Update.</em></h3>
            <p className="featured-description">A self-portrait in motion—ordinary spaces, close observation, and the tension between how life feels and how it appears.</p>
            <div className="featured-credits"><span>Direction / Frebruk</span><span>Camera / Frebruk</span><span>Edit / Frebruk</span></div>
            <a href="https://www.instagram.com/p/DOZ9aydjpOm/" target="_blank" rel="noreferrer">View the film on Instagram <span>↗</span></a>
          </div>
        </article>

        <div className="projects">
          {projects.map((project, index) => (
            <article className={`project ${project.className}`} key={project.title}>
              <a href="#contact" aria-label={`${project.title}, ${project.type}`}>
                <div className="project-image-wrap">
                  <Image src={project.image} alt={`${project.title} — ${project.type}`} fill sizes="(max-width: 760px) 100vw, 50vw" className="project-image" />
                  <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="view-project">View project ↗</span>
                </div>
                <div className="project-caption">
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                  <p>{project.year}</p>
                </div>
                <p className="project-summary">{project.summary}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="motion" id="motion">
        <div className="motion-heading">
          <p className="eyebrow">04 / Moving image</p>
          <h2>Stories that<br /><em>move.</em></h2>
          <p>Direction, camera, edit, and visual experiments.</p>
        </div>
        <div className="film-list">
          {films.map((film, index) => (
            <a className="film" href={film.href} target="_blank" rel="noreferrer" key={film.title}>
              <div className="film-still">
                <Image src={film.image} alt={`${film.title} film still`} fill sizes="(max-width: 760px) 100vw, 33vw" />
                <span className="play" aria-hidden="true">▶</span>
              </div>
              <div className="film-meta"><span>{String(index + 1).padStart(2, "0")}</span><h3>{film.title}</h3><p>{film.detail}</p><span>Watch ↗</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-track" aria-hidden="true">
          <span>VISUAL EMOTION · VISUAL EMOTION · VISUAL EMOTION · </span>
          <span>VISUAL EMOTION · VISUAL EMOTION · VISUAL EMOTION · </span>
        </div>
        <div className="statement-inner">
          <p className="eyebrow">05 / Practice</p>
          <p>Light is the language.<br />People are the story.</p>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow">06 / Let&apos;s make something</p>
        <h2>Have a story<br />worth <em>feeling?</em></h2>
        <a className="contact-link" href="mailto:hello@frebrukmikre.com">hello@frebrukmikre.com <span>↗</span></a>
        <div className="footer-bottom">
          <p>Frebruk Mikre<br />Photographer &amp; Filmmaker</p>
          <div><a href="https://www.instagram.com/freb.fotos/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="#top">Back to top ↑</a></div>
          <p>© 2026<br />All images by Frebruk</p>
        </div>
      </footer>
    </main>
  );
}
