webpackJsonp([10],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaHechaPageModule", function() { return ReservaHechaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reserva_hecha__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReservaHechaPageModule = (function () {
    function ReservaHechaPageModule() {
    }
    ReservaHechaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reserva_hecha__["a" /* ReservaHechaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reserva_hecha__["a" /* ReservaHechaPage */]),
            ],
        })
    ], ReservaHechaPageModule);
    return ReservaHechaPageModule;
}());

//# sourceMappingURL=reserva-hecha.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaHechaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the ReservaHechaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservaHechaPage = (function () {
    function ReservaHechaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReservaHechaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservaHechaPage');
    };
    ReservaHechaPage.prototype.goPagina = function (pagina) {
        this.navCtrl.setRoot(pagina);
        //this.navCtrl.push('PerfilCentroPage');
    };
    ReservaHechaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reserva-hecha',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/reserva-hecha/reserva-hecha.html"*/'<!--\n  Generated template for the ReservaHechaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ReservaHecha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n<div style="\n    padding-left: 40px;\n    text-align: center;\n    padding-right: 40px;\n    margin-top: 30px;\n">\n	<img src="assets/imgs/fotoComercio.png" style="\n   height: 90px;\n   width: 90px;\n   ">\n\n	<span style="\n    display: block;\n    font-size: 20px;\n    color: #333;\n    margin-top: 15px;\n    margin-bottom:  15px;\n">Completado!</span>\n\n	<span style="\n    display: block;\n    color: #999;\n    font-size: 15px;\n    margin-bottom: 40px;\n        line-height: 24px;\n">Tu reserva esta siendo confirmada en este momento. Te notificaremos cuando hayamos procesado tu reserva</span>\n\n\n</div>\n\n\n<div style="    width: 100%;\n    text-align: center;\n    position: fixed;\n    left: 0;\n    bottom: 40px;">\n\n<button (tap)=\'goPagina("MisReservasPage")\' color=\'verdeApp\' ion-button>Ver mi Reserva</button>\n\n<button (tap)=\'goPagina("InicioPage")\' color=\'headerColor\' ion-button>Volver al Inicio</button>\n\n\n\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/reserva-hecha/reserva-hecha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ReservaHechaPage);
    return ReservaHechaPage;
}());

//# sourceMappingURL=reserva-hecha.js.map

/***/ })

});
//# sourceMappingURL=10.js.map