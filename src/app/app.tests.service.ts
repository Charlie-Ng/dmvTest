import {Injectable} from '@angular/core';

@Injectable()
export class TestsService {

  correctAnswerCount: number = 0;

  theoryTestSet: Array<{no: number, question: string, choices: Array<{choice: string, answer: string}>, correctAnswer: string, userAnswer: string}>;

  newTheoryTestSet() {
    return [
      {no: 1, question: "This is test1",
        choices: [{choice: "a", answer: "answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 answer11123123 13123123 123123 123 123 123 12answer11123123 13123123 123123 123 123 123 12answer11123123 13123123 123123 123 123 123 12answer11123123 13123123 123123 123 123 123 12answer11123123 13123123 123123 123 123 123 12123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 "}, {choice: "b", answer: "answer2 123 123 123123 123 12 3"}, {choice: "c", answer: "answer3"}], correctAnswer: "b", userAnswer: ""},
      {no: 2, question: "This is test2",
        choices: [{choice: "a", answer: "answer11"}, {choice: "b", answer: "answer22"}, {choice: "c", answer: "answer33"}], correctAnswer: "b", userAnswer: ""}
    ];
  }
}
