webpackJsonp([37],{

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterLayout1; });
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

var RegisterLayout1 = (function () {
    function RegisterLayout1() {
        var _this = this;
        this.onEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password,
                    'country': _this.country,
                    'city': _this.city,
                    'email': _this.email
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RegisterLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RegisterLayout1.prototype, "events", void 0);
    RegisterLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register-layout-1',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/register/layout-1/register.html"*/'<!-- Themes Register + logo -->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title *ngIf="data != null" text-left>{{data.toolbarTitle}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<!--Content -->\n<ion-content>\n    <ion-grid *ngIf="data != null">\n        <ion-row padding-horizontal align-items-start>\n            <ion-col col-12 no-padding>\n                <button ion-button text-capitalize button-clear clear float-right (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n            </ion-col>\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <!---Logo-->\n                <ion-thumbnail>\n                    <img [src]="data.logo">\n                </ion-thumbnail>\n                <!--Form Title-->\n                <h1 ion-text color="accent" title>{{data.title}}</h1>\n                <!---Input field username-->\n                <ion-item no-padding>\n                    <ion-label color="dark" stacked>{{data.lableUsername}}</ion-label>\n                    <ion-input required placeholder="{{data.username}}" type="text" [(ngModel)]="username"></ion-input>\n                </ion-item>\n                <!---Input field password-->\n                <ion-item no-padding>\n                    <ion-label color="dark" stacked>{{data.lablePassword}}</ion-label>\n                    <ion-input required placeholder="{{data.password}}" type="password" [(ngModel)]="password"></ion-input>\n                </ion-item>\n                <!---Input field email-->\n                <ion-item no-padding>\n                    <ion-label color="dark" stacked>{{data.lableEmail}}</ion-label>\n                    <ion-input required placeholder="{{data.email}}" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email"></ion-input>\n                </ion-item>\n                <!---Input field country-->\n                <ion-item no-padding>\n                    <ion-label color="dark" stacked>{{data.lableCountry}}</ion-label>\n                    <ion-input required placeholder="{{data.country}}" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country"></ion-input>\n                </ion-item>\n                <!---Input field city-->\n                <ion-item no-padding>\n                    <ion-label stacked>{{data.lableCity}}</ion-label>\n                    <ion-input required placeholder="{{data.city}}" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city"></ion-input>\n                </ion-item>\n                <!---Register button-->\n                <button ion-button margin-top float-right clear button-clear text-capitalize (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/register/layout-1/register.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RegisterLayout1);
    return RegisterLayout1;
}());

//# sourceMappingURL=register-layout-1.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLayout1Module", function() { return RegisterLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_layout_1__ = __webpack_require__(1046);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterLayout1Module = (function () {
    function RegisterLayout1Module() {
    }
    RegisterLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RegisterLayout1Module);
    return RegisterLayout1Module;
}());

//# sourceMappingURL=register-layout-1.module.js.map

/***/ })

});
//# sourceMappingURL=37.js.map