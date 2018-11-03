import { Component, OnInit, ViewChild} from '@angular/core';
import { Service } from '../../providers/service';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Values } from '../../providers/values';
import { CategoryPage } from '../category/category';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { Functions } from '../../providers/functions/functions';
import { Stripe } from '@ionic-native/stripe';
import { AddressPage } from '../address/address';
import { MyorderPage } from '../myorder/myorder';
import firebase from 'firebase';




/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
 // template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})
export class CartPage {
	


  constructor(public nav: NavController, public params: NavParams, public functions: Functions, public service: Service, public values:Values, private payPal: PayPal, private stripe: Stripe, public translateService: TranslateService) {
	  
  }
  
  
  
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
