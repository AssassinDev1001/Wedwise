import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuestlistPage } from './guestlist';

@NgModule({
  declarations: [
    GuestlistPage,
  ],
  imports: [
    IonicPageModule.forChild(GuestlistPage),
  ],
})
export class GuestlistPageModule {}
