import React from "react";
import Image from "next/image";

//importing components
import AboutCard from "./AboutCard";

//importing data
import { aboutData } from "../../../utils/myStory-data";

//importing styles
import styles from "../../../styles/components.module.css";

// importing assets
import { Connector } from "../../../assets/common";

const AboutSection: React.FC = () => {
  return (
    <section className="pt-28" id="about">
      <h2 className="text-blue-600 text-4xl font-bold">About me</h2>
      <p>Here’s my story about why and how I am, what I am!</p>
      <div className="pt-10">
        {aboutData.map((item, index) => {
          const alignment = index % 2 === 0 ? false : true;
          return (
            <React.Fragment>
              {index != 0 && (
                <div className="w-full flex justify-center p-0 m-0">
                  <Image
                    src={Connector}
                    height={80}
                    width={20}
                    className="mx-auto"
                  />
                </div>
              )}
              <AboutCard key={index} {...item} odd={alignment} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
