"use client";
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className="flex gap-x-2" onClick={toggle}>
      <div>
        <Image src="/images/icon-sun-dark.svg" width={30} height={30} />
      </div>
      <div
        className="border w-[60px] rounded-full bg-[#A729F5] flex items-center cursor-pointer"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      >
        <div className="border bg-white  h-[20px] w-[20px] rounded-full ms-1"></div>
      </div>
      <div>
        <Image src="/images/icon-moon-dark.svg" width={30} height={30} />
      </div>
    </div>
  );
};

export default DarkModeToggle;
