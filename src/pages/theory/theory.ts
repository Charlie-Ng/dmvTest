import {Component, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppService} from '../../app/app.service';
import { TestsService } from '../../app/app.tests.service';

/**
 * Generated class for the TheoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-theory',
  templateUrl: 'theory.html',
})
export class TheoryPage {

  currentTheoryStudy: {no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string};
  alertInputs: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public appService: AppService,
              public testsService: TestsService,
              private ngZone: NgZone,
              private alertCtrl: AlertController) {
    if(this.appService.isTraditional) {
      this.currentTheoryStudy = this.testsService.theoryDatasetTraditional[this.appService.currentTheoryIndex];
    }else{
      this.currentTheoryStudy = this.testsService.theoryDatasetSimplified[this.appService.currentTheoryIndex];
    }
    this.alertInputs = this.generateQuestionPager();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TheoryPage');
  }

  previousQuestion() {
    this.ngZone.run(()=>{
      this.appService.currentTheoryIndex--;
      // temp solution to trigger view reload
      this.currentTheoryStudy = Object.assign({});
      setTimeout(() => {
        if(this.appService.isTraditional) {
          this.currentTheoryStudy = this.testsService.theoryDatasetTraditional[this.appService.currentTheoryIndex];
        }else{
          this.currentTheoryStudy = this.testsService.theoryDatasetSimplified[this.appService.currentTheoryIndex];
        }
      });
    });
  }

  nextQuestion() {
      this.ngZone.run(() => {
        this.appService.currentTheoryIndex++;
        // temp solution to trigger view reload
        this.currentTheoryStudy = Object.assign({});
        setTimeout(() => {
          if(this.appService.isTraditional) {
            this.currentTheoryStudy = this.testsService.theoryDatasetTraditional[this.appService.currentTheoryIndex];
          }else{
            this.currentTheoryStudy = this.testsService.theoryDatasetSimplified[this.appService.currentTheoryIndex];
          }
        });
      });
  }

  generateQuestionPager() {
    let inputs: any = [];
    for(let i = 0; i <= 18; i++) {
      let oneInput: any = {};
      let questionNo = i * 10;
      if(questionNo === 0){
        questionNo = 1;
        oneInput.checked = true;
      }
      oneInput.type = "radio";
      oneInput.label = this.appService.isTraditional ? "第 " + questionNo + " 題" : "第 " + questionNo + " 题";
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
            text: this.appService.isTraditional ? "確定" : "确定",
            handler: data => {
              this.ngZone.run(() => {
                // data is the index we want to jump to
                this.appService.currentTheoryIndex = data;
                this.currentTheoryStudy = Object.assign({});
                setTimeout(() => {
                  if(this.appService.isTraditional) {
                    this.currentTheoryStudy = this.testsService.theoryDatasetTraditional[this.appService.currentTheoryIndex];
                  }else{
                    this.currentTheoryStudy = this.testsService.theoryDatasetSimplified[this.appService.currentTheoryIndex];
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
