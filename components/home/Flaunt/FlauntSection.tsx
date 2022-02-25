import React from "react";

//importing components
import FlauntCard from "./FlauntCard";

//importing data
import { Flaunts } from "../../../utils/flaunt-data";

const FlauntSection: React.FC = () => (
  <section className="pt-10">
    <h2 className="text-blue-600 text-2xl font-bold">Flaunt Section</h2>
    <p>
      Wanna know what I do to make the most of my time? Here is all that I have
      ever done to hone my skills.
    </p>
    <div>
      {Flaunts.map((flaunt, index) => (
        <FlauntCard key={index} {...flaunt} />
      ))}
    </div>
  </section>
);

export default FlauntSection;
