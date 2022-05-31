import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//importing assets
import { PictureOfYash, FullPictureOfYash } from "../../../assets/home";

//importing animations
import { hiddenToVisible } from "../../../animations/variants";

const LandingBanner: React.FC = () => {
  return (
    <section
      className="w-screen max-h-screen text-white flex flex-col-reverse md:flex-row"
      style={{ backgroundColor: "#e63946" }}
    >
      <div className="w-11/12 h-10/12 mx-auto bg-white">
        <div className="flex flex-col justify-center">
          <div className="inline">
            <p className="text-7xl text-black font-black">
              HELLO VISITOR! I AM YASH ARYAN AND I AM A DEVELOPER LIVING IN
              INDIA AND THIS IS MY SPACE ON THE INTERNET
            </p>
            <Image
              src={PictureOfYash}
              height={550}
              width={550}
              alt="Author's picture"
              className="float-right"
            />
          </div>
        </div>
        {/* <motion.div
        className="flex flex-col justify-end pb-2 md:pb-0 text-right"
        initial="hidden"
        animate="visible"
        variants={hiddenToVisible}
      >
        <div className="hidden md:flex rounded-none">
          <Image
            src={PictureOfYash}
            height={650}
            width={650}
            alt="Author's picture"
            className=""
          />
        </div>
        <div className="flex md:hidden rounded-full">
          <Image
            src={FullPictureOfYash}
            height={650}
            width={650}
            alt="Author's picture"
            className=""
          />
        </div>
      </motion.div> */}
      </div>
    </section>
  );
};

export default LandingBanner;
