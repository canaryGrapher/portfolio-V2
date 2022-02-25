import React from "react";
import Image from "next/image";

//importing components
import SkillCard from "./SkillCard";
import ToolsandTechChart from "./ToolsandTechChart";

// importing assets
import { SelfTaughtBadge } from "../../../assets/home";

//importing data
import { skillsData, toolsAndTechnologies } from "../../../utils/mySkills-data";

const SkillsSection: React.FC = () => (
  <section className="pt-28" id="skills">
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-blue-600 text-4xl font-bold">Skills</h2>
        <p className="text-justify">
          I am a self-taught person. From learning to drive a car on my own to
          making fullstack web-apps, I have taught myself everything by
          observing others doing it, with occasional guidance from an
          experienced person. Youtube, Coursera, Udemy, EdX, Linkedin Learning,
          Stackoverflow and Reddit have been my greatest teachers and I believe
          in an open-learning world.
        </p>
      </div>
      <div className="w-full md:w-1/2 text-center">
        <Image
          src={SelfTaughtBadge}
          alt="Self-Taught Badge"
          width={300}
          height={250}
        />
      </div>
    </div>

    <div className="pt-7">
      <h2 className="text-blue-600 text-2xl font-bold">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-5">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>

    <div className="pt-7">
      <h2 className="text-blue-600 text-2xl font-bold">
        Tools and Technologies
      </h2>
      <div className="flex flex-col">
        {toolsAndTechnologies.map((tool, index) => (
          <ToolsandTechChart key={index} {...tool} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
