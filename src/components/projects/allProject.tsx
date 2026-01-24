import { FC } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

interface Project {
  title: string;
  image: string;
  alt: string;
  link?: string;
  label?: string;
  slug?: string;
}

const projects: Project[] = [
  {
    title: "Human Things",
    image: "/images/humanThings.png",
    alt: "Human Things",
    label: "Freelance",
    slug: "HumanThings",
  },
  {
    title: "ProSeeqle",
    image: "/images/seeqle-logo.jpg",
    alt: "Seeqle",
    link: "https://www.seeqle.com/",
    label: "CDD",
    slug: "proSeeqle",
  },
  {
    title: "OneLogic",
    image: "/images/onelogic.png",
    alt: "OneLogic",
    link: "https://www.onelogic.fr/",
    label: "CDD",
    slug: "co2",
  },
  {
    title: "Projet Master",
    image: "/images/Wonders.png",
    alt: "Wonders",
    slug: "wonders",
  },
];

const AllProject: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 px-6">
      {projects.map(({ title, image, alt, label, slug }, index) => (
        <Card
          key={index}
          className="bg-white shadow-xl rounded-xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
        >
          <Link
            href={`/projects/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <CardContent className="flex flex-col justify-center items-center p-4 h-60 ">
              <Image
                src={image}
                alt={alt}
                width={160}
                height={160}
                className={`rounded-xl ${
                  alt === "Wonders" ? "bg-gray-800 p-2" : ""
                } ${
                  alt === "ProSeeqle" ||
                  alt === "Wonders" ||
                  alt === "CO2"   ||
                  alt === "Human Things"
                    ? "h-40 w-40"
                    : "h-30 w-60"
                }`}
              />
            </CardContent>
          </Link>
          <CardFooter className="bg-gray-100 p-4 flex justify-between w-full">
            <p className="text-slate-900">{title}</p>

            <span className="text-slate-500  transition-colors duration-300 font-bold">
              {label}
            </span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AllProject;
