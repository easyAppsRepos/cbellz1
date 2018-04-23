webpackJsonp([13],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuponesPageModule", function() { return CuponesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cupones__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CuponesPageModule = (function () {
    function CuponesPageModule() {
    }
    CuponesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cupones__["a" /* CuponesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cupones__["a" /* CuponesPage */]),
            ],
        })
    ], CuponesPageModule);
    return CuponesPageModule;
}());

//# sourceMappingURL=cupones.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuponesPage; });
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
 * Generated class for the CuponesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CuponesPage = (function () {
    function CuponesPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    CuponesPage.prototype.ionViewDidLoad = function () {
        this.section = "one";
        console.log('ionViewDidLosad CuponesPage');
    };
    CuponesPage.prototype.filtroCategoria = function () {
        //console.log('ionViewDidLoad FavoritosPage');
        this.showCheckbox();
    };
    CuponesPage.prototype.showCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ cssClass: 'alertCustomCss' });
        alert.setTitle('Filtra por servicio');
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
    CuponesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cupones',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/cupones/cupones.html"*/'<!--\n  Generated template for the CuponesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n   <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    \n    <ion-title>Coupones</ion-title>\n\n\n\n          <ion-buttons end>\n      <button (click)=\'filtroCategoria()\' ion-button icon-only>\n        <ion-icon name="ios-options"></ion-icon>\n      </button>\n\n\n       \n\n      </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n<div>\n	<span style="    vertical-align: middle;\n    height: 100%;\n    font-size: 17px;\n    color: #333;\n    margin-left: 12px;\n    margin-top: 23px;\n    display: inline-block;">Ingresar coupon</span>\n	<button ion-button   style="    padding: 14px 30px;\n    color: white;\n    background-color: #2FD99B;\n    margin: 12px 0px;\n    float: right;\n    margin-right: 9px;\n    border-radius: 40px;\n    font-size: 16px;">Usar coupon</button>\n\n</div>\n\n\n<ion-segment mode="md" [(ngModel)]="section" style=\'    border-top-style: solid;\n    border-top-width: 2px;\n    border-top-color: rgba(0, 0, 0, 0.1);\n    background: white;\' >\n\n\n    <ion-segment-button   style=\'    border-right: solid 2px rgb(0,0,0,0.1);  font-size: 15px;text-transform: none !important;\' value="one" >\n	       <span> \n	       <img  *ngIf=\'section=="one"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/disponibleBlanco.png">\n	       <img  *ngIf=\'!(section=="one")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/disponibleGris.png">\n	        Disponible</span>\n	    </ion-segment-button>\n\n\n\n	    <ion-segment-button  value="two" style=\'    border-right: solid 2px rgb(0,0,0,0.1); \n    	font-size: 15px;text-transform: none !important;\' >\n    	<span>\n	      <img  *ngIf=\'section=="two"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/usadosBlanco.png"> \n	      <img  *ngIf=\'!(section=="two")\'  style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/usadosGris.png"> \n\n	      \n\n	      Usado\n	       </span>\n	    </ion-segment-button>\n\n\n	        <ion-segment-button   style=\'font-size: 15px;text-transform: none !important;\' value="tres" >\n	       <span> \n	       <img  *ngIf=\'section=="tres"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/expireBlanco.png">\n	       <img  *ngIf=\'!(section=="tres")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/expireGris.png">\n	        Expirado</span>\n	    </ion-segment-button>\n\n\n\n</ion-segment>\n\n\n\n\n<div [ngSwitch]="section">\n    <ion-list mode="md" *ngSwitchCase="\'one\'">\n\n		<ion-card>\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				\n				<span style="    display: block;\n    font-size: 16px;\n\n    font-weight: 800;\n    color: #EC527E;">20% de descuento</span>\n\n    <span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;display:block">Center Name Here</span>\n\n				<span class="itemComercio" style="    margin-top: 13px;\n    display: block;\n}">\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n   color:#2FD99B;\n    font-size: 21px;\n    vertical-align: middle;\' name="md-calendar"></ion-icon>Expira 20/02/05</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:rgb(249,199,0);\n    font-weight: 800;\' name="ios-add-circle-outline"></ion-icon>Usar</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n		\n		<ion-card >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				\n				<span style="    display: block;\n    font-size: 16px;\n\n    font-weight: 800;\n    color: #EC527E;">20% de descuento</span>\n\n    <span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;display:block">Center Name Here</span>\n\n				<span class="itemComercio" style="    margin-top: 13px;\n    display: block;\n}">\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n   color:#2FD99B;\n    font-size: 21px;\n    vertical-align: middle;\' name="md-calendar"></ion-icon>Expira 20/02/05</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:rgb(249,199,0);\n    font-weight: 800;\' name="ios-add-circle-outline"></ion-icon>Usar</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n		<ion-card >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				\n				<span style="    display: block;\n    font-size: 16px;\n\n    font-weight: 800;\n    color: #EC527E;">20% de descuento</span>\n\n    <span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;display:block">Center Name Here</span>\n\n				<span class="itemComercio" style="    margin-top: 13px;\n    display: block;\n}">\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n   color:#2FD99B;\n    font-size: 21px;\n    vertical-align: middle;\' name="md-calendar"></ion-icon>Expira 20/02/05</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:rgb(249,199,0);\n    font-weight: 800;\' name="ios-add-circle-outline"></ion-icon>Usar</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n\n\n\n    </ion-list>\n  \n\n    <ion-list mode="md" *ngSwitchCase="\'two\'">\n\n\n		<ion-card >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				\n				<span style="    display: block;\n    font-size: 16px;\n\n    font-weight: 800;\n    color: #EC527E;">20% de descuento</span>\n\n    <span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;display:block">Center Name Here</span>\n\n				<span class="itemComercio" style="    margin-top: 13px;\n    display: block;\n}">\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n   color:#2FD99B;\n    font-size: 21px;\n    vertical-align: middle;\' name="md-calendar"></ion-icon>20/02/05</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\n    font-weight: 800;\' name="md-checkbox"></ion-icon>Usado</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n		<ion-card >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				\n				<span style="    display: block;\n    font-size: 16px;\n\n    font-weight: 800;\n    color: #EC527E;">20% de descuento</span>\n\n    <span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;display:block">Center Name Here</span>\n\n				<span class="itemComercio" style="    margin-top: 13px;\n    display: block;\n}">\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n   color:#2FD99B;\n    font-size: 21px;\n    vertical-align: middle;\' name="md-calendar"></ion-icon>20/02/05</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\n    font-weight: 800;\' name="md-checkbox"></ion-icon>Usado</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n    </ion-list>\n\n\n    <ion-list mode="md" *ngSwitchCase="\'tres\'">\n\n\n\n\n		<ion-card >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				\n				<span style=" text-decoration: line-through;   display: block;\n    font-size: 16px;\n\n    font-weight: 800;\n    color: #EC527E;">20% de descuento</span>\n\n    <span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;display:block">Center Name Here</span>\n\n				<span class="itemComercio" style="    margin-top: 13px;\n    display: block;\n}">\n\n					<span style="  text-decoration: line-through; margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon style=\'    margin-right: 8px;\n   color:#EC527E;\n    font-size: 21px;\n    vertical-align: middle;\' name="md-calendar"></ion-icon>20/02/05</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#EC527E;\n    font-weight: 800;\' name="md-close-circle"></ion-icon>Expirado</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n    </ion-list>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/cupones/cupones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], CuponesPage);
    return CuponesPage;
}());

//# sourceMappingURL=cupones.js.map

/***/ })

});
//# sourceMappingURL=13.js.map