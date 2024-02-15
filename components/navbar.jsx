import React from "react";
import DarkModeToggle from "./darkModeToggle";
import Image from "next/image";

const Navbar = ({ src, title }) => {
  return (
    <div className="flex justify-between lg:justify-center lg:items-center  mt-10 ">
      <div className="flex justify-between lg:w-3/4 w-screen p-5 lg:p-0">
        <div className="flex gap-x-2 items-center">
          <Image src={src} width={src ? 40 : 0} height={src ? 40 : 0} />
          <div className="font-bold cursor-pointer text-xl ">{title}</div>
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
