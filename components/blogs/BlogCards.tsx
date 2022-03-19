import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//importing interfaces
import { IBlogs } from "../../interfaces/blogs";

//importing constants
import { months } from "../../constants";

//importing animations
import { zoomOnHover } from "../../animations/onHover";

const BlogCards: React.FC<IBlogs> = (props) => {
  const publishedDate = new Date(props.dateAdded);
  return (
    <motion.div className="w-full" whileHover={zoomOnHover}>
      <Image
        src={props.coverImage}
        alt={props.title}
        width={500}
        height={340}
        layout="responsive"
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
    </motion.div>
  );
};

export default BlogCards;
