import Navbar from "@/components/navbar";
import Question from "@/components/question";
import React from "react";
import data from "../../public/data/data.json";

const HtmlQuestion = () => {
  const filteredQuestions = data.quizzes.filter(
    (quiz) => quiz.title === "HTML"
  );
  return (
    <div>
      <Navbar title="HTML" src="/images/icon-html.svg" />
      <Question
        quizData={filteredQuestions}
        imagesrc={"/images/icon-html.svg"}
        title="HTML"
      />
    </div>
  );
};

export default HtmlQuestion;
