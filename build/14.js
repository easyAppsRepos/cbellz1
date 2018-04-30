webpackJsonp([14],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleReservaPageModule", function() { return DetalleReservaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_reserva__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalleReservaPageModule = (function () {
    function DetalleReservaPageModule() {
    }
    DetalleReservaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalle_reserva__["a" /* DetalleReservaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_reserva__["a" /* DetalleReservaPage */]),
            ],
        })
    ], DetalleReservaPageModule);
    return DetalleReservaPageModule;
}());

//# sourceMappingURL=detalle-reserva.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleReservaPage; });
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
 * Generated class for the DetalleReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleReservaPage = (function () {
    function DetalleReservaPage(navCtrl, navParams, modalCtrl, apiProvider, loadingController, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.events = events;
        this.dataCentro = {};
    }
    DetalleReservaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalleReservaPage');
        this.getDataCita(this.navParams.get('idCita'));
    };
    DetalleReservaPage.prototype.getEstado = function (idEstado) {
        var estado = '';
        idEstado == 1 ? estado = "Pendiente de confirmar" :
            idEstado == 5 ? estado = "Reprogramada" :
                idEstado == 2 ? estado = "Confimada" :
                    idEstado == 3 ? estado = "Completada" :
                        idEstado == 4 ? estado = "Cancelada" : estado = "";
        return estado;
    };
    DetalleReservaPage.prototype.getDataCita = function (idCita) {
        var _this = this;
        var dataE = { idCita: idCita };
        console.log(dataE);
        this.apiProvider.getDataCita(dataE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.dataCita = data['cita'][0] || [];
                _this.servicios = data['servicios'] || [];
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
    };
    DetalleReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalle-reserva',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/detalle-reserva/detalle-reserva.html"*/'<!--\n  Generated template for the DetalleReservaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mi Reservacion</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n\n	<div>\n		<div><span  class="tituloBook">Reserva ID</span> <span  class="subBook">{{dataCita?.idCita}}</span></div>\n		<div style="margin-top: 12px;"><span class="tituloBook">Estado</span> <span class="subBook">{{getEstado(dataCita?.estado)}}</span></div>\n\n        <div *ngIf=\'dataCita?.estado == 5\' >\n		<span style="    font-size: 15px;\n    color: #777;\n    display: inline-block;\n    margin-top: 12px;">Motivo de reprogramacion</span>\n		<p class="parrafoHead">{{dataCita?.comentarioEstado}}</p>\n        </div>\n\n		<div style="\n    display: inline-block;    width: 100%;    margin-top: 20px;\n">\n	<img src="assets/imgs/fotoComercio.png" style="\n    display: inline-block;\n    height: 90px;\n    width: 90px !important;\n    vertical-align: top;\n">\n	<div style="\n    display: inline-block;\n    width: calc(100% - 114px);\n    margin-left:  20px;\n">\n		<span style="margin: 2px 0px 0px 0px;\n    font-size: 19px;\n    color: #333;">{{dataCita?.nombre}}</span>\n		<span style="margin-top:10px" class="itemComercio">{{dataCita?.direccion}}</span>\n		<span style="margin-top:10px" class="itemComercio"></span>\n\n\n	</div>\n	</div>\n\n\n\n	</div>\n\n\n <div style="    width: 100%;\n    text-align: center;\n margin-top: 20px;">\n\n	<button  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;" > <img style="margin-right:10px" src="assets/imgs/telefono.png"> Llamar</button> \n\n	<button  style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;"  color=\'verdeApp\' ion-button> <img style="margin-right:10px" src="assets/imgs/agregadosBlanco.png">  Mapa</button>\n\n\n\n</div>\n\n<div style="margin-top:13px"><span  style=\' \n    width: 50px;\n    margin-left: 8px;\n    font-size: 15px;\' class="tituloBook">Fecha</span> <span  style=\'    font-size: 15px;\' class="subBook">{{dataCita?.horaInicio}}</span></div>\n\n\n<div  *ngFor="let n of servicios">\n\n<div class="separator"></div>\n\n<div style="\n    width: 100%;\n    display: inline-block;\n">\n	\n	<img src="assets/imgs/servicio1.png" style="\n    display: inline-block;\n    vertical-align: top;\n    height: 54px;\n    width: 54px;\n">\n	<div style="\n    display: inline-block;\n    width: calc(100% - 83px);\n    margin-left: 22px;\n">\n\n<span style="     color: #EC527E !important;\n    font-size: 16px;\n    float: right;\n    margin-right: 47px;">${{n.precio}}</span>\n\n\n		<span style="\n    font-size: 19px;\n    color:  #333;\n">{{n.nombre}}</span>\n		<div style="    margin-top: 7px;"><span style="    color: #333;\n    font-size: 12px;">{{n.nombreCategoria}}</span>	<span style="margin-right: 20px;     margin-left: 20px;   color: #333;\n    font-size: 12px;"><ion-icon style=\'margin-right: 5px\' name="ios-time-outline"></ion-icon>{{n.duracion}} min</span></div>\n	</div>\n</div>\n\n</div>\n\n\n\n<div class="separator"></div>\n\n\n	<div style="\n    margin-bottom: 15px;\n\n"><span style="\n    font-size: 16px;\n    color: #333;\n">Total</span> <span style="    color: #EC527E !important;\n    font-size: 16px;\n    margin-left: 47px;">${{dataCita?.total}}</span></div>\n\n\n\n <div style="    width: 100%;\n    text-align: center;\n margin-top: 20px; margin-bottom: 30px;">\n\n	<button  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;" > Cancelar</button> \n\n	<button  style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;"  color=\'verdeApp\' ion-button> Aceptar </button>\n\n\n\n</div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/detalle-reserva/detalle-reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], DetalleReservaPage);
    return DetalleReservaPage;
}());

//# sourceMappingURL=detalle-reserva.js.map

/***/ })

});
//# sourceMappingURL=14.js.map