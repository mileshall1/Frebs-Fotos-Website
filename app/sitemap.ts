import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { siteUrl } from "./lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, priority: 1 }, { url: `${siteUrl}/portraits`, priority: 0.8 }, { url: `${siteUrl}/on-set`, priority: 0.7 }, ...projects.map(({ slug }) => ({ url: `${siteUrl}/work/${slug}`, priority: 0.8 }))];
}
