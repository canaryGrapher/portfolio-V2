import React from "react";

const Footer: React.FC = () => (
  <footer>
    <div className="bg-black w-screen h-44 text-gray-300 mt-40 flex">
      <div className="w-4/12 text-center flex flex-col justify-center">
        <div className="max-w-max text-left mx-auto">
          <p className="text-3xl font-bold">Yash Aryan</p>
          <div>
            <p className="font-medium">
              <span className="text-green-500">Designer</span> |{" "}
              <span className="text-green-500">Developer</span> |{" "}
              <span className="text-green-500">Explorer</span>
            </p>
            <p className="font-light">Working on finding my thing. </p>
          </div>
        </div>
      </div>
      <div className="w-8/12 flex flex-col justify-center">
        <div className="max-w-max text-right mx-auto">
          <blockquote>
            <span className="font-normal text-lg">
              "People don't care about what you say, they care about what you
              build."
            </span>
            <br />- <span className="text-blue-600 mr-5">Mark Zuckerberg</span>
          </blockquote>
          <div className="text-center mt-2">
            <p className="text-gray-500">
              Email me on{" "}
              <a className="text-green-300" href="mailto:mail@yasharyan.com">
                mail@yasharyan.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-screen bg-gray-400 py-2">
      <p className="text-lg text-center">
        Created by <span className="font-medium ">Yash Aryan</span>
      </p>
    </div>
  </footer>
);

export default Footer;
