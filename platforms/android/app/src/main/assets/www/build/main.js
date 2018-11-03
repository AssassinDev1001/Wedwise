webpackJsonp([87],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(25);
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

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(19);
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
            selector: 'page-myorder',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/myorder/myorder.html"*/'<!--\n  Generated template for the MyorderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Order</ion-title>\n	\n\n	\n  </ion-navbar>\n\n</ion-header>\n\n<!--\n<ion-content padding>\n-->\n\n\n\n<!-----\n	<ion-spinner *ngIf="!myOrderList" name="crescent" style="display:block; margin-left: auto; margin-right:auto; margin-top: 5px; margin-bottom:5px" ></ion-spinner>\n   <div style="margin: 10px 0 0 0;">\n      <ion-list *ngFor="let item of myOrderList">\n         <ion-item no-lines *ngFor="let post of item.items" class="items" (click)="getOrderDetails(item.id)" >\n         <h4  style="margin-top:0px;border-height: 0px;">Name: {{post.name}}</h4>\n         <h4 class="rap" style="border-height: 0px;">Price: {{post.price}}</h4>\n         </ion-item>\n         <h4  style="margin-top:10px;margin-bottom:0px; font-size:15px; padding-left:16px;border-height: 0px;">Total:{{item.total}}</h4>\n         <button ion-button icon-left style="padding-right:0px" no-margin clear (click)="deleteOder(item.id)">\n            <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n            Delete\n         </button>\n         <hr style="border-height: 1px;">\n      </ion-list>\n   </div>\n   -->\n<!--\n</ion-content>\n-->\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/myorder/myorder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], MyorderPage);
    return MyorderPage;
}());

