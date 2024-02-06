selected === option
  ? "ms-5  bg-[#A729F5]  text-[white] w-[40px] flex justify-center text-[28px] font-bold rounded-lg"
  : "ms-5  bg-[#F4F6FA]  text-[#626C7F] w-[40px] flex justify-center text-[28px] font-bold rounded-lg";

selected === option
  ? "w-[500px] shadow-lg rounded-lg h-fit  flex flex-row items-center border-2 border-[#A729F5] bg-white cursor-pointer p-3 mb-2"
  : "w-[500px] shadow-lg rounded-lg h-fit  flex flex-row items-center border bg-white cursor-pointer p-3 mb-2";


                  ${
                      isCorrect
                        ? " border-2 border-[#26D782]"
                        : "border-2 border-[#EE5454]"
                    }



  isSelected ? " border-2 border-[#A729F5]" : " border"