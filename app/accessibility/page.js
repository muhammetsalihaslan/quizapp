import Navbar from "@/components/navbar";
import Question from "@/components/question";
import React from "react";
import data from "../../public/data/data.json";

const AccessibilityQuestion = () => {
  const filteredQuestions = data.quizzes.filter(
    (quiz) => quiz.title === "Accessibility"
  );
  return (
    <div>
      <Navbar title="HTML" src="/images/icon-accessibility.svg" />
      <Question
        quizData={filteredQuestions}
        imagesrc={"/images/icon-accessibility.svg"}
        title="Accessibility"
      />
    </div>
  );
};

export default AccessibilityQuestion;
