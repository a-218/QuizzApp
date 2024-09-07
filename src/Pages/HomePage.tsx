import React, {FormEvent, ReactEventHandler, useState } from 'react';
// components
import QuestionCard from '.././components/QuestionCard';
import { QuestionState, fetchQuizQuestions } from '.././API';
import { GlobalStyle, Wrapper } from '.././App.styles';
import { DropDown } from '.././components/DropDown';
import { category, difficulty, questionType } from '.././Data/data';

interface Props {}

const HomePage = (props: Props) => {

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
// on that is the constructing the page of the question so, home page grab all teh value and send it as url

  /// next will be on submit grab all the state value and construct URl-> AT THE SAME TIME go to loading and new page

    const handleFormEvent= (e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault(); 

      const formData = new FormData(e.currentTarget);
      const numberQuestion = formData.get('NumberQuestion');
      const selectedCategory = formData.get('Category');
      const selectedQuestionType = formData.get('QuestionType');
      const selectedDifficulty = formData.get('Difficulty');

      console.log('Number of Questions:', numberQuestion);
      console.log('Selected Category:', selectedCategory);
      console.log('Selected Question Type:', selectedQuestionType);
      console.log('Selected Difficulty:', selectedDifficulty);

    }

  return (
    <>
    <form onSubmit={handleFormEvent}>
      <label>
        Number of Questions:
      </label>
      <br></br>
        <input 
          id='inputNumber'
          type="number" 
          name="NumberQuestion" 
          defaultValue={question} 
          onChange={questionHandler}
        />
        <br></br>
        <DropDown name="Category" label= "Category" options= {category}/>
        <br></br>
        <DropDown name="QuestionType" label= "QuestionType" options= {questionType}/>
        <br></br>
        <DropDown  name="Difficulty"label= "Difficulty" options= {difficulty}/>
        <br></br>

        <input type="submit" title='Start Game' />
    </form>
   
    </>
  );
}

export default HomePage;