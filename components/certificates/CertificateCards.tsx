import React from "react";
import Image from "next/image";

//importing interfaces
import { ICertificates } from "../../interfaces/certificates";

const CertificateCards: React.FC<ICertificates> = (props) => (
  <div className="p-2 flex flex-col justify-between w-full border-2 border-gray-500 rounded-lg">
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
      <div className="w-full pb-2">
        <p className="text-lg text-center text-green-500">{props.name}</p>
        <table className="table-auto mx-auto text-sm">
          <tbody>
            <tr className="bg-emerald-200">
              <td className="pr-3 text-gray-500">Issued: </td>
              <td className="text-white">{props.issuedDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="px-4 py-2 text-gray-800 font-medium bg-gray-300 hover:bg-green-500 text-center w-full mt-2 rounded">
          <p>View Certificate</p>
        </div>
      </a>
    </div>
  </div>
);

export default CertificateCards;