//# sourceMappingURL=myorder.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_details_product_details__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(54);
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
            selector: 'page-category',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/category/category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  <ion-navbar>\n    <ion-title>Category</ion-title>\n	\n	<ion-buttons right>\n        <button style="background-color:white;" (click)="goToMap()">\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n							<span></span>\n						</ion-icon>\n        </button>\n    </ion-buttons>\n	\n  </ion-navbar>\n  \n	\n\n</ion-header>\n\n<ion-content>\n	<swipe-to-dismiss-layout-2\n     [data]="params.data"\n     [events]="params.events">\n   </swipe-to-dismiss-layout-2>\n</ion-content>'/*ion-inline-end:"/Users/admin/web_wise/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__ = __webpack_require__(311);
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
            selector: 'page-cart',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/cart/cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  \n    <ion-title>My Cart</ion-title>\n	\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_paypal__["a" /* PayPal */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_stripe__["a" /* Stripe */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_details_product_details__ = __webpack_require__(85);
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
            selector: 'page-wishlist',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/wishlist/wishlist.html"*/'<!--\n  Generated template for the WishlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Wish List</ion-title>\n	\n<ion-buttons right>\n        <button style="background-color:white;" (click)="goToMap()">\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n							<span></span>\n						</ion-icon>\n        </button>\n    </ion-buttons>\n	\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<swipe-to-dismiss-layout-3\n     [data]="params.data"\n     [events]="params.events">\n   </swipe-to-dismiss-layout-3>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/wishlist/wishlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(63);
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_background_geolocation__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(25);
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_admob_free__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(25);
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
    function HomePage(adMobFree, nav, navParams, functions, auth, loadingCtrl /*, private twitter: TwitterConnect*/, fb, /** private googlePlus: GooglePlus,*/ alertCtrl, values, service, platform) {
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
        this.customerList = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('/Customer-List');
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
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__list_list__["a" /* ListPage */]);
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
    HomePage.prototype.login = function (email, password) {
        var _this = this;
        this.form.email = email;
        this.form.password = password;
        console.log("New Login");
        if (this.validate()) {
            console.log("Validate");
            this.disableLogin = true;
            this.auth.login(this.form.email, this.form.password).then(function (success) {
                _this.userProfile = success;
                console.log(success);
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
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__list_list__["a" /* ListPage */]);
            }).catch(function (err) { _this.handleError(err); });
        }
    };
    HomePage.prototype.handleError = function (err) {
        console.log(err.code);
        this.errorSigninMessage = err.message;
        this.disableLogin = false;
    };
    HomePage.prototype.validate = function () {
        console.log("Validate form");
        console.log(this.form.email);
        console.log(this.form.password);
        if (this.form.email == undefined || this.form.email == '') {
            console.log("Validate form error");
            this.errorSigninMessage = 'Please enter email';
            return false;
        }
        if (this.form.password == undefined || this.form.password == '') {
            console.log("Validate form error2");
            this.errorSigninMessage = 'Please enter password';
            return false;
        }
        return true;
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
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.auth().signInWithCredential(facebookCredential).then(function (success) {
                    console.log("Firebase success: " + JSON.stringify(success));
                    _this.userProfile = success;
                    _this.values.isLoggedIn = true;
                    _this.secondLogin = false;
                    __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
                        if (snapshot.val()) {
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).set({
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
                    _this.values.userRole = __WEBPACK_IMPORTED_MODULE_10_firebase___default.a.database().ref('/users').child(_this.userProfile.uid).on('value', function (snapshot) {
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
        this.nav.push('ResetpassowrdPage');
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
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.register = function () {
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/home/home.html"*/'<!---\n\n<ion-header>\n  <ion-navbar>\n  \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n	\n	\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n-->\n\n	<login-layout-1\n	[data]="params.data"\n	[events]="params.events">\n	</login-layout-1>\n	\n\n\n\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/home/home.html"*/
            //template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
            //template: '<ion-nav [root]="rootPage"></ion-nav>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */] /*, private twitter: TwitterConnect*/, __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(35);
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

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(163);
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(35);
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
            selector: 'page-products',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/products/products.html"*/'<!--\n  Generated template for the ProductsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n  <ion-navbar>\n    <ion-title>products</ion-title>\n	\n\n\n  </ion-navbar>\n  \n\n\n</ion-header>\n\n\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/products/products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_values__ = __webpack_require__(19);
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
            selector: 'page-order-details',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/order-details/order-details.html"*/'<!--\n  Generated template for the OrderDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n \n	<ion-navbar>\n   <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    \n    <ion-title>Order Details</ion-title>\n	\n\n	\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="order-info">\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/order-details/order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(25);
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
            selector: 'page-itemmap',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/itemmap/itemmap.html"*/'<!--\n  Generated template for the ItemmapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n  \n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  \n    <ion-title>Geolocation</ion-title>\n	\n	\n		<ion-buttons right>\n          <button style="background-color:white;" >\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n							<span></span>\n						</ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div id = "map">\n\n</div>\n<!----\n<h3>Current Latitude: {{locationTracker.lat}}</h3>\n  <h3>Current Longitude: {{locationTracker.lng}}</h3>\n  <h3>Current Longitude: {{locationTracker.timestamp}}</h3>\n  --->\n  <button ion-button full primary (click)="start()">Track My Location</button>\n  <button ion-button full primary (click)="stop()">Stop Tracking Location</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/itemmap/itemmap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */]])
    ], ItemmapPage);
    return ItemmapPage;
}());

//# sourceMappingURL=itemmap.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritecommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(25);
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
            selector: 'page-writecomment',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/writecomment/writecomment.html"*/'<!--\n  Generated template for the WritecommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n   <ion-navbar>\n  \n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  \n    <ion-title>Write Comment</ion-title>\n	\n	\n		<ion-buttons right>\n        <button style="background-color:white;" (click)="goToMap()">\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n							<span></span>\n						</ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div style="margin:20px 10px 0 10px;">\n      <form #f="ngForm">\n         <ion-list>\n					  <h2 item-title style = "text-align:center;"><b>{{dataInfo.title}}</b></h2>\n					  <h4 item-title style = "text-align:center;"><small>{{dataInfo.address}}</small></h4>\n						\n						<ion-avatar item-start>\n							  <ion-list style="margin:15px 0 0 0;font-family: Arial ">\n							  <div *ngIf="!userProfiles.photoURL" class="profile-image">\n								<img src="{{values.avatar}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n							 </div>\n							 <div *ngIf="userProfiles.photoURL" class="profile-image">\n								<img src="{{userProfiles.photoURL}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n							 </div>\n							 \n							  </ion-list>\n						  </ion-avatar>\n						  \n						  <h2 item-title style = "text-align:center;">{{userProfiles.displayName}}</h2>\n						\n							 \n			\n            <ion-item style ="margin-top:20px;">\n               <textarea class="example"  style = "height:100px;width:220px;padding-right:10%;padding-left:10%;" type="text" [(ngModel)]="form.description" name="description" placeholder=\'Write Comment Here\'></textarea>\n            </ion-item>\n			\n         \n         </ion-list>\n      </form>\n   \n         <button ion-button block color="secondary" [disabled]="disableSubmit" text-uppercase (click)="addComment()">Add Comment</button>\n   </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/writecomment/writecomment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */]])
    ], WritecommentPage);
    return WritecommentPage;
}());

//# sourceMappingURL=writecomment.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
    function EventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EventPage.prototype.ionViewDidLoad = function () {
        this.images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
        console.log('ionViewDidLoad EventPage');
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/event/event.html"*/'<!--\n  Generated template for the EventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="brown">\n  \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Avant Garde Weddings & Events</ion-title>\n	<!--\n	<ion-buttons right>\n        <button style="background-color:transparent;" (click)="goToMap()">\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n							<span></span>\n						</ion-icon>\n        </button>\n    </ion-buttons>\n  -->\n	\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n	 <ion-card style="height: 200px;">\n    <img src="assets/images/background/2.jpg">\n    <div class="card-title">Avant Garde Weddings & Events</div>\n    <div class="card-subtitles">Vredekloof, cape Town ,South Africa</div>\n     <div class="card-subtitle">⭐⭐⭐⭐⭐</div>\n  </ion-card>\n\n   <ion-card>\n <ion-slides class="image-slider" loop="true"    slidesPerview="2">\n\n      <ion-slide *ngFor="let img of images">\n         <img src="assets/images/background/{{img}}"  imageViewer  class="thumb-img">\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n  <ion-card>\n\n\n\n\n     <ion-card-content>\n Content (media), information or experience provided to audience or end-users by publishers or media producers. Content industry, an umbrella term that encompasses companies owning and providing mass media and media metadata. Content provider, a provider of non-core services in the \n  </ion-card-content>\n\n\n\n</ion-card>\n\n  <ion-list>\n    <button ion-item class="navig">\n      <ion-icon name="chatboxes" item-start></ion-icon>\n      Live Chat\n       <ion-icon  md="md-arrow-forward"item-end></ion-icon>\n    </button>\n\n    <button ion-item class="navig">\n      <ion-icon name="mail" item-start></ion-icon>\n      Send Enquiry\n       <ion-icon  md="md-arrow-forward"item-end></ion-icon>\n    </button>\n\n    <button ion-item class="navig">\n      <ion-icon name="compass" item-start></ion-icon>\n      Get Directions\n       <ion-icon name="arrow-forward" item-end></ion-icon>\n    </button>\n\n    <button ion-item class="navig">\n      <ion-icon name="call" item-start></ion-icon>\n      Call\n       <ion-icon name="arrow-forward" item-end></ion-icon>\n    </button>\n\n\n  </ion-list>\n  <ion-card class="bac">\n    <h2>opening hours review to read more</h2>\n\n  <button ion-button brown full text-capitalize  class="rev">Write A  Review</button>\n     <h2>opening hours review</h2>\n  </ion-card>\n\n<ion-list class="lis">\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/user.png">\n    </ion-thumbnail>\n    <h2>testlogin</h2>\n    <p>Hayao Miyazaki • 1988</p>\n    <button ion-button clear item-end>⭐⭐⭐⭐⭐</button>\n     <span item-end>july2015</span>\n  </ion-item>\n</ion-list>\n<ion-list class="lis">\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/user.png">\n    </ion-thumbnail>\n    <h2>testlogin</h2>\n    <p>Hayao Miyazaki 1988</p>\n    <button ion-button clear item-end>⭐⭐⭐⭐⭐</button>\n    <span item-end>oct 2015</span>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/event/event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(25);
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





//import { GooglePlus } from '@ionic-native/google-plus';

//import { TwitterConnect } from '@ionic-native/twitter-connect';





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(nav, navParams, functions, auth, loadingCtrl /*, private twitter: TwitterConnect*/, fb, /** private googlePlus: GooglePlus,*/ alertCtrl, values, service) {
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
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.validateRegister(this.form)) {
            this.disableRegister = true;
            this.buttonText = "Registering...";
            this.auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName)
                .then(function () {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.auth().currentUser;
                console.log(_this.currentUser);
                _this.service.getRestaurantUserProfile(_this.currentUser.uid).on('value', function (snapshot) {
                    _this.userProfiles = snapshot.val();
                });
                _this.disableRegister = false;
                _this.buttonText = "Register Account";
            }).catch(function (err) { _this.handleRegisterError(err); });
        }
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__list_list__["a" /* ListPage */]);
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
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="brown">\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-image: url(assets/images/logo/sky.jpg); background-size:100%">\n<div class="register-form">\n      <ion-card>\n         <form #f="ngForm">\n            <ion-list>\n             \n               <ion-item>\n                  <ion-label floating>First Name</ion-label>\n                  <ion-input required type="test" [(ngModel)]="form.firstName" name="firstname"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>Last Name</ion-label>\n                  <ion-input required type="test" [(ngModel)]="form.lastName" name="lastname"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>Email</ion-label>\n                  <ion-input required type="email" [(ngModel)]="form.email" name="email"></ion-input>\n               </ion-item>\n               <ion-item>\n                  <ion-label floating>Password</ion-label>\n                  <ion-input required type="password" [(ngModel)]="form.password" name="password"></ion-input>\n               </ion-item>\n            </ion-list>\n            <div class="error-message">\n               <ion-label color="danger" text-wrap>{{errorRegisterMessage}}</ion-label>\n            </div>\n            <div class="row">\n               <button style="margin: 20px 20px 0 20px" class="login-button" ion-button block color="secondary" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableRegister" (click)="register()">{{buttonText}}</button>\n               <br>\n               <button style="margin: 0px 20px 20px 20px"class="forgot-button" ion-button clear color="danger" type="submit" class="button button-block button-clear" (click)="goToLogin()">Login</button>\n            </div>\n         </form>\n      </ion-card>\n   </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */] /*, private twitter: TwitterConnect*/, __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* Service */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(25);
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
            selector: 'page-address',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/address/address.html"*/'<!--\n  Generated template for the AddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Address</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <div class="margin">\n      <ion-list>\n         <ion-item>\n            <ion-label floating>First Name*</ion-label>\n            <ion-input required type="text" [(ngModel)]="customer.displayName" name="firstname"></ion-input>\n         </ion-item>\n         <ion-item>\n            <h3>Email: {{customer.email}}</h3>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>Phone no</ion-label>\n            <ion-input type="number" [(ngModel)]="customer.phone" name="phone" ></ion-input>\n         </ion-item>\n         <ion-item>\n            <ion-label floating>Address</ion-label>\n            <ion-input type="text" [(ngModel)]="customer.address" name="address" ></ion-input>\n         </ion-item>\n      </ion-list>\n       <div class="error-message">\n           <ion-label color="danger" text-wrap>{{errorMessage}}</ion-label>\n       </div>\n      <button ion-button no-margin item-right full color="shadow" [disabled]="disableSubmit" (click)="addAddress()">Save</button>\n   </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/address/address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__address_address__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__myorder_myorder__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(25);
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
            selector: 'page-my-profile',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/my-profile/my-profile.html"*/'<!--\n  Generated template for the MyProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n<ion-navbar>\n\n<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Profile</ion-title>\n	\n	\n		<ion-buttons right>\n        <button style="background-color:white;" (click)="goToMap()">\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n							<span></span>\n						</ion-icon>\n        </button>\n    </ion-buttons>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content padding *ngIf="values.isLoggedIn && userProfiles" >\n\n<div style ="padding-top:30px;">\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n          <ion-list style="margin:15px 0 0 0;font-family: Arial ">\n         <div *ngIf="userProfiles.photoURL" class="profile-image">\n            <img src="{{userProfiles.photoURL}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n         </div>\n         <div *ngIf="!userProfiles.photoURL" class="profile-image">\n            <img src="{{values.avatar}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n         </div>\n      </ion-list>\n      </ion-avatar>\n      <h2>{{userProfiles.displayName}}  {{userProfiles.lastName}}</h2>\n      \n    </ion-item>\n\n    \n\n    <ion-card-content>\n	\n	  <h2 style = "padding-top:20px;"><ion-icon item-start ios="ios-mail" md="md-mail"></ion-icon>Email: {{userProfiles.email}}</h2>\n      <h2 style = "padding-top:20px;"><ion-icon name = "compass"></ion-icon>Address: {{userProfiles.address}}</h2>\n	  <h2 style = "padding-top:20px;"><ion-icon name = "phone-portrait"></ion-icon>Phone Number: {{userProfiles.phone}}</h2>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left  (click)="address(userProfiles)" clear big>\n        <ion-icon name="build"></ion-icon>\n        <div>Edit</div>\n      </button>\n      </ion-col>\n    \n      <ion-col center text-center>\n        <ion-note>\n         {{userProfiles.timestamp}}\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n  \n        <ion-card style = "background-color:#D2F5E5" *ngIf="!userProfiles.facebook">\n         <form #f="ngForm" style = "background-color:#D2F5E5">\n            <ion-list style = "background-color:#D2F5E5">\n				<ion-item style = "background-color:#D2F5E5">\n                  <ion-label floating style ="background-color:white;">Password</ion-label>\n                  <ion-input required type="password" [(ngModel)]="form.password" name="password"></ion-input>\n               </ion-item>\n            </ion-list>\n      <button ion-button icon-left (click)="changePassword(form)" clear big>\n        \n        <div>Change Password</div>\n      </button>\n\n            \n         </form>\n      </ion-card>\n  \n	  </div>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/my-profile/my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */] /*, private twitter: TwitterConnect*/, __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* Service */]])
    ], MyProfilePage);
    return MyProfilePage;
}());

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
            selector: 'page-youtube',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/youtube/youtube.html"*/'<!--\n  Generated template for the YoutubePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Restaurants</ion-title>\n	\n	<ion-buttons right>\n        <button style="background-color:white;">\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n							<span></span>\n						</ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card *ngFor = "let video of videos">\n		<ion-card-header>\n			{{video.title}}\n		</ion-card-header>\n		\n		<ion-card-content>\n			<iframe width ="100%" height="200px" [src]="video.video | youtube" frameborder = "0" allowfullscreen>\n			</iframe>\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/youtube/youtube.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], YoutubePage);
    return YoutubePage;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 227:
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
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/action-sheet/layout-1/action-sheet-layout-1.module": [
		620,
		8
	],
	"../components/action-sheet/layout-2/action-sheet-layout-2.module": [
		621,
		7
	],
	"../components/action-sheet/layout-3/action-sheet-layout-3.module": [
		622,
		64
	],
	"../components/check-box/layout-1/check-box-layout-1.module": [
		623,
		63
	],
	"../components/check-box/layout-2/check-box-layout-2.module": [
		624,
		62
	],
	"../components/check-box/layout-3/check-box-layout-3.module": [
		625,
		61
	],
	"../components/full-screen-gallery/full-screen-gallery.module": [
		626,
		60
	],
	"../components/image-gallery/layout-1/image-gallery-layout-1.module": [
		627,
		59
	],
	"../components/image-gallery/layout-2/image-gallery-layout-2.module": [
		628,
		58
	],
	"../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module": [
		629,
		57
	],
	"../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module": [
		630,
		86
	],
	"../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module": [
		631,
		56
	],
	"../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module": [
		632,
		85
	],
	"../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module": [
		633,
		55
	],
	"../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module": [
		634,
		54
	],
	"../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module": [
		635,
		53
	],
	"../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module": [
		636,
		52
	],
	"../components/list-view/expandable/layout-1/expandable-layout-1.module": [
		637,
		51
	],
	"../components/list-view/expandable/layout-2/expandable-layout-2.module": [
		638,
		84
	],
	"../components/list-view/expandable/layout-3/expandable-layout-3.module": [
		639,
		50
	],
	"../components/list-view/google-card/layout-1/google-card-layout-1.module": [
		640,
		83
	],
	"../components/list-view/google-card/layout-2/google-card-layout-2.module": [
		641,
		49
	],
	"../components/list-view/google-card/layout-3/google-card-layout-3.module": [
		642,
		48
	],
	"../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module": [
		643,
		5
	],
	"../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module": [
		644,
		4
	],
	"../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module": [
		645,
		3
	],
	"../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module": [
		646,
		47
	],
	"../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module": [
		647,
		82
	],
	"../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module": [
		648,
		81
	],
	"../components/login/layout-1/login-layout-1.module": [
		649,
		80
	],
	"../components/login/layout-2/login-layout-2.module": [
		650,
		46
	],
	"../components/maps/layout-1/maps-layout-1.module": [
		651,
		0
	],
	"../components/maps/layout-2/maps-layout-2.module": [
		652,
		2
	],
	"../components/maps/layout-3/maps-layout-3.module": [
		653,
		1
	],
	"../components/parallax/layout-1/parallax-layout-1.module": [
		654,
		6
	],
	"../components/parallax/layout-2/parallax-layout-2.module": [
		655,
		11
	],
	"../components/parallax/layout-3/parallax-layout-3.module": [
		656,
		10
	],
	"../components/parallax/layout-4/parallax-layout-4.module": [
		657,
		9
	],
	"../components/qrcode/layout-1/qrcode-layout-1.module": [
		658,
		45
	],
	"../components/radio-button/layout-1/radio-button-layout-1.module": [
		659,
		44
	],
	"../components/radio-button/layout-2/radio-button-layout-2.module": [
		660,
		43
	],
	"../components/radio-button/layout-3/radio-button-layout-3.module": [
		661,
		42
	],
	"../components/range/layout-1/range-layout-1.module": [
		662,
		41
	],
	"../components/range/layout-2/range-layout-2.module": [
		663,
		40
	],
	"../components/range/layout-3/range-layout-3.module": [
		664,
		39
	],
	"../components/range/layout-4/range-layout-4.module": [
		665,
		38
	],
	"../components/register/layout-1/register-layout-1.module": [
		666,
		37
	],
	"../components/register/layout-2/register-layout-2.module": [
		667,
		36
	],
	"../components/search-bar/layout-1/search-bar-layout-1.module": [
		668,
		35
	],
	"../components/search-bar/layout-2/search-bar-layout-2.module": [
		669,
		34
	],
	"../components/search-bar/layout-3/search-bar-layout-3.module": [
		670,
		33
	],
	"../components/select/layout-1/select-layout-1.module": [
		671,
		32
	],
	"../components/select/layout-2/select-layout-2.module": [
		672,
		31
	],
	"../components/select/layout-3/select-layout-3.module": [
		673,
		30
	],
	"../components/select/layout-4/select-layout-4.module": [
		674,
		29
	],
	"../components/select/layout-5/select-layout-5.module": [
		675,
		28
	],
	"../components/select/layout-6/select-layout-6.module": [
		676,
		27
	],
	"../components/spinner/spinner.module": [
		677,
		26
	],
	"../components/splash-screen/layout-1/splash-screen-layout-1.module": [
		678,
		25
	],
	"../components/splash-screen/layout-2/splash-screen-layout-2.module": [
		679,
		24
	],
	"../components/splash-screen/layout-3/splash-screen-layout-3.module": [
		680,
		23
	],
	"../components/sub-image-gallery/sub-image-gallery.module": [
		681,
		22
	],
	"../components/tabs/layout-1/tabs-layout-1.module": [
		682,
		21
	],
	"../components/tabs/layout-2/tabs-layout-2.module": [
		683,
		20
	],
	"../components/tabs/layout-3/tabs-layout-3.module": [
		684,
		19
	],
	"../components/toggle/layout-1/toggle-layout-1.module": [
		685,
		18
	],
	"../components/toggle/layout-2/toggle-layout-2.module": [
		686,
		17
	],
	"../components/toggle/layout-3/toggle-layout-3.module": [
		687,
		16
	],
	"../components/wizard/layout-1/wizard-layout-1.module": [
		688,
		15
	],
	"../components/wizard/layout-2/wizard-layout-2.module": [
		689,
		14
	],
	"../components/wizard/layout-3/wizard-layout-3.module": [
		690,
		13
	],
	"../pages/address/address.module": [
		691,
		79
	],
	"../pages/cart/cart.module": [
		692,
		78
	],
	"../pages/category/category.module": [
		693,
		77
	],
	"../pages/event/event.module": [
		694,
		76
	],
	"../pages/geotracking/geotracking.module": [
		695,
		12
	],
	"../pages/itemmap/itemmap.module": [
		696,
		75
	],
	"../pages/map/map.module": [
		697,
		74
	],
	"../pages/my-profile/my-profile.module": [
		698,
		73
	],
	"../pages/myorder/myorder.module": [
		699,
		72
	],
	"../pages/order-details/order-details.module": [
		700,
		71
	],
	"../pages/product-details/product-details.module": [
		701,
		70
	],
	"../pages/products/products.module": [
		703,
		69
	],
	"../pages/register/register.module": [
		702,
		68
	],
	"../pages/wishlist/wishlist.module": [
		704,
		67
	],
	"../pages/writecomment/writecomment.module": [
		705,
		66
	],
	"../pages/youtube/youtube.module": [
		706,
		65
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
webpackAsyncContext.id = 268;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_products_products__ = __webpack_require__(212);
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
            selector: 'appearance-animation-layout-2',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/list-view/appearance-animation/layout-2/appearance-animation.html"*/'<!--Theme Appearance animation (Fade In Right)-->\n<ion-content has-header>\n    <ion-grid no-padding *ngIf="data != null">\n        <ion-row>\n            <ion-col col-12>\n                <ion-list no-margin>\n                    <ion-item border no-lines [ngClass]="animateClass" *ngFor="let item of data.items; let i = index;" (click)="getProductDetails(item.id)">\n                        <ion-avatar item-left>\n                            <img [src]="item.image" alt="{{item.title}}" />\n                        </ion-avatar>\n                        <h2 item-title>{{item.title}} </h2>\n						<p>{{item.price}}$</p>\n						<!---\n                        <ion-icon icon-small item-right (click)="onEvent(\'onFavorite\', item, $event)">\n                            <i class="icon" [ngClass]="{\'icon-heart\': item.favorite, \'icon-heart-outline\': !item.favorite}"></i>\n                        </ion-icon>\n						-->\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/admin/web_wise/src/components/list-view/appearance-animation/layout-2/appearance-animation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_products_products__["a" /* ProductsPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], AppearanceAnimationLayout2);
    return AppearanceAnimationLayout2;
}());

