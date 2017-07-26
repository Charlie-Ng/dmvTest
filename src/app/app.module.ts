import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestsPage } from '../pages/tests/tests'
import { TheoryPage } from '../pages/theory/theory';
import { SignsPage } from '../pages/signs/signs';
import { TestsTheoryPage } from '../pages/tests-theory/tests-theory';
import { TestsSignsPage } from '../pages/tests-signs/tests-signs';
import { ContactPage} from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppService } from "./app.service";
import { TestsService } from './app.tests.service';
import { KeyValuesPipe } from "./key-values.pipe";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestsPage,
    TheoryPage,
    SignsPage,
    TestsTheoryPage,
    TestsSignsPage,
    ContactPage,
    KeyValuesPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestsPage,
    TheoryPage,
    SignsPage,
    TestsTheoryPage,
    ContactPage,
    TestsSignsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppService,
    TestsService,
    ]
})
export class AppModule {}
