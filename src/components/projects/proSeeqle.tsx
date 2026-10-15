import CaseStudy from "./caseStudy";

const ProSeeqle = () => (
  <CaseStudy
    category="SaaS RH · En production"
    title="ProSeeqle : migrer un SaaS en production d'Angular vers Next.js"
    subtitle="Refonte d'une plateforme de recrutement programmatique utilisée chaque jour par des recruteurs, sans interrompre le service."
    meta={[
      { label: "Rôle", value: "Développeur full stack" },
      { label: "Période", value: "Janv. 2024 – Juin 2025" },
      { label: "Stack", value: "Next.js, React, TypeScript, Prisma, PostgreSQL, OpenAI" },
    ]}
    slides={[
      { src: "/images/seeqle/Dashboard2.png", alt: "Tableau de bord de suivi des campagnes" },
      { src: "/images/seeqle/campaign1.png", alt: "Création d'une campagne : étape 1" },
      { src: "/images/seeqle/campaigns2.png", alt: "Création d'une campagne : étape 2" },
      { src: "/images/seeqle/campaign3.png", alt: "Création d'une campagne : étape 3" },
      { src: "/images/seeqle/campaign4.png", alt: "Création d'une campagne : étape 4" },
      { src: "/images/seeqle/campaign5.png", alt: "Création d'une campagne : étape 5" },
      { src: "/images/seeqle/campaign5IA.png", alt: "Génération de contenu par l'IA dans une campagne" },
      { src: "/images/seeqle/campaigns6.png", alt: "Récapitulatif de la campagne" },
      { src: "/images/seeqle/settingProfil.png", alt: "Paramètres du profil" },
      { src: "/images/seeqle/settingworkspace.png", alt: "Paramètres de l'espace de travail" },
    ]}
    context={
      <p>
        Seeqle fait du recrutement programmatique : la plateforme combine IA et marketing digital pour diffuser
        des offres d&apos;emploi auprès des bons candidats. ProSeeqle est l&apos;outil où les recruteurs créent et
        suivent leurs campagnes. L&apos;application historique, en Angular, a été entièrement reconstruite en
        React et Next.js pendant que des clients l&apos;utilisaient.
      </p>
    }
    contributions={[
      "Migration des pages et composants d'Angular vers React / Next.js, avec Prisma côté données",
      "Refonte complète de l'interface à partir des maquettes Figma",
      "Tableau de bord de suivi des campagnes : statistiques et performances",
      "Module de création de campagnes de recrutement, en plusieurs étapes",
      "Intégration de fonctionnalités basées sur OpenAI",
      "Harmonisation front-end / back-end et amélioration de la maintenabilité",
    ]}
    challenge={{ problem: "Migrer un SaaS en production d'Angular vers une nouvelle version en Next.js dans une délai de 3 mois.", solution: "Reconstruction complète de l'application en React et Next.js tout en maintenant la disponibilité pour les utilisateurs existants." }}
    results={[{ value: "Délai de 3 mois tenu", label: "Respect du planning initial" }]}
    learnings="Migration d'une stack Angular vers une stack React / Next.js optimisée, modernisation du code et amélioration de la maintenabilité"
    links={[{ label: "seeqle.com", href: "https://www.seeqle.com" }]}
    proprietary
    next={{ slug: "HumanThings", title: "Event Bingo · 800 participants en temps réel" }}
  />
);

export default ProSeeqle;