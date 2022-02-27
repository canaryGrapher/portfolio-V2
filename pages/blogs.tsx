import React from "react";
import Head from "next/head";
import { NextPage } from "next";

import { GetServerSideProps } from "next";

// // importing components
import BlogSection from "../components/blogs/BlogSection";

// importing interfaces
import { IBlogResponse } from "../interfaces/blogs";

const Blogs: NextPage<IBlogResponse> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Blogs | Yash Aryan</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="px-5 md:px-20 lg:px-32 text-gray-200">
        <BlogSection {...props} />
      </div>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const SITE_URL =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://yasharyan.com";
  const response = await fetch(`${SITE_URL}/api/blogs`);
  const data = await response.json();
  return {
    props: {
      posts: data.posts,
    },
  };
};

export default Blogs;
