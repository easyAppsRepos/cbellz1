webpackJsonp([6],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionesPageModule", function() { return OpinionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opiniones__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //<--- here
var OpinionesPageModule = (function () {
    function OpinionesPageModule() {
    }
    OpinionesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__opiniones__["a" /* OpinionesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__opiniones__["a" /* OpinionesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], OpinionesPageModule);
    return OpinionesPageModule;
}());

//# sourceMappingURL=opiniones.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filtrofav_filtrofav__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__filtrofav_filtrofav__["a" /* FiltrofavPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__filtrofav_filtrofav__["a" /* FiltrofavPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltrofavPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FiltrofavPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FiltrofavPipe = (function () {
    function FiltrofavPipe() {
    }
    FiltrofavPipe.prototype.transform = function (items, callback) {
        if (!items || !callback) {
            return items;
        }
        return items.filter(function (item) { return callback(item); });
    };
    FiltrofavPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filtrofav',
        })
    ], FiltrofavPipe);
    return FiltrofavPipe;
}());

//# sourceMappingURL=filtrofav.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionesPage; });
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
 * Generated class for the OpinionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpinionesPage = (function () {
    function OpinionesPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, apiProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
    }
    OpinionesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.section = "one";
        console.log('ionViewDidLoad OpinionesPage');
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.dataUser = data;
                //this.menuActivo = true;
            }
            else {
                console.log('error');
                // this.menuActivo = false;
            }
            _this.getOpiniones(_this.dataUser.idCliente);
        });
    };
    OpinionesPage.prototype.filterFav = function (user) {
        console.log(user);
        return user.estado == 1;
    };
    OpinionesPage.prototype.filterFav2 = function (user) {
        console.log(user);
        return user.estado == 2;
    };
    OpinionesPage.prototype.getOpiniones = function (idCliente) {
        var _this = this;
        var dataE = { idCliente: idCliente };
        console.log(dataE);
        this.apiProvider.getOpiniones(dataE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.opiniones = data || [];
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
    };
    OpinionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-opiniones',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/opiniones/opiniones.html"*/'<!--\n  Generated template for the OpinionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n\n      <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n\n\n    <ion-title>Opiniones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n\n\n<ion-segment mode="md" [(ngModel)]="section">\n    <ion-segment-button   style=\'font-size: 15px;text-transform: none !important;\' value="one" >\n	       <span> \n	       <img  *ngIf=\'section=="one"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/estrellaBlanca.png">\n	       <img  *ngIf=\'!(section=="one")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/estrellaGris.png">\n	        Pendientes</span>\n	    </ion-segment-button>\n\n\n\n	    <ion-segment-button  value="two" style=\'\n    	font-size: 15px;text-transform: none !important;\' >\n    	<span>\n	      <img  *ngIf=\'section=="two"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/checkBlanco.png"> \n	      <img  *ngIf=\'!(section=="two")\'  style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/agregadosGris.png"> \n\n	      \n\n	      Agregadas\n	       </span>\n	    </ion-segment-button>\n</ion-segment>\n\n\n\n\n<div [ngSwitch]="section">\n    <ion-list mode="md" *ngSwitchCase="\'one\'">\n\n		<ion-card *ngFor="let n of opiniones | filtrofav: filterFav" >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">{{n.nombre}}</span>\n\n\n				<span style=\'    margin-top: 27px;\' class="itemComercio" >\n\n					<span style="margin-right: 20px"><ion-icon style=\'margin-right: 5px; \' name="md-calendar"></ion-icon>{{n.horaFinalEsperado?.split(\'T\')[0]}}</span>\n\n					<span style="     color: #EC527E;   ">${{n.total}}</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n\n\n\n\n    </ion-list>\n\n    <ion-list  mode="md" *ngSwitchCase="\'two\'">\n\n\n<div *ngFor="let n of opiniones | filtrofav: filterFav2"> \n\n\n<div style="\nmargin-top:30px;\n    width: 100%;\n    display: inline-block;    padding-left: 15px;\n    padding-right: 15px;\n">\n  \n  <img src="assets/imgs/servicio1.png" style="\n    display: inline-block;\n    vertical-align: top;\n    height: 54px;\n    width: 54px;\n">\n  <div style="\n    display: inline-block;\n    width: calc(100% - 83px);\n    margin-left: 22px;\n">\n<span style="\n    color: #888;\n    font-size: 13px;\n    float: right;\n    margin-right: 47px;\n    margin-top: 6px;\n    ">hace 2 dias</span>\n\n    <span style="\n    font-size: 19px;\n    color:  #333;\n">{{n.nombre}}\n\n\n\n    </span>\n    <div style="    margin-top: 7px;">\n      \n          <span style="\n    display: block;\n    font-size: 17px;\n    margin-top: 4px;\n    color: #999;\n    ">{{n.puntuacion}} <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  </span>  \n\n\n    </div>\n\n    <p style="\n    margin-right: 35px;\n    line-height: 19px;\n    color: #999;\n">{{n.comentario}}</p>\n  </div>\n</div>\n\n\n\n\n<div class="separator"></div>\n</div>\n\n\n\n\n    </ion-list>\n\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/opiniones/opiniones.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _g || Object])
    ], OpinionesPage);
    return OpinionesPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=opiniones.js.map

/***/ })

});
//# sourceMappingURL=6.js.map