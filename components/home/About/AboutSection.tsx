import React from "react";
import Image from "next/image";

//importing components
import AboutCard from "./AboutCard";

//importing data
import { aboutData } from "../../../utils/myStory-data";

const AboutSection: React.FC = () => {
  return (
    <section className="pt-28">
      <h2 className="text-blue-600 text-4xl font-bold">About me</h2>
      <p>Here’s my story about why and how I am, what I am!</p>
      <div className="pt-10">
        {aboutData.map((item, index) => {
          const alignment = index % 2 === 0 ? false : true;
          return <AboutCard key={index} {...item} odd={alignment} />;
        })}
      </div>
    </section>
  );
};

export default AboutSection;
