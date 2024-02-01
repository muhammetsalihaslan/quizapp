"use client";
import React, { useState } from "react";

const Question = ({ question }) => {
  const [noq, setNoq] = useState(0);

  return (
    <div className="flex justify-center h-screen mt-[4rem] ">
      {question.map((quiz) => (
        <div className="w-3/4 justify-between flex h-3/4 flex-row mt-[3rem] ">
          <div className=" w-1/2 flex flex-col justify-between ">
            <div className="flex flex-col gap-y-8">
              <p className="italic text-[#626C7F]">
                Question {noq + 1} of {quiz.questions.length}
              </p>
              <p className="text-[36px] font-bold ">
                {quiz.questions[noq].question}
              </p>
            </div>
            <div className="border border-black w-[500px] rounded-full h-[15px]"></div>
          </div>
          <div>
            {quiz.questions[noq].options.map((option, index) => {
              const letter = String.fromCharCode(65 + index);
              return (
                <ul>
                  <li className="w-[500px] shadow-lg rounded-lg h-fit  flex flex-row items-center border bg-white cursor-pointer p-3">
                    <div className="ms-5  bg-[#F4F6FA]  text-[#626C7F] w-[40px] flex justify-center text-[28px] font-bold rounded-lg">
                      {letter}
                    </div>
                    <div className="text-[28px] text-[black] font-bold w-[350px] ms-10  flex justify-center items-center  text-center">
                      {option}
                    </div>
                  </li>
                </ul>
              );
            })}
            <button className="w-[500px] border rounded-lg bg-[#A729F5] h-[60px] mt-5 text-white text-[28px] font-bold">
              Submit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
