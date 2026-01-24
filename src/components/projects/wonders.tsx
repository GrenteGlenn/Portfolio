"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Contact from "../contact/contact";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const images = [
  "/images/wonders/homepage.png",
  "/images/wonders/choiceGuide.png",
  "/images/wonders/question.png",
  "/images/wonders/questionResult.png",
  "/images/wonders/step1.png",
  "/images/wonders/step2.png",
  "/images/wonders/step3.png",
  "/images/wonders/step4.png",
  "/images/wonders/step5.png",
  "/images/wonders/forum1.png",
  "/images/wonders/forum2.png",
];

const Wonders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 space-y-12 py-16 sm:py-20">
      {/* Carrousel responsive */}
      <div className="relative w-full max-w-7xl">
        <div className="w-full aspect-[16/9] sm:aspect-[3/2] lg:aspect-[4/2] overflow-hidden border border-cyan-400 shadow-lg rounded-xl bg-white flex items-center justify-center">
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
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 bg-white rounded-full p-2 hover:bg-gray-100 shadow"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-white rounded-full p-2 hover:bg-gray-100 shadow"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
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

      <div className="flex justify-between items-center w-full max-w-7xl px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words mt-4">
          Wonders
        </h2>
      </div>

      {/* Résumé */}
      <div className="max-w-4xl text-sm sm:text-base text-gray-700 py-12 sm:py-16 text-justify space-y-8 leading-relaxed px-2">
        <span className="block">
          Conception et développement d’une application web complète de
          planification de voyages, de la définition des préférences utilisateur
          jusqu’à la réservation et la visualisation d’itinéraires.
        </span>
        <span className="block ml-12">
          • Développement du front-end en Angular 18
          <br />
          <br />
          • Mise en place d’une architecture back-end en microservices Node.js
          <br />
          <br />
          • Intégration d’APIs externes (vols, hôtels, cartes)
          <br />
          <br />
          • Génération de recommandations via l’IA
          <br />
          <br />
          • Gestion d’un moteur de recherche dynamique et filtrable
          <br />
          <br />• Développement d’un module communautaire (forum)
        </span>
        <span className="block">
          Stack :
          <span className="text-slate-900 ml-1">
            Angular 18 • Node.js • Express • Microservices • API REST • Google
            Maps
          </span>
        </span>
        <span className="block">
          Focus :
          <span className="text-slate-900 ml-1">
           
            Architecture • Scalabilité • UX • APIs • IA{" "}
          </span>
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

export default Wonders;
