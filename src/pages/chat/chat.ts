import {Component, ElementRef, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import * as moment from "moment";
import {Observable} from "rxjs/Observable";
import { Camera, CameraOptions } from "@ionic-native/camera";
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {

    public restaurant;
    public user;
    public chatKey;
    public chatRoom;
    public messages: any = [];
    public messageRef: Observable<{}>;
    showEmojiPicker = false;
    @ViewChild(Content) content: Content;
    @ViewChild('chat_input') messageInput: ElementRef;
    newMessage = '';
    editorMsg = '';
    storageRef:any;
    constructor(public actionSheetCtrl: ActionSheetController,public camera: Camera,public navCtrl: NavController, public navParams: NavParams, public afDb: AngularFireDatabase, public afAuth: AngularFireAuth) {
      this.storageRef = firebase.storage().ref('/chatimages/');
    }

    ionViewDidLoad() {
        // this.user =
        // console.log(firebase.auth());
        // console.log(firebase.auth().currentUser.toJSON());

        this.restaurant = this.navParams.get("restaurant");
        this.user = this.navParams.get("user");
        // this.afAuth.user.subscribe(res => {
        //     this.user = res.;
        //
        //     if (this.restaurant && this.user) {
        //         this.getCreateChatRoom();
        //     }
        // });

        this.afAuth.user.subscribe(res => {
            this.user = res.toJSON()
            if (this.user && this.restaurant) {
                this.getCreateChatRoom();
            }
        })

    }

    getCreateChatRoom() {

        this.chatKey = this.restaurant.owner_id + ":" + this.user.uid;
        console.log("ChatKey", this.chatKey);
        console.log("User", this.user);
        if (this.user.displayName == null) {
            this.user.displayName = "Unknown User";
        }
        let chatCreateData = {
            vendor_id: this.restaurant.owner_id,
            user_id: this.user.uid,
            user_name: this.user.displayName,
            vendor_title: this.restaurant.title,
            hasUnreadMsg:false,
            last_message:''
        };
        // let chatRooms = this.afDb.object("/chatrooms/" + this.chatKey);
        this.afDb.object("/chatrooms/" + this.chatKey).valueChanges().subscribe(value => {
            console.log(value);
            this.chatRoom = value;
            if (!value || value == null) {
                this.afDb.object("/chatrooms/" + this.chatKey).set(chatCreateData).then(res => {
                    console.log(res);
                }).catch(e => {
                    console.error(e);
                });
            }
        });


        // let messages = this.afDb.list("/chatmessages/" + this.chatKey).valueChanges();
        // console.log(messages);
        // console.log(this.messageRef);
        // messages.subscribe(res => {
        //     console.log(res);
        // });

        firebase.database().ref("/chatmessages/" + this.chatKey).orderByChild("timestamp").on("child_added", res => {
            this.messages.push(res.toJSON());
        });
        // this.messageRef = this.afDb.list("/chatmessages/" + this.chatKey);
        //
        // this.messageRef.valueChanges().subscribe(res => {
        //     console.log(res);
        // });

        // console.log(chatRooms);

        // this.afDb.object("/chatrooms/"+this.chatKey).valueChanges()
        // firebase.database().refFromURL("/chatrooms/"+this.chatKey).child("messages").on("v")


    }

    sendMessage(message) {
        var  timestamp = moment().unix();
        let data = {
            "sender_id": this.user.uid,
            "receiver_id": this.restaurant.owner_id,
            "message": message,
            "timestamp": timestamp
        };

        this.afDb.list("/chatmessages/" + this.chatKey).push(data).then(res => {
            console.log(res);
            this.editorMsg = '';
        });
        firebase.database().ref(`/chatrooms/${this.chatKey}`).update({"hasUnreadMsg":true,"last_message":message,"last_msg_timestamp":timestamp},(err)=>{
          if(err){
            console.error("err in err => ",err)
          } else {
            console.log("no error in err => ",this)
          }
        })
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
          var timestamp=moment().unix()
          let data = {
            "sender_id": this.user.uid,
            "receiver_id": this.restaurant.owner_id,
            "message": '',
            "message_type": 'image',
            "firebase_url": savedPicture.downloadURL,
            "image": "/chatimages/" + this.generateUUID() + ".png",
            "img": this.generateUUID() + ".png",
            "timestamp": timestamp
          };
          this.afDb.list("/chatmessages/" + this.chatKey).push(data).then(res => {
            this.editorMsg = '';
            firebase.database().ref(`/chatrooms/${this.chatKey}`).update({"hasUnreadMsg":true,"last_message":'User sent attachment',"last_msg_timestamp":timestamp},(err)=>{
              if(err){
                console.error("err in err => ",err)
              } else {
                console.log("no error in err => ",this)
              }
            })
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
