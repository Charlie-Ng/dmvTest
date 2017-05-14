import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignsPage } from './signs';

@NgModule({
  declarations: [
    SignsPage,
  ],
  imports: [
    IonicPageModule.forChild(SignsPage),
  ],
  exports: [
    SignsPage
  ]
})
export class SignsPageModule {}
