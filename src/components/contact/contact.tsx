import { FC } from "react";

const links = [
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/glenn-grente/", external: true },
  { label: "GitHub ↗", href: "https://github.com/GrenteGlenn", external: true },
  { label: "CV en PDF", href: "/images/Cv.pdf", external: false },
];

const Contact: FC = () => (
  <div className="flex flex-col gap-7">
    <p className="font-mono text-[13px] tracking-[0.08em] text-[#6A707C]">04 — CONTACT</p>

    <h2 className="max-w-[820px] text-4xl font-semibold leading-[1.08] tracking-tight text-[#15171C] sm:text-[52px]">
      Je cherche un CDI de développeur full stack.
    </h2>

    <p className="max-w-[620px] text-[19px] leading-relaxed text-[#3D424D]">
      Vous recrutez sur une stack TypeScript, React ou Angular ? Écrivez-moi directement.
    </p>

    <div className="flex flex-wrap gap-3 pt-2">
      <a
        href="mailto:grenteglennpro@gmail.com"
        className="inline-flex min-h-12 items-center rounded-xl bg-[#15171C] px-[22px] text-[15px] font-medium text-white transition-colors hover:bg-[#3D424D]"
      >
        grenteglennpro@gmail.com
      </a>

      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : { download: true })}
          className="inline-flex min-h-12 items-center rounded-xl border border-[#CFCFC9] px-[22px] text-[15px] font-medium text-[#15171C] transition-colors hover:border-[#15171C]"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

export default Contact;