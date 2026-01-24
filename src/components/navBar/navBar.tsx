"use client";
import { useActiveSection } from "@/src/hooks/useActiveSection";
import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar: FC = () => {
  const sections = ["Accueil", "A propos", "Experiences", "Projets", "Contact"];
  const active = useActiveSection(sections);

  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isDarkPage =
    pathname === "/projects/co2" ||
    pathname === "/projects/proSeeqle" ||
    pathname === "/projects/weather" ||
    pathname === "/projects/wonders";
  const anchorBase = isDarkPage ? "/" : "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 px-6 py-6 z-50 transition-colors duration-300 ${
        isDarkPage ? "bg-gray-600" : "bg-[#FAF3E0]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-blue-600">&lt;/&gt;</span>
          <span className="font-bold text-lg">Glenn</span>
        </div>

        {/* Mobile toggle button */}
        <button
          className="sm:hidden text-black dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </button>

        {/* Navigation links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-6 text-md font-medium items-center mt-4 sm:mt-0`}
        >
          {sections.map((id) => (
            <Link
              key={id}
              href={`${anchorBase}#${id}`}
              scroll={true}
              className={`transition-colors duration-300 ${
                active === id
                  ? isDarkPage
                    ? "text-blue-400 font-semibold"
                    : "text-blue-600 font-semibold"
                  : isDarkPage
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
          <a
            href="/images/Cv.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm sm:text-md"
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;