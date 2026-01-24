import { notFound } from "next/navigation";
import ProjectRenderer from "./ProjectRenderer";

const validSlugs = ["co2", "proSeeqle", "wonders", "HumanThings"];
  
export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  if (!validSlugs.includes(params.slug)) {
    notFound();
  }

  return <ProjectRenderer slug={params.slug} />;
}

