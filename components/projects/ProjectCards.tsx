import React from "react";
import Image from "next/image";

//importing interfaces
import { IProject } from "../../interfaces/projects";

const ProjectCards: React.FC<IProject> = (props) => (
  <div className="w-full">
    <Image
      src={props.image}
      alt={props.name}
      width={16}
      height={9}
      layout="responsive"
    />
    <div className="pt-2">
      <h2 className="text-2xl font-medium">{props.name}</h2>
      <p className="text-gray-300">{props.description}</p>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-200"
      >
        Source
      </a>
    </div>
  </div>
);

export default ProjectCards;
