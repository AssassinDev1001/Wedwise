import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChecklistboxPage } from './checklistbox';

@NgModule({
  declarations: [
    ChecklistboxPage,
  ],
  imports: [
    IonicPageModule.forChild(ChecklistboxPage),
  ],
})
export class ChecklistboxPageModule {}
