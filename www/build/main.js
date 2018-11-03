webpackJsonp([95],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyorderPage = (function () {
    function MyorderPage(values, nativeStorage, nav, navParams, service, translateService) {
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.params = {};
    }
    MyorderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyorderPage');
    };
    MyorderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-myorder',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/myorder/myorder.html"*/'<!--\n\n  Generated template for the MyorderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  \n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My Order</ion-title>\n\n	\n\n\n\n	\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<!--\n\n<ion-content padding>\n\n-->\n\n\n\n\n\n\n\n<!-----\n\n	<ion-spinner *ngIf="!myOrderList" name="crescent" style="display:block; margin-left: auto; margin-right:auto; margin-top: 5px; margin-bottom:5px" ></ion-spinner>\n\n   <div style="margin: 10px 0 0 0;">\n\n      <ion-list *ngFor="let item of myOrderList">\n\n         <ion-item no-lines *ngFor="let post of item.items" class="items" (click)="getOrderDetails(item.id)" >\n\n         <h4  style="margin-top:0px;border-height: 0px;">Name: {{post.name}}</h4>\n\n         <h4 class="rap" style="border-height: 0px;">Price: {{post.price}}</h4>\n\n         </ion-item>\n\n         <h4  style="margin-top:10px;margin-bottom:0px; font-size:15px; padding-left:16px;border-height: 0px;">Total:{{item.total}}</h4>\n\n         <button ion-button icon-left style="padding-right:0px" no-margin clear (click)="deleteOder(item.id)">\n\n            <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n\n            Delete\n\n         </button>\n\n         <hr style="border-height: 1px;">\n\n      </ion-list>\n\n   </div>\n\n   -->\n\n<!--\n\n</ion-content>\n\n-->\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/myorder/myorder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], MyorderPage);
    return MyorderPage;
}());

//# sourceMappingURL=myorder.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_details_product_details__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(nav, navParams, service, values, translateService) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.values = values;
        this.translateService = translateService;
        this.params = {};
        this.id = navParams.data.id;
        this.params.data = {
            "header": "Following",
            "items": [{
                    "delate": "Delete",
                    "id": 1,
                    "image": "assets/images/avatar/17.jpg",
                    "ionBadge": "follow",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "title": "Grant Marshall"
                }, {
                    "delate": "Delete",
                    "id": 2,
                    "image": "assets/images/avatar/18.jpg",
                    "ionBadge": "follow",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "title": "Pena Valdez"
                }, {
                    "delate": "Delete",
                    "id": 3,
                    "image": "assets/images/avatar/19.jpg",
                    "ionBadge": "follow",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "title": "Jessica Miles"
                }, {
                    "delate": "Delete",
                    "id": 4,
                    "image": "assets/images/avatar/20.jpg",
                    "ionBadge": "follow",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "title": "Kerri Barber"
                }, {
                    "delate": "Delete",
                    "id": 5,
                    "image": "assets/images/avatar/21.jpg",
                    "ionBadge": "follow",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "title": "Natasha Gamble"
                }, {
                    "delate": "Delete",
                    "id": 6,
                    "image": "assets/images/avatar/22.jpg",
                    "ionBadge": "follow",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "title": "White Castaneda"
                }, {
                    "delate": "Delete",
                    "id": 7,
                    "image": "assets/images/avatar/23.jpg",
                    "ionBadge": "follow",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "title": "Vanessa Ryan"
                }, {
                    "delate": "Delete",
                    "id": 8,
                    "image": "assets/images/avatar/17.jpg",
                    "ionBadge": "follow",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "title": "Carol Kelly"
                }, {
                    "delate": "Delete",
                    "id": 9,
                    "image": "assets/images/avatar/18.jpg",
                    "ionBadge": "follow",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                    "title": "Barrera Ramsey"
                }]
        };
        this.params.events = {
            'onItemClick': function (item) {
                console.log("onItemClick");
            },
            'onDelete': function (item) {
                console.log("onDelete");
            },
            'onButtonGetClick': function (item) {
                console.log("onButtonGetClick");
            }
        };
        console.log(navParams.data);
        console.log(this.id);
        this.params.data = [];
        console.log(this.params.data.items);
        this.service.getNearmeLists(this.id).on('value', function (snapshot) {
            _this.productsList = [];
            _this.params.data.items = [];
            console.log(snapshot);
            snapshot.forEach(function (snap) {
                _this.service.getDistanceRestaurant(snap.key).on('value', function (snapshots) {
                    _this.distanceRestaurant = snapshots.val();
                    console.log(_this.distanceRestaurant);
                    //console.log(this.distanceRestaurant);
                    _this.params.data.items.push({
                        id: snap.key,
                        category: snap.val().category,
                        title: snap.val().title,
                        subtitle: snap.val().description,
                        distance: _this.distanceRestaurant,
                        image: snap.val().firebase_url,
                        ionBadge: snap.val().title
                    });
                });
            });
            console.log(_this.params.data.items);
        });
    }
    CategoryPage.prototype.getItems = function (id) {
        console.log("inside items");
        console.log(id);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_details_product_details__["a" /* ProductDetailsPage */], { id: id });
    };
    CategoryPage.prototype.goToMap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__map_map__["a" /* MapPage */]);
    };
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/category/category.html"*/'<!--\n\n  Generated template for the CategoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n\n\n  <ion-navbar>\n\n    <ion-title>Category</ion-title>\n\n	\n\n	<ion-buttons right>\n\n        <button style="background-color:white;" (click)="goToMap()">\n\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n	\n\n  </ion-navbar>\n\n  \n\n	\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<swipe-to-dismiss-layout-2\n\n     [data]="params.data"\n\n     [events]="params.events">\n\n   </swipe-to-dismiss-layout-2>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(nav, params, functions, service, values, payPal, stripe, translateService) {
        this.nav = nav;
        this.params = params;
        this.functions = functions;
        this.service = service;
        this.values = values;
        this.payPal = payPal;
        this.stripe = stripe;
        this.translateService = translateService;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/cart/cart.html"*/'<!--\n\n  Generated template for the CartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  \n\n    <ion-title>My Cart</ion-title>\n\n	\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__["a" /* PayPal */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritecommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the WritecommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WritecommentPage = (function () {
    function WritecommentPage(nav, navParams, service, values, translateService, functions) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.values = values;
        this.translateService = translateService;
        this.functions = functions;
        this.disableSubmit = false;
        this.dataInfo = navParams.data.data;
        console.log(this.dataInfo);
        this.form = {};
        this.service = service;
        __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/users').child(user.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.userProfiles = snapshot.val();
                    }
                });
            }
        });
    }
    WritecommentPage.prototype.addComment = function () {
        var _this = this;
        if (this.validateForm()) {
            ///this.fireAuth = firebase.auth();
            var uidFirebase = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().currentUser.uid;
            __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/users').child(uidFirebase).on('value', function (snapshot) {
                if (snapshot.val()) {
                    _this.userProfiles = snapshot.val();
                }
                _this.service.addComment(_this.form.description, _this.dataInfo, _this.userProfiles.displayName, _this.userProfiles.photoURL);
            });
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__list_list__["a" /* ListPage */]);
        }
    };
    WritecommentPage.prototype.validateForm = function () {
        if (this.form.description == undefined || this.form.description == "") {
            this.errorMessage = "Please Add Description";
            return false;
        }
        return true;
    };
    WritecommentPage.prototype.goToMap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */]);
    };
    WritecommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WritecommentPage');
    };
    WritecommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-writecomment',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/writecomment/writecomment.html"*/'<!--\n\n  Generated template for the WritecommentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n   <ion-navbar color="brown">\n\n  \n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  \n\n    <ion-title>Write Review</ion-title>\n\n	\n\n	\n\n		<ion-buttons right>\n\n        <button style="background-color:white;" (click)="goToMap()">\n\n						<ion-icon name="map"   style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div style="margin:20px 10px 0 10px;">\n\n      <form #f="ngForm">\n\n         <ion-list>\n\n					  <h2 item-title style = "text-align:center;"><b></b></h2>\n\n					  <h4 item-title style = "text-align:center;"><small>A34 New Ashok Nagar new delhi 1120009  india </small></h4>\n\n						\n\n						<ion-avatar item-start>\n\n							  <ion-list style="margin:15px 0 0 0;font-family: Arial ">\n\n							\n\n							 <div  class="profile-image">\n\n								<img src="assets/imgs/user.png" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n\n							 </div>\n\n							 \n\n							  </ion-list>\n\n						  </ion-avatar>\n\n						  \n\n						  <h2 item-title style = "text-align:center;">Ranjeet Sharma</h2>\n\n\n\n						   \n\n						\n\n					<div style="margin:29px;">		 \n\n				  <h2  style="text-align:center;">⭐⭐⭐⭐⭐</h2>\n\n			\n\n            <ion-item style ="margin-top:20px; display: block; margin:auto">\n\n\n\n               <textarea class="example"  style = "height:100px;width:220px;padding-right:10%;padding-left:10%;" type="text" [(ngModel)]="form.description" name="description" placeholder=\'Write Comment Here\'></textarea>\n\n            </ion-item>\n\n			 </div>\n\n         \n\n         </ion-list>\n\n    \n\n      </form>\n\n   \n\n         <button ion-button block color="secondary" [disabled]="disableSubmit" text-uppercase (click)="addComment()">Review</button>\n\n   </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/writecomment/writecomment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */]])
    ], WritecommentPage);
    return WritecommentPage;
}());

//# sourceMappingURL=writecomment.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(actionSheetCtrl, camera, navCtrl, navParams, afDb, afAuth) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDb = afDb;
        this.afAuth = afAuth;
        this.messages = [];
        this.showEmojiPicker = false;
        this.newMessage = '';
        this.editorMsg = '';
        this.storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref('/chatimages/');
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        // this.user =
        // console.log(firebase.auth());
        // console.log(firebase.auth().currentUser.toJSON());
        var _this = this;
        this.restaurant = this.navParams.get("restaurant");
        this.user = this.navParams.get("user");
        // this.afAuth.user.subscribe(res => {
        //     this.user = res.;
        //
        //     if (this.restaurant && this.user) {
        //         this.getCreateChatRoom();
        //     }
        // });
        this.afAuth.user.subscribe(function (res) {
            _this.user = res.toJSON();
            if (_this.user && _this.restaurant) {
                _this.getCreateChatRoom();
            }
        });
    };
    ChatPage.prototype.getCreateChatRoom = function () {
        var _this = this;
        this.chatKey = this.restaurant.owner_id + ":" + this.user.uid;
        console.log("ChatKey", this.chatKey);
        console.log("User", this.user);
        if (this.user.displayName == null) {
            this.user.displayName = "Unknown User";
        }
        var chatCreateData = {
            vendor_id: this.restaurant.owner_id,
            user_id: this.user.uid,
            user_name: this.user.displayName,
            vendor_title: this.restaurant.title,
            hasUnreadMsg: false,
            last_message: ''
        };
        // let chatRooms = this.afDb.object("/chatrooms/" + this.chatKey);
        this.afDb.object("/chatrooms/" + this.chatKey).valueChanges().subscribe(function (value) {
            console.log(value);
            _this.chatRoom = value;
            if (!value || value == null) {
                _this.afDb.object("/chatrooms/" + _this.chatKey).set(chatCreateData).then(function (res) {
                    console.log(res);
                }).catch(function (e) {
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
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref("/chatmessages/" + this.chatKey).orderByChild("timestamp").on("child_added", function (res) {
            _this.messages.push(res.toJSON());
        });
        // this.messageRef = this.afDb.list("/chatmessages/" + this.chatKey);
        //
        // this.messageRef.valueChanges().subscribe(res => {
        //     console.log(res);
        // });
        // console.log(chatRooms);
        // this.afDb.object("/chatrooms/"+this.chatKey).valueChanges()
        // firebase.database().refFromURL("/chatrooms/"+this.chatKey).child("messages").on("v")
    };
    ChatPage.prototype.sendMessage = function (message) {
        var _this = this;
        var timestamp = __WEBPACK_IMPORTED_MODULE_5_moment__().unix();
        var data = {
            "sender_id": this.user.uid,
            "receiver_id": this.restaurant.owner_id,
            "message": message,
            "timestamp": timestamp
        };
        this.afDb.list("/chatmessages/" + this.chatKey).push(data).then(function (res) {
            console.log(res);
            _this.editorMsg = '';
        });
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref("/chatrooms/" + this.chatKey).update({ "hasUnreadMsg": true, "last_message": message, "last_msg_timestamp": timestamp }, function (err) {
            if (err) {
                console.error("err in err => ", err);
            }
            else {
                console.log("no error in err => ", _this);
            }
        });
    };
    ChatPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.focus();
        }
        else {
            this.setTextareaScroll();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    ChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatPage.prototype.focus = function () {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    };
    ChatPage.prototype.setTextareaScroll = function () {
        var textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    };
    ChatPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    ChatPage.prototype.openGallery = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Take a picture',
                    icon: 'camera',
                    handler: function () {
                        _this.takePicturefromCamera();
                    }
                }, {
                    text: 'From gallery',
                    icon: 'images',
                    handler: function () {
                        _this.takePicture();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ChatPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
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
        this.camera.getPicture(options).then(function (imagePath) {
            if (imagePath != '') {
                _this.uploadPhoto(imagePath);
            }
        }).catch(function (err) {
        });
    };
    ChatPage.prototype.takePicturefromCamera = function () {
        var _this = this;
        var options = {
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
        this.camera.getPicture(options).then(function (imagePath) {
            if (imagePath != '') {
                _this.uploadPhoto(imagePath);
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    ChatPage.prototype.uploadPhoto = function (imagePath) {
        var _this = this;
        this.storageRef.child(this.generateUUID() + ".png")
            .putString(imagePath, 'base64', { contentType: 'image/png' })
            .then(function (savedPicture) {
            console.log(savedPicture.downloadURL);
            var timestamp = __WEBPACK_IMPORTED_MODULE_5_moment__().unix();
            var data = {
                "sender_id": _this.user.uid,
                "receiver_id": _this.restaurant.owner_id,
                "message": '',
                "message_type": 'image',
                "firebase_url": savedPicture.downloadURL,
                "image": "/chatimages/" + _this.generateUUID() + ".png",
                "img": _this.generateUUID() + ".png",
                "timestamp": timestamp
            };
            _this.afDb.list("/chatmessages/" + _this.chatKey).push(data).then(function (res) {
                _this.editorMsg = '';
                __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref("/chatrooms/" + _this.chatKey).update({ "hasUnreadMsg": true, "last_message": 'User sent attachment', "last_msg_timestamp": timestamp }, function (err) {
                    if (err) {
                        console.error("err in err => ", err);
                    }
                    else {
                        console.log("no error in err => ", _this);
                    }
                });
            });
        }).catch(function (err) {
            console.log(JSON.stringify(err));
        });
    };
    ChatPage.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ChatPage.prototype, "messageInput", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/chat/chat.html"*/'<!--\n\n  Generated template for the ChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar >\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img style="padding: 0px;border-radius: 50%;width:50px;" src="assets/imgs/user.png">\n\n\n\n\n\n                </ion-col>\n\n\n\n                <ion-col col-7>\n\n                    <p style="margin: 0px;\n\n    padding-top: 5px;\n\n    margin-left: 0px;\n\n    font-size: 16px;" *ngIf="chatRoom">{{chatRoom.vendor_title}}</p>\n\n                </ion-col>\n\n\n\n            </ion-row>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <!--<ion-list *ngIf="messages.length>0">-->\n\n    <!--<ion-item *ngFor="let message of messages">-->\n\n    <!--{{message.message}}-->\n\n    <!--</ion-item>-->\n\n    <!--</ion-list>-->\n\n    <div class="message-wrap">\n\n\n\n        <div *ngFor="let msg of messages"\n\n             class="message"\n\n             [class.left]=" msg.sender_id !== user.uid"\n\n             [class.right]=" msg.sender_id === user.uid ">\n\n            <!--<img class="user-img" [src]="msg.userAvatar" alt="" src="">-->\n\n            <!--<ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>-->\n\n            <div class="msg-detail">\n\n                <div class="msg-info">\n\n                    <p>\n\n                        <!--{{msg.userName}}&nbsp;&nbsp;&nbsp;{{msg.time | relativeTime}}</p>-->\n\n                        {{msg.timestamp*1000 | date :\'short\'}}\n\n                </div>\n\n                <div class="msg-content">\n\n                    <span class="triangle"></span>\n\n                    <p class="line-breaker " *ngIf="!msg.message_type || msg.message_type == \'text\'">{{msg.message}}</p>\n\n                    <img style="height:250px;width:250px;" src="{{msg.firebase_url}}" *ngIf="msg.message_type == \'image\'" >\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n<!--<ion-footer>-->\n\n\n\n<!--<ion-toolbar>-->\n\n<!--<div>-->\n\n<!--<ion-textarea [(ngModel)]="newMessage" placeholder="Type a message"-->\n\n<!--style="color:#262626;padding:5px;padding-right:20%;padding-left: 60px;height: 50px"></ion-textarea>-->\n\n<!--<div ion-button-->\n\n<!--style="left:1%;position:absolute;  padding:8px;top: 30%;border-radius: 50%;bottom: 15%; margin: 0;width:25px;height: 25px;font-size:10px"-->\n\n<!--(click)="toggleGiphy()">-->\n\n<!--Gif-->\n\n<!--</div>-->\n\n<!--&lt;!&ndash;-->\n\n<!--<button ion-button style="left:10%;position:absolute;  padding:8px;top: 30%;border-radius: 50%;bottom: 15%; margin: 0;width:25px;height: 25px;font-size:15px" (click)="toggled = !toggled" [(emojiPickerIf)]="toggled" [emojiPickerDirection]="\'bottom\'"-->\n\n<!--(emojiPickerSelect)="handleSelection($event)"><ion-icon name="happy"> </ion-icon></button>-->\n\n<!--&ndash;&gt;-->\n\n<!--</div>-->\n\n\n\n\n\n<!--<button ion-button [disabled]="showSelectedblock==false"-->\n\n<!--(click)="sendMessage(newMessage,1); newMessage = \'\' && audio == false"-->\n\n<!--style="position:absolute; right: 3%; padding:8px;top: 13px;border-radius: 50%;bottom: 15%; margin: 0;width:35px;height:35px">-->\n\n<!--<ion-icon name="md-send"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n\n\n<!--&lt;!&ndash;<button id="audio_btn" ion-button *ngIf="newMessage == \'\' && audio == false"  (touchend)="onRelease()" (pan)="panEvent($event)" (swipe)="onSwipeLeft()" style="">&ndash;&gt;-->\n\n<!--&lt;!&ndash;<ion-icon name="md-mic"></ion-icon>&ndash;&gt;-->\n\n<!--&lt;!&ndash;</button>&ndash;&gt;-->\n\n\n\n\n\n<!--&lt;!&ndash;-->\n\n<!--<button id="audio_btn" ion-button *ngIf="newMessage == \'\' && audio == false" (click)="blockUser(this.recipient.id,this.isblock=true)" style="position: absolute;right: 26%;padding: 8px;top: 22%;border-radius: 50%;bottom: 15%;margin: 0;width: 35px; height: 35px;">-->\n\n<!--<ion-icon name="md-mic"></ion-icon>-->\n\n\n\n\n\n<!--</button>-->\n\n\n\n\n\n<!--<button id="audio_btn" ion-button *ngIf="newMessage == \'\' && audio == false" (click)="unBlock(this.recipient.id,this.isblock=false)" style="position: absolute;right: 29%;padding: 8px;top: 22%;border-radius: 50%;bottom: 15%;margin: 0;width: 35px; height: 35px;">-->\n\n<!--<ion-icon name="md-mic"></ion-icon>-->\n\n<!--</button>-->\n\n\n\n<!--&ndash;&gt;-->\n\n\n\n<!--&lt;!&ndash;0-->\n\n<!--<button ion-button  (click)="sendAudio(filePath)"  style="position:absolute; right: 30%; padding:8px;top: 13px;border-radius: 50%;bottom: 15%; margin: 0;width:35px;height:35px">-->\n\n<!--<ion-icon name="md-send"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n<!--&ndash;&gt;-->\n\n<!--&lt;!&ndash;-->\n\n<!--<button id="audio_btn" ion-button *ngIf="newMessage == \'\' && audio == false"  (touchend)="onRelease()" (pan)="panEvent($event)" (swipe)="onSwipeLeft()" style="">-->\n\n<!--<ion-icon name="md-mic"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n<!--<button id="audio_btn" ion-button *ngIf="newMessage == \'\' && audio == false"  (pan)="panEvent($event)" (touchend)="onRelease()" (press) = "onPressed($event)" (release)="onRelease()"-->\n\n<!--(swipe)="onSwipeLeft()" style="right:3px">-->\n\n<!--<ion-icon name="md-mic"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n\n\n<!--<button id="audio_btn" ion-button *ngIf="newMessage == \'\' && audio == false"-->\n\n<!--(touchend)="onRelease()" (pan)="panEvent($event)">-->\n\n<!--<ion-icon name="md-mic"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n<!--<button ion-button *ngIf="newMessage == \'\' && audio == true" (click)="sendAudio()" (touchend)="onRelease()" (swipe)="onSwipeLeft()"-->\n\n<!--style="position:absolute; right: 3%; padding:8px;top: 13%;border-radius: 50%;bottom: 15%; margin: 0;width:35px;height:35px">-->\n\n<!--<ion-icon name="md-mic-off"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n<!--<button ion-button *ngIf="newMessage == \'\' && audio == true"-->\n\n\n\n<!--style="position:absolute; right: 3px; padding:8px;top: 13%;border-radius: 50%;bottom: 15%; margin: 0;width:60px;height:60px">-->\n\n<!--<ion-icon name="md-mic-off"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n\n\n<!--&ndash;&gt;-->\n\n\n\n<!--&lt;!&ndash;-->\n\n<!--<button ion-button  (click)="sendAudio(filePath)"  style="position:absolute; right: 18%; padding:8px;top: 13px;border-radius: 50%;bottom: 15%; margin: 0;width:35px;height:35px">-->\n\n<!--<ion-icon name="md-send"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n<!--&ndash;&gt;-->\n\n<!--&lt;!&ndash;-->\n\n<!--<button id="audio_btn" ion-button *ngIf="newMessage == \'\' && audio == false"   (press)="calll()"   style="position: absolute;right: 15%;padding: 8px;top: 22%;border-radius: 50%;bottom: 15%;margin: 0;width: 35px; height: 35px;">-->\n\n<!--<ion-icon name="md-mic"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n<!--&ndash;&gt;-->\n\n<!--&lt;!&ndash;-->\n\n<!--<button id="audio_btn" ion-button *ngIf="newMessage == \'\' && audio == false"  (pan)="panEvent($event)" (touchend)="onRelease()" (press) = "onPressed($event)" (release)="onRelease()"-->\n\n<!--(swipe)="onSwipeLeft()" style="right:3px">-->\n\n<!--<ion-icon name="md-mic"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n\n\n\n\n<!--<button id="audio_btn" ion-button *ngIf="newMessage == \'\' && audio == false"-->\n\n<!--(touchend)="onRelease()" (pan)="panEvent($event)">-->\n\n<!--<ion-icon name="md-mic"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n<!--&ndash;&gt;-->\n\n<!--&lt;!&ndash;-->\n\n<!--<button ion-button *ngIf="newMessage == \'\' && audio == true" (click)="sendAudio()" (touchend)="onRelease()" (swipe)="onSwipeLeft()"-->\n\n<!--style="position:absolute; right: 3%; padding:8px;top: 13%;border-radius: 50%;bottom: 15%; margin: 0;width:35px;height:35px">-->\n\n<!--<ion-icon name="md-mic-off"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n<!--<button ion-button *ngIf="newMessage == \'\' && audio == true"-->\n\n\n\n<!--style="position:absolute; right: 3px; padding:8px;top: 13%;border-radius: 50%;bottom: 15%; margin: 0;width:60px;height:60px">-->\n\n<!--<ion-icon name="md-mic-off"></ion-icon>-->\n\n\n\n<!--</button>-->\n\n<!--&ndash;&gt;-->\n\n<!--</ion-toolbar>-->\n\n\n\n<!--</ion-footer>-->\n\n\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n    <div class="input-wrap">\n\n        <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n\n            <ion-icon name="md-happy"></ion-icon>\n\n        </button>\n\n        <button ion-button clear icon-only item-right (click)="openGallery()">\n\n          <ion-icon name="attach"></ion-icon>\n\n      </button>\n\n        <textarea #chat_input\n\n                  placeholder="Text Input"\n\n                  name="editorMsg"\n\n                  [(ngModel)]="editorMsg"\n\n                  (keyup.enter)="sendMessage(editorMsg)"\n\n                  (focusin)="onFocus()">\n\n    </textarea>\n\n        <button ion-button clear icon-only item-right (click)="sendMessage(editorMsg)">\n\n            <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n        </button>\n\n    </div>\n\n    <emoji-picker [(ngModel)]="editorMsg"></emoji-picker>\n\n</ion-footer>'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = (function () {
    function GlobalProvider(http) {
        this.http = http;
        this.shoimg = false;
        this.showicon = false;
        console.log('Hello GlobalProvider Provider');
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_vendor_chat_vendor__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ChattingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChattingPage = (function () {
    function ChattingPage(nav, navParams, afDb, nativeStorage) {
        this.nav = nav;
        this.navParams = navParams;
        this.afDb = afDb;
        this.nativeStorage = nativeStorage;
        this.chatRooms = [];
        this.fromList = this.navParams.get('fromList');
    }
    ChattingPage.prototype.afterViewLoad = function (data) {
        var _this = this;
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
        var obs = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"];
        // firebase.database().ref("/chatrooms").on("child_added", e => {
        //
        // });
        // let test = firebase.database().ref("/chatrooms").on("child_added");
        // console.log(test);
        // obs.bindCallback(firebase.database().ref("/chatrooms").on("child_added", e => {
        //     console.log(e);
        // }));
        this.afDb.object("/chatrooms").valueChanges().subscribe(function (value) {
            console.log("snap rooms => ", value);
            _this.chatRooms = [];
            for (var key in value) {
                var singleRoom = value[key];
                if (singleRoom.vendor_id == _this.user.uid) {
                    _this.chatRooms.push(singleRoom);
                }
            }
        });
        // firebase.database().ref("/chatrooms").on("child_added", (item: any) => {
        //     console.log(item.val());
        //     if (item.val().vendor_id == this.user.uid) {
        //         console.log(this.chatRooms);
        //     }
        // });
    };
    ChattingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth();
        console.log('ionViewDidLoad ChattingPage');
        this.nativeStorage.getItem('userProfile')
            .then(function (data) { return _this.afterViewLoad(data); }, function (error) { return console.error(error); });
    };
    ChattingPage.prototype.openChat = function (data) {
        console.log(data);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__chat_vendor_chat_vendor__["a" /* ChatVendorPage */], { restaurant: data });
    };
    ChattingPage.prototype.ChattingBack = function () {
        console.log("Test");
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__list_list__["a" /* ListPage */], { user: this.userProfile });
    };
    ChattingPage.prototype.logOut = function () {
        this.fireAuth.signOut();
        console.log('logged out');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/chatting/chatting.html"*/'<!--\n\n  Generated template for the ChattingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <!-- <button ion-button style="background-color: transparent;">\n\n            <ion-icon (click)="ChattingBack()" name="arrow-round-back"></ion-icon>\n\n        </button> -->\n\n        <button ion-button menuToggle *ngIf=\'!fromList\'>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-buttons right>\n\n            <button style="background-color:transparent;" (click)="logOut()">\n\n                <ion-icon name="log-out" color="primary" style="position:relative; font-size:18px; color: #fff;">\n\n                    <span>Logout</span>\n\n                </ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="chatt">\n\n    <ion-list *ngIf="chatRooms.length >0">\n\n        <ion-item *ngFor="let room of chatRooms" (click)="openChat(room)" [class.hasUnreadMsg]="room.hasUnreadMsg">\n\n            <ion-avatar item-start>\n\n                <img src="assets/images/background/2.jpg" >\n\n            </ion-avatar>\n\n            <h2>{{room.user_name}}</h2>\n\n            <p>{{room.last_message}}</p>\n\n            <h1>{{room.last_msg_timestamp*1000 | date :\'short\'}}</h1>\n\n        </ion-item>\n\n    </ion-list>\n\n    <!--<ion-list>-->\n\n    <!--<ion-item>-->\n\n    <!--<ion-avatar item-start>-->\n\n    <!--<img src="assets/images/background/2.jpg">-->\n\n    <!--</ion-avatar>-->\n\n    <!--<h2>Venue Test</h2>-->\n\n    <!--<h3>Urban Bridge</h3>-->\n\n    <!--<p>I\'ve had a pretty messed up day.</p>-->\n\n    <!--<h1> 12.09 AM</h1>-->\n\n\n\n    <!--</ion-item>-->\n\n    <!--</ion-list>-->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/chatting/chatting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_details_product_details__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WishlistPage = (function () {
    function WishlistPage(values, nativeStorage, nav, navParams, service, translateService) {
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.params = {};
        this.categoryList = [];
        this.firebasedata = [];
        this.restaurants = [];
        console.log('data');
        this.params.data = {
            "items": [{
                    "delate": "Delete",
                    "id": 1,
                    "image": "assets/images/background/4.jpg",
                    "subtitle": "Monday, 15th Oct. 2017",
                    "title": "Free Ride"
                }, {
                    "delate": "Delete",
                    "id": 2,
                    "image": "assets/images/background/0.jpg",
                    "subtitle": "Thursday, 20th Feb. 2017",
                    "title": "Main Stage Event"
                }, {
                    "delate": "Delete",
                    "id": 3,
                    "image": "assets/images/background/3.jpg",
                    "subtitle": "Friday, 10th Aug. 2017",
                    "title": "Mountain Tour"
                }, {
                    "delate": "Delete",
                    "id": 4,
                    "image": "assets/images/background/5.jpg",
                    "subtitle": "Wednesday, 17th May 2016",
                    "title": "Sea Tour"
                }, {
                    "delate": "Delete",
                    "id": 5,
                    "image": "assets/images/background/6.jpg",
                    "subtitle": "Sunday, 11th June 2017",
                    "title": "Open Air Concert"
                }, {
                    "delate": "Delete",
                    "id": 6,
                    "image": "assets/images/background/1.jpg",
                    "subtitle": "Friday, 10th Jan. 2017",
                    "title": "Bridge Tour"
                }]
        };
        this.params.events = {
            'onItemClick': function (item) {
                console.log("onItemClick");
            },
            'onDelete': function (item) {
                console.log("onDelete");
            },
            'onButtonGetClick': function (item) {
                console.log("onButtonGetClick");
            }
        };
    }
    WishlistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.service.getUserFavouriteList().on('value', function (snapshot) {
            console.log(snapshot.val());
            _this.params.data.items = [];
            snapshot.forEach(function (snap) {
                _this.params.data.items.push({
                    id: snap.key,
                    title: snap.val().title,
                    subtitle: snap.val().description,
                    image: snap.val().image,
                    delate: "Delete",
                    ionBadge: snap.val().phonenumber
                });
            });
            console.log(_this.params.data.items);
        });
        console.log('ionViewDidLoad WishlistPage');
    };
    WishlistPage.prototype.removeFavItem = function (item) {
        this.service.removeFavItem(item);
    };
    WishlistPage.prototype.goToItem = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_details_product_details__["a" /* ProductDetailsPage */], { id: item.id });
        ;
    };
    WishlistPage.prototype.goToMap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__map_map__["a" /* MapPage */]);
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wishlist',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/wishlist/wishlist.html"*/'<!--\n\n  Generated template for the WishlistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  \n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Wish List</ion-title>\n\n	\n\n<ion-buttons right>\n\n        <button style="background-color:white;" (click)="goToMap()">\n\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n	\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<swipe-to-dismiss-layout-3\n\n     [data]="params.data"\n\n     [events]="params.events">\n\n   </swipe-to-dismiss-layout-3>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/wishlist/wishlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Config provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Config = (function () {
    function Config() {
        this.url = 'http://localhost:8080/wp-content'; // Add your wordpress blog url here. you have to install json-api plugin
        //this.url = '/api';
    }
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_geolocation__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocationTrackerProvider = (function () {
    function LocationTrackerProvider(zone, http, backgroundGeolocation, geolocation, service) {
        this.zone = zone;
        this.http = http;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.service = service;
        this.lat = 0;
        this.lng = 0;
    }
    LocationTrackerProvider.prototype.startTracking = function () {
        var _this = this;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: true,
            interval: 2000
        };
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            // Update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            });
            var uid = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.uid;
            console.log("service");
            console.log(uid);
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/users').child(uid).update({
                latFirst: location.latitude,
                lngFirst: location.longitude,
                userTimeStampFirst: location.timestamp
            });
        }, function (err) {
            console.log(err);
        });
        this.backgroundGeolocation.start();
        // Background tracking
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            _this.zone.run(function () {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
            var uid = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.uid;
            console.log("service");
            console.log(uid);
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/users').child(uid).update({
                latSec: position.coords.latitude,
                lngSec: position.coords.longitude
            });
        });
    };
    LocationTrackerProvider.prototype.startTracking2 = function () {
        // Background Tracking
        var _this = this;
        var map;
        var infoWindow;
        var beachMarker;
        var image;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: true,
            interval: 2000
        };
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            });
        }, function (err) {
            console.log(err);
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            var uid = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().currentUser.uid;
            console.log("service");
            console.log(uid);
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/users').child(uid).update({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                userTimeStamp: position.timestamp
            });
            //var uid = firebase.auth().currentUser.uid;
            //console.log("service");
            //console.log(uid);
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/users').child(uid).on('value', function (snapshot) {
                _this.userList = snapshot.val();
            });
            //===========================================================================================	
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: _this.userList.lat, lng: _this.userList.lng },
                zoom: 6
            });
            image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
            beachMarker = new google.maps.Marker({
                position: { lat: _this.userList.lat, lng: _this.userList.lng },
                map: map,
                icon: image
            });
            var posUser = {
                lat: _this.userList.lat,
                lng: _this.userList.lng
            };
            infoWindow = new google.maps.InfoWindow;
            infoWindow.setPosition(posUser);
            infoWindow.setContent('Thats2 your Location.');
            infoWindow.open(map);
            map.setCenter(posUser);
            // Additional Markers //
            var markers = [];
            var distance = [];
            // infoWindow = new google.maps.InfoWindow();
            var createMarker = function (info) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(info.lat, info.long),
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: info.title
                });
                marker.content = '<div class="infoWindowContent">' + info.info + '</div>';
                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                    infoWindow.open(map, marker);
                });
                markers.push(marker);
            };
            _this.service.getRestaurantsList()
                .on('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
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
                    createMarker(childSnapshot.val());
                    console.log(childSnapshot.val().lat);
                    console.log(childSnapshot.val().long);
                    //console.log(childSnapshot.val().title);
                    distance.push(calcDistance(childSnapshot.val().lat, childSnapshot.val().long, childSnapshot.key) + " kilometers away");
                });
            });
            function calcDistance(destination, destination1, res_id) {
                var userLists;
                __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        uid = user.uid;
                        //this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
                        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/users').child(uid).on('value', function (snapshot) {
                            var cord = snapshot.val();
                            console.log(cord.lat);
                            console.log(cord.lng);
                            var p1 = new google.maps.LatLng(destination, destination1);
                            var p2 = new google.maps.LatLng(cord.lat, cord.lat);
                            console.log("distance is " + google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000);
                            var distanceBetween = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2)) / 1000;
                            console.log(distanceBetween);
                            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/cord').child(uid).child(res_id).update({
                                item_dis: distanceBetween.toFixed(2) + "km away"
                            });
                            return distanceBetween;
                        });
                    }
                });
            }
            //===========================================================================================
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.timestamp = position.timestamp;
            });
        });
    };
    LocationTrackerProvider.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    LocationTrackerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_5__service__["a" /* Service */]])
    ], LocationTrackerProvider);
    return LocationTrackerProvider;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Values = (function () {
    function Values(translateService) {
        this.translateService = translateService;
        this.avatar = "assets/images/person.png";
        this.listview = true;
        this.count = 0;
        this.currency = "USD";
        this.role = "CUSTOMER";
        this.cart = [];
        this.qty = null;
        this.isLoggedIn = false;
        this.userRole = "";
    }
    Values.prototype.changeRoll = function (role) {
        if (role == "Vendor") {
            this.role = "Vendor";
        }
        else if (role == "Customer") {
            this.role = "Customer";
        }
        else if (role == "Admin") {
            this.role = "Admin";
        }
        console.log();
    };
    Values.prototype.changecurrency = function (curr) {
        if (curr == "USD") {
            this.currency = "USD";
        }
        else if (curr == "INR") {
            this.currency = "INR";
        }
        else if (curr == "EUR") {
            this.currency = "EUR";
        }
        else if (curr == "KWD") {
            this.currency = "KWD";
        }
    };
    Values.prototype.changeLanguage = function (event) {
        if (event == 'arabic') {
            this.translateService.use('arabic');
            console.log(event);
        }
        else if (event == 'english') {
            this.translateService.use('english');
            console.log(event);
        }
        else if (event == 'russian') {
            this.translateService.use('russian');
            console.log(event);
        }
        else if (event == 'french') {
            this.translateService.use('french');
            console.log(event);
        }
        else if (event == 'hindi') {
            this.translateService.use('hindi');
            console.log(event);
        }
        else if (event == 'chinese') {
            this.translateService.use('chinese');
            console.log(event);
        }
    };
    Values = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], Values);
    return Values;
}());

