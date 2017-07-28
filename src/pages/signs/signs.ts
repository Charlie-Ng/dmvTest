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
    if(this.appService.isTraditional) {
      this.currentSignStudy = this.testsService.signDatasetTraditional[this.appService.currentSignIndex];
    }else{
      this.currentSignStudy = this.testsService.signDatasetSimplified[this.appService.currentSignIndex];
    }
    this.alertInputs = this.generateQuestionPager();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TheoryPage');
  }

  previousQuestion() {
    this.ngZone.run(()=>{
      this.appService.currentSignIndex--;
      // temp solution to trigger view reload
      this.currentSignStudy = Object.assign({});
      setTimeout(() => {
        if(this.appService.isTraditional) {
          this.currentSignStudy = this.testsService.signDatasetTraditional[this.appService.currentSignIndex];
        }else{
          this.currentSignStudy = this.testsService.signDatasetSimplified[this.appService.currentSignIndex];
        }
      });
    });
  }

  nextQuestion() {
    this.ngZone.run(() => {
      this.appService.currentSignIndex++;
      // temp solution to trigger view reload
      this.currentSignStudy = Object.assign({});
      setTimeout(() => {
        if(this.appService.isTraditional) {
          this.currentSignStudy = this.testsService.signDatasetTraditional[this.appService.currentSignIndex];
        }else{
          this.currentSignStudy = this.testsService.signDatasetSimplified[this.appService.currentSignIndex];
        }
      });
    });
  }

  generateQuestionPager() {
    let inputs: any = [];
    for(let i = 0; i <= 3; i++) {
      let oneInput: any = {};
      let questionNo = i * 10;
      if(questionNo === 0){
        questionNo = 1;
        oneInput.checked = true;
      }
      oneInput.type = "radio";
      if(this.appService.isTraditional) {
        oneInput.label = "第 " + questionNo + " 題";
      }else{
        oneInput.label = "第 " + questionNo + " 题";
      }
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
            text: this.appService.isTraditional ? "確認" : "确认",
            handler: data => {
              this.ngZone.run(()=>{
                // data is the index we want to jump to
                this.appService.currentSignIndex = data;
                this.currentSignStudy = Object.assign({});
                setTimeout(() => {
                  if(this.appService.isTraditional) {
                    this.currentSignStudy = this.testsService.signDatasetTraditional[this.appService.currentSignIndex];
                  }else{
                    this.currentSignStudy = this.testsService.signDatasetSimplified[this.appService.currentSignIndex];
                  }
                });
              });
            }
          }
        ]

      });

      alert.present();
    });
  }


}
