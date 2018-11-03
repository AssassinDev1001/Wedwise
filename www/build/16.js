webpackJsonp([16],{

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardLayout1 = (function () {
    function WizardLayout1() {
        this.sliderOptions = { pager: true };
        this.path = false;
        this.prev = true;
        this.next = true;
        this.finish = true;
        this.prev = false;
        this.next = true;
        this.finish = false;
    }
    WizardLayout1.prototype.changeSlide = function (index) {
        if (index > 0) {
            this.slider.slideNext(300);
        }
        else {
            this.slider.slidePrev(300);
        }
    };
    WizardLayout1.prototype.slideHasChanged = function (index) {
        try {
            this.prev = !this.slider.isBeginning();
            this.next = this.slider.getActiveIndex() < (this.slider.length() - 1);
            this.finish = this.slider.isEnd();
        }
        catch (e) { }
    };
    WizardLayout1.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    WizardLayout1.prototype.onEvent = function (event) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], WizardLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], WizardLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('wizardSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
    ], WizardLayout1.prototype, "slider", void 0);
    WizardLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wizard-layout-1',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/wizard/layout-1/wizard.html"*/'<!--Theme Wizard Simple + icon-->\n\n<!--Content -->\n\n<ion-slides #wizardSlider (ionSlideDidChange)="slideHasChanged()" pager="true" *ngIf="data != null">\n\n    <ion-slide *ngFor="let item of data.items;" padding>\n\n        <img logo [src]="item.logo" />\n\n        <h1 text-left wizard-title padding-horizontal>{{item.title}}</h1>\n\n        <p text-left wizard-description padding-horizontal>{{item.description}}</p>\n\n        <p text-left wizard-description padding-horizontal>{{item.subtitle}}</p>\n\n    </ion-slide>\n\n</ion-slides>\n\n<!-- Button section-->\n\n<div *ngIf="data != null">\n\n    <button ion-button button-clear text-capitalize clear float-left (click)="changeSlide(-1)" *ngIf="prev">\n\n      {{data.btnPrev}}\n\n  </button>\n\n    <button ion-button button-clear text-capitalize clear float-right (click)="changeSlide(1)" *ngIf="next">\n\n      {{data.btnNext}}\n\n  </button>\n\n    <button ion-button button-clear text-capitalize clear float-right (click)="onEvent(\'onFinish\')" *ngIf="finish">\n\n      {{data.btnFinish}}\n\n  </button>\n\n</div>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/wizard/layout-1/wizard.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], WizardLayout1);
    return WizardLayout1;
}());

//# sourceMappingURL=wizard-layout-1.js.map

/***/ }),

/***/ 978:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardLayout1Module", function() { return WizardLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizard_layout_1__ = __webpack_require__(1097);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WizardLayout1Module = (function () {
    function WizardLayout1Module() {
    }
    WizardLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_1__["a" /* WizardLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wizard_layout_1__["a" /* WizardLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_1__["a" /* WizardLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], WizardLayout1Module);
    return WizardLayout1Module;
}());

//# sourceMappingURL=wizard-layout-1.module.js.map

/***/ })

});
//# sourceMappingURL=16.js.map