import Link from "next/link";
import Image from "next/image";

//importing assets
import { Logo } from "../../assets/common";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => (
  <div>
    <header className="fixed w-full h-12 flex flex-col justify-center bg-theme text-white bg-theme z-50 py-5">
      <nav className="flex flex-row justify-end md:justify-start">
        {/* Navbar for mobile devices */}
        <div className="self-center mr-3 font-medium flex md:hidden">
          <p className="my-auto mr-2 text-gray-400">Links</p>
          <GiHamburgerMenu className="text-gray-400 text-4xl mr-2" />
        </div>
        <div className="h-full hidden md:flex flex-col justify-center">
          <Image src={Logo} height={50} width={65} />
        </div>
        {/* Navbar for large screen devices */}
        <div className="self-center ml-6 font-medium hidden md:flex">
          <Link href="/">
            <a className="mr-10 text-lg hover:text-blue-400">About</a>
          </Link>
          <Link href="/">
            <a className="mr-10 text-lg hover:text-blue-400">Skills</a>
          </Link>
          <Link href="/">
            <a className="mr-10 text-lg hover:text-blue-400">Experience</a>
          </Link>
          <Link href="/projects">
            <a className="mr-10 text-lg hover:text-blue-400">Projects</a>
          </Link>
          <a
            className="mr-10 text-lg hover:text-blue-400"
            href="https://blogs.yasharyan.com/"
            target="_blank"
          >
            Blog
          </a>
        </div>
      </nav>
    </header>
  </div>
);

export default Navbar;
