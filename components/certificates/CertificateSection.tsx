import React from "react";

//importing components
import CertificateCards from "./CertificateCards";

//importing data
import {
  certificateData,
  distinctIssuers,
} from "../../utils/myCertificate-data";

const CertificateSection: React.FC = () => (
  <section className="pt-16 min-h-screen">
    <div className="py-16">
      <h1 className="text-3xl font-medium uppercase">Certificates</h1>
      <p className="text-gray-300 pb-10">
        I do a lot of online courses to expand my knowledge about different
        fields of study. These are my achievements.
      </p>

      {distinctIssuers.map((issuer, indexOuter) => (
        <div className="pb-10" key={indexOuter}>
          <p className="text-gray-400">Issued by</p>
          <p className="text-2xl font-black pb-2">{issuer}</p>
          <div className="py-1 grid grid-cols-4 gap-5">
            {certificateData.map((certificate, indexInner) =>
              certificate.organization === issuer ? (
                <CertificateCards key={indexInner} {...certificate} />
              ) : null
            )}
          </div>
        </div>
      ))}
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
