webpackJsonp([9],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InicioPageModule = (function () {
    function InicioPageModule() {
    }
    InicioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */]),
            ],
        })
    ], InicioPageModule);
    return InicioPageModule;
}());

//# sourceMappingURL=inicio.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(419);
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
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = (function () {
    function InicioPage(navCtrl, navParams, apiProvider, loadingController, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.events = events;
        this.categorias = [];
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InicioPage');
        this.apiProvider.categoriasHome()
            .then(function (data) {
            console.log(data);
            _this.categorias = data || [];
        });
    };
    InicioPage.prototype.goServicio = function (nombreServicio) {
        console.log(nombreServicio);
        this.navCtrl.push('ListaServiciosPage', { 'nombre': nombreServicio });
    };
    InicioPage.prototype.setDefaultPic = function (nombre) {
        console.log(nombre);
        return "assets/imgs/" + nombre;
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar  color="headerColor">\n\n    <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-title>\n<img src="assets/imgs/logoMenu.png">\n\n    </ion-title>\n\n      <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n\n\n            <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n\n\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <div *ngIf=\'true\'>\n\n    <div style="width: 100%;" >\n    <img src="assets/imgs/imagenLogo.png" style="height: 100%; width:100%;margin-top:-75px;">\n    </div>\n\n    <div>\n      <div class="tituloSeccion">\n      Selecciona un Servicio\n      </div>\n\n      <div class="containerServicios">\n\n\n        <div *ngFor="let n of categorias" class="servicios" (click)=\'goServicio(n.idCategoria)\'> \n          <img [src]="n.linkIcono" [hidden]="!n.linkIcono">\n          <img  src="assets/imgs/ofertasVerde.png" [hidden]="n.linkIcono"> \n          <span>{{n.nombre}}</span>\n        </div>\n\n\n<!-- \n        <div class="servicios" (click)=\'goServicio("Peluqueria")\'> \n          <img src="assets/imgs/Peluqueria.png">\n          <span>Peluqueria</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Rostro y Cuerpo")\'> \n          <img src="assets/imgs/rostro.png">\n          <span>Rostro y Cuerpo</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Uñas")\'> \n          <img src="assets/imgs/unas.png">\n          <span>Uñas</span>\n        </div>\n\n     \n\n                <div class="servicios" (click)=\'goServicio("Masaje")\'> \n          <img src="assets/imgs/masaje.png">\n          <span>Masaje</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Depilacion")\'> \n          <img src="assets/imgs/depilacion.png">\n          <span>Depilacion</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Bienestar")\'> \n          <img src="assets/imgs/bienestar.png" >\n          <span>Bienestar</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Paquetes")\'> \n          <img src="assets/imgs/paquetes.png">\n          <span>Paquetes</span>\n        </div>\n                <div class="servicios" (click)=\'goServicio("Ofertas")\'> \n          <img src="assets/imgs/ofertasVerde.png">\n          <span>Ofertas</span>\n        </div>\n\n -->\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/inicio/inicio.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _e || Object])
    ], InicioPage);
    return InicioPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=inicio.js.map

/***/ })

});
//# sourceMappingURL=9.js.map