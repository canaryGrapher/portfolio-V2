import React from "react";
import Image from "next/image";

//importing interfaces
import { IAboutCard } from "../../../interfaces/home";

const AboutCard: React.FC<IAboutCard> = (props) => (
  <div className="mx-auto">
    <div
      className={
        props.odd
          ? "card flex flex-col md:flex-row-reverse"
          : "card flex flex-col md:flex-row"
      }
    >
      <div className="w-full md:w-4/12 text-center">
        <Image src={props.image} alt={"About me"} width={280} height={240} />
      </div>
      <div
        className={
          props.odd
            ? "w-full md:w-8/12 flex flex-col justify-center text-justify md:text-right md:pr-5"
            : "w-full md:w-8/12 flex flex-col justify-center text-justify md:text-left md:pl-5"
        }
      >
        <h3 className="font-bold text-3xl mx-auto md:mx-0">{props.year}</h3>
        <p>{props.info}</p>
      </div>
    </div>
  </div>
);

export default AboutCard;
