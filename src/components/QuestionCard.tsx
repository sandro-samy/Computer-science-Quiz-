import React from "react";
import { AnswerObject } from "../App";
import { Wrapper } from "./QuestionCard.styles";
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question : {questionNum} / {totalQuestions}
      </p>
      <p
        dangerouslySetInnerHTML={{ __html: `${questionNum} - ${question}` }}
        className="question"
      />
      <div>
        {answers.map((answer, index) => (
          <div key={answer}>
            <button
              className={
                answer === userAnswer?.correctAnswer
                  ? "correct"
                  : answer === userAnswer?.answer
                  ? "wrong"
                  : ""
              }
              disabled={!!userAnswer}
              value={answer}
              onClick={callback}
            >
              {index + 1} - {answer}
            </button>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
