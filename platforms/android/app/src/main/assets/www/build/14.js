webpackJsonp([14],{

/***/ 1069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardLayout2; });
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


var WizardLayout2 = (function () {
    function WizardLayout2() {
        this.next = true;
        this.finish = true;
        this.next = true;
        this.finish = false;
    }
    WizardLayout2.prototype.changeSlide = function (index) {
        if (index > 0) {
            this.slider.slideNext(300);
        }
        else {
            this.slider.slidePrev(300);
        }
    };
    WizardLayout2.prototype.slideHasChanged = function (index) {
        try {
            this.next = this.slider.getActiveIndex() < (this.slider.length() - 1);
            this.finish = this.slider.isEnd();
        }
        catch (e) { }
    };
    WizardLayout2.prototype.onEvent = function (event) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], WizardLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], WizardLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('wizardSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Slides */])
    ], WizardLayout2.prototype, "slider", void 0);
    WizardLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'wizard-layout-2',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/wizard/layout-2/wizard.html"*/'<!--Theme Wizard Big Image -->\n<ion-slides #wizardSlider (ionSlideDidChange)="slideHasChanged()" pager="true" *ngIf="data != null">\n    <ion-slide *ngFor="let item of data.items;">\n        <!-- Background Settings-->\n        <div background-size [ngStyle]="{\'background-image\': \'url(\' + item.backgroundImage + \')\'}"></div>\n        <!--Wiazard Subtitle-->\n        <p padding-top no-margin wizard-subtitle>{{item.welcome}}</p>\n        <!--Wizard Title-->\n        <h1 padding-horizontal wizard-title no-margin>{{item.title}}</h1>\n        <!--Wizard Description-->\n        <p padding-horizontal wizard-description>{{item.description}}</p>\n    </ion-slide>\n</ion-slides>\n<!--Button section-->\n<div *ngIf="data != null">\n    <button ion-button button-clear text-capitalize full text-center clear ion-button (click)="changeSlide(1)" *ngIf="next">\n        {{data.btnNext}}\n    </button>\n    <button ion-button button-clear text-capitalize full text-center clear ion-button (click)="onEvent(\'onFinish\')" *ngIf="finish">\n     {{data.btnFinish}}\n    </button>\n</div>'/*ion-inline-end:"/Users/admin/web_wise/src/components/wizard/layout-2/wizard.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], WizardLayout2);
    return WizardLayout2;
}());

//# sourceMappingURL=wizard-layout-2.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardLayout2Module", function() { return WizardLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizard_layout_2__ = __webpack_require__(1069);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WizardLayout2Module = (function () {
    function WizardLayout2Module() {
    }
    WizardLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_2__["a" /* WizardLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wizard_layout_2__["a" /* WizardLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_2__["a" /* WizardLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], WizardLayout2Module);
    return WizardLayout2Module;
}());

//# sourceMappingURL=wizard-layout-2.module.js.map

/***/ })

});
//# sourceMappingURL=14.js.map