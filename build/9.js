webpackJsonp([9],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegocioregistroPageModule", function() { return NegocioregistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__negocioregistro__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NegocioregistroPageModule = (function () {
    function NegocioregistroPageModule() {
    }
    NegocioregistroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__negocioregistro__["a" /* NegocioregistroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__negocioregistro__["a" /* NegocioregistroPage */]),
            ],
        })
    ], NegocioregistroPageModule);
    return NegocioregistroPageModule;
}());

//# sourceMappingURL=negocioregistro.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegocioregistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the NegocioregistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NegocioregistroPage = (function () {
    function NegocioregistroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NegocioregistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NegocioregistroPage');
    };
    NegocioregistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-negocioregistro',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/negocioregistro/negocioregistro.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BeYou para negocios</ion-title>\n\n\n\n    <ion-buttons end>\n    <button style="    font-size: 34px;" ion-button (click)="closeModal()"><ion-icon ios="ios-close"></ion-icon></button>\n\n\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n  <div>\n<!--     <div style="background-color:#36609F;margin: 20px 17px;border-radius: 30px;color: white;text-align: center;font-size: 15px;">\n    <img src="assets/imgs/Facebook.png" style="\n    vertical-align: middle;\n    margin-right: 10px;\n    ">\n    <img src="assets/imgs/Sep.png" style="\n    vertical-align: middle;\n    padding-top:  10px;\n    padding-bottom: 10px;\n    ">\n    <span (click)=\'loginApp()\' style="\n    ">Continuar con Facebook</span>\n    </div>\n\n<div style="\n    margin: 0px 17px;\n    text-align: center;\n    /* height: 300px; */\n">\n         <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n"><span style="\n    display: inline-block;\n    margin: 0px 10px;\n">OR</span> <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n">\n    </div>\n -->\n    <div style="\n    margin: 0px 17px;">\n\n    <form [formGroup]="authForm" (ngSubmit)="crearUsuario(authForm.value)">\n\n\n            <ion-item>\n            <ion-label floating>Nombre del negocio</ion-label>\n            <ion-input formControlName="nombre" type="text"></ion-input>\n        </ion-item>\n<ion-item *ngIf="authForm.controls.nombre.hasError(\'required\') && authForm.controls.nombre.touched">\n            <p>Este campo es requerido</p>\n        </ion-item>\n\n \n            <ion-item>\n            <ion-label floating>Nombre del titular</ion-label>\n            <ion-input formControlName="nombre2" type="text"></ion-input>\n        </ion-item>\n<ion-item *ngIf="authForm.controls.nombre2.hasError(\'required\') && authForm.controls.nombre2.touched">\n            <p>Este campo es requerido</p>\n        </ion-item>\n\n\n      \n\n\n\n\n\n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n            <ion-label floating>Email</ion-label>\n            <ion-input formControlName="email" type="email"></ion-input>\n        </ion-item>\n  \n        <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n            <p>Este campo es requerido</p>\n        </ion-item>\n      \n   		<ion-item>\n            <ion-label floating>Telefono de contacto</ion-label>\n            <ion-input formControlName="telefono" type="text"></ion-input>\n        </ion-item>\n\n\n  <!-- \n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n            <ion-label floating>Password</ion-label>\n            <ion-input formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n            <p>Este campo es requerido</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n            <p>Este campo requiere al menos 6 caracteres</p>\n        </ion-item>        -->         \n  \n        <button ion-button full color="verdeApp" [disabled]="!authForm.valid" style="    border-radius: 40px;margin-top: 20px;" type="submit">Contactar</button>        \n    </form>\n<p style="    text-align: center;\n    font-size: 16px;\n    color: #555;\n    line-height: 27px;\n    margin-top: 40px;\n    opacity: 0.5;">Asegurate de brindar un email valido <br> Al registrarte en beYou aceptas los terminos y condiciones de uso</p>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/negocioregistro/negocioregistro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], NegocioregistroPage);
    return NegocioregistroPage;
}());

//# sourceMappingURL=negocioregistro.js.map

/***/ })

});
//# sourceMappingURL=9.js.map