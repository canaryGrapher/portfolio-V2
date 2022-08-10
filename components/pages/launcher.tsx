import Image from "next/image";
import Link from "next/link";
import { IconPropsTypes } from "../../types/pages/Home";

const Icon = (IconProps: IconPropsTypes) => {
  return (
    <Link href={IconProps.path} passHref>
      <div className="flex flex-col my-5">
        <div
          id="icon"
          className="flex flex-col justify-center h-16 w-16 mx-auto rounded-xl shadow-xl mb-2 cursor-pointer hover:shadow-2xl p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <Image src={IconProps.icon} alt={IconProps.name} />
        </div>
        <p>{IconProps.name}</p>
      </div>
    </Link>
  );
};

export default Icon;
