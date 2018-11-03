import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import firebase from 'firebase';
 import { ChecklistboxPage } from '../checklistbox/checklistbox';



/**
 * Generated class for the ChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {
items:any;
cusid:string;
title:string;
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
        text: 'ok',
        handler: data => {
        this.addCheckCategory(data.titles)
        }
      }
    ]
  });
  alert.present();
}

addCheckCategory(titles){
  let cusid="eKM6qOJFsAXsrff502GsK6hTJQq2";
  let ownerid="LLheFLvL0U0hx55sIpO";
;
 
 


  //let cuid = localStorage['uid'];
//let joinDataa = firebase.database().ref().child('/ChecklistCategory/' + ownerid)
const personRef: firebase.database.Reference = firebase.database().ref('/ChecklistCategory/').push();
personRef.set({
    CustomerId:cusid,
    CategoryTitle:titles,
    sendDate:Date()
  });
}

itemSelectedd(){
  
  this.nav.push(ChecklistboxPage);
}
}
