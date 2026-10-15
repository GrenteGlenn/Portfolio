import { FC } from "react";
import Image from "next/image";
import Navbar from "@/src/components/navBar/navBar";
import AboutMe from "@/src/components/about/about";
import AllProject from "@/src/components/projects/allProject";
import Contact from "@/src/components/contact/contact";
import ExperienceLists from "@/src/components/experiences/experiences";

const stats = [
  {
    value: "800",
    label: "participants simultanés sur un dispositif événementiel temps réel",
    color: "text-violet-600",
  },
  {
    value: "Angular → Next.js",
    label: "migration d'un SaaS de recrutement utilisé en production",
    color: "text-blue-600",
  },
  {
    value: "6",
    label: "microservices Node.js testés en CI sur un projet d'équipe",
    color: "text-emerald-600",
  },
];

const HomePage: FC = () => {
  return (
    <main className="scroll-smooth">
      <Navbar />

      {/* SECTION HERO */}
      <section
        id="Accueil"
        className="relative overflow-hidden bg-[#FAFAF8] pt-32 pb-24"
      >
        {/* Halos de couleur décoratifs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-blue-100 opacity-70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-40 left-[-15%] h-[420px] w-[420px] rounded-full bg-violet-100 opacity-60 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
            {/* Texte à gauche */}
            <div className="flex max-w-3xl flex-col gap-7">
              <span className="inline-flex items-center gap-2.5 self-start rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-sm font-medium text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Disponible pour un CDI · Paris / hybride
              </span>

              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Développeur Full Stack{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  TypeScript
                </span>
                .
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                3 ans d&apos;expérience en entreprise sur des produits SaaS en
                production, avec React, Next.js, Angular, Node.js et PostgreSQL.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#Projets"
                  className="inline-flex min-h-12 items-center rounded-xl bg-blue-600 px-6 font-medium text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Voir mes projets
                </a>
                <a
                  href="#Contact"
                  className="inline-flex min-h-12 items-center rounded-xl border border-slate-300 bg-white px-6 font-medium text-slate-900 transition hover:border-slate-400"
                >
                  Me contacter
                </a>
              </div>
            </div>

            {/* Photo à droite, avec un cadre en dégradé */}
            <div className="relative shrink-0">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-blue-500 to-violet-500"
              />
              <Image
                src="/images/photo.jpeg"
                alt="Glenn Grente"
                width={200}
                height={240}
                priority
                className="relative h-60 w-52 rounded-3xl object-cover ring-4 ring-white"
              />
            </div>
          </div>

          <dl className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col gap-2 bg-white p-6"
              >
                <dt className="order-2 leading-snug text-slate-600">
                  {stat.label}
                </dt>
                <dd
                  className={`order-1 text-3xl font-semibold tracking-tight ${stat.color}`}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SECTION EXPÉRIENCES */}
      <section
        id="Experiences"
        className="scroll-mt-20 border-y border-[#E4E4E0] bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-[1120px]">
          <SectionTitle
            index="01"
            eyebrow="EXPÉRIENCES"
            title="Là où j'ai livré du code en production"
          />
          <ExperienceLists />
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section id="Projets" className="scroll-mt-20 bg-[#FAFAF8] px-6 py-24">
        <div className="mx-auto max-w-[1120px]">
          <SectionTitle index="02" eyebrow="PROJETS" title="Études de cas" />
          <p className="-mt-6 mb-12 max-w-2xl text-[17px] leading-relaxed text-[#3D424D]">
            Pour chaque projet : le contexte, mon rôle exact, le problème
            technique le plus intéressant et ce que j&apos;en ai tiré.
          </p>
          <AllProject />
        </div>
      </section>

      <section id="Contact" className="scroll-mt-20 bg-white px-6 py-28">
        <div className="mx-auto max-w-[1120px]">
          <Contact />
        </div>
      </section>

      <footer className="border-t border-[#E4E4E0] bg-[#FAFAF8]">
        <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-3 px-6 py-7 text-sm text-[#6A707C]">
          <span>© {new Date().getFullYear()} Glenn Grente</span>
          <span>Paris, France</span>
        </div>
      </footer>
    </main>
  );
};

const SectionTitle: FC<{ index: string; eyebrow: string; title: string }> = ({
  index,
  eyebrow,
  title,
}) => (
  <div className="mb-10 flex flex-col gap-3">
    <p className="font-mono text-[13px] tracking-[0.08em]">
      <span className="text-blue-600">{index}</span>
      <span className="text-slate-500"> — {eyebrow}</span>
    </p>
    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
      {title}
    </h2>
  </div>
);

export default HomePage;
