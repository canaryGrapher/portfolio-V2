import { useState } from "react";

import { IconPropsTypes } from "../../types/pages/Home";
import { useInstalledAppInformation } from "../../hooks/index";

import Icon from "../../components/pages/launcher";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const appData = useInstalledAppInformation();
  return (
    <div className="px-20">
      {/* Search bar */}
      <div className="flex flex-row justify-center ">
        <div className="w-full mb-10">
          <input
            type="search"
            placeholder="Search for an app"
            className="w-full md:w-1/2 px-5 py-1 rounded-lg shadow-lg focus:outline-none"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {/* Icon container */}
      <div className="grid grid-cols-5">
        {appData
          .filter((app: IconPropsTypes) =>
            app.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((app: IconPropsTypes) => (
            <Icon key={app.id} {...app} />
          ))}
      </div>
    </div>
  );
};

export default Home;

// {
/* <Icon title="Profile" />
        <Icon title="Experience" />
        <Icon title="Education" />
        <Icon title="Story" />
        <Icon title="Skills" />
        <Icon title="Blogs" />
        <Icon title="Webinars" />
        <Icon title="Certificates" />
        <Icon title="Achievements" />
        <Icon title="Projects" />
        <Icon title="Designs" />
        <Icon title="Journal" />
        <Icon title="Contact" /> */
// }
