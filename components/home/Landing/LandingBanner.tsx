import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//importing assets
import { PictureOfYash } from "../../../assets/home";

//importing animations
import { hiddenToVisible } from "../../../animations/variants";

const LandingBanner: React.FC = () => {
  return (
    <section className="w-full max-h-min text-white flex flex-col-reverse md:flex-row pt-10">
      <div className="flex flex-col justify-center text-center md:text-left pb-5 md:pb-0">
        <p className="text-3xl font-medium">
          <span className="text-blue-400">Hi!</span> My name is
        </p>
        <h1 className="md:text-9xl font-bold mb-3 leading-none">Yash Aryan.</h1>
        <p className="text-3xl font-medium">
          I am a <span className="text-flag-orange">full-stack developer</span>{" "}
          from <span className="text-flag-green">India</span>
        </p>
      </div>
      <motion.div
        className="flex flex-col justify-center pb-2 md:pb-0"
        initial="hidden"
        animate="visible"
        variants={hiddenToVisible}
      >
        <Image
          src={PictureOfYash}
          height={650}
          width={650}
          alt="Author's picture"
          className="rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default LandingBanner;
