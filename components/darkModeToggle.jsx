"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import React from "react";

const DarkModeToggle = () => {
  const { mode, toggle } = useTheme();

  const buttonClassName = mode === "light" ? "ms-1" : "ms-8";
  return (
    <div className="flex gap-x-2">
      <div>
        <Image src="/images/icon-sun-dark.svg" width={30} height={30} />
      </div>
      <div
        className="border w-[60px] rounded-full bg-[#A729F5] flex items-center cursor-pointer"
        onClick={toggle}
      >
        <div
          className={`border bg-white  h-[20px] w-[20px] rounded-full ms-1 ${buttonClassName}`}
        ></div>
      </div>
      <div>
        <Image src="/images/icon-moon-dark.svg" width={30} height={30} />
      </div>
    </div>
  );
};

export default DarkModeToggle;
