import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoadingController, AlertController,ActionSheetController} from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
import { NavParams, IonicPage } from 'ionic-angular';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import { Values } from '../../providers/values';
import { Functions } from '../../providers/functions/functions';
import { Service } from '../../providers/service';
import { ListPage } from '../list/list';
import { HomePage } from '../home/home';

import firebase from 'firebase';
import {GlobalProvider} from './../../providers/global/global';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
	window:any;
	
	  error: any;
	  zone: NgZone;
	  form: any; 
	  userProfile: any = null;
	  isLoggedIn: boolean = false;
	  customerList:any;
	  currentUser: any;
	  userProfiles: any = null;
	  role: any;
	  errorRegisterMessage: any;
	  errorSigninMessage: any;
	  disableRegister: boolean = false;
	  disableLogin: boolean = false;
	  signup: boolean = false;
	  _showSignup: boolean = false;
	  buttonText: any = "Register Account";
	  HeaderText: any ="Login";
    photo:any;
   
	  params:any ={};

  constructor(public nav: NavController, public navParams: NavParams, public functions: Functions, public auth: Auth, public loadingCtrl: LoadingController/*, private twitter: TwitterConnect*/, private fb: Facebook,/** private googlePlus: GooglePlus,*/ public alertCtrl:AlertController, public values:Values,  public service: Service, private actionSheetCtrl: ActionSheetController, private camera:Camera,public global: GlobalProvider,) {
	  
	  
    this.form = {};
    this.auth = auth;
    this.customerList = firebase.database().ref('/Customer-List'); 
    this.zone = new NgZone({});
	 
	  
  }

  back(){
    this.nav.push(HomePage);
        }
  
   register() {
    debugger;
    if(this.validateRegister(this.form)){
      this.disableRegister = true;
      this.buttonText = "Registering...";
      this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName)
      .then(() => {
        debugger;
        this.currentUser = firebase.auth().currentUser;
		
		console.log(this.currentUser);

   
          this.service.getRestaurantUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
			  
			  
           this.userProfiles = snapshot.val();

        
      });
        
        this.disableRegister = false;
        this.buttonText = "Register Account";
		
		
		
      }).catch(err => {this.handleRegisterError(err)
          debugger;
          this.nav.setRoot(ListPage);});
    }

	
  }
  handleRegisterError(err){
    console.log(err.code);
    this.errorRegisterMessage = err.message;
    this.disableRegister = false;
    this.buttonText = "Register Account";
  }
  validateRegister(form){
    if(this.form.firstName == undefined || this.form.firstName == ''){
      this.errorRegisterMessage = 'Please enter first name';
      return false;
    }
    if(this.form.lastName == undefined || this.form.lastName == ''){
      this.errorRegisterMessage = 'Please enter last name';
      return false;
    }
    if(this.form.email == undefined || this.form.email == ''){
      this.errorRegisterMessage = 'Please enter email';
      return false;
    }
    if(this.form.password == undefined || this.form.password == ''){
      this.errorRegisterMessage = 'Please enter password';
      return false;
    }
    return true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  openGallery(){
    let actionSheet = this.actionSheetCtrl.create({
      enableBackdropDismiss: true,
      buttons: [
        {
          text: 'Take a picture',
          icon: 'camera',
          handler: () => {
            this.takePicturefromCamera();
          }
        }, {
          text: 'From gallery',
          icon: 'images',
          handler: () => {
            this.takePicture();
          }
        }
      ]
    });
    actionSheet.present();
  }

   takePicture() {

    const options: CameraOptions = {
      allowEdit: true,
      saveToPhotoAlbum: true,
      targetWidth: 720,
      targetHeight: 720,
      mediaType: this.camera.MediaType.PICTURE,
      
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.FILE_URI,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imagePath) => {
      //alert('ImagePath'+imagePath);
       this.global.shoimg = true;
      this.photo = imagePath;

      //alert('got image path ' + imagePath);
    // return this.makeFileIntoBlob(imagePath);//convert picture to blob
    }).then((imageBlob) => {

      //alert('got image blob ' + imageBlob);
     // return this.uploadPhoto(imageBlob);//upload the blob
    })


  }
  takePicturefromCamera() {

    const options: CameraOptions = {
      allowEdit: true,
      saveToPhotoAlbum: true,
      targetWidth: 720,
      targetHeight: 720,
      cameraDirection: this.camera.Direction.BACK,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imagePath) => {
    //alert('ImagePath'+imagePath);
       this.global.shoimg = true;
    this.photo = imagePath;
      //alert('got image path ' + imagePath);
    //return this.makeFileIntoBlob(imagePath);//convert picture to blob
    }).then((imageBlob) => {

      //alert('got image blob ' + imageBlob);
     // return this.uploadPhoto(imageBlob);//upload the blob
    })


  }

  /**
   makeFileIntoBlob(_imagePath) {
    return new Promise((resolve, reject) => {
      window.resolveLocalFileSystemURL(_imagePath, (fileEntry) => {

        fileEntry.file((resFile) => {

          var reader = new FileReader();
          reader.onloadend = (evt: any) => {
            var imgBlob: any = new Blob([evt.target.result], { type: 'image/jpeg' });
            
            imgBlob.name = 'sample.jpg';
            resolve(imgBlob);
          };

          reader.onerror = (e) => {
            console.log('Failed file read: ' + e.toString());
            reject(e);
          };

          reader.readAsArrayBuffer(resFile);
        });
      });
    });
  }
  makeAudioFileIntoBlob(_imagePath) {
    return new Promise((resolve, reject) => {
      window.resolveLocalFileSystemURL(_imagePath, (fileEntry) => {

        fileEntry.file((resFile) => {

          var reader = new FileReader();
          reader.onloadend = (evt: any) => {
            var imgBlob: any = new Blob([evt.target.result], { type: 'audio/m4a' });
            imgBlob.name = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.m4a';

            //imgBlob.name = 'sample.jpg';
            resolve(imgBlob);
          };

          reader.onerror = (e) => {
            console.log('Failed file read: ' + e.toString());
            reject(e);
          };

          reader.readAsArrayBuffer(resFile);
        });
      });
    });
  }

    private uploadPhoto(file_path): void {
    
    let metadata: firebase.storage.UploadMetadata = {
      contentType: 'image/jpeg',
    };
    this.fb_storage_ref.child('pic1.JPEG')
      .put(file_path, metadata)
      .then((savedPicture) => {
        
        this.savedPicture = savedPicture;
        this.user.photo = this.savedPicture.downloadURL?this.savedPicture.downloadURL:'';

      })
      .catch(e => {
        this.showAlert(e.message);
        
      })
    
}
**/
}
