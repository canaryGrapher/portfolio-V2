import React, { useEffect } from "react";
import Head from "next/head";
import { NextPage } from "next";

import * as gtag from "../lib/gtag";

//importing components
import LandingBanner from "../components/home/Landing/LandingBanner";
import AboutSection from "../components/home/About/AboutSection";
import SkillsSection from "../components/home/Skills/SkillsSection";
import ExperienceSection from "../components/home/Experience/ExperienceSection";
import FlauntSection from "../components/home/Flaunt/FlauntSection";
import ContactSection from "../components/home/Contact/ContactSection";

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
      <div className="px-5 md:px-20 lg:px-32 text-gray-200 pt-5">
        <LandingBanner />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <FlauntSection />
        <ContactSection />
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
