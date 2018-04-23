webpackJsonp([20],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addservicios/addservicios.module": [
		420,
		19
	],
	"../pages/ajustes/ajustes.module": [
		421,
		18
	],
	"../pages/ayuda/ayuda.module": [
		422,
		17
	],
	"../pages/buscar-modal/buscar-modal.module": [
		423,
		16
	],
	"../pages/confirmar-reserva/confirmar-reserva.module": [
		424,
		15
	],
	"../pages/cuenta/cuenta.module": [
		425,
		14
	],
	"../pages/cupones/cupones.module": [
		426,
		13
	],
	"../pages/demo/demo.module": [
		427,
		12
	],
	"../pages/detalle-reserva/detalle-reserva.module": [
		428,
		11
	],
	"../pages/favoritos/favoritos.module": [
		429,
		10
	],
	"../pages/inicio/inicio.module": [
		430,
		9
	],
	"../pages/lista-servicios/lista-servicios.module": [
		431,
		8
	],
	"../pages/login/login.module": [
		432,
		7
	],
	"../pages/mis-reservas/mis-reservas.module": [
		433,
		6
	],
	"../pages/modal-services/modal-services.module": [
		434,
		1
	],
	"../pages/ofertas/ofertas.module": [
		435,
		5
	],
	"../pages/opiniones/opiniones.module": [
		436,
		4
	],
	"../pages/perfil-centro/perfil-centro.module": [
		437,
		0
	],
	"../pages/reserva-hecha/reserva-hecha.module": [
		438,
		3
	],
	"../pages/reserva/reserva.module": [
		439,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goServicio = function (nombreServicio) {
        this.navCtrl.push('ListaServiciosPage', { nombre: nombreServicio });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar  color="headerColor">\n\n    <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-title>\n<img src="assets/imgs/logoMenu.png">\n\n    </ion-title>\n\n      <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n\n\n            <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n\n\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <div *ngIf=\'true\'>\n\n    <div style="width: 100%;" >\n    <img src="assets/imgs/imagenLogo.png" style="height: 100%; width:100%;margin-top:-75px;">\n    </div>\n\n    <div>\n      <div class="tituloSeccion">\n      Selecciona un Servicio\n      </div>\n\n      <div class="containerServicios">\n\n\n        <div class="servicios" (click)=\'goServicio("Peluqueria")\'> \n          <img src="assets/imgs/Peluqueria.png">\n          <span>Peluqueria</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Rostro y Cuerpo")\'> \n          <img src="assets/imgs/rostro.png">\n          <span>Rostro y Cuerpo</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Uñas")\'> \n          <img src="assets/imgs/unas.png">\n          <span>Uñas</span>\n        </div>\n\n     \n\n                <div class="servicios" (click)=\'goServicio("Masaje")\'> \n          <img src="assets/imgs/masaje.png">\n          <span>Masaje</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Depilacion")\'> \n          <img src="assets/imgs/depilacion.png">\n          <span>Depilacion</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Bienestar")\'> \n          <img src="assets/imgs/bienestar.png" >\n          <span>Bienestar</span>\n        </div>\n\n                <div class="servicios" (click)=\'goServicio("Paquetes")\'> \n          <img src="assets/imgs/paquetes.png">\n          <span>Paquetes</span>\n        </div>\n                <div class="servicios" (click)=\'goServicio("Ofertas")\'> \n          <img src="assets/imgs/ofertasVerde.png">\n          <span>Ofertas</span>\n        </div>\n\n\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(354);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_api__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { mode: 'ios', backButtonText: '' }, {
                    links: [
                        { loadChildren: '../pages/addservicios/addservicios.module#AddserviciosPageModule', name: 'AddserviciosPage', segment: 'addservicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ajustes/ajustes.module#AjustesPageModule', name: 'AjustesPage', segment: 'ajustes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayuda/ayuda.module#AyudaPageModule', name: 'AyudaPage', segment: 'ayuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buscar-modal/buscar-modal.module#BuscarModalPageModule', name: 'BuscarModalPage', segment: 'buscar-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmar-reserva/confirmar-reserva.module#ConfirmarReservaPageModule', name: 'ConfirmarReservaPage', segment: 'confirmar-reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuenta/cuenta.module#CuentaPageModule', name: 'CuentaPage', segment: 'cuenta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cupones/cupones.module#CuponesPageModule', name: 'CuponesPage', segment: 'cupones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/demo/demo.module#DemoPageModule', name: 'DemoPage', segment: 'demo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-reserva/detalle-reserva.module#DetalleReservaPageModule', name: 'DetalleReservaPage', segment: 'detalle-reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favoritos/favoritos.module#FavoritosPageModule', name: 'FavoritosPage', segment: 'favoritos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-servicios/lista-servicios.module#ListaServiciosPageModule', name: 'ListaServiciosPage', segment: 'lista-servicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-reservas/mis-reservas.module#MisReservasPageModule', name: 'MisReservasPage', segment: 'mis-reservas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-services/modal-services.module#ModalServicesPageModule', name: 'ModalServicesPage', segment: 'modal-services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ofertas/ofertas.module#OfertasPageModule', name: 'OfertasPage', segment: 'ofertas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opiniones/opiniones.module#OpinionesPageModule', name: 'OpinionesPage', segment: 'opiniones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-centro/perfil-centro.module#PerfilCentroPageModule', name: 'PerfilCentroPage', segment: 'perfil-centro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva-hecha/reserva-hecha.module#ReservaHechaPageModule', name: 'ReservaHechaPage', segment: 'reserva-hecha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva/reserva.module#ReservaPageModule', name: 'ReservaPage', segment: 'reserva', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_11__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 158,
	"./af.js": 158,
	"./ar": 159,
	"./ar-dz": 160,
	"./ar-dz.js": 160,
	"./ar-kw": 161,
	"./ar-kw.js": 161,
	"./ar-ly": 162,
	"./ar-ly.js": 162,
	"./ar-ma": 163,
	"./ar-ma.js": 163,
	"./ar-sa": 164,
	"./ar-sa.js": 164,
	"./ar-tn": 165,
	"./ar-tn.js": 165,
	"./ar.js": 159,
	"./az": 166,
	"./az.js": 166,
	"./be": 167,
	"./be.js": 167,
	"./bg": 168,
	"./bg.js": 168,
	"./bm": 169,
	"./bm.js": 169,
	"./bn": 170,
	"./bn.js": 170,
	"./bo": 171,
	"./bo.js": 171,
	"./br": 172,
	"./br.js": 172,
	"./bs": 173,
	"./bs.js": 173,
	"./ca": 174,
	"./ca.js": 174,
	"./cs": 175,
	"./cs.js": 175,
	"./cv": 176,
	"./cv.js": 176,
	"./cy": 177,
	"./cy.js": 177,
	"./da": 178,
	"./da.js": 178,
	"./de": 179,
	"./de-at": 180,
	"./de-at.js": 180,
	"./de-ch": 181,
	"./de-ch.js": 181,
	"./de.js": 179,
	"./dv": 182,
	"./dv.js": 182,
	"./el": 183,
	"./el.js": 183,
	"./en-au": 184,
	"./en-au.js": 184,
	"./en-ca": 185,
	"./en-ca.js": 185,
	"./en-gb": 186,
	"./en-gb.js": 186,
	"./en-ie": 187,
	"./en-ie.js": 187,
	"./en-il": 188,
	"./en-il.js": 188,
	"./en-nz": 189,
	"./en-nz.js": 189,
	"./eo": 190,
	"./eo.js": 190,
	"./es": 191,
	"./es-do": 192,
	"./es-do.js": 192,
	"./es-us": 193,
	"./es-us.js": 193,
	"./es.js": 191,
	"./et": 194,
	"./et.js": 194,
	"./eu": 195,
	"./eu.js": 195,
	"./fa": 196,
	"./fa.js": 196,
	"./fi": 197,
	"./fi.js": 197,
	"./fo": 198,
	"./fo.js": 198,
	"./fr": 199,
	"./fr-ca": 200,
	"./fr-ca.js": 200,
	"./fr-ch": 201,
	"./fr-ch.js": 201,
	"./fr.js": 199,
	"./fy": 202,
	"./fy.js": 202,
	"./gd": 203,
	"./gd.js": 203,
	"./gl": 204,
	"./gl.js": 204,
	"./gom-latn": 205,
	"./gom-latn.js": 205,
	"./gu": 206,
	"./gu.js": 206,
	"./he": 207,
	"./he.js": 207,
	"./hi": 208,
	"./hi.js": 208,
	"./hr": 209,
	"./hr.js": 209,
	"./hu": 210,
	"./hu.js": 210,
	"./hy-am": 211,
	"./hy-am.js": 211,
	"./id": 212,
	"./id.js": 212,
	"./is": 213,
	"./is.js": 213,
	"./it": 214,
	"./it.js": 214,
	"./ja": 215,
	"./ja.js": 215,
	"./jv": 216,
	"./jv.js": 216,
	"./ka": 217,
	"./ka.js": 217,
	"./kk": 218,
	"./kk.js": 218,
	"./km": 219,
	"./km.js": 219,
	"./kn": 220,
	"./kn.js": 220,
	"./ko": 221,
	"./ko.js": 221,
	"./ky": 222,
	"./ky.js": 222,
	"./lb": 223,
	"./lb.js": 223,
	"./lo": 224,
	"./lo.js": 224,
	"./lt": 225,
	"./lt.js": 225,
	"./lv": 226,
	"./lv.js": 226,
	"./me": 227,
	"./me.js": 227,
	"./mi": 228,
	"./mi.js": 228,
	"./mk": 229,
	"./mk.js": 229,
	"./ml": 230,
	"./ml.js": 230,
	"./mr": 231,
	"./mr.js": 231,
	"./ms": 232,
	"./ms-my": 233,
	"./ms-my.js": 233,
	"./ms.js": 232,
	"./mt": 234,
	"./mt.js": 234,
	"./my": 235,
	"./my.js": 235,
	"./nb": 236,
	"./nb.js": 236,
	"./ne": 237,
	"./ne.js": 237,
	"./nl": 238,
	"./nl-be": 239,
	"./nl-be.js": 239,
	"./nl.js": 238,
	"./nn": 240,
	"./nn.js": 240,
	"./pa-in": 241,
	"./pa-in.js": 241,
	"./pl": 242,
	"./pl.js": 242,
	"./pt": 243,
	"./pt-br": 244,
	"./pt-br.js": 244,
	"./pt.js": 243,
	"./ro": 245,
	"./ro.js": 245,
	"./ru": 246,
	"./ru.js": 246,
	"./sd": 247,
	"./sd.js": 247,
	"./se": 248,
	"./se.js": 248,
	"./si": 249,
	"./si.js": 249,
	"./sk": 250,
	"./sk.js": 250,
	"./sl": 251,
	"./sl.js": 251,
	"./sq": 252,
	"./sq.js": 252,
	"./sr": 253,
	"./sr-cyrl": 254,
	"./sr-cyrl.js": 254,
	"./sr.js": 253,
	"./ss": 255,
	"./ss.js": 255,
	"./sv": 256,
	"./sv.js": 256,
	"./sw": 257,
	"./sw.js": 257,
	"./ta": 258,
	"./ta.js": 258,
	"./te": 259,
	"./te.js": 259,
	"./tet": 260,
	"./tet.js": 260,
	"./tg": 261,
	"./tg.js": 261,
	"./th": 262,
	"./th.js": 262,
	"./tl-ph": 263,
	"./tl-ph.js": 263,
	"./tlh": 264,
	"./tlh.js": 264,
	"./tr": 265,
	"./tr.js": 265,
	"./tzl": 266,
	"./tzl.js": 266,
	"./tzm": 267,
	"./tzm-latn": 268,
	"./tzm-latn.js": 268,
	"./tzm.js": 267,
	"./ug-cn": 269,
	"./ug-cn.js": 269,
	"./uk": 270,
	"./uk.js": 270,
	"./ur": 271,
	"./ur.js": 271,
	"./uz": 272,
	"./uz-latn": 273,
	"./uz-latn.js": 273,
	"./uz.js": 272,
	"./vi": 274,
	"./vi.js": 274,
	"./x-pseudo": 275,
	"./x-pseudo.js": 275,
	"./yo": 276,
	"./yo.js": 276,
	"./zh-cn": 277,
	"./zh-cn.js": 277,
	"./zh-hk": 278,
	"./zh-hk.js": 278,
	"./zh-tw": 279,
	"./zh-tw.js": 279
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 381;

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, formBuilder, loadingCtrl, storage, modalCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.rootPage = '';
        this.menuActivo = true;
        this.presentLoading();
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */] }
        ];
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8)])]
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.menuActivo = false;
            //  this.storage.set('introShownBY', false);
            // init demo verification
            _this.storage.get('introShownBY').then(function (result) {
                console.log(result);
                if (result) {
                    _this.rootPage = 'InicioPage';
                    console.log('d3');
                }
                else {
                    _this.rootPage = 'DemoPage';
                    _this.storage.set('introShownBY', true);
                    console.log('5efd');
                }
                _this.loader.dismiss();
            });
            //end init demo verification
        });
    };
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Authenticating..."
        });
        this.loader.present();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot('InicioPage');
    };
    MyApp.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create('LoginPage');
        profileModal.present();
    };
    MyApp.prototype.openCentroPage = function () {
        // this.nav.setRoot('PerfilCentroPage');
        this.nav.push('PerfilCentroPage');
    };
    MyApp.prototype.salirApp = function (nombre) {
        nombre == "Salir" ? this.menuActivo = false : this.nav.setRoot('InicioPage');
    };
    MyApp.prototype.loginApp = function () {
        this.menuActivo = true;
    };
    MyApp.prototype.goPagina = function (pagina) {
        console.log(pagina);
        if ('logout' == pagina) {
            console.log('cerrarsesion');
        }
        else {
            this.nav.setRoot(pagina);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "slider", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/app/app.html"*/'<ion-menu [content]="content" type=\'overlay\'>\n<!--   <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content style=\'    background-color: #fafafa;\'>\n\n  <div *ngIf=\'!menuActivo\'>\n  <div>\n    <div style="background-color:#36609F;margin: 20px 17px;border-radius: 30px;color: white;text-align: center;font-size: 15px;">\n    <img src="assets/imgs/Facebook.png" style="\n    vertical-align: middle;\n    margin-right: 10px;\n    ">\n    <img src="assets/imgs/Sep.png" style="\n    vertical-align: middle;\n    padding-top:  10px;\n    padding-bottom: 10px;\n    ">\n    <span (click)=\'loginApp()\' style="\n    ">Continuar con Facebook</span>\n    </div>\n\n<div style="\n    margin: 0px 17px;\n    text-align: center;\n    /* height: 300px; */\n">\n         <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n"><span style="\n    display: inline-block;\n    margin: 0px 10px;\n">OR</span> <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n">\n    </div>\n\n    <div style="\n    margin: 0px 17px;">\n\n    <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.username.valid && authForm.controls.username.touched}">\n            <ion-label floating>Email</ion-label>\n            <ion-input formControlName="username" type="text"></ion-input>\n        </ion-item>\n  \n        <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n            <p>Sorry, field username is required!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n            <p>Sorry, only small and capital letters are allowed!</p>\n        </ion-item>        \n        <ion-item *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n            <p>Sorry, minimum username length is 8!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">\n            <p>Sorry, maximum username length is 30!</p>\n        </ion-item>\n  \n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n            <ion-label floating>Password</ion-label>\n            <ion-input formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n            <p>Sorry, field password is required!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n            <p>Sorry, minimum password length is 8!</p>\n        </ion-item>                \n  \n        <button ion-button full color="verdeApp" [disabled]="!authForm.valid" style="    border-radius: 40px;margin-top: 20px;" type="submit">Login</button>        \n    </form>\n\n\n    </div>\n\n  </div>\n\n    <ion-list style=\'margin-top:30px\'>\n      <button style="background-color: #fafafa;margin-top: 10px; font-size: 15px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item *ngFor="let p of [\'Olvidé mi contraseña\',\n                                                            \n                                                            \'BeYou para negocios\',\n                                                              \'Compartir BeYou\']">\n       {{p}}\n\n      \n\n      </button>\n\n\n      <button (click)=\'presentProfileModal()\' style="background-color: #fafafa;margin-top: 10px; font-size: 15px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item >\n       Registrate en BeYou\n      \n\n      </button>\n\n\n\n\n\n    </ion-list>\n<div style="width:100%; height:40px"></div>\n\n\n    <div style="padding-left: 16px;\n    padding-right: 16px;\n     padding-bottom: 10px;\n    color: darkgray;\n    font-size: 15px;\n    position: fixed;\n    bottom: 0;\n    background: #fafafa;\n    z-index: 10;">Al registrarte e iniciar sesion en BeYou aceptas nuestros <a>terminos y condiciones de servicio</a></div>\n\n    </div>\n\n    <div *ngIf=\'menuActivo\'>\n        <ion-item style=\'margin-top: 0px;\' class=\'fixProfileMargin\'>\n          <ion-avatar item-start>\n          <img style=\'width:75px; height: 75px\' src="assets/imgs/ben.png">\n          </ion-avatar>\n          <h2 style="margin-bottom: 23px;">Marty McFly</h2>\n          <div class="barraContainer">\n            <div class="barraProgress"><span>400/750</span></div>\n          </div>\n        </ion-item>\n\n          <ion-list>\n          <button (click)=\'goPagina(p.pagina)\' style="background-color: #fafafa; font-size: 14px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item *ngFor="let p of [{nombre:\'Servicios\', img:\'listVerde.png\', pagina: \'InicioPage\'},{nombre:\'Reservaciones\', img:\'reservation.png\', pagina: \'MisReservasPage\'},\n          {nombre:\'Favoritos\', img:\'corazonVerde.png\', pagina: \'FavoritosPage\'},\n          {nombre:\'Opiniones\', img:\'opiniones.png\', pagina: \'OpinionesPage\'},\n          {nombre:\'Cupones / Regalos\', img:\'cupones.png\',  pagina: \'CuponesPage\'},\n          {nombre:\'Ofertas\', img:\'ofertas.png\', pagina: \'OfertasPage\' }]" >\n\n          {{p.nombre}}\n\n          <img style=\'float: right;\' src="assets/imgs/{{p.img}}">\n\n          </button>\n\n\n\n          </ion-list>\n\n\n          <ion-list style=\'    margin-top: 0px !important;\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    margin-bottom: 0px !important;\'>\n          <button   (click)=\'goPagina(p.pagina)\' style="background-color: #fafafa; font-size: 14px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item *ngFor="let p of [\n          {nombre:\'Ajustes\', img:\'ajustes.png\', pagina: \'AjustesPage\'},\n          {nombre:\'Ayuda\', img:\'ayuda.png\', pagina: \'AyudaPage\'},\n          {nombre:\'Mi Cuenta\', img:\'perfil.png\', pagina: \'CuentaPage\'},\n          {nombre:\'Salir\', img:\'salir.png\', pagina: \'logout\' }]" >\n\n          {{p.nombre}}\n\n          <img style=\'float: right;\' src="assets/imgs/{{p.img}}">\n\n          </button>\n\n\n\n          </ion-list>\n\n\n\n\n\n    </div>\n\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _h || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = (function () {
    function ApiProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.api2 = 'http://50.116.17.150:3000';
        // console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.verificarLogin = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('usr_tok_by').then(function (value) {
                // console.log(value);
                value ? resolve(value) : resolve(false);
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.categoriasHome = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/categoriasHome').subscribe(function (data) {
                console.log('d');
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.categoriasActivas = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/categoriasActivas').subscribe(function (data) {
                console.log('d');
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.registrarUsuario = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/registrarUsuario', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
    ], ApiProvider);
    return ApiProvider;
    var _a, _b;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[332]);
//# sourceMappingURL=main.js.map