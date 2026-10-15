"use client";

import { FC, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface Slide {
  src: string;
  alt: string;
}

const ProjectGallery: FC<{ slides: Slide[] }> = ({ slides }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  const open = (i: number) => {
    setOpenIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const prev = () => setOpenIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setOpenIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  const [first, ...rest] = slides;
  const current = slides[openIndex];

  return (
    <>
      {/* Capture principale */}
      <figure className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => open(0)}
          aria-label={`Agrandir : ${first.alt}`}
          className="group relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-[14px] border border-[#E0E0DA] bg-[#ECECE7]"
        >
          <Image
            src={first.src}
            alt={first.alt}
            fill
            priority
            sizes="(min-width: 1120px) 1072px, 100vw"
            className="object-cover object-top transition duration-300 group-hover:scale-[1.01]"
          />
        </button>
        <figcaption className="text-sm text-[#6A707C]">{first.alt}</figcaption>
      </figure>

      {/* Les autres captures en grille */}
      {rest.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((slide, i) => (
            <figure key={slide.src} className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => open(i + 1)}
                aria-label={`Agrandir : ${slide.alt}`}
                className="group relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-[10px] border border-[#E0E0DA] bg-[#ECECE7]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                />
              </button>
              <figcaption className="text-sm text-[#6A707C]">{slide.alt}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {/* Agrandissement */}
      <dialog
        ref={dialogRef}
        aria-label={current.alt}
        onClick={(e) => e.target === dialogRef.current && close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
        className="w-[min(1400px,95vw)] max-w-none bg-transparent p-0 backdrop:bg-black/85"
      >
        <div className="flex flex-col gap-4">
          <Image
            src={current.src}
            alt={current.alt}
            width={1900}
            height={860}
            className="max-h-[80vh] w-full rounded-xl object-contain"
          />
          <div className="flex items-center justify-between gap-4 text-white">
            <p className="text-sm">
              {current.alt}
              <span className="ml-3 text-white/60">
                {openIndex + 1} / {slides.length}
              </span>
            </p>
            <div className="flex gap-2">
              {slides.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Capture précédente"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/25"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Capture suivante"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/25"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={close}
                aria-label="Fermer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#15171C]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProjectGallery;