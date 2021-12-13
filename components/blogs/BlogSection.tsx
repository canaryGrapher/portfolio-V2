import React from "react";

//importing components
import BlogCards from "./BlogCards";

//importing data
// import { projectsData } from "../../utils/projects-data";

const BlogSection: React.FC = () => (
  <section className="pt-16">
    <div className="mt-16">
      <h1 className="text-3xl font-medium uppercase">Blogs</h1>
      <p className="text-gray-300">
        I write about my experiences and learnings. Here are some of my favorite
        ones.
      </p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-x-3 gap-y-7">
        {/* {projectsData.map((project, index) => (
          <ProjectCards key={index} {...project} />
        ))} */}
        <BlogCards
          title="Store images on MongoDB"
          description="I am a self-taught human. With learning to drive a car on my own to making fullstack web-apps, I..."
          link="https://www.google.com"
          image="https://ik.imagekit.io/canarygrapher/Portfolio/home/yash_0OaJ0OZgbB3.png?updatedAt=1636352713644"
          date="May 24, 2021"
        />
      </div>
    </div>
  </section>
);

export default BlogSection;
