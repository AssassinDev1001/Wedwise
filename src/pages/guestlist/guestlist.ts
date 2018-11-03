import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the GuestlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guestlist',
  templateUrl: 'guestlist.html',
})
export class GuestlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestlistPage');
  }
  presentPrompt() {
    let alert = this.alertCtrl.create({
    title: 'Login',
    inputs: [
      {
        name: 'Firstname',
        placeholder: 'Firstname'
      },
      {
        name: 'Lastname',
        placeholder: 'Lastname',
        type: 'text'
      },


      {
        name: 'Bride',
        placeholder: 'Bride',
        type: 'radio'
      },
      
       {
        name: 'yes',
        placeholder: 'yes',
        type: 'radio'
      },
        {
        name: 'no',
        placeholder: 'no',
        type: 'radio'
      }
      

     
    ],
    
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
         
        }
      },
      {
        text: 'ok',
        handler: data => {
           this.addGuestList(data.Firstname,data.Lastname,data.yes,data.Bride,data.no);
        }
      }
    ]
  });
  alert.present();

}

addGuestList(Firstname,Lastname,yes,Bride,no){
alert("dfsdf");
  
   let cusid="eKM6qOJFsAXsrff502GsK6hTJQq2";
  let ownerid="LLheFLvL0U0hx55sIpO";
 
 


  //let cuid = localStorage['uid'];
  const personRef: firebase.database.Reference = firebase.database().ref('/Guestlist/').push();
 
//let joinDataa = firebase.database().ref().child('/Guestlist/' + ownerid).push();
personRef.set({
    CustomerId:cusid,
    Firstname:Firstname,
     Lastanme:Lastname,
      Side:Bride,
       InviteSent:yes,
       Attending:no,
    sendDate:Date()
  });

}
}