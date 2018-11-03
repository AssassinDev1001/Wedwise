webpackJsonp([46],{

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginLayout2 = (function () {
    function LoginLayout2() {
        var _this = this;
        this.onEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout2.prototype, "events", void 0);
    LoginLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-layout-2',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/login/layout-2/login.html"*/'<!-- Themes Login + logo -->\n<ion-content has-header>\n    <ion-grid *ngIf="data != null">\n        <ion-row padding-horizontal align-self-center>\n            <ion-col align-self-start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <button ion-button text-capitalize button-clear clear float-left (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n                <button ion-button text-capitalize button-clear clear float-right (click)="onEvent(\'onForgot\')">{{data.forgotPassword}}</button>\n            </ion-col>\n            <ion-col align-self-end col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <!--DESCRIPTION-->\n                <ion-item no-lines no-padding>\n                    <h2 ion-text color="dark" login-subtitle text-wrap>{{data.subtitle}}</h2>\n                    <h1 no-margin login-title text-wrap>{{data.title}}</h1>\n                    <!--LOGO-->\n                    <img [src]="data.logo">\n                </ion-item>\n            </ion-col>\n            <ion-col align-self-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <!---Input field username-->\n                <ion-item no-padding transparent>\n                    <ion-label color="dark" stacked>{{data.labelUsername}}</ion-label>\n                    <ion-input required placeholder="{{data.username}}" type="text" [(ngModel)]="username"></ion-input>\n                </ion-item>\n                <!---Input field password-->\n                <ion-item no-padding transparent>\n                    <ion-label color="dark" stacked>{{data.labelPassword}}</ion-label>\n                    <ion-input required placeholder="{{data.password}}" type="password" [(ngModel)]="password"></ion-input>\n                </ion-item>\n                <!---Login button-->\n                <button ion-button button-clear float-right clear text-capitalize (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n                <!---Register button-->\n                <button ion-button button-clear clear float-right text-capitalize (click)="onEvent(\'onLogin\')">{{data.login}}</button>\n            </ion-col>\n            <!---Share Section-->\n            <ion-col align-self-end col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 social>\n                <!---Facebook button-->\n                <button ion-button text-capitalize default-button color="facebook" (click)="onEvent(\'onFacebook\')">Facebook</button>\n                <!---Twitter button-->\n                <button ion-button text-capitalize default-button color="twitter" (click)="onEvent(\'onTwitter\')">Twitter</button>\n                <!---Google button-->\n                <button ion-button text-capitalize default-button color="google" (click)="onEvent(\'onGoogle\')">Google</button>\n                <!---Pinterest button-->\n                <button ion-button text-capitalize default-button color="pinterest" (click)="onEvent(\'onPinterest\')">Pinterest</button>\n            </ion-col>\n            <!---End Share Section-->\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/login/layout-2/login.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayout2);
    return LoginLayout2;
}());

//# sourceMappingURL=login-layout-2.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout2Module", function() { return LoginLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_2__ = __webpack_require__(1033);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginLayout2Module = (function () {
    function LoginLayout2Module() {
    }
    LoginLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], LoginLayout2Module);
    return LoginLayout2Module;
}());

//# sourceMappingURL=login-layout-2.module.js.map

/***/ })

});
//# sourceMappingURL=46.js.map