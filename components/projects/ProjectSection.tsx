import React from "react";

//importing components
import ProjectCards from "./ProjectCards";

//importing data
import { projectsData } from "../../utils/myProjects-data";

const ProjectSection: React.FC = () => (
  <section className="pt-16">
    <div className="mt-16">
      <h1 className="text-3xl font-medium uppercase">Projects</h1>
      <p className="text-gray-300">
        I try to apply all my learned topics into practice by creating simple
        projects. Here are some of my favorite ones.
      </p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-7">
        {projectsData.map((project, index) => (
          <ProjectCards key={index} {...project} />
        ))}
      </div>
    </div>
    <div className="text-center max-w-max mx-auto w-3/4 pt-24">
      <blockquote>
        <span className="text-3xl font-medium">
          “Every great developer you know got there by solving problems they
          were unqualified to solve until they actually did it.”
        </span>
        <br />
        <span className="text-gray-500 text-lg">– Patrick McKenzi</span>
      </blockquote>
    </div>
  </section>
);

export default ProjectSection;
