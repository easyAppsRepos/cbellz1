webpackJsonp([3],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaServiciosPageModule", function() { return ListaServiciosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_servicios__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //<--- here
var ListaServiciosPageModule = (function () {
    function ListaServiciosPageModule() {
    }
    ListaServiciosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_servicios__["a" /* ListaServiciosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_servicios__["a" /* ListaServiciosPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ListaServiciosPageModule);
    return ListaServiciosPageModule;
}());

//# sourceMappingURL=lista-servicios.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filtrofav_filtrofav__ = __webpack_require__(451);
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

/***/ 451:
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
            pure: false
        })
    ], FiltrofavPipe);
    return FiltrofavPipe;
}());

//# sourceMappingURL=filtrofav.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaServiciosPage; });
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
 * Generated class for the ListaServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaServiciosPage = (function () {
    function ListaServiciosPage(storage, alertCtrl, navCtrl, navParams, modalCtrl, apiProvider, loadingController, events) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.events = events;
        this.categorias = [];
        this.latitudePerson = 0;
        this.longitudePerson = 0;
        this.categoriaSeleccionada = 0;
        this.subcategoriaSeleccionada = [];
        this.cargaData = false;
    }
    ListaServiciosPage.prototype.presentProfileModal = function () {
        var profileModal = this.modalCtrl.create('BuscarModalPage');
        profileModal.present();
    };
    ListaServiciosPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad ListaServiciosPage');
        console.log(this.categoriaSeleccionada);
    };
    ListaServiciosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.section = "one";
        this.categoriaSeleccionada = this.navParams.get('nombre');
        this.apiProvider.getSubcategorias({ idCategoria: this.categoriaSeleccionada })
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.categorias = data || [];
                var ddata = data.map(function (item) {
                    return item.idSubcategoria;
                });
                _this.buscarServicios(ddata, true);
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
    };
    ListaServiciosPage.prototype.cambiarSeleccion = function (id) {
        console.log(id);
        //this.categoriaSeleccionada = id.idCategoria;
    };
    ListaServiciosPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'GPS desactivado',
            subTitle: 'Activa el GPS para filtrar por distancia',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    ListaServiciosPage.prototype.filterFav = function (user) {
        console.log(user);
        return user.idCentro == 1;
    };
    ListaServiciosPage.prototype.buscarServicios = function (id, continuar) {
        var _this = this;
        this.storage.get('coorLBY').then(function (value) {
            if (value) {
                console.log(new Date(value.expirationDate) > Date.now());
                if (new Date(value.expirationDate) > Date.now()) {
                    _this.latitudePerson = value.lat;
                    _this.longitudePerson = value.lng;
                }
            }
            _this.cargaData = false;
            console.log(_this.latitudePerson);
            console.log(_this.longitudePerson);
            if (_this.latitudePerson == 0 && continuar) {
                // this.presentAlert();
                _this.getServiciosGPS(id);
            }
            else {
                //this.categoriaSeleccionada = id;
                //this.subcategoriaSeleccionada=id;
                /*
                let filtro = {
                lat:this.latitudePerson,
                lon:this.longitudePerson,
                idCategoria:id
                }
                */
                var filtro = {
                    lat: _this.latitudePerson,
                    lon: _this.longitudePerson,
                    idSubcategoria: id.length > 0 ? id.toString() : null
                };
                _this.apiProvider.buscarServicios2(filtro)
                    .then(function (data) {
                    console.log(data);
                    _this.cargaData = true;
                    if (data) {
                        _this.resultados = data || [];
                    }
                    else {
                        console.log('Ha ocurrido un error');
                    }
                });
            }
        });
    };
    ListaServiciosPage.prototype.doRefresh = function (refresher) {
        /*
           this.latitudePerson = 9.9931605;
           this.longitudePerson = -84.2307427;
  */
        var _this = this;
        var loading = this.loadingController.create({ content: "Obteniendo ubicacion" });
        loading.present();
        console.log('gps');
        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log(pos.coords.latitude + ' Long: ' + pos.coords.longitude);
            _this.latitudePerson = pos.coords.latitude;
            _this.longitudePerson = pos.coords.longitude;
            var fechaExpiracion = new Date();
            fechaExpiracion.setHours(fechaExpiracion.getHours() + 1);
            console.log(fechaExpiracion);
            _this.storage.set('coorLBY', { 'lat': pos.coords.latitude,
                'lng': pos.coords.longitude,
                'expirationDate': fechaExpiracion });
            loading.dismissAll();
            refresher.complete();
        }, function (error) {
            console.log('some err');
            console.log(error);
            loading.dismissAll();
            this.presentAlert();
            refresher.complete();
        }, { enableHighAccuracy: true, timeout: 30000 });
    };
    ListaServiciosPage.prototype.goCentro = function (idCentro) {
        // this.navCtrl.push('PerfilCentroPage');  
        this.navCtrl.push('PerfilCentroPage', { 'idCentro': idCentro, 'idServicioSeleccionado': this.categoriaSeleccionada });
    };
    ListaServiciosPage.prototype.getServiciosGPS = function (id) {
        /*
           this.latitudePerson = 9.9931605;
           this.longitudePerson = -84.2307427;
  */
        var _this = this;
        var loading = this.loadingController.create({ content: "Obteniendo ubicacion" });
        loading.present();
        console.log('gps');
        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log(pos.coords.latitude + ' Long: ' + pos.coords.longitude);
            _this.latitudePerson = pos.coords.latitude;
            _this.longitudePerson = pos.coords.longitude;
            var fechaExpiracion = new Date();
            fechaExpiracion.setHours(fechaExpiracion.getHours() + 1);
            console.log(fechaExpiracion);
            _this.storage.set('coorLBY', { 'lat': pos.coords.latitude,
                'lng': pos.coords.longitude,
                'expirationDate': fechaExpiracion });
            loading.dismissAll();
            _this.buscarServicios(id, true);
        }, function (error) {
            console.log('some err');
            console.log(error);
            loading.dismissAll();
            this.presentAlert();
            this.buscarServicios(id, false);
        }, { enableHighAccuracy: true, timeout: 30000 });
    };
    ListaServiciosPage.prototype.openBusqueda = function () {
        this.navCtrl.push('BuscarModalPage');
        //this.presentProfileModal();
        //
    };
    ListaServiciosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-servicios',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/lista-servicios/lista-servicios.html"*/'<!--\n  Generated template for the ListaServiciosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n  \n    <ion-title>\n<ion-item style=\'background-color: transparent !important;\'>\n  <ion-label style=\'display:none\'>Sub Categorias</ion-label>\n      <ion-select style=\'\n    width: 100%;\n    text-align: center;\n    color: white !important;\' [(ngModel)]="subcategoriaSeleccionada" (ionChange)="buscarServicios($event,true)" multiple="true" okText="Buscar"  cancelText="Cerrar">\n\n\n\n <ion-option  *ngFor="let n of categorias; let idx = index" [selected]=\'true\'  [value]="n.idSubcategoria" \n      >{{n.nombre}}</ion-option>\n\n     \n<!-- \n    <ion-option  *ngFor="let n of categorias" [value]="n.idCategoria" \n    (ionSelect)="cambiarSeleccion($event, n)">{{n.nombre}}</ion-option>\n    <ion-option   value=\'Peluqueria\'>Peluqueria</ion-option>\n    <ion-option value=\'Rostro y Cuerpo\' >Rostro y Cuerpo</ion-option>\n\n    <ion-option value=\'Uñas\'>Uñas</ion-option>\n    <ion-option value=\'Masaje\' >Masaje</ion-option>\n\n    <ion-option value=\'Depilacion\'>Depilacion</ion-option>\n    <ion-option value=\'Bienestar\' >Bienestar</ion-option>\n    <ion-option value=\'Paquetes\'>Paquetes</ion-option>\n    <ion-option value=\'Ofertas\' >Ofertas</ion-option> -->\n\n  </ion-select>\n</ion-item>\n  </ion-title>\n\n\n\n          <ion-buttons end>\n      <button (click)=\'openBusqueda()\' ion-button icon-only>\n        <ion-icon name="ios-options"></ion-icon>\n      </button>\n\n\n       \n\n      </ion-buttons>\n\n\n\n\n  </ion-navbar>\n\n\n  <ion-segment mode="md" [(ngModel)]="section">\n    <ion-segment-button   style=\'font-size: 15px;text-transform: none !important;\' value="one" >\n         <span> \n         <img  *ngIf=\'section=="one"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/nearBlanco.png">\n         <img  *ngIf=\'!(section=="one")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/nearGris.png">\n          Cerca de ti</span>\n      </ion-segment-button>\n\n\n\n      <ion-segment-button  value="two" style=\'\n      font-size: 15px;text-transform: none !important;\' >\n      <span>\n        <img  *ngIf=\'section=="two"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/corazonBlanco.png"> \n        <img  *ngIf=\'!(section=="two")\'  style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/corazonGris.png"> \n\n        \n\n        Favoritos\n         </span>\n      </ion-segment-button>\n</ion-segment>\n\n\n\n\n</ion-header>\n\n\n<ion-content >\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Actualizar ubicacion"\n      refreshingSpinner="circles"\n      refreshingText="Actualizando ubicacion...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n\n\n\n\n\n\n\n\n<div [ngSwitch]="section" *ngIf=\'cargaData\'>\n\n    <ion-list mode="md" *ngSwitchCase="\'one\'">\n\n\n\n\n\n    	<div *ngIf="!(resultados?.length > 0)" style="    text-align: center;">\n    		\n    		<img  style=\'    margin: 0px;\' src="assets/imgs/busquedaNula.png">\n    		<p style="    text-align: center;\n    font-size: 16px;\n    margin: 34px;\n    line-height: 23px;"> <span style="    font-size: 22px !important;\n    color: #333 !important;\n    line-height: 2;">Lo sentimos </span><br>  <b style="color:#666"> Tu busqueda no trae ningun resultado. Prueba otra vez con filtros de busqueda diferentes o explora en las diferentes categorias</b></p>\n    	</div>\n		<ion-card *ngFor="let n of resultados" (click)=\'goCentro(n.idCentro)\' >\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n<!-- 				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				"> -->\n\n                <img src="http://50.116.17.150:3000/{{n.idFoto}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';"\n        style="\n        display: inline-block;\n        height: 90px;\n        width: 90px !important;\n        vertical-align: top;\n        ">\n\n        \n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">{{n.nombre}}</span>\n				<span style="    display: block;\n    font-size: 16px;\n    margin: 10px 0px;\n    font-weight: 800;\n    color: #EC527E;">${{n.pMin}} <span [hidden]=\'n.pMin == n.pMax\'>- ${{n.pMax}}</span></span>\n\n				<span class="itemComercio" >\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon [ngClass]="{\'colorGris\': n.cantRate==0}"  style=\'    margin-right: 8px;\n    color: rgb(249,199,53);\n    font-size: 21px;\n    vertical-align: middle;\' name="md-star"></ion-icon>{{n.rate  | number:\'1.1-2\'}} ({{n.cantRate\n}})</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\' name="ios-pin"></ion-icon>{{n.distance | number:\'1.1-2\'}} Km</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n    </ion-list>\n\n    <ion-list  mode="md" *ngSwitchCase="\'two\'">\n<!-- \n<div *ngIf="(list | search: searchTerm).length === 0">\n  "No matches"\n</div>\n<div *ngFor="#item in list | search: searchTerm">{{ item }}</div> \n\n<div *ngIf="(resultados | filtrofav:  {favorito: 1}).length === 0">\n  No matches\n</div>-->\n\n<div style=\'margin: 30px;\n    text-align: center;\n    color: #9998;\n    font-size: 17px;\'  *ngIf="(resultados | filtrofav: filterFav).length === 0">\n  No has agregado ningun favorito en esta categoria\n</div>\n\n\n		<ion-card *ngFor="let n of resultados | filtrofav: filterFav" (click)=\'goCentro(n.idCentro)\' >\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="http://50.116.17.150:3000/{{n.idFoto}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">{{n.nombre}}</span>\n				<span style="    display: block;\n    font-size: 16px;\n    margin: 10px 0px;\n    font-weight: 800;\n    color: #EC527E;">${{n.pMin}} <span [hidden]=\'n.pMin == n.pMax\'>- ${{n.pMax}}</span></span>\n\n				<span class="itemComercio" >\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon [ngClass]="{\'colorGris\': n.cantRate==0}"  style=\'    margin-right: 8px;\n    color: rgb(249,199,53);\n    font-size: 21px;\n    vertical-align: middle;\' name="md-star"></ion-icon>{{n.rate  | number:\'1.1-2\'}} ({{n.cantRate\n}})</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\' name="ios-pin"></ion-icon>{{n.distance | number:\'1.1-2\'}} Km</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n\n\n\n\n\n\n\n\n    </ion-list>\n\n</div>\n\n\n\n\n\n\n    	<div *ngIf=\'!cargaData\' style="text-align: center;padding-top: 25%;">\n    		<ion-spinner name="bubbles"></ion-spinner>\n    	</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/lista-servicios/lista-servicios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], ListaServiciosPage);
    return ListaServiciosPage;
}());

//# sourceMappingURL=lista-servicios.js.map

/***/ })

});
//# sourceMappingURL=3.js.map