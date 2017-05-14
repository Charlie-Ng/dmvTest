import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheoryPage } from './theory';

@NgModule({
  declarations: [
    TheoryPage,
  ],
  imports: [
    IonicPageModule.forChild(TheoryPage),
  ],
  exports: [
    TheoryPage
  ]
})
export class TheoryPageModule {}
