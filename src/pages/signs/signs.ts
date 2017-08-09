import {Component, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController } from 'ionic-angular';
import { AppService} from '../../app/app.service';
import { TestsService } from '../../app/app.tests.service';

import {StudyDropdownPage} from "../study-dropdown/study-dropdown";
import {TestsPage} from "../tests/tests";
import {TheoryPage} from "../theory/theory";
import {ContactPage} from "../contact/contact";
import {HomePage} from "../home/home";

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

  pages: Array<{title: string, titleSimplified: string, component: any}>;
  studyPages: Array<{title: string, titleSimplified: string, component: any}>;
  currentPage: any;
  contactPage: {title: string, titleSimplified: string, component: any};

  currentSignStudy: {no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string};
  alertInputs: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private appService: AppService,
              private testsService: TestsService,
              private ngZone: NgZone,
              private alertCtrl: AlertController,
              public popoverCtrl: PopoverController) {

    this.pages = [
      { title: "主頁", titleSimplified: "主页", component: HomePage },
      { title: '模擬測驗', titleSimplified: "模拟测验", component: TestsPage }
    ];

    this.currentPage = this.pages[0];

    this.studyPages = [
      { title: '理論題', titleSimplified: "理论题", component: TheoryPage },
      { title: '圖標題', titleSimplified: "图标题", component: SignsPage }
    ];

    this.contactPage = {title: '聯絡我們', titleSimplified: "联络我们", component: ContactPage};

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

  presentPopover(myEvent) {

    let popover = this.popoverCtrl.create(StudyDropdownPage, {}, {cssClass: "study-dropdown"});
    popover.present({
      ev: myEvent
    });
  }

  openHome() {
    this.currentPage = this.pages[0];
    this.navCtrl.setRoot(HomePage);
  }

  openTest() {
    this.currentPage = this.pages[1];
    this.navCtrl.setRoot(TestsPage);
  }

  openContact() {
    this.currentPage = this.contactPage;
    this.navCtrl.setRoot(ContactPage);
  }


}
