import React, { useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";

import * as gtag from "../lib/gtag";
import Home from "./launcher";

//importing components

const IndexPage: NextPage = () => {
  useEffect(() => {
    gtag.event({
      action: "page_visited",
      category: "Page Visit",
      label: "Page visited",
      value: "Home",
    });
  });
  return (
    <React.Fragment>
      <Head>
        <title>Yash Aryan</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Home /> */}
    </React.Fragment>
  );
};

export default IndexPage;
