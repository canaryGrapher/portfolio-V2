import React from "react";

//importing interfaces
import { IToolsandTechnologies } from "../../../interfaces/home";

const ToolsandTechChart: React.FC<IToolsandTechnologies> = (props) => (
  <div className="w-full my-2 md:py-4 flex flex-col md:flex-row justify-between">
    <div className="w-full md:w-2/12 md:text-right flex flex-col justify-center flex-nowrap">
      <p className="font-bold">{props.title}</p>
    </div>
    <div className="w-full md:w-10/12 flex flex-row flex-wrap pl-1 md:pl-8">
      {props.tools.map((tool, index) => (
        <p
          key={index}
          className="px-2 py-1 my-1 md:my-0 mr-1 md:mr-4 border-2 border-gray-500"
        >
          {tool}
        </p>
      ))}
    </div>
  </div>
);

export default ToolsandTechChart;
