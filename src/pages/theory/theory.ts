import {Component, NgZone} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, PopoverController} from 'ionic-angular';
import { AppService} from '../../app/app.service';
import { TestsService } from '../../app/app.tests.service';

import {StudyDropdownPage} from "../study-dropdown/study-dropdown";
import {TestsPage} from "../tests/tests";
import {SignsPage} from "../signs/signs";
import {ContactPage} from "../contact/contact";
import {HomePage} from "../home/home";

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

  pages: Array<{title: string, titleSimplified: string, component: any}>;
  studyPages: Array<{title: string, titleSimplified: string, component: any}>;
  currentPage: any;
  contactPage: {title: string, titleSimplified: string, component: any};

  currentTheoryStudy: {no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string};
  alertInputs: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public appService: AppService,
              public testsService: TestsService,
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
