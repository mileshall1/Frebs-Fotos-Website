import type { GalleryImage } from "../ProjectGallery";
import { armaniHighlights, igaziHighlights, uaHighlights, highlightImages } from "./highlights";

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  description: string;
  role: string;
  brief: string;
  approach: string;
  credits: { label: string; value: string; href?: string }[];
  film?: { href: string; youtubeId?: string };
  images: GalleryImage[];
};

export const nnexusSessions = [
  { title: "Teabee", image: "/images/nnexus-teabee.jpg", href: "https://www.instagram.com/p/DfaleP0mV6M/", detail: "Art, business, and the creative process." },
  { title: "Njinjoh", image: "/images/nnexus-njinjoh.jpg", href: "https://www.instagram.com/p/DfIdFjLGTXo/", detail: "Experimentation, structure, refinement, and play." },
  { title: "Psmoov", image: "/images/nnexus-psmoov.jpg", href: "https://www.instagram.com/p/De2Y5h2mb98/", detail: "Inside the NNEXUS creative community." },
  { title: "Wildchild", image: "/images/nnexus-wildchild.jpg", href: "https://www.instagram.com/p/DexMr4FmefZ/", detail: "An experience is a journey." },
];

export const projects: Project[] = [
  {
    slug: "armani", title: "Stronger with You", category: "Emporio Armani / Spec campaign", year: "2026",
    cover: "/images/armani-spec.jpg",
    description: "An independently produced spec campaign for Emporio Armani’s Stronger with You Intensely. A study of light, texture, and presence, told through the director’s cut and selected frames.",
    brief: "An independent spec study of Emporio Armani’s Stronger with You Intensely fragrance.",
    approach: "Warm light, tactile close-ups, and a restrained performance give the fragrance a visual world. Explore the director’s cut alongside selected frames.",
    role: "Director · Director of Photography · Editor",
    credits: [
      { label: "Director / DP / Editor", value: "Frebruk Mikre" },
      { label: "Producer / Grip", value: "@eny.with.a.cam", href: "https://www.instagram.com/eny.with.a.cam/" },
      { label: "Gaffer / Grip / Camera", value: "@haiyuun__", href: "https://www.instagram.com/haiyuun__/" },
      { label: "Producer", value: "@benslenses_", href: "https://www.instagram.com/benslenses_/" },
      { label: "Talent", value: "@nyheara", href: "https://www.instagram.com/nyheara/" },
    ],
    film: { youtubeId: "RXlD5zKnSOQ", href: "https://www.youtube.com/watch?v=RXlD5zKnSOQ" },
    images: [...Array.from({ length: 6 }, (_, i) => ({ src: `/images/armani-frame-${i + 1}.jpg`, alt: `Stronger with You — ${["gold branches in amber light", "a rooftop portrait in warm daylight", "a white shirt against the city skyline", "a hand across the shoulder", "fragrance typography in amber", "the fragrance held to camera"][i]}` })), ...armaniHighlights],
  },
  {
    slug: "igazi", title: "Igazi", category: "Editorial film", year: "2025", cover: "/images/igazi-frame-1.jpg",
    description: "A story of remembrance and the music in our blood. Performance, shadow, and reflection come together in a personal moving-image piece.",
    brief: "A personal editorial film exploring remembrance and musical inheritance.",
    approach: "Shadow, mirrors, and performance carry the story. The gallery collects frames from the companion trailer; the original film post is linked above.",
    role: "A film shared by Frebruk Mikre and Enytime Enyday",
    credits: [
      { label: "Published by", value: "Frebruk Mikre / @freb.fotos", href: "https://www.instagram.com/freb.fotos/" },
      { label: "Collaborator", value: "@enytime.enyday", href: "https://www.instagram.com/enytime.enyday/" },
    ],
    film: { href: "https://www.instagram.com/p/DR7xMIsj6Cz/" },
    images: [...Array.from({ length: 6 }, (_, i) => ({ src: `/images/igazi-frame-${i + 1}.jpg`, alt: `Igazi — ${["a reflection in the darkness", "a portrait on stone steps", "a face outlined in white light", "a figure turning into blue light", "a performer beneath a single spotlight", "a quiet moment on a city street"][i]}` })), ...igaziHighlights],
  },
  {
    slug: "ua-spec", title: "The Future", category: "Under Armour / Spec campaign", year: "2025", cover: "/images/ua-frame-1.jpg",
    description: "An independently produced sports spec film, built around the athletes, the track, and the work that happens before the moment. Accompanied by production color studies and monochrome images from the campaign highlight.",
    brief: "An independently produced sports spec film centered on athletes and their preparation.",
    approach: "Trackside portraits and backlit movement bring attention to the people behind the performance. The gallery includes production color studies.",
    role: "Director of Photography · Editor · Colorist",
    credits: [
      { label: "DP / Editor / Colorist", value: "Frebruk Mikre" },
      { label: "Talent", value: "@royalmjsty", href: "https://www.instagram.com/royalmjsty/" },
      { label: "Talent", value: "@iamdc11", href: "https://www.instagram.com/iamdc11/" },
    ],
    film: { youtubeId: "yv_FIf1wVgA", href: "https://www.youtube.com/watch?v=yv_FIf1wVgA" },
    images: [...Array.from({ length: 4 }, (_, i) => ({ src: `/images/ua-frame-${i + 1}.jpg`, alt: ["The Future — athlete at the track", "The Future — a second athlete’s portrait", "The Future — backlit portrait at sunset", "The Future — track and field in monochrome"][i] })), ...uaHighlights],
  },
  {
    slug: "nnexus", title: "In the Lab", category: "NNEXUS / A collection of four sessions", year: "2026", cover: "/images/nnexus-njinjoh.jpg",
    description: "Four sessions inside the NNEXUS incubator labs. Artists and the creative community meet around sound, conversation, and the process of making work.",
    brief: "A collection of four sessions from the NNEXUS Incubator Labs creative community.",
    approach: "Keep each artist’s session available within a single collection, moving between conversation, sound, and the shared creative process.",
    role: "Selected work with NNEXUS",
    credits: [{ label: "Series", value: "NNEXUS Incubator Labs", href: "https://www.instagram.com/nnexus.co/" }, { label: "Featured artists", value: "Teabee · Njinjoh · Psmoov · Wildchild" }],
    images: nnexusSessions.map((session) => ({ src: session.image, alt: `In the Lab — ${session.title}`, source: session.href })),
  },
];

