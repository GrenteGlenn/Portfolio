"use client";
import { motion } from "framer-motion";
import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <div className="min-h-96 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Texte à gauche */}
          <div className="lg:w-2/3">
            <div>
              <div className="mt-4  rounded-md">
                <span className="text-sm sm:text-base leading-relaxed">
                  <span className="py-2 leading-relaxed">
                    Je m&apos;appelle Glenn Grente et j&apos;ai entamé une reconversion
                    professionnelle en 2022. Avant de me tourner vers le
                    développement web, j&apos;ai exercé pendant dix ans dans le
                    domaine commercial. Cette décennie m&apos;a permis d&apos;acquérir de
                    solides compétences relationnelles, mais le besoin de sortir
                    de ma zone de confort et de relever de nouveaux défis m&apos;a
                    naturellement conduit vers l&apos;univers du développement.
                  </span>
                  <span className="py-2 leading-relaxed">
                    Depuis longtemps attiré par les métiers de l&apos;IT sans avoir
                    osé franchir le pas, c&apos;est en découvrant l&apos;école ETNA
                    (membre du groupe IONIS, comme Epitech) que j&apos;ai trouvé une
                    formation en alternance parfaitement adaptée à mon projet.
                    Ce format m&apos;a permis de combiner théorie et pratique en
                    entreprise, tout en évoluant dans un environnement
                    stimulant.
                  </span>
                  <span className="py-2 leading-relaxed">
                    Aujourd&apos;hui, porté par mes études et mes expériences, j&apos;ai
                    développé une véritable passion pour le développement web.
                    Déterminé et persévérant, je me suis orienté vers le
                    développement Full Stack avec l&apos;ambition de maîtriser
                    l&apos;ensemble des étapes d&apos;un projet, de la conception à la
                    mise en production.
                  </span>
                  <span className="py-2 leading-relaxed">
                    Je suis prêt à mettre mes compétences et mon engagement au
                    service de projets ambitieux, tout en continuant à apprendre
                    et à évoluer dans ce secteur en constante innovation.
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Blocs à droite */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 border rounded-md shadow"
            >
              <h2 className="text-lg mb-2">💡 Esprit d&apos;analyse</h2>
              <p className="text-sm">
                Curieux et analytique, je prends plaisir à résoudre des
                problèmes complexes, en alliant logique et expérience
                utilisateur.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 border rounded-md shadow"
            >
              <h2 className="text-lg mb-2">🎯 Objectif</h2>
              <p className="text-sm">
                Devenir un développeur complet capable de piloter un projet web
                ou mobile de A à Z, en alliant technicité, design et
                performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 border rounded-md shadow"
            >
              <h2 className="text-lg mb-2">🧠 Soft Skills</h2>
              <p className="text-sm">
                Rigueur, adaptabilité, autonomie. Mon parcours atypique m&apos;a
                donné un vrai sens de l&apos;organisation et de la communication.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
