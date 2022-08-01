import React from "react";
import AnswerCard from "./AnswerCard";

const QuestionCard = ({ quiz, correctAnswer,questionIndex,quizs,navigateNext,pickedAnswer,poickAnswer,userCorrentAnswer }) => {
  return (
    <>
      <div className="mt-5 questionCardWrapper">
      <h4 className="text-center mb-5">Question: {questionIndex + 1} / {quizs.length}</h4>
        <h2 className="fs-2 fw-bold text-danger mb-4">{quiz.question}</h2>
        {correctAnswer.map((answer, i) => (
          <AnswerCard key={i} answer={answer} pickedAnswer={pickedAnswer} poickAnswer={poickAnswer} correctAnswer={correctAnswer} userCorrentAnswer={userCorrentAnswer} />
        ))}

        <div className="d-flex justify-content-center">
        <button className=" bg-warning px-5 py-2 text-white border-0 mt-5 rounded fs-4 fw-bold" onClick={navigateNext}>Next</button>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