export const portraits: GalleryImage[] = [
  { src: "/images/lumina-frame-1.jpg", alt: "Lumina — beauty portrait in warm daylight", source: "https://www.instagram.com/essencess.inc/reel/DYsAWJAtzo6/" },
  { src: "/images/ig-ahmad-2026.jpg", alt: "Ahmad — graduation portrait", source: "https://www.instagram.com/p/DYx-YT5jj8I/" },
  { src: "/images/helios-portrait.jpg", alt: "Nyheara — Helios lens study", source: "https://www.instagram.com/p/DV6y3DCD_JT/" },
  { src: "/images/ig-natalia-2026.jpg", alt: "Natalia — graduation portrait", source: "https://www.instagram.com/p/DYAgfqEDxnK/" },
  { src: "/images/studio-portrait.jpg", alt: "A studio portrait — 8mm visual study", source: "https://www.instagram.com/reel/Dbv-2YWh7vs/" },
  { src: "/images/ig-serenity-2026.jpg", alt: "Serenity — graduation editorial", source: "https://www.instagram.com/p/DZV3XVmD7IS/" },
];

export const onSet = [
  { title: "In the performance", detail: "The people, the rooms, and the work around a performance", image: highlightImages["bts-performance-day-one"].src, href: "/on-set#performance" },
  { title: "Making the light", detail: "Studio setups, interviews, and the finishing process", image: highlightImages["bts-white-sweep"].src, href: "/on-set#studio" },
  { title: "Out in the world", detail: "Fields, rooftops, and the spaces that become a set", image: highlightImages["bts-last-light"].src, href: "/on-set#location" },
];
