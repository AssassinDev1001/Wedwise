webpackJsonp([26],{

/***/ 1057:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
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

var Spinner = (function () {
    function Spinner() {
        var _this = this;
        this.getData = function () {
            return _this.data;
        };
    }
    Spinner.prototype.ngOnChanges = function (changes) {
        this.path = "assets/svg/" + changes['data'].currentValue.icon + ".svg";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], Spinner.prototype, "data", void 0);
    Spinner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'spinner',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/spinner/spinner.html"*/'<!-- Theme Spinner -->\n<img [src]="path" />'/*ion-inline-end:"/Users/admin/web_wise/src/components/spinner/spinner.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], Spinner);
    return Spinner;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerModule", function() { return SpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner__ = __webpack_require__(1057);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpinnerModule = (function () {
    function SpinnerModule() {
    }
    SpinnerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* Spinner */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* Spinner */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__spinner__["a" /* Spinner */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SpinnerModule);
    return SpinnerModule;
}());

//# sourceMappingURL=spinner.module.js.map

/***/ })

});
//# sourceMappingURL=26.js.map