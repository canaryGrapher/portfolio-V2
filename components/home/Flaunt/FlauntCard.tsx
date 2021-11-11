import React from "react";

//importing interfaces
import { IFlaunt } from "interfaces/home";

const FlauntCard: React.FC<IFlaunt> = (props) => (
  <div
    className="flex w-full my-5 p-16"
    style={{
      height: "70vh",
      backgroundImage: `url(${props.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="flex flex-col justify-center w-6/12">
      <h3 className="text-6xl font-bold">{props.title}</h3>
      <p className="text-2xl font-medium pt-2">{props.description}</p>
      <div className="mt-4 border-2 border-white max-w-max px-3 py-2 rounded-lg hover:bg-white hover:text-black cursor-pointer">
        <p className="font-bold">Take a peek</p>
      </div>
    </div>
  </div>
);

export default FlauntCard;