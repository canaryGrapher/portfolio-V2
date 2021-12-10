import React from "react";
import Image from "next/image";

//importing interfaces
import { ICertificates } from "../../interfaces/certificates";

const CertificateCards: React.FC<ICertificates> = (props) => (
  <div className="flex flex-col justify-between w-full">
    <div className="flex flex-col justify-start">
      <div className="w-full">
        <Image
          src={props.image}
          alt={props.name}
          width={16}
          height={9}
          layout="responsive"
        />
      </div>
      <div className="w-full top-0">
        <p className="font-bold text-lg">{props.name}</p>
        <table className="table-auto">
          <tbody>
            <tr className="px-5">
              <td className="pr-3 text-gray-500">Issued By: </td>
              <td className="text-white">{props.organization}</td>
            </tr>
            <tr className="bg-emerald-200">
              <td className="pr-3 text-gray-500">Issued: </td>
              <td className="text-white">{props.issuedDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <a href={props.link} target="_blank">
        <div className="px-4 py-2 bg-purple-500 hover:bg-gray-300 hover:text-black text-center w-full mt-2 rounded">
          <p>View Certificate</p>
        </div>
      </a>
    </div>
  </div>
);

export default CertificateCards;
