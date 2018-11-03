webpackJsonp([53],{

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropLayout2; });
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


var DragAndDropLayout2 = (function () {
    function DragAndDropLayout2() {
        var _this = this;
        this.reorderItems = function (indexes) {
            _this.data.items = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* reorderArray */])(_this.data.items, indexes);
        };
    }
    DragAndDropLayout2.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], DragAndDropLayout2.prototype, "content", void 0);
    DragAndDropLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'drag-and-drop-layout-2',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/list-view/drag-and-drop/layout-2/drag-and-drop.html"*/'<!-- Themes Drag and drop - Products + CTA header -->\n<ion-content has-header>\n    <ion-grid no-padding *ngIf="data != null">\n        <ion-row>\n            <ion-col col-12>\n                <!-- Header Products + CTA header -->\n                <ion-list-header header-section padding-bottom padding-horizontal>\n                    <h1 header-title>{{data.header}}</h1>\n                    <ion-item no-lines>\n                        <h2 item-title text-capitalize margin-top text-wrap>{{data.title}}</h2>\n                        <h2 item-subtitle no-margin text-wrap>{{data.subtitle}}</h2>\n                        <button item-end ion-button button-clear-outline outline round  (click)="onEvent(\'onButtonGetClick\', \'\', $event)">{{data.button}}</button>\n                    </ion-item>\n                </ion-list-header>\n                <!-- Content Products + CTA header -->\n                <ion-list no-margin no-lines reorder="true" (ionItemReorder)="reorderItems($event)">\n                    <ion-item border no-lines *ngFor="let item of data.items; let i = index;"\n                    (click)="onEvent(\'onItemClick\', item.title, $event)">\n                        <!-- Avatar -->\n                        <ion-avatar item-start>\n                            <img [src]="item.image">\n                        </ion-avatar>\n                        <!-- Title -->\n                        <h2 item-title text-wrap text-capitalize>{{item.title}}</h2>\n                        <!-- Subtitle -->\n                        <p item-subtitle>{{item.subtitle}}</p>\n                        <!-- Badge -->\n                        <div item-content>\n                            <ion-badge class="badge-light">{{item.price}}</ion-badge>\n                        </div>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/list-view/drag-and-drop/layout-2/drag-and-drop.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DragAndDropLayout2);
    return DragAndDropLayout2;
}());

//# sourceMappingURL=drag-and-drop-layout-2.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropLayout2Module", function() { return DragAndDropLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__ = __webpack_require__(1023);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DragAndDropLayout2Module = (function () {
    function DragAndDropLayout2Module() {
    }
    DragAndDropLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__["a" /* DragAndDropLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__["a" /* DragAndDropLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__["a" /* DragAndDropLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], DragAndDropLayout2Module);
    return DragAndDropLayout2Module;
}());

//# sourceMappingURL=drag-and-drop-layout-2.module.js.map

/***/ })

});
//# sourceMappingURL=53.js.map