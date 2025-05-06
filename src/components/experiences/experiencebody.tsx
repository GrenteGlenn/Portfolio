import { FC } from "react";
import OneLogic from "./onlogic";
import Minarm from "./etna";
import Seeqle from "./seeqle";

const Experience: FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center relative pt-20">

      {/* Contenu */}
      <div className="justify-start items-start flex flex-col w-9/12 relative h-full ">
        <Seeqle />
        <OneLogic />
        <Minarm />
      </div>
    </div>
  );
};

export default Experience;
