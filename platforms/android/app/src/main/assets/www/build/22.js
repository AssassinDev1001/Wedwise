webpackJsonp([22],{

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubImageGallery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubImageGallery = (function () {
    function SubImageGallery(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.onEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
        this.openImageSlider = function (group, index) {
            _this.navCtrl.push(group.fullscreen, {
                'group': group.items,
                'index': index
            });
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SubImageGallery.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SubImageGallery.prototype, "events", void 0);
    SubImageGallery = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sub-image-gallery',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/sub-image-gallery/sub-image-gallery.html"*/'<!-- Theme Image Sub-Gallery for Thumb grid -->\n<ion-grid *ngIf="data != null">\n    <ion-row>\n        <ion-col no-padding col-4 col-sm-3 col-md-6 col-lg-4 col-xl-3 *ngFor="let item of data.items;let i = index;">\n            <ion-card background-size (click)="openImageSlider(data, i)" [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}">\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/sub-image-gallery/sub-image-gallery.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */]])
    ], SubImageGallery);
    return SubImageGallery;
}());

//# sourceMappingURL=sub-image-gallery.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubImageGalleryModule", function() { return SubImageGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_image_gallery__ = __webpack_require__(1061);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubImageGalleryModule = (function () {
    function SubImageGalleryModule() {
    }
    SubImageGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sub_image_gallery__["a" /* SubImageGallery */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sub_image_gallery__["a" /* SubImageGallery */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sub_image_gallery__["a" /* SubImageGallery */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SubImageGalleryModule);
    return SubImageGalleryModule;
}());

//# sourceMappingURL=sub-image-gallery.module.js.map

/***/ })

});
//# sourceMappingURL=22.js.map