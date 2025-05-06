import { FC } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Link from "next/link";

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
    title: "ProSeeqle",
    image: "/images/seeqle-logo.jpg",
    alt: "Seeqle",
    link: "https://www.seeqle.com/",
    label: "Seeqle.com",
    slug: "proSeeqle",
  },
  {
    title: "OneLogic",
    image: "/images/onelogic.png",
    alt: "OneLogic",
    link: "https://www.onelogic.fr/",
    label: "Onelogic.com",
    slug: "co2",
  },
  {
    title: "Projet Personnel",
    image: "/images/weather.png",
    alt: "Weather",
    slug: "weather",
  },
  // {
  //   title: "Projet Personnel",
  //   image: "/images/pictionis.png",
  //   alt: "Pictionis",
  //   slug: "pictionis",
  // },
  {
    title: "Projet Personnel",
    image: "/images/Wonders.png",
    alt: "Wonders",
    slug: "wonders",
  },
];

const AllProject: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 px-6">
      {projects.map(({ title, image, alt, link, label, slug }, index) => (
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
              <img
                src={image}
                alt={alt}
                className={`rounded-xl ${
                  alt === "Wonders"
                    ? "h-32 w-40 bg-gray-800 p-2"
                    : alt === "Weather" || alt === "Pictionis"
                    ? "h-32 w-40"
                    : "h-20 w-60"
                }`}
              />
            </CardContent>
          </Link>
          <CardFooter className="bg-gray-100 p-4 flex justify-between w-full">
            <p>{title}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-cyan-300 transition-colors duration-300 font-bold"
              >
                {label}
              </a>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AllProject;
