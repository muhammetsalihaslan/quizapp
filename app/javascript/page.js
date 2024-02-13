import Navbar from "@/components/navbar";
import Question from "@/components/question";
import React from "react";
import data from "../../public/data/data.json";

const JavaScriptQuestion = () => {
  const filteredQuestions = data.quizzes.filter(
    (quiz) => quiz.title === "JavaScript"
  );
  return (
    <div>
      <Navbar title="JavaScript" src="/images/icon-js.svg" />
      <Question
        quizData={filteredQuestions}
        imagesrc={"/images/icon-js.svg"}
        title="JavaScript"
      />
    </div>
  );
};

export default JavaScriptQuestion;
