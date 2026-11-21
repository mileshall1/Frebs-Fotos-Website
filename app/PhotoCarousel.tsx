"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string; source?: string; href?: string };

export default function PhotoCarousel({ images }: { images: Photo[] }) {
  const [paused, setPaused] = useState(false);
  const reelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation = 0;
    let previousTime = 0;
    let position = reel.scrollLeft;
    let visible = false;
    let pointer = false;
    let resumeAt = 0;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(reel);
    const interact = () => { resumeAt = performance.now() + 4000; position = reel.scrollLeft; };
    const down = () => { pointer = true; interact(); };
    const up = () => { pointer = false; interact(); };
    reel.addEventListener("wheel", interact, { passive: true });
    reel.addEventListener("touchmove", interact, { passive: true });
    reel.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    function tick(time: number) {
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 0;
      previousTime = time;
      const hovering = window.matchMedia("(hover: hover)").matches && reel!.matches(":hover");
      const focused = reel!.contains(document.activeElement);
      const width = reel!.firstElementChild?.firstElementChild?.getBoundingClientRect().width ?? 0;
      if (!paused && !preference.matches && visible && !document.hidden && !hovering && !focused && !pointer && time > resumeAt && width > 0) {
        position = (position + elapsed * 0.035) % width;
        reel!.scrollLeft = position;
      } else position = reel!.scrollLeft;
      animation = requestAnimationFrame(tick);
    }
    animation = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animation);
      observer.disconnect();
      reel.removeEventListener("wheel", interact);
      reel.removeEventListener("touchmove", interact);
      reel.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [paused]);
  return <>
    <button type="button" className="carousel-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-controls="portrait-carousel">{paused ? "Play carousel" : "Pause carousel"}</button>
    <div ref={reelRef} id="portrait-carousel" className="carousel carousel-auto" role="region" aria-roledescription="carousel" aria-label="Photography from @freb.fotos — swipe or follow a portrait link">
      <div className="carousel-track">
        {[0, 1].map((copy) => <div className={`carousel-group${copy ? " carousel-copy" : ""}`} key={copy} aria-hidden={copy ? true : undefined}>
          {images.map((image) => <a className="carousel-slide" key={image.src} href={image.href ?? image.source} target={image.href ? undefined : "_blank"} rel={image.href ? undefined : "noreferrer"} tabIndex={copy ? -1 : undefined} aria-label={`${image.alt} — ${image.href ? "explore portraits" : "view source"}`}>
            <Image src={image.src} alt={copy ? "" : image.alt} fill sizes="(max-width: 760px) 82vw, (max-width: 1100px) 44vw, 30vw" />
          </a>)}
        </div>)}
      </div>
    </div>
  </>;
}
