import React from "react";
import Image from "next/image";

//importing interfaces
import { IBlogs } from "../../interfaces/blogs";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BlogCards: React.FC<IBlogs> = (props) => {
  const publishedDate = new Date(props.dateAdded);
  return (
    <div className="w-full">
      <Image
        src={props.coverImage}
        alt={props.title}
        width={500}
        height={340}
      />
      <a
        href={"https://blogs.yasharyan.com/" + props.slug}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <h2 className="text-lg text-white font-bold">{props.title}</h2>
          <p className="text-gray-400 text-justify">{props.brief}</p>
          <p className="text-blue-400">
            {months[publishedDate.getMonth()] +
              " " +
              publishedDate.getDate() +
              ", " +
              publishedDate.getFullYear()}
          </p>
        </div>
      </a>
    </div>
  );
};

export default BlogCards;
