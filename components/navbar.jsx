import React from "react";
import DarkModeToggle from "./darkModeToggle";
import Image from "next/image";

const Navbar = ({ src, title }) => {
  return (
    <div className="flex justify-center items-center  mt-10 ">
      <div className="flex justify-between w-3/4 ">
        <div className="flex gap-x-1">
          <Image src={src} width={src ? 40 : 0} height={src ? 40 : 0} />
          <div className="font-bold cursor-pointer text-xl text-[#313E51]">
            {title}
          </div>
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
