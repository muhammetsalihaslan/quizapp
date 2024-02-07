import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

const ScorePage = ({ isrc, title, score, numberOfQuestion }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="flex justify-center mt-[4rem]  ">
      <div className="flex justify-between w-3/4">
        <div>
          <div className="text-[50px] text-[#313E51]">Quiz component</div>
          <div className="text-[#313E51] font-bold text-[50px]">You scored</div>
        </div>
        <div>
          <div className="bg-white w-[500px] h-[400px]   ">
            <div className="flex flex-col justify-center items-center ">
              <div className="flex items-center gap-x-2 mt-10">
                <Image src={isrc} width={50} height={50} />
                <span className="font-bold text-[28px] text-[#313E51]">
                  {title}
                </span>
              </div>
              <div className="text-[150px] text-[#313E51]">{score}</div>
              <div className="text-[#313E51] text-[25px]">
                out of {numberOfQuestion}
              </div>
            </div>
          </div>
          <button
            className="w-[500px] border rounded-lg bg-[#A729F5] h-[60px] mt-5 text-white text-[28px] font-bold"
            onClick={handleClick}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
