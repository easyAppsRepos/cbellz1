webpackJsonp([18],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageModule", function() { return MapaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapaPageModule = (function () {
    function MapaPageModule() {
    }
    MapaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mapa__["a" /* MapaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__mapa__["a" /* MapaPage */]),
            ],
        })
    ], MapaPageModule);
    return MapaPageModule;
}());

//# sourceMappingURL=mapa.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(53);
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
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapaPage = (function () {
    function MapaPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, apiProvider, alertCtrl, storage, plt, ngZone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.plt = plt;
        this.ngZone = ngZone;
        this.subcategorias = [];
        this.categorias = [];
        this.dataMarcas = [];
        this.myPosition = {};
        this.markers = [
            {
                position: {
                    latitude: -17.3666745,
                    longitude: -66.2387878,
                },
                title: 'Point 1'
            },
            {
                position: {
                    latitude: -17.3706884,
                    longitude: -66.2397749,
                },
                title: 'Point 2'
            },
            {
                position: {
                    latitude: -17.391398,
                    longitude: -66.2407904,
                },
                title: 'Point 3'
            },
            {
                position: {
                    latitude: -17.3878887,
                    longitude: -66.223664,
                },
                title: 'Point 4'
            },
        ];
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
        this.marcarMapa = function () {
            _this.dataMarcas.filter(function (item) { return (_this.categoriaSeleccionada == 0 || item.categoriasCentro.split(',').includes(String(_this.categoriaSeleccionada))); }).forEach(function (element, index) {
                var imagenLink = 'assets/imgs/mdactive.png';
                var htmlInfoWindow = new plugin.google.maps.HtmlInfoWindow();
                var frame = document.createElement('div');
                frame.className = 'centradoTexto';
                frame.innerHTML = ["<ion-card><ion-card-content><div style=\"padding:10px;display:inline-block;width: 100%;\">\n                <img src=\"http://50.116.17.150:3000/" + element.idFoto + "\" \n        onError=\"this.src='assets/imgs/fotoComercio.png';\"\n        style=\"display: inline-block;height: 50px;margin-right:5px; width: 50px !important;vertical-align: top;\">\n    <div style=\"display: inline-block;\">\n     <span style=\"margin: 2px 0px 0px 0px;font-size: 15px;color: #333;\">" + element.nombre + "</span><br>\n <span class=\"itemComercio\">\n <span style=\"color:#888;font-size: 14px;\">\n\n <ion-icon style='font-size:16px' name='md-star' role='img' class='icon icon-ios ion-md-star ratingStar'> </ion-icon>" + (element.rate || 0) + "  (" + element.cantRate + ")</span>\n\n\n\n        <span style=\"    display: block;font-size: 14px;font-weight: 800;\n    color: #EC527E;\">$" + element.pMin + "<span [hidden]='" + element.pMin + " == " + element.pMax + "'>- $" + element.pMax + "</span></span>\n</span>\n    </div></div></ion-card-content></ion-card>"].join("");
                console.log(frame.getElementsByTagName("DIV"));
                var button = frame.getElementsByTagName("DIV")[0];
                button.addEventListener("click", function () {
                    _this.ngZone.run(function () {
                        _this.navCtrl.push('PerfilCentroPage', { 'idCentro': element.idCentro, 'idServicioSeleccionado': 0 });
                    });
                });
                htmlInfoWindow.setContent(frame, {
                    width: "230px",
                    height: "100px"
                });
                _this.map.addMarker({
                    'position': { lng: element.longitud, lat: element.latitud },
                    'icon': 'assets/imgs/mdactive.png'
                }, function (marker) {
                    marker.on(plugin.google.maps.event.MARKER_CLICK, function () {
                        marker.setIcon('assets/imgs/mactive.png');
                        htmlInfoWindow.open(marker);
                    });
                    marker.on(plugin.google.maps.event.INFO_CLOSE, function () {
                        marker.setIcon('assets/imgs/mdactive.png');
                    });
                    //marker.trigger(plugin.google.maps.event.MARKER_CLICK);
                });
            });
        };
        this.addMarker = function (options) {
            var markerOptions = {
                position: new LatLng(options.position.latitude, options.position.longitude),
                title: options.title
            };
            _this.map.addMarker(markerOptions);
        };
        this.getCentrosCercanos = function () {
            _this.apiProvider.getCentrosMapa({ lat: _this.myPosition.latitude, lon: _this.myPosition.longitude })
                .then(function (data) {
                console.log(data);
                _this.dataMarcas = data || [];
            });
        };
        /*
        'icon': {
        'url': imagenLink,
        size: {
            width: 35,
            height: 35
         }
        }
        */
        this.goTo = function (idCentro) { console.log(idCentro); };
        this.loadMap = function () {
            //let loading3 = this.loadingCtrl.create({content : "Buscando negocios cercanos"});
            //loading3.present();
            var element = document.getElementById('map');
            _this.map = plugin.google.maps.Map.getMap(element, {
                controls: {
                    'myLocation': true,
                    'zoom': true // android only
                },
                'camera': {
                    target: { lat: _this.myPosition.latitude, lng: _this.myPosition.longitude },
                    zoom: 15
                },
                'preferences': {
                    'zoom': {
                        'minZoom': 13,
                        'maxZoom': 17
                    },
                    padding: {
                        left: 10,
                        top: 10,
                        bottom: 53,
                        right: 10
                    }
                }
            });
            // create CameraPosition
            var position = {
                target: { lat: _this.myPosition.latitude, lng: _this.myPosition.longitude },
                zoom: 16,
                tilt: 30
            };
            _this.map.one(plugin.google.maps.event.MAP_READY, function () {
                //this.map.setVisible(false);
                _this.apiProvider.getCentrosMapa({ lat: _this.myPosition.latitude, lon: _this.myPosition.longitude })
                    .then(function (data) {
                    console.log(data);
                    _this.dataMarcas = data;
                    data.forEach(function (element, index) {
                        var imagenLink = 'assets/imgs/mdactive.png';
                        var htmlInfoWindow = new plugin.google.maps.HtmlInfoWindow();
                        var frame = document.createElement('div');
                        frame.className = 'centradoTexto';
                        frame.innerHTML = ["<ion-card><ion-card-content><div style=\"padding:10px;display:inline-block;width: 100%;\">\n                <img src=\"http://50.116.17.150:3000/" + element.idFoto + "\" \n        onError=\"this.src='assets/imgs/fotoComercio.png';\"\n        style=\"display: inline-block;height: 50px;margin-right:5px; width: 50px !important;vertical-align: top;\">\n    <div style=\"display: inline-block;\">\n     <span style=\"margin: 2px 0px 0px 0px;font-size: 15px;color: #333;\">" + element.nombre + "</span><br>\n <span class=\"itemComercio\">\n <span style=\"color:#888;font-size: 14px;\">\n\n <ion-icon style='font-size:16px' name='md-star' role='img' class='icon icon-ios ion-md-star ratingStar'> </ion-icon>" + (element.rate || 0) + "  (" + element.cantRate + ")</span>\n\n\n\n        <span style=\"    display: block;font-size: 14px;font-weight: 800;\n    color: #EC527E;\">$" + element.pMin + "<span [hidden]='" + element.pMin + " == " + element.pMax + "'>- $" + element.pMax + "</span></span>\n</span>\n    </div></div></ion-card-content></ion-card>"].join("");
                        console.log(frame.getElementsByTagName("DIV"));
                        var button = frame.getElementsByTagName("DIV")[0];
                        button.addEventListener("click", function () {
                            _this.ngZone.run(function () {
                                _this.navCtrl.push('PerfilCentroPage', { 'idCentro': element.idCentro, 'idServicioSeleccionado': 0 });
                            });
                        });
                        htmlInfoWindow.setContent(frame, {
                            width: "230px",
                            height: "100px"
                        });
                        _this.map.addMarker({
                            'position': { lng: element.longitud, lat: element.latitud },
                            'icon': 'assets/imgs/mdactive.png'
                        }, function (marker) {
                            marker.on(plugin.google.maps.event.MARKER_CLICK, function () {
                                marker.setIcon('assets/imgs/mactive.png');
                                htmlInfoWindow.open(marker);
                            });
                            marker.on(plugin.google.maps.event.INFO_CLOSE, function () {
                                marker.setIcon('assets/imgs/mdactive.png');
                            });
                            //marker.trigger(plugin.google.maps.event.MARKER_CLICK);
                        });
                    });
                    _this.loading.dismissAll();
                });
                console.log('Map is ready!');
                // move the map's camera to position
                //this.map.moveCamera(position);
                //loading3.dismissAll();
                /*
                this.map.addMarker({
                position: {lng: -84.212576, lat: 10.0028923},
                title: "Marcador ejemplo"
                });
                */
            });
        };
        this.categoriaSeleccionada = '';
        /*
        if(this.map){
        console.log('setVisible false');
        this.map.setVisible(false);
        }
        */
    }
    MapaPage.prototype.ionViewDidLoad = function () {
        // borrar
        // borrar
        // borrar
        //  this.apiProvider.getCentrosMapa({lat: 9.9930842, lon:  -84.2307235})
        //  .then(data => {console.log(data) });
        // borrar
        // borrar
        this.loading = this.loadingCtrl.create({ content: "Buscando negocios cercanos" });
        this.loading.present();
        this.getServiciosGPS();
        this.getCategorias();
    };
    MapaPage.prototype.ionViewDidEnter = function () {
        // this.loading = this.loadingCtrl.create({content : "Buscando negocios cercanos"});
        //  this.loading.present();
        //  this.getServiciosGPS();
        // create a new map by passing HTMLElement
        //verificar si sirve en ionviewdidenter
        //verificar reduciendo widj
        //verificar con push y setRoot
        //cambiar fondo oclor
        //this.gpsServices();
        console.log('ionViewDidLoad MapaPage');
    };
    MapaPage.prototype.getCategorias = function () {
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
    MapaPage.prototype.getSubCat = function (tt, yy) {
        var _this = this;
        console.log(tt);
        console.log(this.map);
        this.map.clear();
        this.marcarMapa();
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
    MapaPage.prototype.filtrarSubCategorias = function (tt, yy) {
        console.log(tt, yy);
    };
    MapaPage.prototype.regresawe = function () {
        this.navCtrl.setRoot('InicioPage');
    };
    MapaPage.prototype.getEstrella = function (numero, rate) {
        if (rate && rate >= numero) {
            return "<ion-icon name='md-star' role='img' class='icon icon-ios ion-md-star ratingStar'> </ion-icon>";
        }
        else {
            return "<ion-icon name='md-star' role='img' class='icon icon-ios ion-md-star'> </ion-icon>";
        }
    };
    MapaPage.prototype.goLista = function () {
        var fs = { 'nombre': this.categoriaSeleccionada, 'sub': 0 };
        console.log(fs);
        this.navCtrl.push('ListaServiciosPage', fs);
    };
    MapaPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'GPS desactivado',
            subTitle: 'Activa el GPS para filtrar por distancia',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    MapaPage.prototype.getServiciosGPS = function () {
        //let loading = this.loadingCtrl.create({content : "Obteniendo ubicacion"});
        //loading.present();
        var _this = this;
        //loading.present();
        navigator.geolocation.getCurrentPosition(function (pos) {
            _this.myPosition = {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            };
            var fechaExpiracion = new Date();
            fechaExpiracion.setHours(fechaExpiracion.getHours() + 1);
            _this.storage.set('coorLBY', { 'lat': pos.coords.latitude,
                'lng': pos.coords.longitude,
                'expirationDate': fechaExpiracion });
            // setTimeout(() => {
            //loading.dismissAll();
            _this.loadMap();
            //   },2000);
            //   loading.dismissAll();
            //  this.loadMap();
        }, function (error) {
            console.log('storageme err');
            console.log(error);
            //setTimeout(() => {
            _this.loading.dismissAll();
            _this.requestLocationAccuracy();
            // },2000);
            // loading.dismissAll();
            // this.requestLocationAccuracy();
        }, { enableHighAccuracy: true, timeout: 30000 });
    };
    MapaPage.prototype.gpsServices = function () {
    };
    MapaPage.prototype.onError = function (error) {
        console.error("The following error occurred: " + error);
    };
    MapaPage.prototype.requestLocationAuthorization = function () {
        var _this = this;
        cordova.plugins.diagnostic.requestLocationAuthorization(function (status) {
            switch (status) {
                case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                    if (_this.plt.is('ios')) {
                        _this.onError("Location services is already switched ON");
                    }
                    else {
                        _this._makeRequest();
                    }
                    break;
                case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                    _this.requestLocationAuthorization();
                    break;
                case cordova.plugins.diagnostic.permissionStatus.DENIED:
                    if (_this.plt.is('android')) {
                        _this.onError("User denied permission to use location");
                    }
                    else {
                        _this._makeRequest();
                    }
                    break;
                case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                    // Android only
                    _this.onError("User denied permission to use location");
                    break;
                case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                    // iOS only
                    _this.onError("Location services is already switched ON");
                    break;
            }
        }, this.onError());
    };
    MapaPage.prototype.requestLocationAccuracy = function () {
        var _this = this;
        cordova.plugins.diagnostic.getLocationAuthorizationStatus(function (status) {
            switch (status) {
                case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                    if (_this.plt.is('ios')) {
                        _this.onError("Location services is already switched ON");
                    }
                    else {
                        _this._makeRequest();
                    }
                    break;
                case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                    _this.requestLocationAuthorization();
                    break;
                case cordova.plugins.diagnostic.permissionStatus.DENIED:
                    if (_this.plt.is('android')) {
                        _this.onError("User denied permission to use location");
                    }
                    else {
                        _this._makeRequest();
                    }
                    break;
                case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                    // Android only
                    _this.onError("User denied permission to use location");
                    break;
                case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                    // iOS only
                    _this.onError("Location services is already switched ON");
                    break;
            }
        }, this.onError());
    };
    MapaPage.prototype._makeRequest = function () {
        var _this = this;
        cordova.plugins.locationAccuracy.canRequest(function (canRequest) {
            if (canRequest) {
                cordova.plugins.locationAccuracy.request(function () {
                    console.log("Location accuracy request successful");
                    _this.getServiciosGPS();
                }, function (error) {
                    _this.onError("Error requesting location accuracy: " + JSON.stringify(error));
                    if (error) {
                        // Android only
                        _this.onError("error code=" + error.code + "; error message=" + error.message);
                        if (_this.plt.is('android') && error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED) {
                            if (window.confirm("Failed to automatically set Location Mode to 'High Accuracy'. Would you like to switch to the Location Settings page and do this manually?")) {
                                cordova.plugins.diagnostic.switchToLocationSettings();
                            }
                        }
                    }
                }, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY // iOS will ignore this
                );
            }
            else {
                // On iOS, this will occur if Location Services is currently on OR a request is currently in progress.
                // On Android, this will occur if the app doesn't have authorization to use location.
                _this.onError("Cannot request location accurac // android");
            }
        });
    };
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mapa',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/mapa/mapa.html"*/'<!--\n  Generated template for the MapaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar >\n<!--   	    <ion-buttons start>\n    <button ion-button style="    width: 33px;" (click)=\'regresawe()\'>\n      <ion-icon name="arrow-back"  ></ion-icon>\n    </button><ion-icon ios="ios-list" md="md-list"></ion-icon>\n    </ion-buttons> -->\n\n    <ion-title>\n      Negocios cercanos\n    </ion-title>\n\n          <ion-buttons end>\n\n        <button  (click)=\'goLista()\'   ion-button icon-only>\n        <ion-icon name="ios-list" style=\'font-color:white;color:white\'></ion-icon>\n      </button>\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n  <ion-row>\n\n    <ion-col col-6>\n      <ion-select  placeholder="Categoria" style=\'    -webkit-box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n\n    width: 100%;\n    max-width: 100%;\' [(ngModel)]="categoriaSeleccionada" (ionChange)="subcategorias=[];getSubCat($event,true)" multiple="false" okText="Filtrar"  cancelText="Cerrar">\n\n <ion-option   [value]="0" \n      >Todas</ion-option>\n\n\n <ion-option  *ngFor="let n of categorias; let idx = index" [selected]=\'true\'  [value]="n.idCategoria" \n      >{{n.nombre}}</ion-option>\n  </ion-select>\n\n    </ion-col>\n    <ion-col col-6>\n\n      <ion-select   placeholder="Sub Categoria" [disabled]=\'subcategorias?.length<1\' style=\'    -webkit-box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.3) !important;\n\n    width: 100%;\n    max-width: 100%;\' [(ngModel)]="subCategoriaSeleccionada" (ionChange)="filtrarSubCategorias($event,true)" multiple="true" okText="Filtrar"  cancelText="Cerrar">\n\n\n\n <ion-option  *ngFor="let n of subcategorias; let idx = index" [selected]=\'true\'  [value]="n.idSubcategoria" \n      >{{n.nombre}}</ion-option>\n  </ion-select>\n\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n\n\n  <div id="map" ></div>  \n</ion-content>'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/mapa/mapa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], MapaPage);
    return MapaPage;
}());

//# sourceMappingURL=mapa.js.map

/***/ })

});
//# sourceMappingURL=18.js.map