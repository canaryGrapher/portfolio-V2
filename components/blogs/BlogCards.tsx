import React from "react";
import Image from "next/image";

//importing interfaces
import { IBlogs } from "../../interfaces/blogs";

const BlogCards: React.FC<IBlogs> = (props) => (
  <div className="w-full">
    <Image src={props.image} alt={props.title} width={500} height={340} />
    <a href={props.link} target="_blank">
      <div>
        <h2 className="text-2xl font-medium text-white">{props.title}</h2>
        <p className="text-gray-300">{props.description}</p>
        <p className="text-gray-600">{props.date}</p>
      </div>
    </a>
  </div>
);

export default BlogCards;
