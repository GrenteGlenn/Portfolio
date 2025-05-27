"use client";

import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const components: Record<string, React.ComponentType> = {
  co2: dynamic(() => import("@/src/components/projects/co2")),
  weather: dynamic(() => import("@/src/components/projects/weather")),
  proSeeqle: dynamic(() => import("@/src/components/projects/proSeeqle")),
  wonders: dynamic(() => import("@/src/components/projects/wonders")),
};

export default function ProjectRenderer({ slug }: { slug: string }) {
  const Component = components[slug];

  if (!Component) return notFound();

  return (
    <div className="min-h-screen px-6 py-12">
      <Component />
    </div>
  );
}

