import { Service } from '../../providers/service';



import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { NavController, NavParams, PopoverController, IonicPage, ViewController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import { CategoryPage } from '../category/category';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { Component } from '@angular/core'
import { MapPage } from '../map/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';


import { EventPage } from '../event/event';
import { WritecommentPage } from '../writecomment/writecomment';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { ChatPage } from '../chat/chat';
import { GlobalProvider } from './../../providers/global/global';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http'

import { ChecklistPage } from '../checklist/checklist';
import { GuestlistPage } from '../guestlist/guestlist';
import { ChattingPage } from '../chatting/chatting';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  friends: Observable<any[]>;
  items: any;

  categoryList: any;
  name: any;
  bannerList: any;
  firebasedata: any;
  restaurants: any;
  productList: any;
  public categoryId: any;
  public catlisti: any;
  caateg: any;
  //showicon:boolean=false;
  notificationCount: any = 0;

  params: any = {};

  isVendor: any = false;
  selectedItem: any;
  icons: string[];

  //items: Array<{title: string, note: string, icon: string}>;

  constructor(public values: Values, private nativeStorage: NativeStorage, public nav: NavController,
    public navParams: NavParams, public service: Service, public translateService: TranslateService,
    private callNumber: CallNumber, private emailComposer: EmailComposer, public global: GlobalProvider,
    public af: AngularFireDatabase, public popoverCtrl: PopoverController) {

    this.isVendor = this.navParams.get('is_vendor');
    /**

     this.items = af.database.list('/category', {
  
});

     this.af.auth.subscribe(auth => {
  if(auth) {
    this.name = auth;
  }
});
     **/
    // If we navigated to this page, we will have an item available as a nav param
    this.categoryList = [];
    this.firebasedata = [];
    // this.restaurants = [];
    this.caateg = [];

    console.log('data');

    //this.nav = nav;


    let ref2 = firebase.database().ref('category');
    console.log(ref2);
    //alert(JSON.stringify(ref2));

    //alert(JSON.stringify(catlist));
    ref2.once('value', personSnapshott => {

      let caateg = personSnapshott.val();
      //let caateg=JSON.parse(caategu);
      //alert("JSON.stringify(caateg)");
      // alert(JSON.stringify(caateg));
    });

    this.nativeStorage.getItem('userProfile').then((user) => {
      console.log("user native storagte => ", user)
      this.af.object("/chatrooms").valueChanges().subscribe(value => {
        console.log("snap => ", value);
        var newMsg = false;
        for (var key in value) {
          var singleRoom = value[key];
          if (singleRoom.vendor_id == user.uid && singleRoom.hasUnreadMsg) {
            newMsg = true;
          }
        }
        if (newMsg) {
          this.notificationCount = 1;
        } else {
          this.notificationCount = 0;
        }
      });
    }).catch((err) => {

    })



    //alert(JSON.stringify(this.user));
    this.params.data = {
      "items": [{
        "backgroundImage": "/images/background/1.jpg",
        "expandItems": {
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          "iconsStars": [{
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }, {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }, {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }, {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": true
          }, {
            "iconActive": "icon-star",
            "iconInactive": "icon-star-outline",
            "isActive": false
          }],
          "reviews": "4.12 (78 reviews)",
          "title": "Lorem ipsum dolor sit amet"
        },
        "icon": "ios-arrow-dropright",
        "iconText": "Read more",
        "id": 1,
        "subtitle": "Monday, 15th Oct. 2017",
        "title": "Main Stage Event"
      }]
    }
    //console.log("catlist");

    //let catlisti=this.params.data;
    //  alert(JSON.stringify(catlisti));
    // console.log(JSON.stringify(catlisti));
    //alert(catlist);


    this.params.events = {
      'onItemClick': function (item: any) {
        console.log('onItemClick');
      },
      'onRates': function (index: number) {
        console.log('onRates');
      },
      'onCheckBoxClick': function (item: any) {
        console.log('onCheckBoxClick');
      },
      'onButtonClick': function (item: any) {
        console.log('onButtonClick');


      }
    };


  }

  openPopover(myEvent, notificationCount) {
    let popover = this.popoverCtrl.create(NotificationPage, {
      notificationCount: notificationCount
    });
    popover.present({
      ev: myEvent
    });
  }

  ngOnInit() {


    this.nativeStorage.getItem('firebasedatabanners')
      .then(
        data => this.handlebanners(data),
        error => console.error(error)
      );

    this.nativeStorage.getItem('firebasedatacategories')
      .then(
        data => this.handlecategories(data),
        error => console.error(error)
      );


    this.service.getCategoriesList().on('value', snapshot => {
      //this.productsList = [];
      this.params.data.items = [];

      snapshot.forEach(snap => {
        this.params.data.items.push({

          id: snap.key,
          category: snap.val().cat_id,
          title: snap.val().cat_name,
          subtitle: snap.val().cat_name,
          ionBadge: snap.val().cat_name,
          backgroundImage: snap.val().firebase_url,
          icon: "ios-arrow-dropright",
          iconText: "Read more",
          description: snap.val().cat_name
        });
      });
      // console.log("s2222dddddddddddddddddddddddddata");

      //console.log(this.params.data.items);


      //let cati=this.params.data.items;

      //alert(JSON.stringify(cati));

      //console.log(catag);
    });

    // console.log(firebase.database().ref("/restaurants"));

    this.service.getRestaurantsList().on('value', snapshot => {

      console.log(snapshot.val());
      this.params.data.items = [];
      //this.saveCategories(snapshot.val());
      snapshot.forEach(snap => {
        this.params.data.items.push({
          id: snap.key,
          title: snap.val().title,
          subtitle: snap.val().info,
          backgroundImage: snap.val().firebase_url,
          icon: "ios-arrow-dropright",
          iconText: "Read more",
          description: snap.val().info,
          owner_id: snap.val().user_id
        });
      });


      console.log(this.params.data.items);
      let restaurants = this.params.data.items;
      console.log(this.restaurants);
      this.restaurants = restaurants;
      //alert("hu")
      // console.log(JSON.stringify(restaurants));
      //alert(JSON.stringify(restaurants));
    });

    // firebase.database().ref("/restaurants")
    this.service.getBanners().on('value', snapshot => {
      this.bannerList = snapshot.val();
      this.saveBanners(snapshot.val());
    });

    this.service.getSetting().on('value', snapshot => {
      //this.values.currency = snapshot.val().currency;
    });

  }

  getProducts(id) {
    this.nav.push('ProductsPage', { id: id });
  }

  getCategory(id) {
    console.log("inside category");
    console.log(id);
    this.nav.push(CategoryPage, { id: id });
    //this.nav.push(Category);
    // console.log(id);
  }

  saveBanners(data) {

    this.nativeStorage.setItem('firebasedatabanners', data)
      .then(
        () => console.log('Saved'),
        error => console.log('Error')
      );
  }

  saveCategories(catsnap) {
    this.nativeStorage.setItem('firebasedatacategories', catsnap)
      .then(
        () => console.log('Saved'),
        error => console.log('Error')
      );
  }

  goToCart() {
    this.nav.push(CartPage);
  }

  goToMap() {
    this.nav.push(MapPage);
  }


  handlebanners(data) {
    this.bannerList = data;
    console.log("sdddata");
    console.log(data);
  }

  handlecategories(data) {
    this.categoryList = [];
    for (let item in data) {
      this.categoryList.push({
        id: data[item].id,
        name: data[item].name,
        downloadURL: data[item].downloadURL,
        description: data[item].description
      });
    }

  }

  wedevents() {
    console.log("jjj");
    this.nav.push(EventPage);

  }

  callmyNumber() {
    this.callNumber.callNumber("18001010101", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  openemail() {

    this.emailComposer.isAvailable().then((available: boolean) => {
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

  openChat(restaurant) {
    console.log(restaurant);
    this.nav.push(ChatPage, { restaurant: restaurant });
  }


  addFavourate() {
    console.log("hjh");
    this.global.showicon = true;
    let cusid = "LLheFLvL0U0hx55sIpO";
    let ownerid = "eKM6qOJFsAXsrff502GsK6hTJQq2";
    //let cuid = localStorage['uid'];
    let joinDataa = firebase.database().ref().child('/FavourateList/' + ownerid)
    joinDataa.update({
      OwnerId: ownerid,
      CustomerId: cusid,
      FavourateStatus: this.global.showicon,
      sendDate: Date()
    });
  }

  addFavourates() {
    console.log("hjh");
    this.global.showicon = false;
    let cusid = "LLheFLvL0U0hx55sIpO";
    let ownerid = "eKM6qOJFsAXsrff502GsK6hTJQq2";
    //let cuid = localStorage['uid'];
    let joinDataa = firebase.database().ref().child('/FavourateList/' + ownerid)
    joinDataa.update({
      OwnerId: ownerid,
      CustomerId: cusid,
      FavourateStatus: this.global.showicon,
      sendDate: Date()
    });
  }

}


@Component({
  selector: 'page-notification',
  template: `
  <ion-content class="main-view">
    <div class="overlay" (click)="dismiss()"></div>
    <div class="modal_content" #modalContent>
      <ion-item borderBottom class='firstItem' *ngIf='notificationCount == 1' (click)="GoToMessage()" text-center>
        <h2 style='color:#ec3f7a'>You have new messages..</h2>
      </ion-item>
      <ion-item borderBottom class='firstItem' *ngIf='notificationCount == 0' (click)="dismiss()" text-center>
        <h2 style='color:#ec3f7a'>You don't have any messages..</h2>
      </ion-item>
      </div>
  </ion-content>`
})
export class NotificationPage {
  notificationCount: any;
  constructor(private nav: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.notificationCount = this.navParams.get('notificationCount');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  GoToMessage() {
    this.nav.push(ChattingPage, {
      fromList: true
    });
    this.dismiss();
  }

}
