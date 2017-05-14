import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TestsPage } from '../pages/tests/tests'
import { TheoryPage } from '../pages/theory/theory';
import { SignsPage } from '../pages/signs/signs';

import { AppService } from './app.service';

@Component({
  templateUrl: 'app.html',
  providers: [AppService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  studyPages: Array<{title: string, component: any}>;
  currentPage: any;

  // practice menu trigger
  showSubmenu: boolean = false;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public appService: AppService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '簡介', component: HomePage },
      { title: 'List', component: ListPage },
      { title: '模擬測驗', component: TestsPage }
    ];

    this.currentPage = this.pages[0];

    this.studyPages = [
      { title: '理論題', component: TheoryPage },
      { title: '圖示題', component: SignsPage }
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.currentPage = page;
    this.nav.setRoot(page.component);

  }

  menuClosed() {
    if(!this.appService.testsSelectDialogOpen && this.currentPage.title === '模擬測驗') {
      this.nav.setRoot(this.currentPage.component);
    }
  }

  practiceMenuHondler() {
    this.showSubmenu = !this.showSubmenu;
  }
}
