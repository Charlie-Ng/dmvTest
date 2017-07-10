import {Component, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppService} from '../../app/app.service';
import { TestsService } from '../../app/app.tests.service';

/**
 * Generated class for the SignsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signs',
  templateUrl: 'signs.html',
})
export class SignsPage {

  currentSignStudy: {no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string};
  alertInputs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppService, private testsService: TestsService, private ngZone: NgZone, private alertCtrl: AlertController) {
    this.currentSignStudy = this.testsService.signDataset[this.appService.currentSignIndex];
    this.alertInputs = this.generateQuestionPager();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TheoryPage');
  }

  previousQuestion() {
    this.ngZone.run(()=>{
      this.appService.currentSignIndex--;
      this.currentSignStudy = this.testsService.signDataset[this.appService.currentSignIndex];
    });
  }

  nextQuestion() {
    this.ngZone.run(() => {
      this.appService.currentSignIndex++;
      this.currentSignStudy = this.testsService.signDataset[this.appService.currentSignIndex];
    });
  }

  generateQuestionPager() {
    let inputs: any = [];
    for(let i = 0; i <= 3; i++) {
      let oneInput: any = {};
      let questionNo = i * 10;
      if(questionNo === 0){
        questionNo = 1;
      }
      oneInput.type = "radio";
      oneInput.label = "第 " + questionNo + " 題";
      oneInput.value = questionNo - 1;
      inputs.push(oneInput);
    }
    return inputs;
  }

  jumpToQuestion() {
    this.ngZone.run(() => {
      let alert = this.alertCtrl.create({
        title: '跳至',
        enableBackdropDismiss: true,
        inputs: this.alertInputs,
        buttons : [
          {
            text: "取消",
            role: "cancel"
          },
          {
            text: "確定",
            handler: data => {
              this.ngZone.run(()=>{
                // data is the index we want to jump to
                this.appService.currentSignIndex = data;
                this.currentSignStudy = this.testsService.signDataset[this.appService.currentSignIndex];
              });
            }
          }
        ]

      });

      alert.present();
    });
  }


}
