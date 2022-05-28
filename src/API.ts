import axios from "axios";
import { shiffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: Difficulty;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
export const API = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}&type=multiple`;
  const res = await axios.get(endpoint);
  const data = res.data;
  return data.results.map((question: Question) => ({
    ...question,
    answers: shiffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
