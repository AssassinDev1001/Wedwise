import {Component, ViewChild} from '@angular/core';
import {AlertController, Events} from 'ionic-angular';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Push, PushObject, PushOptions} from '@ionic-native/push';
import {Values} from '../providers/values';

import {TranslateService} from '@ngx-translate/core';


import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {CartPage} from '../pages/cart/cart';
import {MyorderPage} from '../pages/myorder/myorder';
import {MyProfilePage} from '../pages/my-profile/my-profile';
import {WishlistPage} from '../pages/wishlist/wishlist';
import {MapPage} from '../pages/map/map';
import {YoutubePage} from '../pages/youtube/youtube';
import {EventPage} from '../pages/event/event';
import {ChecklistPage} from '../pages/checklist/checklist';
import {GuestlistPage} from '../pages/guestlist/guestlist';
import {ChattingPage} from '../pages/chatting/chatting';
import {FindbycategoryPage} from '../pages/findbycategory/findbycategory';
// import {AngularFireDatabase} from 'angularfire2';
// import {AngularFireAuth} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{ title: string, component: any, icon: string }>;
    userPages: Array<{ title: string, component: any, icon: string }>;

    public fireAuth: any;

    public userProfiles: any;
    vendorPages:any;
    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public push: Push, public alertCtrl: AlertController, public values: Values, public translateService: TranslateService) {





        // Copy your firebase credencial here
        firebase.initializeApp({
            apiKey: "AIzaSyDrZY5KUdy9XldwZBsh15F_hBoRSwHivgc",
            authDomain: "wedwise-app-1535104268391.firebaseapp.com",
            databaseURL: "https://wedwise-app-1535104268391.firebaseio.com",
            projectId: "wedwise-app-1535104268391",
            storageBucket: "wedwise-app-1535104268391.appspot.com",
            messagingSenderId: "751512906322"

        });

        this.initializeApp();

        this.fireAuth = firebase.auth();

        // used for an example of ngFor and navigation
        this.vendorPages = [
            {title: 'Find Vendors Near Me', component: ListPage, icon: "svg-find"},
            {title: 'Find Vendor By Category', component: FindbycategoryPage, icon: "svg-search"},
            {title: 'Message', component: ChattingPage, icon: "svg-message"},
            {title: 'My Favorite', component: WishlistPage, icon: "svg-heart"},
            {title: 'CheckList', component: ChecklistPage, icon: "svg-check"},
            {title: 'Gueslist', component: GuestlistPage, icon: "svg-guest"},
            {title: 'Setting', component: YoutubePage, icon: "svg-settings"},
            {title: 'Help', component: YoutubePage, icon: "svg-info"}
        ];

        this.userPages = [
          {title: 'Find Vendors Near Me', component: ListPage, icon: "svg-find"},
          {title: 'Find Vendor By Category', component: FindbycategoryPage, icon: "svg-search"},
          {title: 'My Favorite', component: WishlistPage, icon: "svg-heart"},
          {title: 'CheckList', component: ChecklistPage, icon: "svg-check"},
          {title: 'Gueslist', component: GuestlistPage, icon: "svg-guest"},
          {title: 'Setting', component: YoutubePage, icon: "svg-settings"},
          {title: 'Help', component: YoutubePage, icon: "svg-info"}
      ];

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {

                this.values.userRole = firebase.database().ref('/users').child(user.uid).on('value', snapshot => {
                    if (snapshot.val()) {
                        this.userProfiles = snapshot.val();
                        var isVendor = snapshot.val().is_vendor;
                        
                        if(isVendor){
                          this.pages = this.vendorPages;
                        } else {
                          this.pages = this.userPages;
                        }
                    }

                });
            }
        });


        

        this.translateService.setDefaultLang('english');

        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.values.isLoggedIn = true;
                this.values.userRole = firebase.database().ref('/Customer-Role').child(user.uid).on('value', snapshot => {
                    if (snapshot.val()) {
                        this.values.userRole = snapshot.val().role;
                    }

                });

            }
        });

    }

//kjlkj
//jkljlk
    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.pushsetup();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    logOut() {
        this.fireAuth.signOut();
        console.log('logged out');
        this.nav.setRoot(HomePage);
    }


    pushsetup() {
        const options: PushOptions = {
            android: {
                senderID: '761594501055'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };

        const pushObject: PushObject = this.push.init(options);

        pushObject.on('notification').subscribe((notification: any) => {
            if (notification.additionalData.foreground) {
                let youralert = this.alertCtrl.create({
                    title: 'New Push notification',
                    message: notification.message
                });
                youralert.present();
            }
        });

        pushObject.on('registration').subscribe((registration: any) => {
            //do whatever you want with the registration ID

        });

        pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
    }


    goprofile() {

        this.nav.push(MyProfilePage);
    }
}
