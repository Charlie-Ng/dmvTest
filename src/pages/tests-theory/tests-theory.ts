import { Component, NgZone, ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { TestsService } from '../../app/app.tests.service';
import { AppService} from '../../app/app.service';
import { TestsPage } from '../tests/tests'
import {TestsSignsPage} from "../tests-signs/tests-signs";

/**
 * Generated class for the TestsTheoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tests-theory',
  templateUrl: 'tests-theory.html'
})
export class TestsTheoryPage {

  theoryTestSet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}>;
  currentTheoryTest: {no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, private testsService: TestsService, public alertCtrl: AlertController, public appService: AppService, public ngZone: NgZone, public changeDetectorRef: ChangeDetectorRef) {
    if(!this.appService.testHaveBeenStarted) {
        this.appService.testHaveBeenStarted = true;
        // this.appService.lastTheorySet = this.testsService.newTheoryTestSet();
        // this.appService.lastSignSet = this.testsService.newSignTestSet();

        this.testsService.newTest();
        this.theoryTestSet = this.appService.lastTheorySet;
        this.currentTheoryTest = this.theoryTestSet[0];
        this.appService.hasAnswered = false;
    }else {
        this.theoryTestSet = this.appService.lastTheorySet;
        this.currentTheoryTest = this.theoryTestSet[this.appService.lastTheoryTestIndex];
    }
    this.appService.lastOpenTest = "theory";

  }

  ionViewDidLoad() {
  }

  goNextQuestion() {
    this.ngZone.run(() => {

      if(this.appService.isLastQuestion) {
        this.appService.finishedSignTest = true;
      }
      this.appService.resetCorrect();
      this.appService.hasAnswered = false;

    let nextQuestionIndex = this.currentTheoryTest.no;
    this.appService.lastTheoryTestIndex = nextQuestionIndex;
    if(nextQuestionIndex < 36){

      if(this.currentTheoryTest.userAnswer === this.currentTheoryTest.correctAnswer) {
        this.appService.correctTheoryAnswerCount++;
      }

      this.currentTheoryTest = this.theoryTestSet[nextQuestionIndex];
      if(nextQuestionIndex + 1 === 3) {
        this.appService.isLastQuestion = true;
      }

    }
    });
  }

  viewTheoryResult() {
    this.ngZone.run(() => {
      if(this.appService.isLastQuestion) {
        this.appService.finishedTheoryTest = true;
      }
      if(this.appService.finishedTheoryTest && this.appService.finishedSignTest) {
        this.appService.finishedAllTests = true;
      }
    });
  }

  confirmUserAnswer() {
    this.ngZone.run(() => {
      this.appService.hasAnswered = true;

      if(this.currentTheoryTest.userAnswer === this.currentTheoryTest.correctAnswer) {
        // set green
        if(this.appService.lastAnswerIndex === 0) {
          this.appService.firstCorrect = true;
        }else if(this.appService.lastAnswerIndex === 1){
          this.appService.secondCorrect = true;
        }else {
          this.appService.thirdCorrect = true;
        }
      }else {
        // set red
        if(this.appService.lastAnswerIndex === 0) {
          this.appService.firstIncorrect = true;
        }else if(this.appService.lastAnswerIndex === 1){
          this.appService.secondIncorrect = true;
        }else {
          this.appService.thirdIncorrect = true;
        }

        // set correct to green
          if(Object.keys(this.currentTheoryTest.choices[0])[0] === this.currentTheoryTest.correctAnswer){
            this.appService.firstCorrect = true;
          }else if (Object.keys(this.currentTheoryTest.choices[1])[0] === this.currentTheoryTest.correctAnswer){
            this.appService.secondCorrect = true;
          }else {
            this.appService.thirdCorrect = true;
          }
      }

    });

  }

  loadView(index) {
    this.ngZone.run(() => {
      this.appService.lastAnswerIndex = index;
      this.appService.hasAnswered = true;

      if(this.currentTheoryTest.userAnswer === this.currentTheoryTest.correctAnswer) {
        // set green
        if(this.appService.lastAnswerIndex === 0) {
          this.appService.firstCorrect = true;
        }else if(this.appService.lastAnswerIndex === 1){
          this.appService.secondCorrect = true;
        }else {
          this.appService.thirdCorrect = true;
        }
      }else {
        // set red
        if(this.appService.lastAnswerIndex === 0) {
          this.appService.firstIncorrect = true;
        }else if(this.appService.lastAnswerIndex === 1){
          this.appService.secondIncorrect = true;
        }else {
          this.appService.thirdIncorrect = true;
        }

        // set correct to green
        if(Object.keys(this.currentTheoryTest.choices[0])[0] === this.currentTheoryTest.correctAnswer){
          this.appService.firstCorrect = true;
        }else if (Object.keys(this.currentTheoryTest.choices[1])[0] === this.currentTheoryTest.correctAnswer){
          this.appService.secondCorrect = true;
        }else {
          this.appService.thirdCorrect = true;
        }
      }
    });

  }

  startSignTest() {
    this.appService.hasSeenTheFirstResult = true;
    this.appService.resetTestCommon();
    this.appService.resetCorrect();
    this.navCtrl.setRoot(TestsSignsPage);
  }

  resetTestSet() {
    this.ngZone.run(() => {
      let alert = this.alertCtrl.create({
        title: this.appService.isTraditional ? '請選擇': "请选择",
        enableBackdropDismiss: true,
        buttons: [
          {
            text: this.appService.isTraditional ? '重新開始理論題' : "重新开始理论题",
            handler: () => {
                this.appService.resetTheory();
                this.appService.resetTestCommon();
                this.appService.resetCorrect();
                this.testsService.newTheoryTestSet();
              this.theoryTestSet = this.appService.lastTheorySet;
              this.currentTheoryTest = this.theoryTestSet[0];
            }},
          {
            text: this.appService.isTraditional ? '重新開始全部' : "重新开始全部",
            handler: () => {
              this.appService.resetAll();
              this.navCtrl.setRoot(TestsPage);

            }},
          {
            text: '取消',
            handler: () => {

            }}
        ]
      });

      alert.present();
    });

  }

  resetAllTests() {
    this.ngZone.run(()=>{
      this.appService.resetAll();
      this.navCtrl.setRoot(TestsPage);
    });
  }




}
