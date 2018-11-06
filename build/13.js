webpackJsonp([13],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosPageModule", function() { return ResultadosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultados__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultadosPageModule = (function () {
    function ResultadosPageModule() {
    }
    ResultadosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resultados__["a" /* ResultadosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__resultados__["a" /* ResultadosPage */]),
            ],
        })
    ], ResultadosPageModule);
    return ResultadosPageModule;
}());

//# sourceMappingURL=resultados.module.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosPage; });
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
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadosPage = (function () {
    function ResultadosPage(navCtrl, navParams, modalCtrl, apiProvider, loadingController, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.events = events;
        this.filtro = {};
        this.resultados = [];
        this.categorias = ['Peluqueria', 'Rostro y Cuerpo', 'Uñas', 'Masaje', 'Depilacion', 'Bienestar', 'Paquetes', 'Ofertas'];
        this.categoriaSeleccionada = 0;
        this.cargaData = false;
    }
    ResultadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadosPage');
        this.resultados = this.navParams.get('resultados');
        this.filtro = this.navParams.get('filtro');
        console.log(this.navParams.get('filtro'));
        this.cargaData = true;
    };
    ResultadosPage.prototype.goCentro = function (idCentro) {
        // this.navCtrl.push('PerfilCentroPage');  
        this.navCtrl.push('PerfilCentroPage', { 'idCentro': idCentro, 'idServicioSeleccionado': this.categoriaSeleccionada });
    };
    ResultadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resultados',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/resultados/resultados.html"*/'<!--\n  Generated template for the ListaServiciosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n<ion-item style=\'background-color: transparent !important;\'>\n  <ion-label style=\'    text-align: center;\n    color: white;\n    font-weight: bold;\' >Resultados</ion-label>\n</ion-item>\n  </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content >\n\n\n\n\n\n<div [ngSwitch]="section" *ngIf=\'cargaData\'>\n\n	<div style="margin: 15px">\n\n		<div *ngIf=\'filtro.palabra\' class="tagResultado">{{filtro.palabra}}</div>\n		<div  *ngIf=\'filtro.stringPlace\' class="tagResultado">{{filtro.stringPlace}}</div>\n		<div  *ngIf=\'filtro.abierto\' class="tagResultado">Abierto Ahora</div>\n		<div  *ngIf=\'filtro.filtroHora\' class="tagResultado">Abierto en horario {{filtro.filtroHora}}</div>\n<div  *ngIf=\'filtro.fecha\' class="tagResultado">Abierto dia {{filtro.filtroFecha}}</div>\n		\n\n		<div  *ngIf=\'filtro.orden && filtro.orden=="ASC"\' class="tagResultado">Precio: De Menor a Mayor</div>\n		<div  *ngIf=\'filtro.orden && filtro.orden=="DESC"\' class="tagResultado">Precio: De Mayor a Menor</div>\n\n		<div  *ngIf=\'filtro.ordenOpiniones\' class="tagResultado">Opiniones altas</div>\n\n\n		<div  *ngIf=\'filtro.disponible\' class="tagResultado">Disponible Hoy</div>\n\n\n\n<!-- \n		<div *ngFor="let s of filtro.servicios; let i = index"  class="tagResultado">\n		{{categorias[s-1]}}</div> -->\n\n\n<div style="text-align: center;\n    color: #444;\n    font-size: 16px;\n    margin: 15px;">Resultados de la Busqueda</div>\n\n	</div>\n\n    <ion-list mode="md" >\n    	<div *ngIf="!(resultados?.length > 0)" style="    text-align: center;">\n    		\n    		<img  style=\'    margin: 30px;\' src="assets/imgs/busquedaNula.png">\n    		<p style="    text-align: center;\n    font-size: 16px;\n    margin: 34px;\n    line-height: 23px;"> <span style="    font-size: 22px !important;\n    color: #333 !important;\n    line-height: 2;">Lo sentimos </span><br>  <b style="color:#666"> No se han encontrado centros cerca. Intenta nuevamente con filtros de busqueda diferentes o explora en otras categorias</b></p>\n    	</div>\n		<ion-card *ngFor="let n of resultados" (click)=\'goCentro(n.idCentro)\' >\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="http://50.116.17.150:3000/{{n.idFoto}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">{{n.nombre}}</span>\n				<span style="    display: block;\n    font-size: 16px;\n    margin: 10px 0px;\n    font-weight: 800;\n    color: #EC527E;">${{n.pMin}} <span [hidden]=\'n.pMin == n.pMax\'>- ${{n.pMax}}</span></span>\n\n				<span class="itemComercio" >\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon [ngClass]="{\'colorGris\': n.cantRate==0}"  style=\'    margin-right: 8px;\n    color: rgb(249,199,53);\n    font-size: 21px;\n    vertical-align: middle;\' name="md-star"></ion-icon>{{n.rate  | number:\'1.1-2\'}} ({{n.cantRate\n}})</span>\n\n				 	<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\' name="ios-pin"></ion-icon>{{n.distance | number:\'1.1-2\'}} Km</span> \n\n				</span>\n\n				</div>\n				</div>\n		</ion-card-content>\n		</ion-card>\n    </ion-list>\n</div>\n\n\n\n\n\n\n    	<div *ngIf=\'!cargaData\' style="text-align: center;padding-top: 25%;">\n    		<ion-spinner name="bubbles"></ion-spinner>\n    	</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/resultados/resultados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], ResultadosPage);
    return ResultadosPage;
}());

//# sourceMappingURL=resultados.js.map

/***/ })

});
//# sourceMappingURL=13.js.map