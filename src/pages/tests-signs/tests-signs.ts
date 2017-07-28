import { Component, NgZone, ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TestsService } from '../../app/app.tests.service';
import { AppService} from '../../app/app.service';
import { TestsPage } from '../tests/tests'
import {TestsTheoryPage} from "../tests-theory/tests-theory";


/**
 * Generated class for the TestsSignsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tests-signs',
  templateUrl: 'tests-signs.html',
})
export class TestsSignsPage {
  signTestSet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}>;
  currentSignTest: {no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, private testsService: TestsService, public alertCtrl: AlertController, public appService: AppService, public ngZone: NgZone, public changeDetectorRef: ChangeDetectorRef) {
    if(!this.appService.testHaveBeenStarted) {
      this.appService.testHaveBeenStarted = true;
      // this.appService.lastSignSet = this.testsService.newsignTestSet();
      // this.appService.lastSignSet = this.testsService.newSignTestSet();
      this.testsService.newTest();
      this.signTestSet = this.appService.lastSignSet;
      this.currentSignTest = this.signTestSet[0];
      this.appService.hasAnswered = false;

    }else {
      this.signTestSet = this.appService.lastSignSet;
      this.currentSignTest = this.signTestSet[this.appService.lastSignTestIndex];
    }
    this.appService.lastOpenTest = "sign";

  }

  ionViewDidLoad() {
  }

  goNextQuestion() {
    this.ngZone.run(() => {

      this.appService.resetCorrect();
      this.appService.hasAnswered = false;

      let nextQuestionIndex = this.currentSignTest.no;
      this.appService.lastSignTestIndex = nextQuestionIndex;
      if(nextQuestionIndex < 12){

        if(this.currentSignTest.userAnswer === this.currentSignTest.correctAnswer) {
          this.appService.correctSignAnswerCount++;
        }

        this.currentSignTest = this.signTestSet[nextQuestionIndex];

        if(nextQuestionIndex + 1 === 12) {
          this.appService.isLastQuestion = true;
        }

      }

    });

  }

  viewSignResult() {
    this.ngZone.run(() => {
      if(this.appService.isLastQuestion) {
        this.appService.finishedSignTest = true;
      }
      if(this.appService.finishedTheoryTest && this.appService.finishedSignTest) {
        this.appService.finishedAllTests = true;
      }
    });
  }

  confirmUserAnswer() {
    this.ngZone.run(() => {
      this.appService.hasAnswered = true;

      if(this.currentSignTest.userAnswer === this.currentSignTest.correctAnswer) {
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
        if(Object.keys(this.currentSignTest.choices[0])[0]){
          this.appService.firstCorrect = true;
        }else if (Object.keys(this.currentSignTest.choices[1])[0]){
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

      if(this.currentSignTest.userAnswer === this.currentSignTest.correctAnswer) {
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
        if(Object.keys(this.currentSignTest.choices[0])[0]){
          this.appService.firstCorrect = true;
        }else if (Object.keys(this.currentSignTest.choices[1])[0]){
          this.appService.secondCorrect = true;
        }else {
          this.appService.thirdCorrect = true;
        }
      }

    });
  }

  startTheoryTest() {
    this.appService.resetTestCommon();
    this.appService.resetCorrect();
    this.navCtrl.setRoot(TestsTheoryPage);
  }

  resetTestSet() {
    this.ngZone.run(() => {
      let alert = this.alertCtrl.create({
        title: this.appService.isTraditional ? '請選擇': "请选择",
        enableBackdropDismiss: true,
        buttons: [
          {
            text: this.appService.isTraditional ? '重新開始圖標題' : "重新开始图标题",
            handler: () => {
              this.appService.resetTheory();
              this.appService.resetTestCommon();
              this.appService.resetCorrect();
              this.testsService.newSignTestSet();
              this.signTestSet = this.appService.lastSignSet;
              this.currentSignTest = this.signTestSet[0];

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
