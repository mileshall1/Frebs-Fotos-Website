"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type GalleryImage = { src: string; alt: string; source?: string; caption?: string; aspectRatio?: number };

export default function ProjectGallery({ images, title }: { images: GalleryImage[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = active !== null;
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previous = document.body.style.overflow;
    const handleKey = (event: KeyboardEvent) => {
      const direction = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (!direction) return;
      event.preventDefault();
      setActive((current) => current === null ? null : (current + direction + images.length) % images.length);
    };
    const handleBackdrop = (event: MouseEvent) => { if (event.target === dialog) setActive(null); };
    dialog.addEventListener("keydown", handleKey);
    dialog.addEventListener("click", handleBackdrop);
    if (open) {
      dialog.showModal();
      dialog.querySelector<HTMLButtonElement>(".gallery-close")?.focus();
      document.body.style.overflow = "hidden";
    } else if (dialog.open) dialog.close();
    return () => {
      document.body.style.overflow = previous;
      dialog.removeEventListener("keydown", handleKey);
      dialog.removeEventListener("click", handleBackdrop);
    };
  }, [open, images.length]);
  const move = (direction: number) => setActive((current) => current === null ? null : (current + direction + images.length) % images.length);
  return (
    <>
      <div className="detail-gallery">
        {images.map((image, index) => (
          <figure key={image.src}>
            <button type="button" className="gallery-thumbnail" style={image.aspectRatio ? { aspectRatio: image.aspectRatio } : undefined} onClick={() => setActive(index)} aria-haspopup="dialog" aria-label={`Enlarge ${image.alt}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) calc(100vw - 32px), 44vw" />
              <span className="enlarge-label" aria-hidden="true">View frame</span>
            </button>
            <figcaption>{image.caption ?? image.alt}</figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialogRef} className="gallery-dialog" aria-label={`${title} image viewer`} onCancel={() => setActive(null)} onClose={() => setActive(null)}>
        {active !== null && <div className="gallery-dialog-content">
          <div className="gallery-dialog-toolbar"><p aria-live="polite">{active + 1} / {images.length}</p><div className="gallery-dialog-actions">{images[active].source && <a href={images[active].source} target="_blank" rel="noreferrer">View source</a>}<button type="button" onClick={() => setActive(null)} className="gallery-close" aria-label="Close image viewer">Close</button></div></div>
          <div className="gallery-dialog-image"><Image src={images[active].src} alt={images[active].alt} fill sizes="100vw" /></div>
          <div className="gallery-dialog-footer"><button type="button" onClick={() => move(-1)}>Previous</button><p>{images[active].caption ?? images[active].alt}</p><button type="button" onClick={() => move(1)}>Next</button></div>
        </div>}
      </dialog>
    </>
  );
}
