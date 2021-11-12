import React from "react";
import Image from "next/image";

//importing interfaces
import { IProject } from "../../interfaces/projects";

const ProjectCards: React.FC<IProject> = (props) => (
  <div className="w-full p-5 border border-white-200">
    <Image src={props.image} alt={props.name} width={1080} height={720} />
    <div className="mt-5">
      <h2 className="text-2xl font-medium text-center">{props.name}</h2>
      <p className="text-center">
        {props.description}
        {"  "}
        <a
          href={props.link}
          target="_blank"
          className="text-blue-500 hover:text-blue-200"
        >
          Source
        </a>
      </p>
    </div>
  </div>
);

export default ProjectCards;
