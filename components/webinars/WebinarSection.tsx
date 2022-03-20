import React from "react";

//importing components
import WebinarCards from "./WebinarCards";

//importing data
import { webinarData } from "../../utils/myWebinars-data";

const WebinarSection: React.FC = () => (
  <section className="pt-10 min-h-screen">
    <div className="py-16">
      <h1 className="text-3xl font-medium uppercase">Webinars</h1>
      <p className="text-gray-300">
        I like interacting with people and believe in open education. Every now
        and then, I share whatever I know through webinars
      </p>
      <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {webinarData.map((webinar, index) => (
          <WebinarCards key={index} {...webinar} />
        ))}
      </div>
    </div>
    <div className="text-center max-w-max mx-auto w-3/4 pt-24">
      <blockquote>
        <span className="text-3xl font-medium">
          &quot;I am always ready to learn although I do not always like being
          taught&quot;
        </span>
        <br />
        <span className="text-gray-500 text-lg">– Winston Churchill</span>
      </blockquote>
    </div>
  </section>
);

export default WebinarSection;
