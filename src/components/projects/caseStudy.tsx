import { FC, ReactNode } from "react";
import Link from "next/link";
import ProjectGallery, { Slide } from "./projectGallery";

interface Meta {
  label: string;
  value: string;
}

export interface CaseStudyProps {
  category: string;
  title: string;
  subtitle: string;
  meta: Meta[];
  slides: Slide[];
  context: ReactNode;
  contributions: string[];
  challenge?: { problem: string; solution: string };
  architecture?: string[];
  results?: { value: string; label: string }[];
  learnings?: string;
  links?: { label: string; href: string }[];
  proprietary?: boolean;
  next: { slug: string; title: string };
}

const Block: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => (
  <section className="flex flex-wrap gap-x-16 gap-y-4">
    <h2 className="max-w-[280px] flex-[1_1_220px] text-2xl font-semibold tracking-tight text-[#15171C]">
      {title}
    </h2>
    <div className="min-w-0 flex-[999_1_520px] text-[17px] leading-[1.7] text-[#3D424D]">
      {children}
    </div>
  </section>
);

const CaseStudy: FC<CaseStudyProps> = (props) => (
  <div className="bg-[#FAFAF8] text-[#15171C]">
    {/* En-tête */}
    <header className="mx-auto flex max-w-[1120px] flex-col gap-6 px-6 pb-14 pt-32">
      <Link
        href="/#Projets"
        className="self-start text-[15px] text-[#3D424D] hover:text-[#15171C]"
      >
        ← Tous les projets
      </Link>
      <p className="font-mono text-[13px] tracking-[0.08em] text-[#6A707C]">
        ÉTUDE DE CAS · {props.category.toUpperCase()}
      </p>
      <h1 className="max-w-[900px] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
        {props.title}
      </h1>
      <p className="max-w-[720px] text-[19px] leading-relaxed text-[#3D424D]">
        {props.subtitle}
      </p>

      <dl className="mt-4 flex flex-wrap border-t border-[#15171C]">
        {props.meta.map((item) => (
          <div
            key={item.label}
            className="flex flex-[1_1_200px] flex-col gap-1.5 pr-6 pt-5"
          >
            <dt className="font-mono text-xs tracking-[0.06em] text-[#6A707C]">
              {item.label.toUpperCase()}
            </dt>
            <dd className="leading-normal">{item.value}</dd>
          </div>
        ))}
      </dl>
    </header>

    {/* Captures */}
    <div className="mx-auto max-w-[1120px] px-6 pb-20">
      <ProjectGallery slides={props.slides} />{" "}
    </div>

    {/* Contenu */}
    <article className="mx-auto flex max-w-[1120px] flex-col gap-[72px] px-6 pb-24">
      <Block title="Le contexte">{props.context}</Block>

      <Block title="Ce que j'ai fait">
        <ul className="flex list-disc flex-col gap-2.5 pl-5">
          {props.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Block>

      {props.architecture && (
        <Block title="L'architecture">
          <ul className="flex list-disc flex-col gap-2.5 pl-5">
            {props.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>
      )}

      {props.challenge && (
        <Block title="Le défi technique">
          <p>{props.challenge.problem}</p>
          <div className="mt-5 flex flex-col gap-3 rounded-xl border border-[#E4E4E0] bg-white px-7 py-6">
            <p className="font-mono text-xs tracking-[0.06em] text-[#6A707C]">
              LA SOLUTION
            </p>
            <p>{props.challenge.solution}</p>
          </div>
        </Block>
      )}

      {props.results && (
        <Block title="Le résultat">
          <div className="flex flex-wrap gap-4">
            {props.results.map((result) => (
              <div
                key={result.label}
                className="flex flex-[1_1_200px] flex-col gap-2 rounded-xl border border-[#E4E4E0] bg-white p-6"
              >
                <p className="text-[32px] font-semibold tracking-tight text-[#15171C]">
                  {result.value}
                </p>
                <p className="text-[15px] leading-normal">{result.label}</p>
              </div>
            ))}
          </div>
        </Block>
      )}

      {props.learnings && (
        <Block title="Ce que j'en retiens">
          <p>{props.learnings}</p>
        </Block>
      )}

      {(props.links?.length || props.proprietary) && (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px]">
          {props.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#1E3FB4] hover:text-[#142C82] hover:underline"
            >
              {link.label} ↗
            </a>
          ))}
          {props.proprietary && (
            <p className="text-[#6A707C]">
              Code propriétaire : le dépôt n&apos;est pas public. Je peux
              présenter l&apos;architecture et mes choix en entretien.
            </p>
          )}
        </div>
      )}
    </article>

    {/* Projet suivant + contact */}
    <section className="border-t border-[#E4E4E0] bg-white">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-6 px-6 py-14">
        <div className="flex flex-col gap-1.5">
          <p className="font-mono text-xs tracking-[0.06em] text-[#6A707C]">
            PROJET SUIVANT
          </p>
          <Link
            href={`/projects/${props.next.slug}`}
            className="text-2xl font-semibold tracking-tight text-[#15171C] hover:underline"
          >
            {props.next.title} →
          </Link>
        </div>
        <a
          href="mailto:grenteglennpro@gmail.com"
          className="inline-flex min-h-12 items-center rounded-lg bg-[#15171C] px-[22px] text-[15px] font-medium text-white hover:bg-[#3D424D]"
        >
          Me contacter pour un CDI
        </a>
      </div>
    </section>
  </div>
);

export default CaseStudy;
