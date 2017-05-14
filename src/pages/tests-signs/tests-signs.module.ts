import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestsSignsPage } from './tests-signs';

@NgModule({
  declarations: [
    TestsSignsPage,
  ],
  imports: [
    IonicPageModule.forChild(TestsSignsPage),
  ],
  exports: [
    TestsSignsPage
  ]
})
export class TestsSignsPageModule {}
