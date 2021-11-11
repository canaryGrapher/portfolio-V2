import React from "react";

//importing interfaces
import { IToolsandTechnologies } from "../../../interfaces/home";

const ToolsandTechChart: React.FC<IToolsandTechnologies> = (props) => (
  <div className="w-full my-2 py-4 flex flex-row justify-between">
    <div className="w-2/12 text-right flex flex-col justify-center">
      <p className="font-bold">{props.title}</p>
    </div>
    <div className="w-10/12 flex flex-row pl-8">
      {props.tools.map((tool, index) => (
        <p key={index} className="px-2 py-1 mr-4 border-2 border-gray-500">
          {tool}
        </p>
      ))}
    </div>
  </div>
);

export default ToolsandTechChart;
