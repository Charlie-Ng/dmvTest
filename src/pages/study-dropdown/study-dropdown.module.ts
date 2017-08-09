import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudyDropdownPage } from './study-dropdown';

@NgModule({
  declarations: [
    StudyDropdownPage,
  ],
  imports: [
    IonicPageModule.forChild(StudyDropdownPage),
  ],
})
export class StudyDropdownPageModule {}