//# sourceMappingURL=values.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Service = (function () {
    function Service(http, config) {
        this.http = http;
        this.config = config;
        this.product_id = [];
        this.total = 0;
        this.proqty = [];
        this.url = this.config.url;
        this.cart = { "line_items": [], };
        this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        this.setting = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/Setting');
        this.bannerList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/Banners');
        //this.orderList = firebase.database().ref('/Order-List'); 
        this.orderList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/orders');
        this.brandList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/Brand-List');
        this.vendorList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/Vendor-List');
        this.addProduct = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/product-List');
        this.addCategory = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/Category_List');
        this.customerList = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/Customer-List');
        this.customerRole = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/Customer-Role');
        this.restaurants = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/restaurants');
        this.restaurantCategory = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/category');
        this.items = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/items');
        this.restaurantUserInfo = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/users');
        this.ownerrestaurantUserInfo = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/restaurants');
        this.cord = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/cord');
    }
    // Customer and Admin App 
    //
    Service.prototype.getDistanceRestaurant = function (id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        return this.cord.child(uid).child(id).child("item_dis");
    };
    Service.prototype.removeFavItem = function (item) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log(item.id);
        this.restaurantUserInfo.child(uid).child("favorites").child(item.id).remove();
    };
    Service.prototype.getUserFavouriteList = function () {
        //console.log(id);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.favoriteItemList = this.restaurantUserInfo.child(uid).child("favorites");
        return this.favoriteItemList;
    };
    Service.prototype.getFavoriteItem = function (id) {
        console.log(id);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.favoriteItem = this.restaurantUserInfo.child(uid).child("favorites").child(id);
        return this.favoriteItem;
    };
    Service.prototype.removeFavourite = function (id) {
        console.log(id);
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        this.restaurantUserInfo.child(uid).child("favorites").child(id).remove();
    };
    Service.prototype.getItems = function (id) {
        console.log(this.items);
        this.restaurantItems = this.items.orderByChild("categories").equalTo(id);
        return this.restaurantItems;
    };
    Service.prototype.getRestaurantsList = function () {
        console.log(this.restaurants);
        return this.restaurants;
    };
    Service.prototype.getCategoriesList = function () {
        console.log(this.restaurantCategory);
        return this.restaurantCategory;
    };
    Service.prototype.getCord = function () {
        console.log(this.restaurants);
        return this.cord;
    };
    Service.prototype.getRestaurantCategoryLists = function (id) {
        console.log(id);
        this.category = this.restaurantCategory.orderByChild("res_name").equalTo(id);
        return this.category;
    };
    Service.prototype.getNearmeLists = function (id) {
        console.log(id);
        this.buildings = this.restaurants.orderByChild("category").equalTo(id);
        return this.buildings;
    };
    Service.prototype.getItemLists = function (id) {
        console.log(id);
        this.restaurantItems = this.items.orderByChild("categories").equalTo(id);
        return this.restaurantItems;
    };
    Service.prototype.getBanners = function () {
        return this.bannerList;
    };
    Service.prototype.getCategoryList = function () {
        return this.addCategory;
    };
    Service.prototype.getRestaurantItemList = function (id) {
        this.productsList = this.addProduct.orderByChild("category").equalTo(id.id);
        return this.productsList;
    };
    Service.prototype.getItemDetail = function (id) {
        console.log(id);
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/items').child(id));
        console.log(this.items);
        return this.items.child(id);
    };
    Service.prototype.getBuildingsDetail = function (id) {
        console.log(id);
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/restaurants').child(id));
        console.log(this.restaurants);
        return this.restaurants.child(id);
    };
    Service.prototype.address = function (address, id, phone) {
        var postsRef = this.customerList.child(id);
        postsRef.update({
            address: address,
            phone: phone
        });
    };
    Service.prototype.getProductDetail = function (id) {
        return this.addProduct.child(id);
    };
    Service.prototype.delOrder = function (id) {
        return this.orderList.child(id).remove();
    };
    Service.prototype.getOrderDetail = function (id) {
        return this.orderList.child(id);
    };
    Service.prototype.getRestaurantUserProfile = function (id) {
        return this.restaurantUserInfo.child(id);
    };
    Service.prototype.getUserProfile = function (id) {
        return this.restaurantUserInfo.child(id);
    };
    Service.prototype.getUserProfiles = function (id) {
        return this.ownerrestaurantUserInfo.child(id);
    };
    Service.prototype.addOrders = function (order, total, uid, payments, userProfiles) {
        var _this = this;
        return this.orderList.push({
            email: uid,
            items: order,
            total: total,
            payments: payments,
            customerDetails: userProfiles,
            status: "Queued",
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        }).then(function (newOrder) {
            _this.orderList.child(newOrder.key).child('id').set(newOrder.key);
        });
    };
    Service.prototype.addToFavorite = function (data, id) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        console.log("service");
        console.log(uid);
        console.log(data);
        this.restaurantUserInfo.child(uid).child("favorites").child(id).set({
            product_id: id,
            image: data.firebase_url,
            address: data.address,
            category: data.category,
            description: data.description,
            images: data.images,
            img: data.img,
            info: data.info,
            lat: data.lat,
            long: data.long,
            mark: data.mark,
            option: data.option,
            outlet: data.outlet,
            phonenumber: data.phonenumber,
            title: data.title,
            market: true
        });
    };
    Service.prototype.addComment = function (comment, data, names, photo) {
        var uid = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid;
        //var name = this.restaurantUserInfo.child(uid).child('displayName');
        this.restaurants.child(data.id).child("comments").push({
            comment: comment,
            photo_url: photo,
            product_id: data.id,
            user_id: uid,
            user_name: names
        });
    };
    Service.prototype.deleteComment = function (data, id) {
        //var uid = firebase.auth().currentUser.uid;
        //var name = this.restaurantUserInfo.child(uid).child('displayName');
        return this.restaurants.child(data.id).child("comments").child(id).remove();
    };
    Service.prototype.chargeStripe = function (token, currency, amount, secret_kay) {
        var _this = this;
        this.getSecKey = secret_kay;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Bearer ' + secret_kay);
        params.append("currency", currency);
        params.append("amount", amount);
        params.append("description", "description");
        params.append("source", token);
        return new Promise(function (resolve) {
            _this.http.post('https://api.stripe.com/v1/charges', params, { headers: headers }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getSetting = function () {
        return this.setting;
    };
    Service.prototype.getMyOrderList = function (id) {
        console.log(id);
        this.orderLists = this.orderList.orderByChild("email").equalTo(id); //.orderByChild("timeStamp");
        return this.orderLists;
    };
    Service.prototype.getRole = function (id) {
        return this.customerRole.orderByChild("uid").equalTo(id);
    };
    // End of Customer and Admin Functions
    // Admin Only Functions. Delete from here for customer only App
    Service.prototype.addBanner = function (banners) {
        return this.bannerList.set({
            banners1: banners[0],
            banners2: banners[1],
            banners3: banners[2]
        });
    };
    Service.prototype.addSettting = function (form) {
        return this.setting.set({
            cod: form.cod,
            stripe: form.stripe,
            paypal: form.paypal,
            currency: form.currency,
            client_id: form.client_id,
            environment_sandbox: form.environment_sandbox,
            publish_key: form.publish_key,
            secret_kay: form.secret_kay
        });
    };
    Service.prototype.addBrands = function (name, description) {
        var _this = this;
        return this.brandList.push({
            name: name,
            description: description,
        }).then(function (newBrand) {
            _this.brandList.child(newBrand.key).child('id').set(newBrand.key);
        });
    };
    Service.prototype.addVendors = function (name, description) {
        var _this = this;
        return this.vendorList.push({
            name: name,
            description: description,
        }).then(function (newVendor) {
            _this.vendorList.child(newVendor.key).child('id').set(newVendor.key);
        });
    };
    Service.prototype.addPro = function (name, short_description, description, regular_price, sale_price, in_stock, downloadURL, category, vendor, brand) {
        var _this = this;
        return this.addProduct.push({
            category: category,
            name: name,
            short_description: short_description,
            description: description,
            regular_price: regular_price,
            sale_price: sale_price,
            downloadURL: downloadURL,
            in_stock: in_stock,
            brand: brand,
            vendor: vendor,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        }).then(function (newProduct) {
            _this.addProduct.child(newProduct.key).child('id').set(newProduct.key);
        });
    };
    Service.prototype.addCat = function (name, description, downloadURL) {
        var _this = this;
        return this.addCategory.push({
            name: name,
            description: description,
            downloadURL: downloadURL
        }).then(function (newCategory) {
            _this.addCategory.child(newCategory.key).child('id').set(newCategory.key);
        });
    };
    Service.prototype.editCategory = function (name, description, id, downloadURL) {
        return this.addCategory.child(id).update({
            name: name,
            description: description,
            downloadURL: downloadURL
        });
    };
    Service.prototype.editBrand = function (name, description, id) {
        return this.brandList.child(id).update({
            name: name,
            description: description
        });
    };
    Service.prototype.editVendor = function (name, description, id) {
        return this.vendorList.child(id).update({
            name: name,
            description: description
        });
    };
    Service.prototype.editCustomers = function (displayName, phone, address, role, id) {
        return this.customerList.child(id).update({
            displayName: displayName,
            phone: phone,
            address: address,
        }),
            this.customerRole.child(id).set({
                role: role
            });
    };
    Service.prototype.getCustomerRole = function () {
        return this.customerRole;
    };
    Service.prototype.saveRestaurantCustomers = function (displayName, phone, address, id) {
        return this.restaurantUserInfo.child(id).update({
            displayName: displayName,
            phone: phone,
            address: address,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.saveCustomers = function (displayName, phone, address, id) {
        return this.customerList.child(id).update({
            displayName: displayName,
            phone: phone,
            address: address,
            timeStamp: __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP,
            reverseOrder: 0 - Date.now()
        });
    };
    Service.prototype.editPro = function (name, short_description, description, regular_price, sale_price, in_stock, downloadURL, brand, vendor, category, id) {
        return this.addProduct.child(id).update({
            name: name,
            short_description: short_description,
            description: description,
            regular_price: regular_price,
            sale_price: sale_price,
            in_stock: in_stock,
            downloadURL: downloadURL,
            brand: brand,
            vendor: vendor,
            category: category
        });
    };
    Service.prototype.getProductList = function () {
        return this.addProduct;
    };
    Service.prototype.getBrandList = function () {
        return this.brandList;
    };
    Service.prototype.getVendorList = function () {
        return this.vendorList;
    };
    Service.prototype.getCustomerList = function () {
        return this.customerList;
    };
    Service.prototype.delVendor = function (id) {
        return this.vendorList.child(id).remove();
    };
    Service.prototype.delBrand = function (id) {
        return this.brandList.child(id).remove();
    };
    Service.prototype.delCat = function (id) {
        return this.addCategory.child(id).remove();
    };
    Service.prototype.delPro = function (id) {
        return this.addProduct.child(id).remove();
    };
    Service.prototype.deleteCustomers = function (id) {
        return this.customerList.child(id).remove();
    };
    Service.prototype.getOrderList = function () {
        return this.orderList.orderByChild("reverseOrder");
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsPage = (function () {
    function ProductsPage(nav, navParams, service, values, translateService) {
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.values = values;
        this.translateService = translateService;
        this.params = {};
    }
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/products/products.html"*/'<!--\n\n  Generated template for the ProductsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n\n\n  <ion-navbar>\n\n    <ion-title>products</ion-title>\n\n	\n\n\n\n\n\n  </ion-navbar>\n\n  \n\n\n\n\n\n</ion-header>\n\n\n\n\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/products/products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_values__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailsPage = (function () {
    function OrderDetailsPage(navCtrl, params, values, service) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.values = values;
        this.service = service;
    }
    OrderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailsPage');
    };
    OrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-order-details',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/order-details/order-details.html"*/'<!--\n\n  Generated template for the OrderDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n \n\n	<ion-navbar>\n\n   <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    \n\n    <ion-title>Order Details</ion-title>\n\n	\n\n\n\n	\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="order-info">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/order-details/order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//declare var google;
/**
 * Generated class for the ItemmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemmapPage = (function () {
    function ItemmapPage(navCtrl, navParams, geo, platform, locationTracker, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.platform = platform;
        this.locationTracker = locationTracker;
        this.service = service;
        var that = this;
        var map;
        var infoWindow;
        var beachMarker;
        var image;
        this.dataInfo = navParams.data.data;
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.geo.getCurrentPosition(options).then(function (resp) {
            /***
            alert("success");
            alert(resp.coords.latitude);
            alert(resp.coords.longitude);


            */
            var uids = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid;
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/users').child(uids).update({
                lat: resp.coords.latitude,
                lng: resp.coords.longitude,
                userTimeStamp: resp.timestamp
            });
        }).catch(function () {
            console.log("Error to get location");
        });
        that.platform.ready().then(function () {
            var options = {
                timeout: 5000
            };
        });
        //this.start();
        setTimeout(function () {
            that.googleMap();
        }, 2000);
    }
    ItemmapPage.prototype.start = function () {
        this.locationTracker.startTracking();
    };
    ItemmapPage.prototype.stop = function () {
        this.locationTracker.stopTracking();
    };
    ItemmapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    ItemmapPage.prototype.googleMap = function () {
        var _this = this;
        var map;
        var infoWindow;
        var beachMarker;
        var image;
        // let markers : any;
        var uid = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid;
        console.log("service");
        console.log(uid);
        this.service.getRestaurantUserProfile(uid).on('value', function (snapshot) {
            _this.userList = snapshot.val();
        });
        var lats = parseFloat(this.dataInfo.lat);
        var longs = parseFloat(this.dataInfo.long);
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: lats, lng: longs },
            zoom: 10
        });
        image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var myIcons = new google.maps.MarkerImage("assets/images/icons/" + this.dataInfo.img, null, null, null, new google.maps.Size(30, 30));
        beachMarker = new google.maps.Marker({
            position: { lat: lats, lng: longs },
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
        var createMarker = function (info, keys) {
            //this.service.getDistanceRestaurant(info.key).on('value',snapshots =>{
            //this.distanceRestaurant = snapshots.val();
            //console.log(this.distanceRestaurant);
            console.log(info);
            var userLists;
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().onAuthStateChanged(function (user) {
                if (user) {
                    uid = user.uid;
                    console.log(uid);
                    console.log(info.key);
                    //this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
                    __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/cord').child(uid).child(keys).child("item_dis").on('value', function (snapshot) {
                        console.log(snapshot.val());
                        var myIcon = new google.maps.MarkerImage("assets/images/icons/" + info.img, null, null, null, new google.maps.Size(30, 30));
                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(info.lat, info.long),
                            map: map,
                            animation: google.maps.Animation.DROP,
                            title: info.title,
                            icon: myIcon,
                        });
                        marker.content = '<div class="infoWindowContent">' + snapshot.val() + '</div>';
                        google.maps.event.addListener(marker, 'click', function () {
                            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                            infoWindow.open(map, marker);
                        });
                        markers.push(marker);
                    });
                }
            });
            //});
        };
        this.service.getRestaurantsList()
            .on('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
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
                createMarker(childSnapshot.val(), childSnapshot.key);
                console.log(childSnapshot.val().lat);
                console.log(childSnapshot.val().long);
                //console.log(childSnapshot.val().title);
                distance.push(calcDistance(childSnapshot.val(), childSnapshot.val().lat, childSnapshot.val().long, childSnapshot.key) + " kilometers away");
                //createMarker(childSnapshot.val(),distanceOfRestaurant);
            });
        });
        function calcDistance(resLocation, destination, destination1, res_id) {
            var userLists;
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().onAuthStateChanged(function (user) {
                if (user) {
                    uid = user.uid;
                    //this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
                    __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/users').child(uid).on('value', function (snapshot) {
                        var cord = snapshot.val();
                        console.log(cord.lat);
                        console.log(cord.lng);
                        var p1 = new google.maps.LatLng(destination, destination1);
                        var p2 = new google.maps.LatLng(cord.lat, cord.lng);
                        console.log("distance is " + google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000);
                        var distanceBetween = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2)) / 1000;
                        console.log(distanceBetween);
                        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/cord').child(uid).child(res_id).update({
                            item_dis: distanceBetween.toFixed(2) + "km away"
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
    };
    ItemmapPage.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    };
    ItemmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-itemmap',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/itemmap/itemmap.html"*/'<!--\n\n  Generated template for the ItemmapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n  \n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  \n\n    <ion-title>Geolocation</ion-title>\n\n	\n\n	\n\n		<ion-buttons right>\n\n          <button style="background-color:white;" >\n\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<div id = "map">\n\n\n\n</div>\n\n<!----\n\n<h3>Current Latitude: {{locationTracker.lat}}</h3>\n\n  <h3>Current Longitude: {{locationTracker.lng}}</h3>\n\n  <h3>Current Longitude: {{locationTracker.timestamp}}</h3>\n\n  --->\n\n  <button ion-button full primary (click)="start()">Track My Location</button>\n\n  <button ion-button full primary (click)="stop()">Stop Tracking Location</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/itemmap/itemmap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */]])
    ], ItemmapPage);
    return ItemmapPage;
}());

