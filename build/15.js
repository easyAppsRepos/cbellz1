webpackJsonp([15],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarReservaPageModule", function() { return ConfirmarReservaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmar_reserva__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmarReservaPageModule = (function () {
    function ConfirmarReservaPageModule() {
    }
    ConfirmarReservaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmar_reserva__["a" /* ConfirmarReservaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmar_reserva__["a" /* ConfirmarReservaPage */]),
            ],
        })
    ], ConfirmarReservaPageModule);
    return ConfirmarReservaPageModule;
}());

//# sourceMappingURL=confirmar-reserva.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarReservaPage; });
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
 * Generated class for the ConfirmarReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmarReservaPage = (function () {
    function ConfirmarReservaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmarReservaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmarReservaPage');
    };
    ConfirmarReservaPage.prototype.confirmacionLista = function () {
        //   this.navCtrl.push('ReservaHechaPage');
        this.navCtrl.setRoot('ReservaHechaPage');
    };
    ConfirmarReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirmar-reserva',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/confirmar-reserva/confirmar-reserva.html"*/'<!--\n  Generated template for the ConfirmarReservaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ConfirmarReserva</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n<div style="\n    display: inline-block;    width: 100%;\n">\n	<img src="assets/imgs/fotoComercio.png" style="\n    display: inline-block;\n    height: 90px;\n    width: 90px !important;\n    vertical-align: top;\n">\n	<div style="\n    display: inline-block;\n    width: calc(100% - 114px);\n    margin-left:  20px;\n">\n		<span style="margin: 2px 0px 0px 0px;\n    font-size: 19px;\n    color: #333;">Center Name Here.....</span>\n		<span class="itemComercio">Center name, Building name</span>\n		<span class="itemComercio">City Name, Country</span>\n		<span class="itemComercio" style="margin-top:10px !important">Date <span style="margin-left: 10px;color:#EC527E !important">Tue 5, Jan 2o12o</span></span>\n\n	</div>\n	</div>\n\n\n\n\n<div class="separator"></div>\n\n<div style="\n    width: 100%;\n    display: inline-block;\n">\n	\n	<img src="assets/imgs/servicio1.png" style="\n    display: inline-block;\n    vertical-align: top;\n    height: 54px;\n    width: 54px;\n">\n	<div style="\n    display: inline-block;\n    width: calc(100% - 83px);\n    margin-left: 22px;\n">\n\n<span style="     color: #EC527E !important;\n    font-size: 16px;\n    float: right;\n    margin-right: 47px;">$42.00</span>\n\n\n		<span style="\n    font-size: 19px;\n    color:  #333;\n">Jaur Juro</span>\n		<div style="    margin-top: 7px;"><span style="    color: #333;\n    font-size: 12px;">Any staff</span>	<span style="margin-right: 20px;     margin-left: 20px;   color: #333;\n    font-size: 12px;"><ion-icon style=\'margin-right: 5px\' name="ios-time-outline"></ion-icon>7:00am to 9:00pm</span></div>\n	</div>\n</div>\n\n\n\n<div class="separator"></div>\n\n<div style="\n    width: 100%;\n    display: inline-block;\n">\n	\n	<img src="assets/imgs/servicio1.png" style="\n    display: inline-block;\n    vertical-align: top;\n    height: 54px;\n    width: 54px;\n">\n	<div style="\n    display: inline-block;\n    width: calc(100% - 83px);\n    margin-left: 22px;\n">\n<span style="     color: #EC527E !important;\n    font-size: 16px;\n    float: right;\n    margin-right: 47px;">$42.00</span>\n\n		<span style="\n    font-size: 19px;\n    color:  #333;\n">Jaur Juro\n\n\n\n    </span>\n		<div style="    margin-top: 7px;"><span style="    color: #333;\n    font-size: 12px;">Any staff</span>	<span style="margin-right: 20px;     margin-left: 20px;   color: #333;\n    font-size: 12px;"><ion-icon style=\'margin-right: 5px\' name="ios-time-outline"></ion-icon>7:00am to 9:00pm</span></div>\n	</div>\n</div>\n\n\n\n<div class="separator"></div>\n\n	\n\n<div style="width:100%">\n\n\n\n	<div style="\n    margin-bottom: 15px;\n    margin-left: 81px;\n"><span style="\n    font-size: 16px;\n    color: #999;\n">Total</span> <span style="\n    color: #EC527E !important;\n    font-size: 16px;\n    float: right;\n    margin-right: 47px;\n">$120.00</span></div>\n\n\n\n\n\n	 <ion-item style=\'padding: 0px !important;\'>\n  <ion-textarea  style=\'    color: #777;\n    background: white;\n    height: 136px;\' placeholder="Nota para el centro de belleza" \n      [(ngModel)]="note" name="note" autocomplete="on" autocorrect="on"></ion-textarea>\n </ion-item>\n\n</div>\n\n\n\n\n\n\n\n<button (click)=\'confirmacionLista()\' style="    margin: 40px 0px 40px 0px;" ion-button class="botonVerdeFulls">Confirmar Reserva</button>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/confirmar-reserva/confirmar-reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ConfirmarReservaPage);
    return ConfirmarReservaPage;
}());

//# sourceMappingURL=confirmar-reserva.js.map

/***/ })

});
//# sourceMappingURL=15.js.map