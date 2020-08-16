import React from 'react';
import Questions from './components/Questions'

function App() {

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
      <Questions />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