//# sourceMappingURL=itemmap.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__writecomment_writecomment__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_launch_navigator__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventPage = (function () {
    function EventPage(nav, navParams, callNumber, emailComposer, launchNavigator) {
        this.nav = nav;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.launchNavigator = launchNavigator;
    }
    EventPage.prototype.ionViewDidLoad = function () {
        this.images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
        console.log('ionViewDidLoad EventPage');
    };
    EventPage.prototype.wedeventss = function () {
        console.log("jjj");
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__writecomment_writecomment__["a" /* WritecommentPage */]);
    };
    EventPage.prototype.callmyNumber = function () {
        this.callNumber.callNumber("18001010101", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    EventPage.prototype.openChat = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
    };
    EventPage.prototype.openemail = function () {
        var _this = this;
        this.emailComposer.isAvailable().then(function (available) {
            console.log("yes");
            //if(available) {
            //Now we know we can send
            var email = {
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
            _this.emailComposer.open(email);
            //}
        });
    };
    EventPage.prototype.getDirection = function () {
        var options = {
            start: 'London, ON'
        };
        this.launchNavigator.navigate('Toronto, ON', options)
            .then(function (success) { return console.log('Launched navigator'); }, function (error) { return console.log('Error launching navigator', error); });
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/event/event.html"*/'<!--\n\n  Generated template for the EventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar >\n\n  \n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title center>Venue Detail</ion-title>\n\n	<!--\n\n	<ion-buttons right>\n\n        <button style="background-color:transparent;" (click)="goToMap()">\n\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  -->\n\n	\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page" >\n\n\n\n	 <ion-card style="height: 200px;">\n\n    <img src="assets/images/background/2.jpg">\n\n    <div class="card-title">Avant Garde Weddings & Events</div>\n\n    <div class="card-subtitles">Vredekloof, cape Town ,South Africa</div>\n\n     <div class="card-subtitle">⭐⭐⭐⭐⭐</div>\n\n  </ion-card>\n\n\n\n   <ion-card>\n\n <ion-slides class="image-slider" loop="true"    slidesPerview="2">\n\n\n\n      <ion-slide *ngFor="let img of images">\n\n         <img src="assets/images/background/{{img}}"  imageViewer  class="thumb-img">\n\n      </ion-slide>\n\n    </ion-slides>\n\n\n\n\n\n\n\n\n\n  <br>\n\n    <div class="des"> Content (media), information or experience provided to audience or end-users by publishers or media producers. Content industry, an umbrella term that encompasses companies owning and providing mass media and media metadata. Content provider, a provider of non-core services in the \n\n</div>\n\n\n\n\n\n</ion-card>\n\n\n\n  <ion-list>\n\n    <ion-item class="itemm">\n\n    <button ion-item class="navig" (click)="openChat()">\n\n      <ion-icon name="ios-chatboxes-outline" color="purple" item-start></ion-icon>\n\n      Live Chat\n\n    </button>\n\n  </ion-item>\n\n      <ion-item class="item">\n\n\n\n<button ion-item class="navig" (click)="openemail()">\n\n      <ion-icon name="ios-mail-outline" color="purple" item-start></ion-icon>\n\n      Send Enquiry\n\n    </button>\n\n  </ion-item>\n\n\n\n    <ion-item class="item">\n\n\n\n    <button ion-item class="navig" (click)="getDirection()">\n\n      <ion-icon name="ios-compass-outline" color="purple" item-start></ion-icon>\n\n      Get Directions\n\n    </button>\n\n  </ion-item>\n\n\n\n    <ion-item class="item">\n\n\n\n    <button ion-item class="navig"  (click)="callmyNumber()">\n\n      <ion-icon name="ios-call-outline" color="purple" item-start></ion-icon>\n\n      Call\n\n    </button>\n\n</ion-item>\n\n\n\n  </ion-list>\n\n  <ion-card class="bac">\n\n    <h2>opening hours review to read more</h2>\n\n\n\n  <button  class="login-button" ion-button block color="purple" type="submit" class="button button-block button-default" text-capitalize  (click)="wedeventss()" ><div class="font">Write Review</div></button>\n\n     <h2>opening hours review</h2>\n\n  </ion-card>\n\n\n\n<ion-list class="lis">\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <img src="assets/imgs/user.png">\n\n    </ion-thumbnail>\n\n    <h2>testlogin</h2>\n\n    <p>Hayao Miyazaki • 1988</p>\n\n    <button ion-button clear item-end>⭐⭐⭐⭐⭐</button>\n\n     <span item-end>july2015</span>\n\n  </ion-item>\n\n</ion-list>\n\n<ion-list class="lis">\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n      <img src="assets/imgs/user.png">\n\n    </ion-thumbnail>\n\n    <h2>testlogin</h2>\n\n    <p>Hayao Miyazaki 1988</p>\n\n    <button ion-button clear item-end>⭐⭐⭐⭐⭐</button>\n\n    <span item-end>oct 2015</span>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/event/event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_global_global__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { GooglePlus } from '@ionic-native/google-plus';

//import { TwitterConnect } from '@ionic-native/twitter-connect';







/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(nav, navParams, functions, auth, loadingCtrl /*, private twitter: TwitterConnect*/, fb, /** private googlePlus: GooglePlus,*/ alertCtrl, values, service, actionSheetCtrl, camera, global) {
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl; /*, private twitter: TwitterConnect*/
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.global = global;
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Register Account";
        this.HeaderText = "Login";
        this.params = {};
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
    }
    RegisterPage.prototype.back = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        debugger;
        if (this.validateRegister(this.form)) {
            this.disableRegister = true;
            this.buttonText = "Registering...";
            this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName)
                .then(function () {
                debugger;
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().currentUser;
                console.log(_this.currentUser);
                _this.service.getRestaurantUserProfile(_this.currentUser.uid).on('value', function (snapshot) {
                    _this.userProfiles = snapshot.val();
                });
                _this.disableRegister = false;
                _this.buttonText = "Register Account";
            }).catch(function (err) {
                _this.handleRegisterError(err);
                debugger;
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__list_list__["a" /* ListPage */]);
            });
        }
    };
    RegisterPage.prototype.handleRegisterError = function (err) {
        console.log(err.code);
        this.errorRegisterMessage = err.message;
        this.disableRegister = false;
        this.buttonText = "Register Account";
    };
    RegisterPage.prototype.validateRegister = function (form) {
        if (this.form.firstName == undefined || this.form.firstName == '') {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.form.lastName == undefined || this.form.lastName == '') {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.form.email == undefined || this.form.email == '') {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            this.errorRegisterMessage = 'Please enter password';
            return false;
        }
        return true;
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.openGallery = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Take a picture',
                    icon: 'camera',
                    handler: function () {
                        _this.takePicturefromCamera();
                    }
                }, {
                    text: 'From gallery',
                    icon: 'images',
                    handler: function () {
                        _this.takePicture();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    RegisterPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            allowEdit: true,
            saveToPhotoAlbum: true,
            targetWidth: 720,
            targetHeight: 720,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.FILE_URI,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            //alert('ImagePath'+imagePath);
            _this.global.shoimg = true;
            _this.photo = imagePath;
            //alert('got image path ' + imagePath);
            // return this.makeFileIntoBlob(imagePath);//convert picture to blob
        }).then(function (imageBlob) {
            //alert('got image blob ' + imageBlob);
            // return this.uploadPhoto(imageBlob);//upload the blob
        });
    };
    RegisterPage.prototype.takePicturefromCamera = function () {
        var _this = this;
        var options = {
            allowEdit: true,
            saveToPhotoAlbum: true,
            targetWidth: 720,
            targetHeight: 720,
            cameraDirection: this.camera.Direction.BACK,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.FILE_URI,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            //alert('ImagePath'+imagePath);
            _this.global.shoimg = true;
            _this.photo = imagePath;
            //alert('got image path ' + imagePath);
            //return this.makeFileIntoBlob(imagePath);//convert picture to blob
        }).then(function (imageBlob) {
            //alert('got image blob ' + imageBlob);
            // return this.uploadPhoto(imageBlob);//upload the blob
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/register/register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header  style="background: #5e2f6f;color: white">\n\n\n\n    <ion-navbar >\n\n\n\n        <ion-buttons left>\n\n        <button ion-button (click)="back()">\n\n             <ion-icon ios="ios-arrow-back" md="md-arrow-back" style="zoom:1.3;"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n\n\n        <ion-title>Register</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content  class="background">\n\n\n\n\n\n <ion-grid>\n\n    <ion-row>\n\n     <ion-col>\n\n      <img src="{{photo}}" *ngIf="this.global.shoimg==true" class="slide-image"  on-tap="openGallery(1)" style="width: 40%;height:81%;display: block; margin:auto; border-radius: 50%"/>\n\n       <img src="assets/imgs/registericon2.png"  *ngIf="this.global.shoimg==false"   on-tap="openGallery(1)" class="slide-image" style="width: 35%;height: 81%;display: block; margin:auto;"/>\n\n            \n\n         \n\n\n\n          </ion-col>\n\n\n\n        </ion-row>\n\n          \n\n        \n\n         </ion-grid>\n\n\n\n<div class="register-form">\n\n\n\n<ion-card>\n\n             \n\n               <ion-item>\n\n                   \n\n\n\n                   <ion-label floating ><div class="font">First Name</div></ion-label>\n\n                  <ion-input required type="test" [(ngModel)]="form.firstName" name="firstname" class="font"></ion-input>\n\n               </ion-item>\n\n               <ion-item>\n\n                   <ion-label floating ><div class="font">Last Name</div></ion-label>\n\n                  <ion-input required type="test" [(ngModel)]="form.lastName" name="lastname" class="font"></ion-input>\n\n               </ion-item>\n\n               <ion-item>\n\n                   \n\n                    <ion-label floating ><div class="font">Email</div></ion-label>\n\n                  <ion-input required type="email" [(ngModel)]="form.email" name="email" class="font"></ion-input>\n\n               </ion-item>\n\n               <ion-item>\n\n                  <ion-label floating ><div class="font">Password</div></ion-label>\n\n                  <ion-input required type="password" [(ngModel)]="form.password" name="password" class="font"></ion-input>\n\n               </ion-item>\n\n             </ion-card>\n\n\n\n            <div class="error-message">\n\n               <ion-label color="danger" text-wrap>{{errorRegisterMessage}}</ion-label>\n\n            </div>\n\n            <div class="row">\n\n               <button style="margin: 20px 20px 0 20px" class="login-button" ion-button block color="purple" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableRegister" (click)="register()">{{buttonText}}</button>\n\n               <br>\n\n               <button style="margin: 0px 20px 20px 20px"class="forgot-button" ion-button clear color="light" type="submit" class="button button-block button-clear" (click)="goToLogin()">Back to login</button>\n\n            </div>\n\n\n\n   </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */] /*, private twitter: TwitterConnect*/, __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_7__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_11__providers_global_global__["a" /* GlobalProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatVendorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChatVendorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatVendorPage = (function () {
    function ChatVendorPage(navCtrl, navParams, afDb, camera, actionSheetCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDb = afDb;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afAuth = afAuth;
        this.messages = [];
        this.showEmojiPicker = false;
        this.newMessage = '';
        this.editorMsg = '';
        this.storageRef = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.storage().ref('/chatimages/');
        this.chatRoomsRef = this.afDb.list('/chatrooms').valueChanges();
    }
    ChatVendorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ChatVendorPage');
        this.restaurant = this.navParams.get("restaurant");
        this.chatKey = this.restaurant.vendor_id + ":" + this.restaurant.user_id;
        __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.database().ref("/chatrooms/" + this.chatKey).update({ "hasUnreadMsg": false }, function (err) {
            if (err) {
                console.error("err in err => ", err);
            }
            else {
                console.log("no error in err => ", _this);
            }
        });
        console.log(this.chatKey);
        this.afAuth.user.subscribe(function (res) {
            _this.user = res.toJSON();
            __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.database().ref("/chatmessages/" + _this.chatKey).on("child_added", function (res) {
                var msgData = res.toJSON();
                _this.messages.push(res.toJSON());
            });
        });
    };
    ChatVendorPage.prototype.sendMessage = function (message) {
        var _this = this;
        if (message.trim() != "") {
            var data = {
                "sender_id": this.user.uid,
                "receiver_id": this.restaurant.user_id,
                "message": message,
                "message_type": 'text',
                "firebase_url": "",
                "image": "",
                "img": "",
                "timestamp": __WEBPACK_IMPORTED_MODULE_5_moment__().unix()
            };
            this.afDb.list("/chatmessages/" + this.chatKey).push(data).then(function (res) {
                _this.editorMsg = '';
            });
        }
    };
    ChatVendorPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.focus();
        }
        else {
            this.setTextareaScroll();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    ChatVendorPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatVendorPage.prototype.focus = function () {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    };
    ChatVendorPage.prototype.setTextareaScroll = function () {
        var textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    };
    ChatVendorPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    ChatVendorPage.prototype.openGallery = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Take a picture',
                    icon: 'camera',
                    handler: function () {
                        _this.takePicturefromCamera();
                    }
                }, {
                    text: 'From gallery',
                    icon: 'images',
                    handler: function () {
                        _this.takePicture();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ChatVendorPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
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
        this.camera.getPicture(options).then(function (imagePath) {
            if (imagePath != '') {
                _this.uploadPhoto(imagePath);
            }
        }).catch(function (err) {
        });
    };
    ChatVendorPage.prototype.takePicturefromCamera = function () {
        var _this = this;
        var options = {
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
        this.camera.getPicture(options).then(function (imagePath) {
            if (imagePath != '') {
                _this.uploadPhoto(imagePath);
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    ChatVendorPage.prototype.uploadPhoto = function (imagePath) {
        var _this = this;
        this.storageRef.child(this.generateUUID() + ".png")
            .putString(imagePath, 'base64', { contentType: 'image/png' })
            .then(function (savedPicture) {
            console.log(savedPicture.downloadURL);
            var data = {
                "sender_id": _this.user.uid,
                "receiver_id": _this.restaurant.user_id,
                "message": '',
                "message_type": 'image',
                "firebase_url": savedPicture.downloadURL,
                "image": "/chatimages/" + _this.generateUUID() + ".png",
                "img": _this.generateUUID() + ".png",
                "timestamp": __WEBPACK_IMPORTED_MODULE_5_moment__().unix()
            };
            _this.afDb.list("/chatmessages/" + _this.chatKey).push(data).then(function (res) {
                _this.editorMsg = '';
            });
        }).catch(function (err) {
            console.log(JSON.stringify(err));
        });
    };
    ChatVendorPage.prototype.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChatVendorPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ChatVendorPage.prototype, "messageInput", void 0);
    ChatVendorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chat-vendor',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/chat-vendor/chat-vendor.html"*/'<!--\n\n  Generated template for the ChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar >\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>\n\n\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <img style="padding: 0px;border-radius: 50%;width:50px;" src="assets/imgs/user.png">\n\n\n\n\n\n                </ion-col>\n\n\n\n                <ion-col col-7>\n\n                    <p style="margin: 0px;\n\n                      padding-top: 5px;\n\n                      margin-left: 0px;\n\n                      font-size: 16px;" *ngIf="restaurant">{{restaurant.user_name}}</p>\n\n                </ion-col>\n\n\n\n            </ion-row>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <!--<ion-list *ngIf="messages.length>0">-->\n\n    <!--<ion-item *ngFor="let message of messages">-->\n\n    <!--{{message.message}}-->\n\n    <!--</ion-item>-->\n\n    <!--</ion-list>-->\n\n    <div class="message-wrap">\n\n\n\n        <div *ngFor="let msg of messages"\n\n             class="message"\n\n             [class.left]=" msg.sender_id !== user.uid"\n\n             [class.right]=" msg.sender_id === user.uid ">\n\n            <!--<img class="user-img" [src]="msg.userAvatar" alt="" src="">-->\n\n            <!--<ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>-->\n\n            <div class="msg-detail">\n\n                <div class="msg-info">\n\n                  <p >\n\n                    <!--{{msg.userName}}&nbsp;&nbsp;&nbsp;{{msg.time | relativeTime}}</p>-->\n\n                    {{msg.timestamp*1000 | date :\'short\'}}\n\n                    </p>\n\n                    \n\n                </div>\n\n                <div class="msg-content">\n\n                    <span class="triangle"></span>\n\n                    <p class="line-breaker " *ngIf="!msg.message_type || msg.message_type == \'text\'">{{msg.message}}</p>\n\n                    <img style="height:250px;width:250px;" src="{{msg.firebase_url}}" *ngIf="msg.message_type == \'image\'" >\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n    <div class="input-wrap">\n\n        <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n\n            <ion-icon name="md-happy"></ion-icon>\n\n        </button>\n\n        <button ion-button clear icon-only item-right (click)="openGallery()">\n\n            <ion-icon name="attach"></ion-icon>\n\n        </button>\n\n        <textarea #chat_input\n\n                  placeholder="Text Input"\n\n                  name="editorMsg"\n\n                  [(ngModel)]="editorMsg"\n\n                  (keyup.enter)="sendMessage(editorMsg)"\n\n                  (focusin)="onFocus()">\n\n    </textarea>\n\n        <button ion-button clear icon-only item-right (click)="sendMessage(editorMsg)">\n\n            <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n        </button>\n\n    </div>\n\n    <emoji-picker [(ngModel)]="editorMsg"></emoji-picker>\n\n</ion-footer>'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/chat-vendor/chat-vendor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ChatVendorPage);
    return ChatVendorPage;
}());

//# sourceMappingURL=chat-vendor.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressPage = (function () {
    function AddressPage(nav, params, service) {
        this.nav = nav;
        this.params = params;
        this.service = service;
        this.form = {};
        this.currentUser = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        console.log(this.currentUser);
        this.customer = params.data;
    }
    AddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddressPage');
    };
    AddressPage.prototype.addAddress = function () {
        var _this = this;
        this.service.saveRestaurantCustomers(this.customer.displayName, this.customer.phone, this.customer.address, this.currentUser.uid)
            .then(function () {
            _this.nav.pop();
        });
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-address',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/address/address.html"*/'<!--\n\n  Generated template for the AddressPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Address</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n <div class="margin">\n\n      <ion-list>\n\n         <ion-item>\n\n            <ion-label floating>First Name*</ion-label>\n\n            <ion-input required type="text" [(ngModel)]="customer.displayName" name="firstname"></ion-input>\n\n         </ion-item>\n\n         <ion-item>\n\n            <h3>Email: {{customer.email}}</h3>\n\n         </ion-item>\n\n         <ion-item>\n\n            <ion-label floating>Phone no</ion-label>\n\n            <ion-input type="number" [(ngModel)]="customer.phone" name="phone" ></ion-input>\n\n         </ion-item>\n\n         <ion-item>\n\n            <ion-label floating>Address</ion-label>\n\n            <ion-input type="text" [(ngModel)]="customer.address" name="address" ></ion-input>\n\n         </ion-item>\n\n      </ion-list>\n\n       <div class="error-message">\n\n           <ion-label color="danger" text-wrap>{{errorMessage}}</ion-label>\n\n       </div>\n\n      <button ion-button no-margin item-right full color="shadow" [disabled]="disableSubmit" (click)="addAddress()">Save</button>\n\n   </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/address/address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checklistbox_checklistbox__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChecklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChecklistPage = (function () {
    function ChecklistPage(nav, navParams, alertCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.myChecklist = [];
    }
    ChecklistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.items = ['Attire', 'Ceremony', 'Flowers', 'Mise'];
        console.log('ionViewDidLoad ChecklistPage');
        var personRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/checklist/");
        personRef.on('value', function (personSnapshot) {
            _this.myChecklist = personSnapshot.val();
            // let bh=JSON.stringify(myChecklist);
            console.log("myChecklist");
            //alert(this.users);
        });
    };
    ChecklistPage.prototype.presentPrompt = function () {
        var _this = this;
        var ownerid = "LLheFLvL0U0hx55sIpO";
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    name: 'titles',
                    placeholder: 'titles'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'ok',
                    handler: function (data) {
                        _this.addCheckCategory(data.titles);
                    }
                }
            ]
        });
        alert.present();
    };
    ChecklistPage.prototype.addCheckCategory = function (titles) {
        var cusid = "eKM6qOJFsAXsrff502GsK6hTJQq2";
        var ownerid = "LLheFLvL0U0hx55sIpO";
        ;
        //let cuid = localStorage['uid'];
        //let joinDataa = firebase.database().ref().child('/ChecklistCategory/' + ownerid)
        var personRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/ChecklistCategory/').push();
        personRef.set({
            CustomerId: cusid,
            CategoryTitle: titles,
            sendDate: Date()
        });
    };
    ChecklistPage.prototype.itemSelectedd = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checklistbox_checklistbox__["a" /* ChecklistboxPage */]);
    };
    ChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-checklist',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/checklist/checklist.html"*/'<!--\n\n  Generated template for the ChecklistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n   <ion-navbar >\n\n  \n\n    <button ion-button menuToggle>\n\n      <ion-icon name="arrow-round-back"></ion-icon>\n\n    </button>\n\n    <ion-title>CheckList</ion-title>\n\n	<!--\n\n	<ion-buttons right>\n\n        <button style="background-color:transparent;" (click)="goToMap()">\n\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  -->\n\n	\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<ion-list>\n\n  <button ion-item *ngFor="let item of items" (click)="itemSelectedd()">\n\n \n\n    {{ item }}\n\n  </button> \n\n  \n\n</ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n <ion-navbar  style="text-align: center;">\n\n   <button style="background-color:transparent;" (click)="presentPrompt()">\n\n            <ion-icon name="add"   style="position:relative; font-size:2em; color:#fff;"  >\n\n              <span>New Category</span>\n\n            </ion-icon>\n\n        </button>\n\n   </ion-navbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/checklist/checklist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ChecklistPage);
    return ChecklistPage;
}());

//# sourceMappingURL=checklist.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChecklistboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChecklistboxPage = (function () {
    function ChecklistboxPage(nav, navParams, alertCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.myChecklist = [];
    }
    ChecklistboxPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.items = ['Attire', 'Ceremony', 'Flowers', 'Mise'];
        console.log('ionViewDidLoad ChecklistPage');
        var personRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref("/checklist/");
        personRef.on('value', function (personSnapshot) {
            _this.myChecklist = personSnapshot.val();
            // let bh=JSON.stringify(myChecklist);
            console.log("myChecklist");
            //alert(this.users);
        });
    };
    ChecklistboxPage.prototype.presentPrompt = function () {
        var _this = this;
        var ownerid = "LLheFLvL0U0hx55sIpO";
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    name: 'titles',
                    placeholder: 'titles'
                },
                {
                    name: 'Notes',
                    placeholder: 'Notes'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add CheckList',
                    handler: function (data) {
                        _this.addChecklistbox(data.titles, data.Notes);
                    }
                }
            ]
        });
        alert.present();
    };
    ChecklistboxPage.prototype.addChecklistbox = function (titles, Notes) {
        var cusid = "eKM6qOJFsAXsrff502GsK6hTJQq2";
        var ownerid = "LLheFLvL0U0hx55sIpO";
        ;
        //let cuid = localStorage['uid'];
        var personRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/checklist/').push();
        personRef.set({
            CustomerId: cusid,
            CheckListTitle: titles,
            CheckListNote: Notes,
            sendDate: Date()
        });
    };
    ChecklistboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-checklistbox',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/checklistbox/checklistbox.html"*/'<!--\n\n  Generated template for the ChecklistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n   <ion-navbar >\n\n  \n\n    <button ion-button menuToggle>\n\n      <ion-icon name="arrow-round-back"></ion-icon>\n\n    </button>\n\n    <ion-title>CheckList</ion-title>\n\n	<!--\n\n	<ion-buttons right>\n\n        <button style="background-color:transparent;" (click)="goToMap()">\n\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  -->\n\n	\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<ion-list>\n\n <ion-item>\n\n  <ion-label>Daenersys Targaryen</ion-label>\n\n\n\n\n\n  <ion-checkbox color="dark" checked="true"></ion-checkbox>\n\n  <h2>dsfsdf</h2>\n\n</ion-item>\n\n  \n\n\n\n  \n\n</ion-list>\n\n\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n <ion-navbar color="brown" style="text-align: center;">\n\n   <button style="background-color:transparent;" (click)="presentPrompt()">\n\n            <ion-icon name="add"   style="position:relative; font-size:2em; color:#fff;"  >\n\n              <span>New Checklist</span>\n\n            </ion-icon>\n\n        </button>\n\n   </ion-navbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/checklistbox/checklistbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ChecklistboxPage);
    return ChecklistboxPage;
}());

//# sourceMappingURL=checklistbox.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindbycategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FindbycategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FindbycategoryPage = (function () {
    function FindbycategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FindbycategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FindbycategoryPage');
    };
    FindbycategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-findbycategory',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/findbycategory/findbycategory.html"*/'<!--\n\n  Generated template for the FindbycategoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  	   <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Find Vendor By Category</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page">\n\n\n\n  <ion-card>\n\n    <img src="assets/images/background/0.jpg"/>\n\n    <div class="card-title">Bachelars</div>\n\n  \n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/images/background/1.jpg"/>\n\n    <div class="card-title">Bars</div>\n\n \n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/images/background/2.jpg"/>\n\n    <div class="card-title">Beauty</div>\n\n    \n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="assets/images/background/3.jpg"/>\n\n    <div class="card-title">Madison</div>\n\n   \n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/findbycategory/findbycategory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], FindbycategoryPage);
    return FindbycategoryPage;
}());

