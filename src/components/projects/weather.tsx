import Image from "next/image";
import Contact from "../contact/contact";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Weather = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 space-y-6">
      <div className="flex justify-between items-center w-full max-w-7xl px-2 sm:px-4 mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold">Weather</h2>
        <a
          href="https://github.com/GrenteGlenn/Weather"
          target="_blank"
          className="text-cyan-600 border shadow-lg p-2 hover:underline font-semibold text-sm sm:text-base"
        >
          Code sur GitHub
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl">
        <div className="w-full h-full rounded-xl flex items-center justify-center bg-white">
          <Zoom>
            <Image
              src="/images/weather/Menu.png"
              className="h-[600px] w-full
              object-contain "
              alt=""
            ></Image>
          </Zoom>
        </div>
        <div className="w-full h-full rounded-xl flex items-center justify-center bg-white">
          <Zoom>
            <Image
              src="/images/weather/MainPage.png"
              className="h-[600px] w-full
              object-contain "
              alt=""
            ></Image>
          </Zoom>
        </div>
        <div className="w-full h-full rounded-xl flex items-center justify-center bg-white">
          <Zoom>
          <Image
              src="/images/weather/villeSave.png"
              className="h-[600px] w-full
              object-contain "
              alt=""
            ></Image>
          </Zoom>
        </div>
      </div>

      {/* Résumé */}
      <div className="max-w-4xl text-sm sm:text-base text-gray-700 py-12 sm:py-16 text-justify space-y-8 leading-relaxed px-2">
        <span className="block">
          Dans le cadre de mon alternance, j&apos;ai développé une application mobile
          de météo en utilisant Flutter pour l&apos;interface et Firebase pour la
          gestion des données. Ce projet avait pour but d&apos;explorer une nouvelle
          stack technique, tout en intégrant des APIs en temps réel, notamment
          celle de OpenWeatherMap, afin d&apos;afficher des données météorologiques
          fiables et à jour. L&apos;application s&apos;inscrit dans une démarche de veille
          technologique et m&apos;a permis de consolider mes compétences en
          développement mobile multiplateforme.
        </span>
        <span className="block">
          L&apos;interface principale de l&apos;application offre une présentation
          synthétique des informations clés : la ville recherchée, la date et
          l&apos;heure actuelles, la température, ainsi que l&apos;état du ciel. L&apos;accent
          a été mis sur la simplicité et la clarté des données affichées, avec
          une approche visuelle adaptée aux usages mobiles. L&apos;expérience
          utilisateur est immédiate, fluide et orientée vers la compréhension
          rapide de la météo en un coup d&apos;œil.
        </span>
        <span className="block">
          Un menu latéral permet à l&apos;utilisateur de personnaliser son expérience
          : il peut basculer entre Celsius et Fahrenheit, activer un mode sombre
          adapté aux daltoniens, ou accéder rapidement aux paramètres de
          l&apos;application. Le design a été pensé de façon minimaliste, pour
          s&apos;intégrer harmonieusement aux habitudes des utilisateurs tout en
          restant accessible.
        </span>
        <span className="block">
          Enfin, l&apos;application mémorise localement les villes consultées
          récemment, permettant à l&apos;utilisateur de retrouver ses recherches sans
          effort. Un bouton dédié permet de supprimer une ville de la liste,
          rendant l&apos;interface plus propre et personnalisable. Ce projet a
          représenté une belle opportunité de sortir de l&apos;écosystème web
          classique pour m&apos;initier efficacement au développement mobile moderne.
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

export default Weather;
