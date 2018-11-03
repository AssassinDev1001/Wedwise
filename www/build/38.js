webpackJsonp([38],{

/***/ 1076:
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
            selector: 'register-layout-1',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/register/layout-1/register.html"*/'<!-- Themes Register + logo -->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title *ngIf="data != null" text-left>{{data.toolbarTitle}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<!--Content -->\n\n<ion-content>\n\n    <ion-grid *ngIf="data != null">\n\n        <ion-row padding-horizontal align-items-start>\n\n            <ion-col col-12 no-padding>\n\n                <button ion-button text-capitalize button-clear clear float-right (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n\n            </ion-col>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <!---Logo-->\n\n                <ion-thumbnail>\n\n                    <img [src]="data.logo">\n\n                </ion-thumbnail>\n\n                <!--Form Title-->\n\n                <h1 ion-text color="accent" title>{{data.title}}</h1>\n\n                <!---Input field username-->\n\n                <ion-item no-padding>\n\n                    <ion-label color="dark" stacked>{{data.lableUsername}}</ion-label>\n\n                    <ion-input required placeholder="{{data.username}}" type="text" [(ngModel)]="username"></ion-input>\n\n                </ion-item>\n\n                <!---Input field password-->\n\n                <ion-item no-padding>\n\n                    <ion-label color="dark" stacked>{{data.lablePassword}}</ion-label>\n\n                    <ion-input required placeholder="{{data.password}}" type="password" [(ngModel)]="password"></ion-input>\n\n                </ion-item>\n\n                <!---Input field email-->\n\n                <ion-item no-padding>\n\n                    <ion-label color="dark" stacked>{{data.lableEmail}}</ion-label>\n\n                    <ion-input required placeholder="{{data.email}}" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email"></ion-input>\n\n                </ion-item>\n\n                <!---Input field country-->\n\n                <ion-item no-padding>\n\n                    <ion-label color="dark" stacked>{{data.lableCountry}}</ion-label>\n\n                    <ion-input required placeholder="{{data.country}}" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country"></ion-input>\n\n                </ion-item>\n\n                <!---Input field city-->\n\n                <ion-item no-padding>\n\n                    <ion-label stacked>{{data.lableCity}}</ion-label>\n\n                    <ion-input required placeholder="{{data.city}}" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city"></ion-input>\n\n                </ion-item>\n\n                <!---Register button-->\n\n                <button ion-button margin-top float-right clear button-clear text-capitalize (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/register/layout-1/register.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RegisterLayout1);
    return RegisterLayout1;
}());

//# sourceMappingURL=register-layout-1.js.map

/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLayout1Module", function() { return RegisterLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_layout_1__ = __webpack_require__(1076);
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
//# sourceMappingURL=38.js.map