import { Component, NgZone, ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { TestsService } from '../../app/app.tests.service';
import { AppService} from '../../app/app.service';

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
  }

  ionViewDidLoad() {
  }

  goNextQuestion() {
    this.ngZone.run(() => {
      this.appService.resetCorrect();
      this.appService.hasAnswered = false;

    let nextQuestionIndex = this.currentTheoryTest.no;
    this.appService.lastTheoryTestIndex = nextQuestionIndex;
    if(nextQuestionIndex < 36){

      if(this.currentTheoryTest.userAnswer === this.currentTheoryTest.correctAnswer) {
        this.appService.correctAnswerCount++;
      }

      this.currentTheoryTest = this.theoryTestSet[nextQuestionIndex];

    }else {
      // jump to sign test
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
          if(Object.keys(this.currentTheoryTest.choices[0])[0]){
            this.appService.firstCorrect = true;
          }else if (Object.keys(this.currentTheoryTest.choices[1])[0]){
            this.appService.secondCorrect = true;
          }else {
            this.appService.thirdCorrect = true;
          }
      }

    });

  }

  loadView(index) {
    // this.ngZone.run(() => {
    // });
    this.changeDetectorRef.detectChanges();
    this.appService.lastAnswerIndex = index;
  }

  resetTestSet() {
    this.ngZone.run(() => {
      let alert = this.alertCtrl.create({
        title: '重新開始？',
        enableBackdropDismiss: true,
        buttons: [
          {
            text: '確認',
            handler: () => {
              this.theoryTestSet = this.testsService.newTheoryTestSet();
              this.currentTheoryTest = this.theoryTestSet[0];

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




}
