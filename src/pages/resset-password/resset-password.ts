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
import firebase from 'firebase';
import {GlobalProvider} from './../../providers/global/global';

/**
 * Generated class for the RessetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resset-password',
  templateUrl: 'resset-password.html',
})
export class RessetPasswordPage {

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

    _showSignup: boolean = false;
    buttonText: any = "Resset Account";
    HeaderText: any ="Login";
    photo:any;

    params:any ={};

  constructor(public nav: NavController, public navParams: NavParams, public functions: Functions, public auth: Auth, public loadingCtrl: LoadingController/*, private twitter: TwitterConnect*/, private fb: Facebook,/** private googlePlus: GooglePlus,*/ public alertCtrl:AlertController, public values:Values,  public service: Service, private actionSheetCtrl: ActionSheetController, private camera:Camera,public global: GlobalProvider,) {
      this.form = {};
      this.auth = auth;
      this.customerList = firebase.database().ref('/Customer-List');
      this.zone = new NgZone({});
  }
    Forget() {
        debugger;
        if(this.validateRegister(this.form)){
            this.disableRegister = true;
            this.buttonText = "Resseting...";
            this.auth.forgotPass(this.form.email)
                .then((test) => {
                    debugger;

                console.log(test);
                    this.disableRegister = false;
                    this.buttonText = "Resset Account";



                }).catch(err => {this.handleRegisterError(err)
                debugger;
                this.nav.setRoot(ListPage);});
        }


    }
    validateRegister(form){


        if(this.form.email == undefined || this.form.email == ''){
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }

        return true;
    }

    handleRegisterError(err){
        console.log(err.code);
        this.errorRegisterMessage = err.message;
        this.disableRegister = false;
        this.buttonText = "Register Account";
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RessetPasswordPage');
  }

}
