import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActionSheetController, Content, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import firebase from "firebase/app";
import * as moment from "moment";
import { Camera, CameraOptions } from "@ionic-native/camera";

/**
 * Generated class for the ChatVendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-vendor',
  templateUrl: 'chat-vendor.html',
})
export class ChatVendorPage {
  public restaurant;
  public user;
  public chatKey;
  public chatRoom;
  public messages: any = [];
  public messageRef: Observable<{}>;
  showEmojiPicker = false;
  storageRef: any;
  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  newMessage = '';
  editorMsg = '';
  chatRoomsRef:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public afDb: AngularFireDatabase,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public afAuth: AngularFireAuth) {
    this.storageRef = firebase.storage().ref('/chatimages/');
    this.chatRoomsRef = this.afDb.list('/chatrooms').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatVendorPage');
    this.restaurant = this.navParams.get("restaurant");
    this.chatKey = this.restaurant.vendor_id + ":" + this.restaurant.user_id;
    firebase.database().ref(`/chatrooms/${this.chatKey}`).update({"hasUnreadMsg":false},(err)=>{
      if(err){
        console.error("err in err => ",err)
      } else {
        console.log("no error in err => ",this)
      }
    })
    console.log(this.chatKey);
    this.afAuth.user.subscribe(res => {
      this.user = res.toJSON();
      firebase.database().ref("/chatmessages/" + this.chatKey).on("child_added", res => {
        var msgData = res.toJSON();
        this.messages.push(res.toJSON());
      });

    });


  }
  sendMessage(message) {
    if (message.trim() != "") {
      let data = {
        "sender_id": this.user.uid,
        "receiver_id": this.restaurant.user_id,
        "message": message,
        "message_type": 'text',
        "firebase_url": "",
        "image": "",
        "img": "",
        "timestamp": moment().unix()
      };
      
      this.afDb.list("/chatmessages/" + this.chatKey).push(data).then(res => {
        this.editorMsg = '';
      });
    }
  }

  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.focus();
    } else {
      this.setTextareaScroll();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea = this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }

  openGallery() {
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
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imagePath) => {
      if(imagePath != ''){
        this.uploadPhoto(imagePath);
      }
    }).catch((err)=>{

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
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imagePath) => {
      if(imagePath != ''){
        this.uploadPhoto(imagePath);
      }
    }).catch((err)=>{
      console.log(err)
    })


  }

  uploadPhoto(imagePath) {

    this.storageRef.child(this.generateUUID() + ".png")
      .putString(imagePath, 'base64', { contentType: 'image/png' })
      .then((savedPicture) => {
        console.log(savedPicture.downloadURL);

        let data = {
          "sender_id": this.user.uid,
          "receiver_id": this.restaurant.user_id,
          "message": '',
          "message_type": 'image',
          "firebase_url": savedPicture.downloadURL,
          "image": "/chatimages/" + this.generateUUID() + ".png",
          "img": this.generateUUID() + ".png",
          "timestamp": moment().unix()
        };
        this.afDb.list("/chatmessages/" + this.chatKey).push(data).then(res => {
          this.editorMsg = '';
        });
        
      }).catch((err) => {
        console.log(JSON.stringify(err))
      });
  }

  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

}
