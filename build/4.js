webpackJsonp([4],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaServiciosPageModule", function() { return ListaServiciosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_servicios__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(456);
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

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filtrofav_filtrofav__ = __webpack_require__(457);
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

/***/ 457:
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

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaServiciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    function ListaServiciosPage(storage, alertCtrl, navCtrl, navParams, modalCtrl, apiProvider, loadingController, events, cdr) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.loadingController = loadingController;
        this.events = events;
        this.cdr = cdr;
        this.showInfinite = true;
        this.categorias = [];
        this.resultados = [];
        this.contadorPagina = 0;
        this.latitudePerson = 0;
        this.longitudePerson = 0;
        this.categoriaSeleccionada = 0;
        this.subcategoriaSeleccionada = [];
        this.cargaData = false;
        this.favoritosActivo = false;
        this.dataUser = {};
        this.rFavs = [];
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
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.favoritosActivo = true;
                _this.dataUser = data;
                //this.menuActivo = true;
            }
            else {
                console.log('error');
                _this.favoritosActivo = false;
                // this.menuActivo = false;
            }
        });
        this.categoriaSeleccionada = this.navParams.get('nombre');
        this.subS = parseInt(this.navParams.get('sub'));
        this.apiProvider.getSubcategorias({ idCategoria: this.categoriaSeleccionada })
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.contadorPagina = 0;
                _this.categorias = data || [];
                var ddata = [];
                ddata.push(parseInt(_this.navParams.get('sub')));
                _this.subcategoriaSeleccionada = ddata;
                console.log(ddata);
                _this.buscarServicios(ddata, true, 0);
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
            subTitle: 'Debes activar el GPS para obtener los resultados',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    ListaServiciosPage.prototype.filterFav = function (user) {
        console.log(user);
        return user.idCentro == 1;
    };
    ListaServiciosPage.prototype.buscarServicios = function (id, continuar, pagina) {
        var _this = this;
        return new Promise(function (resolve) {
            if (pagina == 0) {
                _this.showInfinite = true;
            }
            _this.storage.get('coorLBY').then(function (value) {
                if (value) {
                    console.log(new Date(value.expirationDate) > Date.now());
                    if (new Date(value.expirationDate) > Date.now()) {
                        _this.latitudePerson = value.lat;
                        _this.longitudePerson = value.lng;
                    }
                }
                // this.cargaData = false;
                console.log(_this.latitudePerson);
                console.log(_this.longitudePerson);
                if (_this.latitudePerson == 0 && continuar) {
                    // this.presentAlert();
                    _this.getServiciosGPS(id, pagina);
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
                        pagina: pagina,
                        idCliente: _this.dataUser.idCliente || 0,
                        lat: _this.latitudePerson,
                        lon: _this.longitudePerson,
                        idSubcategoria: id.length > 0 ? id.toString() : null
                    };
                    _this.apiProvider.buscarServicios2(filtro)
                        .then(function (data) {
                        resolve();
                        console.log(data);
                        _this.cargaData = true;
                        if (data.length == 0) {
                            _this.showInfinite = false;
                        }
                        if (data['cercania']) {
                            _this.contadorPagina = pagina + 10;
                            _this.rFavs = data['favoritos'];
                            if (pagina == 0) {
                                _this.resultados = [];
                            }
                            data['cercania'].forEach(function (item, index) {
                                _this.resultados.push(item);
                            });
                        }
                        else {
                            console.log('Ha ocurrido un error');
                        }
                        _this.cdr.detectChanges();
                    });
                }
            });
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
    ListaServiciosPage.prototype.getServiciosGPS = function (id, pagina) {
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
            _this.buscarServicios(id, true, pagina);
        }, function (error) {
            console.log('some err');
            console.log(error);
            loading.dismissAll();
            _this.presentAlert();
            _this.buscarServicios(id, false, pagina);
        }, { enableHighAccuracy: true, timeout: 30000 });
    };
    ListaServiciosPage.prototype.openBusqueda = function () {
        console.log(this.navParams.get('nombre'));
        this.navCtrl.push('BuscarModalPage', { idCat: this.navParams.get('nombre') });
        //this.presentProfileModal();
        //
    };
    ListaServiciosPage.prototype.doInfinite = function () {
        var _this = this;
        console.log('Begin async operation');
        return new Promise(function (resolve) {
            var ddata = _this.subcategoriaSeleccionada;
            console.log(ddata);
            _this.buscarServicios(ddata, false, _this.contadorPagina).then(function () {
                resolve();
            });
            /*
              setTimeout(() => {
                for (var i = 0; i < 30; i++) {
                  this.items.push( this.items.length );
                }
      
                console.log('Async operation has ended');
                resolve();
              }, 500);
            */
        });
    };
    ListaServiciosPage.prototype.dosInfinite = function (infiniteScroll) {
        //this.buscarServicios(ddata,false,this.contadorPagina);
        console.log(this.contadorPagina);
        /*
           
              setTimeout(() => {
                console.log('listo')
        
                var ddata = [];
                ddata.push(parseInt(this.navParams.get('sub')));
                this.buscarServicios(ddata,false,this.contadorPagina);
        
                console.log('Async operation has ended');
                infiniteScroll.complete();
              }, 1000);
            */
    };
    ListaServiciosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-servicios',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/lista-servicios/lista-servicios.html"*/'<!--\n  Generated template for the ListaServiciosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n  \n    <ion-title style=\'padding: 0px;\'>\n<ion-item style=\'background-color: transparent !important;\'>\n  <ion-label style=\'display:none\'>Sub Categorias</ion-label>\n      <ion-select style=\'    width: 80%;\n    text-align: center;\n    color: white !important;\n    margin-left: 10%;\' [(ngModel)]="subcategoriaSeleccionada" (ionChange)="buscarServicios($event,true,0)" multiple="true" okText="Buscar"  cancelText="Cerrar">\n\n\n\n <ion-option  *ngFor="let n of categorias; let idx = index" [selected]=\'n.idSubcategoria==subS\'  [value]="n.idSubcategoria" \n      >{{n.nombre}}</ion-option>\n\n     \n<!-- \n    <ion-option  *ngFor="let n of categorias" [value]="n.idCategoria" \n    (ionSelect)="cambiarSeleccion($event, n)">{{n.nombre}}</ion-option>\n    <ion-option   value=\'Peluqueria\'>Peluqueria</ion-option>\n    <ion-option value=\'Rostro y Cuerpo\' >Rostro y Cuerpo</ion-option>\n\n    <ion-option value=\'Uñas\'>Uñas</ion-option>\n    <ion-option value=\'Masaje\' >Masaje</ion-option>\n\n    <ion-option value=\'Depilacion\'>Depilacion</ion-option>\n    <ion-option value=\'Bienestar\' >Bienestar</ion-option>\n    <ion-option value=\'Paquetes\'>Paquetes</ion-option>\n    <ion-option value=\'Ofertas\' >Ofertas</ion-option> -->\n\n  </ion-select>\n</ion-item>\n  </ion-title>\n\n\n\n          <ion-buttons end>\n      <button (click)=\'openBusqueda()\' ion-button icon-only>\n        <ion-icon name="ios-options"></ion-icon>\n      </button>\n\n\n       \n\n      </ion-buttons>\n\n\n\n\n  </ion-navbar>\n\n\n  <ion-segment mode="md" [(ngModel)]="section">\n    <ion-segment-button   style=\'font-size: 15px;text-transform: none !important;\' value="one" >\n         <span> \n         <img  *ngIf=\'section=="one"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/nearBlanco.png">\n         <img  *ngIf=\'!(section=="one")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/nearGris.png">\n          Cerca de ti</span>\n      </ion-segment-button>\n\n\n\n      <ion-segment-button  value="two" style=\'\n      font-size: 15px;text-transform: none !important;\' >\n      <span>\n        <img  *ngIf=\'section=="two"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/corazonBlanco.png"> \n        <img  *ngIf=\'!(section=="two")\'  style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/corazonGris.png"> \n\n        \n\n        Favoritos\n         </span>\n      </ion-segment-button>\n</ion-segment>\n\n\n\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Actualizar ubicacion"\n      refreshingSpinner="circles"\n      refreshingText="Actualizando ubicacion...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n\n\n\n\n\n\n\n\n\n\n<div [ngSwitch]="section" *ngIf=\'cargaData\'>\n\n    <ion-list mode="md" *ngSwitchCase="\'one\'">\n\n\n\n\n\n    	<div *ngIf="!(resultados?.length > 0)" style="    text-align: center;">\n    		\n    		<img  style=\'    margin: 0px;\' src="assets/imgs/busquedaNula.png">\n    		<p style="    text-align: center;\n    font-size: 16px;\n    margin: 34px;\n    line-height: 23px;"> <span style="    font-size: 22px !important;\n    color: #333 !important;\n    line-height: 2;">No hay centros cercanos</span><br>  <b style="color:#666">Prueba buscando en una región diferente utilizando el <a (click)=\'openBusqueda()\'>filtro del buscador</a>  </b></p>\n    	</div>\n		<ion-card *ngFor="let n of resultados" (click)=\'goCentro(n.idCentro)\' >\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n<!-- 				<img src="assets/imgs/fotoComercio.png" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				"> -->\n\n                <img src="http://50.116.17.150:3000/{{n.idFoto}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';"\n        style="\n        display: inline-block;\n        height: 90px;\n        width: 90px !important;\n        vertical-align: top;\n        ">\n\n        \n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">{{n.nombre}}</span>\n				<span style="    display: block;\n    font-size: 16px;\n    margin: 10px 0px;\n    font-weight: 800;\n    color: #EC527E;">${{n.pMin}} <span [hidden]=\'n.pMin == n.pMax\'>- ${{n.pMax}}</span></span>\n\n				<span class="itemComercio" >\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon [ngClass]="{\'colorGris\': n.cantRate==0}"  style=\'    margin-right: 8px;\n    color: rgb(249,199,53);\n    font-size: 21px;\n    vertical-align: middle;\' name="md-star"></ion-icon>{{n.rate  | number:\'1.1-2\'}} ({{n.cantRate\n}})</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\' name="ios-pin"></ion-icon>{{n.distance | number:\'1.1-2\'}} Km</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n    </ion-list>\n\n    <ion-list  mode="md" *ngSwitchCase="\'two\'">\n<!-- \n<div *ngIf="(list | search: searchTerm).length === 0">\n  "No matches"\n</div>\n<div *ngFor="#item in list | search: searchTerm">{{ item }}</div> \n\n<div *ngIf="(resultados | filtrofav:  {favorito: 1}).length === 0">\n  No matches\n</div>-->\n\n\n<div style=\'margin: 30px;\n    text-align: center;\n    color: #9998;\n    font-size: 17px;\'  *ngIf=\'!favoritosActivo\'>\n  Crea una cuenta o Logueate para acceder a tus favoritos\n</div>\n<div *ngIf=\'favoritosActivo\'>\n\n<div style=\'margin: 30px;\n    text-align: center;\n    color: #9998;\n    font-size: 17px;\'  *ngIf="rFavs.length === 0">\n  No has agregado ningun favorito en esta subcategoria\n</div>\n\n\n	<!-- 	<ion-card *ngFor="let n of resultados | filtrofav: filterFav" (click)=\'goCentro(n.idCentro)\' > -->\n    <ion-card *ngFor="let n of rFavs" (click)=\'goCentro(n.idCentro)\'>\n		<ion-card-content>\n				<div style="\n				display: inline-block;    width: 100%;\n				">\n				<img src="http://50.116.17.150:3000/{{n.idFoto}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';" style="\n				display: inline-block;\n				height: 90px;\n				width: 90px !important;\n				vertical-align: top;\n				">\n				<div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n				">\n				<span style="margin: 2px 0px 0px 0px;\n				font-size: 19px;\n				color: #333;">{{n.nombre}}</span>\n				<span style="    display: block;\n    font-size: 16px;\n    margin: 10px 0px;\n    font-weight: 800;\n    color: #EC527E;">${{n.pMin}} <span [hidden]=\'n.pMin == n.pMax\'>- ${{n.pMax}}</span></span>\n\n				<span class="itemComercio" >\n\n					<span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon [ngClass]="{\'colorGris\': n.cantRate==0}"  style=\'    margin-right: 8px;\n    color: rgb(249,199,53);\n    font-size: 21px;\n    vertical-align: middle;\' name="md-star"></ion-icon>{{n.rate  | number:\'1.1-2\'}} ({{n.cantRate\n}})</span>\n\n					<span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\' name="ios-pin"></ion-icon>{{n.distance | number:\'1.1-2\'}} Km</span>\n\n				</span>\n\n				</div>\n				</div>\n\n		</ion-card-content>\n		</ion-card>\n\n\n</div>\n\n\n\n\n\n\n\n    </ion-list>\n\n</div>\n\n\n\n\n\n\n    	<div *ngIf=\'!cargaData\' style="text-align: center;padding-top: 25%;">\n    		<ion-spinner name="bubbles"></ion-spinner>\n    	</div>\n\n  <ion-infinite-scroll *ngIf=\'showInfinite\'  (ionInfinite)="$event.waitFor(doInfinite())">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles" \n      loadingText="Obteniendo mas resultados...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/lista-servicios/lista-servicios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], ListaServiciosPage);
    return ListaServiciosPage;
}());

//# sourceMappingURL=lista-servicios.js.map

/***/ })

});
//# sourceMappingURL=4.js.map