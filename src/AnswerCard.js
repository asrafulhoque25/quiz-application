import React from 'react'

const AnswerCard = ({answer,pickedAnswer,poickAnswer,userCorrentAnswer}) => {
  console.log(answer);
  console.log(poickAnswer);
  console.log(userCorrentAnswer);
  const isRightAnswer = poickAnswer && answer === userCorrentAnswer
  const wrongAnswer = poickAnswer && answer === poickAnswer && poickAnswer !== userCorrentAnswer
  const currectClass= isRightAnswer ? 'correct' : ''
  const wrongclass= wrongAnswer ? 'wrong' : ''
  const disableclass= poickAnswer && 'disable'
  return (
    <div className={`answerCardWrapper fs-3 ${currectClass} ${wrongclass} ${disableclass}`} onClick={()=> pickedAnswer(answer)}>{answer}</div>
  )
}

export default AnswerCard