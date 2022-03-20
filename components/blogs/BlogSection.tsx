import React from "react";

//importing components
import BlogCards from "./BlogCards";

//importing interfaces
import { IBlogResponse } from "../../interfaces/blogs";

const BlogSection: React.FC<IBlogResponse> = (props) => {
  return (
    <section className="pt-16">
      <div className="mt-16">
        <h1 className="text-3xl font-medium uppercase">Blogs</h1>
        <p className="text-gray-300">
          I write about my experiences and learnings. Here are some of my
          favorite ones.
        </p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-7">
          {props.posts.map((blog, index) => (
            <BlogCards {...blog} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center max-w-max mx-auto w-3/4 pt-24">
        <blockquote>
          <span className="text-3xl font-medium">
            &quot;The first step in blogging is not writing them but reading
            them.&quot;
          </span>
          <br />
          <span className="text-gray-500 text-lg">– Jeff Jarvis</span>
        </blockquote>
      </div>
    </section>
  );
};

export default BlogSection;
