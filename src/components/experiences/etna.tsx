import { Plus } from "lucide-react";
import { FC } from "react";


const Etna: FC = () => {
  return (
    <div>
      <span className="font-bold">Octobre 2022 - Aujourd&apos;hui </span>
      <br />
      <br />
      <span>
        L&apos;Etna est une ecole d&apos;informatique ou j&apos;ai effectué ma reconversion
        professionnelle, elle m&apos;as permit d&apos;apprendre le développement web entre
        autres et m&apos;as permit d&apos;en faire un passion. Au sein de cette école j&apos;ai
        appis diverses technologies grâce à divers projets ce qui m&apos;a permit
        d&apos;obtenir des compétences dans ces languages et framework associés:
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
