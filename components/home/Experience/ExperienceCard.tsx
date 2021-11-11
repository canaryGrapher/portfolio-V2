import React from "react";
import Image from "next/image";

//importing interfaces
import { IExperience } from "../../../interfaces/home";

const ExperienceCard: React.FC<IExperience> = (props) => (
  <div className="w-full flex border border-gray-200 p-5 my-3">
    <div className="flex flex-col justify-center">
      <Image src={props.image} height={80} width={80} layout="fixed" />
    </div>
    <div className="pl-5 w-full flex flex-col">
      <div className="flex">
        <p className="text-lg font-bold">{props.name}</p>
        <p className="text-sm text-gray-600 pl-4 my-auto font-medium">
          {props.timeline}
        </p>
      </div>
      <p className="text-blue-600 font-medium">{props.designation}</p>
      <p>{props.description}</p>
    </div>
  </div>
);

export default ExperienceCard;
