import React, {useState} from 'react';
import Questions from './components/Questions'

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {

  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Quiz</h1>
      <button onClick={startQuiz}>Start</button>
      <p className="score">
        Score : 
      </p>
      <p className="loading">
        Loading Question . . . 
      </p>
      <Questions 
        questionNo={number+1} totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question} answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined} callback={checkAnswer}
      />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