//# sourceMappingURL=appearance-animation-layout-2.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_myorder_myorder__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_order_details_order_details__ = __webpack_require__(213);
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
            selector: 'appearance-animation-layout-4',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/list-view/appearance-animation/layout-4/appearance-animation.html"*/'<!--Theme Appearance animation (Fade In)-->\n<ion-content has-header>\n\n\n    <ion-grid no-padding *ngIf="data != null">\n        <ion-row>\n            <ion-col col-12>\n	\n			\n			\n                <ion-list no-margin *ngFor="let item of data.items;let i = index;">\n                    <ion-item border no-lines [ngClass]="animateClass" (click)="getOrderDetails(item.id)" >\n					<h2 item-title style = "background-color:#4AF3A7;"><i style = "color:white;">Order Date: {{item.timeStamp | date}}</i></h2>\n					<ion-item no-lines *ngFor="let post of item.items" class="items"  \n					style = "background-color:#D1F3E3;">\n						\n						\n						<ion-avatar item-left>\n                            <img [src]="post.image" alt="{{post.name}}" />\n                        </ion-avatar>\n						\n							 <h4 item-title>Name: {{post.name}}</h4>\n							 <h4 item-title>Price: {{post.price}}$</h4>\n							 <h4 item-title>Quantity: {{post.quantity}}</h4>\n							 \n						 </ion-item>\n					\n                        <h2  item-title style ="background-color:#D1F3E3;text-align:right;"><b>Status:{{item.status}}</b></h2>\n						\n						 <h2  item-title style ="background-color:#D1F3E3;text-align:right;"><b>Total:{{item.total}}$</b></h2>\n         \n         <hr style="border-height: 5px;">\n		 <!---\n                        <h2 item-title>{{item.title}}</h2>\n                        \n						-->\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/admin/web_wise/src/components/list-view/appearance-animation/layout-4/appearance-animation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_myorder_myorder__["a" /* MyorderPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], AppearanceAnimationLayout4);
    return AppearanceAnimationLayout4;
}());

