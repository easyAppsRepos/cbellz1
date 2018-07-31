webpackJsonp([28],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(53);
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
    ApiProvider.prototype.getCarrito = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get("carrito").then(function (value) {
                // console.log(value);
                value ? resolve(value) : resolve([]);
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.getTotal = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get("carrito").then(function (value) {
                // console.log(value);
                var total = 0;
                value.forEach(function (elementw, index) {
                    total += parseFloat(elementw.precioFinal);
                });
                resolve(total);
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.addProducto = function (producto) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('carrito').then(function (value) {
                if (value) {
                    value.push(producto);
                    _this.storage.set("carrito", value);
                    resolve(value);
                }
                else {
                    var carrito = [];
                    carrito.push(producto);
                    _this.storage.set("carrito", carrito);
                    resolve(carrito);
                }
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.sacarProducto = function (servicio) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get("carrito").then(function (value) {
                if (value) {
                    //let index = value.indexOf(idServicio);
                    var index = value.findIndex(function (i) { return i.idServicio === servicio; });
                    if (index > -1) {
                        value.splice(index, 1);
                    }
                    console.log(value);
                    _this.storage.set("carrito", value);
                    resolve(value);
                }
                else {
                    resolve([]);
                }
            }).catch(function () { return resolve(false); });
        });
    };
    ApiProvider.prototype.vaciarCarrito = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var carrito = [];
            _this.storage.set("carrito", carrito);
            resolve(carrito);
        });
    };
    //this.storage.set(`usr_tok_datagym`, data.data[0]);
    ApiProvider.prototype.categoriasHome = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/categoriasHome3').subscribe(function (data) {
                console.log('d');
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(false);
            });
        });
    };
    ApiProvider.prototype.doLoginApi = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/doLoginApi', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.cerrarS = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/cerrarS', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.cancelarCita = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/cancelarCita', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.agregarOpinion = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/agregarOpinion', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCC = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCC', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.reprogramarCita = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/reprogramarCita', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.aceptarReprogramacion = function (da) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/aceptarReprogramacion', JSON.stringify(da), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getHorasDispo = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getHorasDispo', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.buscarServiciosFiltro = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/buscarServiciosFiltro', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getSubcategorias = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getSubcategorias', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getDataCita = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getDataCita', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.editarUsuario = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/editarUsuario', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getServiciosCategoria = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getServiciosCategoria', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getEmpleadosDisponibles = function (credenciales) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getEmpleadosDisponibles', JSON.stringify(credenciales), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.addPush = function (dd) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/addPush', JSON.stringify(dd), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
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
                resolve(false);
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.horaMinMax = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.api2 + '/horaMinMax').subscribe(function (data) {
                console.log('d');
                resolve(data);
            }, function (err) {
                resolve(false);
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCentroInfo = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCentroInfo', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.cambiarFavorito = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/cambiarFavorito', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.reservasUser = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/reservasUser', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.addCita = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/addCita', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCentroServicios = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCentroServicios', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCentroServicios2 = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCentroServicios2', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.ofertasActivas = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/ofertasActivas2', JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.favoritosGPS2 = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/favoritosGPS2', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.favoritosGPS = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/favoritosGPS', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCentrosMapa = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCentrosMapa', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getOpiniones = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getOpiniones', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.recuperarPass = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/recuperarPass', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.addUserFb = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/addUserFb', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.addUserEmail = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/addUserEmail', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.addNegocio = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/addNegocio2', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.verificarFBLog = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/verificarFBLog', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.verificarCuenta = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/verificarCuenta', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCupones = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCupones', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getCuponesApp = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/getCuponesApp', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.canjearCupon = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/canjearCupon', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.buscarOfertas = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/buscarOfertas', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.buscarServicios = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/buscarServiciosGPS', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.buscarServicios2 = function (filtro) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.api2 + '/buscarServiciosGPS2', JSON.stringify(filtro), { headers: { 'Content-Type': 'application/json' } }).subscribe(function (data) {
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

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addservicios/addservicios.module": [
		424,
		27
	],
	"../pages/ajustes/ajustes.module": [
		425,
		26
	],
	"../pages/ayuda/ayuda.module": [
		426,
		25
	],
	"../pages/buscar-modal/buscar-modal.module": [
		427,
		24
	],
	"../pages/calificar/calificar.module": [
		428,
		23
	],
	"../pages/centrocupones/centrocupones.module": [
		429,
		22
	],
	"../pages/confirmar-reserva/confirmar-reserva.module": [
		430,
		21
	],
	"../pages/cuenta/cuenta.module": [
		432,
		20
	],
	"../pages/cupones/cupones.module": [
		431,
		6
	],
	"../pages/demo/demo.module": [
		433,
		19
	],
	"../pages/detalle-reserva/detalle-reserva.module": [
		434,
		18
	],
	"../pages/favoritos/favoritos.module": [
		435,
		5
	],
	"../pages/inicio/inicio.module": [
		423,
		9
	],
	"../pages/lista-servicios/lista-servicios.module": [
		436,
		4
	],
	"../pages/login/login.module": [
		437,
		17
	],
	"../pages/mapa/mapa.module": [
		440,
		16
	],
	"../pages/mis-reservas/mis-reservas.module": [
		439,
		3
	],
	"../pages/modal-services/modal-services.module": [
		438,
		8
	],
	"../pages/negocioregistro/negocioregistro.module": [
		441,
		15
	],
	"../pages/nosotros/nosotros.module": [
		443,
		14
	],
	"../pages/ofertas/ofertas.module": [
		442,
		2
	],
	"../pages/opiniones/opiniones.module": [
		444,
		1
	],
	"../pages/perfil-centro/perfil-centro.module": [
		445,
		7
	],
	"../pages/recuperar/recuperar.module": [
		446,
		13
	],
	"../pages/reserva-hecha/reserva-hecha.module": [
		447,
		12
	],
	"../pages/reserva/reserva.module": [
		448,
		0
	],
	"../pages/resultados/resultados.module": [
		450,
		11
	],
	"../pages/verificacion/verificacion.module": [
		449,
		10
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic2_rating__ = __webpack_require__(334);
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
                __WEBPACK_IMPORTED_MODULE_12_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { mode: 'ios', backButtonText: '' }, {
                    links: [
                        { loadChildren: '../pages/addservicios/addservicios.module#AddserviciosPageModule', name: 'AddserviciosPage', segment: 'addservicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ajustes/ajustes.module#AjustesPageModule', name: 'AjustesPage', segment: 'ajustes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ayuda/ayuda.module#AyudaPageModule', name: 'AyudaPage', segment: 'ayuda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buscar-modal/buscar-modal.module#BuscarModalPageModule', name: 'BuscarModalPage', segment: 'buscar-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calificar/calificar.module#CalificarPageModule', name: 'CalificarPage', segment: 'calificar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/centrocupones/centrocupones.module#CentrocuponesPageModule', name: 'CentrocuponesPage', segment: 'centrocupones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmar-reserva/confirmar-reserva.module#ConfirmarReservaPageModule', name: 'ConfirmarReservaPage', segment: 'confirmar-reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cupones/cupones.module#CuponesPageModule', name: 'CuponesPage', segment: 'cupones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cuenta/cuenta.module#CuentaPageModule', name: 'CuentaPage', segment: 'cuenta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/demo/demo.module#DemoPageModule', name: 'DemoPage', segment: 'demo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalle-reserva/detalle-reserva.module#DetalleReservaPageModule', name: 'DetalleReservaPage', segment: 'detalle-reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favoritos/favoritos.module#FavoritosPageModule', name: 'FavoritosPage', segment: 'favoritos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-servicios/lista-servicios.module#ListaServiciosPageModule', name: 'ListaServiciosPage', segment: 'lista-servicios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-services/modal-services.module#ModalServicesPageModule', name: 'ModalServicesPage', segment: 'modal-services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-reservas/mis-reservas.module#MisReservasPageModule', name: 'MisReservasPage', segment: 'mis-reservas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapa/mapa.module#MapaPageModule', name: 'MapaPage', segment: 'mapa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/negocioregistro/negocioregistro.module#NegocioregistroPageModule', name: 'NegocioregistroPage', segment: 'negocioregistro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ofertas/ofertas.module#OfertasPageModule', name: 'OfertasPage', segment: 'ofertas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nosotros/nosotros.module#NosotrosPageModule', name: 'NosotrosPage', segment: 'nosotros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opiniones/opiniones.module#OpinionesPageModule', name: 'OpinionesPage', segment: 'opiniones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil-centro/perfil-centro.module#PerfilCentroPageModule', name: 'PerfilCentroPage', segment: 'perfil-centro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperar/recuperar.module#RecuperarPageModule', name: 'RecuperarPage', segment: 'recuperar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva-hecha/reserva-hecha.module#ReservaHechaPageModule', name: 'ReservaHechaPage', segment: 'reserva-hecha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserva/reserva.module#ReservaPageModule', name: 'ReservaPage', segment: 'reserva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verificacion/verificacion.module#VerificacionPageModule', name: 'VerificacionPage', segment: 'verificacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultados/resultados.module#ResultadosPageModule', name: 'ResultadosPage', segment: 'resultados', priority: 'low', defaultHistory: [] }
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

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 161,
	"./af.js": 161,
	"./ar": 162,
	"./ar-dz": 163,
	"./ar-dz.js": 163,
	"./ar-kw": 164,
	"./ar-kw.js": 164,
	"./ar-ly": 165,
	"./ar-ly.js": 165,
	"./ar-ma": 166,
	"./ar-ma.js": 166,
	"./ar-sa": 167,
	"./ar-sa.js": 167,
	"./ar-tn": 168,
	"./ar-tn.js": 168,
	"./ar.js": 162,
	"./az": 169,
	"./az.js": 169,
	"./be": 170,
	"./be.js": 170,
	"./bg": 171,
	"./bg.js": 171,
	"./bm": 172,
	"./bm.js": 172,
	"./bn": 173,
	"./bn.js": 173,
	"./bo": 174,
	"./bo.js": 174,
	"./br": 175,
	"./br.js": 175,
	"./bs": 176,
	"./bs.js": 176,
	"./ca": 177,
	"./ca.js": 177,
	"./cs": 178,
	"./cs.js": 178,
	"./cv": 179,
	"./cv.js": 179,
	"./cy": 180,
	"./cy.js": 180,
	"./da": 181,
	"./da.js": 181,
	"./de": 182,
	"./de-at": 183,
	"./de-at.js": 183,
	"./de-ch": 184,
	"./de-ch.js": 184,
	"./de.js": 182,
	"./dv": 185,
	"./dv.js": 185,
	"./el": 186,
	"./el.js": 186,
	"./en-au": 187,
	"./en-au.js": 187,
	"./en-ca": 188,
	"./en-ca.js": 188,
	"./en-gb": 189,
	"./en-gb.js": 189,
	"./en-ie": 190,
	"./en-ie.js": 190,
	"./en-il": 191,
	"./en-il.js": 191,
	"./en-nz": 192,
	"./en-nz.js": 192,
	"./eo": 193,
	"./eo.js": 193,
	"./es": 194,
	"./es-do": 195,
	"./es-do.js": 195,
	"./es-us": 196,
	"./es-us.js": 196,
	"./es.js": 194,
	"./et": 197,
	"./et.js": 197,
	"./eu": 198,
	"./eu.js": 198,
	"./fa": 199,
	"./fa.js": 199,
	"./fi": 200,
	"./fi.js": 200,
	"./fo": 201,
	"./fo.js": 201,
	"./fr": 202,
	"./fr-ca": 203,
	"./fr-ca.js": 203,
	"./fr-ch": 204,
	"./fr-ch.js": 204,
	"./fr.js": 202,
	"./fy": 205,
	"./fy.js": 205,
	"./gd": 206,
	"./gd.js": 206,
	"./gl": 207,
	"./gl.js": 207,
	"./gom-latn": 208,
	"./gom-latn.js": 208,
	"./gu": 209,
	"./gu.js": 209,
	"./he": 210,
	"./he.js": 210,
	"./hi": 211,
	"./hi.js": 211,
	"./hr": 212,
	"./hr.js": 212,
	"./hu": 213,
	"./hu.js": 213,
	"./hy-am": 214,
	"./hy-am.js": 214,
	"./id": 215,
	"./id.js": 215,
	"./is": 216,
	"./is.js": 216,
	"./it": 217,
	"./it.js": 217,
	"./ja": 218,
	"./ja.js": 218,
	"./jv": 219,
	"./jv.js": 219,
	"./ka": 220,
	"./ka.js": 220,
	"./kk": 221,
	"./kk.js": 221,
	"./km": 222,
	"./km.js": 222,
	"./kn": 223,
	"./kn.js": 223,
	"./ko": 224,
	"./ko.js": 224,
	"./ky": 225,
	"./ky.js": 225,
	"./lb": 226,
	"./lb.js": 226,
	"./lo": 227,
	"./lo.js": 227,
	"./lt": 228,
	"./lt.js": 228,
	"./lv": 229,
	"./lv.js": 229,
	"./me": 230,
	"./me.js": 230,
	"./mi": 231,
	"./mi.js": 231,
	"./mk": 232,
	"./mk.js": 232,
	"./ml": 233,
	"./ml.js": 233,
	"./mr": 234,
	"./mr.js": 234,
	"./ms": 235,
	"./ms-my": 236,
	"./ms-my.js": 236,
	"./ms.js": 235,
	"./mt": 237,
	"./mt.js": 237,
	"./my": 238,
	"./my.js": 238,
	"./nb": 239,
	"./nb.js": 239,
	"./ne": 240,
	"./ne.js": 240,
	"./nl": 241,
	"./nl-be": 242,
	"./nl-be.js": 242,
	"./nl.js": 241,
	"./nn": 243,
	"./nn.js": 243,
	"./pa-in": 244,
	"./pa-in.js": 244,
	"./pl": 245,
	"./pl.js": 245,
	"./pt": 246,
	"./pt-br": 247,
	"./pt-br.js": 247,
	"./pt.js": 246,
	"./ro": 248,
	"./ro.js": 248,
	"./ru": 249,
	"./ru.js": 249,
	"./sd": 250,
	"./sd.js": 250,
	"./se": 251,
	"./se.js": 251,
	"./si": 252,
	"./si.js": 252,
	"./sk": 253,
	"./sk.js": 253,
	"./sl": 254,
	"./sl.js": 254,
	"./sq": 255,
	"./sq.js": 255,
	"./sr": 256,
	"./sr-cyrl": 257,
	"./sr-cyrl.js": 257,
	"./sr.js": 256,
	"./ss": 258,
	"./ss.js": 258,
	"./sv": 259,
	"./sv.js": 259,
	"./sw": 260,
	"./sw.js": 260,
	"./ta": 261,
	"./ta.js": 261,
	"./te": 262,
	"./te.js": 262,
	"./tet": 263,
	"./tet.js": 263,
	"./tg": 264,
	"./tg.js": 264,
	"./th": 265,
	"./th.js": 265,
	"./tl-ph": 266,
	"./tl-ph.js": 266,
	"./tlh": 267,
	"./tlh.js": 267,
	"./tr": 268,
	"./tr.js": 268,
	"./tzl": 269,
	"./tzl.js": 269,
	"./tzm": 270,
	"./tzm-latn": 271,
	"./tzm-latn.js": 271,
	"./tzm.js": 270,
	"./ug-cn": 272,
	"./ug-cn.js": 272,
	"./uk": 273,
	"./uk.js": 273,
	"./ur": 274,
	"./ur.js": 274,
	"./uz": 275,
	"./uz-latn": 276,
	"./uz-latn.js": 276,
	"./uz.js": 275,
	"./vi": 277,
	"./vi.js": 277,
	"./x-pseudo": 278,
	"./x-pseudo.js": 278,
	"./yo": 279,
	"./yo.js": 279,
	"./zh-cn": 280,
	"./zh-cn.js": 280,
	"./zh-hk": 281,
	"./zh-hk.js": 281,
	"./zh-tw": 282,
	"./zh-tw.js": 282
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
webpackContext.id = 392;

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(332);
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
    function MyApp(platform, statusBar, alertCtrl, menuCtrl, splashScreen, formBuilder, events, loadingCtrl, storage, modalCtrl, apiProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.splashScreen = splashScreen;
        this.formBuilder = formBuilder;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.rootPage = '';
        this.menuActivo = false;
        this.porcenBarra = 0;
        this.getFacebookProfileInfo = function (authResponse) {
            return new Promise(function (resolve) {
                facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null, function (response) {
                    console.log(response);
                    resolve(response);
                }, function (response) {
                    console.log(response);
                    resolve(response);
                });
            });
            //var info = $q.defer();
        };
        // This is the success callback from the login method
        this.fbLoginSuccess = function (response) {
            if (!response.authResponse) {
                fbLoginError("Cannot find the authResponse");
                return;
            }
            var authResponse = response.authResponse;
            _this.getFacebookProfileInfo(authResponse)
                .then(function (profileInfo) {
                // For the purpose of this example I will store user data on local storage
                var usuario = {
                    fbId: profileInfo.id,
                    nombre: profileInfo.name,
                    email: profileInfo.email,
                    imagenFB: "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
                };
                _this.apiProvider.addUserFb(usuario).then(function (events) {
                    if (events.insertId > 0) {
                        _this.apiProvider.verificarFBLog({ userId: authResponse.userID })
                            .then(function (data) {
                            console.log(data);
                            if (data.data.length > 0) {
                                _this.storage.set("usr_tok_by", data.data[0]);
                                _this.userDataProfile = data.data[0];
                                _this.menuActivo = true;
                                _this.loading2.dismissAll();
                            }
                            else {
                                console.log('Ha ocurrido un error');
                            }
                        });
                    }
                    else {
                        _this.apiProvider.verificarFBLog({ userId: authResponse.userID })
                            .then(function (data) {
                            console.log(data);
                            if (data.data.length > 0) {
                                _this.storage.set("usr_tok_by", data.data[0]);
                                _this.userDataProfile = data.data[0];
                                _this.menuActivo = true;
                                _this.loading2.dismissAll();
                            }
                            else {
                                console.log('Ha ocurrido un error');
                            }
                        });
                    }
                });
            }, function (fail) {
                // Fail get profile info
                console.log('profile info fail', fail);
            });
        };
        this.addUserFb = function (data) {
            _this.getFacebookProfileInfo(data)
                .then(function (profileInfo) {
                // For the purpose of this example I will store user data on local storage
                var usuario = {
                    fbId: profileInfo.id,
                    nombre: profileInfo.name,
                    email: profileInfo.email,
                    imagenFB: "http://graph.facebook.com/" + profileInfo.id + "/picture?type=large"
                };
                _this.apiProvider.addUserFb(usuario).then(function (events) {
                    if (events.insertId > 0) {
                        _this.apiProvider.verificarFBLog({ userId: profileInfo.id })
                            .then(function (data) {
                            console.log(data);
                            if (data.data.length > 0) {
                                console.log('addUserFbinsertplus0');
                                _this.storage.set("usr_tok_by", data.data[0]);
                                _this.userDataProfile = data.data[0];
                                _this.menuActivo = true;
                                _this.loading2.dismissAll();
                            }
                            else {
                                console.log('Ha ocurrido un error');
                            }
                        });
                    }
                    else {
                        _this.apiProvider.verificarFBLog({ userId: profileInfo.id })
                            .then(function (data) {
                            console.log(data);
                            if (data.data.length > 0) {
                                console.log('addUserFbinsertmenos0');
                                _this.storage.set("usr_tok_by", data.data[0]);
                                _this.userDataProfile = data.data[0];
                                _this.menuActivo = true;
                                _this.loading2.dismissAll();
                            }
                            else {
                                console.log('Ha ocurrido un error');
                            }
                        });
                    }
                });
            });
        };
        this.initializeApp();
        this.presentLoading();
        this.loading2 = this.loadingCtrl.create({ content: "Ingresando" });
        events.subscribe('userCreated', function (user) {
            _this.userDataProfile = user;
            _this.menuActivo = true;
        });
        events.subscribe('userLogout', function () {
            _this.userDataProfile = false;
            _this.storage.set("usr_tok_by", false);
            _this.menuActivo = false;
            _this.nav.setRoot('InicioPage');
            //console.log(user);
        });
        events.subscribe('userCH', function () {
            _this.apiProvider.verificarLogin()
                .then(function (data) {
                if (data) {
                    _this.userDataProfile = data;
                    _this.porcenBarra = ((_this.userDataProfile.appexp) / (_this.userDataProfile.exp)) + '%';
                    _this.menuActivo = true;
                }
                else {
                    _this.menuActivo = false;
                }
            });
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */] }
        ];
        this.authForm = formBuilder.group({
            // username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(8), Validators.maxLength(30)])],
            username: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required])]
        });
    }
    MyApp.prototype.presentAlert = function (titulo, mensaje) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    MyApp.prototype.registrarDevice = function (data) {
        console.log('regsustr');
        console.log(data);
        this.storage.set("pushKeyBY", data.registrationId);
    };
    MyApp.prototype.doLogin = function (data) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Verificando Credenciales..." });
        loading.present();
        this.apiProvider.doLoginApi(data)
            .then(function (data) {
            console.log(data);
            if (data.data[0] && (data.data[0].idCliente > 0)) {
                if (data.data[0].estado == 0) {
                    console.log(data);
                    //this.presentAlert('Activa tu cuenta','Debes verificar tu correo');
                    _this.menuCtrl.close();
                    _this.nav.push('VerificacionPage', data.data[0]);
                }
                else {
                    console.log(data);
                    _this.storage.get('pushKeyBY').then(function (value) {
                        if (value) {
                            console.log(value);
                            var pushState = {
                                pushK: value,
                                device: device.platform,
                                deviceId: device.uuid,
                                login: Date.now(),
                                user: data.data[0].idCliente
                            };
                            console.log(pushState);
                            _this.apiProvider.addPush(pushState).then(function (data) {
                                console.log(data);
                            });
                        }
                        //value;
                    });
                    _this.storage.set("usr_tok_by", data.data[0]);
                    _this.events.publish('userCreated', data.data[0]);
                    _this.events.publish('loginOK');
                    _this.menuActivo = true;
                    //this.closeModal();
                }
                loading.dismissAll();
            }
            else {
                loading.dismissAll();
                _this.presentAlert('Ups!', 'Credenciales incorrectas');
            }
        });
    };
    MyApp.prototype.onSubmit = function (data) {
        console.log(data);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.apiProvider.verificarLogin()
                .then(function (data) {
                console.log(data);
                if (data) {
                    _this.userDataProfile = data;
                    _this.porcenBarra = ((_this.userDataProfile.appexp) / (_this.userDataProfile.exp)) + '%';
                    console.log(_this.porcenBarra);
                    _this.menuActivo = true;
                }
                else {
                    _this.menuActivo = false;
                }
            });
            /*
             //BORRAR ESTAS 3 LINEAS
       
             this.menuActivo = false;
            this.storage.set('introShownBY', false);
            this.loader.dismiss();
             // init demo verification
       */
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
            //init Push tasks
            // if(this.platform.is('android') || this.platform.is('ios')){
            if (_this.platform.is('android') || _this.platform.is('ios')) {
                //if(false){
                console.log('amhere1');
                //PUSH FUNCIONANDO
                var push = PushNotification.init({
                    "android": {
                        "senderID": "187646798187"
                    },
                    "ios": {
                        "alert": "true",
                        "badge": "true",
                        "sound": "true"
                    },
                    "windows": {}
                });
                push.on('registration', function (data) { return _this.registrarDevice(data); });
                push.on('notification', function (data) {
                    console.log(data);
                });
                push.on('error', function (e) {
                    console.log(e.message);
                });
            }
            //End push 
        });
    };
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Iniciando"
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
    MyApp.prototype.presentProfileModal2 = function () {
        this.nav.push('LoginPage');
    };
    MyApp.prototype.registroNegocio = function () {
        //  let profileModal = this.modalCtrl.create('NegocioregistroPage');
        //profileModal.present();
        this.nav.push('NegocioregistroPage');
    };
    MyApp.prototype.envioOK = function () {
        var alert = this.alertCtrl.create({
            title: 'Completado',
            subTitle: 'Te hemos enviado la contraseña nueva a tu correo',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    MyApp.prototype.recupeCon = function () {
        this.nav.push('RecuperarPage');
    };
    /*
      recupeCon() {
      let alert = this.alertCtrl.create({
        title: 'Recuperar Contraseña',
        inputs: [
          {
            name: 'email',
            placeholder: 'Correo Electronico'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Recuperar',
            handler: data => {
              if (data.email) {
               
                // logged in!
                this.envioOK();
              } else {
                // invalid login
                console.log('mensaje vaciui');
                return false;
              }
            }
          }
        ]
      });
      alert.present();
    }
    */
    MyApp.prototype.openCentroPage = function () {
        // this.nav.setRoot('PerfilCentroPage');
        this.nav.push('PerfilCentroPage');
    };
    MyApp.prototype.salirApp = function (nombre) {
        nombre == "Salir" ? this.menuActivo = false : this.nav.setRoot('InicioPage');
    };
    MyApp.prototype.getPorcentaje = function () {
        var enviar = ((900) / (this.userDataProfile.completadas * 100)) + '%';
        console.log(enviar);
        return enviar;
    };
    MyApp.prototype.facebookLogin = function () {
        var _this = this;
        this.loading2.present();
        //faceLogin
        //this.menuActivo = true;
        facebookConnectPlugin.getLoginStatus(function (success) {
            console.log(success);
            if (success.status === 'connected') {
                _this.apiProvider.verificarFBLog({ userId: success.authResponse.userID })
                    .then(function (data) {
                    console.log(data);
                    if (data.data.length > 0) {
                        console.log('mas0len');
                        _this.storage.set("usr_tok_by", data.data[0]);
                        _this.userDataProfile = data.data[0];
                        _this.menuActivo = true;
                        _this.loading2.dismissAll();
                    }
                    else {
                        console.log('menos0len');
                        _this.addUserFb(success.authResponse);
                        console.log('Ha ocurrido un error');
                    }
                });
            }
            else {
                console.log('getLoginStatus', success.status);
                facebookConnectPlugin.login(['email', 'public_profile'], _this.fbLoginSuccess, _this.fbLoginError);
            }
        });
    };
    MyApp.prototype.fbLoginError = function (error) {
        console.log('fbLoginEdrror', error);
        //mensajeAlerta(1, 'Ha ocurrido un error');
        //$ionicLoading.hide();
    };
    ;
    MyApp.prototype.goPagina = function (pagina) {
        console.log(pagina);
        if ('logout' == pagina) {
            this.apiProvider.cerrarS({ idCliente: this.userDataProfile.idCliente })
                .then(function (data) {
                console.log(data);
            });
            this.events.publish('userLogout');
            this.events.publish('loginOK');
            facebookConnectPlugin.logout(function (res) {
                //  this.events.publish('userLogout');
            }, function (e) {
                console.log('Error logout from Facebook', e);
                // this.events.publish('userLogout');
            });
            //cerrarS
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/app/app.html"*/'<ion-menu [content]="content" type=\'overlay\'>\n<!--   <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content style=\'    background-color: #fafafa;\'>\n\n  <div *ngIf=\'!menuActivo\'>\n  <div>\n    <div style="background-color:#36609F;margin: 20px 17px;border-radius: 30px;color: white;text-align: center;font-size: 15px;">\n    <img src="assets/imgs/Facebook.png" style="\n    vertical-align: middle;\n    margin-right: 10px;\n    ">\n    <img src="assets/imgs/Sep.png" style="\n    vertical-align: middle;\n    padding-top:  10px;\n    padding-bottom: 10px;\n    ">\n    <span (click)=\'facebookLogin()\' style="\n    ">Continuar con Facebook</span>\n    </div>\n\n<div style="\n    margin: 0px 17px;\n    text-align: center;\n    /* height: 300px; */\n">\n         <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n"><span style="\n    display: inline-block;\n    margin: 0px 10px;\n">OR</span> <img src="assets/imgs/Sep2.png" style="\n    width: 40%;\n    display: inline-block;\n    height: 2px;\n    vertical-align: middle;\n">\n    </div>\n\n    <div style="\n    margin: 0px 17px;">\n\n    <form [formGroup]="authForm" (ngSubmit)="doLogin(authForm.value)">\n\n              <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-mail" md="md-mail" ></ion-icon>\n            </ion-label>\n            <ion-input placeholder=\'Email\' class=\'inputT\'  formControlName="username" type="text"></ion-input>\n        </ion-item>\n  \n        <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n            <p>Email invalido</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n            <p>Email invalido</p>\n        </ion-item>        \n        <ion-item *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n            <p>Sorry, minimum username length is 8!</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">\n            <p>Sorry, maximum username length is 30!</p>\n        </ion-item>\n  \n                   <ion-item style=\'    padding: 0px 13px 0px 0px;\n    background-color: white !important;\n    border-radius: 60px;\n    border: solid 1px #EC527E;\n    margin: 26px 0px;\'>\n            <ion-label style=\' color: #e6e6e6;   position: absolute;\n    right: 16px;\n    font-size: 21px;\'>\n                  <ion-icon   ios="md-lock" md="md-lock" ></ion-icon>\n            </ion-label>\n            <ion-input placeholder=\'Contraseña\' class=\'inputT\'  formControlName="password" type="password"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n            <p>Contraseña invalida</p>\n        </ion-item>\n        <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n            <p>Contraseña invalida</p>\n        </ion-item>                \n  \n        <button ion-button full color="verdeApp" [disabled]="!authForm.valid" style="    border-radius: 40px;margin-top: 20px;" type="submit">Login</button>        \n    </form>\n\n\n    </div>\n\n  </div>\n\n\n    <ion-list style=\'margin-top:30px\'>\n\n<!--       <button style="background-color: #fafafa;margin-top: 10px; font-size: 15px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item *ngFor="let p of [\'Olvidé mi contraseña\']">\n       {{p}}\n\n      \n\n      </button>\n -->\n      <button (click)=\'recupeCon()\' style="background-color: #fafafa;margin-top: 10px; font-size: 15px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item >\n       Olvidé mi contraseña\n      \n\n      </button>\n\n\n\n      <button  (click)=\'registroNegocio()\' style="background-color: #fafafa;margin-top: 10px; font-size: 15px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item >\n       BeYou para negocios\n      \n\n      </button>\n\n\n      <button (click)=\'presentProfileModal2()\' style="background-color: #fafafa;margin-top: 10px; font-size: 15px;    border-bottom: solid 0.5px #80808045; color:#3d3f4a" menuClose ion-item >\n       Registrate en BeYou\n      \n\n      </button>\n\n\n\n\n\n    </ion-list>\n<div style="width:100%; height:40px"></div>\n\n\n    <div style="padding-left: 16px;\n    padding-right: 16px;\n     padding-bottom: 10px;\n    color: darkgray;\n    font-size: 15px;\n    position: fixed;\n    bottom: 0;\n    background: #fafafa;\n    z-index: 10;">Al registrarte e iniciar sesion en BeYou aceptas nuestros <a>terminos y condiciones de servicio</a></div>\n\n    </div>\n\n    <div *ngIf=\'menuActivo\'>\n        <ion-item style=\'margin-top: 0px;\' class=\'fixProfileMargin\' menuClose (click)=\'goPagina("CuentaPage")\' >\n          <ion-avatar item-start>\n\n          <img [hidden]=\'userDataProfile?.imagenFb\'  style=\'width:75px; height: 75px\'  src="http://50.116.17.150:3000/{{userDataProfile?.idFoto}}" \n        onError="this.src=\'assets/imgs/usuario.png\';">\n\n         <img *ngIf="userDataProfile?.imagenFb"   style=\'width:75px; height: 75px\' src="{{userDataProfile?.imagenFb}}" \n        onError="this.src=\'assets/imgs/usuario.png\';" />\n\n\n          </ion-avatar>\n          <h2 style="margin-bottom: 23px;">{{userDataProfile?.nombre || \'Desconocido\'}}</h2>\n          <div class="barraContainer">\n            <div class="barraProgress" [ngStyle]="{\'width\': porcenBarra}"  ><span>{{(userDataProfile?.exp) || 0}}/{{userDataProfile?.appexp || 0}}</span></div>\n          </div>\n        </ion-item>\n\n          <ion-list>\n          <button (click)=\'goPagina(p.pagina)\' style="background-color: #fafafa; font-size: 14px;    border-bottom: solid 1px rgb(226, 226, 226) !important; color:#3d3f4a" menuClose ion-item *ngFor="let p of [{nombre:\'Servicios\', img:\'listVerde.png\', pagina: \'InicioPage\'},{nombre:\'Reservaciones\', img:\'reservation.png\', pagina: \'MisReservasPage\'},\n          {nombre:\'Favoritos\', img:\'corazonVerde.png\', pagina: \'FavoritosPage\'},\n          {nombre:\'Opiniones\', img:\'opiniones.png\', pagina: \'OpinionesPage\'},\n          {nombre:\'Cupones / Regalos\', img:\'cupones.png\',  pagina: \'CuponesPage\'},\n          {nombre:\'Ofertas\', img:\'ofertas.png\', pagina: \'OfertasPage\' }]" >\n\n          {{p.nombre}}\n\n          <img style=\'float: right;\' src="assets/imgs/{{p.img}}">\n\n          </button>\n\n\n\n\n          </ion-list>\n\n\n          <ion-list style=\'    margin-top: 0px !important;\n    position: absolute;\n    width: 100%;\n    bottom: 0px;\n    margin-bottom: 0px !important;\'>\n          <button   (click)=\'goPagina(p.pagina)\' style="background-color: #fafafa; font-size: 14px;    border-bottom: solid 1px rgb(226, 226, 226) !important; color:#3d3f4a" menuClose ion-item *ngFor="let p of [\n          {nombre:\'Ajustes\', img:\'ajustes.png\', pagina: \'AjustesPage\'},\n          {nombre:\'Ayuda\', img:\'ayuda.png\', pagina: \'AyudaPage\'},\n          {nombre:\'Mi Cuenta\', img:\'perfil.png\', pagina: \'CuentaPage\'},\n          {nombre:\'Salir\', img:\'salir.png\', pagina: \'logout\' }]" >\n\n          {{p.nombre}}\n\n          <img style=\'float: right;\' src="assets/imgs/{{p.img}}">\n\n          </button>\n\n\n\n          </ion-list>\n\n\n\n\n\n    </div>\n\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */]) === "function" && _m || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[335]);
//# sourceMappingURL=main.js.map