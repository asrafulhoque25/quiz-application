import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import QuestionCard from "./QuestionCard";
import ScoreCard from "./ScoreCard";
import ShuffleArray from "./ShuffleArray";

function App() {
  const [quiz, setQuiz] = useState(null);
  const [load,setLoad]=useState(false);
  const [startQuiz,setStartQuiz] = useState(false)
  const [endGame,setEndGame] = useState(false)
  const [correctAnswer,setCorrectAnswer] = useState(null)
  const [questionIndex,setQuestionIndex]=useState(0);
  const [totalScore,setTotalScore] = useState(0);
  const [userCorrentAnswer,setUserCorrentAnswer]= useState(null)
  const[poickAnswer,setPickAnswer] = useState(null)
  let fetchQuiz = async () => {
    let res = await fetch( "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple" );
    let { results } = await res.json();
    setQuiz(results);
    let initialQuestionIndex = results[questionIndex]
    setCorrectAnswer(ShuffleArray(initialQuestionIndex))
    setUserCorrentAnswer(initialQuestionIndex.correct_answer)
    setLoad(true) 
    setStartQuiz(true)

    console.log(results);
  };

  const resetQuiz=()=>{
    setQuiz(null)
    setEndGame(false)
    setLoad(false)
    setEndGame(false)
    setCorrectAnswer(null)
    setTotalScore(0)
    setUserCorrentAnswer(null)
    setPickAnswer(null)
    
  }

  const pickedAnswer=(answer)=>{
    setPickAnswer(answer)
    if(answer === userCorrentAnswer){
      setTotalScore((prevScore) => prevScore + 1)
    }
  }



  const navigateNext = ()=>{
    let currentQuizIndex = questionIndex + 1
    let validQuestionIndex= currentQuizIndex < quiz.length
    
    if(validQuestionIndex){
      setQuestionIndex(currentQuizIndex)
      let question = quiz[currentQuizIndex]
      setCorrectAnswer(ShuffleArray(question))
      setPickAnswer(null)
      setUserCorrentAnswer(question.correct_answer)
    }else{
      setEndGame(true)
    }
   
  }
  return (
    <div className="App">
   
    {!startQuiz &&  <div className="startBtn"><button
        className="bg-warning px-5 py-3 fs-2 fw-bold text-white border-0 "
        onClick={fetchQuiz}>
        Start Quiz
      </button></div> }
      {endGame &&  <ScoreCard totalScore={totalScore} resetQuiz={resetQuiz} />}
    {load && !endGame && <QuestionCard  quiz = {quiz[questionIndex]} correctAnswer={correctAnswer} questionIndex={questionIndex} quizs ={quiz}  navigateNext={navigateNext} pickedAnswer={pickedAnswer} poickAnswer={poickAnswer} userCorrentAnswer={userCorrentAnswer}/> }
      
    </div>
  );
}

export default App;
