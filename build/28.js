webpackJsonp([28],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalificarPageModule", function() { return CalificarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calificar__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CalificarPageModule = (function () {
    function CalificarPageModule() {
    }
    CalificarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calificar__["a" /* CalificarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__calificar__["a" /* CalificarPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
        })
    ], CalificarPageModule);
    return CalificarPageModule;
}());

//# sourceMappingURL=calificar.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
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
 * Generated class for the CalificarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalificarPage = (function () {
    function CalificarPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, apiProvider, alertCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
        this.dataCentro = {};
        this.rate = {};
        this.comentario = '';
        this.botonActivo = false;
    }
    CalificarPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams.data);
        this.dataCentro = this.navParams.data;
        console.log('ionViewDidLoad CalificarPage');
    };
    CalificarPage.prototype.agregadoOk = function () {
        var alert = this.alertCtrl.create({
            title: 'Evaluacion agregada',
            subTitle: 'La evaluacion ha sido agregada',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    CalificarPage.prototype.agregar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando ..." });
        loading.present();
        var cantidad = 0;
        var acumulado = 0;
        Object.keys(this.rate).forEach(function (key) {
            acumulado += parseInt(_this.rate[key]);
            cantidad += 1;
        });
        var dataE = { idEvaluacionCentro: this.dataCentro.idEvaluacionCentro,
            comentario: this.comentario,
            evaluacion: parseInt(acumulado / cantidad) };
        console.log(dataE);
        this.apiProvider.agregarOpinion(dataE)
            .then(function (data) {
            loading.dismissAll();
            console.log(data);
            if (data.affectedRows > 0) {
                _this.agregadoOk();
                //console.log('borrada');
                _this.navCtrl.pop();
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
    };
    CalificarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calificar',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/calificar/calificar.html"*/'<!--\n  Generated template for the CalificarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Evaluando</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style=\'background-color: #f7f8f9;\'>\n\n\n\n		<ion-card >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="http://50.116.17.150:3000/{{dataCentro.idFoto}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="display:block;margin: 2px 0px 0px 0px;\n				font-size: 16px;\n				color: #333;">{{dataCentro?.nombre}}</span>\n\n\n				<span style=\'       margin-top: 15px;\n    display: block;\' class="itemComercio" >\n\n					<span style="margin-right: 15px"><ion-icon style=\'margin-right: 5px; \' name="md-calendar"></ion-icon>{{dataCentro.horaFinalEsperado?.split(\'T\')[0]}}</span>\n\n					<span style="     color: #EC527E;   ">${{dataCentro.precioEsperado?.toFixed(2)}}</span>\n\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n\n\n<div class="rat">\n	Servicio\n<rating (ngModelChange)="botonActivo=true"  [(ngModel)]="rate.servicio"    readOnly="false"  max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"  default value nullable="false" ></rating>\n</div>\n\n<div class="rat">\n	Staff\n<rating (ngModelChange)="botonActivo=true"  [(ngModel)]="rate.staff"   readOnly="false"  max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"  default value nullable="false" ></rating>\n</div>\n\n<div class="rat">\n	Precio\n<rating  (ngModelChange)="botonActivo=true"  [(ngModel)]="rate.precio" readOnly="false"  max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"  default value nullable="false" ></rating>\n</div>\n\n\n<div class="rat">\n	Limpieza\n<rating  (ngModelChange)="botonActivo=true" [(ngModel)]="rate.limpieza"  readOnly="false"  max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"  default value nullable="false" ></rating>\n</div>\n\n\n<div class="rat">\n	Ambiente\n<rating  (ngModelChange)="botonActivo=true"  [(ngModel)]="rate.ambiente"   readOnly="false"  max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"  default value nullable="false" ></rating>\n</div>\n\n  <ion-item style=\'0px\' >\n\n\n    <ion-textarea [(ngModel)]="comentario" style=\'    border: 1px solid lightgray;\n    width: 100%;\n    height: 100px;\n    padding: 10px;\n    margin-top: 30px;\'  placeholder="Ingresa un comentario"></ion-textarea>\n  </ion-item>\n\n <div style="    width: 100%;\n    text-align: center;\n margin-top: 20px;">\n\n\n    <button  [disabled]=\'!botonActivo\'  (click)=\'agregar()\' style=" border-radius: 70px;  "  color=\'verdeApp\' ion-button> Agregar Evaluacion</button>\n\n\n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/calificar/calificar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CalificarPage);
    return CalificarPage;
}());

//# sourceMappingURL=calificar.js.map

/***/ })

});
//# sourceMappingURL=28.js.map