import React from "react";
import Image from "next/image";

//importing interfaces
import { ISkills } from "../../../interfaces/home";

const SkillCard: React.FC<ISkills> = (props) => (
  <div className="skill-card flex flex-col">
    <Image src={props.image} alt={props.title} height={170} width={300} />
    <p className="font-bold text-lg mt-2">{props.title}</p>
    <p>{props.info}</p>
  </div>
);

export default SkillCard;
