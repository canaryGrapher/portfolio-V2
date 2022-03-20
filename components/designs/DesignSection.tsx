import React from "react";

//importing components
import DesignCards from "./DesignCards";

//importing data
import { designData } from "../../utils/myDesigns-data";

const DesignSection: React.FC = () => (
  <section className="pt-16 min-h-screen">
    <div className="py-16">
      <h1 className="text-3xl font-medium uppercase">Designs</h1>
      <p className="text-gray-300">
        I create UI designs when I have free time or when the project demands.
        Here are a few of them.
      </p>
      <div className="py-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        {designData.map((design, index) => (
          <DesignCards key={index} {...design} />
        ))}
      </div>
    </div>
    <div className="text-center max-w-max mx-auto w-3/4 pt-24">
      <blockquote>
        <span className="text-3xl font-medium">
          &quot;Design isn’t finished until somebody is using it.&quot;
        </span>
        <br />
        <span className="text-gray-500 text-lg">– Brenda Laurel</span>
      </blockquote>
    </div>
  </section>
);

export default DesignSection;
