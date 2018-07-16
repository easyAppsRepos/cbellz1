webpackJsonp([16],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio__ = __webpack_require__(467);
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

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = (function () {
    function InicioPage(menuCtrl, navCtrl, navParams, apiProvider, loadingController, events, modalCtrl) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.inicioSesion = false;
        this.categorias = [];
        events.subscribe('loginOK', function () {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.apiProvider.verificarLogin()
                .then(function (data) {
                console.log(data);
                if (data) {
                    _this.inicioSesion = false;
                }
                else {
                    _this.inicioSesion = true;
                }
            });
        });
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InicioPage');
        this.apiProvider.categoriasHome()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.categorias = data || [];
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
    };
    InicioPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.inicioSesion = false;
            }
            else {
                _this.inicioSesion = true;
            }
        });
    };
    InicioPage.prototype.goServicio = function (nombreServicio) {
        console.log(nombreServicio);
        this.navCtrl.push('ListaServiciosPage', { 'nombre': nombreServicio });
    };
    InicioPage.prototype.goMapa = function () {
        //console.log(nombreServicio);
        //this.navCtrl.setRoot('MapaPage');
        this.navCtrl.push('MapaPage');
    };
    InicioPage.prototype.openMenu = function () {
        var profileModal = this.modalCtrl.create('LoginPage');
        profileModal.present();
    };
    InicioPage.prototype.setDefaultPic = function (nombre) {
        console.log(nombre);
        return "assets/imgs/" + nombre;
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar  color="headerColor">\n\n    <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-title>\n<img src="assets/imgs/logoMenu.png">\n\n    </ion-title>\n\n      <ion-buttons end>\n\n        <button  (click)=\'goMapa()\'   ion-button icon-only>\n        <ion-icon name="ios-pin" style=\'font-color:white;color:white\'></ion-icon>\n      </button>\n\n\n<!--       <button  ion-button icon-only>\n        <ion-icon name="pin"></ion-icon>\n      </button> -->\n\n\n    <!--      (click)=\'goMapa()\'   <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button> -->\n\n\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <div *ngIf=\'true\'>\n\n    <div style="width: 100%;" >\n    <img src="assets/imgs/imagenLogo.png" style="height: 100%; width:100%;margin-top:-75px;">\n    </div>\n\n    <div>\n      <div class="tituloSeccion">\n      Selecciona una Categoria\n      </div>\n\n<ion-grid style=\'margin-bottom: 50px\' >\n  <div *ngFor="let n of categorias; let i = index">\n  <ion-row *ngIf=" i % 4 === 0" style=\'text-align: center;    max-width: 500px;\n    margin: 15px auto;\' > \n    <ion-col  *ngFor="let item of categorias.slice(i,i+4)" col-3 (click)=\'goServicio(item.idCategoria)\'>\n      <img  class=\'imagenCategoria\'  src="http://50.116.17.150:3000/{{item.idFoto}}" \n          onError="this.src=\'assets/imgs/ofertasVerde.png\';"> \n          <span style="    display: block;">{{item.nombre}}</span>\n    </ion-col>\n\n  </ion-row>\n</div>\n</ion-grid>\n\n\n    </div>\n\n  </div>\n</ion-content>\n\n\n\n<ion-footer>\n <div style="text-align: center;">\n   \n    <button *ngIf=\'inicioSesion\' (click)=\'openMenu()\' ion-button style="background-color: #2FD99B;width: 80%; max-width: 500px;    border-radius: 35px;">Crear Cuenta</button>\n\n  </div>\n</ion-footer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/inicio/inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ })

});
//# sourceMappingURL=16.js.map