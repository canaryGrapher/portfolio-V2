import Link from "next/link";
import Image from "next/image";

//importing assets
import { Logo } from "../../assets/common";

const Navbar = () => (
  <div>
    <header className="w-full h-12 flex flex-col justify-center bg-theme text-white">
      <nav className="flex flex-row justify-start">
        <div className="h-full flex flex-col justify-center">
          <Image src={Logo} height={50} width={65} />
        </div>
        <div className="self-center ml-6 font-medium">
          <Link href="/">
            <a className="mr-10 text-lg hover:text-blue-400">About</a>
          </Link>
          <Link href="/about">
            <a className="mr-10 text-lg hover:text-blue-400">Skills</a>
          </Link>
          <Link href="/users">
            <a className="mr-10 text-lg hover:text-blue-400">Experience</a>
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
