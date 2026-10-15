import CaseStudy from "./caseStudy";

const HumanThings = () => (
  <CaseStudy
    category="Temps réel · 800 participants"
    title="Event Bingo : un jeu synchronisé en direct pour 800 participants"
    subtitle="Un dispositif interactif pour un événement client : chaque participant joue sur son téléphone, l'organisateur pilote tout depuis un panel."
    meta={[
      { label: "Rôle", value: "Seul développeur, de la conception à la mise en production" },
      { label: "Période", value: "Oct. 2025 – Janv. 2026" },
      { label: "Client", value: "Human Things, agence événementielle" },
      { label: "Stack", value: "Next.js, TypeScript, Three.js, Node.js, Express, Socket.IO" },
    ]}
    slides={[
      { src: "/images/humanThings/cagnotte.png", alt: "Cagnotte animée en 3D" },
      { src: "/images/humanThings/affichage.png", alt: "Écran d'affichage des numéros tirés" },
      { src: "/images/humanThings/panel.png", alt: "Panel de pilotage de l'organisateur" },
      { src: "/images/humanThings/login.png", alt: "Connexion des participants" },
      { src: "/images/humanThings/bingo.png", alt: "Grille de bingo d'un participant" },
    ]}
    context={
      <p>
        Human Things conçoit des expériences digitales pour les événements de ses clients. Le besoin : un bingo
        joué en direct par environ 800 participants depuis leur téléphone, avec un grand écran pour le public
        et un panel pour l&apos;organisateur. Tout doit rester synchronisé, sans décalage, pendant toute la
        durée de l&apos;événement.
      </p>
    }
    contributions={[
      "Jeu de bingo en temps réel, synchronisé entre tous les participants via Socket.IO",
      "Cagnotte interactive animée en 3D avec Three.js",
      "Page d'affichage synchronisée en direct pour la projection",
      "Panel de contrôle pour piloter l'événement en live",
      "Optimisation des performances et de la réactivité en conditions réelles",
    ]}

    challenge={{ problem: "Créer un jeu de bingo en temps réel pour 800 participants simultanés, avec synchronisation parfaite entre les participants, le grand écran et le panel de l'organisateur.", solution: "Utilisation de Socket.IO pour la communication en temps réel, optimisation des performances et gestion de la réactivité pour garantir une expérience fluide." }}
    results={[{ value: "800", label: "participants simultanés" }]}
    learnings="Développement d'une application en temps réel avec Socket.IO, optimisation des performances pour un grand nombre de participants, intégration de Three.js pour des animations 3D interactives."
    links={[{ label: "Code source", href: "https://github.com/GrenteGlenn/Bingo-Game" }]}
    next={{ slug: "wonders", title: "Wonders · 6 microservices" }}
  />
);

export default HumanThings;