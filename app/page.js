"use client";
import Navbar from "@/components/navbar";
import { useTheme } from "@/context/ThemeContext";

import data from "@/public/data/data.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { mode } = useTheme();

  const ClassName = mode === "light" ? "bg-white" : "bg-[#3B4D66]";
  return (
    <>
      <Navbar title="Quiz App" />
      <main className="flex flex-col lg:flex-row lg:justify-center  p-5  h-fit w-screen lg:gap-x-[5rem] lg:mt-[3rem] ">
        <div className=" mt-[5rem]  ">
          <div className="md:flex justify-center  lg:justify-normal lg:flex-col">
            <div className="text-[45px] lg:text-[60px]  font-normal">
              Welcome to the
            </div>
            <div className="ms-3 lg:ms-0 text-[45px] lg:text-[60px] font-bold  ">
              Frontend Quiz!
            </div>
          </div>
          <div className="italic text-[#626C7F] mt-[5rem]">
            Pick a subject to get started
          </div>
        </div>
        <div className="flex flex-col mt-[5rem]  lg:w-2/5 lg:ms-[3rem]">
          {data.quizzes.map((quiz) => (
            <Link
              href={quiz.title.toLowerCase()}
              className={`flex h-[68px] p-1 items-center gap-x-[5rem] mt-[2rem] rounded-md shadow-md  cursor-pointer ${ClassName}`}
            >
              <Image src={quiz.icon} width={50} height={50} className="ms-5" />
              <div className="text-xl font-bold ">{quiz.title}</div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
