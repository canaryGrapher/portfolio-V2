import Link from "next/link";
import Image from "next/image";

//importing assets
// import { Logo } from "assets/common/index";

const Navbar = () => (
  <div>
    <header className="w-full h-12 flex flex-col justify-center bg-gray-800">
      <nav>
        <Image
          src={
            "https://ik.imagekit.io/canarygrapher/Portfolio/common/Logo?updatedAt=1636291596553"
          }
          width={50}
          height={20}
        />
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/about">
          <a>Skills</a>
        </Link>
        <Link href="/users">
          <a>Experience</a>
        </Link>
        <a href="/api/users">Blog</a>
      </nav>
    </header>
  </div>
);

export default Navbar;
