import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// // importing components
import BlogSection from "../components/blogs/BlogSection";

const Blogs: NextPage = () => (
  <React.Fragment>
    <Head>
      <title>Blogs | Yash Aryan</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="px-20 md:px-32 text-gray-200">
      <BlogSection />
    </div>
  </React.Fragment>
);

export default Blogs;
