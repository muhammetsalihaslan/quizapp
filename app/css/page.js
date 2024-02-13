import Navbar from "@/components/navbar";
import Question from "@/components/question";
import React from "react";
import data from "../../public/data/data.json";

const CssQuestion = () => {
  const filteredQuestions = data.quizzes.filter((quiz) => quiz.title === "CSS");
  return (
    <div>
      <Navbar title="CSS" src="/images/icon-css.svg" />
      <Question
        quizData={filteredQuestions}
        imagesrc={"/images/icon-css.svg"}
        title="CSS"
      />
    </div>
  );
};

export default CssQuestion;
