import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// // importing components
import DesignSection from "../components/designs/DesignSection";

const Designs: NextPage = () => (
  <React.Fragment>
    <Head>
      <title>Designs | Yash Aryan</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="px-5 md:px-20 lg:px-32 text-gray-200">
      <DesignSection />
    </div>
  </React.Fragment>
);

export default Designs;
