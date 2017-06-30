import {Injectable} from '@angular/core';

@Injectable()
export class AppService {

  // test specific, since these variables are sued across 3 pages
  testsSelectDialogOpen: boolean = false;
  testHaveBeenStarted: boolean = false;
  lastOpenTest: string = "";
  lastTheoryTestIndex: number = 0;
  lastSignTestIndex: number = 0;
  lastTheorySet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}> = [];
  lastSignSet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}> = [];

}
