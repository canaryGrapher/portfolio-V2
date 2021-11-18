import React from "react";

//importing components
import CertificateCards from "./CertificateCards";

//importing data
import { certificateData } from "../../utils/myCertificate-data";

const CertificateSection: React.FC = () => (
  <section className="pt-16 min-h-screen">
    <div className="py-16">
      <h1 className="text-3xl font-medium uppercase">Certificates</h1>
      <p className="text-gray-300">
        I do a lot of online courses to expand my knowledge about different
        fields of study. These are my achievements.
      </p>
      <div className="py-5 grid grid-cols-4 gap-5">
        {certificateData.map((project, index) => (
          <CertificateCards key={index} {...project} />
        ))}
        {/* <CertificateCards */}
      </div>
    </div>
    <div className="text-center max-w-max mx-auto w-3/4 pt-24">
      <blockquote>
        <span className="text-3xl font-medium">
          “I am always ready to learn although I do not always like being
          taught”
        </span>
        <br />
        <span className="text-gray-500 text-lg">– Winston Churchill</span>
      </blockquote>
    </div>
  </section>
);

export default CertificateSection;
