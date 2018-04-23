webpackJsonp([10],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosPageModule", function() { return FavoritosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favoritos__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavoritosPageModule = (function () {
    function FavoritosPageModule() {
    }
    FavoritosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favoritos__["a" /* FavoritosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__favoritos__["a" /* FavoritosPage */]),
            ],
        })
    ], FavoritosPageModule);
    return FavoritosPageModule;
}());

//# sourceMappingURL=favoritos.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosPage; });
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
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritosPage = (function () {
    function FavoritosPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    FavoritosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritosPage');
    };
    FavoritosPage.prototype.filtroCategoria = function () {
        //console.log('ionViewDidLoad FavoritosPage');
        this.showCheckbox();
    };
    FavoritosPage.prototype.showCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ cssClass: 'alertCustomCss' });
        alert.setTitle('Filtra por categoria');
        alert.addInput({
            type: 'checkbox',
            label: 'Rostro y Cuerpo',
            value: 'Rostro y Cuerpo',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Peluqueria',
            value: 'Peluqueria'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Uñas',
            value: 'Uñas'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Masaje',
            value: 'Masaje',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Depilacion',
            value: 'Depilacion'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bienestar',
            value: 'Bienestar'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Paquetes',
            value: 'Paquetes',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Ofertas',
            value: 'Ofertas'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Seleccionar',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        alert.present();
    };
    FavoritosPage.prototype.goCentro = function () {
        this.navCtrl.push('PerfilCentroPage');
    };
    FavoritosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-favoritos',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/favoritos/favoritos.html"*/'<ion-header>\n  <ion-navbar  color="headerColor">\n\n    <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-title>\nFavoritos\n\n\n    </ion-title>\n\n          <ion-buttons end>\n      <button (click)=\'filtroCategoria()\' ion-button icon-only>\n        <ion-icon name="ios-options"></ion-icon>\n      </button>\n\n\n       \n\n      </ion-buttons>\n\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n\n\n    <ion-list mode="md" >\n\n		<ion-card (click)=\'goCentro()\'>\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">Center Name Here</span>\n				<span style="    display: block;\n    font-size: 16px;\n    margin: 10px 0px;\n    font-weight: 800;\n    color: #EC527E;">$25 - $40</span>\n\n				<span class="itemComercio" >\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n    color: rgb(249,199,53);\n    font-size: 21px;\n    vertical-align: middle;\' name="md-star"></ion-icon>5.0 (20)</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\' name="ios-pin"></ion-icon>7.5 Km</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n		<ion-card (click)=\'goCentro()\'>\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoProfile.png" style="\n				display: inline-block;\n				height: 90px;\n\n    border-radius: 6px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">Center Name Here</span>\n				<span style="    display: block;\n    font-size: 16px;\n    margin: 10px 0px;\n    font-weight: 800;\n    color: #EC527E;">$25 - $40</span>\n\n				<span class="itemComercio" >\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n    color: rgb(249,199,53);\n    font-size: 21px;\n    vertical-align: middle;\' name="md-star"></ion-icon>5.0 (20)</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\' name="ios-pin"></ion-icon>7.5 Km</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n		<ion-card (click)=\'goCentro()\'>\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/imagenLogo.png" style="\n				display: inline-block;\n				height: 90px;\n				    object-fit: cover;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">Center Name Here</span>\n				<span style="    display: block;\n    font-size: 16px;\n    margin: 10px 0px;\n    font-weight: 800;\n    color: #EC527E;">$25 - $40</span>\n\n				<span class="itemComercio" >\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n    color: rgb(249,199,53);\n    font-size: 21px;\n    vertical-align: middle;\' name="md-star"></ion-icon>5.0 (20)</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\' name="ios-pin"></ion-icon>7.5 Km</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n\n\n\n    </ion-list>\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/favoritos/favoritos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], FavoritosPage);
    return FavoritosPage;
}());

//# sourceMappingURL=favoritos.js.map

/***/ })

});
//# sourceMappingURL=10.js.map