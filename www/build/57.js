webpackJsonp([57],{

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout3; });
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


var AppearanceAnimationLayout3 = (function () {
    function AppearanceAnimationLayout3() {
        this.animateItems = [];
        this.animateClass = { 'fade-in-down-item': true };
    }
    AppearanceAnimationLayout3.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    AppearanceAnimationLayout3.prototype.ngOnChanges = function (changes) {
        var that = this;
        that.data = changes['data'].currentValue;
        if (that.data && that.data.items) {
            that.animateItems = [];
            var _loop_1 = function (i) {
                setTimeout(function () {
                    that.animateItems.push(that.data.items[i]);
                }, 200 * i);
            };
            for (var i = 0; i < that.data.items.length; i++) {
                _loop_1(i);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], AppearanceAnimationLayout3.prototype, "content", void 0);
    AppearanceAnimationLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'appearance-animation-layout-3',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/list-view/appearance-animation/layout-3/appearance-animation.html"*/'<!--Theme Appearance animation (Fade In Down)-->\n\n<ion-content has-header>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <ion-list no-margin>\n\n                    <ion-item border no-lines [ngClass]="animateClass" *ngFor="let item of animateItems; let i = index;" (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n                        <ion-avatar item-left>\n\n                            <img [src]="item.image" alt="{{item.title}}" />\n\n                        </ion-avatar>\n\n                        <h2 item-title>{{item.title}}</h2>\n\n                        <ion-icon icon-small item-right (click)="onEvent(\'onFavorite\', item, $event)">\n\n                            <i class="icon" [ngClass]="{\'icon-heart\': item.favorite, \'icon-heart-outline\': !item.favorite}"></i>\n\n                        </ion-icon>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/list-view/appearance-animation/layout-3/appearance-animation.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AppearanceAnimationLayout3);
    return AppearanceAnimationLayout3;
}());

//# sourceMappingURL=appearance-animation-layout-3.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceAnimationLayout3Module", function() { return AppearanceAnimationLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_3__ = __webpack_require__(1049);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppearanceAnimationLayout3Module = (function () {
    function AppearanceAnimationLayout3Module() {
    }
    AppearanceAnimationLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_3__["a" /* AppearanceAnimationLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_3__["a" /* AppearanceAnimationLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_3__["a" /* AppearanceAnimationLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppearanceAnimationLayout3Module);
    return AppearanceAnimationLayout3Module;
}());

//# sourceMappingURL=appearance-animation-layout-3.module.js.map

/***/ })

});
//# sourceMappingURL=57.js.map