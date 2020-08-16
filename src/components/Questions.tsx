import React from 'react';
import { AnswerObject } from '../App';

type Props = {
    question: string;
    answers: string[];
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNo: number;
    totalQuestions: number;
}

const Questions: React.FC<Props> = ({question, answers, callback, userAnswer, questionNo, totalQuestions}) => {
    return (
        <div>
            <p className="qstn-no">
                Question: {questionNo} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question}}></p>
            <div className="answer-wrap">
                {answers.map(answer => (
                    <div key={answer}>
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}} />
                        </button>
                    </div>
            ))}
            </div>
        </div>
    );
}

export default Questions;