import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParallaxLayout1 } from './parallax-layout-1';
import { ElasticHeaderModule } from '../../elastic-header/elastic-header.module';

@NgModule({
    declarations: [
        ParallaxLayout1,
    ],
    imports: [
        IonicPageModule.forChild(ParallaxLayout1),
        ElasticHeaderModule
    ],
    exports: [
        ParallaxLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ParallaxLayout1Module { }
