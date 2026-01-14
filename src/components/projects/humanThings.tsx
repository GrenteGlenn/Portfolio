"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Contact from "../contact/contact";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const images = [
  "/images/humanThings/cagnotte.png",
  "/images/humanThings/affichage.png",
  "/images/humanThings/panel.png",
  "/images/humanThings/login.png",
  "/images/humanThings/bingo.png",
];

const HumanThings = () => {
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
          Event Bingo
        </h2>
        <span
          
          className=" font-semibold text-sm sm:text-base"
        >
          Human Things Event
        </span>
      </div>

      {/* Résumé */}
      <div className="max-w-4xl text-sm sm:text-base text-gray-700 py-12 sm:py-16 text-justify space-y-8 leading-relaxed px-2">
        <span className="block">
          Dans le cadre d’une mission en freelance, j’ai été contacté par un
          client pour la mise en place d’un dispositif interactif à l’occasion
          d’un événement client. Le projet consistait à développer une cagnotte
          interactive ainsi qu’un jeu de bingo, pouvant être utilisé
          simultanément par environ 800 participants, accompagné d’une page
          d’affichage en temps réel des numéros tirés.
        </span>
        <span className="block">
          Un panel de contrôle dédié a également été conçu afin de permettre au
          client d’interagir facilement avec le système et de piloter l’ensemble
          des actions en direct.
        </span>
        <span className="block">
          Dans une optique de fluidité et de dynamisme lors de l’événement, j’ai
          porté une attention particulière à la réactivité des actions
          déclenchées depuis le panel de contrôle. La gestion de la cagnotte
          était entièrement entre les mains du client : une simple pression sur
          la touche espace permettait d’activer les animations et les mises à
          jour en temps réel.
        </span>
        <span className="block">
          Le délai de réalisation était fixé à 10 jours, incluant le
          développement, des tests de stabilité, ainsi que plusieurs phases de
          vérification et d’optimisation, afin de garantir une expérience fluide
          et fiable le jour de l’événement.
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

export default HumanThings;
