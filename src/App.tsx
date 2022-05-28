import React, { useState } from "react";
import { API, Difficulty, QuestionState } from "./API";
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle,Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await API(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!gameOver) {
      //  user answer
      const answer = e.currentTarget.value;
      // check answer against correct answers
      const correct = questions[number].correct_answer === answer;
      // if correct increment score
      if (correct) setScore((prev) => prev + 1);
      // save answer to the user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    setNumber((prev) => prev + 1);
    if (number + 1 === TOTAL_QUESTIONS) {
      setGameOver(true);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>Computer Science Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading ? <p>Loading Questions ...</p> : null}
        {!loading && !gameOver ? (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers[number] ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        ) : null}
        {!loading &&
        questions.length > 0 &&
        userAnswers.length === number + 1 &&
        number + 1 !== TOTAL_QUESTIONS ? (
          <button className="start" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
