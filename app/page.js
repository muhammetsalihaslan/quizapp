import QuizLink from "@/components/quizLink";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row lg:justify-center  p-5  h-fit w-screen lg:gap-x-[5rem] lg:mt-[3rem] ">
      <div className=" mt-[5rem]  ">
        <div className="flex lg:flex-col">
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
        <QuizLink
          src="/images/react-svgrepo-com.svg"
          href="/react"
          title="REACT"
        />
        <QuizLink
          src="/images/nextjs-icon-svgrepo-com.svg"
          href="/nextjs"
          title="NEXTjs"
        />
        <QuizLink
          src="/images/icon-js.svg"
          href="/javascript"
          title="JavaScript"
        />
        <QuizLink
          src="/images/tailwind-css-svgrepo-com.svg"
          href="/tailwindcss"
          title="tailwindcss"
        />
      </div>
    </main>
  );
}
