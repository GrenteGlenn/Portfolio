"use client";

import { useState } from "react";
import Seeqle from "./seeqle";
import OneLogic from "./onlogic";
import Etna from "./etna";

const experiences = [
  { key: "seeqle", name: "Seeqle", component: <Seeqle /> },
  { key: "onelogic", name: "OneLogic", component: <OneLogic /> },
  { key: "etna", name: "ETNA", component: <Etna /> },
];

export default function ExperienceTabs() {
  const [active, setActive] = useState("seeqle");

  return (
    <section className="max-w-6xl mx-auto py-20 px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Tabs on the left */}
        <div className="flex md:flex-col border-l-2 border-red-500 text-sm font-mono w-full md:w-1/4">
          {experiences.map((exp) => (
            <button
              key={exp.key}
              onClick={() => setActive(exp.key)}
              className={`py-2 px-4 text-left hover:bg-red-50 border-b md:border-b-0 md:border-l-4 transition-all ${
                active === exp.key
                  ? "text-red-600 border-red-600 bg-red-50 font-bold"
                  : "text-gray-800 border-transparent"
              }`}
            >
              {exp.name}
            </button>
          ))}
        </div>

        {/* Detail on the right */}
        <div className="w-full md:w-3/4 border-l md:border-l-0 md:pl-8">
          {experiences.find((exp) => exp.key === active)?.component}
        </div>
      </div>
    </section>
  );
}
