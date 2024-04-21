import React, { useState } from 'react'
import { GlobalStyle, Wrapper } from '../App.styles';
import QuestionCard from '../components/QuestionCard';
import { QuestionState, difficulty, fetchQuizQuestions } from '../API';

export type AnswerObject ={
    question: string; 
    answer: string;
    correct: boolean;
    correctAnswer: string;
  }
  
  const Total_Questions = 5;


const QuestionPage = () => {
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

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>)=>{
  
    if(!gameOver) {
      const answer = e.currentTarget.value; 
      const correct = questions[number].correct_answer === answer;
      if(correct) setScore(prev => prev +1);
      // Save answer in the array 
      const answerObject  ={
        question: questions[number].question, 
        answer: answer,
        correct: correct,
        correctAnswer: questions[number].correct_answer,

      }
      setUserAnswers(prev=>[...prev, answerObject]);
    }
  }

  const nextQuestion =()=>{
    // move on the next question if not the lasst
    const nextQuestion = number + 1; 
    if(nextQuestion === Total_Questions){
      setGameOver(true)
    }else{
      setNumber(nextQuestion);
    }
  }

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1> React Quiz</h1>
      {gameOver || userAnswers.length === Total_Questions ? ( 
        <button className='start' onClick={startTrivia}>
          Start
        </button>)
        : null}
        {!gameOver? <p className='score'> Score:  {score}</p> : null}
        {loading ? <p>Loading Questions</p> : null}
      
      {!loading && !gameOver && (
         <QuestionCard 
            questionNr={number + 1}
            totalQuestions={Total_Questions}
            question={questions[number].question} 
            answers= {questions[number].answers}
            userAnswer={userAnswers? userAnswers[number]: undefined}
            callback={checkAnswer}
         />
      )}

        {!loading && !gameOver && userAnswers.length === number +1 && number !== Total_Questions -1 ?  (
            <button className='next' onClick={nextQuestion}>Next Question</button>
        ) : null }
        </Wrapper>
    </>
  )
}

export default QuestionPage;