//# sourceMappingURL=appearance-animation-layout-4.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_list__ = __webpack_require__(61);
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
            selector: 'expandable-layout-2',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/list-view/expandable/layout-2/expandable.html"*/'<!-- Themes Expandable - Full image with CTA -->\n<ion-content has-header>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row>\n      <ion-col col-12 no-padding no-margin>\n        <ion-list>\n          <ul no-margin no-padding class="collapsible">\n            <li margin *ngFor="let group of data.items;">\n              <!-- Expandable Full image with CTA Header-->\n              <div class="collapsible-header" (click)="toggleGroup(group)">\n                <ion-item no-margin padding no-lines background-size\n                [ngStyle]="{\'background-image\': \'url(\' + group.backgroundImage + \')\'}">\n                  <!-- Subtitle Card -->\n                  <h3 ion-text color="light" text-wrap text-capitalize item-subtitle>{{group.subtitle}}</h3>\n                  <!-- Title Card -->\n                  <h1 ion-text color="light" text-wrap header-title>{{group.title}}</h1>\n                  <!-- Icon And Text For Read More-->\n                  <div read-more>\n                    <ion-icon icon-medium float-left name="{{group.icon}}"></ion-icon>\n                    <span span-medium>{{group.iconText}}</span>\n                  </div>\n                </ion-item>\n              </div>\n              <!-- Expandable Full image with CTA Body -->\n              <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)">\n                <ion-item text-wrap no-lines>\n                  <!-- Icon Rating Star -->\n				  <!--\n                  <ion-icon float-left *ngFor="let item of group.expandItems.iconsStars;let i = index"\n                  (click)="onStarClass(group.expandItems.iconsStars, i, $event);">\n                    <i icon-small *ngIf="item.isActive" class="icon {{item.iconActive}}"></i>\n                    <i icon-small *ngIf="!item.isActive" class="icon {{item.iconInactive}}"></i>\n                  </ion-icon>\n				  -->\n                  <!-- Reviews Star -->\n				  <!---\n                  <span span-small>{{group.expandItems.reviews}}</span>\n				  --->\n				  <!--\n                  <div (click)="onEvent(\'onItemClick\', group, $event)">\n				  --->\n				  <div (click)="getCategories(group.id)">\n                    <!-- Titile -->\n                    <h2 margin-top subitem-title>{{group.title}}</h2>\n                    <!-- Description -->\n                    <p subitem-subtitle>{{group.description}}</p>\n                  </div>\n\n                </ion-item>\n              </div>\n            </li>\n          </ul>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/list-view/expandable/layout-2/expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], ExpandableLayout2);
    return ExpandableLayout2;
}());

//# sourceMappingURL=expandable-layout-2.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCardLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
            selector: 'google-card-layout-1',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/list-view/google-card/layout-1/google-card.html"*/'<!--Theme Google Card - Full Image Cards-->\n<ion-grid *ngIf="data != null">\n    <ion-row card-background-page>\n        <ion-col no-padding col-12 col-md-12 col-lg-6 *ngFor="let item of data.items;let i = index">\n            <ion-card background-size text-left (click)="onEvent(\'onItemClick\', item.title, $event)"\n            [ngStyle]="{\'background-image\': \'url(\' + item.backgroundImage + \')\'}">\n                <!-- Card Title-->\n                <div text-wrap card-title>{{item.title}}</div>\n                <!-- Card Subtitle-->\n                <div text-wrap card-subtitle>{{item.info}}</div>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/list-view/google-card/layout-1/google-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleCardLayout1);
    return GoogleCardLayout1;
}());