//# sourceMappingURL=findbycategory.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GuestlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GuestlistPage = (function () {
    function GuestlistPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    GuestlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GuestlistPage');
    };
    GuestlistPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'Firstname',
                    placeholder: 'Firstname'
                },
                {
                    name: 'Lastname',
                    placeholder: 'Lastname',
                    type: 'text'
                },
                {
                    name: 'Bride',
                    placeholder: 'Bride',
                    type: 'radio'
                },
                {
                    name: 'yes',
                    placeholder: 'yes',
                    type: 'radio'
                },
                {
                    name: 'no',
                    placeholder: 'no',
                    type: 'radio'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'ok',
                    handler: function (data) {
                        _this.addGuestList(data.Firstname, data.Lastname, data.yes, data.Bride, data.no);
                    }
                }
            ]
        });
        alert.present();
    };
    GuestlistPage.prototype.addGuestList = function (Firstname, Lastname, yes, Bride, no) {
        alert("dfsdf");
        var cusid = "eKM6qOJFsAXsrff502GsK6hTJQq2";
        var ownerid = "LLheFLvL0U0hx55sIpO";
        //let cuid = localStorage['uid'];
        var personRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/Guestlist/').push();
        //let joinDataa = firebase.database().ref().child('/Guestlist/' + ownerid).push();
        personRef.set({
            CustomerId: cusid,
            Firstname: Firstname,
            Lastanme: Lastname,
            Side: Bride,
            InviteSent: yes,
            Attending: no,
            sendDate: Date()
        });
    };
    GuestlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-guestlist',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/guestlist/guestlist.html"*/'<!--\n\n  Generated template for the ChecklistPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n   <ion-navbar>\n\n\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="arrow-round-back"></ion-icon>\n\n    </button>\n\n    <ion-title>GuestList</ion-title>\n\n	<!--\n\n	<ion-buttons right>\n\n        <button style="background-color:transparent;" (click)="goToMap()">\n\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  -->\n\n	\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="guestclass" style="font-family: serif;">\n\n<ion-grid class="main">\n\n  <ion-row>\n\n  <p> ToTal:2(bride:1,Groom,Child:0)</p>\n\n   </ion-row>\n\n  </ion-grid>\n\n<ion-grid class="head">\n\n  <ion-row>\n\n    <ion-col col-6>\n\n     Guest(2)\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      Side\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      invite sent\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      Attending\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<ion-grid class="con">\n\n  <ion-row>\n\n    <ion-col col-6>\n\n     Jon Deo\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      dssd\n\n    </ion-col>\n\n    <ion-col col-2 class="in">\n\n      V\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      2\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid><ion-grid class="con" >\n\n  <ion-row>\n\n    <ion-col col-6>\n\n     ronald jos\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      groom\n\n    </ion-col>\n\n    <ion-col col-2  class="in">\n\n    V\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      2\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n<ion-footer>\n\n <ion-navbar  style="text-align: center;">\n\n   <button style="background-color:transparent;" (click)="presentPrompt()">\n\n            <ion-icon name="add"   style="position:relative; font-size:2em; color:#fff;"  >\n\n              <span>New Category</span>\n\n            </ion-icon>\n\n        </button>\n\n   </ion-navbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/guestlist/guestlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], GuestlistPage);
    return GuestlistPage;
}());

//# sourceMappingURL=guestlist.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__address_address__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__myorder_myorder__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';







