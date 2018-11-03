import {NgModule} from '@angular/core';
import {EmojiPickerComponent} from './emoji-picker/emoji-picker';
import {BrowserModule} from "@angular/platform-browser";
import {IonicModule} from "ionic-angular";

@NgModule({
    declarations: [EmojiPickerComponent],
    imports: [
        BrowserModule,
        IonicModule,
    ],
    exports: [EmojiPickerComponent]
})
export class ComponentsModule {
}
