import CaseStudy from "./caseStudy";

const Wonders = () => (
  <CaseStudy
    category="Microservices · Projet de Master"
    title="Wonders : une plateforme de voyage en 6 microservices"
    subtitle="Projet de fin de Master réalisé à 6 : planifier un voyage de A à Z, de la découverte d'un pays à la réservation et au partage d'itinéraires."
    meta={[
      { label: "Rôle", value: "Front Angular et authentification" },
      { label: "Période", value: "Mai 2024 – Sept. 2025" },
      { label: "Équipe", value: "6 développeurs" },
      { label: "Stack", value: "Angular 18, Node.js, Express, TypeScript, PostgreSQL, Docker, GitLab CI" },
    ]}
    slides={[
      { src: "/images/wonders/homepage.png", alt: "Page d'accueil" },
      { src: "/images/wonders/choiceGuide.png", alt: "Choix du guide de voyage" },
      { src: "/images/wonders/question.png", alt: "Questionnaire de préférences" },
      { src: "/images/wonders/questionResult.png", alt: "Résultats du questionnaire" },
      { src: "/images/wonders/step1.png", alt: "Planification du voyage : étape 1" },
      { src: "/images/wonders/step2.png", alt: "Planification du voyage : étape 2" },
      { src: "/images/wonders/step3.png", alt: "Planification du voyage : étape 3" },
      { src: "/images/wonders/step4.png", alt: "Planification du voyage : étape 4" },
      { src: "/images/wonders/step5.png", alt: "Planification du voyage : étape 5" },
      { src: "/images/wonders/forum1.png", alt: "Forum de la communauté" },
      { src: "/images/wonders/forum2.png", alt: "Discussion dans le forum" },
    ]}
    context={
      <p>
        Wonders aide un voyageur à préparer son séjour de bout en bout : découvrir un pays, trouver des
        activités, rechercher vols et hôtels, sauvegarder son itinéraire et échanger avec la communauté. Le
        projet a été mené à 6, avec une architecture microservices et un workflow d&apos;équipe encadré par la
        CI et les merge requests.
      </p>
    }
    contributions={[
      "Développement de nombreux composants du front Angular 18 et refonte UX/UI",
      "Sauvegarde des voyages : l'utilisateur enregistre et retrouve ses itinéraires",
      "Intégration de Google Maps, des pages hôtels et du chat",
      "Signalement de bugs par les utilisateurs depuis l'interface",
      "Authentification : gestion de l'expiration des tokens JWT et middleware de vérification utilisateur",
      "Sécurisation des variables d'environnement dans les images Docker",
    ]}
    architecture={[
      "6 microservices Node.js / TypeScript indépendants (users, countries, activities, blog, quiz, fly-hotel), chacun avec sa base PostgreSQL",
      "Descriptions de pays générées par OpenAI puis mises en cache 29 jours, pour limiter coûts et latence",
      "CI GitLab par service : lint, tests d'API Bruno sur une vraie base, puis build, à chaque merge request",
      "Docker Compose en local, Caddy en production avec un sous-domaine et TLS par service",
    ]}
    challenge={{ problem: "Développer une plateforme de voyage complète avec une équipe de 6 développeurs, en utilisant une architecture microservices.", solution: "Mise en place de microservices Node.js / TypeScript, intégration front Angular 18, CI GitLab et Docker pour le déploiement." }}
    learnings="Travail en équipe sur une architecture microservices, intégration front-end et back-end, gestion de la CI/CD et déploiement avec Docker."
    links={[{ label: "Code source", href: "https://github.com/GrenteGlenn/wonders" }]}
    next={{ slug: "co2", title: "Calculateur CO₂ · éco-conception" }}
  />
);

export default Wonders;