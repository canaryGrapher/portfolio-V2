import React from "react";
import Image from "next/image";

//importing interfaces
import { ISkills } from "../../../interfaces/home";

const SkillCard: React.FC<ISkills> = (props) => (
  <div className="skill-card flex flex-col">
    <Image src={props.image} alt={props.title} height={200} width={200} />
    <p className="font-bold text-lg mt-2">{props.title}</p>
    <p className="text-justify">{props.info}</p>
  </div>
);

export default SkillCard;
