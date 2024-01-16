import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuizLink = ({ src, href, title }) => {
  return (
    <div className="flex h-[68px] p-1 items-center gap-x-[5rem] mt-[2rem] rounded-md shadow-md bg-[#FFFFFF]">
      <Image src={src} width={50} height={50} className="ms-5" />
      <Link href={href} className="text-xl font-bold text-[#313E51]">
        {title}
      </Link>
    </div>
  );
};

export default QuizLink;