/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyProfilePage = (function () {
    function MyProfilePage(nav, navParams, functions, auth, loadingCtrl /*, private twitter: TwitterConnect*/, fb, /** private googlePlus: GooglePlus,*/ alertCtrl, values, service) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl; /*, private twitter: TwitterConnect*/
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Register Account";
        this.HeaderText = "Login";
        this.params = {};
        //this.role = "Customer";
        this.currentUser = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().currentUser;
        if (this.values.isLoggedIn) {
            this.service.getUserProfile(this.currentUser.uid).on('value', function (snapshot) {
                _this.userProfiles = snapshot.val();
            });
        }
        console.log(this.userProfiles);
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
    }
    MyProfilePage.prototype.showSignup = function () {
        this.HeaderText = "Register";
        this._showSignup = true;
    };
    MyProfilePage.prototype.hideSignup = function () {
        this.HeaderText = "Login";
        this._showSignup = false;
    };
    //EMAIL AND PASSWORD LOGIN
    MyProfilePage.prototype.login = function () {
        var _this = this;
        if (this.validate()) {
            this.disableLogin = true;
            this.auth.login(this.form.email, this.form.password).then(function (success) {
                _this.userProfile = success;
                _this.values.isLoggedIn = true;
                _this.disableLogin = false;
                console.log(_this.values.isLoggedIn);
                _this.service.getUserProfile(_this.userProfile.uid).on('value', function (snapshot) {
                    _this.userProfiles = snapshot.val();
                });
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('/Customer-Role').child(_this.userProfile.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.values.userRole = snapshot.val().role;
                    }
                });
            }).catch(function (err) { _this.handleError(err); });
        }
    };
    MyProfilePage.prototype.handleError = function (err) {
        console.log(err.code);
        this.errorSigninMessage = err.message;
        this.disableLogin = false;
    };
    MyProfilePage.prototype.validate = function () {
        if (this.form.email == undefined || this.form.email == '') {
            this.errorSigninMessage = 'Please enter email';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            this.errorSigninMessage = 'Please enter password';
            return false;
        }
        return true;
    };
    //FACEBOOK LOGIN
    MyProfilePage.prototype.facebookLogin = function () {
        var _this = this;
        this.fb.login(['email']).then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().signInWithCredential(facebookCredential).then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
                _this.userProfile = success;
                _this.values.isLoggedIn = true;
                _this.customerList.child(_this.userProfile.uid).set({
                    displayName: _this.userProfile.displayName,
                    photoURL: _this.userProfile.photoURL,
                    email: _this.userProfile.email
                });
                _this.service.getUserProfile(_this.userProfile.uid).on('value', function (snapshot) {
                    _this.userProfiles = snapshot.val();
                });
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('/Customer-Role').child(_this.userProfile.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.values.userRole = snapshot.val().role;
                    }
                });
                // this.nav.push('ShopPage');
            }).catch(function (error) {
                console.log("Firebase failure: " + JSON.stringify(error));
                _this.functions.showAlert('Error', error.message);
            });
        }).catch(function (error) {
            console.log(error);
            _this.functions.showAlert('Error', error);
        });
    };
    //TWITTER LOGIN
    /* twLogin(): void {
       this.twitter.login().then( response => {
         const twitterCredential = firebase.auth.TwitterAuthProvider.credential(response.token, response.secret);
   
         firebase.auth().signInWithCredential(twitterCredential).then( userProfile => {
             this.values.isLoggedIn = true;
             this.userProfile = userProfile;
             this.userProfile.twName = response.userName;
             this.customerList.child(this.userProfile.uid).set({
               displayName: this.userProfile.displayName,
               photoURL: this.userProfile.photoURL,
               email: this.userProfile.email
           });
             this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
              this.userProfiles = snapshot.val();
             });
   
             this.values.userRole = firebase.database().ref('/Customer-Role').child(this.userProfile.uid).on('value', snapshot =>{
               if(snapshot.val()){
                 this.values.userRole = snapshot.val().role;
               }
             });
            //this.nav.push('ShopPage');
             console.log(this.userProfile);
         }, error => {
           this.functions.showAlert('Error', error.message);
           console.log(error);
         });
       }, error => {
         this.functions.showAlert('Error', error);
         console.log("Error connecting to twitter: ", error);
       });
     }*/
    //GOOGLE LOGIN 
    /***
  
    gmailLogin(){
      
       
        this.googlePlus.login({
          'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
          'webClientId': '456352511209-qmma51oquif9u5msldo4u90ra83kdtfo.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
          'offline': true
        })
        .then( res => {
         firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
         .then( success =>{
          this.userProfile = success;
          this.values.isLoggedIn = true;
          console.log("Firebase Success" + JSON.stringify(success));
           this.customerList.child(this.userProfile.uid).set({
              displayName: this.userProfile.displayName,
              photoURL: this.userProfile.photoURL,
              email: this.userProfile.email
          });
           this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
             this.userProfiles = snapshot.val();
            });
  
           this.values.userRole = firebase.database().ref('/Customer-Role').child(this.userProfile.uid).on('value', snapshot =>{
              if(snapshot.val()){
                this.values.userRole = snapshot.val().role;
              }
            });
          // this.nav.push('ShopPage');
          }).catch( error =>{
            this.userProfile = error;
            this.functions.showAlert('Error', error.message);
           console.log("Firebase Failure" + JSON.stringify(error))
           });
        }).catch(err =>{
          this.userProfile = err;
          this.functions.showAlert('Error', err);
           console.error("Error: ", err);
          });
      
    }
  
  
  */
    MyProfilePage.prototype.forgotten = function () {
        this.nav.push('ResetpassowrdPage');
    };
    MyProfilePage.prototype.logOut = function () {
        var _this = this;
        this.auth.logoutUser().then(function () {
            _this.values.isLoggedIn = false;
            _this.values.userRole = 'Customer';
        });
    };
    MyProfilePage.prototype.address = function (item) {
        console.log(item);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__address_address__["a" /* AddressPage */], item);
    };
    MyProfilePage.prototype.myOrder = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__myorder_myorder__["a" /* MyorderPage */]);
    };
    MyProfilePage.prototype.changePassword = function (form) {
        if (form.password != "" && form.password != null) {
            //Update Password in UserAuthentication Table
            __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().currentUser.updatePassword(form.password).then(function (ok) { }, function (error) { });
            alert("Password changed");
        }
        else {
            alert("Please enter new password");
        }
    };
    MyProfilePage.prototype.register = function () {
        var _this = this;
        if (this.validateRegister(this.form)) {
            this.disableRegister = true;
            this.buttonText = "Registering...";
            this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName)
                .then(function () {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().currentUser;
                _this.service.getUserProfile(_this.currentUser.uid).on('value', function (snapshot) {
                    _this.userProfiles = snapshot.val();
                });
                _this.disableRegister = false;
                _this.buttonText = "Register Account";
            }).catch(function (err) { _this.handleRegisterError(err); });
        }
    };
    MyProfilePage.prototype.handleRegisterError = function (err) {
        console.log(err.code);
        this.errorRegisterMessage = err.message;
        this.disableRegister = false;
        this.buttonText = "Register Account";
    };
    MyProfilePage.prototype.validateRegister = function (form) {
        if (this.form.firstName == undefined || this.form.firstName == '') {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.form.lastName == undefined || this.form.lastName == '') {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.form.email == undefined || this.form.email == '') {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            this.errorRegisterMessage = 'Please enter password';
            return false;
        }
        return true;
    };
    MyProfilePage.prototype.goToMap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__map_map__["a" /* MapPage */]);
    };
    /* ionViewDidLoad() {
       this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
     }
   
     signIn(phoneNumber: number){
     document.getElementById('recaptcha-container').innerHTML = "";
     this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
     const appVerifier = this.recaptchaVerifier;
     const phoneNumberString = "+" + phoneNumber;
     firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
       .then( confirmationResult => {
         // SMS sent. Prompt user to type the code from the message, then sign the
         // user in with confirmationResult.confirm(code).
         let prompt = this.alertCtrl.create({
         title: 'Enter the Confirmation code',
         inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
         buttons: [
           { text: 'Cancel',
             handler: data => { console.log('Cancel clicked'); appVerifier}
           },
           { text: 'Send',
             handler: data => {
               confirmationResult.confirm(data.confirmationCode)
               .then( (result) => {
                 // User signed in successfully.
                 //console.log(result.user);
                 this.userProfiles = result.user;
                    console.log( this.userProfiles);
                   // console.log( result.user.phoneNumber);
                 // ...
               }).catch( (error) => {this.handleErrors(error)
   
   
   
   
                 // User couldn't sign in (bad verification code?)
                 // ...
               });
             }
           }
         ]
       });
       prompt.present();
     })
     .catch( (error) =>{
       this.handleErrors(error)
       console.error("SMS not sent", error);
     });
   
   }
   
   handleErrors(error){
     this.errorPhoneMessage = error.message;
   }*/
    MyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyProfilePage');
    };
    MyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-profile',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/my-profile/my-profile.html"*/'<!--\n\n  Generated template for the MyProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n<ion-navbar >\n\n\n\n<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>My Profile</ion-title>\n\n	\n\n	<!--\n\n		<ion-buttons right>\n\n        <button style="background-color:white;" (click)="goToMap()">\n\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  -->\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding *ngIf="values.isLoggedIn && userProfiles" style="background-image: url(assets/images/logo/sky.jpg); background-size:100%">\n\n\n\n<div style ="padding-top:30px;">\n\n  <ion-card>\n\n\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n          <ion-list style="margin:15px 0 0 0;font-family: Arial ">\n\n         <div *ngIf="userProfiles.photoURL" class="profile-image">\n\n            <img src="{{userProfiles.photoURL}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n\n         </div>\n\n         <div *ngIf="!userProfiles.photoURL" class="profile-image">\n\n            <img src="{{values.avatar}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n\n         </div>\n\n      </ion-list>\n\n      </ion-avatar>\n\n      <h2>{{userProfiles.displayName}}  {{userProfiles.lastName}}</h2>\n\n      \n\n    </ion-item>\n\n\n\n    \n\n\n\n    <ion-card-content>\n\n	\n\n	  <h2 style = "padding-top:20px;"><ion-icon item-start ios="ios-mail" md="md-mail"></ion-icon>Email: {{userProfiles.email}}</h2>\n\n      <h2 style = "padding-top:20px;"><ion-icon name = "compass"></ion-icon>Address: {{userProfiles.address}}</h2>\n\n	  <h2 style = "padding-top:20px;"><ion-icon name = "phone-portrait"></ion-icon>Phone Number: {{userProfiles.phone}}</h2>\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-left  (click)="address(userProfiles)" clear big>\n\n        <ion-icon name="build"></ion-icon>\n\n        <div>Edit</div>\n\n      </button>\n\n      </ion-col>\n\n    \n\n      <ion-col center text-center>\n\n        <ion-note>\n\n         {{userProfiles.timestamp}}\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n  \n\n        <ion-card style = "background-color:#dedede;" *ngIf="!userProfiles.facebook">\n\n         <form #f="ngForm" style = "background-color:#dedede;">\n\n            <ion-list style = "background-color:#dedede;">\n\n				<ion-item style = "background-color:#dedede">\n\n                  <ion-label floating style ="background-color:white;">Password</ion-label>\n\n                  <ion-input required type="password" [(ngModel)]="form.password" name="password"></ion-input>\n\n               </ion-item>\n\n            </ion-list>\n\n      <button ion-button icon-left (click)="changePassword(form)" clear big>\n\n        \n\n        <div>Change Password</div>\n\n      </button>\n\n\n\n            \n\n         </form>\n\n      </ion-card>\n\n  \n\n	  </div>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/my-profile/my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */] /*, private twitter: TwitterConnect*/, __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* Service */]])
    ], MyProfilePage);
    return MyProfilePage;
}());

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the YoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var YoutubePage = (function () {
    function YoutubePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.videos = [
            {
                title: 'Flashlight Application',
                video: 'https://www.youtube.com/embed/9yZEvkofi24',
            },
            {
                title: 'SMS Application',
                video: 'https://www.youtube.com/embed/9yZEvkofi24',
            }
        ];
    }
    YoutubePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YoutubePage');
    };
    YoutubePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-youtube',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/youtube/youtube.html"*/'<!--\n\n  Generated template for the YoutubePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n     <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Restaurants</ion-title>\n\n	\n\n	<ion-buttons right>\n\n        <button style="background-color:white;">\n\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<ion-card *ngFor = "let video of videos">\n\n		<ion-card-header>\n\n			{{video.title}}\n\n		</ion-card-header>\n\n		\n\n		<ion-card-content>\n\n			<iframe width ="100%" height="200px" [src]="video.video | youtube" frameborder = "0" allowfullscreen>\n\n			</iframe>\n\n		</ion-card-content>\n\n	</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/youtube/youtube.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], YoutubePage);
    return YoutubePage;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 224;

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/action-sheet/layout-1/action-sheet-layout-1.module": [
		910,
		8
	],
	"../components/action-sheet/layout-2/action-sheet-layout-2.module": [
		911,
		7
	],
	"../components/action-sheet/layout-3/action-sheet-layout-3.module": [
		912,
		65
	],
	"../components/check-box/layout-1/check-box-layout-1.module": [
		913,
		64
	],
	"../components/check-box/layout-2/check-box-layout-2.module": [
		914,
		63
	],
	"../components/check-box/layout-3/check-box-layout-3.module": [
		915,
		62
	],
	"../components/full-screen-gallery/full-screen-gallery.module": [
		916,
		61
	],
	"../components/image-gallery/layout-1/image-gallery-layout-1.module": [
		917,
		60
	],
	"../components/image-gallery/layout-2/image-gallery-layout-2.module": [
		918,
		59
	],
	"../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module": [
		919,
		58
	],
	"../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module": [
		920,
		94
	],
	"../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module": [
		921,
		57
	],
	"../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module": [
		922,
		93
	],
	"../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module": [
		923,
		56
	],
	"../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module": [
		927,
		55
	],
	"../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module": [
		928,
		54
	],
	"../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module": [
		924,
		53
	],
	"../components/list-view/expandable/layout-1/expandable-layout-1.module": [
		925,
		52
	],
	"../components/list-view/expandable/layout-2/expandable-layout-2.module": [
		926,
		92
	],
	"../components/list-view/expandable/layout-3/expandable-layout-3.module": [
		931,
		51
	],
	"../components/list-view/google-card/layout-1/google-card-layout-1.module": [
		930,
		91
	],
	"../components/list-view/google-card/layout-2/google-card-layout-2.module": [
		929,
		50
	],
	"../components/list-view/google-card/layout-3/google-card-layout-3.module": [
		933,
		49
	],
	"../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module": [
		932,
		5
	],
	"../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module": [
		934,
		4
	],
	"../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module": [
		935,
		3
	],
	"../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module": [
		936,
		48
	],
	"../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module": [
		937,
		90
	],
	"../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module": [
		938,
		89
	],
	"../components/login/layout-1/login-layout-1.module": [
		939,
		88
	],
	"../components/login/layout-2/login-layout-2.module": [
		940,
		47
	],
	"../components/maps/layout-1/maps-layout-1.module": [
		941,
		0
	],
	"../components/maps/layout-2/maps-layout-2.module": [
		942,
		2
	],
	"../components/maps/layout-3/maps-layout-3.module": [
		943,
		1
	],
	"../components/parallax/layout-1/parallax-layout-1.module": [
		944,
		6
	],
	"../components/parallax/layout-2/parallax-layout-2.module": [
		945,
		11
	],
	"../components/parallax/layout-3/parallax-layout-3.module": [
		946,
		10
	],
	"../components/parallax/layout-4/parallax-layout-4.module": [
		947,
		9
	],
	"../components/qrcode/layout-1/qrcode-layout-1.module": [
		948,
		46
	],
	"../components/radio-button/layout-1/radio-button-layout-1.module": [
		950,
		45
	],
	"../components/radio-button/layout-2/radio-button-layout-2.module": [
		949,
		44
	],
	"../components/radio-button/layout-3/radio-button-layout-3.module": [
		952,
		43
	],
	"../components/range/layout-1/range-layout-1.module": [
		951,
		42
	],
	"../components/range/layout-2/range-layout-2.module": [
		953,
		41
	],
	"../components/range/layout-3/range-layout-3.module": [
		954,
		40
	],
	"../components/range/layout-4/range-layout-4.module": [
		955,
		39
	],
	"../components/register/layout-1/register-layout-1.module": [
		957,
		38
	],
	"../components/register/layout-2/register-layout-2.module": [
		956,
		37
	],
	"../components/search-bar/layout-1/search-bar-layout-1.module": [
		958,
		36
	],
	"../components/search-bar/layout-2/search-bar-layout-2.module": [
		959,
		35
	],
	"../components/search-bar/layout-3/search-bar-layout-3.module": [
		961,
		34
	],
	"../components/select/layout-1/select-layout-1.module": [
		960,
		33
	],
	"../components/select/layout-2/select-layout-2.module": [
		963,
		32
	],
	"../components/select/layout-3/select-layout-3.module": [
		962,
		31
	],
	"../components/select/layout-4/select-layout-4.module": [
		965,
		30
	],
	"../components/select/layout-5/select-layout-5.module": [
		964,
		29
	],
	"../components/select/layout-6/select-layout-6.module": [
		966,
		28
	],
	"../components/spinner/spinner.module": [
		967,
		27
	],
	"../components/splash-screen/layout-1/splash-screen-layout-1.module": [
		968,
		26
	],
	"../components/splash-screen/layout-2/splash-screen-layout-2.module": [
		969,
		25
	],
	"../components/splash-screen/layout-3/splash-screen-layout-3.module": [
		970,
		24
	],
	"../components/sub-image-gallery/sub-image-gallery.module": [
		971,
		23
	],
	"../components/tabs/layout-1/tabs-layout-1.module": [
		972,
		22
	],
	"../components/tabs/layout-2/tabs-layout-2.module": [
		973,
		21
	],
	"../components/tabs/layout-3/tabs-layout-3.module": [
		974,
		20
	],
	"../components/toggle/layout-1/toggle-layout-1.module": [
		976,
		19
	],
	"../components/toggle/layout-2/toggle-layout-2.module": [
		975,
		18
	],
	"../components/toggle/layout-3/toggle-layout-3.module": [
		977,
		17
	],
	"../components/wizard/layout-1/wizard-layout-1.module": [
		978,
		16
	],
	"../components/wizard/layout-2/wizard-layout-2.module": [
		979,
		15
	],
	"../components/wizard/layout-3/wizard-layout-3.module": [
		988,
		14
	],
	"../pages/address/address.module": [
		980,
		87
	],
	"../pages/cart/cart.module": [
		982,
		86
	],
	"../pages/category/category.module": [
		981,
		85
	],
	"../pages/chat-vendor/chat-vendor.module": [
		983,
		84
	],
	"../pages/chat/chat.module": [
		985,
		83
	],
	"../pages/chatting/chatting.module": [
		984,
		82
	],
	"../pages/checklist/checklist.module": [
		986,
		81
	],
	"../pages/checklistbox/checklistbox.module": [
		987,
		80
	],
	"../pages/event/event.module": [
		989,
		79
	],
	"../pages/findbycategory/findbycategory.module": [
		990,
		78
	],
	"../pages/geotracking/geotracking.module": [
		991,
		13
	],
	"../pages/guestlist/guestlist.module": [
		992,
		77
	],
	"../pages/itemmap/itemmap.module": [
		993,
		76
	],
	"../pages/map/map.module": [
		994,
		75
	],
	"../pages/my-profile/my-profile.module": [
		995,
		74
	],
	"../pages/myorder/myorder.module": [
		996,
		73
	],
	"../pages/order-details/order-details.module": [
		997,
		72
	],
	"../pages/product-details/product-details.module": [
		998,
		71
	],
	"../pages/products/products.module": [
		999,
		70
	],
	"../pages/register/register.module": [
		1000,
		69
	],
	"../pages/resset-password/resset-password.module": [
		1001,
		12
	],
	"../pages/wishlist/wishlist.module": [
		1002,
		68
	],
	"../pages/writecomment/writecomment.module": [
		1003,
		67
	],
	"../pages/youtube/youtube.module": [
		1004,
		66
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 266;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__event_event__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_email_composer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chat_chat__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_global_global__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__chatting_chatting__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ListPage = (function () {
    //items: Array<{title: string, note: string, icon: string}>;
    function ListPage(values, nativeStorage, nav, navParams, service, translateService, callNumber, emailComposer, global, af, popoverCtrl) {
        var _this = this;
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.global = global;
        this.af = af;
        this.popoverCtrl = popoverCtrl;
        //showicon:boolean=false;
        this.notificationCount = 0;
        this.params = {};
        this.isVendor = false;
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
        var ref2 = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref('category');
        console.log(ref2);
        //alert(JSON.stringify(ref2));
        //alert(JSON.stringify(catlist));
        ref2.once('value', function (personSnapshott) {
            var caateg = personSnapshott.val();
            //let caateg=JSON.parse(caategu);
            //alert("JSON.stringify(caateg)");
            // alert(JSON.stringify(caateg));
        });
        this.nativeStorage.getItem('userProfile').then(function (user) {
            console.log("user native storagte => ", user);
            _this.af.object("/chatrooms").valueChanges().subscribe(function (value) {
                console.log("snap => ", value);
                var newMsg = false;
                for (var key in value) {
                    var singleRoom = value[key];
                    if (singleRoom.vendor_id == user.uid && singleRoom.hasUnreadMsg) {
                        newMsg = true;
                    }
                }
                if (newMsg) {
                    _this.notificationCount = 1;
                }
                else {
                    _this.notificationCount = 0;
                }
            });
        }).catch(function (err) {
        });
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
        };
        //console.log("catlist");
        //let catlisti=this.params.data;
        //  alert(JSON.stringify(catlisti));
        // console.log(JSON.stringify(catlisti));
        //alert(catlist);
        this.params.events = {
            'onItemClick': function (item) {
                console.log('onItemClick');
            },
            'onRates': function (index) {
                console.log('onRates');
            },
            'onCheckBoxClick': function (item) {
                console.log('onCheckBoxClick');
            },
            'onButtonClick': function (item) {
                console.log('onButtonClick');
            }
        };
    }
    ListPage.prototype.openPopover = function (myEvent, notificationCount) {
        var popover = this.popoverCtrl.create(NotificationPage, {
            notificationCount: notificationCount
        });
        popover.present({
            ev: myEvent
        });
    };
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.nativeStorage.getItem('firebasedatabanners')
            .then(function (data) { return _this.handlebanners(data); }, function (error) { return console.error(error); });
        this.nativeStorage.getItem('firebasedatacategories')
            .then(function (data) { return _this.handlecategories(data); }, function (error) { return console.error(error); });
        this.service.getCategoriesList().on('value', function (snapshot) {
            //this.productsList = [];
            _this.params.data.items = [];
            snapshot.forEach(function (snap) {
                _this.params.data.items.push({
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
        this.service.getRestaurantsList().on('value', function (snapshot) {
            console.log(snapshot.val());
            _this.params.data.items = [];
            //this.saveCategories(snapshot.val());
            snapshot.forEach(function (snap) {
                _this.params.data.items.push({
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
            console.log(_this.params.data.items);
            var restaurants = _this.params.data.items;
            console.log(_this.restaurants);
            _this.restaurants = restaurants;
            //alert("hu")
            // console.log(JSON.stringify(restaurants));
            //alert(JSON.stringify(restaurants));
        });
        // firebase.database().ref("/restaurants")
        this.service.getBanners().on('value', function (snapshot) {
            _this.bannerList = snapshot.val();
            _this.saveBanners(snapshot.val());
        });
        this.service.getSetting().on('value', function (snapshot) {
            //this.values.currency = snapshot.val().currency;
        });
    };
    ListPage.prototype.getProducts = function (id) {
        this.nav.push('ProductsPage', { id: id });
    };
    ListPage.prototype.getCategory = function (id) {
        console.log("inside category");
        console.log(id);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__category_category__["a" /* CategoryPage */], { id: id });
        //this.nav.push(Category);
        // console.log(id);
    };
    ListPage.prototype.saveBanners = function (data) {
        this.nativeStorage.setItem('firebasedatabanners', data)
            .then(function () { return console.log('Saved'); }, function (error) { return console.log('Error'); });
    };
    ListPage.prototype.saveCategories = function (catsnap) {
        this.nativeStorage.setItem('firebasedatacategories', catsnap)
            .then(function () { return console.log('Saved'); }, function (error) { return console.log('Error'); });
    };
    ListPage.prototype.goToCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
    };
    ListPage.prototype.goToMap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__map_map__["a" /* MapPage */]);
    };
    ListPage.prototype.handlebanners = function (data) {
        this.bannerList = data;
        console.log("sdddata");
        console.log(data);
    };
    ListPage.prototype.handlecategories = function (data) {
        this.categoryList = [];
        for (var item in data) {
            this.categoryList.push({
                id: data[item].id,
                name: data[item].name,
                downloadURL: data[item].downloadURL,
                description: data[item].description
            });
        }
    };
    ListPage.prototype.wedevents = function () {
        console.log("jjj");
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__event_event__["a" /* EventPage */]);
    };
    ListPage.prototype.callmyNumber = function () {
        this.callNumber.callNumber("18001010101", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ListPage.prototype.openemail = function () {
        var _this = this;
        this.emailComposer.isAvailable().then(function (available) {
            console.log("yes");
            //if(available) {
            //Now we know we can send
            var email = {
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
            _this.emailComposer.open(email);
            //}
        });
    };
    ListPage.prototype.openChat = function (restaurant) {
        console.log(restaurant);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_14__chat_chat__["a" /* ChatPage */], { restaurant: restaurant });
    };
    ListPage.prototype.addFavourate = function () {
        console.log("hjh");
        this.global.showicon = true;
        var cusid = "LLheFLvL0U0hx55sIpO";
        var ownerid = "eKM6qOJFsAXsrff502GsK6hTJQq2";
        //let cuid = localStorage['uid'];
        var joinDataa = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref().child('/FavourateList/' + ownerid);
        joinDataa.update({
            OwnerId: ownerid,
            CustomerId: cusid,
            FavourateStatus: this.global.showicon,
            sendDate: Date()
        });
    };
    ListPage.prototype.addFavourates = function () {
        console.log("hjh");
        this.global.showicon = false;
        var cusid = "LLheFLvL0U0hx55sIpO";
        var ownerid = "eKM6qOJFsAXsrff502GsK6hTJQq2";
        //let cuid = localStorage['uid'];
        var joinDataa = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref().child('/FavourateList/' + ownerid);
        joinDataa.update({
            OwnerId: ownerid,
            CustomerId: cusid,
            FavourateStatus: this.global.showicon,
            sendDate: Date()
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/list/list.html"*/'<ion-header>\n\n    <ion-navbar color="#9C27B0">\n\n\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Find Vendors Near Me</ion-title>\n\n        \n\n<!--         <ion-buttons right>\n\n            <button *ngIf=\'isVendor\' style="background-color:transparent;" (click)="openPopover($event,notificationCount)">\n\n                            <ion-icon name="notifications"  style="position:relative; font-size:2em;color:white;"  >\n\n                                <span class="bell-icon" *ngIf=\'notificationCount == 1\'>1</span>\n\n                            </ion-icon>\n\n            </button>\n\n        </ion-buttons> -->\n\n          <ion-buttons right class="bttn">\n\n        <button class="bttn"><img src="assets/imgs/map.png" style="height: 32px; width: 32px"></button>\n\n    </ion-buttons>\n\n     \n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <!--\n\n\n\n    <ion-card (click)="wedevents()" *ngFor="let cate of catag | async">\n\n\n\n    <ion-item>\n\n      <ion-avatar item-start   >\n\n        <img src="{{cate.backgroundImage}}">\n\n      </ion-avatar>\n\n\n\n      <ion-grid>\n\n         <h3>{{cate.category}}</h3>\n\n    <ion-row>\n\n      <ion-col col-3 ><h2> ⭐⭐⭐⭐⭐</h2></ion-col>\n\n\n\n\n\n      <ion-col col-6>\n\n    <ion-icon name="pin" style="    padding-left: 53px;\n\n      margin-top: 4px;\n\n      font-size: 13px"></ion-icon>\n\n       9.3 km</ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n    <ion-card-content>\n\n      <h2>{{cate.description}}</h2>\n\n      <p>Openting hours 8 am to 5pm</p>\n\n    </ion-card-content>\n\n\n\n    </ion-item>\n\n\n\n\n\n    <ion-row>\n\n       <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="call"></ion-icon>\n\n         </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="mail"></ion-icon>\n\n         </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="chatboxes"></ion-icon>\n\n\n\n        </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n         <button ion-button icon-start clear small>\n\n          <ion-icon name="heart-outline"></ion-icon>\n\n\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n..-->\n\n\n\n\n\n                <div>        <ion-card>\n\n\n\n            <ion-item no-lines color="light">\n\n                <ion-avatar item-start>\n\n                    <img src="assets/imgs/user.png" (click)="wedevents()">\n\n                </ion-avatar>\n\n\n\n<!--                     <h3>{{restaurant.title}}</h3>\n\n -->                   <div class="head">Location Name </div>\n\n              <ion-row>\n\n<div class="r">\n\n                <div class="row">\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s1">\n\n  </div>\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;"  class="s2">\n\n  </div>\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s3">\n\n  </div>\n\n    <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s4">\n\n  </div>\n\n    <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s5">\n\n  </div>\n\n</div>\n\n</div>\n\n              </ion-row>\n\n                        <ion-row no-lines>\n\n                        <ion-col col-3>\n\n                    <div class="headd">Brackenfell, Cape Town</div>\n\n                  </ion-col>\n\n\n\n                        <ion-col col-6 class="oo">\n\n\n\n    <img src="assets/imgs/lcoation.png" class="pin" style="    padding-left: 110px;\n\n    margin-top: 4px;\n\n    font-size: 14px" ><div class="km">9.3km</div>\n\n                            \n\n                        </ion-col>\n\n                      </ion-row>\n\n\n\n\n\n\n\n            </ion-item>\n\n\n\n\n\n            <ion-row class="roww" no-lines>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="callmyNumber()">\n\n                      <img src="assets/imgs/call.png" class="imgg">    \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="openemail()">\n\n                      <img src="assets/imgs/message.png" class="imgg1">   \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="openChat(restaurant)">\n\n                      <img src="assets/imgs/cha.png" class="imgg2">  \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="addFavourate()"\n\n                            *ngIf="this.global.showicon == false">\n\n                        <img src="assets/imgs/heart.png" class="imgg3">\n\n                    </button>\n\n                    <button ion-button icon-start clear small (click)="addFavourates()"\n\n                            *ngIf="this.global.showicon == true">\n\n                         <img src="assets/imgs/hear.png" class="imgg3">\n\n\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-card> </div>\n\n\n\n\n\n                <div>        <ion-card>\n\n\n\n            <ion-item no-lines color="light">\n\n                <ion-avatar item-start>\n\n                    <img src="assets/imgs/user.png" (click)="wedevents()">\n\n                </ion-avatar>\n\n\n\n<!--                     <h3>{{restaurant.title}}</h3>\n\n -->                   <div class="head">Location Name </div>\n\n              <ion-row>\n\n<div class="r">\n\n                <div class="row">\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s1">\n\n  </div>\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;"  class="s2">\n\n  </div>\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s3">\n\n  </div>\n\n    <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s4">\n\n  </div>\n\n    <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s5">\n\n  </div>\n\n</div>\n\n</div>\n\n              </ion-row>\n\n                        <ion-row no-lines>\n\n                        <ion-col col-3>\n\n                    <div class="headd">Brackenfell, Cape Town</div>\n\n                  </ion-col>\n\n\n\n                        <ion-col col-6 class="oo">\n\n\n\n    <img src="assets/imgs/lcoation.png" class="pin" style="    padding-left: 110px;\n\n    margin-top: 4px;\n\n    font-size: 14px" ><div class="km">9.3km</div>\n\n                            \n\n                        </ion-col>\n\n                      </ion-row>\n\n\n\n\n\n\n\n            </ion-item>\n\n\n\n\n\n            <ion-row class="roww" no-lines>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="callmyNumber()">\n\n                      <img src="assets/imgs/call.png" class="imgg">    \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="openemail()">\n\n                      <img src="assets/imgs/message.png" class="imgg1">   \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="openChat(restaurant)">\n\n                      <img src="assets/imgs/cha.png" class="imgg2">  \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="addFavourate()"\n\n                            *ngIf="this.global.showicon == false">\n\n                        <img src="assets/imgs/heart.png" class="imgg3">\n\n                    </button>\n\n                    <button ion-button icon-start clear small (click)="addFavourates()"\n\n                            *ngIf="this.global.showicon == true">\n\n                         <img src="assets/imgs/hear.png" class="imgg3">\n\n\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-card> </div>\n\n\n\n\n\n                <div>        <ion-card>\n\n\n\n            <ion-item no-lines color="light">\n\n                <ion-avatar item-start>\n\n                    <img src="assets/imgs/user.png" (click)="wedevents()">\n\n                </ion-avatar>\n\n\n\n<!--                     <h3>{{restaurant.title}}</h3>\n\n -->                   <div class="head">Location Name </div>\n\n              <ion-row>\n\n<div class="r">\n\n                <div class="row">\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s1">\n\n  </div>\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;"  class="s2">\n\n  </div>\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s3">\n\n  </div>\n\n    <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s4">\n\n  </div>\n\n    <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s5">\n\n  </div>\n\n</div>\n\n</div>\n\n              </ion-row>\n\n                        <ion-row no-lines>\n\n                        <ion-col col-3>\n\n                    <div class="headd">Brackenfell, Cape Town</div>\n\n                  </ion-col>\n\n\n\n                        <ion-col col-6 class="oo">\n\n\n\n    <img src="assets/imgs/lcoation.png" class="pin" style="    padding-left: 110px;\n\n    margin-top: 4px;\n\n    font-size: 14px" ><div class="km">9.3km</div>\n\n                            \n\n                        </ion-col>\n\n                      </ion-row>\n\n\n\n\n\n\n\n            </ion-item>\n\n\n\n\n\n            <ion-row class="roww" no-lines>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="callmyNumber()">\n\n                      <img src="assets/imgs/call.png" class="imgg">    \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="openemail()">\n\n                      <img src="assets/imgs/message.png" class="imgg1">   \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="openChat(restaurant)">\n\n                      <img src="assets/imgs/cha.png" class="imgg2">  \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="addFavourate()"\n\n                            *ngIf="this.global.showicon == false">\n\n                        <img src="assets/imgs/heart.png" class="imgg3">\n\n                    </button>\n\n                    <button ion-button icon-start clear small (click)="addFavourates()"\n\n                            *ngIf="this.global.showicon == true">\n\n                         <img src="assets/imgs/hear.png" class="imgg3">\n\n\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-card> </div>\n\n\n\n        \n\n                <div>        <ion-card>\n\n\n\n            <ion-item no-lines color="light">\n\n                <ion-avatar item-start>\n\n                    <img src="assets/imgs/user.png" (click)="wedevents()">\n\n                </ion-avatar>\n\n\n\n<!--                     <h3>{{restaurant.title}}</h3>\n\n -->                   <div class="head">Location Name </div>\n\n              <ion-row>\n\n<div class="r">\n\n                <div class="row">\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s1">\n\n  </div>\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;"  class="s2">\n\n  </div>\n\n  <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s3">\n\n  </div>\n\n    <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s4">\n\n  </div>\n\n    <div class="column">\n\n    <img src="assets/imgs/star.png" alt="Snow" style="width:23px; height:23px;" class="s5">\n\n  </div>\n\n</div>\n\n</div>\n\n              </ion-row>\n\n                        <ion-row no-lines>\n\n                        <ion-col col-3>\n\n                    <div class="headd">Brackenfell, Cape Town</div>\n\n                  </ion-col>\n\n\n\n                        <ion-col col-6 class="oo">\n\n\n\n    <img src="assets/imgs/lcoation.png" class="pin" style="    padding-left: 110px;\n\n    margin-top: 4px;\n\n    font-size: 14px" ><div class="km">9.3km</div>\n\n                            \n\n                        </ion-col>\n\n                      </ion-row>\n\n\n\n\n\n\n\n            </ion-item>\n\n\n\n\n\n            <ion-row class="roww" no-lines>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="callmyNumber()">\n\n                      <img src="assets/imgs/call.png" class="imgg">    \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="openemail()">\n\n                      <img src="assets/imgs/message.png" class="imgg1">   \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="openChat(restaurant)">\n\n                      <img src="assets/imgs/cha.png" class="imgg2">  \n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-start clear small (click)="addFavourate()"\n\n                            *ngIf="this.global.showicon == false">\n\n                        <img src="assets/imgs/heart.png" class="imgg3">\n\n                    </button>\n\n                    <button ion-button icon-start clear small (click)="addFavourates()"\n\n                            *ngIf="this.global.showicon == true">\n\n                         <img src="assets/imgs/hear.png" class="imgg3">\n\n\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n        </ion-card> </div>\n\n\n\n    </ion-content>'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_15__providers_global_global__["a" /* GlobalProvider */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* PopoverController */]])
    ], ListPage);
    return ListPage;
}());

var NotificationPage = (function () {
    function NotificationPage(nav, navParams, viewCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.notificationCount = this.navParams.get('notificationCount');
    }
    NotificationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NotificationPage.prototype.GoToMessage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_16__chatting_chatting__["a" /* ChattingPage */], {
            fromList: true
        });
        this.dismiss();
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["n" /* Component */])({
            selector: 'page-notification',
            template: "\n  <ion-content class=\"main-view\">\n    <div class=\"overlay\" (click)=\"dismiss()\"></div>\n    <div class=\"modal_content\" #modalContent>\n      <ion-item borderBottom class='firstItem' *ngIf='notificationCount == 1' (click)=\"GoToMessage()\" text-center>\n        <h2 style='color:#ec3f7a'>You have new messages..</h2>\n      </ion-item>\n      <ion-item borderBottom class='firstItem' *ngIf='notificationCount == 0' (click)=\"dismiss()\" text-center>\n        <h2 style='color:#ec3f7a'>You don't have any messages..</h2>\n      </ion-item>\n      </div>\n  </ion-content>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["z" /* ViewController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the EmojiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EmojiProvider = (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    EmojiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], EmojiProvider);
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Function provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Functions = (function () {
    function Functions(alert) {
        this.alert = alert;
    }
    Functions.prototype.showAlert = function (title, subTitle) {
        var alert = this.alert.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present(alert);
    };
    Functions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], Functions);
    return Functions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_emoji_emoji__ = __webpack_require__(498);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmojiPickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = (function () {
    function EmojiPickerComponent(emojiProvider) {
        this.emojiArr = [];
        this.emojiArr = emojiProvider.getEmojis();
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    EmojiPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'emoji-picker',
            providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/emoji-picker/emoji-picker.html"*/'<div class="emoji-picker">\n\n    <div class="emoji-items">\n\n        <ion-slides pager>\n\n            <ion-slide *ngFor="let items of emojiArr">\n\n        <span class="emoji-item" (click)="setValue(item)" *ngFor="let item of items">\n\n          {{item}}\n\n        </span>\n\n            </ion-slide>\n\n        </ion-slides>\n\n    </div>\n\n</div>'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/emoji-picker/emoji-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_emoji_emoji__["a" /* EmojiProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_products_products__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppearanceAnimationLayout2 = (function () {
    function AppearanceAnimationLayout2(productspage, nav, navParams) {
        this.productspage = productspage;
        this.nav = nav;
        this.navParams = navParams;
        this.animateItems = [];
        this.animateClass = { 'fade-in-right-item': true };
    }
    AppearanceAnimationLayout2.prototype.getProductDetails = function (id) {
        console.log(id);
    };
    AppearanceAnimationLayout2.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    AppearanceAnimationLayout2.prototype.ngOnChanges = function (changes) {
        var that = this;
        that.data = changes['data'].currentValue;
        if (that.data && that.data.items) {
            that.animateItems = [];
            var _loop_1 = function (i) {
                setTimeout(function () {
                    that.animateItems.push(that.data.items[i]);
                }, 200 * i);
            };
            for (var i = 0; i < that.data.items.length; i++) {
                _loop_1(i);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AppearanceAnimationLayout2.prototype, "content", void 0);
    AppearanceAnimationLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'appearance-animation-layout-2',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/list-view/appearance-animation/layout-2/appearance-animation.html"*/'<!--Theme Appearance animation (Fade In Right)-->\n\n<ion-content has-header>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <ion-list no-margin>\n\n                    <ion-item border no-lines [ngClass]="animateClass" *ngFor="let item of data.items; let i = index;" (click)="getProductDetails(item.id)">\n\n                        <ion-avatar item-left>\n\n                            <img [src]="item.image" alt="{{item.title}}" />\n\n                        </ion-avatar>\n\n                        <h2 item-title>{{item.title}} </h2>\n\n						<p>{{item.price}}$</p>\n\n						<!---\n\n                        <ion-icon icon-small item-right (click)="onEvent(\'onFavorite\', item, $event)">\n\n                            <i class="icon" [ngClass]="{\'icon-heart\': item.favorite, \'icon-heart-outline\': !item.favorite}"></i>\n\n                        </ion-icon>\n\n						-->\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/list-view/appearance-animation/layout-2/appearance-animation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_products_products__["a" /* ProductsPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], AppearanceAnimationLayout2);
    return AppearanceAnimationLayout2;
}());

//# sourceMappingURL=appearance-animation-layout-2.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_myorder_myorder__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_order_details_order_details__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppearanceAnimationLayout4 = (function () {
    function AppearanceAnimationLayout4(myorderpage, nav, navParams) {
        this.myorderpage = myorderpage;
        this.nav = nav;
        this.navParams = navParams;
        this.animateItems = [];
        this.animateClass = { 'fade-in-item': true };
    }
    AppearanceAnimationLayout4.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    AppearanceAnimationLayout4.prototype.ngOnChanges = function (changes) {
        var that = this;
        that.data = changes['data'].currentValue;
        if (that.data && that.data.items) {
            that.animateItems = [];
            var _loop_1 = function (i) {
                setTimeout(function () {
                    that.animateItems.push(that.data.items[i]);
                }, 200 * i);
            };
            for (var i = 0; i < that.data.items.length; i++) {
                _loop_1(i);
            }
        }
    };
    AppearanceAnimationLayout4.prototype.getOrderDetails = function (id) {
        //this.myorderpage.getOrderDetails(id);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_order_details_order_details__["a" /* OrderDetailsPage */], { id: id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout4.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AppearanceAnimationLayout4.prototype, "content", void 0);
    AppearanceAnimationLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'appearance-animation-layout-4',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/list-view/appearance-animation/layout-4/appearance-animation.html"*/'<!--Theme Appearance animation (Fade In)-->\n\n<ion-content has-header>\n\n\n\n\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row>\n\n            <ion-col col-12>\n\n	\n\n			\n\n			\n\n                <ion-list no-margin *ngFor="let item of data.items;let i = index;">\n\n                    <ion-item border no-lines [ngClass]="animateClass" (click)="getOrderDetails(item.id)" >\n\n					<h2 item-title style = "background-color:#4AF3A7;"><i style = "color:white;">Order Date: {{item.timeStamp | date}}</i></h2>\n\n					<ion-item no-lines *ngFor="let post of item.items" class="items"  \n\n					style = "background-color:#D1F3E3;">\n\n						\n\n						\n\n						<ion-avatar item-left>\n\n                            <img [src]="post.image" alt="{{post.name}}" />\n\n                        </ion-avatar>\n\n						\n\n							 <h4 item-title>Name: {{post.name}}</h4>\n\n							 <h4 item-title>Price: {{post.price}}$</h4>\n\n							 <h4 item-title>Quantity: {{post.quantity}}</h4>\n\n							 \n\n						 </ion-item>\n\n					\n\n                        <h2  item-title style ="background-color:#D1F3E3;text-align:right;"><b>Status:{{item.status}}</b></h2>\n\n						\n\n						 <h2  item-title style ="background-color:#D1F3E3;text-align:right;"><b>Total:{{item.total}}$</b></h2>\n\n         \n\n         <hr style="border-height: 5px;">\n\n		 <!---\n\n                        <h2 item-title>{{item.title}}</h2>\n\n                        \n\n						-->\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/list-view/appearance-animation/layout-4/appearance-animation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_myorder_myorder__["a" /* MyorderPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], AppearanceAnimationLayout4);
    return AppearanceAnimationLayout4;
}());

//# sourceMappingURL=appearance-animation-layout-4.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_list__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpandableLayout2 = (function () {
    function ExpandableLayout2(listpage, nav, navParams) {
        this.listpage = listpage;
        this.nav = nav;
        this.navParams = navParams;
        this.form = {};
    }
    ExpandableLayout2.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ExpandableLayout2.prototype.onStarClass = function (items, index, e) {
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
    ;
    ExpandableLayout2.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ExpandableLayout2.prototype.isGroupShown = function (group) {
        return group.show;
    };
    ExpandableLayout2.prototype.getCategories = function (id) {
        //this.form = id;
        console.log("inside");
        //this.nav.push('CategoryPage', {id:id});
        this.listpage.getCategory(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ExpandableLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ExpandableLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ExpandableLayout2.prototype, "content", void 0);
    ExpandableLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'expandable-layout-2',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/list-view/expandable/layout-2/expandable.html"*/'<!-- Themes Expandable - Full image with CTA -->\n\n<ion-content has-header>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col col-12 no-padding no-margin>\n\n        <ion-list>\n\n          <ul no-margin no-padding class="collapsible">\n\n            <li margin *ngFor="let group of data.items;">\n\n              <!-- Expandable Full image with CTA Header-->\n\n              <div class="collapsible-header" (click)="toggleGroup(group)">\n\n                <ion-item no-margin padding no-lines background-size\n\n                [ngStyle]="{\'background-image\': \'url(\' + group.backgroundImage + \')\'}">\n\n                  <!-- Subtitle Card -->\n\n                  <h3 ion-text color="light" text-wrap text-capitalize item-subtitle>{{group.subtitle}}</h3>\n\n                  <!-- Title Card -->\n\n                  <h1 ion-text color="light" text-wrap header-title>{{group.title}}</h1>\n\n                  <!-- Icon And Text For Read More-->\n\n                  <div read-more>\n\n                    <ion-icon icon-medium float-left name="{{group.icon}}"></ion-icon>\n\n                    <span span-medium>{{group.iconText}}</span>\n\n                  </div>\n\n                </ion-item>\n\n              </div>\n\n              <!-- Expandable Full image with CTA Body -->\n\n              <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)">\n\n                <ion-item text-wrap no-lines>\n\n                  <!-- Icon Rating Star -->\n\n				  <!--\n\n                  <ion-icon float-left *ngFor="let item of group.expandItems.iconsStars;let i = index"\n\n                  (click)="onStarClass(group.expandItems.iconsStars, i, $event);">\n\n                    <i icon-small *ngIf="item.isActive" class="icon {{item.iconActive}}"></i>\n\n                    <i icon-small *ngIf="!item.isActive" class="icon {{item.iconInactive}}"></i>\n\n                  </ion-icon>\n\n				  -->\n\n                  <!-- Reviews Star -->\n\n				  <!---\n\n                  <span span-small>{{group.expandItems.reviews}}</span>\n\n				  --->\n\n				  <!--\n\n                  <div (click)="onEvent(\'onItemClick\', group, $event)">\n\n				  --->\n\n				  <div (click)="getCategories(group.id)">\n\n                    <!-- Titile -->\n\n                    <h2 margin-top subitem-title>{{group.title}}</h2>\n\n                    <!-- Description -->\n\n                    <p subitem-subtitle>{{group.description}}</p>\n\n                  </div>\n\n\n\n                </ion-item>\n\n              </div>\n\n            </li>\n\n          </ul>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/list-view/expandable/layout-2/expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ExpandableLayout2);
    return ExpandableLayout2;
}());

//# sourceMappingURL=expandable-layout-2.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCardLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleCardLayout1 = (function () {
    function GoogleCardLayout1() {
        this.slider = {};
    }
    GoogleCardLayout1.prototype.slideHasChanged = function (slider, index) {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            }
            else {
                this.data.splice(index, 1);
            }
        }
    };
    GoogleCardLayout1.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    GoogleCardLayout1.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], GoogleCardLayout1.prototype, "content", void 0);
    GoogleCardLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'google-card-layout-1',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/list-view/google-card/layout-1/google-card.html"*/'<!--Theme Google Card - Full Image Cards-->\n\n<ion-grid *ngIf="data != null">\n\n    <ion-row card-background-page>\n\n        <ion-col no-padding col-12 col-md-12 col-lg-6 *ngFor="let item of data.items;let i = index">\n\n            <ion-card background-size text-left (click)="onEvent(\'onItemClick\', item.title, $event)"\n\n            [ngStyle]="{\'background-image\': \'url(\' + item.backgroundImage + \')\'}">\n\n                <!-- Card Title-->\n\n                <div text-wrap card-title>{{item.title}}</div>\n\n                <!-- Card Subtitle-->\n\n                <div text-wrap card-subtitle>{{item.info}}</div>\n\n            </ion-card>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/list-view/google-card/layout-1/google-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleCardLayout1);
    return GoogleCardLayout1;
}());

//# sourceMappingURL=google-card-layout-1.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = (function () {
    function MapPage(navCtrl, navParams, geo, platform, locationTracker, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.platform = platform;
        this.locationTracker = locationTracker;
        this.service = service;
        var that = this;
        var map;
        var infoWindow;
        var beachMarker;
        var image;
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.geo.getCurrentPosition(options).then(function (resp) {
            /***
            alert("success");
            alert(resp.coords.latitude);
            alert(resp.coords.longitude);


            */
            var uids = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid;
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/users').child(uids).update({
                lat: resp.coords.latitude,
                lng: resp.coords.longitude,
                userTimeStamp: resp.timestamp
            });
        }).catch(function () {
            console.log("Error to get location");
        });
        that.platform.ready().then(function () {
            var options = {
                timeout: 5000
            };
        });
        //this.start();
        setTimeout(function () {
            that.googleMap();
        }, 2000);
    }
    MapPage.prototype.start = function () {
        this.locationTracker.startTracking();
    };
    MapPage.prototype.stop = function () {
        this.locationTracker.stopTracking();
    };
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    MapPage.prototype.googleMap = function () {
        var _this = this;
        var map;
        var infoWindow;
        var beachMarker;
        var image;
        // let markers : any;
        var uid = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().currentUser.uid;
        console.log("service");
        console.log(uid);
        this.service.getRestaurantUserProfile(uid).on('value', function (snapshot) {
            _this.userList = snapshot.val();
        });
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: this.userList.lat, lng: this.userList.lng },
            zoom: 6
        });
        image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        beachMarker = new google.maps.Marker({
            position: { lat: this.userList.lat, lng: this.userList.lng },
            map: map,
            icon: image
        });
        var posUser = {
            lat: this.userList.lat,
            lng: this.userList.lng
        };
        infoWindow = new google.maps.InfoWindow;
        infoWindow.setPosition(posUser);
        infoWindow.setContent('Thats2 your Location.');
        infoWindow.open(map);
        map.setCenter(posUser);
        // Additional Markers //
        var markers = [];
        var distance = [];
        // infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info, keys) {
            //this.service.getDistanceRestaurant(info.key).on('value',snapshots =>{
            //this.distanceRestaurant = snapshots.val();
            //console.log(this.distanceRestaurant);
            console.log(info);
            var userLists;
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().onAuthStateChanged(function (user) {
                if (user) {
                    uid = user.uid;
                    console.log(uid);
                    console.log(info.key);
                    //this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
                    __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/cord').child(uid).child(keys).child("item_dis").on('value', function (snapshot) {
                        console.log(snapshot.val());
                        var myIcon = new google.maps.MarkerImage("assets/images/icons/" + info.img, null, null, null, new google.maps.Size(30, 30));
                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(info.lat, info.long),
                            map: map,
                            animation: google.maps.Animation.DROP,
                            title: info.title,
                            icon: myIcon,
                        });
                        marker.content = '<div class="infoWindowContent">' + snapshot.val() + '</div>';
                        google.maps.event.addListener(marker, 'click', function () {
                            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                            infoWindow.open(map, marker);
                        });
                        markers.push(marker);
                    });
                }
            });
            //});
        };
        this.service.getRestaurantsList()
            .on('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
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
                createMarker(childSnapshot.val(), childSnapshot.key);
                console.log(childSnapshot.val().lat);
                console.log(childSnapshot.val().long);
                //console.log(childSnapshot.val().title);
                distance.push(calcDistance(childSnapshot.val().lat, childSnapshot.val().long, childSnapshot.key) + " kilometers away");
            });
        });
        function calcDistance(destination, destination1, res_id) {
            var userLists;
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().onAuthStateChanged(function (user) {
                if (user) {
                    uid = user.uid;
                    //this.service.getRestaurantUserProfile(uid).on('value', snapshot =>{
                    __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/users').child(uid).on('value', function (snapshot) {
                        var cord = snapshot.val();
                        console.log(cord.lat);
                        console.log(cord.lng);
                        var p1 = new google.maps.LatLng(destination, destination1);
                        var p2 = new google.maps.LatLng(cord.lat, cord.lng);
                        console.log("distance is " + google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000);
                        var distanceBetween = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2)) / 1000;
                        console.log(distanceBetween);
                        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.database().ref('/cord').child(uid).child(res_id).update({
                            item_dis: distanceBetween.toFixed(2) + "km away"
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
    };
    MapPage.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/map/map.html"*/'<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n  \n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n  \n\n    <ion-title>Geolocation2</ion-title>\n\n	\n\n	\n\n			<ion-buttons right>\n\n        <button style="background-color:white;" >\n\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<div id = "map">\n\n\n\n</div>\n\n<!----\n\n<h3>Current Latitude: {{locationTracker.lat}}</h3>\n\n  <h3>Current Longitude: {{locationTracker.lng}}</h3>\n\n  <h3>Current Longitude: {{locationTracker.timestamp}}</h3>\n\n  --->\n\n  <button ion-button full primary (click)="start()">Track My Location</button>\n\n  <button ion-button full primary (click)="stop()">Stop Tracking Location</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_category_category__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SwipeToDismissLayout2 = (function () {
    function SwipeToDismissLayout2(categorypage, nav, navParams) {
        var _this = this;
        this.categorypage = categorypage;
        this.nav = nav;
        this.navParams = navParams;
        this.undo = function (slidingItem) {
            slidingItem.close();
        };
        this.delete = function (item) {
            var index = _this.data.items.indexOf(item);
            if (index > -1) {
                _this.data.items.splice(index, 1);
            }
        };
    }
    SwipeToDismissLayout2.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    SwipeToDismissLayout2.prototype.getItems = function (id) {
        //this.form = id;
        console.log("inside");
        //this.nav.push('CategoryPage', {id:id});
        this.categorypage.getItems(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], SwipeToDismissLayout2.prototype, "content", void 0);
    SwipeToDismissLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'swipe-to-dismiss-layout-2',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss.html"*/'<!-- Themes Swipe To Dismiss - Products + CTA -->\n\n<ion-grid no-padding *ngIf="data != null">\n\n  <ion-row>\n\n    <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n\n      <!-- Header top Swipe To Dismiss Products + CTA -->\n\n\n\n      <!-- Content -->\n\n      <ion-list no-margin>\n\n        <ion-item-sliding *ngFor="let item of data.items" #slidingItem>\n\n          <ion-item border no-lines (click)="getItems(item.id)">\n\n            <!-- Images -->\n\n            <ion-thumbnail item-start>\n\n              <img src="{{item.image}}">\n\n            </ion-thumbnail>\n\n            <!-- Title -->\n\n            <h2 item-title>{{item.title}}</h2>\n\n            <!-- Subtitle -->\n\n            <p item-subtitle text-wrap>{{item.subtitle}}</p>\n\n			<p item-subtitle text-wrap>{{item.distance}}</p>\n\n            <!-- Badge -->\n\n            <ion-badge text-uppercase class="badge-light" item-end>{{item.ionBadge}}</ion-badge>\n\n			\n\n          </ion-item>\n\n          <!--Action Button-->\n\n		  <!---\n\n          <ion-item-options no-lines>\n\n            \n\n            <button ion-button text-capitalize (click)="delete(item)">\n\n              {{item.delate}}\n\n            </button>\n\n          </ion-item-options>\n\n		  -->\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_category_category__["a" /* CategoryPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], SwipeToDismissLayout2);
    return SwipeToDismissLayout2;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-2.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_wishlist_wishlist__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_values__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SwipeToDismissLayout3 = (function () {
    function SwipeToDismissLayout3(wishlist, nav, navParams, values) {
        var _this = this;
        this.wishlist = wishlist;
        this.nav = nav;
        this.navParams = navParams;
        this.values = values;
        this.headerImage = "";
        this.favorite = false;
        this.undo = function (slidingItem) {
            slidingItem.close();
        };
        this.delete = function (item) {
            console.log(item);
            _this.wishlist.removeFavItem(item);
            /**
            let index = this.data.items.indexOf(item);
            if (index > -1) {
                this.data.items.splice(index, 1);
            }
            */
        };
    }
    SwipeToDismissLayout3.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    SwipeToDismissLayout3.prototype.goToItem = function (item) {
        this.wishlist.goToItem(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], SwipeToDismissLayout3.prototype, "content", void 0);
    SwipeToDismissLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'swipe-to-dismiss-layout-3',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss.html"*/'<!-- Themes Swipe To Dismiss - Full width image -->\n\n<ion-grid no-padding *ngIf="data != null">\n\n  <ion-row>\n\n    <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-self-end>\n\n      <ion-list padding no-margin>\n\n        <ion-item-sliding margin-bottom *ngFor="let item of data.items" #slidingItem>\n\n		<!--\n\n          <ion-item no-lines background-size (click)="onEvent(\'onItemClick\', item.title, $event)"\n\n		  -->\n\n		  <ion-item no-lines background-size (click)="goToItem(item)" [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}">\n\n            <div title-block>\n\n              <!-- Subtitle -->\n\n              <p item-subtitle>{{item.subtitle}}</p>\n\n              <!-- Title -->\n\n              <h1 header-title text-wrap>{{item.title}}</h1>\n\n            </div>\n\n          </ion-item>\n\n          <!---Action Button-->\n\n          <ion-item-options>\n\n            <button ion-button text-capitalize transparent padding (click)="delete(item)">\n\n              {{item.delate}}\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_wishlist_wishlist__["a" /* WishlistPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_values__["a" /* Values */]])
    ], SwipeToDismissLayout3);
    return SwipeToDismissLayout3;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-3.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginLayout1 = (function () {
    function LoginLayout1(nav, navParams, homepage) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.homepage = homepage;
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Register Account";
        this.HeaderText = "Login";
        this.onEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password
                });
            }
        };
        this.form = {};
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log(user);
                _this.currentUser = user;
                console.log("New user", _this.currentUser);
                _this.homepage.goToList();
                //this.navs.push(ListPage,this.currentUser);
                //console.log(this.values.isLoggedIn);
                //this.service.goToList();
                //this.values.isLoggedIn = true;
                //this.nav.setRoot(ListPage);
                //this.nav.setRoot(ListPage);
                //this.nav.setRoot(ListPage);
                //this.nav.push(ListPage, this.currentUser);
            }
            else {
                // No user is signed in.
                console.log("loggedd out none");
            }
        });
    }
    LoginLayout1.prototype.login = function () {
        console.log(this.type);
        console.log(this.form.email);
        console.log(this.form.password);
        this.homepage.login(this.form.email, this.form.password, this.type);
    };
    LoginLayout1.prototype.facebookLogin = function () {
        console.log("Facebook login");
        this.homepage.facebookLogin();
    };
    LoginLayout1.prototype.goToRegister = function () {
        this.homepage.goToRegister();
    };
    LoginLayout1.prototype.goToFrogetPage = function () {
        debugger;
        this.homepage.forgotten();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout1.prototype, "events", void 0);
    LoginLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-layout-1',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/login/layout-1/login.html"*/'<!-- Themes Login + logo 2 -->\n\n<ion-content has-header style ="background-image:url(\'assets/images/logo/sky.jpg\')">\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row padding-horizontal align-self-center>\n\n      <ion-col align-self-end col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!---Logo-->\n\n\n\n        <!---Logo Subtitle-->\n\n        <h2 login-subtitle no-margin>{{data.subtitle}}</h2>\n\n        <!---Logo Title\n\n        <h1 ion-text color="accent" login-title no-margin>{{data.title}}</h1>\n\n      -->\n\n      \n\n      </ion-col>\n\n\n\n      <!--<ion-list radio-group   [(ngModel)]="type">-->\n\n        <!--<h2> I Want to Login As </h2>-->\n\n<!--<ion-item>-->\n\n    <!--<ion-label>Owner</ion-label>-->\n\n    <!--<ion-radio  value="Owner" checked></ion-radio>-->\n\n  <!--</ion-item>-->\n\n\n\n  <!--<ion-item>-->\n\n    <!--<ion-label>Customer</ion-label>-->\n\n    <!--<ion-radio value="Customer"></ion-radio>-->\n\n  <!--</ion-item>-->\n\n\n\n\n\n<!--</ion-list>-->\n\n      <ion-col align-self-start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!---Input field username-->\n\n\n\n        <ion-item no-padding margin-top style = "background:none;">\n\n          <ion-label ><ion-icon ios="ios-person" md="md-person"></ion-icon></ion-label>\n\n\n\n          <ion-label color="dark" floating="top">  {{data.labelUsername}}</ion-label>\n\n          <ion-input required type="text" placeholder="{{data.username}}" [(ngModel)]="form.email" name = "email"></ion-input>\n\n        </ion-item>\n\n        <!---Input field password-->\n\n        <ion-item no-padding style = "background:none;">\n\n          <ion-label ><ion-icon ios="ios-unlock" md="md-unlock"></ion-icon></ion-label>\n\n\n\n          <ion-label color="dark" floating> {{data.labelPassword}}</ion-label>\n\n          <ion-input required type="password" placeholder="{{data.password}}" [(ngModel)]="form.password" name = "password"></ion-input>\n\n\n\n        </ion-item>\n\n        <button ion-button  style="float: right;" clear (click)="goToFrogetPage()">{{data.forgotPassword}}</button>\n\n      </ion-col>\n\n\n\n      <!---Share Section-->\n\n      <ion-col align-self-end bottom-form col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!---Login button-->\n\n\n\n		<button  ion-button default-button full text-capitalize (click)="login()">{{data.login}}</button>\n\n        <!---Facebook button-->\n\n        \n\n      </ion-col>\n\n      <ion-col col-6 col-sm-6 col-md-6>\n\n        <p text-right>Don\'t have account?</p>\n\n      </ion-col>\n\n      <ion-col col-6 col-sm-6 col-md-6>\n\n        <button ion-button button-clear clear text-capitalize (click)="goToRegister()">{{data.register}}</button>\n\n      </ion-col>\n\n      <!---End Share Section-->\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/login/layout-1/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */]])
    ], LoginLayout1);
    return LoginLayout1;
}());

