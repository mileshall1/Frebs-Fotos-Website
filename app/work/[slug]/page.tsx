import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "../../lib/site";
import { notFound } from "next/navigation";
import { projects, nnexusSessions } from "../../data/projects";
import ProjectGallery from "../../ProjectGallery";
import FilmPlayer from "../../FilmPlayer";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  return { title: project ? `${project.title} — Freb’s Fotos` : "Project not found", description: project?.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { title: project ? `${project.title} — Freb’s Fotos` : "Project not found", description: project?.description, url: `${siteUrl}/work/${slug}`, images: [{ url: "/social-preview.jpg", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", images: ["/social-preview.jpg"] } };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <><a className="skip-link" href="#main-content">Skip to content</a><main id="main-content" className="project-page">
    <header className="site-header project-header"><Link className="wordmark" href="/">FREBRUK</Link><nav aria-label="Project navigation"><Link href="/#work">All work</Link>{project.film && <a href="#film">Film</a>}<a href="#frames">{slug === "nnexus" ? "Sessions" : "Frames"}</a><a href="#credits">Credits</a></nav><Link className="ig-link" href="/#contact">Contact</Link></header>
    <section className="project-intro">
      <Link className="back-link" href="/#work">Back to selected work</Link>
      <div className="project-title-row"><div><p className="eyebrow">{project.category} / {project.year}</p><h1>{project.title}</h1></div><p className="project-role">{project.role}</p></div>
      <p className="project-description">{project.description}</p>
    </section>
    <section className="project-context" aria-label="Project context"><div><p className="eyebrow">The project</p><p>{project.brief}</p></div><div><p className="eyebrow">The approach</p><p>{project.approach}</p></div></section>
    {project.film && <section className="project-film-section" id="film" aria-label={`${project.title} film`}><FilmPlayer title={project.title} poster={project.cover} {...project.film} />{slug === "igazi" && <p className="companion-link"><a href="https://www.youtube.com/watch?v=Yk5BjgXHPKU" target="_blank" rel="noreferrer">Also watch the Igazi trailer on YouTube</a></p>}</section>}
    {slug === "nnexus" && <section className="session-section" id="frames" aria-labelledby="sessions-title"><div className="collection-heading"><p className="eyebrow">The collection</p><h2 id="sessions-title">Four sessions.<br /><em>One community.</em></h2></div><div className="session-grid">{nnexusSessions.map((session) => <article key={session.title}><Image src={session.image} alt={`NNEXUS session with ${session.title}`} width={720} height={480} /><h3>{session.title}</h3><p>{session.detail}</p><a href={session.href} target="_blank" rel="noreferrer">Watch the session on Instagram</a></article>)}</div></section>}
    {slug !== "nnexus" && <section className="project-frames-section" id="frames" aria-labelledby="frames-title"><div className="collection-heading"><p className="eyebrow">{slug === "igazi" ? "Trailer frames & photographs" : "Frames & photographs"}</p><h2 id="frames-title">A closer <em>look.</em></h2><p>{slug === "igazi" ? "Trailer frames and photographs from the Igazi highlight. Select an image to view it in full." : "Select an image to view it in full. Use the arrow keys to explore."}</p></div><ProjectGallery images={project.images} title={project.title} /></section>}
    <section className="project-credits" id="credits"><div><h2>Credits</h2>{slug === "igazi" && <p className="credit-note">The source identifies the collaborators below; specific crew roles aren’t listed.</p>}</div><dl>{project.credits.map((credit) => <div key={`${credit.label}-${credit.value}`}><dt>{credit.label}</dt><dd>{credit.href ? <a href={credit.href} target="_blank" rel="noreferrer">{credit.value}</a> : credit.value}</dd></div>)}</dl></section>
    <footer className="project-footer"><Link className="project-inquiry" href="/#contact">Have a project in mind? Discuss a shoot</Link><p className="eyebrow">Next project</p><a href={`/work/${next.slug}`}>{next.title}</a><Link className="back-link" href="/#work">All selected work</Link></footer>
  </main></>;
}
