webpackJsonp([4],{

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpinionesPageModule", function() { return OpinionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opiniones__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



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
            ],
        })
    ], OpinionesPageModule);
    return OpinionesPageModule;
}());

//# sourceMappingURL=opiniones.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpinionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
    function OpinionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OpinionesPage.prototype.ionViewDidLoad = function () {
        this.section = "one";
        console.log('ionViewDidLoad OpinionesPage');
    };
    OpinionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-opiniones',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/opiniones/opiniones.html"*/'<!--\n  Generated template for the OpinionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n\n      <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n\n\n    <ion-title>Opiniones</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n\n\n<ion-segment mode="md" [(ngModel)]="section">\n    <ion-segment-button   style=\'font-size: 15px;text-transform: none !important;\' value="one" >\n	       <span> \n	       <img  *ngIf=\'section=="one"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/estrellaBlanca.png">\n	       <img  *ngIf=\'!(section=="one")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/estrellaGris.png">\n	        Pendientes</span>\n	    </ion-segment-button>\n\n\n\n	    <ion-segment-button  value="two" style=\'\n    	font-size: 15px;text-transform: none !important;\' >\n    	<span>\n	      <img  *ngIf=\'section=="two"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/checkBlanco.png"> \n	      <img  *ngIf=\'!(section=="two")\'  style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/agregadosGris.png"> \n\n	      \n\n	      Agregadas\n	       </span>\n	    </ion-segment-button>\n</ion-segment>\n\n\n\n\n<div [ngSwitch]="section">\n    <ion-list mode="md" *ngSwitchCase="\'one\'">\n\n		<ion-card >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">Center Name Here</span>\n\n\n				<span style=\'    margin-top: 27px;\' class="itemComercio" >\n\n					<span style="margin-right: 20px"><ion-icon style=\'margin-right: 5px; \' name="md-calendar"></ion-icon>14/03/2018</span>\n\n					<span style="     color: #EC527E;   ">$40.00</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n		<ion-card >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">Center Name Here</span>\n\n\n				<span style=\'    margin-top: 27px;\' class="itemComercio" >\n\n					<span style="margin-right: 20px"><ion-icon style=\'margin-right: 5px; \' name="md-calendar"></ion-icon>14/03/2018</span>\n\n					<span style="     color: #EC527E;   ">$40.00</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n		\n		<ion-card >\n\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">Center Name Here</span>\n\n\n				<span style=\'    margin-top: 27px;\' class="itemComercio" >\n\n					<span style="margin-right: 20px"><ion-icon style=\'margin-right: 5px; \' name="md-calendar"></ion-icon>14/03/2018</span>\n\n					<span style="     color: #EC527E;   ">$40.00</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n\n\n\n    </ion-list>\n\n    <ion-list  mode="md" *ngSwitchCase="\'two\'">\n\n\n\n\n\n<div style="\nmargin-top:30px;\n    width: 100%;\n    display: inline-block;    padding-left: 15px;\n    padding-right: 15px;\n">\n  \n  <img src="assets/imgs/servicio1.png" style="\n    display: inline-block;\n    vertical-align: top;\n    height: 54px;\n    width: 54px;\n">\n  <div style="\n    display: inline-block;\n    width: calc(100% - 83px);\n    margin-left: 22px;\n">\n<span style="\n    color: #888;\n    font-size: 13px;\n    float: right;\n    margin-right: 47px;\n    margin-top: 6px;\n    ">hace 2 dias</span>\n\n    <span style="\n    font-size: 19px;\n    color:  #333;\n">Centro Nombre\n\n\n\n    </span>\n    <div style="    margin-top: 7px;">\n      \n          <span style="\n    display: block;\n    font-size: 17px;\n    margin-top: 4px;\n    color: #999;\n    ">5.0 <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  </span>  \n\n\n    </div>\n\n    <p style="\n    margin-right: 35px;\n    line-height: 19px;\n    color: #999;\n">Lorem ipsum dolor sit amet, id dui curabitur. Lobortis urna quam urna inceptos nibh felis, aliquam mi fusce</p>\n  </div>\n</div>\n\n\n\n\n<div class="separator"></div>\n\n\n<div style="\n    width: 100%;\n    display: inline-block;    padding-left: 15px;\n    padding-right: 15px;\n">\n  \n  <img src="assets/imgs/servicio1.png" style="\n    display: inline-block;\n    vertical-align: top;\n    height: 54px;\n    width: 54px;\n">\n  <div style="\n    display: inline-block;\n    width: calc(100% - 83px);\n    margin-left: 22px;\n">\n<span style="\n    color: #888;\n    font-size: 13px;\n    float: right;\n    margin-right: 47px;\n    margin-top: 6px;\n    ">hace 3 dias</span>\n\n    <span style="\n    font-size: 19px;\n    color:  #333;\n">Centro Nombre\n\n\n\n    </span>\n    <div style="    margin-top: 7px;">\n      \n          <span style="\n    display: block;\n    font-size: 17px;\n    margin-top: 4px;\n    color: #999;\n    ">5.0 <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  <ion-icon class="ratingStar icon icon-ios ion-ios-star" name="star" role="img" aria-label="star" ng-reflect-name="star"></ion-icon>\n                  </span>  \n\n\n    </div>\n\n    <p style="\n    margin-right: 35px;\n    line-height: 19px;\n    color: #999;\n">Lorem ipsum dolor sit amet, id dui curabitur. Lobortis urna quam urna inceptos nibh felis, aliquam mi fusce</p>\n  </div>\n</div>\n\n\n\n\n\n    </ion-list>\n\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/opiniones/opiniones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], OpinionesPage);
    return OpinionesPage;
}());

//# sourceMappingURL=opiniones.js.map

/***/ })

});
//# sourceMappingURL=4.js.map