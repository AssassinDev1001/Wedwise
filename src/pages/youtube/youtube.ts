import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the YoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
})
export class YoutubePage {
	
	
	videos: any[] = [
		{
			title: 'Flashlight Application',
			video: 'https://www.youtube.com/embed/9yZEvkofi24',
		},
		{
			title: 'SMS Application',
			video: 'https://www.youtube.com/embed/9yZEvkofi24',
		}
	]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YoutubePage');
  }

}