//# sourceMappingURL=login-layout-1.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { CategoryPage } from '../../../pages/category/category';
//import { ProductDetailsPage } from '../../../pages/product-details/product-details';


var ParallaxLayout2 = (function () {
    function ParallaxLayout2(nav, navParams, values) {
        this.nav = nav;
        this.navParams = navParams;
        this.values = values;
        this.headerImage = "";
        //hjhjkhkjhk
        //fsdjkfajalsjfklasd
        this.favorite = false;
    }
    ParallaxLayout2.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ParallaxLayout2.prototype.ngOnChanges = function (changes) {
        if (changes.data && changes.data.currentValue) {
            this.headerImage = changes.data.currentValue.headerImage;
        }
        this.subscribeToIonScroll();
    };
    ParallaxLayout2.prototype.ngAfterViewInit = function () {
        this.subscribeToIonScroll();
    };
    ParallaxLayout2.prototype.isClassActive = function () {
        return this.active;
    };
    ParallaxLayout2.prototype.subscribeToIonScroll = function () {
        var _this = this;
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe(function (d) {
                if (d.scrollTop < 200) {
                    _this.active = false;
                    return;
                }
                _this.active = true;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ParallaxLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ParallaxLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ParallaxLayout2.prototype, "content", void 0);
    ParallaxLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'parallax-layout-2',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/parallax/layout-2/parallax.html"*/'<!--- Theme Parallax - Profile -->\n\n\n\n<ion-header header-ios>\n\n  <ion-navbar transparent [ngClass]="{\'active\':isClassActive()}">\n\n    <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>My profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- Content -->\n\n<ion-content elastic-header>\n\n<!--\n\n  <div padding background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n\n    <ion-thumbnail *ngIf="data != null">\n\n      <img [src]="data[0].avatar" />\n\n    </ion-thumbnail>\n\n	-->\n\n    <!-- Parallx Title -->\n\n	<!--\n\n    <h2 text-center parallax-title *ngIf="data != null">{{data[0].title}}</h2>\n\n	-->\n\n    <!-- Parallx Subtitle -->\n\n	<!--\n\n    <h3 text-center parallax-subtitle *ngIf="data != null">{{data[0].subtitle}}</h3>\n\n  </div>\n\n  -->\n\n  \n\n  <!--\n\n  <ion-list *ngIf="data != null">\n\n    <ion-item border no-lines *ngFor="let item of data.items;let i = index" (click)="onEvent(\'onItemClick\', item)">\n\n      <ion-avatar item-start>\n\n        <img [src]="item.avatar" />\n\n      </ion-avatar>\n\n      <h2 item-title>{{item.title}}</h2>\n\n      <h3 item-subtitle text-wrap>{{item.subtitle}}</h3>\n\n      <button text-capitalize button-clear ion-button item-end clear>{{item.button}}</button>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n  -->\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/parallax/layout-2/parallax.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_values__["a" /* Values */]])
    ], ParallaxLayout2);
    return ParallaxLayout2;
}());

//# sourceMappingURL=parallax-layout-2.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_product_details_product_details__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParallaxLayout3 = (function () {
    function ParallaxLayout3(productdetailspage, nav, navParams, values) {
        var _this = this;
        this.productdetailspage = productdetailspage;
        this.nav = nav;
        this.navParams = navParams;
        this.values = values;
        this.headerImage = "";
        this.favorite = false;
        console.log("Constructor");
        this.getFavoriteItem();
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/users').child(user.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.userProfiles = snapshot.val();
                        _this.userProfilesKey = user.uid;
                    }
                });
            }
        });
    }
    ParallaxLayout3.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ParallaxLayout3.prototype.ngOnChanges = function (changes) {
        if (changes.data && changes.data.currentValue) {
            this.headerImage = changes.data.currentValue.headerImage;
        }
        this.subscribeToIonScroll();
    };
    ParallaxLayout3.prototype.ngAfterViewInit = function () {
        this.subscribeToIonScroll();
    };
    ParallaxLayout3.prototype.isClassActive = function () {
        return this.active;
    };
    ParallaxLayout3.prototype.subscribeToIonScroll = function () {
        var _this = this;
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe(function (d) {
                if (d.scrollTop < 200) {
                    _this.active = false;
                    return;
                }
                _this.active = true;
            });
        }
    };
    ParallaxLayout3.prototype.addToCart = function (name, price, image) {
        console.log("inside");
        console.log(name);
        console.log(price);
        console.log(image);
        //this.nav.push('CategoryPage', {id:id});
        this.productdetailspage.addToCart(name, price, image);
    };
    ParallaxLayout3.prototype.getFavoriteItem = function () {
        var _this = this;
        this.productdetailspage.getFavoriteItem().on('value', function (snapshot) {
            //this.params.data.items = snapshot.val();
            if (snapshot.val() == null) {
                _this.favorite = false;
                console.log(_this.favorite);
            }
            else {
                console.log(snapshot.val());
                _this.favorite = true;
            }
            //this.params.data = snapshot.val();
            //console.log(this.params.data);
            //console.log(this.productDetails);
        });
        //this.service.getItemDetail(this.navParams.get('id'))
    };
    ParallaxLayout3.prototype.addToFavourite = function (data) {
        console.log("inside favourite");
        console.log(data);
        console.log(this.favorite);
        console.log("false");
        this.productdetailspage.addToFavourite(data);
        this.favorite = true;
    };
    ParallaxLayout3.prototype.removeFavourite = function () {
        console.log("remove");
        this.productdetailspage.removeFavourite();
        this.favorite = false;
    };
    ParallaxLayout3.prototype.goToCart = function () {
        this.productdetailspage.goToCart();
        //this.nav.push("CartPage");
    };
    ParallaxLayout3.prototype.goToMap = function (data) {
        this.productdetailspage.goToMap(data);
    };
    ParallaxLayout3.prototype.writeComment = function (data) {
        this.productdetailspage.writeComment(data);
    };
    ParallaxLayout3.prototype.call = function (data) {
        this.productdetailspage.call(data);
    };
    ParallaxLayout3.prototype.deleteComment = function (data, id) {
        this.productdetailspage.deleteComment(data, id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ParallaxLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ParallaxLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ParallaxLayout3.prototype, "content", void 0);
    ParallaxLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'parallax-layout-3',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/parallax/layout-3/parallax.html"*/'<!--- Theme Parallax - Product -->\n\n<ion-header header-ios>\n\n  <ion-navbar transparent [ngClass]="{\'active\':isClassActive()}">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="data[0] != null" text-left>{{data[0].title}}</ion-title>\n\n	\n\n		<ion-buttons right>\n\n        <button style="background-color:white;" (click)="goToMap(data[0])">\n\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n\n							<span></span>\n\n						</ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content elastic-header>\n\n  <!-- Parallax Big Image -->\n\n  <ion-item no-lines background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + data[0].firebase_url + \')\'}">\n\n  \n\n  \n\n  <!--\n\n		<ion-icon icon-big item-right color="primary" (click)="addToFavourite(data[0])"  style="padding-right:25px;padding-top:120px;">\n\n                            <i class="icon" [ngClass]="{\'icon-heart\': data[0].favorite, \'icon-heart-outline\': !data[0].favorite}"></i>\n\n            </ion-icon>\n\n			\n\n			\n\n			\n\n			-->\n\n			\n\n			<ion-icon icon-big item-right name="call" color = "primary" (click)="call(data[0])" style="position:relative; font-size:2em;padding-top:120px;"  >\n\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:15px !important"></span>\n\n						</ion-icon>\n\n			\n\n			<ion-icon icon-big item-right name="map" color = "primary" (click)="goToMap(data[0])" style="position:relative; font-size:2em;padding-top:120px;"  >\n\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:15px !important"></span>\n\n						</ion-icon>\n\n					\n\n					\n\n						<ion-icon icon-big item-right name="chatbubbles" color = "primary" (click)="writeComment(data[0])" style="position:relative; font-size:2em;padding-top:120px;"  >\n\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:15px !important"></span>\n\n						</ion-icon>	\n\n			 \n\n	<ion-icon icon-big item-right color="primary" (click)="addToFavourite(data[0])"  style="padding-top:120px;">\n\n                   <i [ngClass]="{\'icon-heart-outline\': !favorite}" ></i>\n\n				   \n\n	</ion-icon>\n\n	\n\n	<ion-icon icon-big item-right color="primary" (click)="removeFavourite()"  style="padding-top:120px;">\n\n                  <i [ngClass]="{\'icon-heart\': favorite}" ></i>\n\n	</ion-icon>\n\n	\n\n\n\n	\n\n\n\n	\n\n	\n\n				\n\n						<!----\n\n    <button ion-fixed item-end ion-button color="primary" button-action-shit *ngIf="data[0] != null" (click)="onEvent(\'onShare\', data[0])">\n\n		<ion-icon icon-small item-right (click)="onEvent(\'onFavorite\', data[0], $event)">\n\n                            <i class="icon" [ngClass]="{\'icon-heart\': data[0].favorite, \'icon-heart-outline\': !data[0].favorite}"></i>\n\n                        </ion-icon>\n\n	\n\n	\n\n        <ion-icon  name="heart"></ion-icon>\n\n		\n\n      </button>\n\n	  -->\n\n  </ion-item>\n\n  <!--Content-->\n\n  <ion-grid no-padding *ngIf="data[0] != null">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <ion-list no-margin>\n\n          <ion-item-group (click)="onEvent(\'onItemClick\', data[0])">\n\n            <ion-item-divider no-lines>\n\n              <!-- Name Category-->\n\n            <!--  <span new-category margin-top text-uppercase>{{data[0].name}}</span> --->\n\n              <!-- Parallax Title -->\n\n              <h2 new-category text-uppercase>{{data[0].title}}</h2>\n\n              <!-- Parallax Subtitle -->\n\n              <!---<h3 parallax-subtitle text-wrap>{{data[0].description}}</h3>--->\n\n		\n\n              	<ion-badge style ="align:right;" item-end text-uppercase class="badge-dark" (click)="onEvent(\'onProceed\', data[0], $event)">{{data[0].distance}}</ion-badge>\n\n            </ion-item-divider>\n\n			\n\n			\n\n            <!-- Description Products -->\n\n            <ion-item border no-lines no-margin>\n\n              <p parallax-description text-wrap>{{data[0].description}}</p>\n\n			  \n\n			  <p></p>\n\n			  <p parallax-description text-wrap><b>Phone number: </b>{{data[0].phonenumber}}</p>\n\n			  \n\n			  <p></p>\n\n			  <p parallax-description text-wrap><b>Address: </b>{{data[0].address}}</p>\n\n			  	  \n\n			\n\n			  \n\n            </ion-item>\n\n			  \n\n			\n\n		\n\n			\n\n			<ion-item no-lines *ngFor="let post of data.comments" class="items"  \n\n					style = "background-color:#D1F3E3;">\n\n						\n\n						<!--\n\n						 <ion-avatar item-start>\n\n							  <ion-list style="margin:15px 0 0 0;font-family: Arial ">\n\n							  <div *ngIf="!userProfiles.photoURL" class="profile-image">\n\n								<img src="{{values.avatar}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n\n							 </div>\n\n							 <div *ngIf="userProfiles.photoURL" class="profile-image">\n\n								<img src="{{userProfiles.photoURL}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n\n							 </div>\n\n							 \n\n						  </ion-list>\n\n						  </ion-avatar>\n\n						  -->\n\n						\n\n						<ion-avatar item-left>\n\n                            <img [src]="post.photo_url" alt="{{post.user_name}}" />\n\n                        </ion-avatar>\n\n						\n\n						\n\n						\n\n							 <h4 item-title>{{post.user_name}}</h4>\n\n							 <h4 item-title>{{post.comment}}</h4>\n\n							 \n\n	\n\n						<ion-icon name="trash" *ngIf="post.user_id == userProfilesKey" color = "primary" (click)="deleteComment(data[0],post.id)" style="position:relative; font-size:2em;"  >\n\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:15px !important"></span>\n\n						</ion-icon>\n\n							 \n\n							 \n\n						 </ion-item>\n\n			\n\n			\n\n          \n\n          </ion-item-group>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer no-shadow>\n\n	<ion-toolbar position="bottom">\n\n		<button ion-button full (click)="goToMap(data[0])">Find Location</button>\n\n	</ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/parallax/layout-3/parallax.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_product_details_product_details__["a" /* ProductDetailsPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_values__["a" /* Values */]])
    ], ParallaxLayout3);
    return ParallaxLayout3;
}());

