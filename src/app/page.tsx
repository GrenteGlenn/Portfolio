"use client";

import ExperienceTabs from "@/src/components/experiences/expriences";
import { FC, useEffect, useState } from "react";
import AllProject from "@/src/components/projects/allProject";
import Contact from "@/src/components/contact/contact";
import AboutMe from "@/src/components/about/about";
import Navbar from "@/src/components/navBar/navBar";
import Image from "next/image";

const sections = ["Accueil", "A propos", "Experiences", "Projets", "Contact"];
const HomePage: FC = () => {
  const [activeSection, setActiveSection] = useState("Accueil");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <main className="scroll-smooth">
      <Navbar />
      {/* SECTION HERO */}
      <section
        id="Accueil"
        className=" min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[500px] flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-white"
      >
        {/* Texte à gauche */}
        <div className="md:w-3/2 text-center md:text-left mt-10 md:mt-5">
          <h1 className="text-5xl font-extrabold text-gray-900 mt-2">
            Glenn Grente
          </h1>

          <span className="text-6xl text-slate-600 mt-4 flex">
            Développeur Full Stack
          </span>

          <span className="mt-4 text-lg text-slate-500 flex">
            React • Next.js • TypeScript • Node.js • Angular
          </span>

          <div className="mt-6 flex ">
            <a
              href="#Projets"
              className="px-6 py-3 border  text-white font-medium rounded bg-blue-600 transition hover:bg-blue-700 border-blue-500"
            >
              Mes Projets
            </a>
          </div>
          
        </div>

        {/* Image à droite */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/photo.jpeg"
            alt="Glenn Grente"
            width={256}
            height={256}
            className="w-64 h-64 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>
      {/* SECTION À PROPOS */}
      <section
        id="A propos"
        className="min-h-96 px-6 py-20 border-slate-200 bg-slate-100"
      >
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
      <section id="Projets" className="min-h-96 px-6 py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projets</h2>
          <span className="text-gray-600">
            <AllProject />
          </span>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="Contact" className="min-h-96 px-6 py-10 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact</h2>
          <span className="text-gray-600 mb-4">
            Vous pouvez me contacter par email ou via LinkedIn.
          </span>
          <Contact />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
