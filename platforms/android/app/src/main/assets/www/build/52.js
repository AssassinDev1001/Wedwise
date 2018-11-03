webpackJsonp([52],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropLayout3; });
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


var DragAndDropLayout3 = (function () {
    function DragAndDropLayout3() {
        var _this = this;
        this.reorderItems = function (indexes) {
            _this.data.items = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* reorderArray */])(_this.data.items, indexes);
        };
    }
    DragAndDropLayout3.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], DragAndDropLayout3.prototype, "content", void 0);
    DragAndDropLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'drag-and-drop-layout-3',template:/*ion-inline-start:"/Users/admin/web_wise/src/components/list-view/drag-and-drop/layout-3/drag-and-drop.html"*/'<!-- Themes Drag and drop - Medium item with avatar-->\n<ion-content has-header>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row>\n      <ion-col col-12>\n        <!-- Header Medium item with avatar-->\n        <ion-list-header header-section>\n          <h1 header-title text-capitalize>{{data.header}}</h1>\n        </ion-list-header>\n        <!-- Content Medium Item With Avatar-->\n        <ion-list reorder="true" (ionItemReorder)="reorderItems($event)">\n          <ion-item border no-lines *ngFor="let item of data.items; let i = index;"\n          (click)="onEvent(\'onItemClick\', item.title, $event)">\n            <!--Avatar-->\n            <ion-avatar item-left>\n              <img [src]="item.image">\n            </ion-avatar>\n            <!--Title-->\n            <h2 item-title>{{item.title}}</h2>\n            <!--Subtitle-->\n            <h3 item-subtitle>{{item.subtitle}}</h3>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!--Footer-->\n<ion-footer no-lines padding-horizontal>\n  <ion-toolbar padding-bottom >\n    <!--Footer Button-->\n    <button default-button text-capitalize ion-button block *ngIf="data != null"\n    (click)="onEvent(\'onButtonClick\', null, $event)">{{data.button}}</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/admin/web_wise/src/components/list-view/drag-and-drop/layout-3/drag-and-drop.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DragAndDropLayout3);
    return DragAndDropLayout3;
}());

//# sourceMappingURL=drag-and-drop-layout-3.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropLayout3Module", function() { return DragAndDropLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__ = __webpack_require__(1024);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DragAndDropLayout3Module = (function () {
    function DragAndDropLayout3Module() {
    }
    DragAndDropLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__["a" /* DragAndDropLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__["a" /* DragAndDropLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__["a" /* DragAndDropLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], DragAndDropLayout3Module);
    return DragAndDropLayout3Module;
}());

//# sourceMappingURL=drag-and-drop-layout-3.module.js.map

/***/ })

});
//# sourceMappingURL=52.js.map