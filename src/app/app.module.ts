import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TestsPage } from '../pages/tests/tests'
import { TheoryPage } from '../pages/theory/theory';
import { SignsPage } from '../pages/signs/signs';
import { TestsTheoryPage } from '../pages/tests-theory/tests-theory';
import { TestsSignsPage } from '../pages/tests-signs/tests-signs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppService } from "./app.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TestsPage,
    TheoryPage,
    SignsPage,
    TestsTheoryPage,
    TestsSignsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TestsPage,
    TheoryPage,
    SignsPage,
    TestsTheoryPage,
    TestsSignsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppService
    ]
})
export class AppModule {}
