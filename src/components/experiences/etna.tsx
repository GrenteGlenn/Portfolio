import { Plus } from "lucide-react";
import { FC } from "react";

interface EtnaProps {}

const Etna: FC<EtnaProps> = () => {
  return (
    <div>
      <span className="font-bold">Octobre 2022 - Aujourd'hui </span>
      <br />
      <br />
      <span>
        L'Etna est une ecole d'informatique ou j'ai effectué ma reconversion
        professionnelle, elle m'as permit d'apprendre le développement web entre
        autres et m'as permit d'en faire un passion. Au sein de cette école j'ai
        appis diverses technologies grâce à divers projets ce qui m'a permit
        d'obtenir des compétences dans ces languages et framework associés:
      </span>
      <br />
      <br />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-800">
        {[
          "Angular",
          "Javascript / Typescript",
          "PHP",
          "VScode",
          "PostgreSQL",
          "MySQL",
          "C / C#",
          "Dockers",
          "SQL",
          "Bash",
          "Git",
          "Flutter / Firebase",
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

export default Etna;
