import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { MenuController, App } from 'ionic-angular';
import { AppService } from '../../app/app.service'
import { TestsTheoryPage } from '../tests-theory/tests-theory';
import { TestsSignsPage } from '../tests-signs/tests-signs';
import { Platform } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the TestsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html',
})
export class TestsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public appService: AppService,
    public ngZone: NgZone,
    public app: App,
    public platform: Platform) {

    if(!this.appService.testsSelectDialogOpen && !this.appService.testHaveBeenStarted){
      this.ngZone.run(() => {
        this.appService.testsSelectDialogOpen = true;
        this.resetSelection();
      });
    }else if(this.appService.lastOpenTest === "theory"){

      // this.navCtrl.setRoot(TestsTheoryPage);
      this.navCtrl.setRoot(TestsTheoryPage);


    }else{ //sign

      this.navCtrl.setRoot(TestsSignsPage);

    }
  }

  ionViewDidLoad() {
    // maybe move this logic to constructor?
    console.log('ionViewDidLoad TestsPage');
    // if(!this.appService.testsSelectDialogOpen && !this.appService.testHaveBeenStarted){
    //   this.ngZone.run(() => {
    //     this.appService.testsSelectDialogOpen = true;
    //     this.resetSelection();
    //   });
    // }else if(this.appService.lastOpenTest === "theory"){
    //
    //   // this.navCtrl.setRoot(TestsTheoryPage);
    //     this.navCtrl.setRoot(TestsTheoryPage);
    //
    //
    // }else{ //sign
    //
    //   this.navCtrl.setRoot(TestsSignsPage);
    //
    // }
  }

  resetSelection() {
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
              this.appService.testsSelectDialogOpen = false;
              if(this.platform.width() <= 767) {
                this.menuCtrl.open();
              }else{
                this.navCtrl.setRoot(HomePage);
              }
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
              this.appService.testsSelectDialogOpen = false;
              if(this.platform.width() <= 767) {
                this.menuCtrl.open();
              }else{
                this.navCtrl.setRoot(HomePage);
              }

            }}
        ]
      });
    }
    alert.present();
  }

}
