import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AppService} from '../../app/app.service';

import {StudyDropdownPage} from "../study-dropdown/study-dropdown";
import {TestsPage} from "../tests/tests";
import {TheoryPage} from "../theory/theory";
import {SignsPage} from "../signs/signs";
import {HomePage} from "../home/home";

/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  pages: Array<{title: string, titleSimplified: string, component: any}>;
  studyPages: Array<{title: string, titleSimplified: string, component: any}>;
  currentPage: any;
  contactPage: {title: string, titleSimplified: string, component: any};

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService, public popoverCtrl: PopoverController) {

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
    console.log('ionViewDidLoad ContactPage');
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
