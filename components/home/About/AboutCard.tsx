import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//importing interfaces
import { IAboutCard } from "../../../interfaces/home";

// importing animations
import { zoomOnHover } from "../../../animations/onHover";

const AboutCard: React.FC<IAboutCard> = (props) => (
  <motion.div className="mx-auto" whileHover={zoomOnHover}>
    <div
      className={
        props.odd
          ? "card flex flex-col md:flex-row-reverse"
          : "card flex flex-col md:flex-row"
      }
    >
      <div className="w-full md:w-3/12 text-center flex flex-col justify-center">
        <Image
          src={props.image}
          alt={"About me supporting image"}
          width={180}
          height={160}
        />
      </div>
      <div
        className={
          props.odd
            ? "w-full md:w-9/12 flex flex-col justify-center text-justify md:text-right md:pr-5"
            : "w-full md:w-9/12 flex flex-col justify-center text-justify md:text-left md:pl-5"
        }
      >
        <h3 className="font-bold text-3xl mx-auto md:mx-0">{props.year}</h3>
        <p>{props.info}</p>
      </div>
    </div>
  </motion.div>
);

export default AboutCard;
