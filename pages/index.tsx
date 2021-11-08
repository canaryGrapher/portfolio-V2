import Head from "next/head";
import React from "react";

//importing components
import LandingBanner from "../components/home/Landing/LandingBanner";
import AboutSection from "../components/home/About/AboutSection";
import SkillsSection from "../components/home/Skills/SkillsSection";

const IndexPage = () => (
  <React.Fragment>
    <Head>
      <title>Yash Aryan</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="px-20 md:px-32 text-gray-200">
      <LandingBanner />
      <AboutSection />
      <SkillsSection />
    </div>
  </React.Fragment>
);

export default IndexPage;
