import React from "react";

const Footer: React.FC = () => (
  <footer>
    <div className="bg-black w-screen min-h-max text-gray-300 mt-20 flex flex-col md:flex-row py-5 md:py-16">
      <div className="w-full md:w-4/12 text-center flex flex-col justify-center">
        <div className="max-w-max text-center md:text-left mx-auto">
          <p className="text-3xl font-bold">Yash Aryan</p>
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="font-medium">
              <span className="text-green-500">Designer</span> |{" "}
              <span className="text-green-500">Developer</span> |{" "}
              <span className="text-green-500">Explorer</span>
            </p>
            <p className="font-light">Working on finding my thing. </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-8/12 flex flex-col justify-center">
        <div className="max-w-max text-center md:text-right mx-auto px-3 md:px-0">
          <blockquote>
            <span className="font-normal text-lg text-gray-500">
              &quot;People don&apos;t care about what you say, they care about
              what you build.&quot;
            </span>
            <br />- <span className="text-blue-300 mr-5">Mark Zuckerberg</span>
          </blockquote>
        </div>
      </div>
    </div>
    <div className="w-screen bg-gray-400 py-2">
      <p className="text-lg text-center">
        Created by <span className="font-black">Yash Aryan</span>
      </p>
    </div>
  </footer>
);

export default Footer;
