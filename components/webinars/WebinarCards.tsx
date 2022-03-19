import React from "react";
import Image from "next/image";

//importing interfaces
import { IWebinars } from "../../interfaces/webinars";

const WebinarCards: React.FC<IWebinars> = (props) => (
  <div className="flex flex-col w-full">
    <div className="w-full">
      <Image src={props.image} alt={props.name} width={600} height={600} />
    </div>
    <div className="w-full text-left">
      <div>
        <p className="font-bold text-lg">{props.name}</p>
        <p>{props.description}</p>
        <p className="text-blue-300">
          {props.link && <a href={props.link}>View event</a>}
        </p>
      </div>
    </div>
  </div>
);

export default WebinarCards;
