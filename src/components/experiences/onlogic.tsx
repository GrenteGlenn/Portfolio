import { Plus } from "lucide-react";
import { FC } from "react";


const OneLogic: FC = () => {
  return (
    <div>
      <span className="font-bold">Mars 2023 - Janvier 2024 </span>
      <br />
      <br />
      <span>
        OneLogic est une entreprise française innovante spécialisée dans la
        gestion intelligente des environnements de travail. Elle développe des
        solutions technologiques combinant capteurs physiques, IoT et interfaces
        web pour optimiser l’usage des espaces et équipements. Parmi ses
        produits phares, on trouve des outils de supervision à distance des
        dispositifs comme les systèmes de visioconférence et de partage d’écran.
        L’entreprise mise sur la maintenance prédictive, la réduction des
        déplacements techniques et l’efficacité énergétique. J&apos;ai pu travailler
        sur la plateforme Visiologic et leur site web avec les technologies
        suivantes :
      </span>
      <br />
      <br />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-800">
        {[
          "Php",
          "CakePHP",
          "PHPMyAdmin",
          "MySQL",
          "PostgreSQL",
          "OpenAI",
          "Google API",
          "Co2.js",
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

export default OneLogic;
