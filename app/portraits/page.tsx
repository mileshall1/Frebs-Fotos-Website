import type { Metadata } from "next";
import Link from "next/link";
import ProjectGallery from "../ProjectGallery";
import { weddingImages } from "../data/wedding";
import { portraits } from "../data/projects";
import { locationPortraits, visualStudies } from "../data/highlights";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "Portraits — Freb’s Fotos",
  description: "Wedding, beauty, graduation, and personal portrait studies by Frebruk Mikre. Explore the collections.",
  alternates: { canonical: "/portraits" },
  openGraph: { title: "Portraits — Freb’s Fotos", url: `${siteUrl}/portraits`, images: ["/social-preview.jpg"] },
  twitter: { card: "summary_large_image", title: "Portraits — Freb’s Fotos", images: ["/social-preview.jpg"] },
};

const collections = [
  { id: "wedding", label: "Wedding", title: "The moments between.", description: "Selects from a recent wedding Frebruk assisted on. Published November 19, 2026; original film borders preserved.", images: weddingImages },
  { id: "beauty", label: "Beauty", title: "Light, up close.", description: "A daylight beauty portrait and a wider glimpse into the world of Lumina.", images: [portraits[0], { src: "/images/lumina-reflection.jpg", alt: "Lumina — sunlight caught in a curved reflection" }] },
  { id: "graduation", label: "Graduation", title: "A moment, kept.", description: "Milestones, anticipation, and the people at the center of it all.", images: [portraits[1], { src: "/images/portrait-02.jpg", alt: "Ahmad — a graduation portrait outside the school entrance" }, portraits[3], { src: "/images/grad-02.jpg", alt: "A graduation portrait on sunlit stone steps" }, portraits[5]] },
  { id: "on-location", label: "On location", title: "A little room to be.", description: "Garden portraits and a smile outdoors. New selections from the art and Film highlights.", images: locationPortraits },
  { id: "studies", label: "Personal studies", title: "Shape and shadow.", description: "Portraits, streets, and quiet scenes. Small studies in the character of light.", images: [portraits[2], portraits[4], ...visualStudies] },
];

export default function PortraitsPage() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <main id="main-content" className="project-page portrait-page">
      <header className="site-header project-header"><Link className="wordmark" href="/">FREBRUK</Link><nav aria-label="Portrait navigation"><a href="#beauty">Beauty</a><a href="#graduation">Graduation</a><a href="#studies">Studies</a></nav><Link className="ig-link" href="/#contact">Contact</Link></header>
      <section className="project-intro"><Link className="back-link" href="/#work">Back to selected work</Link><p className="eyebrow portrait-page-kicker">Portraiture / Frebruk Mikre</p><h1>People, in<br /><em>their light.</em></h1><p className="project-description">Weddings, beauty, milestones, and personal studies. A little room to see each person more closely.</p><div className="portrait-collection-links">{collections.map(({ id, label }) => <a href={`#${id}`} key={id}>{label}</a>)}</div></section>
      {collections.map((collection) => <section className="portrait-collection" id={collection.id} aria-labelledby={`${collection.id}-title`} key={collection.id}><div className="collection-heading"><p className="eyebrow">{collection.label}</p><h2 id={`${collection.id}-title`}>{collection.title}</h2><p>{collection.description}</p></div><ProjectGallery images={collection.images} title={collection.label} /></section>)}
      <footer className="project-footer"><p className="eyebrow">Your own moment</p><Link className="portrait-booking" href="/#contact">Let’s make your portrait.</Link><Link className="back-link" href="/#work">Back to selected work</Link></footer>
    </main>
  </>;
}
