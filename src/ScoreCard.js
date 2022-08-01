import React from 'react'

const ScoreCard = ({totalScore,resetQuiz}) => {
  return (
    <div className='socreWrapper'>
        <div>
            <h2 className='fs-1 fw-bold'>Result Page</h2>
            <p className='fs-3 fw-bold'> Score: {totalScore}</p>
            <button onClick={resetQuiz} className="bg-primary px-5 py-2 border-0 text-white">Reset Quiz</button>
        </div>
    </div>
  )
}

export default ScoreCard