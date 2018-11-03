import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NativeStorage} from '@ionic-native/native-storage';
import {ChatPage} from '../chat/chat';
import {HomePage} from '../home/home';
import firebase from 'firebase/app';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";
import {ChatVendorPage} from "../chat-vendor/chat-vendor";
import {ListPage} from '../list/list';

/**
 * Generated class for the ChattingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-chatting',
    templateUrl: 'chatting.html',
})
export class ChattingPage {

    public fireAuth: any;
    user: any;
    rooms: Observable<any[]>;
    chatRooms: any = [];
    userProfile:any;
    fromList:any;
    chatRoomsRef:any;
    constructor(public nav: NavController, public navParams: NavParams, public afDb: AngularFireDatabase, private nativeStorage: NativeStorage) {
      this.fromList = this.navParams.get('fromList');
    }

    afterViewLoad(data){
      this.userProfile = data;
      this.user = this.navParams.get('user') || data;
      console.log(this.user.uid);

      // Get the active chats

        // this.afDb.list("/chatrooms", {
        //     query: {
        //         equalTo: {vendor_id: this.user.uid},
        //         orderByChild: "vendor_id",
        //     }
        // }).subscribe(res => {
        //     console.log(res);
        // });
        // this.afDb.list("/chatrooms", ref => {
        //     return ref.orderByChild("vendor_id").equalTo(this.user.uid);
        // }).valueChanges().subscribe(res=>{
        //     console.log(res);
        // });
        // this.afDb.list("/chatrooms", {
        //     // query: {
        //     equalTo: this.user.uid
        //     // }
        // })
        // firebase.database().ref("/chatrooms").on("value", (res: any) => {
        //     // console.log(rooms.toJSON());
        //     let roomsVal = res.toJSON();
        //     this.rooms = roomsVal.filter(room => {
        //         if (room.vendor_id == this.user.uid) {
        //             return true;
        //         }
        //     });
        //     console.log(this.rooms);
        // });
        // let chatRooms = new Observable < any[] >;
        // firebase.database().ref("/chatrooms").on("child_added", e => {
        //     console.log(e);
        //     // chatRooms.push(e.toJSON());
        //     // console.log("chatRooms", chatRooms);
        //     // this.chatRooms.combineLatest(e.toJSON);
        //     return this
        // });
        // // Observable.interval(3000).flatMap(() => {
        // //     return this.http.get('/some-request').map(res => res.json());
        // // }).subscribe((data) => {
        // //     console.log(data);
        // // });
        // this.chatRooms.subscribe(res => {
        //     console.log(res);
        // });
        let obs = Observable;
        // firebase.database().ref("/chatrooms").on("child_added", e => {
        //
        // });
        // let test = firebase.database().ref("/chatrooms").on("child_added");
        // console.log(test);
        // obs.bindCallback(firebase.database().ref("/chatrooms").on("child_added", e => {
        //     console.log(e);
        // }));
        
        this.afDb.object("/chatrooms").valueChanges().subscribe(value => {
          console.log("snap rooms => ",value);
          this.chatRooms=[];
          for(var key in value){
            var singleRoom = value[key];
            if(singleRoom.vendor_id == this.user.uid){
              this.chatRooms.push(singleRoom);
            }
          }
      });

        // firebase.database().ref("/chatrooms").on("child_added", (item: any) => {
        //     console.log(item.val());
        //     if (item.val().vendor_id == this.user.uid) {
                
        //         console.log(this.chatRooms);
        //     }
        // });
    }

    ionViewDidLoad() {

        this.fireAuth = firebase.auth();
        console.log('ionViewDidLoad ChattingPage');

        this.nativeStorage.getItem('userProfile')
        .then(
            data => this.afterViewLoad(data),
            error => console.error(error)
        );
    }

    openChat(data) {

        console.log(data);
        this.nav.push(ChatVendorPage, {restaurant: data});
    }
    ChattingBack(){
      console.log("Test")
      this.nav.setRoot(ListPage, {user: this.userProfile});
    }
    logOut() {
        this.fireAuth.signOut();
        console.log('logged out');
        this.nav.setRoot(HomePage);
    }

}
