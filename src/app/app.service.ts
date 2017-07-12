import {Injectable} from '@angular/core';

@Injectable()
export class AppService {


  // test specific, since these variables are sued across 3 pages
  correctTheoryAnswerCount: number = 0;
  correctSignAnswerCount: number = 0;

  firstCorrect: boolean = false;
  firstIncorrect: boolean = false;
  secondCorrect: boolean = false;
  secondIncorrect: boolean = false;
  thirdCorrect: boolean = false;
  thirdIncorrect: boolean = false;

  hasAnswered: boolean = false;
  lastAnswerIndex: number = -1;
  testsSelectDialogOpen: boolean = false;
  testHaveBeenStarted: boolean = false;

  finishedSignTest: boolean = false;
  finishedTheoryTest: boolean = false;
  finishedAllTests: boolean = false;

  isLastQuestion: boolean =false;

  lastOpenTest: string = "";
  lastTheoryTestIndex: number = 0;
  lastSignTestIndex: number = 0;
  lastTheorySet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}> = [];
  lastSignSet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}> = [];

  // study
  currentTheoryIndex: number = 0;
  currentSignIndex: number = 0;

  resetCorrect() {
    this.firstCorrect = false;
    this.firstIncorrect = false;
    this.secondCorrect = false;
    this.secondIncorrect = false;
    this.thirdCorrect = false;
    this.thirdIncorrect = false;
  }

  resetTheory() {
    this.correctTheoryAnswerCount = 0;
    this.lastTheoryTestIndex = 0;
    this.lastTheorySet = [];
    this.finishedTheoryTest = false;
  }

  resetSign() {
    this.correctSignAnswerCount = 0;
    this.lastSignTestIndex = 0;
    this.lastSignSet = [];
    this.finishedSignTest = false;
  }

  resetTestCommon() {
    this.hasAnswered = false;
    this.lastAnswerIndex = -1;
    this.testsSelectDialogOpen = false;
    this.isLastQuestion = false;
  }

  resetAll() {
    this.resetTestCommon();
    this.resetTheory();
    this.resetSign();
    this.resetCorrect();
    this.lastOpenTest = "";
    this.testHaveBeenStarted = false;
    this.finishedAllTests = false;
  }

}
