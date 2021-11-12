import React from "react";
import Head from "next/head";
import { NextPage } from "next";

//importing components
import LandingBanner from "../components/home/Landing/LandingBanner";
import AboutSection from "../components/home/About/AboutSection";
import SkillsSection from "../components/home/Skills/SkillsSection";
import ExperienceSection from "../components/home/Experience/ExperienceSection";
import FlauntSection from "../components/home/Flaunt/FlauntSection";
import ContactSection from "../components/home/Contact/ContactSection";

const IndexPage: NextPage = () => (
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
      <ExperienceSection />
      <FlauntSection />
      <ContactSection />
    </div>
  </React.Fragment>
);

export default IndexPage;
