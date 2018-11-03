import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Service } from '../../providers/service';

import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';

import firebase from 'firebase';

declare var google;
declare var map;
declare var infoWindow;

//declare var google;


/**
 * Generated class for the ItemmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itemmap',
  templateUrl: 'itemmap.html',
})
export class ItemmapPage {

	map : any;
	image: any;
	dataInfo: any;
	userList: any;
	distanceRestaurant: any;
	

  constructor(public navCtrl: NavController, public navParams: NavParams,public geo:Geolocation,public platform: Platform,public locationTracker: LocationTrackerProvider, public service : Service) {
	  let that = this;
	  let map : any;
	  let infoWindow : any;
	  let beachMarker: any;
	  let image: any;
	  
	  
	  
	  this.dataInfo = navParams.data.data;
	  
	  let options = {
		  frequency: 3000,
		  enableHighAccuracy: true
		};
	  
	  
	   this.geo.getCurrentPosition(options).then(resp =>{
			/***
			alert("success");
			alert(resp.coords.latitude);
			alert(resp.coords.longitude);


			*/
			
			var uids = firebase.auth().currentUser.uid;

			firebase.database().ref('/users').child(uids).update({
					lat: resp.coords.latitude,
					lng: resp.coords.longitude,
					userTimeStamp: resp.timestamp
				});
					
			
		

		}).catch(() =>{
			console.log("Error to get location");
		});
	  
	  
	  that.platform.ready().then(() => {
		  
		  var options = {
		  timeout: 5000
	  };
		  
		
	  });
	  
	  //this.start();

	  setTimeout(function(){
		  that.googleMap();
	  },2000)


	  
	  
	 
	  
  }
  
  start(){
    this.locationTracker.startTracking();
  }
 
  stop(){
    this.locationTracker.stopTracking();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }
  
  googleMap(){
	  let map : any;
	  let infoWindow : any;
	  let beachMarker: any;
	  let image: any;
	  
	 // let markers : any;
	 
	 
	  
	var uid = firebase.auth().currentUser.uid;
	  
				  console.log("service");
				  console.log(uid);
	  
	 
	  
	  
	  this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
			this.userList = snapshot.val();
			
    });
	  
	  
	  var lats = parseFloat(this.dataInfo.lat);
	  var longs = parseFloat(this.dataInfo.long);
		
		map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: lats, lng: longs},
          zoom: 10
        });


        image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
		var myIcons = new google.maps.MarkerImage("assets/images/icons/" + this.dataInfo.img, null, null, null, new google.maps.Size(30,30));
          beachMarker = new google.maps.Marker({
          position: {lat: lats, lng: longs},
          map: map,
		  icon: myIcons
		  
        });
		
		var posUser = {
              lat: lats,
              lng: longs
            };
			
			
			infoWindow = new google.maps.InfoWindow;
				
					infoWindow.setPosition(posUser);
					infoWindow.setContent('<h2>' + this.dataInfo.title + '</h2>' + this.dataInfo.distance);
					infoWindow.open(map);
					map.setCenter(posUser);
					
					
						 // Additional Markers //
         var markers = [];
		 var distance = [];
        // infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info,keys){
			
			//this.service.getDistanceRestaurant(info.key).on('value',snapshots =>{
					//this.distanceRestaurant = snapshots.val();
					//console.log(this.distanceRestaurant);
					console.log(info);
					  var userLists: any;
		
			firebase.auth().onAuthStateChanged(function(user) {
					  if (user) {
						uid=user.uid;
						console.log(uid);
						console.log(info.key);
					  //this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
						  firebase.database().ref('/cord').child(uid).child(keys).child("item_dis").on('value', snapshot =>{

									
					console.log(snapshot.val());
			
										
						
								
										var myIcon = new google.maps.MarkerImage("assets/images/icons/" + info.img, null, null, null, new google.maps.Size(30,30));
										var marker = new google.maps.Marker({
											position: new google.maps.LatLng(info.lat, info.long),
											map: map,
											animation: google.maps.Animation.DROP,
											title: info.title,
											icon: myIcon,
										});
										marker.content = '<div class="infoWindowContent">' + snapshot.val() + '</div>';
										google.maps.event.addListener(marker, 'click', function(){
											infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
											infoWindow.open(map, marker);
										});
										markers.push(marker);
						
					
					});	
			
		
					}
				});
					
			
			
			//});
        }
		
		
		this.service.getRestaurantsList()
		   .on('value', function (snapshot) {
			
			
			snapshot.forEach(function(childSnapshot) {
					// key will be "fred" the first time and "barney" the second time
				    console.log(childSnapshot.val());
					console.log(childSnapshot.key);
					var key = childSnapshot.key;
					
					var val = childSnapshot.val();
					//var val2 = childSnapshot.val();
					
					//var arr2 = Object.keys(val);
					//var key = arr2[0];
					//console.log(key);
					
					///console.log(childSnapshot.key());
	
								
					createMarker(childSnapshot.val(),childSnapshot.key);
			
		
								
								console.log(childSnapshot.val().lat);
								console.log(childSnapshot.val().long);
								//console.log(childSnapshot.val().title);
						
							 distance.push(calcDistance(childSnapshot.val(),childSnapshot.val().lat,childSnapshot.val().long,childSnapshot.key) + " kilometers away");
							 
							 //createMarker(childSnapshot.val(),distanceOfRestaurant);
						
								
				});
			
			
		
		});
		
		
		function calcDistance(resLocation,destination,destination1,res_id){
			 
			  var userLists: any;
		
			firebase.auth().onAuthStateChanged(function(user) {
					  if (user) {
						uid=user.uid;
						
						
					  //this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
						  firebase.database().ref('/users').child(uid).on('value', snapshot =>{

					var cord = snapshot.val();
					
					console.log(cord.lat);
						console.log(cord.lng);
						
						
						
						
						var p1 = new google.maps.LatLng(destination, destination1);
						
						
						var p2 = new google.maps.LatLng(cord.lat, cord.lng);
					
						console.log("distance is "+google.maps.geometry.spherical.computeDistanceBetween(p1, p2)/1000);

						var distanceBetween= (google.maps.geometry.spherical.computeDistanceBetween(p1, p2))/1000;
						console.log(distanceBetween);
						
						
						
						
						
						firebase.database().ref('/cord').child(uid).child(res_id).update({    // set
						 item_dis : distanceBetween.toFixed(2) + "km away"
					  });
						
						return distanceBetween;
					});	
			
		
					}
				});
				
			
		  }
		  
	
			
		
		/**
        infoWindow = new google.maps.InfoWindow;
		
			infoWindow.setPosition(posUser);
            infoWindow.setContent('Thats your Location.');
            infoWindow.open(map);
            map.setCenter(posUser);
			*/

        // Try HTML5 geolocation.
		/**
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Your Location.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            this.handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          this.handleLocationError(false, infoWindow, map.getCenter());
        }
		*/
  }
  
  
  handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

}
