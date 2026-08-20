import Image from "next/image";

const projects = [
  {
    title: "Ahmad",
    type: "Portrait / Campaign",
    year: "2026",
    image: "/images/portrait-02.jpg",
    className: "project-tall project-major",
  },
  {
    title: "Natalia",
    type: "Portrait / Graduation",
    year: "2026",
    image: "/images/serenity-01.jpg",
    className: "project-tall project-minor",
  },
  {
    title: "Serenity",
    type: "Editorial Portrait",
    year: "2026",
    image: "/images/grad-01.jpg",
    className: "project-tall project-minor",
  },
  {
    title: "After Hours",
    type: "Fashion Film",
    year: "2026",
    image: "/images/nocturne.jpg",
    className: "project-wide project-major",
  },
  {
    title: "Fight or Flight",
    type: "Portrait / Editorial",
    year: "2026",
    image: "/images/portrait-01.jpg",
    className: "project-tall project-minor",
  },
  {
    title: "Touchline",
    type: "Sport / Personal",
    year: "2026",
    image: "/images/touchline-hires.jpg",
    className: "project-square project-minor",
  },
  {
    title: "No. 02",
    type: "Moving Image",
    year: "2026",
    image: "/images/editorial-hires.jpg",
    className: "project-square project-minor",
  },
  {
    title: "Serenity II",
    type: "Portrait / Graduation",
    year: "2026",
    image: "/images/grad-02.jpg",
    className: "project-tall project-major",
  },
  {
    title: "The Graduate",
    type: "Commission",
    year: "2026",
    image: "/images/serenity-02.jpg",
    className: "project-tall project-minor",
  },
  {
    title: "Cologne Spec",
    type: "Campaign Study",
    year: "2025",
    image: "/images/portrait.jpg",
    className: "project-square project-minor",
  },
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
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="ig-link" href="https://www.instagram.com/freb.fotos/" target="_blank" rel="noreferrer">
          IG ↗
        </a>
      </header>

      <section className="hero" id="top">
        <Image
          src="/images/portrait-02.jpg"
          alt="Ahmad photographed by Frebruk"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <p className="hero-kicker">Independent image maker / 2026</p>
        <h1 aria-label="Frebruk">FREBRUK</h1>
        <p className="hero-tagline">Visual emotion,<br />made tangible.</p>
        <a className="hero-cta" href="#work"><span>Explore selected work</span><span>↓</span></a>
        <p className="hero-location">Washington, D.C. / Available worldwide</p>
        <div className="hero-index" aria-hidden="true">
          <span>Portrait</span><span>Editorial</span><span>Campaign</span><span>Motion</span>
        </div>
      </section>

      <section className="intro" id="about">
        <p className="eyebrow">01 / Point of view</p>
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
          <p className="eyebrow">02 / Selected work</p>
          <h2>Stories in<br /><em>stillness.</em></h2>
          <p className="work-note">A selection of commissioned and personal work, 2025—2026.</p>
        </div>

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
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-track" aria-hidden="true">
          <span>VISUAL EMOTION · VISUAL EMOTION · VISUAL EMOTION · </span>
          <span>VISUAL EMOTION · VISUAL EMOTION · VISUAL EMOTION · </span>
        </div>
        <div className="statement-inner">
          <p className="eyebrow">03 / Practice</p>
          <p>Light is the language.<br />People are the story.</p>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow">04 / Let&apos;s make something</p>
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
