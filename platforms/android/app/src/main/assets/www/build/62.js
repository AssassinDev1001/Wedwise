webpackJsonp([62],{

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBoxLayout2; });
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

var CheckBoxLayout2 = (function () {
    function CheckBoxLayout2() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], CheckBoxLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], CheckBoxLayout2.prototype, "events", void 0);
    CheckBoxLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'check-box-layout-2',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/check-box/layout-2/check-box.html"*/'<!--Themes With avatar -->\n<ion-grid no-padding *ngIf="data != null">\n    <ion-row>\n        <ion-col col-12 no-padding>\n            <!-- Header Title Top -->\n            <ion-list-header header-section>\n                <h1 header-title text-capitalize>{{data.title}}</h1>\n            </ion-list-header>\n            <!-- Content List -->\n            <ion-list>\n                <ion-item border no-lines *ngFor="let item of data.items" (tap)="onEvent(\'onButton\', item)">\n                    <!-- Content  Avatar-->\n                    <div gradient item-start>\n                        <img images-filter [src]="item.image">\n                    </div>\n                    <!-- Content Title -->\n                    <ion-label padding-top item-title>{{item.title}}</ion-label>\n                    <!-- Content Subtitle -->\n                    <ion-label item-subtitle>{{item.subtitle}}</ion-label>\n                    <ion-checkbox item-end [checked]="item.isChecked"></ion-checkbox>\n                </ion-item>\n            </ion-list>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/check-box/layout-2/check-box.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CheckBoxLayout2);
    return CheckBoxLayout2;
}());

//# sourceMappingURL=check-box-layout-2.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxLayout2Module", function() { return CheckBoxLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_box_layout_2__ = __webpack_require__(1014);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckBoxLayout2Module = (function () {
    function CheckBoxLayout2Module() {
    }
    CheckBoxLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__check_box_layout_2__["a" /* CheckBoxLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__check_box_layout_2__["a" /* CheckBoxLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__check_box_layout_2__["a" /* CheckBoxLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], CheckBoxLayout2Module);
    return CheckBoxLayout2Module;
}());

//# sourceMappingURL=check-box-layout-2.module.js.map

/***/ })

});
//# sourceMappingURL=62.js.map