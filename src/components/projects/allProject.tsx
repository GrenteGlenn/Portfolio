import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  slug: string;
  title: string;
  category: string;
  pitch: string;
  role: string;
  image: string;
  imageAlt: string;
  externalLink?: { label: string; href: string };
}

const projects: Project[] = [
  {
    slug: "proSeeqle",
    title: "ProSeeqle",
    category: "SaaS RH · En production",
    pitch:
      "Migrer d'Angular vers Next.js une plateforme utilisée chaque jour par des recruteurs, sans interrompre le service.",
    role: "développeur full stack au sein de l'équipe produit.",
    image: "/images/seeqle/Dashboard2.png",
    imageAlt: "Tableau de bord des campagnes de recrutement de ProSeeqle",
  },
  {
    slug: "HumanThings",
    title: "Event Bingo",
    category: "Temps réel · 800 participants",
    pitch:
      "Synchroniser l'état d'un jeu entre 800 téléphones, un écran géant et un panel de pilotage pendant un événement en direct.",
    role: "conception et développement de bout en bout, seul développeur.",
    image: "/images/humanThings/panel.png",
    imageAlt: "Panel de pilotage de l'événement Bingo",
    externalLink: { label: "Code source", href: "https://github.com/GrenteGlenn/Bingo-Game" },
  },
  {
    slug: "wonders",
    title: "Wonders",
    category: "Microservices · Projet de Master",
    pitch:
      "Une plateforme de planification de voyages en 6 microservices Node.js, avec un front Angular 18 et une CI qui teste chaque service à chaque merge request.",
    role: "front Angular et authentification, dans une équipe de 6.",
    image: "/images/wonders/homepage.png",
    imageAlt: "Page d'accueil de l'application Wonders",
    externalLink: { label: "Code source", href: "https://github.com/GrenteGlenn/wonders" },
  },
  {
    slug: "co2",
    title: "Calculateur CO₂",
    category: "Éco-conception · En ligne",
    pitch:
      "Estimer l'empreinte carbone d'un site à partir de sa seule URL, en croisant les données de PageSpeed Insights et le modèle de CO2.js.",
    role: "conception et développement de l'outil.",
    image: "/images/onelogic/impactEN.png",
    imageAlt: "Résultat d'analyse du calculateur d'empreinte carbone",
    externalLink: { label: "Voir l'outil", href: "https://onelogic.fr/calculateur-co2" },
  },
];

const AllProject: FC = () => (
  <div className="flex flex-wrap gap-6">
    {projects.map((project) => (
      <article
        key={project.slug}
        className="flex min-w-0 flex-[1_1_440px] flex-col overflow-hidden rounded-[14px] border border-[#E4E4E0] bg-white"
      >
        {/* Capture */}
        <div className="relative aspect-video border-b border-[#E4E4E0] bg-[#ECECE7]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Texte */}
        <div className="flex flex-grow flex-col gap-3.5 p-7">
          <p className="font-mono text-xs tracking-[0.06em] text-[#6A707C]">
            {project.category.toUpperCase()}
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-[#15171C]">{project.title}</h3>
          <p className="text-base leading-relaxed text-[#3D424D]">{project.pitch}</p>
          <p className="text-[15px] leading-relaxed text-[#3D424D]">
            <strong className="font-semibold text-[#15171C]">Mon rôle : </strong>
            {project.role}
          </p>

          {/* Liens */}
          <div className="mt-auto flex flex-wrap gap-4 pt-2 text-[15px] font-medium">
            <Link
              href={`/projects/${project.slug}`}
              className="text-[#1E3FB4] hover:text-[#142C82] hover:underline"
            >
              Lire l&apos;étude de cas →
            </Link>
            {project.externalLink ? (
              <a
                href={project.externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3D424D] hover:text-[#15171C] hover:underline"
              >
                {project.externalLink.label} ↗
              </a>
            ) : (
              <span className="font-normal text-[#6A707C]">Code propriétaire</span>
            )}
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default AllProject;