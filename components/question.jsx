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
              const isAnswer = quiz.questions[noq].answer;
              const isCorrect = isSubmitted && selected === option && isAnswer;
              return (
                <ul key={index}>
                  <li
                    className={`w-[500px] shadow-lg rounded-lg h-fit  flex flex-row items-center  bg-white cursor-pointer p-3 mb-2 ${
                      selected === option
                        ? " border-2 border-[#A729F5]"
                        : " border"
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    <div
                      className={`ms-5 w-[40px] flex justify-center text-[28px] font-bold rounded-l ${
                        selected === option
                          ? "bg-[#A729F5]  text-[white]"
                          : "bg-[#F4F6FA]  text-[#626C7F] "
                      }`}
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
