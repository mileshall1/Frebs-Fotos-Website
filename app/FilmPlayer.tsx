"use client";

import { useState } from "react";
import Image from "next/image";

type Props = { title: string; poster: string; href: string; youtubeId?: string };

export default function FilmPlayer({ title, poster, href, youtubeId }: Props) {
  const [playing, setPlaying] = useState(false);
  const embed = youtubeId
    ? `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`
    : `${href.replace(/\/$/, "")}/embed/`;
  return (
    <div className="project-film">
      <div className={`project-player${playing && !youtubeId ? " instagram-player" : ""}`}>
        {playing ? (
          <iframe src={embed} title={`${title} film`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        ) : (
          <button type="button" className="film-launch" onClick={() => setPlaying(true)} aria-label={`Play ${title}`}>
            <Image src={poster} alt={`${title} film poster`} fill sizes="(max-width: 760px) 100vw, 90vw" />
            <span><span aria-hidden="true">▶</span> Watch film</span>
          </button>
        )}
      </div>
      <a className="film-source" href={href} target="_blank" rel="noreferrer">Watch on {youtubeId ? "YouTube" : "Instagram"}</a>
    </div>
  );
}
