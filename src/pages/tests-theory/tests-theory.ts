import { Component, NgZone, ChangeDetectorRef} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController} from 'ionic-angular';
import { TestsService } from '../../app/app.tests.service';
import { AppService} from '../../app/app.service';
import { TestsPage } from '../tests/tests'
import {TestsSignsPage} from "../tests-signs/tests-signs";

import {StudyDropdownPage} from "../study-dropdown/study-dropdown";
import {SignsPage} from "../signs/signs";
import {TheoryPage} from "../theory/theory";
import {ContactPage} from "../contact/contact";
import {HomePage} from "../home/home";

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

  pages: Array<{title: string, titleSimplified: string, component: any}>;
  studyPages: Array<{title: string, titleSimplified: string, component: any}>;
  currentPage: any;
  contactPage: {title: string, titleSimplified: string, component: any};

  theoryTestSet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}>;
  currentTheoryTest: {no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private testsService: TestsService,
              public alertCtrl: AlertController,
              public appService: AppService,
              public ngZone: NgZone,
              public changeDetectorRef: ChangeDetectorRef,
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
      if(nextQuestionIndex + 1 === 36) {
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
