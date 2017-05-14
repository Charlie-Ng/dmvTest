import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestsTheoryPage } from './tests-theory';

@NgModule({
  declarations: [
    TestsTheoryPage,
  ],
  imports: [
    IonicPageModule.forChild(TestsTheoryPage),
  ],
  exports: [
    TestsTheoryPage
  ]
})
export class TestsTheoryPageModule {}
