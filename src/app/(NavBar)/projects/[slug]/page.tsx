// src/app/projects/[slug]/page.tsx

"use client";
import Co2 from "@/src/components/projects/co2";
import ProSeeqle from "@/src/components/projects/proSeeqle";
import Weather from "@/src/components/projects/weather";
import Wonders from "@/src/components/projects/wonders";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function ProjectDetails() {
  const { slug } = useParams();

  // Retournez le contenu approprié selon le slug
  switch (slug) {
    case "co2":
      return (
        <div className=" min-h-screen relative px-12">
          <div className="flex flex-col gap-16 mt-20 mx-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            ></motion.section>

            <Co2 />
          </div>
        </div>
      );

    case "weather":
      return (
        <div className="jarvis-container min-h-screen relative px-12">
          <div className="flex flex-col gap-16 mt-20 mx-8">
            <Weather />
          </div>
        </div>
      );

    // case "pictionis":
    //   return (
    //     <div className="jarvis-container min-h-screen relative px-12">
    //       <div className="flex flex-col gap-16 mt-20 mx-8">
    //         <Pictionis />
    //       </div>
    //     </div>
    //   );
    case "proSeeqle":
      return (
        <div className="jarvis-container min-h-screen relative px-12">
          <div className="flex flex-col gap-16 mt-20 mx-8">
            <ProSeeqle />
          </div>
        </div>
      );
    case "wonders":
      return (
        <div className="jarvis-container min-h-screen relative px-12">
          <div className="flex flex-col gap-16 mt-20 mx-8">
            <Wonders />
          </div>
        </div>
      );

    // Ajoutez d'autres cas pour chaque projet
  }
}
