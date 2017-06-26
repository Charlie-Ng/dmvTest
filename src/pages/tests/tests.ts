import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { AppService } from '../../app/app.service'
import { TestsTheoryPage } from '../tests-theory/tests-theory';
import { TestsSignsPage } from '../tests-signs/tests-signs';


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
    public appService: AppService ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestsPage');
    if(!this.appService.testsSelectDialogOpen){
      this.appService.testsSelectDialogOpen = true;
      this.resetSelection();
    }
  }

  resetSelection() {
    let alert = this.alertCtrl.create({
      title: '模擬測試',
      message: '要先測試那部分?',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: '理論題',
          handler: () => {
            this.appService.testsSelectDialogOpen = false;
            this.appService.testHaveBeenStarted = true;
            this.navCtrl.setRoot(TestsTheoryPage);
        }},
        {
          text: '圖示題',
          handler: () => {
            this.appService.testsSelectDialogOpen = false;
            this.appService.testHaveBeenStarted = true;
            this.navCtrl.setRoot(TestsSignsPage);
          }},
        {
          text: '取消',
          handler: () => {
            this.menuCtrl.open();
            this.appService.testsSelectDialogOpen = false;
          }}
      ]
    });
    alert.present();
  }

}
