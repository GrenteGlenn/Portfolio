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
          Au sein de l&apos;entreprise Seeqle, j&apos;ai participé à la refonte
          complète de la plateforme ProSeeqle, une solution de recrutement basée
          sur l&apos;intelligence artificielle. Cette plateforme met en relation
          des entreprises avec des candidats qualifiés, en leur proposant des
          offres d&apos;emploi adaptées à leurs compétences. Mon rôle a été de
          réécrire toute l&apos;application — initialement développée sous
          Angular — en utilisant React et Next.js, avec une attention
          particulière portée à la performance, la maintenabilité et
          l&apos;UX/UI, afin de proposer une expérience fluide et moderne.
        </span>
        <span className="block">
          La nouvelle version de la plateforme inclut un dashboard centralisé,
          conçu pour offrir une visualisation claire et intuitive du suivi de
          campagnes de recrutement. Il permet aux recruteurs d&apos;accéder à
          diverses statistiques en temps réel, telles que le nombre de
          candidatures reçues, l&apos;évolution des campagnes sur plusieurs
          semaines/mois, et la qualification des profils. L&apos;objectif était
          de rendre les données lisibles et directement exploitables via une
          interface structurée.
        </span>
        <span className="block">
          L&apos;un des piliers de ProSeeqle est le module de création de
          campagnes de recrutement. L&apos;utilisateur peut générer une campagne
          en quelques clics, en définissant les critères importants (secteur
          d&apos;activité, localisation, âge, etc.). Un système d&apos;audiences
          intelligentes, constitué de plus de 5000 profils métiers, permet de
          cibler très précisément les candidats.
        </span>
        <span className="block">
          Une attention particulière a été portée à la gestion du budget
          publicitaire, réparti entre plusieurs réseaux sociaux (LinkedIn,
          Facebook, Instagram, Twitter, TikTok). Les recruteurs peuvent définir
          manuellement un budget ou laisser un algorithme basé sur l&apos;IA en
          optimisant la répartition selon les performances attendues. Le visuel
          des campagnes peut également être configuré (médias, textes, preview)
          pour s&apos;adapter à chaque plateforme.
        </span>
        <span className="block">
          Grâce à l&apos;intégration d&apos;OpenAI, la plateforme permet de
          générer automatiquement des textes de recrutement cohérents et ciblés,
          en fonction des informations saisies par l&apos;utilisateur. Une
          interface permet de visualiser des previews de chaque annonce, réseau
          par réseau, et d&apos;apporter des modifications en temps réel avant
          la mise en ligne.
        </span>
        <span className="block">
          Enfin, la plateforme inclut plusieurs pages de paramétrage utilisateur
          et entreprise, offrant un contrôle total sur les informations
          personnelles, les préférences, et les données affichées sur la page
          carrière.
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
