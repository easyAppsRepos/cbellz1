webpackJsonp([17],{

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarReservaPageModule", function() { return ConfirmarReservaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmar_reserva__ = __webpack_require__(449);
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
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
    function ConfirmarReservaPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, apiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.confirmacionLista = function () {
            var loading = _this.loadingCtrl.create({ content: "Creando Cita..." });
            loading.present();
            console.log(_this.dataCentro);
            _this.apiProvider.addCita(_this.dataCentro)
                .then(function (data) {
                if (data) {
                    console.log(data);
                    if (data.insertId > 0) {
                        _this.navCtrl.setRoot('ReservaHechaPage');
                    }
                }
                else {
                    console.log('Ha ocurrido un error');
                }
                loading.dismissAll();
            });
        };
        this.dataCentro = {};
    }
    ConfirmarReservaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ConfirmarReservaPage');
        this.apiProvider.getCarrito()
            .then(function (data) {
            console.log(data);
            _this.dataCentro.servicios = data;
        });
        this.apiProvider.getTotal()
            .then(function (data) {
            console.log(data);
            _this.dataCentro.total = data;
        });
        this.dataCentro.fecha = this.navParams.get('fecha');
        this.dataCentro.hora = this.navParams.get('hora');
        this.dataCentro.data = this.navParams.get('centro');
        this.dataCentro.idEmpleado = this.navParams.get('idEmpleado');
        this.dataCentro.idCliente = 1;
        console.log(this.dataCentro);
    };
    ConfirmarReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirmar-reserva',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/confirmar-reserva/confirmar-reserva.html"*/'<!--\n  Generated template for the ConfirmarReservaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ConfirmarReserva</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n<div style="\n    display: inline-block;    width: 100%;\n">\n	<img src="assets/imgs/fotoComercio.png" style="\n    display: inline-block;\n    height: 90px;\n    width: 90px !important;\n    vertical-align: top;\n">\n	<div style="\n    display: inline-block;\n    width: calc(100% - 114px);\n    margin-left:  20px;\n">\n		<span style="margin: 2px 0px 0px 0px;\n    font-size: 19px;\n    color: #333;">{{dataCentro.data?.nombre}}</span>\n    <span class="itemComercio"></span>\n	<!-- 	<span class="itemComercio">{{dataCentro.data?.direccion}}</span>\n		<span class="itemComercio">City Name, Country</span> -->\n		<span class="itemComercio" style="margin-top:10px !important">Fecha <span style="margin-left: 10px;color:#EC527E !important">{{dataCentro?.fecha}}</span></span>\n\n                <span class="itemComercio" style="margin-top:10px !important">Hora <span style="margin-left: 10px;color:#EC527E !important">{{dataCentro?.hora}}</span></span>\n\n\n	</div>\n\n\n	</div>\n\n\n\n\n<div class="separator"></div>\n\n<div *ngFor="let n of dataCentro.servicios" style="\n    width: 100%;\n    display: inline-block;\n">\n	\n	<img src="assets/imgs/servicio1.png" style="\n    display: inline-block;\n    vertical-align: top;\n    height: 54px;\n    width: 54px;\n">\n	<div style="\n    display: inline-block;\n    width: calc(100% - 83px);\n    margin-left: 22px;\n">\n\n<span style="     color: #EC527E !important;\n    font-size: 16px;\n    float: right;\n    margin-right: 47px;">${{n.precio}}</span>\n\n\n		<span style="\n    font-size: 19px;\n    color:  #333;\n">{{n.nombre}}</span>\n		<div style="    margin-top: 7px;"><span style="    color: #333;\n    font-size: 12px;">{{n.nombreCategoria}}</span>	<span style="margin-right: 20px;     margin-left: 20px;   color: #333;\n    font-size: 12px;"><ion-icon style=\'margin-right: 5px\' name="ios-time-outline"></ion-icon>{{n.duracion}} min</span></div>\n	</div>\n\n    <div class="separator"></div>\n\n\n</div>\n\n\n\n\n	<div style="\n    margin-bottom: 15px;\n    margin-left: 81px;\n"><span style="\n    font-size: 16px;\n    color: #999;\n">Total</span> <span style="\n    color: #EC527E !important;\n    font-size: 16px;\n    float: right;\n    margin-right: 47px;\n">${{dataCentro?.total}}</span>\n\n\n\n</div>\n\n	 <ion-item style=\'padding: 0px !important;\'>\n  <ion-textarea  style=\'    color: #777;\n    background: white;\n    height: 136px;\' placeholder="Nota para el centro de belleza" \n      [(ngModel)]="dataCentro.notaCita" name="note" autocomplete="on" autocorrect="on"></ion-textarea>\n </ion-item>\n\n\n\n\n\n\n\n\n\n<button (click)=\'confirmacionLista()\' style="    margin: 40px 0px 40px 0px;" ion-button class="botonVerdeFulls">Confirmar Reserva</button>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/confirmar-reserva/confirmar-reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], ConfirmarReservaPage);
    return ConfirmarReservaPage;
}());

//# sourceMappingURL=confirmar-reserva.js.map

/***/ })

});
//# sourceMappingURL=17.js.map