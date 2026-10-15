import { FC } from "react";

interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  stack: string[];
}

const experiences: Experience[] = [
  {
    company: "AI6 Technologies",
    role: "Développeur Full Stack, orientation front-end",
    period: "Juin 2026 – Oct. 2026",
    highlights: [
      "Chatbot de déclaration de sinistres avec un assistant IA qui guide l'utilisateur jusqu'au suivi de son dossier",
      "Module d'aide à la décision sous Odoo 17 pour accompagner les experts dans l'évaluation des dégâts",
      "Composants de formulaires dynamiques avec Form.io",
    ],
    stack: ["IA conversationnelle", "Odoo 17", "Form.io"],
  },
  {
    company: "Human Things",
    role: "Développeur Full Stack, mission",
    period: "Oct. 2025 – Janv. 2026",
    highlights: [
      "Conception et développement complets d'un dispositif événementiel utilisé par 800 participants simultanés",
      "Bingo synchronisé en direct, cagnotte animée en 3D, écran d'affichage et panel de pilotage pour l'organisateur",
      "Authentification des participants et optimisation des performances en conditions réelles",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Socket.IO", "Three.js"],
  },
  {
    company: "Seeqle",
    role: "Développeur Full Stack",
    period: "Janv. 2024 – Juin 2025",
    highlights: [
      "Migration d'Angular vers React et Next.js d'une plateforme SaaS de recrutement utilisée en production",
      "Refonte de l'interface à partir des maquettes Figma et tableau de bord de suivi des campagnes",
      "Intégration de fonctionnalités OpenAI, harmonisation front / back et sécurisation de l'API",
    ],
    stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "OpenAI"],
  },
  {
    company: "OneLogic",
    role: "Développeur Full Stack",
    period: "Mars 2023 – Janv. 2024",
    highlights: [
      "Plateforme de gestion de boîtiers IoT, avec des optimisations qui réduisent les interventions physiques",
      "Intégration de l'API Barco ClickShare pour le partage de contenus en salle de réunion",
      "Calculateur d'empreinte carbone de sites web, en ligne sur le site de l'entreprise",
    ],
    stack: ["PHP", "CakePHP", "MySQL", "API REST", "CO2.js"],
  },
];

const ExperienceList: FC = () => (
  <div className="flex flex-col">
    {experiences.map((exp, index) => (
      <article
        key={exp.company}
        className={`flex flex-wrap gap-x-12 gap-y-4 border-t border-[#E4E4E0] py-8 ${
          index === experiences.length - 1 ? "border-b" : ""
        }`}
      >
        {/* Date à gauche */}
        <p className="max-w-[220px] flex-[1_1_180px] pt-1 font-mono text-sm text-[#6A707C]">
          {exp.period}
        </p>

        {/* Contenu à droite */}
        <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-3">
          <h3 className="text-[22px] font-semibold tracking-tight text-[#15171C]">
            {exp.company}
            <span className="font-normal text-[#6A707C]"> · {exp.role}</span>
          </h3>

          <ul className="list-disc pl-5 text-base leading-[1.65] text-[#3D424D]">
            {exp.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-2" aria-label="Technologies utilisées">
            {exp.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-[#F1F1EE] px-2.5 py-1 font-mono text-xs text-[#3D424D]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </article>
    ))}
  </div>
);

export default ExperienceList;