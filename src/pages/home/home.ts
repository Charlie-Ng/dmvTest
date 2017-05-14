import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homePageTitle: any;
  constructor(public navCtrl: NavController) {
    this.homePageTitle = "簡介";
  }

}
