webpackJsonp([25],{

/***/ 1058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenLayout1; });
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

var SplashScreenLayout1 = (function () {
    function SplashScreenLayout1() {
    }
    SplashScreenLayout1.prototype.ngOnChanges = function (changes) {
        clearInterval(this.timer);
        this.executeEvents();
    };
    SplashScreenLayout1.prototype.getData = function () {
        return this.data;
    };
    SplashScreenLayout1.prototype.getEvents = function () {
        return this.events;
    };
    SplashScreenLayout1.prototype.executeEvents = function () {
        var duration = (this.getData() && this.getData().duration) ? this.getData().duration : 10000;
        var events = null;
        if (this.getEvents()) {
            events = this.getEvents()['onRedirect'];
        }
        this.timer = setTimeout(function () {
            if (events) {
                events();
            }
        }, duration);
    };
    SplashScreenLayout1.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], SplashScreenLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], SplashScreenLayout1.prototype, "events", void 0);
    SplashScreenLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'splash-screen-layout-1',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/splash-screen/layout-1/splash-screen.html"*/'<!--Theme Animation Logo + Ken Burns -->\n<div id="splash-background-image">\n  <img class="splash-screen" [src]="data.backgroundImage" />\n  <img logo animation [src]="data.logo" />\n</div>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/splash-screen/layout-1/splash-screen.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SplashScreenLayout1);
    return SplashScreenLayout1;
}());

//# sourceMappingURL=splash-screen-layout-1.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenLayout1Module", function() { return SplashScreenLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_1__ = __webpack_require__(1058);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplashScreenLayout1Module = (function () {
    function SplashScreenLayout1Module() {
    }
    SplashScreenLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_1__["a" /* SplashScreenLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_1__["a" /* SplashScreenLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_1__["a" /* SplashScreenLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SplashScreenLayout1Module);
    return SplashScreenLayout1Module;
}());

//# sourceMappingURL=splash-screen-layout-1.module.js.map

/***/ })

});
//# sourceMappingURL=25.js.map