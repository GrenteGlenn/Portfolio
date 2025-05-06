"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Contact from "../contact/contact";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

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
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 space-y-6">
      <div className="flex justify-between items-center w-full max-w-7xl px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">
          Wonders
        </h2>
      </div>

      {/* Carrousel responsive */}
      <div className="relative w-full max-w-7xl">
        <div className="w-full aspect-[16/9] sm:aspect-[3/2] lg:aspect-[4/2] overflow-hidden border border-cyan-400 shadow-lg rounded-xl bg-white flex items-center justify-center">
          <Zoom>
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="object-contain w-full h-full"
            />
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

      {/* Résumé */}
      <div className="max-w-4xl text-sm sm:text-base text-gray-700 py-12 sm:py-16 text-justify space-y-8 leading-relaxed px-2">
        <span className="block">
          Dans le cadre de mon alternance à l’ETNA, j’ai développé une
          application web complète de planification de voyages appelée Wonders.
          Cette plateforme permet aux utilisateurs de construire un itinéraire
          de A à Z : choix de la destination, sélection des activités,
          réservation de vols, hôtels et visualisation d’un récapitulatif clair
          et interactif. Le projet a été réalisé en Angular 18 pour le
          front-end, tandis que le back-end s’appuie sur une architecture
          Node.js en microservices, assurant performance, scalabilité et
          maintenance modulaire.
        </span>
        <span className="block">
          L’expérience utilisateur débute par un questionnaire intelligent,
          permettant de cerner les préférences de voyage (plage, nature,
          culture, etc.). En fonction des réponses, l’application fait appel à
          une intelligence artificielle pour proposer des destinations
          pertinentes accompagnées d’images générées via l’API Google et de
          descriptions personnalisées. L’utilisateur accède ensuite à une
          interface moderne pour sélectionner ses activités, consulter des
          cartes interactives, et explorer les monuments et attraits du pays
          choisi.
        </span>
        <span className="block">
          Le moteur de recherche de vols et hôtels est performant et dynamique.
          Les résultats sont filtrables selon divers critères (budget, escales,
          localisation, etc.), avec résumé latéral mis à jour en temps réel. Les
          données sont récupérées via des APIs externes, intégrées à des
          microservices spécialisés (vols, hôtels, utilisateurs). Cette
          structure permet une gestion fluide et découplée des modules, idéale
          pour un projet à grande échelle.
        </span>
        <span className="block">
          En complément de cette fonctionnalité de planification, j’ai développé
          un forum communautaire intégré à la plateforme. Les utilisateurs
          peuvent y créer des fils de discussion, poser des questions, liker des
          messages, et interagir autour de thématiques liées au voyage. Les
          données des utilisateurs sont anonymisées ou sécurisées, et
          l’interface respecte une structure claire pour faciliter les échanges.
          Ce module enrichit fortement l’aspect social et collaboratif du
          projet.
        </span>
        <span className="block">
          Ce projet m’a permis de travailler en profondeur sur des sujets variés
          : UX/UI, intégration d’IA, API REST, Google Maps, gestion d’état
          Angular, modélisation de base de données, et sécurité backend. Il
          illustre ma capacité à concevoir une application complète en
          autonomie, à intégrer des outils modernes (IA, microservices,
          Firebase, etc.) et à proposer une expérience utilisateur soignée et
          intuitive.
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
