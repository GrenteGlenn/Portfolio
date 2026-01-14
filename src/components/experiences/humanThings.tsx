import { Plus } from "lucide-react";
import { FC } from "react";

const HumanThings: FC = () => {
  return (
    <div>
      <span className="font-bold">Octobre 2022 - Aujourd&apos;hui </span>
      <br />
      <br />
      <span>
        Human Things Event est une entreprise d’événementiel avec laquelle j’ai
        collaboré en freelance sur la création de solutions digitales
        interactives, destinées à dynamiser l’expérience des participants lors
        d’événements clients.
      </span>
      <br />
      <br />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-800">
        {[
          "ReactJS",
          "Typescript",
          "NextJS",
          "GitHub",
          "Socket.IO",
          "Railways",
          "ThreeJS",
          "TailwindCSS",
          "HTML5 & CSS3",
          "ShadCN",
          "Notion",  
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

export default HumanThings;
