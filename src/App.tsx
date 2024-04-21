import React, {FormEvent, ReactEventHandler, useState } from 'react';
// components
import QuestionCard from './components/QuestionCard';
import { QuestionState, fetchQuizQuestions } from './API';
import { GlobalStyle, Wrapper } from './App.styles';
import { DropDown } from './components/DropDown';
import { category, difficulty, questionType } from './Data/data';

// export type AnswerObject ={
//   question: string; 
//   answer: string;
//   correct: boolean;
//   correctAnswer: string;
// }

// const Total_Questions = 5;

const App=()=> {

  const [question, setQuestions] = useState(10);
  const [categories, setCategories] = useState();
  const [difficulties, setDifficulties] = useState();
  const [types, setTypes] = useState();

  const questionHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    //event.currentTarget.value.replace(/[^0-9a-zA-Z]/g, '');
    const inputValue = parseInt(event.currentTarget.value);

    if(inputValue > 50){
      event.target.setCustomValidity("Please enter a value less than 50."); 
      console.log("Please enter a value less than 50.");
    }else if(inputValue <= 0 ){
      event.target.setCustomValidity("Please enter a value greater than 0."); 
    }else if (isNaN(inputValue)){
      event.target.setCustomValidity("Please enter an integer greater than 0 less than 50."); 
    }else{
      setQuestions(inputValue);
      event.target.setCustomValidity("");
      console.log(inputValue);
    }
    
    
  }
  return (
    <>
    <form onSubmit={e => e.preventDefault()}>
      <label>
        Number of Questions:
        <input 
          id='inputNumber'
          type="number" 
          name="NumberQuestion" 
          defaultValue={question} 
          onChange={questionHandler}
          />
      </label>

      <DropDown label= "Category" options= {category}/>
      <DropDown label= "Question Type" options= {questionType}/>
      <DropDown label= "Difficulty" options= {difficulty}/>

      <button type="submit" title='Start Game'/>
    </form>
   
    </>
  );
}

export default App;
