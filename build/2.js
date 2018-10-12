webpackJsonp([2],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaquetesPageModule", function() { return PaquetesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paquetes__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //<--- here
var PaquetesPageModule = (function () {
    function PaquetesPageModule() {
    }
    PaquetesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paquetes__["a" /* PaquetesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__paquetes__["a" /* PaquetesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], PaquetesPageModule);
    return PaquetesPageModule;
}());

//# sourceMappingURL=paquetes.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filtrofav_filtrofav__ = __webpack_require__(460);
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

/***/ 460:
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

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaquetesPage; });
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
 * Generated class for the PaquetesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaquetesPage = (function () {
    function PaquetesPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, apiProvider, alertCtrl, zone, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.storage = storage;
        this.subcategorias = [];
        this.categorias = [];
        this.filterFav = function (user) {
            // console.log(user);
            if (_this.categoriaSeleccionada == 0) {
                return true;
            }
            if (_this.subcategorias.length > 0) {
                return user.some(function (r) { return _this.subCategoriaSeleccionada.includes(parseInt(r.idSubcategoria)); });
            }
            else {
                user.some(function (elem) { return elem.idCategoria == _this.categoriaSeleccionada; });
                // return [user.idCategoria].includes(String(this.categoriaSeleccionada));
            }
        };
        this.latitudePerson = 0;
        this.longitudePerson = 0;
        this.categoriaSeleccionada = '';
    }
    PaquetesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //this.getServiciosGPS();
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.dataUser = data;
            }
            else {
                console.log('error');
            }
            _this.doRefresh();
        });
        console.log('ionViewDidLoad FavoritosPage');
        this.getCategorias();
    };
    /*
    
    var found = array1.find(function(element) {
      return element > 10;
    });
    
    */
    PaquetesPage.prototype.doRefresh = function () {
        var _this = this;
        this.storage.get('coorLBY').then(function (value) {
            if (value && (new Date(value.expirationDate) > Date.now())) {
                _this.latitudePerson = value.lat;
                _this.longitudePerson = value.lng;
                _this.getFavoritos();
            }
            else {
                var loading_1 = _this.loadingCtrl.create({ content: "Obteniendo ubicacion" });
                loading_1.present();
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
                    _this.getFavoritos();
                    loading_1.dismissAll();
                }, function (error) {
                    console.log('some err');
                    console.log(error);
                    this.getFavoritos();
                    loading_1.dismissAll();
                    this.presentAlert();
                }, { enableHighAccuracy: true, timeout: 30000 });
            }
        });
        /*
           this.latitudePerson = 9.9931605;
           this.longitudePerson = -84.2307427;
  */
    };
    PaquetesPage.prototype.getSubCat = function (tt, yy) {
        var _this = this;
        //this.favoritos = this.favoritos;
        console.log(tt, yy);
        this.apiProvider.getSubcategorias({ idCategoria: tt })
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.subcategorias = data || [];
                var ddata = data.map(function (item) {
                    return item.idSubcategoria;
                });
                _this.subCategoriaSeleccionada = ddata;
            }
        });
    };
    PaquetesPage.prototype.filtrarSubCategorias = function (tt, yy) {
        console.log(tt, yy);
    };
    PaquetesPage.prototype.getCategorias = function () {
        var _this = this;
        this.apiProvider.categoriasHome()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.categorias = data['categorias'] || [];
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
    };
    PaquetesPage.prototype.getServiciosGPS = function () {
        /*
           this.latitudePerson = 9.9931605;
           this.longitudePerson = -84.2307427;
       */
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Obteniendo ubicacion" });
        loading.present();
        console.log('gps');
        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log(pos.coords.latitude + ' Long: ' + pos.coords.longitude);
            _this.latitudePerson = pos.coords.latitude;
            _this.longitudePerson = pos.coords.longitude;
            loading.dismissAll();
        }, function (error) {
            console.log('some err');
            console.log(error);
            loading.dismissAll();
        }, { enableHighAccuracy: true, timeout: 30000 });
    };
    PaquetesPage.prototype.getFavoritos = function (idCliente) {
        var _this = this;
        var dataE = { lat: this.latitudePerson,
            lon: this.longitudePerson };
        this.apiProvider.paquetesActivos(dataE)
            .then(function (data) {
            console.log(Object.values(data));
            console.log(Object.keys(data));
            if (data) {
                _this.zone.run(function () {
                    _this.favoritos = Object.values(data) || [];
                });
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
    };
    PaquetesPage.prototype.filtroCategoria = function () {
        //console.log('ionViewDidLoad FavoritosPage');
        this.showCheckbox();
    };
    PaquetesPage.prototype.showCheckbox = function () {
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
    PaquetesPage.prototype.goCentro = function (idCentro, serv) {
        console.log(serv);
        this.navCtrl.push('ReservapaquetePage', { 'idCentro': idCentro, 'servicios': serv });
    };
    PaquetesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-paquetes',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/paquetes/paquetes.html"*/'<ion-header>\n  <ion-navbar  color="headerColor">\n\n    <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-title>\nPaquetes\n\n\n    </ion-title>\n\n          <ion-buttons end>\n<!--       <button (click)=\'filtroCategoria()\' ion-button icon-only>\n        <ion-icon name="ios-options"></ion-icon>\n      </button>\n -->\n\n      </ion-buttons>\n\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content style=\'background: #fafafa !important;\'>\n\n  \n\n\n  <ion-grid style=\'    margin-bottom: 39px;\'>\n  <ion-row>\n\n    <ion-col col-6>\n      <ion-select  placeholder="Categoria" style=\'    -webkit-box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n\n    width: 100%;\n    max-width: 100%;\' [(ngModel)]="categoriaSeleccionada" (ionChange)="subcategorias=[];getSubCat($event,true)" multiple="false" okText="Filtrar"  cancelText="Cerrar">\n\n <ion-option   [value]="0" \n      >Todas</ion-option>\n\n\n <ion-option  *ngFor="let n of categorias; let idx = index" [selected]=\'true\'  [value]="n.idCategoria" \n      >{{n.nombre}}</ion-option>\n  </ion-select>\n\n    </ion-col>\n    <ion-col col-6>\n\n      <ion-select   placeholder="Sub Categoria" [disabled]=\'subcategorias?.length<1\' style=\'    -webkit-box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n\n    width: 100%;\n    max-width: 100%;\' [(ngModel)]="subCategoriaSeleccionada" (ionChange)="filtrarSubCategorias($event,true)" multiple="true" okText="Filtrar"  cancelText="Cerrar">\n\n\n\n <ion-option  *ngFor="let n of subcategorias; let idx = index" [selected]=\'true\'  [value]="n.idSubcategoria" \n      >{{n.nombre}}</ion-option>\n  </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n\n\n\n\n\n    <ion-list mode="md" >\n\n\n        <div class=\'noResultado\' \n        *ngIf="((favoritos)?.length == 0) || ((favoritos | filtrofav: filterFav)?.length == 0)">\n    No se han encontrado paquetes</div> \n\n    <ion-item *ngFor="let n of favoritos | filtrofav: filterFav"  (click)=\'goCentro(n[0].idCentro,n)\' >\n\n\n  \n		<div class="paqueteI">\n\n			<span style="float: left;">{{n[0].nombrePaquete}}</span>\n				<!-- <span style="float: right; text-decoration: line-through;"> $220</span> -->\n			<span style="float: right;color:#EC527E; margin-right: 10px"> SOLO A  ${{n[0].precioPaquete.toFixed(2)}}</span>\n\n			\n		</div>\n\n\n		<div style="    color: #888 !important;" *ngFor="let i of n" class="paqueteI">\n			<span style="float: left;">{{i.nombreServicio}}</span>\n			<span style="float: right; text-decoration: line-through;">${{i.precioServicio.toFixed(2)}}</span>\n		</div>\n\n		<div class="paqueteI">\n\n			<span style="float: left;">{{n[0].nombreCentro}}</span>\n	\n			<span style="float: right;color:#777; margin-right: 10px">\n				<ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\' name="ios-pin"></ion-icon>\n			 {{n[0].distance.toFixed(2)}}\n			</span>\n\n			\n		</div>\n\n    <div style="     margin-top: 16px;\n    margin-bottom: 30px;\n    height: 1px;\n    background-color: #999;\n    opacity: 0.2;"></div>\n\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n\n\n    </ion-list>\n\n  <div *ngIf=\'categorias?.length==0\' style="text-align: center;padding-top: 25%;">\n        <ion-spinner name="bubbles"></ion-spinner>\n      </div>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/paquetes/paquetes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PaquetesPage);
    return PaquetesPage;
}());

//# sourceMappingURL=paquetes.js.map

/***/ })

});
//# sourceMappingURL=2.js.map