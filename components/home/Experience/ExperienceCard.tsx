import React from "react";
import Image from "next/image";

//importing interfaces
import { IExperience } from "../../../interfaces/home";

const ExperienceCard: React.FC<IExperience> = (props) => (
  <React.Fragment>
    <div className="w-full hidden md:flex border border-gray-200 p-5 my-3">
      <div className="flex flex-col justify-center">
        <Image src={props.image} height={100} width={100} layout="fixed" />
      </div>
      <div className="pl-5 w-full flex flex-col">
        <div className="flex">
          <p className="text-lg font-bold">{props.name}</p>
          <p className="text-sm text-gray-600 pl-4 my-auto font-medium">
            {props.timeline}
          </p>
        </div>
        <p className="text-blue-600 font-medium">
          {props.designation}
          <span className="text-gray-400 font-normal text-xs ml-1">
            - {props.role}
          </span>
        </p>
        <p className="text-justify">{props.description}</p>
      </div>
    </div>
    <div className="w-full flex flex-col md:hidden border border-gray-200 p-5 my-3">
      <div className="flex justify-center pb-2">
        <div className="w-4/12">
          <Image
            src={props.image}
            height={100}
            width={100}
            layout="fixed"
            className="rounded-full"
          />
        </div>
        <div className="pl-5 w-8/12 flex flex-col justify-center">
          <div>
            <p className="text-lg font-bold">{props.name}</p>
            <p className="text-sm text-gray-600 font-medium">
              {props.timeline}
            </p>
          </div>
        </div>
      </div>
      <p className="text-blue-600 font-medium">
        {props.designation}
        <span className="text-blue-200 ml-1">({props.role})</span>
      </p>
      <p>{props.description}</p>
    </div>
  </React.Fragment>
);

export default ExperienceCard;
