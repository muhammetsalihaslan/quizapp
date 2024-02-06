"use client";
import React, { useState } from "react";

const Question = ({ question }) => {
  const [noq, setNoq] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [error, setError] = useState();

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleSubmit = () => {
    setShowNextQuestion(true);
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-center h-screen mt-[4rem] ">
      {question.map((quiz) => (
        <div className="w-3/4 justify-between flex h-3/4 flex-row ">
          <div className=" w-1/2 flex flex-col justify-between ">
            <div className="flex flex-col gap-y-8">
              <p className="italic text-[#626C7F]">
                Question {noq + 1} of {quiz.questions.length}
              </p>
              <p className="text-[36px] font-bold ">
                {quiz.questions[noq].question}
              </p>
            </div>
            <div className="border border-black w-[500px] rounded-full h-[15px] "></div>
          </div>
          <div>
            {quiz.questions[noq].options.map((option, index) => {
              const letter = String.fromCharCode(65 + index);
              const isAnswer = quiz.questions[noq].answer === option;
              const isSelected = selected === option;
              const bgColor = isSelected
                ? isAnswer
                  ? "bg-[#26D782] text-[white]"
                  : "bg-[#EE5454] text-[white]"
                : "bg-[#F4F6FA]";
              const borderColor =
                isSelected && isSubmitted
                  ? isAnswer
                    ? "border-2 border-[#26D782]"
                    : "border-2 border-[#EE5454]"
                  : "border-white";
              return (
                <ul key={index}>
                  <li
                    className={
                      isSubmitted
                        ? `w-[500px] shadow-lg rounded-lg h-fit  flex flex-row items-center  bg-white  p-3 mb-2 pointer-events-none ${borderColor}`
                        : `w-[500px] shadow-lg rounded-lg h-fit  flex flex-row items-center  bg-white cursor-pointer p-3 mb-2 ${
                            isSelected
                              ? " border-2 border-[#A729F5]"
                              : " border"
                          }`
                    }
                    onClick={() => handleOptionClick(option)}
                  >
                    <div
                      className={
                        isSubmitted
                          ? `ms-5 w-[40px] text-[#626C7F] flex justify-center text-[28px] font-bold rounded-l ${bgColor}`
                          : `ms-5 w-[40px] text-[#626C7F]  flex justify-center text-[28px] font-bold rounded-l  ${
                              isSelected
                                ? "  bg-[#A729F5] text-[white]"
                                : "bg-[#F4F6FA]"
                            }`
                      }
                    >
                      {letter}
                    </div>
                    <div className="text-[28px] text-[black] font-bold w-[350px] ms-10  flex justify-center items-center  text-center">
                      {option}
                    </div>
                  </li>
                </ul>
              );
            })}
            {!showNextQuestion ? (
              <button
                className="w-[500px] border rounded-lg bg-[#A729F5] h-[60px] mt-5 text-white text-[28px] font-bold"
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <button className="w-[500px] border rounded-lg bg-[#A729F5] h-[60px] mt-5 text-white text-[28px] font-bold">
                Next Question
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
