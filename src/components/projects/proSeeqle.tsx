"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Contact from "../contact/contact";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/images/seeqle/Dashboard2.png",
  "/images/seeqle/campaign1.png",
  "/images/seeqle/campaigns2.png",
  "/images/seeqle/campaign3.png",
  "/images/seeqle/campaign4.png",
  "/images/seeqle/campaign5.png",
  "/images/seeqle/campaign5IA.png",
  "/images/seeqle/campaigns6.png",
  "/images/seeqle/settingProfil.png",
  "/images/seeqle/settingworkspace.png",
];

const ProSeeqle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 space-y-12 py-16 sm:py-20">
      {/* Carrousel responsive */}
      <div className="relative flex items-center justify-center w-full max-w-7xl">
        <div className="w-full h-full overflow-hidden border border-cyan-400 shadow-lg rounded-xl flex items-center justify-center bg-white">
          <Zoom>
            {images[currentIndex] ? (
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                width={1400}
                height={600}
              />
            ) : null}
          </Zoom>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 sm:-left-10 bg-white rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 sm:-right-10 bg-white rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="flex gap-2 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === i ? "bg-gray-900" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="flex justify-between items-center w-full max-w-7xl px-2 sm:px-4 mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold">ProSeeqle</h2>
        <a
          href="https://seeqle.com"
          target="_blank"
          className="text-cyan-600 hover:underline font-semibold text-sm sm:text-base"
        >
          Seeqle.com
        </a>
      </div>

      {/* Résumé */}
      <div className="max-w-4xl text-sm sm:text-base text-gray-700 py-12 sm:py-16 text-justify space-y-8 leading-relaxed px-2">
        <span className="block">
          Participation à la refonte complète d’une plateforme SaaS de
          recrutement basée sur l’intelligence artificielle, utilisée en
          production par des recruteurs.
        </span>
        <span className="block ml-12">
          • Migration d’une application Angular vers React / Next.js
          <br />
          <br />
          • Refonte complète de l’UI à partir de maquettes Figma
          <br />
          <br />
          • Développement d’un dashboard de suivi de campagnes (statistiques,
          performances)
          <br />
          <br />
          • Conception du module de création de campagnes de recrutement
          <br />
          <br />
          • Intégration de fonctionnalités basées sur OpenAI
          <br />
          <br />
          • Harmonisation front-end / back-end et amélioration de la
          maintenabilité
        </span>
        <span className="block">
          Stack :
          <span className="text-slate-900 ml-1">
            Next.js • React • TypeScript • Prisma • PostgreSQL • OpenAI
          </span>
        </span>
        <span className="block">
          Focus : <span className="text-slate-900 ml-1">SaaS • Performance • UX/UI • Données • Production</span>
        </span>
      </div>

      {/* Séparateur */}
      <div className="w-full max-w-7xl border-b border-black h-10" />

      {/* Contact section */}
      <section id="contact" className="w-full max-w-7xl py-20 px-2">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col items-start md:w-1/2 space-y-6">
            <h2 className="text-blue-500 text-4xl sm:text-5xl font-bold leading-tight">
              Travaillons <br /> ensemble !
            </h2>
            <span className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Vous aimez mon travail et souhaitez <br />
              quelque chose de similaire pour votre entreprise ? <br />
              Bien sûr, mettons-nous au travail !
            </span>
          </div>
          <div className="w-full md:w-1/2">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProSeeqle;
