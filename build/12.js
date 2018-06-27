webpackJsonp([12],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageModule", function() { return MapaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa__ = __webpack_require__(467);
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

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
    function MapaPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, apiProvider, alertCtrl, storage, plt) {
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
        this.addMarker = function (options) {
            var markerOptions = {
                position: new LatLng(options.position.latitude, options.position.longitude),
                title: options.title
            };
            _this.map.addMarker(markerOptions);
        };
        this.loadMap = function () {
            // create a new map by passing HTMLElement
            var element = document.getElementById('map');
            _this.map = plugin.google.maps.Map.getMap(element);
            // create CameraPosition
            var position = {
                target: { lat: _this.myPosition.latitude, lng: _this.myPosition.longitude },
                zoom: 17,
                tilt: 30
            };
            _this.map.one(plugin.google.maps.event.MAP_READY, function () {
                console.log('Map is ready!');
                // move the map's camera to position
                //this.map.moveCamera(position);
                _this.map.addMarker({
                    position: { lng: -84.212576, lat: 10.0028923 },
                    title: "Marcador ejemplo"
                });
            });
        };
        this.plt.is('ios') ? (this.platform = 'ios') : this.plt.is('android') ? (this.platform = 'android') : (this.platform = 'web');
        console.log(this.platform);
    }
    MapaPage.prototype.ionViewDidLoad = function () {
        this.getServiciosGPS();
        //this.gpsServices();
        console.log('ionViewDidLoad MapaPage');
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
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Obteniendo ubicacion" });
        loading.present();
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
            loading.dismissAll();
            _this.loadMap();
        }, function (error) {
            console.log('storageme err');
            console.log(error);
            loading.dismissAll();
            //this.presentAlert();
            _this.requestLocationAccuracy();
        }, { enableHighAccuracy: true, timeout: 30000 });
    };
    MapaPage.prototype.gpsServices = function () {
    };
    MapaPage.prototype.onError = function (error) {
        console.error("The following error occurred: " + error);
    };
    MapaPage.prototype.handleLocationAuthorizationStatus = function (status) {
        switch (status) {
            case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                if (this.plt.is('ios')) {
                    this.onError("Location services is already switched ON");
                }
                else {
                    this._makeRequest();
                }
                break;
            case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                this.requestLocationAuthorization();
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED:
                if (this.plt.is('android')) {
                    onError("User denied permission to use location");
                }
                else {
                    this._makeRequest();
                }
                break;
            case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                // Android only
                this.onError("User denied permission to use location");
                break;
            case cordova.plugins.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE:
                // iOS only
                this.onError("Location services is already switched ON");
                break;
        }
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
                        onError("User denied permission to use location");
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
                        onError("User denied permission to use location");
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
        cordova.plugins.locationAccuracy.canRequest(function (canRequest) {
            if (canRequest) {
                cordova.plugins.locationAccuracy.request(function () {
                    this.handleSuccess("Location accuracy request successful");
                }, function (error) {
                    this.onError("Error requesting location accuracy: " + JSON.stringify(error));
                    if (error) {
                        // Android only
                        this.onError("error code=" + error.code + "; error message=" + error.message);
                        if (this.plt.is('android') && error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED) {
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
                this.onError("Cannot request location accurac // android");
            }
        });
    };
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mapa',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/mapa/mapa.html"*/'<!--\n  Generated template for the MapaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar >\n    <ion-title>\n      Negocios cercanos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="map"></div>  \n</ion-content>'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/mapa/mapa.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" && _j || Object])
    ], MapaPage);
    return MapaPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=mapa.js.map

/***/ })

});
//# sourceMappingURL=12.js.map