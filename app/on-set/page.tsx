import type { Metadata } from "next";
import Link from "next/link";
import ProjectGallery from "../ProjectGallery";
import { productionCollections } from "../data/highlights";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {
  title: "On Set — Freb’s Fotos",
  description: "A production notebook by Frebruk Mikre. Studio setups, performance, and location work collected from his BTS highlight.",
  alternates: { canonical: "/on-set" },
  openGraph: { title: "On Set — Freb’s Fotos", url: `${siteUrl}/on-set`, images: ["/social-preview.jpg"] },
  twitter: { card: "summary_large_image", title: "On Set — Freb’s Fotos", images: ["/social-preview.jpg"] },
};

export default function OnSetPage() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <main className="project-page production-page" id="main-content">
      <header className="site-header project-header"><Link className="wordmark" href="/">FREBRUK</Link><nav aria-label="Production notebook navigation"><a href="#performance">Performance</a><a href="#studio">Studio</a><a href="#location">Location</a></nav><Link className="ig-link" href="/#contact">Contact</Link></header>
      <section className="project-intro"><Link className="back-link" href="/#on-set">Back to selected work</Link><p className="eyebrow portrait-page-kicker">On set / A production notebook</p><h1>Behind<br /><em>the frame.</em></h1><p className="project-description">Before the finished image: people, places, and the work of making something together.</p><p className="notebook-source">Collected from Frebruk’s <a href="https://www.instagram.com/stories/highlights/17951437932029976/" target="_blank" rel="noreferrer">BTS highlight</a>. Story collages retain their original composition.</p><div className="portrait-collection-links">{productionCollections.map((collection) => <a href={`#${collection.id}`} key={collection.id}>{collection.id === "location" ? "On location" : collection.id === "studio" ? "In the studio" : "Performance"}</a>)}</div></section>
      {productionCollections.map((collection) => <section className="production-collection" key={collection.id} id={collection.id} aria-labelledby={`${collection.id}-title`}><div className="collection-heading"><p className="eyebrow">{collection.id === "location" ? "On location" : collection.id}</p><h2 id={`${collection.id}-title`}>{collection.title}</h2><p>{collection.description}</p></div><ProjectGallery images={collection.images} title={collection.title} /></section>)}
      <footer className="project-footer"><p className="eyebrow">The next story</p><Link href="/#contact">Let’s make something.</Link><Link className="back-link" href="/#work">Back to selected work</Link></footer>
    </main>
  </>;
}
