webpackJsonp([17],{

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPageModule", function() { return DemoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DemoPageModule = (function () {
    function DemoPageModule() {
    }
    DemoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__demo__["a" /* DemoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__demo__["a" /* DemoPage */]),
            ],
        })
    ], DemoPageModule);
    return DemoPageModule;
}());

//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DemoPage = (function () {
    function DemoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DemoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DemoPage');
    };
    DemoPage.prototype.siguienteSlide = function () {
        console.log('dasd');
        this.slider.slideNext();
    };
    DemoPage.prototype.iniciarApp = function () {
        this.navCtrl.setRoot('InicioPage');
    };
    DemoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-demo',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/demo/demo.html"*/'<ion-content>\n\n<ion-slides   pager="true" style=\'background-image: url(assets/imgs/fondoDemo.png);\' >\n\n\n  <ion-slide>\n  <h1 class="tituloDemo">EL SERVICIO <br> QUE NECESITAS</h1>\n    <img class="imgDemo"  src="assets/imgs/demo1.png" />\n\n    <p class="textoDemo">Busca, Filtra y Reserva en <br>\n    					los mejores centros de belleza</p>\n  </ion-slide>\n \n\n  <ion-slide>\n    <h1  class="tituloDemo">RESERVAS 24/7</h1>\n    <img class="imgDemo" \n   style="    padding-left: 68px;" src="assets/imgs/demo2.png"  />\n    <p class="textoDemo">Programa tus citas en cualquier <br>\n    					momento indicando el dia, hora y el <br>\n    					staff que deseas</p>\n  </ion-slide>\n \n  <ion-slide>\n    <h1  class="tituloDemo">VIVA LA EXPERIENCIA	</h1>\n     <img sclass="imgDemo"  style="    padding-right: 35px;"  src="assets/imgs/demo3.png"  />\n      <p class="textoDemo">Acumula puntos agregando <br>\n    					comentarios, reservando y <br>\n    					compartiendo experiencias BeYou</p>\n   \n     <!--    <button ion-button color="light" (click)="goToHome()">Start Using My App</button>\n      -->\n  </ion-slide>\n \n</ion-slides>\n\n\n <button style="    position: fixed;\n    right: 0;\n    margin: 10px;\n    color: white;\n    font-size: 19px;\n    bottom: 0;\n    background: transparent; z-index:20"  (click)=\'iniciarApp()\'>Iniciar</button>\n\n<!-- \n     <button style="    position: absolute;\n    left: 0;\n    margin: 10px;\n    color: white;\n    font-size: 19px;\n    bottom: 0;\n    background: transparent; z-index:20"  (click)=\'siguienteSlide()\' >Siguiente</button>\n\n -->\n\n</ion-content>'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/demo/demo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DemoPage);
    return DemoPage;
}());

//# sourceMappingURL=demo.js.map

/***/ })

});
//# sourceMappingURL=17.js.map