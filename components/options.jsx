import React from "react";

const Options = () => {
  return (
    <div>
      <ul className="w-[500px] shadow-lg rounded-lg h-fit  flex flex-row items-center border bg-white cursor-pointer p-3">
        <div className="ms-5  bg-[#F4F6FA]  text-[#626C7F] w-[40px] flex justify-center text-[28px] font-bold rounded-lg">
          A
        </div>
        <div className="text-[28px] text-[black] font-bold w-[350px] ms-10  flex justify-center items-center  text-center">
          React is a framework for JavaScript
        </div>
      </ul>
      <button className="w-[500px] border rounded-lg bg-[#A729F5] h-[60px] mt-5 text-white text-[28px] font-bold">
        Submit
      </button>
    </div>
  );
};

export default Options;
