import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Values } from '../../providers/values';
import { Service } from '../../providers/service';
import { TranslateService } from '@ngx-translate/core';
//import { CartPage } from '../cart/cart';
import { CartPage } from '../cart/cart';
import { ListPage } from '../list/list';

import { ItemmapPage } from '../itemmap/itemmap';
import { WritecommentPage } from '../writecomment/writecomment';

import {CallNumber} from '@ionic-native/call-number';

import { HomePage } from '../home/home';




/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
	
	id: any;
	productsList: any;
	productDetails: any;
	params:any = {};

  product: any;
  cartItem: any = {};
  quantity: any;
  favoriteItem: any;
  distanceRestaurant: any;

  constructor(public callNumber: CallNumber,public nav: NavController, public navParams: NavParams, public service: Service, public values:Values, public translateService: TranslateService) {
	  
	  this.quantity = "1";
	  
	  this.id = navParams.data.id;
	  console.log(this.id);
	  this.params.data = {
      "headerImage" : "assets/images/background-small/4.jpg",
      "headerTitle" : "Product",
      "items" : [ {
        "button" : "$63.99",
        "category" : "NEW OFFER",
		"favorite" : true,
        "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "id" : 1,
        "productDescriptions" : [ {
          "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "id" : 1
        }, {
          "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          "id" : 2
        }, {
          "description" : "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum",
          "id" : 3
        }, {
          "description" : "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum",
          "id" : 4
        } ],
        "subtitle" : "Available Now",
        "title" : "Super & Black"
      } ],
      "shareIcon" : "more"
    }


	 this.params.events = {
        'onProceed': function (item: any) {
            console.log("onProceed");
        },
        'onShare': function (item: any) {
            console.log("onShare");
        },
        'onItemClick': function (item: any) {
            console.log("onItemClick");
        },
		'onFavorite': function(item) {
                item.favorite = !item.favorite;
                console.log("onFavorite");
            }
    };
	
	this.params.data = [];
	
	console.log(this.params.data.items);
	console.log(this.navParams.get('id'));
	
	
	
	 
	 this.service.getBuildingsDetail(this.navParams.get('id')).on('value', (snap) => {
		  //this.params.data.items = snapshot.val();
		  console.log(snap.val());
		  //this.params.data = snapshot.val();
		  
		  this.service.getDistanceRestaurant(snap.key).on('value',snapshots =>{
				this.distanceRestaurant = snapshots.val();
				console.log(this.distanceRestaurant);
		  
						this.params.data.push({
					  
							id: snap.key,
							firebase_url:snap.val().firebase_url,
							address:snap.val().address,
							category:snap.val().category,
							description:snap.val().description,
							images:snap.val().image,
							img: snap.val().img,
							info: snap.val().info,
							lat: snap.val().lat,
							long: snap.val().long,
							distance: this.distanceRestaurant,
							mark: snap.val().mark,
							option: snap.val().option,
							outlet: snap.val().outlet,
							phonenumber: snap.val().phonenumber,
							title: snap.val().title,
							market:true,
						});
						
						console.log(this.params.data);
  		
		});
		
		  
		 
		  //console.log(this.productDetails);
		});
		this.params.data.comments = [];
		this.service.getBuildingsDetail(this.navParams.get('id')).child('comments').on('value', (snapshot) => {
		  //this.params.data.items = snapshot.val();
		  console.log(snapshot.val());
		  //this.params.data = snapshot.val();
		  
		  
		  snapshot.forEach( snap =>{
  			this.params.data.comments.push({
          
  			id: snap.key,
			comment: snap.val().comment,
			photo_url:snap.val().photo_url,
			product_id:snap.val().product_id,
			user_id:snap.val().user_id,
			user_name:snap.val().user_name
  			});
  		});
  		
		  
		 
		  //console.log(this.productDetails);
		});

		
		
	 console.log(this.params.data); 
	 
	 
	 //this.homepage.showVideoRewardsAd();
  }
  
  


  
  
  
  addToFavourite(data){
	  console.log(data);
	  this.service.addToFavorite(data,this.navParams.get('id'));
  }
  
  writeComment(data){
	  console.log(data);
	  //this.service.writeComment();
	  this.nav.push(WritecommentPage, {data:data});
	  
  }
  
  removeFavourite(){
	  console.log("product detail remove");
	  this.service.removeFavourite(this.id);
  }
  
  call(data){
	  this.callNumber.callNumber(data.phonenumber, true)
            .then(() =>{} )
            .catch(() =>{});
  }
  
  getFavoriteItem(){
	  
	 console.log("favorite");
	 console.log(this.id);
	 this.favoriteItem = this.service.getFavoriteItem(this.id);
	 return this.favoriteItem;
  }  

  
  addToCart(name, price, image){
 
      var itemAdded = false;
      for(let item in this.service.cart.line_items){
        if(this.id == this.service.cart.line_items[item].product_id){
          this.service.cart.line_items[item].quantity += 1;
		  
		  console.log(this.service.cart.line_items[item].quantity);
          this.service.proqty[this.id] += 1;
		  console.log(this.service.proqty[this.id]);
		  
          this.service.total += parseFloat(this.service.cart.line_items[item].price);
		  
		  console.log(this.service.total);
          this.values.qty += 1;
		  
		  console.log(this.values.qty);
          itemAdded = true;
		  console.log(this.service.cart.line_items);
        }
      }

      if(!itemAdded){
		  console.log(itemAdded);
        this.cartItem.product_id = this.id;
		console.log(this.cartItem.product_id );
		
        this.cartItem.quantity = 1;
        this.service.proqty[this.id] = 1;
		
		console.log(this.service.proqty[this.id]);
        this.cartItem.name = name;
        this.cartItem.image = image;
        this.cartItem.price = price;
        this.service.total += parseFloat(price);
		console.log(this.service.total);
        this.values.qty += 1;
		console.log(this.values.qty);
        this.service.cart.line_items.push(this.cartItem);
        console.log(this.service.cart.line_items);
      }

      this.cartItem = {};

  }
  
  goToCart(){
	  this.nav.push(CartPage);
  }
  
   goToMap(data){
	  this.nav.push(ItemmapPage, {data:data});
  }
  
  
  deleteComment(data,id){
	    //console.log(data);
	  this.service.deleteComment(data,id);
	  this.nav.setRoot(ListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

}
