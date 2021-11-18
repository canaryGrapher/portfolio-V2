import React from "react";
import Image from "next/image";

//importing interfaces
import { IDesigns } from "../../interfaces/designs";

const DesignCards: React.FC<IDesigns> = (props) => (
  <div className="flex flex-col w-full">
    <div className="w-full">
      <Image src={props.image} alt={props.name} width={600} height={400} />
    </div>
    <div className="w-full">
      <div>
        <p className="font-bold text-lg">{props.name}</p>
        <p className="text-gray-300">{props.description}</p>
      </div>
    </div>
  </div>
);

export default DesignCards;
