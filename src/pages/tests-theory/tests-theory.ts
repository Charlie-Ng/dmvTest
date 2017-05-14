import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestsService } from '../../app/app.tests.service';

/**
 * Generated class for the TestsTheoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tests-theory',
  templateUrl: 'tests-theory.html',
})
export class TestsTheoryPage {

  theoryTestSet: Array<{no: number, question: string, choices: Array<{choice: string, answer: string}>, correctAnswer: string, userAnswer: string}>;
  currentTheoryTest: {no: number, question: string, choices: Array<{choice: string, answer: string}>, correctAnswer: string, userAnswer: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, private testsService: TestsService) {
    this.theoryTestSet = [
      {no: 1, question: "This is test1",
        choices: [{choice: "a", answer: "answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 answer11123123 13123123 123123 123 123 123 12answer11123123 13123123 123123 123 123 123 12answer11123123 13123123 123123 123 123 123 12answer11123123 13123123 123123 123 123 123 12answer11123123 13123123 123123 123 123 123 12123 12 answer11123123 13123123 123123 123 123 123 12 answer11123123 13123123 123123 123 123 123 12 "}, {choice: "b", answer: "answer2 123 123 123123 123 12 3"}, {choice: "c", answer: "answer3"}], correctAnswer: "b", userAnswer: ""},
      {no: 2, question: "This is test2",
        choices: [{choice: "a", answer: "answer11"}, {choice: "b", answer: "answer22"}, {choice: "c", answer: "answer33"}], correctAnswer: "b", userAnswer: ""}
        ];

    this.currentTheoryTest = this.theoryTestSet[0];

  }

  ionViewDidLoad() {
  }

  goNextQuestion() {
    let nextQuestionIndex = this.currentTheoryTest.no;
    if(nextQuestionIndex < 36){

      if(this.currentTheoryTest.userAnswer === this.currentTheoryTest.correctAnswer) {
        this.testsService.correctAnswerCount++;
      }

      this.currentTheoryTest = this.theoryTestSet[nextQuestionIndex];

    }else {
      // jump to sign test
    }
  }




}
