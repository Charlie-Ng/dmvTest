import { Component } from '@angular/core';
import { App, NavController, LoadingController, AlertController, MenuController, PopoverController} from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AppService} from '../../app/app.service';
import { TestsTheoryPage } from '../tests-theory/tests-theory';
import { TestsSignsPage } from "../tests-signs/tests-signs";
import { Platform } from 'ionic-angular';

import {StudyDropdownPage} from "../study-dropdown/study-dropdown";
import {TestsPage} from "../tests/tests";
import {TheoryPage} from "../theory/theory";
import {SignsPage} from "../signs/signs";
import {ContactPage} from "../contact/contact";


import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, titleSimplified: string, component: any}>;
  studyPages: Array<{title: string, titleSimplified: string, component: any}>;
  currentPage: any;
  contactPage: {title: string, titleSimplified: string, component: any};
  isIOS: boolean = false;

  finishedTestTotal: number;
  constructor(public navCtrl: NavController,
              public appService: AppService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public menuCtrl: MenuController,
              public http: Http,
              public popoverCtrl: PopoverController,
              public app: App,
              public platform: Platform) {

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

    this.http.get("https://dmvapis.herokuapp.com/testnumber/599a2cadf36d2820968fa0e4").map(res => res.json()).subscribe(data => {
      this.finishedTestTotal = data;
    });

    this.isIOS = platform.is("ios");




  }

  changeLanguage() {
    let loading = this.loadingCtrl.create({
      content: this.appService.isTraditional ? "重设中..." : "重設中"
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.appService.isTraditional = !this.appService.isTraditional;
      this.appService.resetAll();
      this.appService.currentSignIndex = 0;
      this.appService.currentTheoryIndex = 0;
    }, 2000);
  }

  startTest() {
    this.appService.resetAll();
    let alert;
    if(this.appService.isTraditional) {
      alert = this.alertCtrl.create({
        title: '模擬測驗',
        message: '要先測驗哪部分?',
        enableBackdropDismiss: false,
        buttons: [
          {
            text: '理論題',
            handler: () => {
              this.appService.testsSelectDialogOpen = false;
              this.appService.lastOpenTest = "theory";
              this.navCtrl.setRoot(TestsTheoryPage);
            }},
          {
            text: '圖標題',
            handler: () => {
              this.appService.testsSelectDialogOpen = false;
              this.appService.lastOpenTest = "sign";
              this.navCtrl.setRoot(TestsSignsPage);
            }},
          {
            text: '取消',
            handler: () => {
              // this.menuCtrl.open();
              this.appService.testsSelectDialogOpen = false;
            }}
        ]
      });
    }else{
      alert = this.alertCtrl.create({
        title: '模拟测验',
        message: '要先测验哪部分?',
        enableBackdropDismiss: false,
        buttons: [
          {
            text: '理论题',
            handler: () => {
              this.appService.testsSelectDialogOpen = false;
              this.appService.lastOpenTest = "theory";
              this.navCtrl.setRoot(TestsTheoryPage);
            }},
          {
            text: '图标题',
            handler: () => {
              this.appService.testsSelectDialogOpen = false;
              this.appService.lastOpenTest = "sign";
              this.navCtrl.setRoot(TestsSignsPage);
            }},
          {
            text: '取消',
            handler: () => {
              // this.menuCtrl.open();
              this.appService.testsSelectDialogOpen = false;
            }}
        ]
      });
    }
    alert.present();
  }

  // study popover menu
  presentPopover(myEvent) {

    let popover = this.popoverCtrl.create(StudyDropdownPage, {}, {cssClass: "study-dropdown"});
    popover.present({
      ev: myEvent
    });
  }

  openHome() {

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