//# sourceMappingURL=parallax-layout-3.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxLayout4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParallaxLayout4 = (function () {
    function ParallaxLayout4() {
        this.headerImage = "";
    }
    ParallaxLayout4.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ParallaxLayout4.prototype.onStarClass = function (items, index, e) {
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
    ParallaxLayout4.prototype.ngOnChanges = function (changes) {
        if (changes.data && changes.data.currentValue) {
            this.headerImage = changes.data.currentValue.headerImage;
        }
        this.subscribeToIonScroll();
    };
    ParallaxLayout4.prototype.ngAfterViewInit = function () {
        this.subscribeToIonScroll();
    };
    ParallaxLayout4.prototype.isClassActive = function () {
        return this.active;
    };
    ParallaxLayout4.prototype.subscribeToIonScroll = function () {
        var _this = this;
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe(function (d) {
                if (d.scrollTop < 200) {
                    _this.active = false;
                    return;
                }
                _this.active = true;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ParallaxLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ParallaxLayout4.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ParallaxLayout4.prototype, "content", void 0);
    ParallaxLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'parallax-layout-4',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/parallax/layout-4/parallax.html"*/'<!--- Theme Parallax - News -->\n\n<ion-header header-ios>\n\n  <ion-navbar transparent [ngClass]="{\'active\':isClassActive()}">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="data != null" text-left>{{data.headerTitle}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!--- Header Big Image-->\n\n<ion-content elastic-header>\n\n  <ion-item no-lines background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n\n    <div title-block *ngIf="data != null">\n\n      <!--- Category -->\n\n      <span new-category>{{data.category}}</span>\n\n      <!--- Parallax Title -->\n\n      <h1 parallax-title text-wrap>{{data.title}}</h1>\n\n    </div>\n\n  </ion-item>\n\n  <ion-item-group *ngIf="data != null">\n\n    <ion-item-divider border no-lines>\n\n      <!--- Avatar -->\n\n      <ion-avatar item-start>\n\n        <img [src]="data.avatar" />\n\n      </ion-avatar>\n\n      <!-- Avatar Title -->\n\n      <h2 item-subtitle>{{data.subtitle}}</h2>\n\n      <!--- Button Share-->\n\n      <button item-end ion-button color="primary" button-action-shit (click)="onEvent(\'onShare\', data)">\n\n        <ion-icon name="{{data.shareIcon}}"></ion-icon>\n\n      </button>\n\n    </ion-item-divider>\n\n    <!-- Content -->\n\n    <ion-item no-margin no-lines *ngFor="let item of data.items;let i = index">\n\n      <!-- Content Title-->\n\n      <h2 parallax-subtitle margin-bottom text-wrap>{{item.title}}</h2>\n\n      <!-- Content Description-->\n\n      <p parallax-description text-wrap>{{item.subtitle}}</p>\n\n    </ion-item>\n\n  </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/parallax/layout-4/parallax.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ParallaxLayout4);
    return ParallaxLayout4;
}());

//# sourceMappingURL=parallax-layout-4.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(561);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_category_category__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_products_products__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_product_details_product_details__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_address_address__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_register_register__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_myorder_myorder__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_order_details_order_details__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_my_profile_my_profile__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_wishlist_wishlist__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_map_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_itemmap_itemmap__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_writecomment_writecomment__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_youtube_youtube__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_event_event__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_checklist_checklist__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_guestlist_guestlist__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_youtube_youtube__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_chatting_chatting__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_email_composer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_checklistbox_checklistbox__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ngx_translate_core__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_findbycategory_findbycategory__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ngx_translate_http_loader__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_admob_free__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_config__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_wp_service__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_functions_functions__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_social_sharing__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_push__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_paypal__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_stripe__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_native_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_login_layout_1_login_layout_1__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_list_view_google_card_layout_1_google_card_layout_1__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_list_view_expandable_layout_2_expandable_layout_2__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_list_view_appearance_animation_layout_2_appearance_animation_layout_2__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_list_view_swipe_to_dismiss_layout_2_swipe_to_dismiss_layout_2__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_list_view_swipe_to_dismiss_layout_3_swipe_to_dismiss_layout_3__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_parallax_layout_3_parallax_layout_3__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_parallax_layout_4_parallax_layout_4__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_list_view_appearance_animation_layout_4_appearance_animation_layout_4__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_parallax_layout_2_parallax_layout_2__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_geolocation__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ionic_native_background_geolocation__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__providers_location_tracker_location_tracker__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65_ionic_img_viewer__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_call_number__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__providers_global_global__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ionic_native_launch_navigator__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__providers_emoji_emoji__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__components_components_module__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__angular_common__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_chat_vendor_chat_vendor__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// New imports to update based on AngularFire2 version 4




































/*----------------PROVIDERS & NATIVES---------------------*/






//import { GooglePlus } from '@ionic-native/google-plus';


//import { TwitterConnect } from '@ionic-native/twitter-connect';




//import { Crop } from '@ionic-native/crop';





















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_38__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var firebaseConfig = {
    apiKey: "AIzaSyDrZY5KUdy9XldwZBsh15F_hBoRSwHivgc",
    authDomain: "wedwise-app-1535104268391.firebaseapp.com",
    databaseURL: "https://wedwise-app-1535104268391.firebaseio.com",
    projectId: "wedwise-app-1535104268391",
    storageBucket: "wedwise-app-1535104268391.appspot.com",
    messagingSenderId: "751512906322"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_52__components_login_layout_1_login_layout_1__["a" /* LoginLayout1 */],
                __WEBPACK_IMPORTED_MODULE_53__components_list_view_google_card_layout_1_google_card_layout_1__["a" /* GoogleCardLayout1 */],
                __WEBPACK_IMPORTED_MODULE_54__components_list_view_expandable_layout_2_expandable_layout_2__["a" /* ExpandableLayout2 */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_55__components_list_view_appearance_animation_layout_2_appearance_animation_layout_2__["a" /* AppearanceAnimationLayout2 */],
                __WEBPACK_IMPORTED_MODULE_56__components_list_view_swipe_to_dismiss_layout_2_swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */],
                __WEBPACK_IMPORTED_MODULE_10__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_58__components_parallax_layout_3_parallax_layout_3__["a" /* ParallaxLayout3 */],
                __WEBPACK_IMPORTED_MODULE_11__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_59__components_parallax_layout_4_parallax_layout_4__["a" /* ParallaxLayout4 */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_myorder_myorder__["a" /* MyorderPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_57__components_list_view_swipe_to_dismiss_layout_3_swipe_to_dismiss_layout_3__["a" /* SwipeToDismissLayout3 */],
                __WEBPACK_IMPORTED_MODULE_60__components_list_view_appearance_animation_layout_4_appearance_animation_layout_4__["a" /* AppearanceAnimationLayout4 */],
                __WEBPACK_IMPORTED_MODULE_61__components_parallax_layout_2_parallax_layout_2__["a" /* ParallaxLayout2 */],
                __WEBPACK_IMPORTED_MODULE_19__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_itemmap_itemmap__["a" /* ItemmapPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_writecomment_writecomment__["a" /* WritecommentPage */],
                __WEBPACK_IMPORTED_MODULE_26__pipes_youtube_youtube__["a" /* YoutubePipe */],
                __WEBPACK_IMPORTED_MODULE_22__pages_youtube_youtube__["a" /* YoutubePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_guestlist_guestlist__["a" /* GuestlistPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_checklistbox_checklistbox__["a" /* ChecklistboxPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_findbycategory_findbycategory__["a" /* FindbycategoryPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_chat_vendor_chat_vendor__["a" /* ChatVendorPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["b" /* NotificationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_71__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_36__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../components/action-sheet/layout-1/action-sheet-layout-1.module#ActionSheetLayout1Module', name: 'ActionSheetLayout1', segment: 'action-sheet-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-2/action-sheet-layout-2.module#ActionSheetLayout2Module', name: 'ActionSheetLayout2', segment: 'action-sheet-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-3/action-sheet-layout-3.module#ActionSheetLayout3Module', name: 'ActionSheetLayout3', segment: 'action-sheet-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-1/check-box-layout-1.module#CheckBoxLayout1Module', name: 'CheckBoxLayout1', segment: 'check-box-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-2/check-box-layout-2.module#CheckBoxLayout2Module', name: 'CheckBoxLayout2', segment: 'check-box-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-3/check-box-layout-3.module#CheckBoxLayout3Module', name: 'CheckBoxLayout3', segment: 'check-box-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/full-screen-gallery/full-screen-gallery.module#FullScreenGalleryModule', name: 'FullScreenGallery', segment: 'full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-1/image-gallery-layout-1.module#ImageGalleryLayout1Module', name: 'ImageGalleryLayout1', segment: 'image-gallery-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-2/image-gallery-layout-2.module#ImageGalleryLayout2Module', name: 'ImageGalleryLayout2', segment: 'image-gallery-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module#AppearanceAnimationLayout1Module', name: 'AppearanceAnimationLayout1', segment: 'appearance-animation-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module#AppearanceAnimationLayout2Module', name: 'AppearanceAnimationLayout2', segment: 'appearance-animation-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module#AppearanceAnimationLayout3Module', name: 'AppearanceAnimationLayout3', segment: 'appearance-animation-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module#AppearanceAnimationLayout4Module', name: 'AppearanceAnimationLayout4', segment: 'appearance-animation-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module#AppearanceAnimationLayout5Module', name: 'AppearanceAnimationLayout5', segment: 'appearance-animation-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module#DragAndDropLayout3Module', name: 'DragAndDropLayout3', segment: 'drag-and-drop-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-1/expandable-layout-1.module#ExpandableLayout1Module', name: 'ExpandableLayout1', segment: 'expandable-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-2/expandable-layout-2.module#ExpandableLayout2Module', name: 'ExpandableLayout2', segment: 'expandable-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module#DragAndDropLayout1Module', name: 'DragAndDropLayout1', segment: 'drag-and-drop-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module#DragAndDropLayout2Module', name: 'DragAndDropLayout2', segment: 'drag-and-drop-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-2/google-card-layout-2.module#GoogleCardLayout2Module', name: 'GoogleCardLayout2', segment: 'google-card-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-1/google-card-layout-1.module#GoogleCardLayout1Module', name: 'GoogleCardLayout1', segment: 'google-card-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-3/expandable-layout-3.module#ExpandableLayout3Module', name: 'ExpandableLayout3', segment: 'expandable-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module#StickyListHeaderLayout1Module', name: 'StickyListHeaderLayout1', segment: 'sticky-list-header-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-3/google-card-layout-3.module#GoogleCardLayout3Module', name: 'GoogleCardLayout3', segment: 'google-card-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module#StickyListHeaderLayout2Module', name: 'StickyListHeaderLayout2', segment: 'sticky-list-header-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module#StickyListHeaderLayout3Module', name: 'StickyListHeaderLayout3', segment: 'sticky-list-header-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module#SwipeToDismissLayout1Module', name: 'SwipeToDismissLayout1', segment: 'swipe-to-dismiss-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module#SwipeToDismissLayout2Module', name: 'SwipeToDismissLayout2', segment: 'swipe-to-dismiss-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module#SwipeToDismissLayout3Module', name: 'SwipeToDismissLayout3', segment: 'swipe-to-dismiss-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-1/login-layout-1.module#LoginLayout1Module', name: 'LoginLayout1', segment: 'login-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-2/login-layout-2.module#LoginLayout2Module', name: 'LoginLayout2', segment: 'login-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-1/maps-layout-1.module#MapsLayout1Module', name: 'MapsLayout1', segment: 'maps-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-2/maps-layout-2.module#MapsLayout2Module', name: 'MapsLayout2', segment: 'maps-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-3/maps-layout-3.module#MapsLayout3Module', name: 'MapsLayout3', segment: 'maps-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-1/parallax-layout-1.module#ParallaxLayout1Module', name: 'ParallaxLayout1', segment: 'parallax-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-2/parallax-layout-2.module#ParallaxLayout2Module', name: 'ParallaxLayout2', segment: 'parallax-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-3/parallax-layout-3.module#ParallaxLayout3Module', name: 'ParallaxLayout3', segment: 'parallax-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-4/parallax-layout-4.module#ParallaxLayout4Module', name: 'ParallaxLayout4', segment: 'parallax-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/qrcode/layout-1/qrcode-layout-1.module#QRcodeLayout1Module', name: 'QRcodeLayout1', segment: 'qrcode-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-2/radio-button-layout-2.module#RadioButtonLayout2Module', name: 'RadioButtonLayout2', segment: 'radio-button-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-1/radio-button-layout-1.module#RadioButtonLayout1Module', name: 'RadioButtonLayout1', segment: 'radio-button-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-1/range-layout-1.module#RangeLayout1Module', name: 'RangeLayout1', segment: 'range-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-3/radio-button-layout-3.module#RadioButtonLayout3Module', name: 'RadioButtonLayout3', segment: 'radio-button-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-2/range-layout-2.module#RangeLayout2Module', name: 'RangeLayout2', segment: 'range-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-3/range-layout-3.module#RangeLayout3Module', name: 'RangeLayout3', segment: 'range-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-4/range-layout-4.module#RangeLayout4Module', name: 'RangeLayout4', segment: 'range-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-2/register-layout-2.module#RegisterLayout2Module', name: 'RegisterLayout2', segment: 'register-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-1/register-layout-1.module#RegisterLayout1Module', name: 'RegisterLayout1', segment: 'register-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-1/search-bar-layout-1.module#SearchBarLayout1Module', name: 'SearchBarLayout1', segment: 'search-bar-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-2/search-bar-layout-2.module#SearchBarLayout2Module', name: 'SearchBarLayout2', segment: 'search-bar-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-1/select-layout-1.module#SelectLayout1Module', name: 'SelectLayout1', segment: 'select-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-3/search-bar-layout-3.module#SearchBarLayout3Module', name: 'SearchBarLayout3', segment: 'search-bar-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-3/select-layout-3.module#SelectLayout3Module', name: 'SelectLayout3', segment: 'select-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-2/select-layout-2.module#SelectLayout2Module', name: 'SelectLayout2', segment: 'select-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-5/select-layout-5.module#SelectLayout5Module', name: 'SelectLayout5', segment: 'select-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-4/select-layout-4.module#SelectLayout4Module', name: 'SelectLayout4', segment: 'select-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-6/select-layout-6.module#SelectLayout6Module', name: 'SelectLayout6', segment: 'select-layout-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/spinner/spinner.module#SpinnerModule', name: 'Spinner', segment: 'spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-1/splash-screen-layout-1.module#SplashScreenLayout1Module', name: 'SplashScreenLayout1', segment: 'splash-screen-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-2/splash-screen-layout-2.module#SplashScreenLayout2Module', name: 'SplashScreenLayout2', segment: 'splash-screen-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-3/splash-screen-layout-3.module#SplashScreenLayout3Module', name: 'SplashScreenLayout3', segment: 'splash-screen-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/sub-image-gallery/sub-image-gallery.module#SubImageGalleryModule', name: 'SubImageGallery', segment: 'sub-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-1/tabs-layout-1.module#TabsLayout1Module', name: 'TabsLayout1', segment: 'tabs-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-2/tabs-layout-2.module#TabsLayout2Module', name: 'TabsLayout2', segment: 'tabs-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-3/tabs-layout-3.module#TabsLayout3Module', name: 'TabsLayout3', segment: 'tabs-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-2/toggle-layout-2.module#ToggleLayout2Module', name: 'ToggleLayout2', segment: 'toggle-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-1/toggle-layout-1.module#ToggleLayout1Module', name: 'ToggleLayout1', segment: 'toggle-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-3/toggle-layout-3.module#ToggleLayout3Module', name: 'ToggleLayout3', segment: 'toggle-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-1/wizard-layout-1.module#WizardLayout1Module', name: 'WizardLayout1', segment: 'wizard-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-2/wizard-layout-2.module#WizardLayout2Module', name: 'WizardLayout2', segment: 'wizard-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-vendor/chat-vendor.module#ChatVendorPageModule', name: 'ChatVendorPage', segment: 'chat-vendor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatting/chatting.module#ChattingPageModule', name: 'ChattingPage', segment: 'chatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checklist/checklist.module#ChecklistPageModule', name: 'ChecklistPage', segment: 'checklist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checklistbox/checklistbox.module#ChecklistboxPageModule', name: 'ChecklistboxPage', segment: 'checklistbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-3/wizard-layout-3.module#WizardLayout3Module', name: 'WizardLayout3', segment: 'wizard-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/findbycategory/findbycategory.module#FindbycategoryPageModule', name: 'FindbycategoryPage', segment: 'findbycategory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/geotracking/geotracking.module#GeotrackingPageModule', name: 'GeotrackingPage', segment: 'geotracking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guestlist/guestlist.module#GuestlistPageModule', name: 'GuestlistPage', segment: 'guestlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/itemmap/itemmap.module#ItemmapPageModule', name: 'ItemmapPage', segment: 'itemmap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myorder/myorder.module#MyorderPageModule', name: 'MyorderPage', segment: 'myorder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resset-password/resset-password.module#RessetPasswordPageModule', name: 'RessetPasswordPage', segment: 'resset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wishlist/wishlist.module#WishlistPageModule', name: 'WishlistPage', segment: 'wishlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/writecomment/writecomment.module#WritecommentPageModule', name: 'WritecommentPage', segment: 'writecomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/youtube/youtube.module#YoutubePageModule', name: 'YoutubePage', segment: 'youtube', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_65_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_34__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_34__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_36__angular_http__["b" /* Http */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_70__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_52__components_login_layout_1_login_layout_1__["a" /* LoginLayout1 */],
                __WEBPACK_IMPORTED_MODULE_53__components_list_view_google_card_layout_1_google_card_layout_1__["a" /* GoogleCardLayout1 */],
                __WEBPACK_IMPORTED_MODULE_54__components_list_view_expandable_layout_2_expandable_layout_2__["a" /* ExpandableLayout2 */],
                __WEBPACK_IMPORTED_MODULE_9__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_55__components_list_view_appearance_animation_layout_2_appearance_animation_layout_2__["a" /* AppearanceAnimationLayout2 */],
                __WEBPACK_IMPORTED_MODULE_56__components_list_view_swipe_to_dismiss_layout_2_swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */],
                __WEBPACK_IMPORTED_MODULE_10__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_58__components_parallax_layout_3_parallax_layout_3__["a" /* ParallaxLayout3 */],
                __WEBPACK_IMPORTED_MODULE_11__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_59__components_parallax_layout_4_parallax_layout_4__["a" /* ParallaxLayout4 */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_myorder_myorder__["a" /* MyorderPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_57__components_list_view_swipe_to_dismiss_layout_3_swipe_to_dismiss_layout_3__["a" /* SwipeToDismissLayout3 */],
                __WEBPACK_IMPORTED_MODULE_60__components_list_view_appearance_animation_layout_4_appearance_animation_layout_4__["a" /* AppearanceAnimationLayout4 */],
                __WEBPACK_IMPORTED_MODULE_61__components_parallax_layout_2_parallax_layout_2__["a" /* ParallaxLayout2 */],
                __WEBPACK_IMPORTED_MODULE_19__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_itemmap_itemmap__["a" /* ItemmapPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_writecomment_writecomment__["a" /* WritecommentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_youtube_youtube__["a" /* YoutubePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_checklist_checklist__["a" /* ChecklistPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_guestlist_guestlist__["a" /* GuestlistPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_checklistbox_checklistbox__["a" /* ChecklistboxPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_findbycategory_findbycategory__["a" /* FindbycategoryPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_chat_vendor_chat_vendor__["a" /* ChatVendorPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["b" /* NotificationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_40__providers_auth__["a" /* Auth */],
                __WEBPACK_IMPORTED_MODULE_41__providers_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_42__providers_values__["a" /* Values */],
                __WEBPACK_IMPORTED_MODULE_43__providers_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_45__providers_wp_service__["a" /* WpService */],
                __WEBPACK_IMPORTED_MODULE_46__providers_functions_functions__["a" /* Functions */],
                __WEBPACK_IMPORTED_MODULE_66__ionic_native_call_number__["a" /* CallNumber */],
                //GooglePlus,
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_social_sharing__["a" /* SocialSharing */],
                // TwitterConnect,
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_paypal__["a" /* PayPal */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_stripe__["a" /* Stripe */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_62__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_63__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_64__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_67__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_68__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_69__providers_emoji_emoji__["a" /* EmojiProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_functions_functions__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_list__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_admob_free__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








//import { GooglePlus } from '@ionic-native/google-plus';
//import { TwitterConnect } from '@ionic-native/twitter-connect';







var HomePage = (function () {
    function HomePage(adMobFree, nav, navParams, functions, auth, loadingCtrl /*, private twitter: TwitterConnect*/, fb, /** private googlePlus: GooglePlus,*/ alertCtrl, values, service, platform, nativeStorage) {
        //this.role = "Customer";
        // this.currentUser = firebase.auth().currentUser;
        this.adMobFree = adMobFree;
        this.nav = nav;
        this.navParams = navParams;
        this.functions = functions;
        this.auth = auth;
        this.loadingCtrl = loadingCtrl; /*, private twitter: TwitterConnect*/
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.service = service;
        this.platform = platform;
        this.nativeStorage = nativeStorage;
        this.userProfile = null;
        this.isLoggedIn = false;
        this.userProfiles = null;
        this.disableRegister = false;
        this.disableLogin = false;
        this.signup = false;
        this._showSignup = false;
        this.buttonText = "Register Account";
        this.HeaderText = "Login";
        this.secondLogin = false;
        // errorPhoneMessage: any;
        //public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
        this.is_vendor = false;
        this.params = {};
        //this.showBannerAd();
        //this.showInterstitialAd();
        //this.showVideoRewardsAd();
        console.log(this.values.isLoggedIn);
        /***
         if(this.values.isLoggedIn){
        
        console.log(this.values.isLoggedIn);
      this.service.getUserProfile(this.currentUser.uid).on('value', (snapshot) =>{
       this.userProfiles = snapshot.val();
       

      });
      
      
    }
         */
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.database().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
        this.params.data = {
            "forgotPassword": "Forgot password?",
            "labelPassword": "PASSWORD",
            "labelUsername": "USERNAME",
            "login": "Login",
            "logo": "assets/images/logo/modern.jpg",
            "password": "Enter your password",
            "register": "Register now!",
            "skip": "Skip",
            "subtitle": "",
            "title": "NearMe App",
            "username": "Enter your username"
        };
        this.params.events = {
            onLogin: function (params) {
                console.log('onLogin:');
            },
            onForgot: function () {
                console.log('onForgot:');
            },
            onRegister: function (params) {
                console.log('onRegister:');
            },
            onSkip: function (params) {
                console.log('onSkip:');
            },
            onFacebook: function (params) {
                console.log('onFacebook:');
            }
        };
    }
    HomePage.prototype.goToList = function () {
        //this.nav.setRoot(ListPage);
    };
    HomePage.prototype.showSignup = function () {
        this.HeaderText = "Register";
        this._showSignup = true;
    };
    HomePage.prototype.hideSignup = function () {
        this.HeaderText = "Login";
        this._showSignup = false;
    };
    //EMAIL AND PASSWORD LOGIN
    HomePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Low battery',
            subTitle: '10% of battery remaining',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HomePage.prototype.login = function (email, password, type) {
        var _this = this;
        // let loading : Loading = this.showLoading();
        this.form.email = email;
        this.form.password = password;
        console.log("New Login");
        if (this.validate()) {
            console.log(this.form);
            debugger;
            this.auth.login(this.form.email, this.form.password).then(function (success) {
                _this.disableLogin = true;
                _this.userProfile = success;
                _this.values.isLoggedIn = true;
                _this.service.getUserProfile(_this.userProfile.uid).on('value', function (snapshot) {
                    _this.userProfiles = snapshot.val();
                });
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.values.userRole = snapshot.val().role;
                        _this.is_vendor = snapshot.val().is_vendor;
                        // if (this.is_vendor) {
                        //     this.nav.setRoot(ChattingPage, {user: this.userProfile});
                        // }
                        // else {
                        _this.nativeStorage.setItem('userProfile', _this.userProfile);
                        console.log(_this.userProfile);
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__list_list__["a" /* ListPage */], { user: _this.userProfile, is_vendor: _this.is_vendor });
                        // }
                    }
                });
            }).catch(function (error) {
                alert(error.message);
            });
            //             if (type == "Customer") {
            //
            //                 console.log("Validate");
            //                 this.disableLogin = true;
            //                 this.auth.login(this.form.email, this.form.password).then((success) => {
            //                     this.userProfile = success;
            //
            //                     console.log(success);
            //
            //                     this.values.isLoggedIn = true;
            //                     this.disableLogin = false;
            //                     console.log(this.values.isLoggedIn);
            //
            //                     this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) => {
            //                         this.userProfiles = snapshot.val();
            //                     });
            //
            //                     this.values.userRole = firebase.database().ref('/users').child(this.userProfile.uid).on('value', snapshot => {
            //                         if (snapshot.val()) {
            //                             this.values.userRole = snapshot.val().role;
            //                         }
            //
            //                     });
            //
            //                     //loading.dismiss();
            //
            //                     this.nav.setRoot(ListPage, {user: this.userProfile});
            //
            //                 }).catch(err => {
            //                     this.handleError(err)
            //                 });
            //
            //             }
            //
            //             if (type == "Owner") {
            //
            //                 this.auth.login(this.form.email, this.form.password).then((success) => {
            //                     this.userProfile = success;
            //
            // // alert(JSON.stringify(this.userProfile));
            //
            //                     this.values.isLoggedIn = true;
            //                     this.disableLogin = false;
            //                     console.log(this.values.isLoggedIn);
            //
            //                     this.service.getUserProfiles(this.userProfile.uid).on('value', (snapshot) => {
            //                         this.userProfiles = snapshot.val();
            //                     });
            //
            //                     this.values.userRole = firebase.database().ref('/restaurants').child(this.userProfile.uid).on('value', snapshot => {
            //                         if (snapshot.val()) {
            //                             this.values.userRole = snapshot.val().role;
            //                         }
            //
            //                     });
            //                     //loading.dismiss();
            //
            //                     this.nav.setRoot(ChattingPage, {user: this.userProfile});
            //
            //                 }).catch(err => {
            //
            //                     this.handleError(err)
            //                 });
            //
            //
            //             }
        }
        else {
            console.log("Not Validated");
        }
    };
    HomePage.prototype.handleError = function (err) {
        this.showAlert(err.message);
        this.errorSigninMessage = err.message;
        this.disableLogin = false;
    };
    HomePage.prototype.validate = function () {
        //let loading : Loading;
        //loading.dismissAll();
        console.log("Validate form");
        console.log(this.form.email);
        console.log(this.form.password);
        if (this.form.email == undefined || this.form.email == '') {
            console.log("Validate form error");
            this.showAlert('Please enter email');
            //this.errorSigninMessage = 'Please enter email';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            console.log("Please enter password");
            this.showAlert('Please enter email');
            // this.errorSigninMessage = 'Please enter password';
            return false;
        }
        return true;
    };
    HomePage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['Ok']
        }).present();
    };
    //FACEBOOK LOGIN
    HomePage.prototype.facebookLogin = function () {
        var _this = this;
        this.fb.getLoginStatus().then(function (data) {
            if (data.status == 'connected') {
                _this.fb.logout();
            }
        });
        if (this.platform.is('cordova')) {
            this.fb.login(['public_profile', 'user_friends', 'email']).then(function (response) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.auth().signInWithCredential(facebookCredential).then(function (success) {
                    console.log("Firebase success: " + JSON.stringify(success));
                    _this.userProfile = success;
                    _this.values.isLoggedIn = true;
                    _this.secondLogin = false;
                    __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                        if (snapshot.val()) {
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).set({
                                email: _this.userProfile.email,
                                displayName: _this.userProfile.displayName,
                                lastName: "",
                                address: "",
                                phone: "",
                                photoURL: _this.userProfile.photoURL,
                                facebook: true,
                                secondLogin: false
                            });
                        }
                    });
                    /***
                     this.customerList.child(this.userProfile.uid).set({
            displayName: this.userProfile.displayName,
            photoURL: this.userProfile.photoURL,
            email: this.userProfile.email
        });
                     */
                    _this.service.getUserProfile(_this.userProfile.uid).on('value', function (snapshot) {
                        _this.userProfiles = snapshot.val();
                        console.log(snapshot.val());
                    });
                    _this.values.userRole = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                        if (snapshot.val()) {
                            _this.values.userRole = snapshot.val().role;
                        }
                    });
                    // this.nav.push('ShopPage');
                }).catch(function (error) {
                    console.log("Firebase failure: " + JSON.stringify(error));
                    _this.functions.showAlert('Error', error.message);
                });
            }).catch(function (error) {
                console.log(error);
                alert(error.errorMessage);
                _this.functions.showAlert('Error', error.errorMessage);
            });
        }
    };
    //TWITTER LOGIN
    /* twLogin(): void {
       this.twitter.login().then( response => {
         const twitterCredential = firebase.auth.TwitterAuthProvider.credential(response.token, response.secret);

         firebase.auth().signInWithCredential(twitterCredential).then( userProfile => {
             this.values.isLoggedIn = true;
             this.userProfile = userProfile;
             this.userProfile.twName = response.userName;
             this.customerList.child(this.userProfile.uid).set({
               displayName: this.userProfile.displayName,
               photoURL: this.userProfile.photoURL,
               email: this.userProfile.email
           });
             this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
              this.userProfiles = snapshot.val();
             });

             this.values.userRole = firebase.database().ref('/Customer-Role').child(this.userProfile.uid).on('value', snapshot =>{
               if(snapshot.val()){
                 this.values.userRole = snapshot.val().role;
               }
             });
            //this.nav.push('ShopPage');
             console.log(this.userProfile);
         }, error => {
           this.functions.showAlert('Error', error.message);
           console.log(error);
         });
       }, error => {
         this.functions.showAlert('Error', error);
         console.log("Error connecting to twitter: ", error);
       });
     }*/
    //GOOGLE LOGIN
    /**
     gmailLogin(){
   
     
      this.googlePlus.login({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': '456352511209-qmma51oquif9u5msldo4u90ra83kdtfo.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        'offline': true
      })
      .then( res => {
       firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
       .then( success =>{
        this.userProfile = success;
        this.values.isLoggedIn = true;
        console.log("Firebase Success" + JSON.stringify(success));
         this.customerList.child(this.userProfile.uid).set({
            displayName: this.userProfile.displayName,
            photoURL: this.userProfile.photoURL,
            email: this.userProfile.email
        });
         this.service.getUserProfile(this.userProfile.uid).on('value', (snapshot) =>{
           this.userProfiles = snapshot.val();
          });

         this.values.userRole = firebase.database().ref('/Customer-Role').child(this.userProfile.uid).on('value', snapshot =>{
            if(snapshot.val()){
              this.values.userRole = snapshot.val().role;
            }
          });
        // this.nav.push('ShopPage');
        }).catch( error =>{
          this.userProfile = error;
          this.functions.showAlert('Error', error.message);
         console.log("Firebase Failure" + JSON.stringify(error))
         });
      }).catch(err =>{
        this.userProfile = err;
        this.functions.showAlert('Error', err);
         console.error("Error: ", err);
        });
    
  }

     */
    HomePage.prototype.forgotten = function () {
        debugger;
        this.nav.push('RessetPasswordPage');
    };
    HomePage.prototype.logOut = function () {
        var _this = this;
        this.auth.logoutUser().then(function () {
            _this.values.isLoggedIn = false;
            _this.values.userRole = 'Customer';
        });
    };
    HomePage.prototype.address = function (item) {
        console.log(item);
        this.nav.push('Address', item);
    };
    HomePage.prototype.myOrder = function () {
        this.nav.push('MyorderPage');
    };
    HomePage.prototype.goToRegister = function () {
        this.nav.push('RegisterPage');
    };
    HomePage.prototype.push = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.register = function () {
        var _this = this;
        if (this.validateRegister(this.form)) {
            this.disableRegister = true;
            this.buttonText = "Registering...";
            this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName)
                .then(function () {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_12_firebase___default.a.auth().currentUser;
                _this.service.getUserProfile(_this.currentUser.uid).on('value', function (snapshot) {
                    _this.userProfiles = snapshot.val();
                });
                _this.disableRegister = false;
                _this.buttonText = "Register Account";
            }).catch(function (err) {
                _this.handleRegisterError(err);
            });
        }
    };
    HomePage.prototype.handleRegisterError = function (err) {
        console.log(err.code);
        this.errorRegisterMessage = err.message;
        this.disableRegister = false;
        this.buttonText = "Register Account";
    };
    HomePage.prototype.validateRegister = function (form) {
        if (this.form.firstName == undefined || this.form.firstName == '') {
            this.errorRegisterMessage = 'Please enter first name';
            return false;
        }
        if (this.form.lastName == undefined || this.form.lastName == '') {
            this.errorRegisterMessage = 'Please enter last name';
            return false;
        }
        if (this.form.email == undefined || this.form.email == '') {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            this.errorRegisterMessage = 'Please enter password';
            return false;
        }
        return true;
    };
    HomePage.prototype.showBannerAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bannerConfig, result;
            return __generator(this, function (_a) {
                bannerConfig = {
                    id: 'ca-app-pub-6026141143855033/6021415851',
                    isTesting: false,
                    autoShow: true
                };
                this.adMobFree.banner.config(bannerConfig);
                try {
                    result = this.adMobFree.banner.prepare();
                    console.log(result);
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.showInterstitialAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var interstitialConfig, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        interstitialConfig = {
                            id: 'ca-app-pub-6026141143855033/5823595991',
                            isTesting: false,
                            autoShow: true
                        };
                        this.adMobFree.interstitial.config(interstitialConfig);
                        return [4 /*yield*/, this.adMobFree.interstitial.prepare()];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.showVideoRewardsAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var videoRewardsConfig, result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        videoRewardsConfig = {
                            id: 'ca-app-pub-6026141143855033/7631501688',
                            isTesting: false,
                            autoShow: true
                        };
                        this.adMobFree.rewardVideo.config(videoRewardsConfig);
                        return [4 /*yield*/, this.adMobFree.rewardVideo.prepare()];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /* ionViewDidLoad() {
       this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
     }

     signIn(phoneNumber: number){
     document.getElementById('recaptcha-container').innerHTML = "";
     this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
     const appVerifier = this.recaptchaVerifier;
     const phoneNumberString = "+" + phoneNumber;
     firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
       .then( confirmationResult => {
         // SMS sent. Prompt user to type the code from the message, then sign the
         // user in with confirmationResult.confirm(code).
         let prompt = this.alertCtrl.create({
         title: 'Enter the Confirmation code',
         inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
         buttons: [
           { text: 'Cancel',
             handler: data => { console.log('Cancel clicked'); appVerifier}
           },
           { text: 'Send',
             handler: data => {
               confirmationResult.confirm(data.confirmationCode)
               .then( (result) => {
                 // User signed in successfully.
                 //console.log(result.user);
                 this.userProfiles = result.user;
                    console.log( this.userProfiles);
                   // console.log( result.user.phoneNumber);
                 // ...
               }).catch( (error) => {this.handleErrors(error)




                 // User couldn't sign in (bad verification code?)
                 // ...
               });
             }
           }
         ]
       });
       prompt.present();
     })
     .catch( (error) =>{
       this.handleErrors(error)
       console.error("SMS not sent", error);
     });

   }

   handleErrors(error){
     this.errorPhoneMessage = error.message;
   }*/
    HomePage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        return loading;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/home/home.html"*/'<!---\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n  \n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n	\n\n	\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n-->\n\n<!--\n\n<ion-content class="background">\n\n\n\n	        <img  class="img"  src="assets/imgs/logow.png" style="width: 35%;" />\n\n\n\n        <ion-card class="cc">\n\n        <ion-item>\n\n           <ion-label floating > <div class="font"> Email</div> </ion-label>\n\n            <ion-input type="email"  class="font"></ion-input>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label floating><ion-icon src="assets/imgs/icon1.png"></ion-icon> <div class="font">Password</div></ion-label>\n\n            <ion-input type="password" class="font"></ion-input>\n\n        </ion-item>\n\n</ion-card>\n\n\n\n        \n\n        <ion-item text-center>\n\n            <button ion-button block full (click) = "login()" style="zoom:1.4;" color="purple"> Log In</button>\n\n            <br>\n\n            <p class="color">Don\'t have a account? <a href=""><strong class="color" (click) ="push()">Register Now</strong></a></p>\n\n        </ion-item>\n\n        \n\n\n\n        \n\n </ion-content>\n\n\n\n\n\n -->\n\n\n\n<ion-content padding class="bg-image" style="text-align: center;">\n\n\n\n  <ion-img style="width:50%; height:auto;object-fit: resize;background: transparent; margin: 15% auto 30px; text-align: center; contain:none;"\n\n    src="assets/imgs/logow.png" class="img-logo"></ion-img>\n\n\n\n\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-input type="email" placeholder="Username" class="input-field usr"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="password" placeholder="Password" class="input-field pwd"></ion-input>\n\n    </ion-item>\n\n\n\n    <!-- </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n	<ion-list>\n\n		<ion-item class="transparent">\n\n			<ion-label floating class="label-inp">Username</ion-label>\n\n			<ion-input type="text" class="input-field usr"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item class="transparent">\n\n			<ion-label floating class="label-inp">Password</ion-label>\n\n			<ion-input type="password" class="input-field pwd"></ion-input>\n\n		</ion-item> -->\n\n    <p style="margin: 10px 5px 15px 0; color: #ffffff; text-align: right; float: right;">Forgot Password? </p>\n\n  </ion-list>\n\n\n\n  <div>\n\n    <button block ion-button style="padding: 30px 0; text-transform: capitalize; border-radius: 3px; margin-top: 20px;"\n\n      (click)="login()">Login</button>\n\n  </div>\n\n  <p style="margin: 25px 0 0; color: #ffffff;">Don’t have a account? <a href="" style="color:white;text-decoration:none;"\n\n      (click)="push()"><strong>Register Now</strong></a></p>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/home/home.html"*/
            //template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
            //template: '<ion-nav [root]="rootPage"></ion-nav>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */] /*, private twitter: TwitterConnect*/, __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_8__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__itemmap_itemmap__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__writecomment_writecomment__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { CartPage } from '../cart/cart';





/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailsPage = (function () {
    function ProductDetailsPage(callNumber, nav, navParams, service, values, translateService) {
        var _this = this;
        this.callNumber = callNumber;
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.values = values;
        this.translateService = translateService;
        this.params = {};
        this.cartItem = {};
        this.quantity = "1";
        this.id = navParams.data.id;
        console.log(this.id);
        this.params.data = {
            "headerImage": "assets/images/background-small/4.jpg",
            "headerTitle": "Product",
            "items": [{
                    "button": "$63.99",
                    "category": "NEW OFFER",
                    "favorite": true,
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "id": 1,
                    "productDescriptions": [{
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                            "id": 1
                        }, {
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                            "id": 2
                        }, {
                            "description": "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum",
                            "id": 3
                        }, {
                            "description": "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum",
                            "id": 4
                        }],
                    "subtitle": "Available Now",
                    "title": "Super & Black"
                }],
            "shareIcon": "more"
        };
        this.params.events = {
            'onProceed': function (item) {
                console.log("onProceed");
            },
            'onShare': function (item) {
                console.log("onShare");
            },
            'onItemClick': function (item) {
                console.log("onItemClick");
            },
            'onFavorite': function (item) {
                item.favorite = !item.favorite;
                console.log("onFavorite");
            }
        };
        this.params.data = [];
        console.log(this.params.data.items);
        console.log(this.navParams.get('id'));
        this.service.getBuildingsDetail(this.navParams.get('id')).on('value', function (snap) {
            //this.params.data.items = snapshot.val();
            console.log(snap.val());
            //this.params.data = snapshot.val();
            _this.service.getDistanceRestaurant(snap.key).on('value', function (snapshots) {
                _this.distanceRestaurant = snapshots.val();
                console.log(_this.distanceRestaurant);
                _this.params.data.push({
                    id: snap.key,
                    firebase_url: snap.val().firebase_url,
                    address: snap.val().address,
                    category: snap.val().category,
                    description: snap.val().description,
                    images: snap.val().image,
                    img: snap.val().img,
                    info: snap.val().info,
                    lat: snap.val().lat,
                    long: snap.val().long,
                    distance: _this.distanceRestaurant,
                    mark: snap.val().mark,
                    option: snap.val().option,
                    outlet: snap.val().outlet,
                    phonenumber: snap.val().phonenumber,
                    title: snap.val().title,
                    market: true,
                });
                console.log(_this.params.data);
            });
            //console.log(this.productDetails);
        });
        this.params.data.comments = [];
        this.service.getBuildingsDetail(this.navParams.get('id')).child('comments').on('value', function (snapshot) {
            //this.params.data.items = snapshot.val();
            console.log(snapshot.val());
            //this.params.data = snapshot.val();
            snapshot.forEach(function (snap) {
                _this.params.data.comments.push({
                    id: snap.key,
                    comment: snap.val().comment,
                    photo_url: snap.val().photo_url,
                    product_id: snap.val().product_id,
                    user_id: snap.val().user_id,
                    user_name: snap.val().user_name
                });
            });
            //console.log(this.productDetails);
        });
        console.log(this.params.data);
        //this.homepage.showVideoRewardsAd();
    }
    ProductDetailsPage.prototype.addToFavourite = function (data) {
        console.log(data);
        this.service.addToFavorite(data, this.navParams.get('id'));
    };
    ProductDetailsPage.prototype.writeComment = function (data) {
        console.log(data);
        //this.service.writeComment();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__writecomment_writecomment__["a" /* WritecommentPage */], { data: data });
    };
    ProductDetailsPage.prototype.removeFavourite = function () {
        console.log("product detail remove");
        this.service.removeFavourite(this.id);
    };
    ProductDetailsPage.prototype.call = function (data) {
        this.callNumber.callNumber(data.phonenumber, true)
            .then(function () { })
            .catch(function () { });
    };
    ProductDetailsPage.prototype.getFavoriteItem = function () {
        console.log("favorite");
        console.log(this.id);
        this.favoriteItem = this.service.getFavoriteItem(this.id);
        return this.favoriteItem;
    };
    ProductDetailsPage.prototype.addToCart = function (name, price, image) {
        var itemAdded = false;
        for (var item in this.service.cart.line_items) {
            if (this.id == this.service.cart.line_items[item].product_id) {
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
        if (!itemAdded) {
            console.log(itemAdded);
            this.cartItem.product_id = this.id;
            console.log(this.cartItem.product_id);
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
    };
    ProductDetailsPage.prototype.goToCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    ProductDetailsPage.prototype.goToMap = function (data) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__itemmap_itemmap__["a" /* ItemmapPage */], { data: data });
    };
    ProductDetailsPage.prototype.deleteComment = function (data, id) {
        //console.log(data);
        this.service.deleteComment(data, id);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__list_list__["a" /* ListPage */]);
    };
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailsPage');
    };
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/product-details/product-details.html"*/'<!--\n\n  Generated template for the ProductDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n    <parallax-layout-3\n\n     [data]="params.data"\n\n     [events]="params.events">\n\n   </parallax-layout-3>\n\n\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/product-details/product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.ss
*/
var Auth = (function () {
    function Auth() {
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth();
        //this.addCategory = firebase.database().ref('userProfile/');
        this.customerList = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/Customer-List');
        this.restaurantUserInfo = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/users');
    }
    Auth.prototype.login = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    Auth.prototype.register = function (email, password, firstname, lastname) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            _this.restaurantUserInfo.child(newUser.uid).set({
                email: email,
                displayName: firstname,
                lastName: lastname,
                address: "",
                phone: "",
                facebook: false,
                photoURL: "assets/images/person.png"
            });
        });
    };
    Auth.prototype.logoutUser = function () {
        return this.fireAuth.signOut();
    };
    Auth.prototype.forgotPass = function (email) {
        return this.fireAuth.sendPasswordResetEmail(email);
    };
    Auth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Auth);
    return Auth;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 879:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 373,
	"./af.js": 373,
	"./ar": 374,
	"./ar-dz": 375,
	"./ar-dz.js": 375,
	"./ar-kw": 376,
	"./ar-kw.js": 376,
	"./ar-ly": 377,
	"./ar-ly.js": 377,
	"./ar-ma": 378,
	"./ar-ma.js": 378,
	"./ar-sa": 379,
	"./ar-sa.js": 379,
	"./ar-tn": 380,
	"./ar-tn.js": 380,
	"./ar.js": 374,
	"./az": 381,
	"./az.js": 381,
	"./be": 382,
	"./be.js": 382,
	"./bg": 383,
	"./bg.js": 383,
	"./bm": 384,
	"./bm.js": 384,
	"./bn": 385,
	"./bn.js": 385,
	"./bo": 386,
	"./bo.js": 386,
	"./br": 387,
	"./br.js": 387,
	"./bs": 388,
	"./bs.js": 388,
	"./ca": 389,
	"./ca.js": 389,
	"./cs": 390,
	"./cs.js": 390,
	"./cv": 391,
	"./cv.js": 391,
	"./cy": 392,
	"./cy.js": 392,
	"./da": 393,
	"./da.js": 393,
	"./de": 394,
	"./de-at": 395,
	"./de-at.js": 395,
	"./de-ch": 396,
	"./de-ch.js": 396,
	"./de.js": 394,
	"./dv": 397,
	"./dv.js": 397,
	"./el": 398,
	"./el.js": 398,
	"./en-au": 399,
	"./en-au.js": 399,
	"./en-ca": 400,
	"./en-ca.js": 400,
	"./en-gb": 401,
	"./en-gb.js": 401,
	"./en-ie": 402,
	"./en-ie.js": 402,
	"./en-il": 403,
	"./en-il.js": 403,
	"./en-nz": 404,
	"./en-nz.js": 404,
	"./eo": 405,
	"./eo.js": 405,
	"./es": 406,
	"./es-do": 407,
	"./es-do.js": 407,
	"./es-us": 408,
	"./es-us.js": 408,
	"./es.js": 406,
	"./et": 409,
	"./et.js": 409,
	"./eu": 410,
	"./eu.js": 410,
	"./fa": 411,
	"./fa.js": 411,
	"./fi": 412,
	"./fi.js": 412,
	"./fo": 413,
	"./fo.js": 413,
	"./fr": 414,
	"./fr-ca": 415,
	"./fr-ca.js": 415,
	"./fr-ch": 416,
	"./fr-ch.js": 416,
	"./fr.js": 414,
	"./fy": 417,
	"./fy.js": 417,
	"./gd": 418,
	"./gd.js": 418,
	"./gl": 419,
	"./gl.js": 419,
	"./gom-latn": 420,
	"./gom-latn.js": 420,
	"./gu": 421,
	"./gu.js": 421,
	"./he": 422,
	"./he.js": 422,
	"./hi": 423,
	"./hi.js": 423,
	"./hr": 424,
	"./hr.js": 424,
	"./hu": 425,
	"./hu.js": 425,
	"./hy-am": 426,
	"./hy-am.js": 426,
	"./id": 427,
	"./id.js": 427,
	"./is": 428,
	"./is.js": 428,
	"./it": 429,
	"./it.js": 429,
	"./ja": 430,
	"./ja.js": 430,
	"./jv": 431,
	"./jv.js": 431,
	"./ka": 432,
	"./ka.js": 432,
	"./kk": 433,
	"./kk.js": 433,
	"./km": 434,
	"./km.js": 434,
	"./kn": 435,
	"./kn.js": 435,
	"./ko": 436,
	"./ko.js": 436,
	"./ky": 437,
	"./ky.js": 437,
	"./lb": 438,
	"./lb.js": 438,
	"./lo": 439,
	"./lo.js": 439,
	"./lt": 440,
	"./lt.js": 440,
	"./lv": 441,
	"./lv.js": 441,
	"./me": 442,
	"./me.js": 442,
	"./mi": 443,
	"./mi.js": 443,
	"./mk": 444,
	"./mk.js": 444,
	"./ml": 445,
	"./ml.js": 445,
	"./mn": 446,
	"./mn.js": 446,
	"./mr": 447,
	"./mr.js": 447,
	"./ms": 448,
	"./ms-my": 449,
	"./ms-my.js": 449,
	"./ms.js": 448,
	"./mt": 450,
	"./mt.js": 450,
	"./my": 451,
	"./my.js": 451,
	"./nb": 452,
	"./nb.js": 452,
	"./ne": 453,
	"./ne.js": 453,
	"./nl": 454,
	"./nl-be": 455,
	"./nl-be.js": 455,
	"./nl.js": 454,
	"./nn": 456,
	"./nn.js": 456,
	"./pa-in": 457,
	"./pa-in.js": 457,
	"./pl": 458,
	"./pl.js": 458,
	"./pt": 459,
	"./pt-br": 460,
	"./pt-br.js": 460,
	"./pt.js": 459,
	"./ro": 461,
	"./ro.js": 461,
	"./ru": 462,
	"./ru.js": 462,
	"./sd": 463,
	"./sd.js": 463,
	"./se": 464,
	"./se.js": 464,
	"./si": 465,
	"./si.js": 465,
	"./sk": 466,
	"./sk.js": 466,
	"./sl": 467,
	"./sl.js": 467,
	"./sq": 468,
	"./sq.js": 468,
	"./sr": 469,
	"./sr-cyrl": 470,
	"./sr-cyrl.js": 470,
	"./sr.js": 469,
	"./ss": 471,
	"./ss.js": 471,
	"./sv": 472,
	"./sv.js": 472,
	"./sw": 473,
	"./sw.js": 473,
	"./ta": 474,
	"./ta.js": 474,
	"./te": 475,
	"./te.js": 475,
	"./tet": 476,
	"./tet.js": 476,
	"./tg": 477,
	"./tg.js": 477,
	"./th": 478,
	"./th.js": 478,
	"./tl-ph": 479,
	"./tl-ph.js": 479,
	"./tlh": 480,
	"./tlh.js": 480,
	"./tr": 481,
	"./tr.js": 481,
	"./tzl": 482,
	"./tzl.js": 482,
	"./tzm": 483,
	"./tzm-latn": 484,
	"./tzm-latn.js": 484,
	"./tzm.js": 483,
	"./ug-cn": 485,
	"./ug-cn.js": 485,
	"./uk": 486,
	"./uk.js": 486,
	"./ur": 487,
	"./ur.js": 487,
	"./uz": 488,
	"./uz-latn": 489,
	"./uz-latn.js": 489,
	"./uz.js": 488,
	"./vi": 490,
	"./vi.js": 490,
	"./x-pseudo": 491,
	"./x-pseudo.js": 491,
	"./yo": 492,
	"./yo.js": 492,
	"./zh-cn": 493,
	"./zh-cn.js": 493,
	"./zh-hk": 494,
	"./zh-hk.js": 494,
	"./zh-tw": 495,
	"./zh-tw.js": 495
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 879;

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_my_profile_my_profile__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_wishlist_wishlist__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_youtube_youtube__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_checklist_checklist__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_guestlist_guestlist__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chatting_chatting__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_findbycategory_findbycategory__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_app__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, push, alertCtrl, values, translateService) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.values = values;
        this.translateService = translateService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        // Copy your firebase credencial here
        __WEBPACK_IMPORTED_MODULE_16_firebase_app__["initializeApp"]({
            apiKey: "AIzaSyDrZY5KUdy9XldwZBsh15F_hBoRSwHivgc",
            authDomain: "wedwise-app-1535104268391.firebaseapp.com",
            databaseURL: "https://wedwise-app-1535104268391.firebaseio.com",
            projectId: "wedwise-app-1535104268391",
            storageBucket: "wedwise-app-1535104268391.appspot.com",
            messagingSenderId: "751512906322"
        });
        this.initializeApp();
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_16_firebase_app__["auth"]();
        // used for an example of ngFor and navigation
        this.vendorPages = [
            { title: 'Find Vendors Near Me', component: __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */], icon: "svg-find" },
            { title: 'Find Vendor By Category', component: __WEBPACK_IMPORTED_MODULE_15__pages_findbycategory_findbycategory__["a" /* FindbycategoryPage */], icon: "svg-search" },
            { title: 'Message', component: __WEBPACK_IMPORTED_MODULE_14__pages_chatting_chatting__["a" /* ChattingPage */], icon: "svg-message" },
            { title: 'My Favorite', component: __WEBPACK_IMPORTED_MODULE_10__pages_wishlist_wishlist__["a" /* WishlistPage */], icon: "svg-heart" },
            { title: 'CheckList', component: __WEBPACK_IMPORTED_MODULE_12__pages_checklist_checklist__["a" /* ChecklistPage */], icon: "svg-check" },
            { title: 'Gueslist', component: __WEBPACK_IMPORTED_MODULE_13__pages_guestlist_guestlist__["a" /* GuestlistPage */], icon: "svg-guest" },
            { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_11__pages_youtube_youtube__["a" /* YoutubePage */], icon: "svg-settings" },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_11__pages_youtube_youtube__["a" /* YoutubePage */], icon: "svg-info" }
        ];
        this.userPages = [
            { title: 'Find Vendors Near Me', component: __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */], icon: "svg-find" },
            { title: 'Find Vendor By Category', component: __WEBPACK_IMPORTED_MODULE_15__pages_findbycategory_findbycategory__["a" /* FindbycategoryPage */], icon: "svg-search" },
            { title: 'My Favorite', component: __WEBPACK_IMPORTED_MODULE_10__pages_wishlist_wishlist__["a" /* WishlistPage */], icon: "svg-heart" },
            { title: 'CheckList', component: __WEBPACK_IMPORTED_MODULE_12__pages_checklist_checklist__["a" /* ChecklistPage */], icon: "svg-check" },
            { title: 'Gueslist', component: __WEBPACK_IMPORTED_MODULE_13__pages_guestlist_guestlist__["a" /* GuestlistPage */], icon: "svg-guest" },
            { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_11__pages_youtube_youtube__["a" /* YoutubePage */], icon: "svg-settings" },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_11__pages_youtube_youtube__["a" /* YoutubePage */], icon: "svg-info" }
        ];
        __WEBPACK_IMPORTED_MODULE_16_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_16_firebase_app__["database"]().ref('/users').child(user.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.userProfiles = snapshot.val();
                        var isVendor = snapshot.val().is_vendor;
                        if (isVendor) {
                            _this.pages = _this.vendorPages;
                        }
                        else {
                            _this.pages = _this.userPages;
                        }
                    }
                });
            }
        });
        this.translateService.setDefaultLang('english');
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_16_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                _this.values.isLoggedIn = true;
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_16_firebase_app__["database"]().ref('/Customer-Role').child(user.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.values.userRole = snapshot.val().role;
                    }
                });
            }
        });
    }
    //kjlkj
    //jkljlk
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.pushsetup();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOut = function () {
        this.fireAuth.signOut();
        console.log('logged out');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.pushsetup = function () {
        var _this = this;
        var options = {
            android: {
                senderID: '761594501055'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            if (notification.additionalData.foreground) {
                var youralert = _this.alertCtrl.create({
                    title: 'New Push notification',
                    message: notification.message
                });
                youralert.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            //do whatever you want with the registration ID
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
    };
    MyApp.prototype.goprofile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_my_profile_my_profile__["a" /* MyProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/app/app.html"*/'<ion-menu [content]="content">\n\n \n\n\n\n  <ion-content>\n\n    <ion-item style="background-image: url(assets/images/background/2.jpg);background-repeat: no-repeat;background-size: 100%; \n\n     min-height:26%;margin-bottom:8%;">\n\n      <ion-avatar item-start>\n\n          <ion-list style="margin:15px 0 0 0;font-family: Arial ">\n\n         <div  class="profile-image">\n\n      <img src="assets/imgs/user.png" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;" (click)="goprofile()">\n\n         </div>\n\n        \n\n      </ion-list>\n\n      </ion-avatar>\n\n      <h2 style="color: #fff;font-size: 21px;font-weight: 600;">Test</h2>\n\n\n\n\n\n      \n\n    </ion-item>\n\n\n\n  \n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n      <ion-icon [name]="p.icon" item-left></ion-icon>\n\n        {{ p.title }}\n\n      </button>\n\n  \n\n    <button menuClose ion-item  (click)="logOut()">\n\n    <ion-icon name="log-out" item-left style="margin-left:-7px;"></ion-icon>\n\n        Log Out\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var YoutubePipe = (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    YoutubePipe.prototype.transform = function (value, args) {
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    YoutubePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'youtube',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], YoutubePipe);
    return YoutubePipe;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the WpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var WpService = (function () {
    function WpService(http, config) {
        this.http = http;
        this.config = config;
        this.url = this.config.url;
    }
    WpService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/api/core/get_category_index/').map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.categories = data;
                console.log(_this.categories);
                resolve(_this.categories);
            });
        });
    };
    WpService.prototype.getPosts = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/api/core/get_category_posts/?id=' + id).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.posts = data;
                resolve(_this.posts);
            });
        });
    };
    WpService.prototype.getPost = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/?json=get_post&post_id=' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.post = data;
                resolve(_this.post);
            });
        });
    };
    WpService.prototype.submitComment = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("content", form.comment);
        params.append("name", form.name);
        params.append("email", form.email);
        params.append("post_id", form.post_id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/?json=respond.submit_comment', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            }, function (err) { return resolve(JSON.parse(err._body)); });
        });
    };
    WpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */]])
    ], WpService);
    return WpService;
}());

//# sourceMappingURL=wp-service.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emoji_picker_emoji_picker__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* IonicModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__emoji_picker_emoji_picker__["a" /* EmojiPickerComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ })

},[556]);
//# sourceMappingURL=main.js.map