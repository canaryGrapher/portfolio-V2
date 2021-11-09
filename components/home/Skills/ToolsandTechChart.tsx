import React from "react";

//importing interfaces
import { IToolsandTechnologies } from "../../../interfaces/home";

const ToolsandTechChart: React.FC<IToolsandTechnologies> = (props) => (
  <div className="w-full my-2 py-4 flex flex-row justify-between">
    <div className="w-2/12 text-right">
      <p>{props.title}</p>
    </div>
    <div className="w-9/12 flex flex-row">
      {props.tools.map((tool) => (
        <p className="mr-4">{tool}</p>
      ))}
    </div>
  </div>
);

export default ToolsandTechChart;
