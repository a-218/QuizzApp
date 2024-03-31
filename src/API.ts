import { shuffleArray } from "./utils";


export type Question = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]


}

//use type of questioa and add answers to create new types
export type QuestionState = Question & { answers: string[]};

export enum difficulty{
    EASY = "easy", 
    MEDIUM = "medium", 
    HARD = "hard",
}
export const fetchQuizQuestions = async(amount: number, difficulty: difficulty)=>{

    const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    ///api being called twice herell
    try {
        const response = await fetch(endPoint);
        const data = await response.json();
       
        const dataToReturn = data.results.map((question:Question)=> (
            {
                ...question,
                answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
            }
        ))
        console.log(dataToReturn);
        return dataToReturn;
    } catch (error) {
        console.error('Error fetching quiz questions:', error);
       
    }
}