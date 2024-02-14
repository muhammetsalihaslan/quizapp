"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ScorePage from "./scorePage";

const Question = ({ quizData, imagesrc, title }) => {
  const [noq, setNoq] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [error, setError] = useState(false);
  const [progressBar, setProgressBar] = useState(10);
  const [score, setScore] = useState(0);

  const numberOfQuestions = quizData.map((quiz) => quiz.questions.length);
  const currentQuestion = quizData.map((quiz) => quiz.questions[noq]);

  const errorRef = useRef(null);

  useEffect(() => {
    if (errorRef.current) {
      errorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [error]);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }

    if (selected == currentQuestion?.map((quiz) => quiz.answer)) {
      setScore(score + 1);
    }

    setShowNextQuestion(true);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setIsSubmitted(false);
    setSelected(null);
    setShowNextQuestion(false);
    setNoq(noq + 1);
    setProgressBar(progressBar + 10);
  };

  return (
    <>
      {Number(noq) > 9 ? (
        <ScorePage
          isrc={imagesrc}
          title={title}
          score={score}
          numberOfQuestion={numberOfQuestions}
        />
      ) : (
        <div className="flex justify-center  mt-[4rem] ">
          {quizData.map((quiz) => (
            <div className="w-3/4 justify-between flex h-3/4 flex-row ">
              <div className=" w-1/2 flex flex-col lg:gap-y-11 ">
                <div className="flex flex-col gap-y-8">
                  <p className="italic text-[#626C7F]">
                    Question {noq + 1} of {numberOfQuestions}
                  </p>
                  <p className="text-[36px] font-bold ">
                    {quiz.questions[noq].question}
                  </p>
                </div>
                <div className="border w-[500px] rounded-full  flex items-center bg-white ">
                  <span
                    className="bg-[#A729F5] h-[10px] rounded-full 
                "
                    style={{ width: `${progressBar}%` }}
                  ></span>
                </div>
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
                      : "";
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
                                    ? "bg-[#A729F5] text-[white]"
                                    : "bg-[#F4F6FA]"
                                }`
                          }
                        >
                          {letter}
                        </div>
                        <div className="text-[20px] text-[black] font-bold w-[350px] ms-10  flex justify-center items-center  text-center">
                          {option}
                        </div>
                        {isSubmitted && isSelected ? (
                          isAnswer ? (
                            <div>
                              <Image
                                src="./images/icon-correct.svg"
                                width={50}
                                height={50}
                              />
                            </div>
                          ) : (
                            <div>
                              <Image
                                src="./images/icon-incorrect.svg"
                                width={50}
                                height={50}
                              />
                            </div>
                          )
                        ) : isSubmitted && isAnswer ? (
                          <div>
                            <Image
                              src="./images/icon-correct.svg"
                              alt="correct"
                              width={50}
                              height={50}
                            />{" "}
                          </div>
                        ) : null}
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
                  <button
                    className="w-[500px] border rounded-lg bg-[#A729F5] h-[60px] mt-5 text-white text-[28px] font-bold"
                    onClick={handleNext}
                  >
                    Next Question
                  </button>
                )}
                {error ? (
                  <div
                    ref={errorRef}
                    className="text-[#EE5454]  flex justify-center mt-5 font-bold text-[20px]"
                  >
                    Please select an answer
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Question;
