webpackJsonp([12],{

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RessetPasswordPageModule", function() { return RessetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resset_password__ = __webpack_require__(1101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RessetPasswordPageModule = (function () {
    function RessetPasswordPageModule() {
    }
    RessetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resset_password__["a" /* RessetPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resset_password__["a" /* RessetPasswordPage */]),
            ],
        })
    ], RessetPasswordPageModule);
    return RessetPasswordPageModule;
}());

//# sourceMappingURL=resset-password.module.js.map

/***/ }),

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RessetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_values__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global_global__ = __webpack_require__(117);
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
 * Generated class for the RessetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RessetPasswordPage = (function () {
    function RessetPasswordPage(nav, navParams, functions, auth, loadingCtrl /*, private twitter: TwitterConnect*/, fb, /** private googlePlus: GooglePlus,*/ alertCtrl, values, service, actionSheetCtrl, camera, global) {
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
        this._showSignup = false;
        this.buttonText = "Resset Account";
        this.HeaderText = "Login";
        this.params = {};
        this.form = {};
        this.auth = auth;
        this.customerList = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.database().ref('/Customer-List');
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]({});
    }
    RessetPasswordPage.prototype.Forget = function () {
        var _this = this;
        debugger;
        if (this.validateRegister(this.form)) {
            this.disableRegister = true;
            this.buttonText = "Resseting...";
            this.auth.forgotPass(this.form.email)
                .then(function (test) {
                debugger;
                console.log(test);
                _this.disableRegister = false;
                _this.buttonText = "Resset Account";
            }).catch(function (err) {
                _this.handleRegisterError(err);
                debugger;
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__list_list__["a" /* ListPage */]);
            });
        }
    };
    RessetPasswordPage.prototype.validateRegister = function (form) {
        if (this.form.email == undefined || this.form.email == '') {
            this.errorRegisterMessage = 'Please enter email';
            return false;
        }
        return true;
    };
    RessetPasswordPage.prototype.handleRegisterError = function (err) {
        console.log(err.code);
        this.errorRegisterMessage = err.message;
        this.disableRegister = false;
        this.buttonText = "Register Account";
    };
    RessetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RessetPasswordPage');
    };
    RessetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-resset-password',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/pages/resset-password/resset-password.html"*/'<!--\n\n  Generated template for the RessetPasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header  style="background: #5e2f6f;color: white">\n\n\n\n  <ion-navbar >\n\n    <ion-title>Resset Password</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding style="background-image: url(assets/images/logo/sky.jpg);">\n\n  <div >\n\n    <ion-card>\n\n      <form #f="ngForm">\n\n        <ion-list>\n\n\n\n\n\n          <ion-item>\n\n            <ion-label ><ion-icon ios="ios-person" md="md-person"></ion-icon></ion-label>\n\n\n\n            <ion-label floating>Email</ion-label>\n\n            <ion-input required type="email" [(ngModel)]="form.email" name="email"></ion-input>\n\n          </ion-item>\n\n\n\n        </ion-list>\n\n        <div class="error-message">\n\n          <ion-label color="danger" text-wrap>{{errorRegisterMessage}}</ion-label>\n\n        </div>\n\n        <div class="row">\n\n          <button style="margin: 20px 20px 0 20px" class="login-button" ion-button block color="secondary" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableRegister" (click)="Forget()">{{buttonText}}</button>\n\n          <br>\n\n          <button style="margin: 0px 20px 20px 20px"class="forgot-button" ion-button clear color="danger" type="submit" class="button button-block button-clear" (click)="goToLogin()">Login</button>\n\n        </div>\n\n      </form>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/pages/resset-password/resset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_functions_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */] /*, private twitter: TwitterConnect*/, __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_7__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_10__providers_global_global__["a" /* GlobalProvider */]])
    ], RessetPasswordPage);
    return RessetPasswordPage;
}());

//# sourceMappingURL=resset-password.js.map

/***/ })

});
//# sourceMappingURL=12.js.map