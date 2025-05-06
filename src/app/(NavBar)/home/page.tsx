"use client";

import ExperienceTabs from "@/src/components/experiences/expriences";
import { useActiveSection } from "@/src/hooks/useActiveSection";
import { FC, useEffect, useState } from "react";
import AllProject from "@/src/components/projects/allProject";
import Contact from "@/src/components/contact/contact";
import AboutMe from "@/src/components/about/about";
import Navbar from "@/src/components/navBar/navBar";
 
const HomePage: FC = () => {
  const sections = ["Accueil", "A propos", "Experiences", "Projets", "Contact"];
  const active = useActiveSection(sections);
  const [activeSection, setActiveSection] = useState("Accueil");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="scroll-smooth">
      
      <Navbar />
      {/* SECTION HERO */}
      <section
        id="Accueil"
        className=" min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[500px] flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-[#FAF3E0]"
      >
        {/* Texte à gauche */}
        <div className="md:w-3/2 text-center md:text-left mt-10 md:mt-0">
          <span className="text-lg text-gray-600 block">
            Bonjour, je m'appelle
          </span>

          <h1 className="text-5xl font-extrabold text-gray-900 mt-2">
            Glenn Grente
          </h1>

          <span className="text-xl text-gray-700 mt-4 block">
            Développeur Full Stack
          </span>

          {/* Me contacter aligné à droite sous le titre */}
          <div className="mt-6 flex ">
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Image à droite */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/images/photo.jpeg"
            alt="Glenn Grente"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>
      </section>
      {/* SECTION À PROPOS */}
      <section id="A propos" className="min-h-96 px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold  mb-6">À propos</h2>
          <AboutMe />
        </div>
      </section>

      {/* SECTION EXPÉRIENCE */}
      <section id="Experiences" className="min-h-96 px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Expériences
          </h2>
          {/* Ton contenu ici */}
          <span className="text-gray-600">
            <ExperienceTabs />
          </span>
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section id="Projets" className="min-h-96 px-6 py-20 bg-[#FAF3E0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projets</h2>
          {/* Composant projets ici */}
          <span className="text-gray-600">
            <AllProject />
          </span>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="Contact" className="min-h-96 px-6 py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact</h2>
          <span className="text-gray-600 mb-4">
            Tu peux me contacter par email ou via LinkedIn.
          </span>
          <Contact />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
