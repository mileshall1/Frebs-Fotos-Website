"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const heroVideos = [
  "/status-background.mp4",
  "/hero-01.mp4",
  "/hero-03.mp4",
  "/hero-04.mp4",
];

function randomVideo(excluding?: number) {
  const choices = heroVideos.map((_, index) => index).filter((index) => index !== excluding);
  return choices[Math.floor(Math.random() * choices.length)];
}

export default function HeroVideo() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ambientVideoRef = useRef<HTMLVideoElement>(null);

  const playAnother = useCallback(() => {
    setActiveVideo((current) => randomVideo(current));
  }, []);

  useEffect(() => {
    setActiveVideo(randomVideo());
  }, []);

  useEffect(() => {
    videoRef.current?.play().catch(() => undefined);
    ambientVideoRef.current?.play().catch(() => undefined);
  }, [activeVideo]);

  return (
    <>
      <video
        ref={ambientVideoRef}
        key={`ambient-${heroVideos[activeVideo]}`}
        className="hero-video hero-video--ambient"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={heroVideos[activeVideo]} type="video/mp4" />
      </video>
      <video
        ref={videoRef}
        key={`primary-${heroVideos[activeVideo]}`}
        className="hero-video hero-video--primary"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/images/profile.jpg"
        aria-hidden="true"
        onEnded={playAnother}
        onError={playAnother}
      >
        <source src={heroVideos[activeVideo]} type="video/mp4" />
      </video>
    </>
  );
}
