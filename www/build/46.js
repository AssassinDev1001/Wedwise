webpackJsonp([46],{

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRcodeLayout1; });
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

var QRcodeLayout1 = (function () {
    function QRcodeLayout1() {
    }
    QRcodeLayout1.prototype.onEvent = function (event, result) {
        if (this.events[event]) {
            this.events[event](result);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], QRcodeLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], QRcodeLayout1.prototype, "events", void 0);
    QRcodeLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'qrcode-layout-1',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/qrcode/layout-1/qrcode.html"*/'<ion-content has-header>\n\n    <ion-grid no-padding>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <ion-list no-margin>\n\n                    <ion-item item-bcg padding-right text-wrap>\n\n                        <h1 item-title>{{data.format}}</h1>\n\n                    </ion-item>\n\n                    <ion-item item-bcg no-lines padding-right text-wrap>\n\n                        <p item-subtitle>{{data.text}}</p>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/qrcode/layout-1/qrcode.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], QRcodeLayout1);
    return QRcodeLayout1;
}());

//# sourceMappingURL=qrcode-layout-1.js.map

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRcodeLayout1Module", function() { return QRcodeLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qrcode_layout_1__ = __webpack_require__(1067);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QRcodeLayout1Module = (function () {
    function QRcodeLayout1Module() {
    }
    QRcodeLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qrcode_layout_1__["a" /* QRcodeLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__qrcode_layout_1__["a" /* QRcodeLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__qrcode_layout_1__["a" /* QRcodeLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], QRcodeLayout1Module);
    return QRcodeLayout1Module;
}());

//# sourceMappingURL=qrcode-layout-1.module.js.map

/***/ })

});
//# sourceMappingURL=46.js.map