//# sourceMappingURL=google-card-layout-1.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_category_category__ = __webpack_require__(122);
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
            selector: 'swipe-to-dismiss-layout-2',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss.html"*/'<!-- Themes Swipe To Dismiss - Products + CTA -->\n<ion-grid no-padding *ngIf="data != null">\n  <ion-row>\n    <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n      <!-- Header top Swipe To Dismiss Products + CTA -->\n\n      <!-- Content -->\n      <ion-list no-margin>\n        <ion-item-sliding *ngFor="let item of data.items" #slidingItem>\n          <ion-item border no-lines (click)="getItems(item.id)">\n            <!-- Images -->\n            <ion-thumbnail item-start>\n              <img src="{{item.image}}">\n            </ion-thumbnail>\n            <!-- Title -->\n            <h2 item-title>{{item.title}}</h2>\n            <!-- Subtitle -->\n            <p item-subtitle text-wrap>{{item.subtitle}}</p>\n			<p item-subtitle text-wrap>{{item.distance}}</p>\n            <!-- Badge -->\n            <ion-badge text-uppercase class="badge-light" item-end>{{item.ionBadge}}</ion-badge>\n			\n          </ion-item>\n          <!--Action Button-->\n		  <!---\n          <ion-item-options no-lines>\n            \n            <button ion-button text-capitalize (click)="delete(item)">\n              {{item.delate}}\n            </button>\n          </ion-item-options>\n		  -->\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_category_category__["a" /* CategoryPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], SwipeToDismissLayout2);
    return SwipeToDismissLayout2;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-2.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_wishlist_wishlist__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_values__ = __webpack_require__(19);
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
            selector: 'swipe-to-dismiss-layout-3',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss.html"*/'<!-- Themes Swipe To Dismiss - Full width image -->\n<ion-grid no-padding *ngIf="data != null">\n  <ion-row>\n    <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-self-end>\n      <ion-list padding no-margin>\n        <ion-item-sliding margin-bottom *ngFor="let item of data.items" #slidingItem>\n		<!--\n          <ion-item no-lines background-size (click)="onEvent(\'onItemClick\', item.title, $event)"\n		  -->\n		  <ion-item no-lines background-size (click)="goToItem(item)" [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}">\n            <div title-block>\n              <!-- Subtitle -->\n              <p item-subtitle>{{item.subtitle}}</p>\n              <!-- Title -->\n              <h1 header-title text-wrap>{{item.title}}</h1>\n            </div>\n          </ion-item>\n          <!---Action Button-->\n          <ion-item-options>\n            <button ion-button text-capitalize transparent padding (click)="delete(item)">\n              {{item.delate}}\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_wishlist_wishlist__["a" /* WishlistPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_values__["a" /* Values */]])
    ], SwipeToDismissLayout3);
    return SwipeToDismissLayout3;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-3.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(25);
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
        console.log(this.form.email);
        console.log(this.form.password);
        this.homepage.login(this.form.email, this.form.password);
    };
    LoginLayout1.prototype.facebookLogin = function () {
        console.log("Facebook login");
        this.homepage.facebookLogin();
    };
    LoginLayout1.prototype.goToRegister = function () {
        this.homepage.goToRegister();
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
            selector: 'login-layout-1',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/login/layout-1/login.html"*/'<!-- Themes Login + logo 2 -->\n<ion-content has-header style ="background-image:url(\'assets/images/logo/sky.jpg\')">\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row padding-horizontal align-self-center>\n      <ion-col align-self-end col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!---Logo-->\n\n        <!---Logo Subtitle-->\n        <h2 login-subtitle no-margin>{{data.subtitle}}</h2>\n        <!---Logo Title\n        <h1 ion-text color="accent" login-title no-margin>{{data.title}}</h1>\n      -->\n      \n      </ion-col>\n      <ion-col align-self-start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!---Input field username-->\n        <ion-item no-padding margin-top style = "background:none;">\n          <ion-label color="dark" stacked>{{data.labelUsername}}</ion-label>\n          <ion-input required type="text" placeholder="{{data.username}}" [(ngModel)]="form.email" name = "email"></ion-input>\n        </ion-item>\n        <!---Input field password-->\n        <ion-item no-padding style = "background:none;">\n          <ion-label color="dark" stacked>{{data.labelPassword}}</ion-label>\n          <ion-input required type="password" placeholder="{{data.password}}" [(ngModel)]="form.password" name = "password"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <!---Share Section-->\n      <ion-col align-self-end bottom-form col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!---Login button-->\n\n		<button ion-button default-button full text-capitalize (click)="login()">{{data.login}}</button>\n        <!---Facebook button-->\n        \n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6>\n        <p text-right>Don\'t have account?</p>\n      </ion-col>\n      <ion-col col-6 col-sm-6 col-md-6>\n        <button ion-button button-clear clear text-capitalize (click)="goToRegister()">{{data.register}}</button>\n      </ion-col>\n      <!---End Share Section-->\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/login/layout-1/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */]])
    ], LoginLayout1);
    return LoginLayout1;
}());

//# sourceMappingURL=login-layout-1.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values__ = __webpack_require__(19);
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
            selector: 'parallax-layout-2',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/parallax/layout-2/parallax.html"*/'<!--- Theme Parallax - Profile -->\n\n<ion-header header-ios>\n  <ion-navbar transparent [ngClass]="{\'active\':isClassActive()}">\n    <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>My profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!-- Content -->\n<ion-content elastic-header>\n<!--\n  <div padding background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n    <ion-thumbnail *ngIf="data != null">\n      <img [src]="data[0].avatar" />\n    </ion-thumbnail>\n	-->\n    <!-- Parallx Title -->\n	<!--\n    <h2 text-center parallax-title *ngIf="data != null">{{data[0].title}}</h2>\n	-->\n    <!-- Parallx Subtitle -->\n	<!--\n    <h3 text-center parallax-subtitle *ngIf="data != null">{{data[0].subtitle}}</h3>\n  </div>\n  -->\n  \n  <!--\n  <ion-list *ngIf="data != null">\n    <ion-item border no-lines *ngFor="let item of data.items;let i = index" (click)="onEvent(\'onItemClick\', item)">\n      <ion-avatar item-start>\n        <img [src]="item.avatar" />\n      </ion-avatar>\n      <h2 item-title>{{item.title}}</h2>\n      <h3 item-subtitle text-wrap>{{item.subtitle}}</h3>\n      <button text-capitalize button-clear ion-button item-end clear>{{item.button}}</button>\n\n    </ion-item>\n  </ion-list>\n  -->\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/parallax/layout-2/parallax.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_values__["a" /* Values */]])
    ], ParallaxLayout2);
    return ParallaxLayout2;
}());

