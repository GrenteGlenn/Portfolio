import CaseStudy from "./caseStudy";

const Co2 = () => (
  <CaseStudy
    category="Éco-conception · En ligne"
    title="Calculateur CO₂ : mesurer l'empreinte carbone d'un site web"
    subtitle="Un outil public qui estime l'impact environnemental d'un site à partir de sa seule URL et propose des pistes d'amélioration."
    meta={[
      { label: "Rôle", value: "Conception et développement" },
      { label: "Période", value: "Mars 2023 – Janv. 2024" },
      { label: "Entreprise", value: "OneLogic" },
      { label: "Stack", value: "JavaScript, Node.js, CO2.js, Google PageSpeed API, Chart.js" },
    ]}
    slides={[
      { src: "/images/onelogic/SearchOnelogic.png", alt: "Saisie de l'URL à analyser" },
      { src: "/images/onelogic/performancesOnelogic.png", alt: "Analyse des performances du site" },
      { src: "/images/onelogic/impactEN.png", alt: "Score et impact environnemental" },
      { src: "/images/onelogic/Status.png", alt: "Indicateurs clés" },
      { src: "/images/onelogic/Optimisation.png", alt: "Recommandations d'optimisation" },
      { src: "/images/onelogic/Optimisation2.png", alt: "Détail des recommandations" },
    ]}
    context={
      <p>
        OneLogic accompagne les entreprises dans la gestion intelligente de leurs environnements de travail,
        avec un fort accent sur l&apos;efficacité énergétique. Le calculateur prolonge cette démarche au web :
        n&apos;importe quel visiteur peut mesurer l&apos;empreinte carbone d&apos;un site et savoir comment la
        réduire.
      </p>
    }
    contributions={[
      "Analyse des performances d'un site via l'API Google PageSpeed Insights",
      "Calcul des émissions de CO₂ avec la bibliothèque CO2.js",
      "Affichage d'un score environnemental et d'indicateurs clés",
      "Recommandations techniques personnalisées selon les résultats",
      "Visualisation des données avec des graphiques interactifs (Chart.js)",
    ]}
    challenge={{ problem: "Permettre à n'importe quel visiteur de mesurer l'empreinte carbone d'un site web et d'obtenir des recommandations pour la réduire.", solution: "Utilisation de l'API Google PageSpeed Insights pour analyser les performances, calcul des émissions de CO₂ avec CO2.js, et affichage des résultats avec des graphiques interactifs via Chart.js." }}
    learnings="Intégration d'API externes pour l'analyse des performances web, calcul de l'empreinte carbone avec CO2.js, et visualisation des données avec Chart.js."
    links={[{ label: "Voir l'outil en ligne", href: "https://onelogic.fr/calculateur-co2" }]}
    next={{ slug: "proSeeqle", title: "ProSeeqle · SaaS RH en production" }}
  />
);

export default Co2;