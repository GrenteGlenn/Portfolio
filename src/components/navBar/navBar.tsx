"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/src/hooks/useActiveSection";

// Les ids doivent correspondre exactement aux id des <section> de page.tsx.
// Défini hors du composant : un tableau recréé à chaque rendu relancerait l'observer en boucle.
const links = [
  { id: "Experiences", label: "Expériences" },
  { id: "Projets", label: "Projets" },
  // { id: "Competences", label: "Compétences" }, // à activer quand la section existera
  { id: "Contact", label: "Contact" },
];
const sectionIds = links.map((link) => link.id);

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const pathname = usePathname();

  // Sur toute autre page que l'accueil, les ancres doivent ramener à "/"
  const anchorBase = pathname === "/" ? "" : "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E4E4E0] bg-[#FAFAF8]">
      <nav className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-6 py-[18px]">
        <Link
          href={`${anchorBase}#Accueil`}
          className="text-[17px] font-semibold tracking-tight text-[#15171C]"
        >
          Glenn Grente
        </Link>

        {/* Bouton du menu mobile */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#15171C] hover:bg-[#F1F1EE] md:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Liens */}
        <div
          id="menu-principal"
          className={`${
            menuOpen ? "flex" : "hidden"
          } w-full flex-col gap-2 pb-2 text-[15px] md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:pb-0`}
        >
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <Link
                key={link.id}
                href={`${anchorBase}#${link.id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? "true" : undefined}
                className={`py-2 transition-colors md:py-0 ${
                  isActive ? "font-medium text-[#15171C]" : "text-[#3D424D] hover:text-[#15171C]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="/images/Cv.pdf"
            download
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#15171C] px-[18px] font-medium text-[#15171C] transition-colors hover:bg-[#15171C] hover:text-white"
          >
            Télécharger le CV
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;