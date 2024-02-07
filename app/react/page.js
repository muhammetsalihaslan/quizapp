import Navbar from "@/components/navbar";
import Question from "@/components/question";
import React from "react";
import data from "../../public/data/data.json";

const ReactQuestion = () => {
  const filteredQuestions = data.quizzes.filter(
    (quiz) => quiz.title === "REACT"
  );
  return (
    <div>
      <Navbar title="REACT" src="/images/react-svgrepo-com.svg" />
      <Question
        question={filteredQuestions}
        imagesrc={"/images/react-svgrepo-com.svg"}
        title="REACT"
      />
    </div>
  );
};

export default ReactQuestion;
