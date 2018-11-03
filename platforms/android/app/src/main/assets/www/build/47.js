webpackJsonp([47],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout1; });
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
            selector: 'swipe-to-dismiss-layout-1',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/'<!--Theme Swipe To Dismiss - Small item + header-->\n<ion-grid no-padding>\n  <ion-row *ngIf="data != null">\n    <ion-col col-12>\n      <!--Header Small item + header-->\n      <ion-list-header header-section padding-bottom padding-horizontal>\n        <!--Header Big Title-->\n        <h1 header-title>{{data.header}}</h1>\n        <ion-item no-lines>\n          <!-- Title -->\n          <h2 item-title text-capitalize margin-top text-wrap>{{data.title}}</h2>\n          <!-- Subtitle -->\n          <p item-subtitle no-margin text-wrap>{{data.subtitle}}</p>\n          <button item-end ion-button button-clear-outline outline round (click)="onEvent(\'onButtonGetClick\', \'\', $event)">{{data.button}}</button>\n        </ion-item>\n      </ion-list-header>\n      <!-- Content -->\n      <ion-list no-margin>\n        <ion-item-sliding *ngFor="let item of data.items" #slidingItem>\n          <ion-item border no-lines (click)="onEvent(\'onItemClick\', item.title, $event)">\n            <!-- Title -->\n            <h2 item-title>{{item.title}}</h2>\n            <!-- Subtitle -->\n            <h3 item-subtitle>{{item.subtitle}}</h3>\n            <!-- Details Item-->\n            <ion-note item-end>{{item.textIcon}}</ion-note>\n            <!-- Icon -->\n            <ion-icon item-end color="primary" name="{{item.icon}}"></ion-icon>\n          </ion-item>\n          <!--Action Button-->\n          <ion-item-options no-lines>\n            <button ion-button color="green" text-capitalize (click)="undo(slidingItem)" padding>\n              {{item.reply}}\n            </button>\n            <button ion-button color="red" text-capitalize (click)="delete(item)" (tap)="onEvent(\'onDelete\', item, $event)" padding>\n              {{item.delate}}\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout1);
    return SwipeToDismissLayout1;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-1.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout1Module", function() { return SwipeToDismissLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__ = __webpack_require__(1032);
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
//# sourceMappingURL=47.js.map