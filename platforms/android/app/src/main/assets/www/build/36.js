webpackJsonp([36],{

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterLayout2; });
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

var RegisterLayout2 = (function () {
    function RegisterLayout2() {
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
    ], RegisterLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RegisterLayout2.prototype, "events", void 0);
    RegisterLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register-layout-2',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/register/layout-2/register.html"*/'<!-- Themes Register + Image -->\n<ion-header>\n    <ion-navbar transparent>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title *ngIf="data != null" text-left>{{data.toolbarTitle}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<!--Content -->\n<ion-content>\n    <ion-grid no-padding *ngIf="data != null">\n        <ion-row center>\n            <!-- Big Images Header -->\n            <ion-col no-padding col-12 background-size [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n                <!-- Header Title -->\n                <h1 ion-text color="light" header-title text-wrap>{{data.title}}</h1>\n            </ion-col>\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <!--Form-->\n                <ion-item>\n                    <!---Input field username-->\n                    <ion-label color="dark" stacked>{{data.lableUsername}}</ion-label>\n                    <ion-input required placeholder="{{data.username}}" type="text" [(ngModel)]="username"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <!---Input field password-->\n                    <ion-label color="dark" stacked>{{data.lablePassword}}</ion-label>\n                    <ion-input required placeholder="{{data.password}}" type="password" [(ngModel)]="password"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <!---Input field email-->\n                    <ion-label color="dark" stacked>{{data.lableEmail}}</ion-label>\n                    <ion-input required placeholder="{{data.email}}" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <!---Input field country-->\n                    <ion-label color="dark" stacked>{{data.lableCountry}}</ion-label>\n                    <ion-input required placeholder="{{data.country}}" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <!---Input field city-->\n                    <ion-label color="dark" stacked>{{data.lableCity}}</ion-label>\n                    <ion-input required placeholder="{{data.city}}" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city"></ion-input>\n                </ion-item>\n                <!---Register button-->\n                <button ion-button float-right margin-top clear button-clear text-capitalize (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/register/layout-2/register.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RegisterLayout2);
    return RegisterLayout2;
}());

//# sourceMappingURL=register-layout-2.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLayout2Module", function() { return RegisterLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_layout_2__ = __webpack_require__(1047);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterLayout2Module = (function () {
    function RegisterLayout2Module() {
    }
    RegisterLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_2__["a" /* RegisterLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_layout_2__["a" /* RegisterLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_2__["a" /* RegisterLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RegisterLayout2Module);
    return RegisterLayout2Module;
}());

//# sourceMappingURL=register-layout-2.module.js.map

/***/ })

});
//# sourceMappingURL=36.js.map