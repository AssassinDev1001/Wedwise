webpackJsonp([19],{

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleLayout1; });
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

var ToggleLayout1 = (function () {
    function ToggleLayout1() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    ToggleLayout1.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], ToggleLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], ToggleLayout1.prototype, "events", void 0);
    ToggleLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'toggle-layout-1',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/toggle/layout-1/toggle.html"*/'<!--Themes Toggle - With avatars -->\n\n<ion-grid no-padding>\n\n    <ion-list *ngIf="data != null">\n\n        <ion-list-header header-section>\n\n            <h1 header-title text-capitalize>{{data.title}}</h1>\n\n        </ion-list-header>\n\n        <ion-item *ngFor="let item of data.items; let i= index">\n\n            <div gradient item-start>\n\n                <img images-filter [src]="item.avatar" />\n\n            </div>\n\n            <ion-label item-title padding-top>{{item.title}}</ion-label>\n\n            <ion-label item-subtitle text-wrap>{{item.subtitle}}</ion-label>\n\n            <ion-toggle item-end [value]="item.id" (ionChange)="onEvent(\'onSelect\',item)" [checked]="item.isChecked"></ion-toggle>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-grid>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/toggle/layout-1/toggle.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ToggleLayout1);
    return ToggleLayout1;
}());

//# sourceMappingURL=toggle-layout-1.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleLayout1Module", function() { return ToggleLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_layout_1__ = __webpack_require__(1095);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToggleLayout1Module = (function () {
    function ToggleLayout1Module() {
    }
    ToggleLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__toggle_layout_1__["a" /* ToggleLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__toggle_layout_1__["a" /* ToggleLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__toggle_layout_1__["a" /* ToggleLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ToggleLayout1Module);
    return ToggleLayout1Module;
}());

//# sourceMappingURL=toggle-layout-1.module.js.map

/***/ })

});
//# sourceMappingURL=19.js.map