import { Component, NgZone, ViewChild } from '@angular/core';

import { Nav } from 'ionic-angular';
import { NavController, NavParams, IonicPage } from 'ionic-angular';



import { Auth } from '../../providers/auth';
import { LoadingController, AlertController} from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';
import { Values } from '../../providers/values';
import { Functions } from '../../providers/functions/functions';
import { Service } from '../../providers/service';

import { ListPage } from '../list/list';
import { RegisterPage } from '../register/register';
import { AddressPage } from '../address/address';
import { MyorderPage } from '../myorder/myorder';
import { MapPage } from '../map/map';

import firebase from 'firebase';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
	
	
	error: any;
	  zone: NgZone;
	  form: any; 
	  userProfile: any = null;
	  public isLoggedIn: boolean = false;
	  customerList:any;
	  public currentUser: any;
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
	  
	  params:any ={};

  constructor(public nav: NavController, public navParams: NavParams, public functions: Functions, public auth: Auth, public loadingCtrl: LoadingController/*, private twitter: TwitterConnect*/, private fb: Facebook,/** private googlePlus: GooglePlus,*/ public alertCtrl:AlertController, public values:Values,  public service: Service) {
	  
	  //this.role = "Customer";
    this.currentUser = firebase.auth().currentUser;

    if(this.values.isLoggedIn){
      this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
       this.userProfiles = snapshot.val();

      });
    } 

	console.log(this.userProfiles);

    this.form = {};
    this.auth = auth;
    this.customerList = firebase.database().ref('/Customer-List'); 
    this.zone = new NgZone({});
  }
  
  showSignup(){
    this.HeaderText = "Register";
    this._showSignup = true;
  }

  hideSignup(){
    this.HeaderText = "Login";
    this._showSignup = false;
  }

  //EMAIL AND PASSWORD LOGIN

  login(){
    if(this.validate()){
      this.disableLogin = true;
        this.auth.login(this.form.email, this.form.password).then((success) =>{
          this.userProfile = success;
          this.values.isLoggedIn = true;
          this.disableLogin = false;
          console.log(this.values.isLoggedIn);

          this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
           this.userProfiles = snapshot.val();
          });

          this.values.userRole = firebase.database().ref('/Customer-Role').child(this.userProfile.uid).on('value', snapshot =>{
            if(snapshot.val()){
              this.values.userRole = snapshot.val().role;
            }
            
          });

        }).catch(err => {this.handleError(err)});
      }
  }
  handleError(err){
        console.log(err.code);
        this.errorSigninMessage = err.message;
        this.disableLogin = false;
  }
  validate(){
    if(this.form.email == undefined || this.form.email == ''){
      this.errorSigninMessage = 'Please enter email';
      return false;
    }
    if(this.form.password == undefined || this.form.password == ''){
      this.errorSigninMessage = 'Please enter password';
      return false;
    }
    return true;
  }

  //FACEBOOK LOGIN

 facebookLogin(){
    this.fb.login(['email']).then( (response) => {
        let facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential).then((success) => {
            console.log("Firebase success: " + JSON.stringify(success));
            this.userProfile = success;
            this.values.isLoggedIn = true;
            this.customerList.child(this.userProfile.uid).set({
            displayName: this.userProfile.displayName,
            photoURL: this.userProfile.photoURL,
            email: this.userProfile.email
        });
            this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
             this.userProfiles = snapshot.val();
            });

          this.values.userRole = firebase.database().ref('/Customer-Role').child(this.userProfile.uid).on('value', snapshot =>{
            if(snapshot.val()){
              this.values.userRole = snapshot.val().role;
            } 
          });

           // this.nav.push('ShopPage');
        }).catch((error) => {
           console.log("Firebase failure: " + JSON.stringify(error));
           this.functions.showAlert('Error', error.message);
          });
    }).catch((error) => { console.log(error)
    this.functions.showAlert('Error', error); });
  }

  //TWITTER LOGIN

 /* twLogin(): void {
    this.twitter.login().then( response => {
      const twitterCredential = firebase.auth.TwitterAuthProvider.credential(response.token, response.secret);

      firebase.auth().signInWithCredential(twitterCredential).then( userProfile => {
          this.values.isLoggedIn = true;
          this.userProfile = userProfile;
          this.userProfile.twName = response.userName;
          this.customerList.child(this.userProfile.uid).set({
            displayName: this.userProfile.displayName,
            photoURL: this.userProfile.photoURL,
            email: this.userProfile.email
        });
          this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
           this.userProfiles = snapshot.val();
          });

          this.values.userRole = firebase.database().ref('/Customer-Role').child(this.userProfile.uid).on('value', snapshot =>{
            if(snapshot.val()){
              this.values.userRole = snapshot.val().role;
            } 
          });
         //this.nav.push('ShopPage');
          console.log(this.userProfile);
      }, error => {
        this.functions.showAlert('Error', error.message);
        console.log(error);
      });
    }, error => {
      this.functions.showAlert('Error', error);
      console.log("Error connecting to twitter: ", error);
    });
  }*/

  //GOOGLE LOGIN 
  /***

  gmailLogin(){
    
     
      this.googlePlus.login({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': '456352511209-qmma51oquif9u5msldo4u90ra83kdtfo.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true
      })
      .then( res => {
       firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
       .then( success =>{
        this.userProfile = success;
        this.values.isLoggedIn = true;
        console.log("Firebase Success" + JSON.stringify(success));
         this.customerList.child(this.userProfile.uid).set({
            displayName: this.userProfile.displayName,
            photoURL: this.userProfile.photoURL,
            email: this.userProfile.email
        });
         this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
           this.userProfiles = snapshot.val();
          });

         this.values.userRole = firebase.database().ref('/Customer-Role').child(this.userProfile.uid).on('value', snapshot =>{
            if(snapshot.val()){
              this.values.userRole = snapshot.val().role;
            } 
          });
        // this.nav.push('ShopPage');
        }).catch( error =>{
          this.userProfile = error;
          this.functions.showAlert('Error', error.message);
         console.log("Firebase Failure" + JSON.stringify(error))
         });
      }).catch(err =>{
        this.userProfile = err;
        this.functions.showAlert('Error', err);
         console.error("Error: ", err);
        });
    
  }


*/

  forgotten(){
    this.nav.push('ResetpassowrdPage');
  }


  logOut(){
    this.auth.logoutUser().then(() => {
      this.values.isLoggedIn = false;
      this.values.userRole = 'Customer';
    });
  }

  address(item){
    console.log(item)
    this.nav.push(AddressPage, item)
  }

  myOrder(){
    this.nav.push(MyorderPage);
  }
  
  changePassword(form){
	  
	  if(form.password!="" && form.password!=null  ){
        //Update Password in UserAuthentication Table
         firebase.auth().currentUser.updatePassword(form.password).then(function(ok) {}, function(error) {});
		 alert("Password changed");
      }
	  else{
		  alert("Please enter new password");
	  }
	 
	  
  }




  register() {
    if(this.validateRegister(this.form)){
      this.disableRegister = true;
      this.buttonText = "Registering...";
      this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName)
      .then(() => {

        this.currentUser = firebase.auth().currentUser;

   
          this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
           this.userProfiles = snapshot.val();

        
      });
        
        this.disableRegister = false;
        this.buttonText = "Register Account";
      }).catch(err => {this.handleRegisterError(err)});
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
  
   goToMap(){
	  this.nav.push(MapPage);
  }



 /* ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  } 

  signIn(phoneNumber: number){
  document.getElementById('recaptcha-container').innerHTML = "";
  this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  const appVerifier = this.recaptchaVerifier;
  const phoneNumberString = "+" + phoneNumber;
  firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    .then( confirmationResult => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      let prompt = this.alertCtrl.create({
      title: 'Enter the Confirmation code',
      inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
      buttons: [
        { text: 'Cancel',
          handler: data => { console.log('Cancel clicked'); appVerifier}
        },
        { text: 'Send',
          handler: data => {
            confirmationResult.confirm(data.confirmationCode)
            .then( (result) => {
              // User signed in successfully.
              //console.log(result.user);
              this.userProfiles = result.user;
                 console.log( this.userProfiles);
                // console.log( result.user.phoneNumber);
              // ...
            }).catch( (error) => {this.handleErrors(error)




              // User couldn't sign in (bad verification code?)
              // ...
            });
          }
        }
      ]
    });
    prompt.present();
  })
  .catch( (error) =>{
    this.handleErrors(error)
    console.error("SMS not sent", error);
  });

}

handleErrors(error){
  this.errorPhoneMessage = error.message;
}*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

}
