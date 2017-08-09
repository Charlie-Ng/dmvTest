import {Component, NgZone} from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AppService} from '../../app/app.service';

import {HomePage} from "../home/home";
import {TestsPage} from "../tests/tests";
import {TheoryPage} from "../theory/theory";
import {SignsPage} from "../signs/signs";
import {ContactPage} from "../contact/contact";

/**
 * Generated class for the StudyDropdownPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-study-dropdown',
  templateUrl: 'study-dropdown.html',
})
export class StudyDropdownPage {


  pages: Array<{title: string, titleSimplified: string, component: any}>;
  studyPages: Array<{title: string, titleSimplified: string, component: any}>;
  currentPage: any;
  contactPage: {title: string, titleSimplified: string, component: any};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appService: AppService, public ngZone: NgZone, public app: App) {

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyDropdownPage');
  }

  openTheoryStudy() {

    this.viewCtrl.dismiss().then(() => {
      this.currentPage = this.studyPages[0];
      this.app.getRootNav().setRoot(TheoryPage);


    });
  }

  openSignsStudy() {
    this.viewCtrl.dismiss().then(() => {
      this.currentPage = this.studyPages[1];
      this.app.getRootNav().setRoot(SignsPage);
    });
  }

}
