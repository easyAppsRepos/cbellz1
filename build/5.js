webpackJsonp([5],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisReservasPageModule", function() { return MisReservasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_reservas__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //<--- here
var MisReservasPageModule = (function () {
    function MisReservasPageModule() {
    }
    MisReservasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mis_reservas__["a" /* MisReservasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__mis_reservas__["a" /* MisReservasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], MisReservasPageModule);
    return MisReservasPageModule;
}());

//# sourceMappingURL=mis-reservas.module.js.map

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

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisReservasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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
 * Generated class for the MisReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisReservasPage = (function () {
    function MisReservasPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.reservas = [];
    }
    //ionViewDidLoad() {
    MisReservasPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.section = "one";
        console.log('ionViedLoad MisReservasPage');
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.dataUser = data;
                _this.getReservas();
                //this.menuActivo = true;
            }
            else {
                console.log('error');
                // this.menuActivo = false;
            }
        });
    };
    MisReservasPage.prototype.filterFav = function (user) {
        //console.log(user);
        return user.estado == 1 || user.estado == 2 || user.estado == 5;
    };
    MisReservasPage.prototype.filterFav2 = function (user) {
        console.log(user);
        return user.estado == 3 || user.estado == 4;
    };
    MisReservasPage.prototype.goDetalle = function (idCita) {
        //this.navCtrl.push('DetalleReservaPage');
        this.navCtrl.push('DetalleReservaPage', { idCita: idCita });
    };
    MisReservasPage.prototype.getMes = function (fecha) {
        var date = new Date(fecha), locale = "es-es", month = date.toLocaleString(locale, { month: "short" });
        return month;
    };
    MisReservasPage.prototype.getDia = function (fecha) {
        var date = new Date(fecha), day = date.getDate();
        return day;
    };
    MisReservasPage.prototype.getHora = function (fecha) {
        var date = new Date(fecha), hora = date.getHours(), min = date.getMinutes();
        return ("0" + hora).slice(-2) + ':' + ("0" + min).slice(-2);
    };
    MisReservasPage.prototype.getDattt = function (str) {
        if (str) {
            return __WEBPACK_IMPORTED_MODULE_3_moment__["utc"](str).format('h:mm a');
        }
        else {
            return ' ';
        }
    };
    MisReservasPage.prototype.getNumMen = function (n) {
        var num = parseInt(n);
        if (num > 1) {
            return num - 1;
        }
        else {
            return num;
        }
    };
    MisReservasPage.prototype.getReservas = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando" });
        loading.present();
        this.apiProvider.reservasUser({ idCliente: this.dataUser.idCliente })
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.reservas = data || [];
            }
            else {
                console.log('Ha ocurrido un error');
            }
            loading.dismiss();
        });
    };
    MisReservasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mis-reservas',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/mis-reservas/mis-reservas.html"*/'<!--\n  Generated template for the MisReservasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n\n      <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    \n    <ion-title>Mis Reservaciones</ion-title>\n  </ion-navbar>\n\n\n<ion-segment mode="md" [(ngModel)]="section">\n    <ion-segment-button   style=\'font-size: 15px;text-transform: none !important;\' value="one" >\n	       <span> \n	       <img  *ngIf=\'section=="one"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/calendarBlanco.png">\n	       <img  *ngIf=\'!(section=="one")\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/calendarGris.png">\n	        Activas</span>\n	    </ion-segment-button>\n\n\n\n	    <ion-segment-button  value="two" style=\'\n    	font-size: 15px;text-transform: none !important;\' >\n    	<span>\n	      <img  *ngIf=\'section=="two"\' style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/equisBlanca.png"> \n	      <img  *ngIf=\'!(section=="two")\'  style=\'vertical-align: middle;margin-right: 10px;\' src="assets/imgs/equisGris.png"> \n\n	      \n\n	      Inactivas\n	       </span>\n	    </ion-segment-button>\n</ion-segment>\n\n\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n\n\n<div [ngSwitch]="section">\n    <ion-list mode="md" *ngSwitchCase="\'one\'">\n\n    	<div  style=\'    margin: 30px;\n    text-align: center;\n    font-size: 16px;\n    color: darkgray;\' *ngIf="(reservas | filtrofav: filterFav).length == 0" >No hay reservas en esta seccion\n\n\n    	</div>\n		<div class=\'cardReserva\' *ngFor="let n of reservas | filtrofav: filterFav" (click)=\'goDetalle(n.idCita)\'>\n\n		<div>\n				<div style="display: inline-block;    width: 100%;">\n				<div  class="fechaItem" \n				[ngClass]="{\'citaE3sb3\':n.estado == 3,\'citaE4sb3\':n.estado == 4, \'citaE2sb3\': n.estado == 5, \'citaE1sb3\':n.estado == 2, \'citaE0sb3\':n.estado == 1}">\n						<span style="display: block; text-transform: uppercase;">{{getMes(n.horaInicio)}}</span>\n						<span style="display: block;font-size: 27px;font-weight: 800">{{getDia(n.horaInicio)}}</span>\n						<span *ngIf=\'n.horaInicio\' style="display: block;">{{getDattt(n.horaInicio)}}</span>\n				</div>\n				<div style="    display: inline-block;vertical-align: middle;    max-width: 58%;">\n				<span *ngIf=\'n.estado==1\' class=\'estadoReservas\' style="color: #cabf2b;">\n				PENDIENTE CONFIRMAR\n				</span>\n				<span *ngIf=\'n.estado==2\'  class=\'estadoReservas\' style="color:#3ca1ff ">\n				CONFIRMADA\n				</span>\n				<span *ngIf=\'n.estado==3\'  class=\'estadoReservas\' style="color: #77dd77;">\n				COMPLETA\n				</span>\n				<span *ngIf=\'n.estado==5\'  class=\'estadoReservas\' style="color: #ffb34c">\n				REPROGRAMADA - PENDIENTE</span>\n				<span *ngIf=\'n.estado==4\' class=\'estadoReservas\' style="color: #ff1e1e;">\n				CANCELADA\n				</span>\n				<span style="font-size: 15px;\n    color: #8a8888;    font-weight: 500;">\n				{{n.nombreCentro}}\n				</span>\n				<span  class=\'estadoReservas2\' style="color: #999;">\n				{{n.servicioMain}} <span *ngIf=\'n.cantServicios>1\'> y {{getNumMen(n.cantServicios)}} más </span> \n				</span>\n				</div>\n				<ion-icon class=\'iconR\' name="arrow-forward"></ion-icon>\n				</div>\n\n		</div>\n		</div>\n\n\n		\n\n\n    </ion-list>\n\n    <ion-list  mode="md" *ngSwitchCase="\'two\'">\n\n\n    	<div  style=\'    margin: 30px;\n    text-align: center;\n    font-size: 16px;\n    color: darkgray;\' *ngIf="(reservas | filtrofav: filterFav2).length == 0" >No hay reservas en esta seccion\n\n    \n    	</div>\n\n    	\n\n			<div class=\'cardReserva\' *ngFor="let n of reservas | filtrofav: filterFav2" (click)=\'goDetalle(n.idCita)\'>\n\n		<div>\n				<div style="display: inline-block;    width: 100%;">\n				<div  class="fechaItem">\n						<span style="display: block; text-transform: uppercase;">{{getMes(n.horaInicio)}}</span>\n						<span style="display: block;font-size: 27px;font-weight: 800">{{getDia(n.horaInicio)}}</span>\n						<span *ngIf=\'n.horaInicio\' style="display: block;">{{getDattt(n.horaInicio)}}</span>\n				</div>\n				<div style="    display: inline-block;vertical-align: middle;    max-width: 58%;">\n				<span *ngIf=\'n.estado==1\' class=\'estadoReservas\' style="color: rgb(250,195,0);">\n				PENDIENTE CONFIRMAR\n				</span>\n				<span *ngIf=\'n.estado==2\'  class=\'estadoReservas\' style="color: #2FD99B;">\n				CONFIRMADA\n				</span>\n				<span *ngIf=\'n.estado==3\'  class=\'estadoReservas\' style="color: #2FD99B;">\n				COMPLETA\n				</span>\n				<span *ngIf=\'n.estado==5\'  class=\'estadoReservas\' style="color: #2FD99B;">\n				REPROGRAMADA - PENDIENTE</span>\n				<span *ngIf=\'n.estado==4\' class=\'estadoReservas\' style="color: #EC527E;">\n				CANCELADA\n				</span>\n				<span style="font-size: 15px;\n    color: #8a8888;">\n				{{n.nombreCentro}}\n				</span>\n				<span  class=\'estadoReservas2\' style="color: #999;">\n				{{n.servicioMain}} \n				<span *ngIf=\'n.cantServicios>1\'> y {{getNumMen(n.cantServicios)}} más </span> \n				con {{n.nombreEmpleado}}\n				</span>\n				</div>\n				<ion-icon class=\'iconR\' name="arrow-forward"></ion-icon>\n				</div>\n\n		</div>\n\n\n		</div>\n\n\n\n\n\n\n    </ion-list>\n\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/mis-reservas/mis-reservas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], MisReservasPage);
    return MisReservasPage;
}());

//# sourceMappingURL=mis-reservas.js.map

/***/ })

});
//# sourceMappingURL=5.js.map