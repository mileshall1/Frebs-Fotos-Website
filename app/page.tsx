import Image from "next/image";
import HeroVideo from "./HeroVideo";

const projects = [
  {
    title: "Status Update",
    type: "Self-directed Portrait Film",
    year: "2026",
    image: "/images/status-02.jpg",
    href: "https://www.instagram.com/p/DOZ9aydjpOm/",
  },
  {
    title: "Touchline",
    type: "Sport / Personal",
    year: "2026",
    image: "/images/ig-touchline-2026.jpg",
    href: "https://www.instagram.com/freb.fotos/p/DZxaumZjvU-/",
  },
  {
    title: "Natalia",
    type: "Graduation Portrait",
    year: "2026",
    image: "/images/ig-natalia-2026.jpg",
    href: "https://www.instagram.com/freb.fotos/p/DYAgfqEDxnK/",
  },
  {
    title: "Serenity",
    type: "Graduation Editorial",
    year: "2026",
    image: "/images/ig-serenity-2026.jpg",
    href: "https://www.instagram.com/freb.fotos/p/DZV3XVmD7IS/",
  },
  {
    title: "Ahmad",
    type: "Graduation Portrait",
    year: "2026",
    image: "/images/ig-ahmad-2026.jpg",
    href: "https://www.instagram.com/freb.fotos/p/DYx-YT5jj8I/",
  },
  {
    title: "Fight or Flight",
    type: "Portrait / Editorial",
    year: "2026",
    image: "/images/portrait-01.jpg",
    href: "https://www.instagram.com/freb.fotos/",
  },
  {
    title: "After Hours",
    type: "Fashion Film",
    year: "2026",
    image: "/images/nocturne.jpg",
    href: "https://www.instagram.com/freb.fotos/reel/DcCafihPYpT/",
  },
  {
    title: "Street Study",
    type: "Documentary / Personal",
    year: "2026",
    image: "/images/street.jpg",
    href: "https://www.instagram.com/freb.fotos/",
  },
  {
    title: "UA Spec",
    type: "Sport / Campaign Study",
    year: "2026",
    image: "/images/ua.jpg",
    href: "https://www.instagram.com/freb.fotos/",
  },
  {
    title: "Cologne Spec",
    type: "Fragrance / Spec Film",
    year: "2026",
    image: "/images/film.jpg",
    href: "https://www.instagram.com/freb.fotos/reel/DcCZ7lrvqRU/",
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
          FREBRUK
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
        <h1 aria-label="Freb's Fotos"><span>FREB&apos;S</span><span>FOTOS</span></h1>
        <p className="hero-tagline">Visual emotion,<br />made tangible.</p>
        <a className="hero-cta" href="#work"><span>Explore selected work</span><span>↓</span></a>
        <p className="hero-location">Baltimore, Maryland / Available worldwide</p>
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

      <section className="about-showcase" id="about" aria-labelledby="about-title">
        <Image src="/images/status-02.jpg" alt="Frebruk on location" fill sizes="100vw" className="about-background" />
        <div className="about-shade" />
        <p className="about-role">Photographer / Filmmaker<br />Baltimore, Maryland</p>
        <div className="about-inset">
          <Image src="/images/status-01.jpg" alt="Cinematic portrait of Frebruk" fill sizes="(max-width: 760px) 70vw, 38vw" />
        </div>
        <h2 id="about-title">FREBRUK</h2>
        <div className="about-copy">
          <p>Frebruk is a Baltimore-based photographer and filmmaker with a quiet, instinctive approach to visual storytelling.</p>
          <p>Working across portraiture, editorial, sport, campaign, and moving image, he builds photographs around honest expression, thoughtful light, and the tension between memory and motion. His aim is simple: make images you can feel before you understand.</p>
        </div>
        <a className="about-scroll" href="#work" aria-label="Continue to selected work">↓</a>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <div className="work-period"><p>2025—Now</p><p>Selected photography<br />and moving image</p></div>
          <h2>WORK</h2>
          <p className="work-note">Scroll to explore ↓</p>
        </div>

        <div className="work-list">
          {projects.map((project, index) => (
            <article className="work-entry" key={project.title}>
              <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title}, ${project.type}`}>
                <div className="work-image">
                  <Image src={project.image} alt={`${project.title} — ${project.type}`} fill sizes="(max-width: 760px) 100vw, 96vw" />
                </div>
                <div className="work-caption">
                  <p>{String(index + 1).padStart(2, "0")}</p>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                  <p>{project.year} ↗</p>
                </div>
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
