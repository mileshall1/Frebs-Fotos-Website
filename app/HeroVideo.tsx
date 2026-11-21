"use client";

import { useEffect, useRef, useState } from "react";

// Keep this playlist limited to Frebruk's original self-portrait clips.
const heroVideos = ["/hero-01.mp4", "/hero-03.mp4", "/hero-04.mp4"];

export default function HeroVideo() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [paused, setPaused] = useState(true);
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const errors = useRef(0);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPaused(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let visible = true;
    const update = () => {
      if (paused || !visible || document.hidden) video.pause();
      else video.play().catch(() => setPaused(true));
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(video);
    document.addEventListener("visibilitychange", update);
    update();
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, [activeVideo, paused]);

  return <>
    <div className="hero-film"><video ref={videoRef} key={heroVideos[activeVideo]} className="hero-video" muted playsInline preload="metadata" poster="/images/hero-poster.jpg" aria-hidden="true"
      onPlaying={() => { errors.current = 0; }}
      onEnded={() => setActiveVideo((current) => (current + 1) % heroVideos.length)}
      onError={() => { errors.current += 1; if (errors.current >= heroVideos.length) { setFailed(true); setPaused(true); } else setActiveVideo((current) => (current + 1) % heroVideos.length); }}>
      <source src={heroVideos[activeVideo]} type="video/mp4" />
    </video></div>
    {!failed && <button className="hero-video-toggle" type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? "Play film" : "Pause film"}</button>}
  </>;
}
