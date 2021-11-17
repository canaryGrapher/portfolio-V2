import React from "react";

//importing components
import ExperienceCard from "./ExperienceCard";

//importing data
import {
  myExperience,
  informalExperience,
} from "../../../utils/myExperience-data";

const ExperienceSection: React.FC = () => (
  <section className="pt-10" id="experience">
    <h2 className="text-blue-600 text-2xl font-bold">Experience</h2>
    <p>
      I learn best by practical applications. Here are the both formal, as well
      as informal experiences that have taught me what I know today.
    </p>
    <div>
      <h3 className="text-lg text-white font-bold pt-5">Formal Experience</h3>
      <div>
        {myExperience.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-lg text-white font-bold pt-5">Informal Experience</h3>
      <div>
        {informalExperience.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