//# sourceMappingURL=parallax-layout-2.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_product_details_product_details__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(25);
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
            selector: 'parallax-layout-3',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/parallax/layout-3/parallax.html"*/'<!--- Theme Parallax - Product -->\n<ion-header header-ios>\n  <ion-navbar transparent [ngClass]="{\'active\':isClassActive()}">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="data[0] != null" text-left>{{data[0].title}}</ion-title>\n	\n		<ion-buttons right>\n        <button style="background-color:white;" (click)="goToMap(data[0])">\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n							<span></span>\n						</ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content elastic-header>\n  <!-- Parallax Big Image -->\n  <ion-item no-lines background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + data[0].firebase_url + \')\'}">\n  \n  \n  <!--\n		<ion-icon icon-big item-right color="primary" (click)="addToFavourite(data[0])"  style="padding-right:25px;padding-top:120px;">\n                            <i class="icon" [ngClass]="{\'icon-heart\': data[0].favorite, \'icon-heart-outline\': !data[0].favorite}"></i>\n            </ion-icon>\n			\n			\n			\n			-->\n			\n			<ion-icon icon-big item-right name="call" color = "primary" (click)="call(data[0])" style="position:relative; font-size:2em;padding-top:120px;"  >\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:15px !important"></span>\n						</ion-icon>\n			\n			<ion-icon icon-big item-right name="map" color = "primary" (click)="goToMap(data[0])" style="position:relative; font-size:2em;padding-top:120px;"  >\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:15px !important"></span>\n						</ion-icon>\n					\n					\n						<ion-icon icon-big item-right name="chatbubbles" color = "primary" (click)="writeComment(data[0])" style="position:relative; font-size:2em;padding-top:120px;"  >\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:15px !important"></span>\n						</ion-icon>	\n			 \n	<ion-icon icon-big item-right color="primary" (click)="addToFavourite(data[0])"  style="padding-top:120px;">\n                   <i [ngClass]="{\'icon-heart-outline\': !favorite}" ></i>\n				   \n	</ion-icon>\n	\n	<ion-icon icon-big item-right color="primary" (click)="removeFavourite()"  style="padding-top:120px;">\n                  <i [ngClass]="{\'icon-heart\': favorite}" ></i>\n	</ion-icon>\n	\n\n	\n\n	\n	\n				\n						<!----\n    <button ion-fixed item-end ion-button color="primary" button-action-shit *ngIf="data[0] != null" (click)="onEvent(\'onShare\', data[0])">\n		<ion-icon icon-small item-right (click)="onEvent(\'onFavorite\', data[0], $event)">\n                            <i class="icon" [ngClass]="{\'icon-heart\': data[0].favorite, \'icon-heart-outline\': !data[0].favorite}"></i>\n                        </ion-icon>\n	\n	\n        <ion-icon  name="heart"></ion-icon>\n		\n      </button>\n	  -->\n  </ion-item>\n  <!--Content-->\n  <ion-grid no-padding *ngIf="data[0] != null">\n    <ion-row>\n      <ion-col col-12>\n        <ion-list no-margin>\n          <ion-item-group (click)="onEvent(\'onItemClick\', data[0])">\n            <ion-item-divider no-lines>\n              <!-- Name Category-->\n            <!--  <span new-category margin-top text-uppercase>{{data[0].name}}</span> --->\n              <!-- Parallax Title -->\n              <h2 new-category text-uppercase>{{data[0].title}}</h2>\n              <!-- Parallax Subtitle -->\n              <!---<h3 parallax-subtitle text-wrap>{{data[0].description}}</h3>--->\n		\n              	<ion-badge style ="align:right;" item-end text-uppercase class="badge-dark" (click)="onEvent(\'onProceed\', data[0], $event)">{{data[0].distance}}</ion-badge>\n            </ion-item-divider>\n			\n			\n            <!-- Description Products -->\n            <ion-item border no-lines no-margin>\n              <p parallax-description text-wrap>{{data[0].description}}</p>\n			  \n			  <p></p>\n			  <p parallax-description text-wrap><b>Phone number: </b>{{data[0].phonenumber}}</p>\n			  \n			  <p></p>\n			  <p parallax-description text-wrap><b>Address: </b>{{data[0].address}}</p>\n			  	  \n			\n			  \n            </ion-item>\n			  \n			\n		\n			\n			<ion-item no-lines *ngFor="let post of data.comments" class="items"  \n					style = "background-color:#D1F3E3;">\n						\n						<!--\n						 <ion-avatar item-start>\n							  <ion-list style="margin:15px 0 0 0;font-family: Arial ">\n							  <div *ngIf="!userProfiles.photoURL" class="profile-image">\n								<img src="{{values.avatar}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n							 </div>\n							 <div *ngIf="userProfiles.photoURL" class="profile-image">\n								<img src="{{userProfiles.photoURL}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;">\n							 </div>\n							 \n						  </ion-list>\n						  </ion-avatar>\n						  -->\n						\n						<ion-avatar item-left>\n                            <img [src]="post.photo_url" alt="{{post.user_name}}" />\n                        </ion-avatar>\n						\n						\n						\n							 <h4 item-title>{{post.user_name}}</h4>\n							 <h4 item-title>{{post.comment}}</h4>\n							 \n	\n						<ion-icon name="trash" *ngIf="post.user_id == userProfilesKey" color = "primary" (click)="deleteComment(data[0],post.id)" style="position:relative; font-size:2em;"  >\n							<span style="position:absolute; top:-.3em; left:.5em; font-size:15px !important"></span>\n						</ion-icon>\n							 \n							 \n						 </ion-item>\n			\n			\n          \n          </ion-item-group>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer no-shadow>\n	<ion-toolbar position="bottom">\n		<button ion-button full (click)="goToMap(data[0])">Find Location</button>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/parallax/layout-3/parallax.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pages_product_details_product_details__["a" /* ProductDetailsPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_values__["a" /* Values */]])
    ], ParallaxLayout3);
    return ParallaxLayout3;
}());

//# sourceMappingURL=parallax-layout-3.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxLayout4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
            selector: 'parallax-layout-4',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/parallax/layout-4/parallax.html"*/'<!--- Theme Parallax - News -->\n<ion-header header-ios>\n  <ion-navbar transparent [ngClass]="{\'active\':isClassActive()}">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="data != null" text-left>{{data.headerTitle}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<!--- Header Big Image-->\n<ion-content elastic-header>\n  <ion-item no-lines background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n    <div title-block *ngIf="data != null">\n      <!--- Category -->\n      <span new-category>{{data.category}}</span>\n      <!--- Parallax Title -->\n      <h1 parallax-title text-wrap>{{data.title}}</h1>\n    </div>\n  </ion-item>\n  <ion-item-group *ngIf="data != null">\n    <ion-item-divider border no-lines>\n      <!--- Avatar -->\n      <ion-avatar item-start>\n        <img [src]="data.avatar" />\n      </ion-avatar>\n      <!-- Avatar Title -->\n      <h2 item-subtitle>{{data.subtitle}}</h2>\n      <!--- Button Share-->\n      <button item-end ion-button color="primary" button-action-shit (click)="onEvent(\'onShare\', data)">\n        <ion-icon name="{{data.shareIcon}}"></ion-icon>\n      </button>\n    </ion-item-divider>\n    <!-- Content -->\n    <ion-item no-margin no-lines *ngFor="let item of data.items;let i = index">\n      <!-- Content Title-->\n      <h2 parallax-subtitle margin-bottom text-wrap>{{item.title}}</h2>\n      <!-- Content Description-->\n      <p parallax-description text-wrap>{{item.subtitle}}</p>\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/parallax/layout-4/parallax.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ParallaxLayout4);
    return ParallaxLayout4;
}());

//# sourceMappingURL=parallax-layout-4.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(473);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_category_category__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_products_products__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_product_details_product_details__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_address_address__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_myorder_myorder__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_details_order_details__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_my_profile_my_profile__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_map_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_itemmap_itemmap__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_writecomment_writecomment__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_youtube_youtube__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_event_event__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_youtube_youtube__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_http__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ngx_translate_http_loader__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_admob_free__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_auth__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_config__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_facebook__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_wp_service__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_functions_functions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_social_sharing__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_push__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_paypal__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_stripe__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_native_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_login_layout_1_login_layout_1__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_list_view_google_card_layout_1_google_card_layout_1__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_list_view_expandable_layout_2_expandable_layout_2__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_list_view_appearance_animation_layout_2_appearance_animation_layout_2__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_list_view_swipe_to_dismiss_layout_2_swipe_to_dismiss_layout_2__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_list_view_swipe_to_dismiss_layout_3_swipe_to_dismiss_layout_3__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_parallax_layout_3_parallax_layout_3__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_parallax_layout_4_parallax_layout_4__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_list_view_appearance_animation_layout_4_appearance_animation_layout_4__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_parallax_layout_2_parallax_layout_2__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_geolocation__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_background_geolocation__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_location_tracker_location_tracker__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_ionic_img_viewer__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_call_number__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























/*----------------PROVIDERS & NATIVES---------------------*/






//import { GooglePlus } from '@ionic-native/google-plus';


//import { TwitterConnect } from '@ionic-native/twitter-connect';




