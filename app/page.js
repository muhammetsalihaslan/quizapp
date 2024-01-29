import Navbar from "@/components/navbar";
import data from "@/public/data/data.json";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar title="Quiz App" />
      <main className="flex flex-col lg:flex-row lg:justify-center  p-5  h-fit w-screen lg:gap-x-[5rem] lg:mt-[3rem] ">
        <div className=" mt-[5rem]  ">
          <div className="md:flex justify-center  lg:justify-normal lg:flex-col">
            <div className="text-[45px] lg:text-[60px] text-[#313E51] font-normal">
              Welcome to the
            </div>
            <div className="ms-3 lg:ms-0 text-[45px] lg:text-[60px] font-bold text-[#313E51] ">
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
              className="flex h-[68px] p-1 items-center gap-x-[5rem] mt-[2rem] rounded-md shadow-md bg-[#FFFFFF] cursor-pointer"
            >
              <Image src={quiz.icon} width={50} height={50} className="ms-5" />
              <div className="text-xl font-bold text-[#313E51]">
                {quiz.title}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
