import React, {useState } from 'react';
// components
import QuestionCard from './components/QuestionCard';
import { QuestionState, difficulty, fetchQuizQuestions } from './API';
//Types 

type AnswerObject ={
  question: string; 
  answer: string;
  correct: boolean;
  correct_answer: string;
}

const Total_Questions = 5;

const App=()=> {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  // by doing the async here, it stops the double ccalling api in gogole chrome, 
  const startTrivia = async()=>{
    // when we click start button trigger api fetch
    setLoading(true);
    setGameOver(false);

    const newQuestions = await (fetchQuizQuestions(Total_Questions, difficulty.EASY));

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  }

  // const checkAnswer = (even: React.MouseEvent<HTMLButtonElement>)=>{

  // }

  const nextQuestion =()=>{
    
  }

  return (
    <div className="App">
      <h1> React Quiz</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'> Score:</p>
      <p>Loading Questions....</p>
      Quiz

      {/* <QuestionCard 
        questionNr={number + 1}
        totalQuestions={Total_Questions}
        question={questions[number].question} 
        answers= {questions[number].answers}
        userAnswer={userAnswers? userAnswers[number]: undefined}
        callback={checkAnswer
        /> */}
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
