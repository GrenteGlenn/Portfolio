"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Contact from "../contact/contact";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const images = [
  "/images/onelogic/SearchOnelogic.png",
  "/images/onelogic/performancesOnelogic.png",
  "/images/onelogic/impactEN.png",
  "/images/onelogic/Status.png",
  "/images/onelogic/Optimisation.png",
  "/images/onelogic/Optimisation2.png",
];

const Co2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 space-y-12 py-16 sm:py-20">
      

      {/* Carrousel responsive */}
      <div className="relative flex items-center justify-center w-full max-w-7xl">
        <div className=" w-full h-full overflow-hidden border border-cyan-400 shadow-lg rounded-xl flex items-center justify-center bg-white">
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
      <div className="flex justify-between items-center w-full max-w-7xl px-2 sm:px-4 ">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Bilan Carbone CO2
        </h2>
        <a
          href="https://onelogic.fr/calculateur-co2"
          target="_blank"
          className="text-cyan-600 hover:underline font-semibold text-sm sm:text-base"
        >
          Onelogic.fr
        </a>
      </div>

      {/* Résumé */}
      <div className="max-w-4xl text-sm sm:text-base text-gray-700 py-12 sm:py-16 text-justify space-y-8 leading-relaxed px-2">
        <span className="block">
          Lors de mon alternance chez OneLogic, une entreprise engagée dans la
          transition numérique responsable, j&apos;ai été chargé de concevoir
          une plateforme web capable d&apos;évaluer les émissions de CO2 des
          sites internet.
        </span>
        <span className="block">
          Le fonctionnement est simple : l&apos;utilisateur saisit une URL, le
          système l&apos;analyse via l&apos;API Google PageSpeed et la librairie
          CO2.js, puis affiche un carboscore, les performances, et l&apos;impact
          environnemental du site.
        </span>
        <span className="block">
          L&apos;interface affiche également des badges pour reconnaître les
          bons élèves écologiques, ainsi que des conseils techniques adaptés au
          niveau de chaque utilisateur.
        </span>
        <span className="block">
          J&apos;ai également intégré des optimisations telles que les graphes
          avec Chart.js, des scripts personnalisés et un système de
          recommandations avancées à destination des développeurs.
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

export default Co2;
