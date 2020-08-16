import { shuffle } from './utilities'

export type Question = {
    category: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuestion = async (amount: number, difficulty: Difficulty) => {
    const end = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=21&type=multiple`;
    const data = await (await fetch(end)).json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffle([...question.incorrect_answers, question.correct_answer]),
    }));
}