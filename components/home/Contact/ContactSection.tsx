import React from "react";

//importing icons
import {
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaNpm,
  FaMedium,
  FaStackOverflow,
  FaCalendarPlus,
} from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";

const ContactSection: React.FC = () => (
  <section className="pt-10">
    <h2 className="text-blue-600 text-2xl font-bold">Let&apos;s Connect</h2>
    <p className="w-full md:w-2/4">
      Wanna connect? Ping or follow me on anyone of the social media handles. I
      promise I&apos;ll try not to be boring.
    </p>
    <div className="mt-7 grid grid-cols-4 md:grid-cols-4 gap-10">
      <a
        href="https://www.linkedin.com/in/yasharyan/"
        target="_blank"
        rel="noreferrer"
        className="max-w-max px-10  mx-auto flex flex-col justify-center text-center font-medium hover:bg-gray-200 hover:text-black"
      >
        <FaLinkedin size={"3em"} className="mx-auto my-5" />
        <p>LinkedIn</p>
      </a>
      <a
        href="https://dev.to/canarygrapher"
        target="_blank"
        rel="noreferrer"
        className="max-w-max px-10  mx-auto flex flex-col justify-center text-center font-medium hover:bg-gray-200 hover:text-black"
      >
        <SiDevdotto size={"3em"} className="mx-auto my-5" />
        <p>Dev.to</p>
      </a>
      <a
        href="mailto:mail@yasharyan.com"
        target="_blank"
        rel="noreferrer"
        className="max-w-max px-10  mx-auto flex flex-col justify-center text-center font-medium hover:bg-gray-200 hover:text-black"
      >
        <FaEnvelope size={"3em"} className="mx-auto my-5" />
        <p>Email</p>
      </a>
      <a
        href="https://github.com/canaryGrapher/"
        target="_blank"
        rel="noreferrer"
        className="max-w-max px-10  mx-auto flex flex-col justify-center text-center font-medium hover:bg-gray-200 hover:text-black"
      >
        <FaGithub size={"3em"} className="mx-auto my-5" />
        <p>Github</p>
      </a>
      <a
        href="https://twitter.com/canaryGrapher"
        target="_blank"
        rel="noreferrer"
        className="max-w-max px-10  mx-auto flex flex-col justify-center text-center font-medium hover:bg-gray-200 hover:text-black"
      >
        <FaTwitter size={"3em"} className="mx-auto my-5" />
        <p>Twitter</p>
      </a>
      <a
        href="https://www.npmjs.com/~canarygrapher"
        target="_blank"
        rel="noreferrer"
        className="max-w-max px-10  mx-auto flex flex-col justify-center text-center font-medium hover:bg-gray-200 hover:text-black"
      >
        <FaNpm size={"3em"} className="mx-auto my-5" />
        <p>NpmJS</p>
      </a>
      <a
        href="https://medium.com/@theprogrammersrant"
        target="_blank"
        rel="noreferrer"
        className="max-w-max px-10  mx-auto flex flex-col justify-center text-center font-medium hover:bg-gray-200 hover:text-black"
      >
        <FaMedium size={"3em"} className="mx-auto my-5" />
        <p>Medium</p>
      </a>
      <a
        href="https://stackoverflow.com/users/11288471/canarygrapher"
        target="_blank"
        rel="noreferrer"
        className="max-w-max px-10  mx-auto flex flex-col justify-center text-center font-medium hover:bg-gray-200 hover:text-black"
      >
        <FaStackOverflow size={"3em"} className="mx-auto my-5" />
        <p>StackOverflow</p>
      </a>
    </div>
    <hr className="my-7" />
    <div className="w-full text-center">
      <p className="text-xl font-bold">Wanna talk?</p>
      <p>
        Schedule a meetup on Calendly.{" "}
        <a
          href="https://calendly.com/yasharyan"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:bg-gray-200 flex flex-col max-w-max p-3 mx-auto mt-2 border-2 border-blue-600 hover:border-gray-200"
        >
          <FaCalendarPlus size={"2em"} className="mx-auto" />
          Schedule now
        </a>
      </p>
    </div>
  </section>
);

export default ContactSection;
