import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService} from '../../app/app.service';
import { TestsService } from '../../app/app.tests.service';

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

  theoryStudySet: Array<{no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string}>;
  currentTheoryStudy: {no: number, question: string, choices: Array<{[key: string]: string}>, correctAnswer: string, userAnswer: string, hasSign: boolean, signName: string};

  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppService, private testsService: TestsService) {
    this.currentTheoryStudy = this.testsService.theoryDataset[this.appService.currentTheoryIndex];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheoryPage');
  }

}
