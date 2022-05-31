import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//importing assets
import { FullPictureOfYash } from "../../../assets/home";

//importing animations
import { hiddenToVisible } from "../../../animations/variants";

const LandingBannerOld: React.FC = () => {
  return (
    <section className="w-full max-h-min text-white flex flex-col-reverse md:flex-row pt-20">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-10 text-center md:text-left pb-5 md:pb-0">
        <div className="col-span-6 flex flex-col justify-center">
          <p className="text-3xl md:text-5xl lg:text-7xl font-black">
            HELLO VISITOR! I AM YASH ARYAN AND I AM A DEVELOPER LIVING IN{" "}
            <span className="text-flag-orange">IN</span>D
            <span className="text-flag-green">IA</span> AND THIS IS MY SPACE ON
            THE INTERNET
          </p>
        </div>
        <motion.div
          className="flex flex-col justify-center pb-2 md:pb-0 col-span-4"
          initial="hidden"
          animate="visible"
          variants={hiddenToVisible}
        >
          <Image
            src={FullPictureOfYash}
            height={1000}
            width={1000}
            alt="Author's picture"
            className="rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LandingBannerOld;
