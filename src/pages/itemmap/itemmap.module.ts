import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemmapPage } from './itemmap';

@NgModule({
  declarations: [
    ItemmapPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemmapPage),
  ],
})
export class ItemmapPageModule {}
