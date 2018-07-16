webpackJsonp([19],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaPageModule", function() { return CuentaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuenta__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CuentaPageModule = (function () {
    function CuentaPageModule() {
    }
    CuentaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cuenta__["a" /* CuentaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cuenta__["a" /* CuentaPage */]),
            ],
        })
    ], CuentaPageModule);
    return CuentaPageModule;
}());

//# sourceMappingURL=cuenta.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuentaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(105);
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
 * Generated class for the CuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuentaPage = (function () {
    function CuentaPage(navCtrl, navParams, modalCtrl, alertCtrl, loadingCtrl, events, apiProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.storage = storage;
        this.editarData = true;
        this.dataUserInput = {};
        this.dataUser = {};
    }
    CuentaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CuentaPage');
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.dataUserInput = JSON.parse(JSON.stringify(data));
                ;
                _this.dataUser = data;
                //this.menuActivo = true;
            }
            else {
                console.log('error');
                // this.menuActivo = false;
            }
        });
    };
    CuentaPage.prototype.agregadoOk = function () {
        var alert = this.alertCtrl.create({
            title: 'Editado correctamente',
            subTitle: 'Sus datos han sido editados correctamente',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    CuentaPage.prototype.getPorcentaje = function () {
        var enviar = ((900) / (this.dataUser.completadas * 100)) + '%';
        console.log(enviar);
        return enviar;
    };
    CuentaPage.prototype.guardarCambios = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando ..." });
        loading.present();
        this.apiProvider.editarUsuario(this.dataUser)
            .then(function (data) {
            loading.dismissAll();
            console.log(data);
            if (data.affectedRows > 0) {
                //this.storage.set(`usr_tok_by`, this.dataUser);
                _this.storage.get('usr_tok_by').then(function (value) {
                    // console.log(value);
                    var da = value;
                    da.genero = _this.dataUser.genero;
                    da.telefono = _this.dataUser.telefono;
                    da.nombre = _this.dataUser.nombre;
                    console.log(da);
                    _this.storage.set("usr_tok_by", da);
                }).catch(function () { return resolve(false); });
                _this.agregadoOk();
                //console.log('borrada');
                _this.editarData = true;
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
        //console.log(this.dataUser);
    };
    CuentaPage.prototype.cancelarEdicion = function () {
        this.dataUser = this.dataUserInput;
        this.editarData = true;
    };
    CuentaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cuenta',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/cuenta/cuenta.html"*/'<!--\n  Generated template for the AjustesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n   <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    \n    <ion-title>Cuenta</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style=\'background-color: #fafafa; \' >\n\n\n        <ion-item style=\'    margin-top: 0px;\n    background-color: white !important;\n    padding: 20px;\' class=\'fixProfileMargin\'>\n          <ion-avatar item-start>\n\n          <img *ngIf="!imageFileName && editarData"  [hidden]=\'imageFileName\' style=\'width:75px; height: 75px\' src="http://50.116.17.150:3000/{{dataUser?.idFoto}}" \n        onError="this.src=\'assets/imgs/usuario.png\';" />\n\n            <img *ngIf="!imageFileName && !editarData" [hidden]=\'imageFileName\' style=\'width:75px; height: 75px\' src="assets/imgs/editImage.png"  (click)="getImages()" />\n\n        <img [src]="DomSanitizer.bypassSecurityTrustUrl(imageFileName)"  *ngIf="imageFileName" style=\'width:75px; height: 75px\' />\n\n          </ion-avatar>\n          <h2 style="margin-bottom: 23px;">{{dataUser?.nombre}}</h2>\n          <div class="barraContainer">\n            <div class="barraProgress" [ngStyle]="{\'width\': getPorcentaje()}" ><span>{{(dataUser?.completadas * 100) || 0}}/900</span></div>\n          </div>\n        </ion-item>\n\n\n\n\n          <ion-list>\n<!-- \n\n\n          <button  class="claseItem"  ion-item  >\n          {{dataUser?.nombre || \'no especificado\'}}\n    \n          </button>       <button  class="claseItem"  ion-item  >\n          {{dataUser?.email || \'no especificado\'}}\n        \n          </button>\n          <button  class="claseItem"  ion-item  >\n          {{dataUser?.telefono || \'no especificado\'}}\n        \n          </button>\n\n          <button  class="claseItem"  ion-item  >\n          Genero: {{dataUser?.genero || \'no especificado\'}}\n        \n          </button>\n-->\n\n\n  <ion-item style=\'margin-top: 20px\'  >\n    <ion-label color="headerColor" stacked>Nombre</ion-label>\n    <ion-input  [ngClass]="{\'itemActi\':!editarData}"   [disabled]=\'editarData\' [(ngModel)]="dataUser.nombre"  type="text" placeholder="nombre"></ion-input>\n  </ion-item>\n\n  <ion-item  style=\'margin-top: 20px\'>\n    <ion-label color="headerColor" stacked>Email</ion-label>\n    <ion-input  [disabled]=\'true\' [(ngModel)]="dataUser.email"  type="text" placeholder="correo electronico"></ion-input>\n  </ion-item>\n\n  <ion-item  style=\'margin-top: 20px\'>\n    <ion-label color="headerColor" stacked>Telefono</ion-label>\n    <ion-input  [ngClass]="{\'itemActi\':!editarData}"  [disabled]=\'editarData\' [(ngModel)]="dataUser.telefono"  type="tel" placeholder="telefono"></ion-input>\n  </ion-item>\n\n\n  <ion-item  style=\'margin-top: 20px\'>\n    <ion-label color="headerColor" stacked>Genero</ion-label>\n    <ion-input   [ngClass]="{\'itemActi\':!editarData}"  [disabled]=\'editarData\' [(ngModel)]="dataUser.genero"  type="text" placeholder=""></ion-input>\n  </ion-item>\n\n    \n\n\n\n\n\n\n\n          </ion-list>\n\n\n\n              <div [hidden]=\'!editarData\'  style="width: 100%;\n    position: fixed;\n    bottom: 0px;\n    background: rgb(247,248,249);\n    padding-bottom: 6px;\n">\n          <button (click)=\'editarData=false\' ion-button class="botonVerdeFull">Actualizar informacion<ion-icon style=\'    margin-left: 10px !important;\' name="md-arrow-forward"></ion-icon> \n\n          </button>\n </div>\n\n<div  style="width: 100%;\n    position: fixed;\n    bottom: 0px;\n    background: rgb(247,248,249);\n    padding-bottom: 6px;\n" [hidden]=\'editarData\'>\n    \n\n    <button (click)=\'guardarCambios()\'  style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;float:left"  color=\'verdeApp\' ion-button> Guardar cambio</button> \n\n    <button (click)=\'cancelarEdicion()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" >Deshacer</button>\n\n\n</div>\n\n\n\n\n   \n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/cuenta/cuenta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], CuentaPage);
    return CuentaPage;
}());

//# sourceMappingURL=cuenta.js.map

/***/ })

});
//# sourceMappingURL=19.js.map