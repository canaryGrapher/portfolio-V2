import React, { useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";

import * as gtag from "../lib/gtag";

// // importing components
import WebinarSection from "../components/webinars/WebinarSection";

const Webinars: NextPage = () => {
  useEffect(() => {
    gtag.event({
      action: "page_visited",
      category: "Page Visit",
      label: "Page visited",
      value: "Webinars",
    });
  });
  return (
    <React.Fragment>
      <Head>
        <title>Webinars | Yash Aryan</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="px-5 md:px-20 lg:px-32 text-gray-200">
        <WebinarSection />
      </div>
    </React.Fragment>
  );
};

export default Webinars;
