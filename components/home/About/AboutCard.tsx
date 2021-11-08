import React from "react";
import Image from "next/image";

//importing interfaces
import { IAboutCard } from "../../../interfaces/home";

const AboutCard: React.FC<IAboutCard> = (props) => (
  <div className="py-2 w-10/12 mx-auto">
    <div
      className={
        props.odd ? "card flex flex-row-reverse" : "card flex flex-row"
      }
    >
      <div className="w-4/12 text-center">
        <Image src={props.image} alt={"About me"} width={280} height={240} />
      </div>
      <div
        className={
          props.odd
            ? "w-8/12 flex flex-col justify-center text-right"
            : "w-8/12 flex flex-col justify-center text-left"
        }
      >
        <h3 className="font-bold text-3xl">{props.year}</h3>
        <p>{props.info}</p>
      </div>
    </div>
  </div>
);

export default AboutCard;
