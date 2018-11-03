webpackJsonp([17],{

/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleLayout3; });
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

var ToggleLayout3 = (function () {
    function ToggleLayout3() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    ToggleLayout3.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], ToggleLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], ToggleLayout3.prototype, "events", void 0);
    ToggleLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'toggle-layout-3',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/toggle/layout-3/toggle.html"*/'<!--Themes Toggle - Simple -->\n\n<ion-grid no-padding>\n\n    <ion-list *ngIf="data != null">\n\n        <ion-list-header header-section>\n\n            <h1 header-title text-capitalize>{{data.title}}</h1>\n\n        </ion-list-header>\n\n        <ion-item border no-lines *ngFor="let item of data.items; let i= index">\n\n            <ion-label item-title item-start>{{item.title}}</ion-label>\n\n            <ion-toggle item-end [value]="item.id" (ionChange)="onEvent(\'onSelect\',item)" [checked]="item.isChecked"></ion-toggle>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-grid>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/toggle/layout-3/toggle.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ToggleLayout3);
    return ToggleLayout3;
}());

//# sourceMappingURL=toggle-layout-3.js.map

/***/ }),

/***/ 977:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleLayout3Module", function() { return ToggleLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_layout_3__ = __webpack_require__(1096);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToggleLayout3Module = (function () {
    function ToggleLayout3Module() {
    }
    ToggleLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__toggle_layout_3__["a" /* ToggleLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__toggle_layout_3__["a" /* ToggleLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__toggle_layout_3__["a" /* ToggleLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ToggleLayout3Module);
    return ToggleLayout3Module;
}());

//# sourceMappingURL=toggle-layout-3.module.js.map

/***/ })

});
//# sourceMappingURL=17.js.map