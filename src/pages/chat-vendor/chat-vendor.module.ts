import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChatVendorPage} from './chat-vendor';
import {EmojiPickerComponent} from "../../components/emoji-picker/emoji-picker";

@NgModule({
    declarations: [
        ChatVendorPage,
        EmojiPickerComponent
    ],
    imports: [
        IonicPageModule.forChild(ChatVendorPage),
    ],
})
export class ChatVendorPageModule {
}
