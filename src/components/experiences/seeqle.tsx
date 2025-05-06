import { div } from "framer-motion/client";
import { Plus } from "lucide-react";
import { FC } from "react";

interface SeeqleProps {}

const Seeqle: FC<SeeqleProps> = () => {
  return (
    <div>
      <span className="font-bold">Janvier 2024 - Aujourd'hui </span>
      <br />
      <br />
      <span>
        Seeqle est une entreprise spécialisée dans le recrutement programmatique
        intelligent, combinant IA et marketing digital pour diffuser des offres
        d’emploi ciblées. J'ai pu travailler sur la plateforme ProSeeqle avec
        les technologies suivantes :
      </span>
      <br />
      <br />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-800">
        {[
          "React",
          "NextJS",
          "Typescript",
          "VSCode",
          "PostgreSQL",
          "OpenAI",
          "Google API",
          "Prisma",
          "Tailwind CSS",
        ].map((tech) => (
          <span key={tech} className="flex items-center gap-2">
            <Plus className="w-4 h-4 text-blue-600" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Seeqle;
