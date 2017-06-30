import {Injectable} from '@angular/core';

@Injectable()
export class AppService {


  // test specific, since these variables are sued across 3 pages
  correctAnswerCount: number = 0;
  firstCorrect: boolean = false;
  firstIncorrect: boolean = false;
  secondCorrect: boolean = false;
  secondIncorrect: boolean = false;
  thirdCorrect: boolean = false;
  thirdIncorrect: boolean = false;
  hasAnswered: boolean =false;
  lastAnswerIndex: number = -1;
  testsSelectDialogOpen: boolean = false;
  testHaveBeenStarted: boolean = false;
  lastOpenTest: string = "";
  lastTheoryTestIndex: number = 0;
  lastSignTestIndex: number = 0;
  lastTheorySet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}> = [];
  lastSignSet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}> = [];

  resetCorrect() {
    this.firstCorrect = false;
    this.firstIncorrect = false;
    this.secondCorrect = false;
    this.secondIncorrect = false;
    this.thirdCorrect = false;
    this.thirdIncorrect = false;
  }

}
