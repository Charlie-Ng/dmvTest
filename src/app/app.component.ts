import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TestsPage } from '../pages/tests/tests'
import { TestsTheoryPage } from '../pages/tests-theory/tests-theory';
import { TestsSignsPage } from '../pages/tests-signs/tests-signs';
import { TheoryPage } from '../pages/theory/theory';
import { SignsPage } from '../pages/signs/signs';
import { ContactPage} from '../pages/contact/contact';
import { AppService } from './app.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, titleSimplified: string, component: any}>;
  studyPages: Array<{title: string, titleSimplified: string, component: any}>;
  currentPage: any;
  contactPage: {title: string, titleSimplified: string, component: any};

  // practice menu trigger
  showSubmenu: boolean = false;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public appService: AppService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
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
    if(!this.appService.testsSelectDialogOpen && (this.currentPage.title === '模擬測驗' || this.currentPage.title === "模拟测验")) {
      if(this.appService.lastOpenTest === "theory") {
        this.nav.setRoot(TestsTheoryPage);
      }else if(this.appService.lastOpenTest === 'sign'){
        this.nav.setRoot(TestsSignsPage);
      }else{
        this.nav.setRoot(TestsPage);
      }
    }
  }

  practiceMenuHondler() {
    this.showSubmenu = !this.showSubmenu;
  }
}
