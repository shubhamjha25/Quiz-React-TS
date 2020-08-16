import React, {useState} from 'react';
import Questions from './components/Questions';
import { fetchQuestion, Difficulty, QuestionState } from './trivia-api';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestion(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  };
  

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      const ans = event.currentTarget.value

      const right = questions[number].correct_answer === ans;

      if(right)
        setScore(last => last + 1);

      const answerObject = {
        question: questions[number].question,
        answer: ans,
        correct: right,
        correctAnswer: questions[number].correct_answer
      };
      setUserAnswers(prev => [...prev, answerObject])  
    }
  };


  const nextQuestion = () => {
    const nextQstn = number + 1;

    if(nextQstn === TOTAL_QUESTIONS) {
      setGameOver(true);
    }
    else {
      setNumber(nextQstn);
    }
  };

  return (
    <div className="App">
      <h1>Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ?(
      <button onClick={startQuiz}>
        Start
      </button>
      ) : null}
      {!gameOver ? <p className="score">Score : {score}</p> : null}
      
      {loading && <p className="loading">Loading Question . . . </p>}
      
      {!loading && !gameOver && (
        <Questions 
          questionNo={number+1} totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question} answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined} callback={checkAnswer}
        />
      )}

      {!gameOver && !loading && userAnswers.length == number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
}

export default App;
