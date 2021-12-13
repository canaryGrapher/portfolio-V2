import React from "react";
import Image from "next/image";

//importing assets
import { PictureOfYash } from "../../../assets/home";

const LandingBanner: React.FC = () => {
  return (
    <section className="w-full max-h-min text-white flex flex-col-reverse md:flex-row pt-10">
      <div className="flex flex-col justify-center text-center md:text-left pb-5 md:pb-0">
        <p className="text-3xl font-medium">
          <span className="text-blue-400">Hi!</span> My name is
        </p>
        <h1 className="text-7xl md:text-9xl font-bold mb-3">Yash Aryan.</h1>
        <p className="text-3xl font-medium">
          I am a <span className="text-flag-orange">full-stack developer</span>{" "}
          from <span className="text-flag-green">India</span>
        </p>
      </div>
      <div className="flex flex-col justify-center pb-2 md:pb-0">
        <Image src={PictureOfYash} height={700} width={607} />
      </div>
    </section>
  );
};

export default LandingBanner;
