import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Values } from '../../providers/values';
import { Service } from '../../providers/service';
import { TranslateService } from '@ngx-translate/core';
//import { CartPage } from '../cart/cart';
import { CartPage } from '../cart/cart';
import { ItemmapPage } from '../itemmap/itemmap';

import { Functions } from '../../providers/functions/functions';
import { ListPage } from '../list/list';
import { MapPage } from '../map/map';

import firebase from 'firebase';

/**
 * Generated class for the WritecommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-writecomment',
  templateUrl: 'writecomment.html',
})
export class WritecommentPage {

dataInfo: any;

form: any;
  files: any;
  snapshot: any;
  downloadURL: any;
  categoryPic: any;
  selectedFile: any;
  public fileName: any;
  public storageRef: any;
  public uploadTask: any;
  errorMessage: any;
  public userProfiles: any;
  disableSubmit: boolean = false;

  constructor(public nav: NavController, public navParams: NavParams, public service: Service, public values:Values, public translateService: TranslateService, public functions: Functions){
	  
	  this.dataInfo = navParams.data.data;
	  
	  console.log(this.dataInfo);
	  
	    	this.form = {};
    this.service = service;
	
	firebase.auth().onAuthStateChanged((user) => {
			if (user) {
			  
			  this.values.userRole = firebase.database().ref('/users').child(user.uid).on('value', snapshot =>{
				if(snapshot.val()){
					this.userProfiles = snapshot.val();
				    
			  
	
			}
			  });
			}
		});
  }
  
   addComment(){
    if(this.validateForm()){
		///this.fireAuth = firebase.auth();
	
		
			
				
				var uidFirebase = firebase.auth().currentUser.uid;
			  
			firebase.database().ref('/users').child(uidFirebase).on('value', snapshot =>{
				if(snapshot.val()){
					this.userProfiles = snapshot.val();
				}
				
				
					this.service.addComment(this.form.description,this.dataInfo,this.userProfiles.displayName,this.userProfiles.photoURL);
						
				
				
			  
			  });
			
			
			this.nav.setRoot(ListPage);
		
		
    
    	
    }
  }
  
  validateForm(){

    if(this.form.description == undefined || this.form.description == ""){
      this.errorMessage = "Please Add Description"; 
      return false;
    }
  
    return true;
  }
  
   goToMap(){
	  this.nav.push(MapPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WritecommentPage');
  }



}
