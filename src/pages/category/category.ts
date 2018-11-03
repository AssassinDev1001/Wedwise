import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Values } from '../../providers/values';
import { Service } from '../../providers/service';
import { TranslateService } from '@ngx-translate/core';
import { ProductsPage } from '../products/products';
import {ProductDetailsPage} from '../product-details/product-details';
import { MapPage } from '../map/map';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
	id: any;
	productsList: any;
	params:any = {};
	distanceRestaurant: any;

  constructor(public nav: NavController, public navParams: NavParams, public service: Service, public values:Values, public translateService: TranslateService ) {
	  this.id = navParams.data.id;
	  
	  
	  this.params.data = {
        "header" : "Following",
        "items" : [ {
          "delate" : "Delete",
          "id" : 1,
          "image" : "assets/images/avatar/17.jpg",
          "ionBadge" : "follow",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
          "title" : "Grant Marshall"
        }, {
          "delate" : "Delete",
          "id" : 2,
          "image" : "assets/images/avatar/18.jpg",
          "ionBadge" : "follow",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
          "title" : "Pena Valdez"
        }, {
          "delate" : "Delete",
          "id" : 3,
          "image" : "assets/images/avatar/19.jpg",
          "ionBadge" : "follow",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
          "title" : "Jessica Miles"
        }, {
          "delate" : "Delete",
          "id" : 4,
          "image" : "assets/images/avatar/20.jpg",
          "ionBadge" : "follow",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
          "title" : "Kerri Barber"
        }, {
          "delate" : "Delete",
          "id" : 5,
          "image" : "assets/images/avatar/21.jpg",
          "ionBadge" : "follow",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
          "title" : "Natasha Gamble"
        }, {
          "delate" : "Delete",
          "id" : 6,
          "image" : "assets/images/avatar/22.jpg",
          "ionBadge" : "follow",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
          "title" : "White Castaneda"
        }, {
          "delate" : "Delete",
          "id" : 7,
          "image" : "assets/images/avatar/23.jpg",
          "ionBadge" : "follow",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
          "title" : "Vanessa Ryan"
        }, {
          "delate" : "Delete",
          "id" : 8,
          "image" : "assets/images/avatar/17.jpg",
          "ionBadge" : "follow",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
          "title" : "Carol Kelly"
        }, {
          "delate" : "Delete",
          "id" : 9,
          "image" : "assets/images/avatar/18.jpg",
          "ionBadge" : "follow",
          "subtitle" : "Lorem ipsum dolor sit amet, consectetur",
          "title" : "Barrera Ramsey"
        } ]
      }
	  
	  this.params.events = {
        'onItemClick': function(item: any) {
            console.log("onItemClick");
        },
        'onDelete': function(item: any) {
            console.log("onDelete");
        },
        'onButtonGetClick': function(item: any) {
            console.log("onButtonGetClick");
        }
    };

	  console.log(navParams.data);
	  console.log(this.id);
	  
	  this.params.data = [];
	  
	  console.log(this.params.data.items);
	  
	  this.service.getNearmeLists(this.id).on('value', snapshot =>{
  		this.productsList = [];
		this.params.data.items = [];
		
		console.log(snapshot);
		

  		snapshot.forEach( snap =>{
			
			this.service.getDistanceRestaurant(snap.key).on('value',snapshots =>{
				this.distanceRestaurant = snapshots.val();
				console.log(this.distanceRestaurant);
			
			
			//console.log(this.distanceRestaurant);
			
						
						this.params.data.items.push({
					  
						id: snap.key,
						category: snap.val().category,
						title: snap.val().title,
						subtitle: snap.val().description,
						distance: this.distanceRestaurant,
						image: snap.val().firebase_url,
						ionBadge: snap.val().title
						});
			
			
			});
			
  		});
		
		console.log(this.params.data.items);
  	});
	  
  }
  
  

  
  public getItems(id){
	  console.log("inside items");
	  console.log(id);
	  this.nav.push(ProductDetailsPage,{id:id});
  }
  
  
   goToMap(){
	  this.nav.push(MapPage);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
