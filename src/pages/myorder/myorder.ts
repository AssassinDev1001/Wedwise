import { Component, OnInit} from '@angular/core';
import { Service } from '../../providers/service';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import { CategoryPage } from '../category/category';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { OrderDetailsPage } from '../order-details/order-details';

import firebase from 'firebase';

/**
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myorder',
  templateUrl: 'myorder.html',
})
export class MyorderPage {
	
	currentUser: any;
	myOrderList: any;
	id:any;
	
	params:any = {};

  constructor(public values:Values, private nativeStorage: NativeStorage, public nav: NavController, public navParams: NavParams, public service: Service, public translateService: TranslateService) {
	  
	 
	  
  }

  

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyorderPage');
  }

}
