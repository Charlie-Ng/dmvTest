import { Component } from '@angular/core';
import {NavController, LoadingController, AlertController, MenuController} from 'ionic-angular';
import { AppService} from '../../app/app.service';
import { TestsTheoryPage } from '../tests-theory/tests-theory';
import { TestsSignsPage } from "../tests-signs/tests-signs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentPage: any;

  constructor(public navCtrl: NavController, public appService: AppService, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public menuCtrl: MenuController) {
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


}
