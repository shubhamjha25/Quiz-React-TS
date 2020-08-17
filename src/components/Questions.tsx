import React from 'react';
import { AnswerObject } from '../App';
import { Wrapper, AnsWrapper} from './Questions.styles'

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
        <Wrapper>
            <p className="qstn-no">
                Question: {questionNo} / {totalQuestions}
            </p>
            <p className="the-qstn" dangerouslySetInnerHTML={{ __html: question}}></p>
            <div className="answer-wrap">
                {answers.map(answer => (
                    <AnsWrapper 
                        correct={userAnswer?.correctAnswer === answer} 
                        clicked={userAnswer?.answer === answer} 
                        key={answer}
                    >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}} />
                        </button>
                    </AnsWrapper>
            ))}
            </div>
        </Wrapper>
    );
}

export default Questions;