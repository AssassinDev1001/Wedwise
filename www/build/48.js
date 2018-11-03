webpackJsonp([48],{

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout1; });
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


var SwipeToDismissLayout1 = (function () {
    function SwipeToDismissLayout1() {
        var _this = this;
        this.undo = function (slidingItem) {
            slidingItem.close();
        };
        this.delete = function (item) {
            var index = _this.data.items.indexOf(item);
            if (index > -1) {
                _this.data.items.splice(index, 1);
            }
        };
    }
    SwipeToDismissLayout1.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], SwipeToDismissLayout1.prototype, "content", void 0);
    SwipeToDismissLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'swipe-to-dismiss-layout-1',template:/*ion-inline-start:"/Users/admin/Desktop/purp1/wed/src/components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/'<!--Theme Swipe To Dismiss - Small item + header-->\n\n<ion-grid no-padding>\n\n  <ion-row *ngIf="data != null">\n\n    <ion-col col-12>\n\n      <!--Header Small item + header-->\n\n      <ion-list-header header-section padding-bottom padding-horizontal>\n\n        <!--Header Big Title-->\n\n        <h1 header-title>{{data.header}}</h1>\n\n        <ion-item no-lines>\n\n          <!-- Title -->\n\n          <h2 item-title text-capitalize margin-top text-wrap>{{data.title}}</h2>\n\n          <!-- Subtitle -->\n\n          <p item-subtitle no-margin text-wrap>{{data.subtitle}}</p>\n\n          <button item-end ion-button button-clear-outline outline round (click)="onEvent(\'onButtonGetClick\', \'\', $event)">{{data.button}}</button>\n\n        </ion-item>\n\n      </ion-list-header>\n\n      <!-- Content -->\n\n      <ion-list no-margin>\n\n        <ion-item-sliding *ngFor="let item of data.items" #slidingItem>\n\n          <ion-item border no-lines (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n            <!-- Title -->\n\n            <h2 item-title>{{item.title}}</h2>\n\n            <!-- Subtitle -->\n\n            <h3 item-subtitle>{{item.subtitle}}</h3>\n\n            <!-- Details Item-->\n\n            <ion-note item-end>{{item.textIcon}}</ion-note>\n\n            <!-- Icon -->\n\n            <ion-icon item-end color="primary" name="{{item.icon}}"></ion-icon>\n\n          </ion-item>\n\n          <!--Action Button-->\n\n          <ion-item-options no-lines>\n\n            <button ion-button color="green" text-capitalize (click)="undo(slidingItem)" padding>\n\n              {{item.reply}}\n\n            </button>\n\n            <button ion-button color="red" text-capitalize (click)="delete(item)" (tap)="onEvent(\'onDelete\', item, $event)" padding>\n\n              {{item.delate}}\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"/Users/admin/Desktop/purp1/wed/src/components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout1);
    return SwipeToDismissLayout1;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-1.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout1Module", function() { return SwipeToDismissLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__ = __webpack_require__(1061);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwipeToDismissLayout1Module = (function () {
    function SwipeToDismissLayout1Module() {
    }
    SwipeToDismissLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SwipeToDismissLayout1Module);
    return SwipeToDismissLayout1Module;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-1.module.js.map

/***/ })

});
//# sourceMappingURL=48.js.map