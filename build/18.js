webpackJsonp([18],{

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesPageModule", function() { return AjustesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajustes__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AjustesPageModule = (function () {
    function AjustesPageModule() {
    }
    AjustesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ajustes__["a" /* AjustesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__ajustes__["a" /* AjustesPage */]),
            ],
        })
    ], AjustesPageModule);
    return AjustesPageModule;
}());

//# sourceMappingURL=ajustes.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjustesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjustesPage = (function () {
    function AjustesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AjustesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjustesPage');
    };
    AjustesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ajustes',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/ajustes/ajustes.html"*/'<!--\n  Generated template for the AjustesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n   <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    \n    <ion-title>Ajustes</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style=\'background-color: #fafafa; \' >\n\n\n          <ion-list>\n\n    <ion-item class="claseItem " [color]=\'verdeApp\'>\n    <ion-label>Notificaciones</ion-label>\n    <ion-toggle [color]=\'verdeApp\' [(ngModel)]="notis"></ion-toggle>\n  </ion-item>\n\n\n          <button  class="claseItem"  ion-item  >\n          Notificaciones\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n                    <button  class="claseItem"  ion-item  >\n          Sobre Beyou\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n\n          <button  class="claseItem"  ion-item  >\n          Terminos de uso\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n\n\n          <button  class="claseItem"  ion-item  >\n          Evalua el app en la tienda\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n\n\n                    <button  class="claseItem"  ion-item  >\n          Envianos un mensaje\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n\n                    <button  class="claseItem"  ion-item  >\n          BeYou para negocios\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n\n\n\n      \n\n\n\n\n          </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/ajustes/ajustes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AjustesPage);
    return AjustesPage;
}());

//# sourceMappingURL=ajustes.js.map

/***/ })

});
//# sourceMappingURL=18.js.map