//import { Crop } from '@ionic-native/crop';















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_27__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_41__components_login_layout_1_login_layout_1__["a" /* LoginLayout1 */],
                __WEBPACK_IMPORTED_MODULE_42__components_list_view_google_card_layout_1_google_card_layout_1__["a" /* GoogleCardLayout1 */],
                __WEBPACK_IMPORTED_MODULE_43__components_list_view_expandable_layout_2_expandable_layout_2__["a" /* ExpandableLayout2 */],
                __WEBPACK_IMPORTED_MODULE_6__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_44__components_list_view_appearance_animation_layout_2_appearance_animation_layout_2__["a" /* AppearanceAnimationLayout2 */],
                __WEBPACK_IMPORTED_MODULE_45__components_list_view_swipe_to_dismiss_layout_2_swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */],
                __WEBPACK_IMPORTED_MODULE_7__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_47__components_parallax_layout_3_parallax_layout_3__["a" /* ParallaxLayout3 */],
                __WEBPACK_IMPORTED_MODULE_8__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_48__components_parallax_layout_4_parallax_layout_4__["a" /* ParallaxLayout4 */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_myorder_myorder__["a" /* MyorderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_46__components_list_view_swipe_to_dismiss_layout_3_swipe_to_dismiss_layout_3__["a" /* SwipeToDismissLayout3 */],
                __WEBPACK_IMPORTED_MODULE_49__components_list_view_appearance_animation_layout_4_appearance_animation_layout_4__["a" /* AppearanceAnimationLayout4 */],
                __WEBPACK_IMPORTED_MODULE_50__components_parallax_layout_2_parallax_layout_2__["a" /* ParallaxLayout2 */],
                __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_itemmap_itemmap__["a" /* ItemmapPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_writecomment_writecomment__["a" /* WritecommentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_youtube_youtube__["a" /* YoutubePipe */],
                __WEBPACK_IMPORTED_MODULE_19__pages_youtube_youtube__["a" /* YoutubePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_event_event__["a" /* EventPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["b" /* HttpClientModule */],
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
                        { loadChildren: '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module#DragAndDropLayout1Module', name: 'DragAndDropLayout1', segment: 'drag-and-drop-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module#DragAndDropLayout2Module', name: 'DragAndDropLayout2', segment: 'drag-and-drop-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module#DragAndDropLayout3Module', name: 'DragAndDropLayout3', segment: 'drag-and-drop-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-1/expandable-layout-1.module#ExpandableLayout1Module', name: 'ExpandableLayout1', segment: 'expandable-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-2/expandable-layout-2.module#ExpandableLayout2Module', name: 'ExpandableLayout2', segment: 'expandable-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-3/expandable-layout-3.module#ExpandableLayout3Module', name: 'ExpandableLayout3', segment: 'expandable-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-1/google-card-layout-1.module#GoogleCardLayout1Module', name: 'GoogleCardLayout1', segment: 'google-card-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-2/google-card-layout-2.module#GoogleCardLayout2Module', name: 'GoogleCardLayout2', segment: 'google-card-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-3/google-card-layout-3.module#GoogleCardLayout3Module', name: 'GoogleCardLayout3', segment: 'google-card-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module#StickyListHeaderLayout1Module', name: 'StickyListHeaderLayout1', segment: 'sticky-list-header-layout-1', priority: 'low', defaultHistory: [] },
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
                        { loadChildren: '../components/radio-button/layout-1/radio-button-layout-1.module#RadioButtonLayout1Module', name: 'RadioButtonLayout1', segment: 'radio-button-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-2/radio-button-layout-2.module#RadioButtonLayout2Module', name: 'RadioButtonLayout2', segment: 'radio-button-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-3/radio-button-layout-3.module#RadioButtonLayout3Module', name: 'RadioButtonLayout3', segment: 'radio-button-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-1/range-layout-1.module#RangeLayout1Module', name: 'RangeLayout1', segment: 'range-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-2/range-layout-2.module#RangeLayout2Module', name: 'RangeLayout2', segment: 'range-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-3/range-layout-3.module#RangeLayout3Module', name: 'RangeLayout3', segment: 'range-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-4/range-layout-4.module#RangeLayout4Module', name: 'RangeLayout4', segment: 'range-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-1/register-layout-1.module#RegisterLayout1Module', name: 'RegisterLayout1', segment: 'register-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-2/register-layout-2.module#RegisterLayout2Module', name: 'RegisterLayout2', segment: 'register-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-1/search-bar-layout-1.module#SearchBarLayout1Module', name: 'SearchBarLayout1', segment: 'search-bar-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-2/search-bar-layout-2.module#SearchBarLayout2Module', name: 'SearchBarLayout2', segment: 'search-bar-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-3/search-bar-layout-3.module#SearchBarLayout3Module', name: 'SearchBarLayout3', segment: 'search-bar-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-1/select-layout-1.module#SelectLayout1Module', name: 'SelectLayout1', segment: 'select-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-2/select-layout-2.module#SelectLayout2Module', name: 'SelectLayout2', segment: 'select-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-3/select-layout-3.module#SelectLayout3Module', name: 'SelectLayout3', segment: 'select-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-4/select-layout-4.module#SelectLayout4Module', name: 'SelectLayout4', segment: 'select-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-5/select-layout-5.module#SelectLayout5Module', name: 'SelectLayout5', segment: 'select-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-6/select-layout-6.module#SelectLayout6Module', name: 'SelectLayout6', segment: 'select-layout-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/spinner/spinner.module#SpinnerModule', name: 'Spinner', segment: 'spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-1/splash-screen-layout-1.module#SplashScreenLayout1Module', name: 'SplashScreenLayout1', segment: 'splash-screen-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-2/splash-screen-layout-2.module#SplashScreenLayout2Module', name: 'SplashScreenLayout2', segment: 'splash-screen-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-3/splash-screen-layout-3.module#SplashScreenLayout3Module', name: 'SplashScreenLayout3', segment: 'splash-screen-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/sub-image-gallery/sub-image-gallery.module#SubImageGalleryModule', name: 'SubImageGallery', segment: 'sub-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-1/tabs-layout-1.module#TabsLayout1Module', name: 'TabsLayout1', segment: 'tabs-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-2/tabs-layout-2.module#TabsLayout2Module', name: 'TabsLayout2', segment: 'tabs-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-3/tabs-layout-3.module#TabsLayout3Module', name: 'TabsLayout3', segment: 'tabs-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-1/toggle-layout-1.module#ToggleLayout1Module', name: 'ToggleLayout1', segment: 'toggle-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-2/toggle-layout-2.module#ToggleLayout2Module', name: 'ToggleLayout2', segment: 'toggle-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-3/toggle-layout-3.module#ToggleLayout3Module', name: 'ToggleLayout3', segment: 'toggle-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-1/wizard-layout-1.module#WizardLayout1Module', name: 'WizardLayout1', segment: 'wizard-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-2/wizard-layout-2.module#WizardLayout2Module', name: 'WizardLayout2', segment: 'wizard-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-3/wizard-layout-3.module#WizardLayout3Module', name: 'WizardLayout3', segment: 'wizard-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/geotracking/geotracking.module#GeotrackingPageModule', name: 'GeotrackingPage', segment: 'geotracking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/itemmap/itemmap.module#ItemmapPageModule', name: 'ItemmapPage', segment: 'itemmap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myorder/myorder.module#MyorderPageModule', name: 'MyorderPage', segment: 'myorder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wishlist/wishlist.module#WishlistPageModule', name: 'WishlistPage', segment: 'wishlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/writecomment/writecomment.module#WritecommentPageModule', name: 'WritecommentPage', segment: 'writecomment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/youtube/youtube.module#YoutubePageModule', name: 'YoutubePage', segment: 'youtube', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_54_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_24__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_24__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_26__angular_http__["b" /* Http */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_41__components_login_layout_1_login_layout_1__["a" /* LoginLayout1 */],
                __WEBPACK_IMPORTED_MODULE_42__components_list_view_google_card_layout_1_google_card_layout_1__["a" /* GoogleCardLayout1 */],
                __WEBPACK_IMPORTED_MODULE_43__components_list_view_expandable_layout_2_expandable_layout_2__["a" /* ExpandableLayout2 */],
                __WEBPACK_IMPORTED_MODULE_6__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_44__components_list_view_appearance_animation_layout_2_appearance_animation_layout_2__["a" /* AppearanceAnimationLayout2 */],
                __WEBPACK_IMPORTED_MODULE_45__components_list_view_swipe_to_dismiss_layout_2_swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */],
                __WEBPACK_IMPORTED_MODULE_7__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_47__components_parallax_layout_3_parallax_layout_3__["a" /* ParallaxLayout3 */],
                __WEBPACK_IMPORTED_MODULE_8__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_48__components_parallax_layout_4_parallax_layout_4__["a" /* ParallaxLayout4 */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_myorder_myorder__["a" /* MyorderPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_46__components_list_view_swipe_to_dismiss_layout_3_swipe_to_dismiss_layout_3__["a" /* SwipeToDismissLayout3 */],
                __WEBPACK_IMPORTED_MODULE_49__components_list_view_appearance_animation_layout_4_appearance_animation_layout_4__["a" /* AppearanceAnimationLayout4 */],
                __WEBPACK_IMPORTED_MODULE_50__components_parallax_layout_2_parallax_layout_2__["a" /* ParallaxLayout2 */],
                __WEBPACK_IMPORTED_MODULE_16__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_itemmap_itemmap__["a" /* ItemmapPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_writecomment_writecomment__["a" /* WritecommentPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_youtube_youtube__["a" /* YoutubePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_event_event__["a" /* EventPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_29__providers_auth__["a" /* Auth */],
                __WEBPACK_IMPORTED_MODULE_30__providers_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_31__providers_values__["a" /* Values */],
                __WEBPACK_IMPORTED_MODULE_32__providers_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_34__providers_wp_service__["a" /* WpService */],
                __WEBPACK_IMPORTED_MODULE_35__providers_functions_functions__["a" /* Functions */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_call_number__["a" /* CallNumber */],
                //GooglePlus,
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_social_sharing__["a" /* SocialSharing */],
                // TwitterConnect,
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_paypal__["a" /* PayPal */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_stripe__["a" /* Stripe */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_53__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_admob_free__["a" /* AdMobFree */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(25);
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
            selector: 'page-map',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  \n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  \n    <ion-title>Geolocation2</ion-title>\n	\n	\n			<ion-buttons right>\n        <button style="background-color:white;" >\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n							<span></span>\n						</ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<div id = "map">\n\n</div>\n<!----\n<h3>Current Latitude: {{locationTracker.lat}}</h3>\n  <h3>Current Longitude: {{locationTracker.lng}}</h3>\n  <h3>Current Longitude: {{locationTracker.timestamp}}</h3>\n  --->\n  <button ion-button full primary (click)="start()">Track My Location</button>\n  <button ion-button full primary (click)="stop()">Stop Tracking Location</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_location_tracker_location_tracker__["a" /* LocationTrackerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_my_profile_my_profile__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_wishlist_wishlist__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_map_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_youtube_youtube__ = __webpack_require__(220);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        // Copy your firebase credencial here
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.initializeApp({
            apiKey: "AIzaSyDrZY5KUdy9XldwZBsh15F_hBoRSwHivgc",
            authDomain: "wedwise-app-1535104268391.firebaseapp.com",
            databaseURL: "https://wedwise-app-1535104268391.firebaseio.com",
            projectId: "wedwise-app-1535104268391",
            storageBucket: "wedwise-app-1535104268391.appspot.com",
            messagingSenderId: "751512906322"
        });
        this.initializeApp();
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth();
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database().ref('/users').child(user.uid).on('value', function (snapshot) {
                    if (snapshot.val()) {
                        _this.userProfiles = snapshot.val();
                    }
                });
            }
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Find Vendors Near Me', component: __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */], icon: "svg-find" },
            { title: 'Find Vendor By Category', component: __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */], icon: "svg-search" },
            { title: 'Message', component: __WEBPACK_IMPORTED_MODULE_11__pages_wishlist_wishlist__["a" /* WishlistPage */], icon: "svg-message" },
            { title: 'My Favorite', component: __WEBPACK_IMPORTED_MODULE_11__pages_wishlist_wishlist__["a" /* WishlistPage */], icon: "svg-heart" },
            { title: 'CheckList', component: __WEBPACK_IMPORTED_MODULE_13__pages_youtube_youtube__["a" /* YoutubePage */], icon: "svg-check" },
            { title: 'Gueslist', component: __WEBPACK_IMPORTED_MODULE_13__pages_youtube_youtube__["a" /* YoutubePage */], icon: "svg-guest" },
            { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_13__pages_youtube_youtube__["a" /* YoutubePage */], icon: "svg-settings" },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_13__pages_youtube_youtube__["a" /* YoutubePage */], icon: "svg-info" }
        ];
        this.translateService.setDefaultLang('english');
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.values.isLoggedIn = true;
                _this.values.userRole = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database().ref('/Customer-Role').child(user.uid).on('value', function (snapshot) {
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
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
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
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_my_profile_my_profile__["a" /* MyProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/admin/web_wise/src/app/app.html"*/'<ion-menu [content]="content" swipeEnabled="false">\n  \n  <ion-content  *ngIf="userProfiles">\n     <ion-item style="background-image: url(assets/images/background/2.jpg);background-repeat: no-repeat;background-size: 100%; \n     min-height:26%;margin-bottom:8%;">\n      <ion-avatar item-start>\n          <ion-list style="margin:15px 0 0 0;font-family: Arial ">\n         <div *ngIf="userProfiles.photoURL" class="profile-image">\n      <img src="{{userProfiles.photoURL}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;" (click)="goprofile()">\n         </div>\n         <div *ngIf="!userProfiles.photoURL" class="profile-image">\n            <img src="{{values.avatar}}" width="80" height="80" style="display: block; margin-left: auto; margin-right: auto;"  (click)="goprofile()">\n         </div>\n      </ion-list>\n      </ion-avatar>\n      <h2 style="color: #fff;font-size: 21px;font-weight: 600;">{{userProfiles.displayName}}</h2>\n\n\n      \n    </ion-item>\n\n    <ion-list>\n	  	<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n		<ion-icon [name]="p.icon" item-left></ion-icon>\n        {{ p.title }}\n      </button>\n	\n	  <button menuClose ion-item  (click)="logOut()">\n	  <ion-icon name="log-out" item-left style="margin-left:-7px;"></ion-icon>\n        Log Out\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/admin/web_wise/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_category__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_event__ = __webpack_require__(216);
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
    function ListPage(values, nativeStorage, nav, navParams, service, translateService) {
        this.values = values;
        this.nativeStorage = nativeStorage;
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.translateService = translateService;
        this.params = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.categoryList = [];
        this.firebasedata = [];
        this.restaurants = [];
        console.log('data');
        //this.nav = nav;
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
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('data');
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
            console.log(_this.params.data.items);
        });
        /**
        
        this.service.getRestaurantsList().on('value', snapshot =>{
          
          console.log(snapshot.val());
          this.params.data.items = [];
          //this.saveCategories(snapshot.val());
          snapshot.forEach( snap =>{
              this.params.data.items.push({
                id: snap.key,
                title: snap.val().title,
                subtitle:  snap.val().info,
                backgroundImage: snap.val().firebase_url,
                icon: "ios-arrow-dropright",
                iconText: "Read more",
                description: snap.val().info
              });
            });
            
            console.log(this.params.data.items);
          });
          
          */
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
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__map_map__["a" /* MapPage */]);
    };
    ListPage.prototype.handlebanners = function (data) {
        this.bannerList = data;
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
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__event_event__["a" /* EventPage */]);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/list/list.html"*/'<ion-header  >\n  <ion-navbar color="brown">\n  \n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Find Vendors Near Me</ion-title>\n	<!--\n	<ion-buttons right>\n        <button style="background-color:transparent;" (click)="goToMap()">\n						<ion-icon name="map" color = "primary"  style="position:relative; font-size:2em;"  >\n							<span></span>\n						</ion-icon>\n        </button>\n    </ion-buttons>\n  -->\n	\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <ion-card (click)="wedevents()">\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/imgs/user.png">\n    </ion-avatar>\n   \n    <ion-grid>\n       <h3>Avant Garde weddings & event</h3>\n  <ion-row>\n    <ion-col col-3 ><h2> ⭐⭐⭐⭐⭐</h2></ion-col>\n\n\n    <ion-col col-6>\n  <ion-icon name="pin" style="    padding-left: 53px;\n    margin-top: 4px;\n    font-size: 13px"></ion-icon>\n     9.3 km</ion-col>\n  </ion-row>\n</ion-grid>\n  <ion-card-content>\n    <h2>Cap town south Affrica</h2>\n    <p>Openting hours 8 am to 5pm</p>\n  </ion-card-content>\n\n  </ion-item>\n\n\n  <ion-row>\n     <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="call"></ion-icon>\n       </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="mail"></ion-icon>\n       </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="chatboxes"></ion-icon>\n      \n      </button>\n    </ion-col>\n    <ion-col center text-center>\n       <button ion-button icon-start clear small>\n        <ion-icon name="heart-outline"></ion-icon>\n      \n      </button>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n<ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="assets/imgs/user.png" (click)="wedevents()">\n    </ion-avatar>\n   \n    <ion-grid>\n       <h3>URBAN brige</h3>\n  <ion-row>\n    <ion-col col-3 ><h2> ⭐⭐⭐⭐⭐</h2></ion-col>\n\n\n    <ion-col col-6>\n  <ion-icon name="pin" style="    padding-left: 53px;\n    margin-top: 4px;\n    font-size: 13px"></ion-icon>\n     9.3 km</ion-col>\n  </ion-row>\n</ion-grid>\n  <ion-card-content>\n    <h2>Brackenfell Cape Town</h2>\n    <p>Openting hours 8 am to 5pm</p>\n  </ion-card-content>\n\n  </ion-item>\n\n\n  <ion-row>\n     <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="call"></ion-icon>\n       </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="mail"></ion-icon>\n       </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="chatboxes"></ion-icon>\n      \n      </button>\n    </ion-col>\n    <ion-col center text-center>\n       <button ion-button icon-start clear small>\n        <ion-icon name="heart-outline"></ion-icon>\n      \n      </button>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(163);
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(63);
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

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__itemmap_itemmap__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__writecomment_writecomment__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__ = __webpack_require__(315);
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
            selector: 'page-product-details',template:/*ion-inline-start:"/Users/admin/web_wise/src/pages/product-details/product-details.html"*/'<!--\n  Generated template for the ProductDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n    <parallax-layout-3\n     [data]="params.data"\n     [events]="params.events">\n   </parallax-layout-3>\n\n'/*ion-inline-end:"/Users/admin/web_wise/src/pages/product-details/product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ })

},[468]);
//# sourceMappingURL=main.js.map