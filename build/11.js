webpackJsonp([11],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertasPageModule", function() { return OfertasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ofertas__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //<--- here
var OfertasPageModule = (function () {
    function OfertasPageModule() {
    }
    OfertasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ofertas__["a" /* OfertasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__ofertas__["a" /* OfertasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], OfertasPageModule);
    return OfertasPageModule;
}());

//# sourceMappingURL=ofertas.module.js.map

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

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfertasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the OfertasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfertasPage = (function () {
    function OfertasPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, apiProvider, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.subcategorias = [];
        this.categorias = [];
        this.filterFav = function (user) {
            //console.log(user);
            if (_this.categoriaSeleccionada == 0) {
                return true;
            }
            if (_this.subcategorias.length > 0) {
                return [user.idSubcategoria].some(function (r) { return _this.subCategoriaSeleccionada.includes(parseInt(r)); });
            }
            else {
                // return false;
                // return user.idCategoria == this.categoriaSeleccionada;
                return [user.idCategoria].includes(String(_this.categoriaSeleccionada));
            }
        };
        this.latitudePerson = 0;
        this.longitudePerson = 0;
        this.categoriaSeleccionada = '';
    }
    OfertasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //this.getServiciosGPS();
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
            _this.getFavoritos();
        });
        console.log('ionViewDidLoad FavoritosPage');
        this.getCategorias();
    };
    /*
    
    var found = array1.find(function(element) {
      return element > 10;
    });
    
    */
    OfertasPage.prototype.getSubCat = function (tt, yy) {
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
    OfertasPage.prototype.filtrarSubCategorias = function (tt, yy) {
        console.log(tt, yy);
    };
    OfertasPage.prototype.getCategorias = function () {
        var _this = this;
        this.apiProvider.categoriasHome()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.categorias = data || [];
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
    };
    OfertasPage.prototype.getServiciosGPS = function () {
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
    OfertasPage.prototype.getFavoritos = function (idCliente) {
        var _this = this;
        var dataE = { lat: this.latitudePerson,
            lon: this.longitudePerson, idCliente: idCliente };
        console.log(dataE);
        this.apiProvider.ofertasActivas()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.favoritos = data || [];
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
    };
    OfertasPage.prototype.filtroCategoria = function () {
        //console.log('ionViewDidLoad FavoritosPage');
        this.showCheckbox();
    };
    OfertasPage.prototype.showCheckbox = function () {
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
    OfertasPage.prototype.goCentro = function (idCentro, idServicio) {
        // this.navCtrl.push('PerfilCentroPage');  
        //  this.navCtrl.push('PerfilCentroPage', {'idCentro':idCentro, 'idServicioSeleccionado':this.categoriaSeleccionada});
        this.navCtrl.push('PerfilCentroPage', { 'idCentro': idCentro, 'idServicioSeleccionado': idServicio });
    };
    OfertasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ofertas',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/ofertas/ofertas.html"*/'<ion-header>\n  <ion-navbar  color="headerColor">\n\n    <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-title>\nOfertas\n\n\n    </ion-title>\n\n          <ion-buttons end>\n<!--       <button (tap)=\'filtroCategoria()\' ion-button icon-only>\n        <ion-icon name="ios-options"></ion-icon>\n      </button>\n -->\n\n       \n\n      </ion-buttons>\n\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <ion-grid>\n  <ion-row>\n\n    <ion-col col-6>\n      <ion-select  placeholder="Categoria" style=\'    -webkit-box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n\n    width: 100%;\n    max-width: 100%;\' [(ngModel)]="categoriaSeleccionada" (ionChange)="subcategorias=[];getSubCat($event,true)" multiple="false" okText="Filtrar"  cancelText="Cerrar">\n\n <ion-option   [value]="0" \n      >Todas</ion-option>\n\n\n <ion-option  *ngFor="let n of categorias; let idx = index" [selected]=\'true\'  [value]="n.idCategoria" \n      >{{n.nombre}}</ion-option>\n  </ion-select>\n\n    </ion-col>\n    <ion-col col-6>\n\n      <ion-select   placeholder="Sub Categoria" [disabled]=\'subcategorias?.length<1\' style=\'    -webkit-box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n\n    width: 100%;\n    max-width: 100%;\' [(ngModel)]="subCategoriaSeleccionada" (ionChange)="filtrarSubCategorias($event,true)" multiple="true" okText="Filtrar"  cancelText="Cerrar">\n\n\n\n <ion-option  *ngFor="let n of subcategorias; let idx = index" [selected]=\'true\'  [value]="n.idSubcategoria" \n      >{{n.nombre}}</ion-option>\n  </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n\n\n\n\n\n    <ion-list mode="md" >\n\n\n        <div class=\'noResultado\' \n        *ngIf="((favoritos)?.length == 0) || ((favoritos | filtrofav: filterFav)?.length == 0)" >No se han encontrado negocios</div> \n\n    <ion-card *ngFor="let n of favoritos | filtrofav: filterFav"  (tap)=\'goCentro(n.idCentro,n.idCategoria)\' >\n    <ion-card-content>\n        <div style="\n        display: inline-block;    width: 100%;\n        ">\n        <img src="http://50.116.17.150:3000/{{n.imagenCentro}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';" style="\n        display: inline-block;\n        height: 90px;\n        width: 90px !important;\n        vertical-align: top;\n        ">\n        <div style="    display: inline-block;\n    width: calc(100% - 105px);\n    margin-left: 10px;\n        ">\n        <span style="margin: 2px 0px 0px 0px;\n        font-size: 19px;\n        color: #333;">{{n.nombre}} </span><br>\n         <span style="margin: 2px 0px 0px 0px;\n        font-size: 14px;\n        color: #2FD99B;">{{n.nombreCategoria}}</span>\n\n        <span style="    display: block;\n    font-size: 16px;\n    margin: 10px 0px;\n    font-weight: 800;\n   "><span style="text-decoration: line-through;">${{n.precio}} </span><span style=" color: #EC527E;">  ${{n.precio2}}</span></span>\n\n        <span class="itemComercio" >\n\n<!--           <span style="  margin-right: 21px;  color: #888;\n    font-size: 15px;"><ion-icon [ngClass]="{\'colorGris\': n.cantRate==0}"  style=\'    margin-right: 8px;\n    color: rgb(249,199,53);\n    font-size: 21px;\n    vertical-align: middle;\' name="md-star"></ion-icon>{{n.rate  | number:\'1.1-2\'}} ({{n.cantRate\n}})</span>\n\n          <span style="     color: #888;\n    font-size: 15px;  "><ion-icon style=\'  margin-right: 8px;      vertical-align: middle;   font-size: 21px;color:#2FD99B;\' name="ios-pin"></ion-icon>{{n.distance | number:\'1.1-2\'}} Km</span>\n -->\n   <span style="     color: #888;\n    font-size: 15px;  ">\n\n    {{n.nombreCentro}}\n  </span>\n\n        </span>\n\n        </div>\n        </div>\n\n    </ion-card-content>\n    </ion-card>\n\n\n\n\n\n\n\n\n\n    </ion-list>\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/ofertas/ofertas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _g || Object])
    ], OfertasPage);
    return OfertasPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=ofertas.js.map

/***/ })

});
//# sourceMappingURL=11.js.map