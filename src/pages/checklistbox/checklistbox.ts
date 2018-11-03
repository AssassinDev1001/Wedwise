import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import firebase from 'firebase';


/**
 * Generated class for the ChecklistboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checklistbox',
  templateUrl: 'checklistbox.html',
})
export class ChecklistboxPage {

 items:any;
cusid:string;
title:string;
Notes:string;
public myChecklist=[];
  constructor(public nav: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

  this.items=['Attire','Ceremony','Flowers','Mise'];
    console.log('ionViewDidLoad ChecklistPage');

    const personRef: firebase.database.Reference = firebase.database().ref(`/checklist/`);
  personRef.on('value', personSnapshot => {

 
    this.myChecklist = personSnapshot.val();

   
   // let bh=JSON.stringify(myChecklist);
  
       console.log("myChecklist");
    //alert(this.users);
  });
  }


presentPrompt() {

  let ownerid="LLheFLvL0U0hx55sIpO";

  let alert = this.alertCtrl.create({
   
    inputs: [
      {
        name: 'titles',
        placeholder: 'titles'
      },
       {
        name: 'Notes',
        placeholder: 'Notes'
      }
     
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Add CheckList',
        handler: data => {
        this.addChecklistbox(data.titles,data.Notes)
        }
      }
    ]
  });
  alert.present();
}

addChecklistbox(titles,Notes){
  let cusid="eKM6qOJFsAXsrff502GsK6hTJQq2";
  let ownerid="LLheFLvL0U0hx55sIpO";
;
  
 


  //let cuid = localStorage['uid'];

  const personRef: firebase.database.Reference = firebase.database().ref('/checklist/').push();
personRef.set({
    CustomerId:cusid,
    CheckListTitle:titles,
     CheckListNote:Notes,
    sendDate:Date()
  });
}

}
