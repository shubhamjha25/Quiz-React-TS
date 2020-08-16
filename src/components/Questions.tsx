import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
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
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}} />
                        </button>
                    </div>
            ))}
            </div>
        </div>
    );
}

export default Questions;