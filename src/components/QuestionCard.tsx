import React from 'react';
import { AnswerObject } from '../App';
import { ButtonWrapper,QWrapper } from './QuestionCard.styles';


type Props ={
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>)=> void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;

}

// Tell typescript is fucntion component
const QuestionCard: React.FC<Props> = ({
    question, 
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) => (
    <QWrapper>
        <p className='number'>
         Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {answers.map(answer=>(
                <ButtonWrapper 
                    key={answer} 
                    correct={userAnswer?.correctAnswer === answer} 
                    userClicked={userAnswer?.answer === answer}
                >
                    <button value={answer} disabled={userAnswer ? true : false} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                </ButtonWrapper>
            ))}
    </div>
    </QWrapper>);



export default QuestionCard;