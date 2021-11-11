import React from "react";

//importing icons
import {
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaStackOverflow,
  FaNpm,
  FaMedium,
  FaCalendarDay,
} from "react-icons/fa";

const ContactSection: React.FC = () => (
  <section className="pt-10">
    <h2 className="text-blue-600 text-2xl font-bold">Let's Connect</h2>
    <p className="w-2/4">
      Wanna connect? Ping me on anyone of the social media handles. I promise
      I'll try not to be boring.
    </p>
    <div className="mt-7 grid grid-cols-4 gap-10">
      <div className="flex flex-col justify-center text-center font-medium">
        <FaLinkedin size={"3em"} className="mx-auto my-5" />
        <p>LinkedIn</p>
      </div>
      <div className="flex flex-col justify-center text-center font-medium">
        <FaDiscord size={"3em"} className="mx-auto my-5" />
        <p>Discord</p>
      </div>
      <div className="flex flex-col justify-center text-center font-medium">
        <FaEnvelope size={"3em"} className="mx-auto my-5" />
        <p>Email</p>
      </div>
      <div className="flex flex-col justify-center text-center font-medium">
        <FaGithub size={"3em"} className="mx-auto my-5" />
        <p>Github</p>
      </div>
      <div className="flex flex-col justify-center text-center font-medium">
        <FaStackOverflow size={"3em"} className="mx-auto my-5" />
        <p>Stackoverflow</p>
      </div>
      <div className="flex flex-col justify-center text-center font-medium">
        <FaNpm size={"3em"} className="mx-auto my-5" />
        <p>NpmJS</p>
      </div>
      <div className="flex flex-col justify-center text-center font-medium">
        <FaMedium size={"3em"} className="mx-auto my-5" />
        <p>Medium</p>
      </div>
      <div className="flex flex-col justify-center text-center font-medium">
        <FaCalendarDay size={"3em"} className="mx-auto my-5" />
        <p>Calendly</p>
      </div>
    </div>
  </section>
);

export default ContactSection;
