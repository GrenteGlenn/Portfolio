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
              <div className="mt-4 rounded-md">
                <span className="text-sm sm:text-base leading-relaxed">
                  <span className="py-2 leading-relaxed">
                    Développeur web Full Stack en reconversion professionnelle,
                    j’ai entamé mon parcours dans le développement en 2022 après
                    dix années d’expérience dans le secteur commercial. Cette
                    première carrière m’a permis de développer de solides
                    compétences relationnelles, un sens aigu du service et une
                    réelle capacité d’adaptation.
                  </span>
                  <br />
                  <br />
                  <span className="py-2 leading-relaxed">
                    Animé par un intérêt de longue date pour les métiers de
                    l’IT, j’ai choisi d’opérer ce virage professionnel en
                    intégrant l’ETNA (groupe IONIS) dans le cadre d’une
                    formation en alternance. Ce format m’a offert l’opportunité
                    de conjuguer apprentissages théoriques et mise en pratique
                    en entreprise, tout en évoluant dans un environnement
                    exigeant et stimulant.
                  </span>
                  <br />
                  <br />
                  <span className="py-2 leading-relaxed">
                    Aujourd’hui, je me spécialise dans le développement web Full
                    Stack, avec une approche orientée qualité, performance et
                    compréhension globale des projets. Curieux, rigoureux et
                    persévérant, je m’investis pleinement dans chaque étape du
                    cycle de développement, de la conception à la mise en
                    production.
                  </span>
                  <br />
                  <br />
                  <span className="py-2 leading-relaxed">
                    Je souhaite mettre mes compétences techniques et humaines au
                    service de projets ambitieux, tout en continuant à
                    progresser dans un secteur en constante évolution.
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
                donné un vrai sens de l&apos;organisation et de la
                communication.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
