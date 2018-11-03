import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChatPage} from './chat';
import {EmojiPickerComponentModule} from "../../components/emoji-picker/emoji-picker.module";
import {EmojiPickerComponent} from "../../components/emoji-picker/emoji-picker";

@NgModule({
    declarations: [
        ChatPage,
        EmojiPickerComponent
    ],
    imports: [
        IonicPageModule.forChild(ChatPage),
    ],
})
export class ChatPageModule {
}
