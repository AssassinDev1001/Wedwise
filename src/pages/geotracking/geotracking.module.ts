import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeotrackingPage } from './geotracking';

@NgModule({
  declarations: [
    GeotrackingPage,
  ],
  imports: [
    IonicPageModule.forChild(GeotrackingPage),
  ],
})
export class GeotrackingPageModule {}
