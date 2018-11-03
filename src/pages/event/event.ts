import { Component, ViewChild ,OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import {CallNumber} from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

import { WritecommentPage } from '../writecomment/writecomment';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import firebase from 'firebase';


/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
images:any;

  constructor(public nav: NavController,public navParams: NavParams,private callNumber: CallNumber,private emailComposer: EmailComposer,private launchNavigator: LaunchNavigator) {
  }

  ionViewDidLoad() {
  this.images = ['1.jpg','2.jpg','3.jpg','4.jpg'];
    console.log('ionViewDidLoad EventPage');
  }

  wedeventss(){
console.log("jjj");
   this.nav.push(WritecommentPage);
   
  }
  callmyNumber(){
  this.callNumber.callNumber("18001010101", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  openChat(){
   this.nav.push(ChatPage);
}
openemail(){

  this.emailComposer.isAvailable().then((available: boolean) =>{
  console.log("yes");
 //if(available) {
   //Now we know we can send

let email = {
  to: 'max@mustermann.de',
  cc: 'erika@mustermann.de',
  bcc: ['john@doe.com', 'jane@doe.com'],
  attachments: [
    'file://img/logo.png',
    'res://icon.png',
    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
    'file://README.pdf'
  ],
  subject: 'Cordova Icons',
  body: 'How are you? Nice greetings from Leipzig',
  isHtml: true
};

// Send a text message using default options
this.emailComposer.open(email);
 //}
});
}
getDirection(){

let options: LaunchNavigatorOptions = {
  start: 'London, ON'
  
};

this.launchNavigator.navigate('Toronto, ON', options)
  .then(
    success => console.log('Launched navigator'),
    error => console.log('Error launching navigator', error)
  );

}
}
