import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private testsService: TestsService, public alertCtrl: AlertController) {
    this.theoryTestSet = this.testsService.newTheoryTestSet();
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

  resetTestSet() {
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
  }




}
