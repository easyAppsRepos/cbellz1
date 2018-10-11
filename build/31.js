webpackJsonp([31],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesPageModule", function() { return AjustesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajustes__ = __webpack_require__(465);
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

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjustesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjustesPage = (function () {
    function AjustesPage(alertCtrl, navCtrl, navParams, modalCtrl, apiProvider, loadingCtrl, events) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
    }
    AjustesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjustesPage');
    };
    AjustesPage.prototype.enviarMenssaje = function () {
        console.log('ionViewDidLoad AjustesPage');
    };
    AjustesPage.prototype.goUso = function () {
        var alert = this.alertCtrl.create({
            title: 'Terminos de Uso del app',
            subTitle: 'Lorem ipsum dolor sit amet, egestas ipsum turpis volutpat, curabitur arcu ac, donec vestibulum integer mi justo facilisis, est fusce nibh aenean id mauris. Tellus ad vitae lacus maxime, purus nec porttitor convallis, proin faucibus, aliquam mauris. Aenean sed sed vivamus amet. Vel ullamcorper morbi consectetuer consectetuer mollis vivamus, tincidunt vestibulum taciti feugiat est, neque nibh et, fringilla tempor amet nulla, id id et. Pede mollis voluptatem, cursus id rutrum sit, erat nulla suspendisse libero eget. Amet urna arcu tristique, rutrum eget ligula. At sed quis lacinia pellentesque vestibulum, duis sed mi voluptatem, libero morbi ridiculus.',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    AjustesPage.prototype.bnegocios = function () {
        var alert = this.alertCtrl.create({
            title: 'BeYoy Negocios',
            subTitle: 'Te interesa ser parte de YOURBEAUTY? Ponte en contacto a la brevedad posible! <br><br> Email: email@YOURBEAUTY.com <br>  Telefono: 24242424',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    AjustesPage.prototype.notisVerificar = function (ite) {
        console.log(ite);
        this.storage.set("bypush", ite);
    };
    AjustesPage.prototype.goSobre = function () {
        this.navCtrl.push('NosotrosPage');
    };
    AjustesPage.prototype.goBYN = function () {
        this.navCtrl.push('NegocioregistroPage');
    };
    AjustesPage.prototype.envioOK = function () {
        var alert = this.alertCtrl.create({
            title: 'Exito',
            subTitle: 'Tu mensaje ha sido enviado al administrador, gracias por usar nuestro servicio',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    AjustesPage.prototype.enviarMensaje = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Envianos un mensaje',
            inputs: [
                {
                    name: 'mensaje',
                    placeholder: 'Escribe tu mensaje aqui'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        if (data.mensaje) {
                            console.log(data.mensaje);
                            // logged in!
                            _this.envioOK();
                        }
                        else {
                            // invalid login
                            console.log('mensaje vaciui');
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AjustesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ajustes',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/ajustes/ajustes.html"*/'<!--\n  Generated template for the AjustesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n   <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    \n    <ion-title>Ajustes</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style=\'background-color: #fafafa; \' >\n\n\n          <ion-list>\n<!-- \n    <ion-item class="claseItem " [color]=\'verdeApp\'>\n    <ion-label>Notificaciones</ion-label>\n    <ion-toggle (ionChange)="notisVerificar(notis)" [color]=\'verdeApp\' [(ngModel)]="notis" ></ion-toggle>\n  </ion-item>\n -->\n\n\n                    <button  (click)=\'goSobre()\'  class="claseItem"  ion-item  >\n          Sobre <span style="font-style: italic;">Yourbeauty</span>\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n\n     \n\n<!-- \n          <button  class="claseItem"  ion-item  >\n          Evalua el app en la tienda\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n -->\n\n                    <button (click)=\'bnegocios()\' class="claseItem"  ion-item  >\n          Contáctar con Nosotros\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n\n                    <button  (click)=\'goBYN()\' class="claseItem"  ion-item  >\n          <span style="font-style: italic;">Yourbeauty</span> para negocios\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n\n\n     <button  (click)=\'goUso()\' class="claseItem"  ion-item  >\n          Terminos de uso\n          <img style=\'float: right;width: 20px;\' src="assets/imgs/ofertasVerde.png">\n          </button>\n      \n\n\n\n\n          </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/ajustes/ajustes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], AjustesPage);
    return AjustesPage;
}());

//# sourceMappingURL=ajustes.js.map

/***/ })

});
//# sourceMappingURL=31.js.map