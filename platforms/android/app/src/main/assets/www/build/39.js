webpackJsonp([39],{

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeLayout3; });
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

var RangeLayout3 = (function () {
    function RangeLayout3() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    RangeLayout3.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], RangeLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], RangeLayout3.prototype, "events", void 0);
    RangeLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'range-button-layout-3',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/range/layout-3/range.html"*/'<ion-list *ngIf="data != null">\n    <ion-list-header no-margin text-uppercase>\n        <p ion-text color="brown">{{data.title}}</p>\n        <ion-badge item-end>{{data.value}}</ion-badge>\n    </ion-list-header>\n    <ion-item>\n        <ion-range [min]="data.min" [max]="data.max" [step]="data.step" snaps="true" (ionChange)="onEvent(\'onChange\', data.value, $event)" [(ngModel)]="data.value">\n            <ion-label range-left span-small color="brown">{{data.textLeft}}</ion-label>\n            <ion-label range-right span-large color="brown">{{data.textRight}}</ion-label>\n        </ion-range>\n    </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/range/layout-3/range.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RangeLayout3);
    return RangeLayout3;
}());

//# sourceMappingURL=range-layout-3.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeLayout3Module", function() { return RangeLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_layout_3__ = __webpack_require__(1044);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RangeLayout3Module = (function () {
    function RangeLayout3Module() {
    }
    RangeLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__range_layout_3__["a" /* RangeLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__range_layout_3__["a" /* RangeLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__range_layout_3__["a" /* RangeLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RangeLayout3Module);
    return RangeLayout3Module;
}());

//# sourceMappingURL=range-layout-3.module.js.map

/***/ })

});
//# sourceMappingURL=39.js.map