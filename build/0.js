webpackJsonp([0,11],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_selectalertless__ = __webpack_require__(462);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InicioPageModule = (function () {
    function InicioPageModule() {
    }
    InicioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */], __WEBPACK_IMPORTED_MODULE_3__select_selectalertless__["a" /* SelectAlertless */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* InicioPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__select_selectalertless__["a" /* SelectAlertless */]]
        })
    ], InicioPageModule);
    return InicioPageModule;
}());

//# sourceMappingURL=inicio.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservapaquetePageModule", function() { return ReservapaquetePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservapaquete__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ion2_calendar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inicio_inicio_module__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //<--- here


var ReservapaquetePageModule = (function () {
    function ReservapaquetePageModule() {
    }
    ReservapaquetePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reservapaquete__["a" /* ReservapaquetePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reservapaquete__["a" /* ReservapaquetePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_5__inicio_inicio_module__["InicioPageModule"]
            ],
        })
    ], ReservapaquetePageModule);
    return ReservapaquetePageModule;
}());

//# sourceMappingURL=reservapaquete.module.js.map

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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
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
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = (function () {
    function InicioPage(menuCtrl, navCtrl, navParams, apiProvider, sanitizer, alertCtrl, loadingController, events, modalCtrl, zone, cdr) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.cdr = cdr;
        this.inicioSesion = false;
        this.optionSubcategorias = [];
        this.optionSubcategorias3 = [];
        this.subcategoriasT = {};
        this.goAnimacion2 = function (puntosV, totalV, puntosActual, idcc) {
            console.log(puntosV, totalV, puntosActual);
            var puntos = puntosV;
            var totall = totalV;
            var expUserM = puntosActual;
            var exp2Cont = 0;
            var valorInc = (puntosActual * 100) / 1500;
            var tiempo = 3000 / (puntos / 1);
            console.log(tiempo);
            _this.presentAlert2("\n      <div class=\"meter\">\n      <span class='porcenCrec' style=\"width:" + valorInc + "%;\"><span class=\"progress\"></span></span>\n      </div>\n\n<div class=\" itemCa\">\n \n</div>\n\n<div class=\"floating itemFlo\">\n  + " + puntos + " exp\n</div>\n\n      <div class=\"leyendaAlert\">\n\n      <img  style='display: flex;' src=\"assets/imgs/complete.png\">\n\n      <span style='display: flex;'>\n      Tu cita fue completada con exito, has ganado " + puntos + " de experiencia\n      </span>\n\n      </div>");
            var interval = setInterval(function () {
                puntos -= 1;
                //expUserM+=1;
                expUserM = (expUserM + 1) % 1500;
                exp2Cont++;
                //this.zone.run(()=>{   valorInc = parseInt(((puntosActual+exp2Cont)%1500)*100/1500) });
                valorInc = parseInt(((puntosActual + exp2Cont) % 1500) * 100 / 1500);
                _this.setLoadingText(expUserM.toString(), totall.toString(), valorInc.toString());
                if (puntos <= 0) {
                    clearInterval(interval);
                    if (idcc > 0) {
                        var profileModal = _this.modalCtrl.create('CongratsPage', { 'idCuponCliente': idcc }, {
                            enterAnimation: 'modal-scale-up-enter',
                            leaveAnimation: 'modal-scale-up-leave'
                        });
                        profileModal.present();
                    }
                }
            }, tiempo);
        };
        this.setLoadingText = function (text, total, inc) {
            var elem = document.querySelector("div.itemCa");
            if (elem)
                elem.innerHTML = text + ' / ' + (total);
            var elem2 = document.querySelector("span.porcenCrec");
            if (elem2)
                elem2.style.width = inc + '%';
            /*
              var el = document.querySelector('div');
            
            el.style.backgroundColor = 'green';
            */
        };
        /*
        goFF(){
          
        
           let profileModal = this.modalCtrl.create('LogindPage',{'total':120});
           profileModal.present();
        
        
        }
        */
        this.goAnimacion = function () {
            var profileModal = _this.modalCtrl.create('CongratsPage', { 'idCuponCliente': 56 }, {
                enterAnimation: 'modal-scale-up-enter',
                leaveAnimation: 'modal-scale-up-leave'
            });
            profileModal.present();
        };
        this.printOption = function (ee) {
            var eeArra = [];
            eeArra.push(parseInt(ee));
            console.log(_this.nombreCat2);
            console.log(ee);
            if (ee.length < 1) {
                return true;
            }
            else {
                var fs = { 'nombre': _this.seleccionCategoria, 'sub': eeArra, 'nombreCat2': _this.nombreCat2 };
                console.log(fs);
                _this.navCtrl.push('ListaServiciosPage', fs);
            }
        };
        this.printOption2 = function (ee) {
            console.log(ee);
            var subCatParam = _this.subcategoriasT[ee].map(function (item) { return item.idSubcategoria; });
            console.log(subCatParam);
            _this.navCtrl.push('MapaPage', { 'idCategoria': ee, 'idSubcategoriaS': subCatParam });
            /*
              console.log(ee);
              if(ee.length<1){
              return true;
              }
              else{
                var fs = {'nombre':this.seleccionCategoria,'sub':ee,'nombreCat2':this.nombreCat2};
              console.log(fs);
              this.navCtrl.push('ListaServiciosPage', fs);
              }
            */
        };
        this.categorias = [];
        this.expUser = 254;
        events.subscribe('loginOK', function () {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.apiProvider.verificarLogin()
                .then(function (data) {
                console.log(data);
                if (data) {
                    _this.inicioSesion = false;
                    _this.userDataProfile = data;
                }
                else {
                    _this.inicioSesion = true;
                }
            });
        });
        this.selectOptions = {
            title: 'Selecciona una Subcategoria',
            cssClass: 'select-alertless'
        };
        this.selectOptions2 = {
            title: 'Selecciona una Categoria',
            cssClass: 'select-alertless'
        };
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InicioPage');
        this.apiProvider.categoriasHome()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.categorias = data['categorias'] || [];
                _this.categorias.push({
                    appIcono: "",
                    estado: 1,
                    fechaCreacion: "2018-04-23T08:30:46.000Z",
                    idCategoria: 0,
                    idFoto: "uploads/imageU-1540846491613.png",
                    idImagenIcono: "Ofertas.png",
                    nombre: "Ofertas"
                });
                _this.categorias.push({
                    appIcono: "",
                    estado: 1,
                    fechaCreacion: "2018-04-23T08:30:46.000Z",
                    idCategoria: 0,
                    idFoto: "uploads/imageU-1540846550671.jpg",
                    idImagenIcono: "Paquetes.png",
                    nombre: "Paquetes"
                });
                _this.subcategoriasT = data['subcategorias'] || {};
            }
            else {
                console.log('Ha ocurrido un error');
            }
        });
        this.apiProvider.verificarLogin()
            .then(function (data) {
            if (data) {
                _this.apiProvider.getCitaPendientesN({ idCliente: data.idCliente })
                    .then(function (dataCall) {
                    console.log(dataCall);
                    if (dataCall && dataCall.citas && dataCall.citas.length > 0) {
                        _this.navCtrl.push('DetalleReservaPage', { idCita: dataCall.citas[0].idCita });
                    }
                    if (dataCall && dataCall.animaciones && dataCall.animaciones.length > 0) {
                        //if(dataCall.animaciones[0].idCC>0){
                        if (false) {
                            _this.apiProvider.quitarAnimacion({ idCliente: data.idCliente })
                                .then(function (dataCalls) {
                                if (dataCalls.data[0] && (dataCalls.data[0].idCliente > 0)) {
                                    _this.events.publish('userCreated', dataCalls.data[0]);
                                }
                                ;
                                var profileModal = _this.modalCtrl.create('CongratsPage', { 'idCuponCliente': dataCall.animaciones[0].idCC }, {
                                    enterAnimation: 'modal-scale-up-enter',
                                    leaveAnimation: 'modal-scale-up-leave'
                                });
                                profileModal.present();
                            });
                        }
                        else {
                            _this.apiProvider.quitarAnimacion({ idCliente: data.idCliente })
                                .then(function (dataCalls) {
                                if (dataCalls.data[0] && (dataCalls.data[0].idCliente > 0)) {
                                    _this.events.publish('userCreated', dataCalls.data[0]);
                                }
                                ;
                                _this.goAnimacion2(dataCall.animaciones[0].ga, dataCall.animaciones[0].ge, dataCall.animaciones[0].gi, dataCall.animaciones[0].idCC);
                            });
                        }
                        _this.navCtrl.push('OpinionesPage');
                    }
                });
            }
            else {
                console.log('no pendientes');
            }
        });
    };
    InicioPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.slides.autoplayDisableOnInteraction = false;
        this.apiProvider.verificarLogin()
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.inicioSesion = false;
            }
            else {
                _this.inicioSesion = true;
            }
        });
    };
    /*
    <div class=" itemCa">
     
    
    </div>
    
    */
    /*
    goAnimacion2 = () => {
        var puntos = 120;
        var totall=1500;
        var tiempo = 4000/(puntos/3);
        console.log(tiempo);
        var expUserM = 140;
    
    
          this.presentAlert2(`
          <div class="meter">
          <span style="width:`+(((puntos+expUserM)*100)/totall)+`%;"><span class="progress"></span></span>
          </div>
    
    <div class=" itemCa">
     
    </div>
    
    <div class="floating itemFlo">
      + `+puntos+` exp
    </div>
    
          <div class="leyendaAlert">
    
          <img  style='display: flex;' src="assets/imgs/complete.png">
    
          <span style='display: flex;'>
          Tu cita fue completada con exito, has ganado `+puntos+` de experiencia
          </span>
    
          </div>`);
    
    
        let interval = setInterval(()=>{
    
      puntos-=3;
      expUserM+=3;
    
      this.setLoadingText(expUserM,totall);
    
      if(puntos == 0) clearInterval(interval);
    },tiempo)
    
    
    
    }
    
    */
    InicioPage.prototype.presentAlert2 = function (mensaje) {
        var alert = this.alertCtrl.create({
            subTitle: this.sanitizer.bypassSecurityTrustHtml(mensaje)
        });
        alert.present();
    };
    InicioPage.prototype.goServicio = function (nombreServicio, nombreCat) {
        if (nombreServicio == 0) {
            console.log('nada');
            if (nombreCat == 'Paquetes') {
                this.navCtrl.push('PaquetesPage');
            }
            if (nombreCat == 'Ofertas') {
                this.navCtrl.push('OfertasPage');
            }
        }
        else {
            console.log(nombreServicio);
            this.nombreCat2 = nombreCat;
            this.seleccionCategoria = nombreServicio;
            this.optionSubcategorias = this.subcategoriasT[nombreServicio];
            this.option2 = null;
            this.cdr.detectChanges();
            this.select5.open();
        }
    };
    InicioPage.prototype.goServicio3 = function (ee) {
        var _this = this;
        var nombreD = this.categorias.filter(function (word) { return word.idCategoria == parseInt(_this.seleccionCategoria3); })[0].nombre;
        var nombreSD = this.optionSubcategorias3.filter(function (word) { return word.idSubcategoria == parseInt(ee); })[0].nombre;
        var sdd = { 'idCategoria': this.seleccionCategoria3, 'idSubcategoriaS': [ee], 'nombreCat': nombreD,
            'nombreSub': nombreSD };
        console.log(this.categorias);
        console.log(sdd);
        this.navCtrl.push('MapaPage', sdd);
    };
    InicioPage.prototype.borrarNGM = function () {
        this.option3 = null;
        this.cdr.detectChanges();
    };
    InicioPage.prototype.goServicio2 = function (idCategoriasS) {
        // this.nombreCat3=nombreCat;
        this.seleccionCategoria3 = idCategoriasS;
        // this.zone.run(()=>{  
        this.optionSubcategorias3 = this.subcategoriasT[idCategoriasS];
        //this.borrarNGM();  
        this.option3 = null;
        this.cdr.detectChanges();
        console.log(this.subcategoriasT);
        console.log(this.optionSubcategorias3);
        console.log(this.option3);
        this.select77.open();
        //}); 
        //this.cdr.detectChanges();
        // 
    };
    InicioPage.prototype.goServicioMapa = function () {
        this.select66.open();
    };
    InicioPage.prototype.goMapa = function () {
        //console.log(nombreServicio);
        //this.navCtrl.setRoot('MapaPage');
        this.navCtrl.push('MapaPage');
    };
    InicioPage.prototype.openMenu = function () {
        var profileModal = this.modalCtrl.create('LoginPage');
        profileModal.present();
    };
    InicioPage.prototype.setDefaultPic = function (nombre) {
        console.log(nombre);
        return "assets/imgs/" + nombre;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]) === "function" && _a || Object)
    ], InicioPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select5'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Select"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Select"]) === "function" && _b || Object)
    ], InicioPage.prototype, "select5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select66'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Select"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Select"]) === "function" && _c || Object)
    ], InicioPage.prototype, "select66", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('select77'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Select"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Select"]) === "function" && _d || Object)
    ], InicioPage.prototype, "select77", void 0);
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/inicio/inicio.html"*/'<ion-header>\n  <ion-navbar  color="headerColor">\n\n    <ion-buttons start>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n\n    <ion-title >\n<img src="assets/imgs/logoMenu.png" style="vertical-align: middle !important;">\n    </ion-title>\n\n      <ion-buttons end>\n\n        <button  (click)=\'goServicioMapa()\'   ion-button icon-only>\n        <ion-icon name="ios-pin" style=\'font-color:white;color:white\'></ion-icon>\n      </button>\n\n\n<!--       <button  ion-button icon-only>\n        <ion-icon name="pin"></ion-icon>\n      </button> -->\n\n\n    <!--      (click)=\'goMapa()\'   <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button> -->\n\n\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n  <div *ngIf=\'true\'>\n<!-- \n    <div style="width: 100%;" >\n    <img src="assets/imgs/imagenLogo.png" style="height: 100%; width:100%;margin-top:-75px;">\n    </div>\n -->\n  <div style="width: 100%;" >\n<ion-slides  class="slide-css"  autoplay="5000" loop="true" speed="700" \n                 pager="true" autoplayDisableOnInteraction = "false">\n\n  <ion-slide class=\'sliderImg\' style=\'background-image: url(http://50.116.17.150:3000/uploads/1banner)\' >\n   \n  </ion-slide> \n\n   <ion-slide class=\'sliderImg\' style=\'background-image: url(http://50.116.17.150:3000/uploads/2banner)\'>\n\n  </ion-slide>  \n\n  <ion-slide class=\'sliderImg\' style=\'background-image: url(http://50.116.17.150:3000/uploads/3banner)\' >\n  \n  </ion-slide>\n\n\n    </ion-slides>\n\n</div>\n\n    <div>\n      <div class="tituloSeccion">\n      Selecciona una Categoría\n      </div>\n\n<ion-grid style=\'margin-bottom: 50px\' >\n\n \n      <div *ngIf=\'categorias.length<1\' style="text-align: center;padding-top: 25%;">\n        <ion-spinner name="bubbles" style=\'color:darkgray\'></ion-spinner>\n      </div>\n\n\n\n  <div *ngFor="let n of categorias; let i = index">\n  <ion-row *ngIf=" i % 4 === 0" style=\'text-align: center;    max-width: 500px;\n    margin: 15px auto;\' > \n    <ion-col  *ngFor="let item of categorias.slice(i,i+4)" col-3 (click)=\'goServicio(item.idCategoria,item.nombre)\'>\n\n\n\n      <img  class=\'imagenCategoria\'  src="http://50.116.17.150:3000/{{item.idFoto}}" \n          onError="this.src=\'assets/imgs/ofertasVerde.png\';"  (load)="loaded = true"> \n          <span style="    display: block;">{{item.nombre}}</span>\n    </ion-col>\n\n  </ion-row>\n</div>\n</ion-grid>\n\n<select-alertless   #select5  style=\'display:none\' [selectOptions]="selectOptions" (ionChange)=\'printOption($event)\' [(ngModel)]="option2">\n\n      <ion-option *ngFor="let d of optionSubcategorias"  value=\'{{d.idSubcategoria}}\' >{{d.nombre}}</ion-option>\n\n</select-alertless>\n\n\n\n<!-- \n<select-alertless   #select66  style=\'display:none\' [selectOptions]="selectOptions2" (ngModelChange)=\'goServicio2($event)\' [ngModel]="option3"> -->\n\n  <select-alertless   #select66  style=\'display:none\' [selectOptions]="selectOptions2" (ngModelChange)=\'goServicio2($event)\' [ngModel]="option3">\n  \n\n      <ion-option *ngFor="let d of categorias"  value=\'{{d.idCategoria}}\' >{{d.nombre}}</ion-option>\n\n</select-alertless>\n\n\n\n<select-alertless   #select77  style=\'display:none\' [selectOptions]="selectOptions" (ionChange)=\'goServicio3($event)\' >\n\n      <ion-option *ngFor="let d of optionSubcategorias3"  value=\'{{d.idSubcategoria}}\' >{{d.nombre}}</ion-option>\n\n</select-alertless>\n\n\n\n\n<!-- nuevo\n\n    <ion-select     #select5  style=\'display:none\' [selectOptions]="selectOptions" \n     >\n      <ion-option  value="f" selected="true">Female</ion-option>\n      <ion-option value="m">Male</ion-option>\n    </ion-select>\n\nnuevo -->\n    </div>\n\n  </div>\n</ion-content>\n\n\n\n<ion-footer>\n <div style="text-align: center;margin-bottom: 15px !important;">\n   \n   \n    <button *ngIf=\'inicioSesion\' (click)=\'openMenu()\' ion-button style="background-color: #2FD99B;width: 80%; max-width: 500px;    border-radius: 35px;">Crear Cuenta</button>\n\n  </div>\n</ion-footer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/inicio/inicio.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _q || Object])
    ], InicioPage);
    return InicioPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SELECT_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectAlertless; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_base_input__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SELECT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectAlertless; }),
    multi: true
};
var SelectAlertless = (function (_super) {
    __extends(SelectAlertless, _super);
    function SelectAlertless(_app, form, config, elementRef, renderer, item, deepLinker, events) {
        var _this = _super.call(this, config, elementRef, renderer, 'select', [], form, item, null) || this;
        _this._app = _app;
        _this.config = config;
        _this.deepLinker = deepLinker;
        _this._disabled = false;
        _this._multi = false;
        _this._values = [];
        _this._texts = [];
        _this._text = '';
        _this._isOpen = false;
        _this._compareWith = __WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["isCheckedProperty"];
        _this.cancelText = 'Cancel';
        _this.okText = 'OK';
        _this.selectOptions = {};
        _this.interface = '';
        _this.selectedText = '';
        _this.ionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.ionCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.close = function () { return (_this.overlay ? _this.overlay.dismiss() : ''); };
        events.unsubscribe('select:close', _this.close);
        events.subscribe('select:close', _this.close);
        return _this;
    }
    SelectAlertless_1 = SelectAlertless;
    Object.defineProperty(SelectAlertless.prototype, "compareWith", {
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    SelectAlertless.prototype._click = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.open(ev);
    };
    SelectAlertless.prototype._keyup = function () {
        this.open();
    };
    /**
     * @hidden
     */
    SelectAlertless.prototype.getValues = function () {
        var values = Array.isArray(this._value) ? this._value : [this._value];
        Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["assert"])(this._multi || values.length <= 1, 'single only can have one value');
        return values;
    };
    Object.defineProperty(SelectAlertless.prototype, "_options", {
        get: function () {
            return this.__options;
        },
        set: function (val) {
            var _this = this;
            this.__options = val;
            if (!this._multi) {
                this.__options.forEach(function (option) {
                    if (option.ionSelect.observers.some(function (d) { return d.closed === false; }))
                        return;
                    option.ionSelect.subscribe(function (selectedValues) {
                        _this.value = selectedValues;
                        _this._isOpen = false;
                        _this.overlay.dismiss();
                    });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectAlertless.prototype.open = function (ev) {
        var _this = this;
        if (this.isFocus() || this._disabled) {
            return;
        }
        // the user may have assigned some options specifically for the alert
        var selectOptions = Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["deepCopy"])(this.selectOptions);
        // make sure their buttons array is removed from the options
        // and we create a new array for the alert's two buttons
        selectOptions.buttons = [{
                text: this.cancelText,
                role: 'cancel',
                handler: function () {
                    _this.ionCancel.emit(null);
                },
            }];
        // if the selectOptions didn't provide a title then use the label's text
        if (!selectOptions.title) {
            selectOptions.title = this.placeholder;
        }
        var options = this._options.toArray();
        // default to use the alert interface
        this.interface = 'alert';
        // user cannot provide inputs from selectOptions
        // alert inputs must be created by ionic from ion-options
        selectOptions.inputs = this._options.map(function (input) {
            return {
                type: (_this._multi ? 'checkbox' : 'radio'),
                label: input.text,
                value: input.value,
                title: _this.placeholder,
                checked: input.selected,
                disabled: input.disabled,
                handler: function (selectedOption) {
                    // Only emit the select event if it is being checked
                    // For multi selects this won't emit when unchecking
                    if (selectedOption.checked) {
                        input.ionSelect.emit(input.value);
                    }
                },
            };
        });
        var selectCssClass = 'select-alert';
        // create the alert instance from our built up selectOptions
        this.overlay = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Alert"](this._app, selectOptions, this._config);
        if (this._multi) {
            // use checkboxes
            selectCssClass += ' multiple-select-alert';
        }
        else {
            // use radio buttons
            selectCssClass += ' single-select-alert select-alertless';
        }
        // If the user passed a cssClass for the select, add it
        selectCssClass += selectOptions.cssClass ? ' ' + selectOptions.cssClass : '';
        this.overlay.setCssClass(selectCssClass);
        this.overlay.addButton({
            text: this.okText,
            handler: function (selectedValues) { return _this.value = selectedValues; }
        });
        this.overlay.present(selectOptions);
        this._isOpen = true;
        this.overlay.onDidDismiss(function () {
            _this._isOpen = false;
        });
    };
    Object.defineProperty(SelectAlertless.prototype, "multiple", {
        get: function () {
            return this._multi;
        },
        set: function (val) {
            this._multi = Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["isTrueProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectAlertless.prototype, "text", {
        get: function () {
            return (this._multi ? this._texts : this._texts.join());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectAlertless.prototype, "options", {
        /**
         * @private
         */
        set: function (val) {
            this._options = val;
            var values = this.getValues();
            if (values.length === 0) {
                // there are no values set at this point
                // so check to see who should be selected
                // we use writeValue() because we don't want to update ngModel
                this.writeValue(val.filter(function (o) { return o.selected; }).map(function (o) { return o.value; }));
            }
            else {
                this._inputUpdated();
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectAlertless.prototype._inputShouldChange = function (val) {
        return !Object(__WEBPACK_IMPORTED_MODULE_3_ionic_angular_util_util__["deepEqual"])(this._value, val);
    };
    /**
     * TODO: REMOVE THIS
     * @hidden
     */
    SelectAlertless.prototype._inputChangeEvent = function () {
        return this.value;
    };
    /**
     * @hidden
     */
    SelectAlertless.prototype._inputUpdated = function () {
        var _this = this;
        this._texts.length = 0;
        if (this._options) {
            this._options.forEach(function (option) {
                // check this option if the option's value is in the values array
                option.selected = _this.getValues().some(function (selectValue) {
                    return _this._compareWith(selectValue, option.value);
                });
                if (option.selected) {
                    _this._texts.push(option.text);
                }
            });
        }
        this._text = this._texts.join(', ');
        _super.prototype._inputUpdated.call(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectAlertless.prototype, "cancelText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectAlertless.prototype, "okText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectAlertless.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectAlertless.prototype, "selectOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectAlertless.prototype, "interface", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SelectAlertless.prototype, "selectedText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], SelectAlertless.prototype, "compareWith", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SelectAlertless.prototype, "ionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SelectAlertless.prototype, "ionCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UIEvent]),
        __metadata("design:returntype", void 0)
    ], SelectAlertless.prototype, "_click", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup.space'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SelectAlertless.prototype, "_keyup", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SelectAlertless.prototype, "multiple", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Option"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]])
    ], SelectAlertless.prototype, "options", null);
    SelectAlertless = SelectAlertless_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'select-alertless',
            template: '<div *ngIf="!_text" class="select-placeholder select-text">{{placeholder}}</div>' +
                '<div *ngIf="_text" class="select-text">{{selectedText || _text}}</div>' +
                '<div class="select-icon"><div class="select-icon-inner"></div></div>' +
                '<button aria-haspopup="true" ' +
                '[id]="id" ' +
                'ion-button="item-cover" ' +
                '[attr.aria-labelledby]="_labelId" ' +
                '[attr.aria-disabled]="_disabled" ' +
                'class="item-cover">' +
                '</button>',
            host: {
                '[class.select-disabled]': '_disabled'
            },
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"], useExisting: SelectAlertless_1, multi: true }],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Form"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Config"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Item"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["DeepLinker"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], SelectAlertless);
    return SelectAlertless;
    var SelectAlertless_1;
}(__WEBPACK_IMPORTED_MODULE_4_ionic_angular_util_base_input__["a" /* BaseInput */]));

//# sourceMappingURL=selectalertless.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservapaquetePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
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
 * Generated class for the ReservapaquetePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservapaquetePage = (function () {
    function ReservapaquetePage(navCtrl, navParams, modalCtrl, alertCtrl, loadingCtrl, events, apiProvider, cdr, zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.apiProvider = apiProvider;
        this.cdr = cdr;
        this.zone = zone;
        this.empleados = [];
        this.horasDisponibles = [];
        this.diaLibre = false;
        this.staffSeleccionado = 0;
        this.date = new Date();
        this.filterFav = function (user) { return _this.selectActi.indexOf(user.idServicio) != -1; };
        this.printOption = function (ee) {
            console.log(ee);
            _this.horaSeleccionada = ee;
            _this.actualizarHora(ee);
            /*
              console.log(ee);
              if(ee.length<1){
              return true;
              }
              else{
                var fs = {'nombre':this.seleccionCategoria,'sub':ee};
              console.log(fs);
              this.navCtrl.push('ListaServiciosPage', fs);
              }
            */
        };
        this.abrirSelect = function () {
            _this.cdr.detectChanges();
            _this.selectH.open();
        };
        this.getHorasDispo = function (data) {
            _this.apiProvider.getHorasDispo(data).then(function (data) {
                console.log(data);
                _this.loading.dismissAll();
                if (data) {
                    if (data.horasDispo.length > 0) {
                        _this.zone.run(function () {
                            _this.horasDisponibles = data.horasDispo.filter(function (word) { return word[0].disponibles > 0; });
                            if (_this.horasDisponibles.length > 0) {
                                _this.information[0].open = false;
                                _this.abrirSelect();
                            }
                            else {
                                _this.presentAlert();
                            }
                        });
                    }
                    else {
                        _this.presentAlert();
                    }
                    //if(data.horariosDispo == 0){
                    //this.diaLibre = true;
                    //}
                    //if(data.disponible == 1){
                    //this.diaLibre = true;
                    //}
                }
                else {
                    _this.presentAlert();
                }
            });
        };
        this.tipoReserva = 2;
        this.diasCerrado = [];
        this.reprogra = false;
        this.options = {
            from: Date.now(),
            defaultDate: this.date,
            disableWeeks: this.diasCerrado,
            weekdays: ['D', 'L', 'M', 'K', 'J', 'V', 'S'],
            weekStart: 1,
            monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
            daysConfig: [{
                    date: new Date(2018, 7, 25),
                    disable: true,
                    subTitle: 'Sin espacio'
                }],
        };
        this.selectOptions = {
            title: 'Horarios disponibles',
            cssClass: 'select-alertless'
        };
        this.arraySelected = [];
        this.diaCerrado = false;
        this.minH = '00:00';
        this.maxH = '00:00';
        this.serviciosCarro = [];
        this.serviciosAll = [];
        this.horario = [];
        this.horarioEspecial = [];
        this.loading = this.loadingCtrl.create({
            cssClass: "my-loading"
        });
        this.information = [{ nombre: 'Seleccionar Fecha', id: 1, open: true },
            { nombre: 'Seleccionar Hora', id: 2 }];
        //this.fechaSeleccionada = new Date(Date.now());
    }
    ReservapaquetePage.prototype.openServices = function () {
        var dataE = { idCategoria: this.navParams.get('idCategoria'),
            idCentro: this.navParams.get('idCentro') };
        var profileModal = this.modalCtrl.create('ModalServicesPage', dataE);
        profileModal.present();
        //  this.presentLoadingDefault();
    };
    ReservapaquetePage.prototype.ionViewDidLoad = function () {
        // this.selectActi = this.navParams.get('servicios');
        //this.selectActi = this.navParams.get('servicios');
        /*
              this.apiProvider.getCarrito()
              .then(data => {
              console.log(data);
                  this.serviciosCarro = data;
                  console.log(this.serviciosCarro);
        
              });
        */
        this.serviciosCarro = this.navParams.get('servicios');
        //if(this.navParams.get('reprogra')==true){this.reprogra=true;}
        this.getCentroInfo(this.navParams.get('idCentro'));
    };
    ReservapaquetePage.prototype.presentLoadingDefault = function () {
        this.loading.present();
    };
    ReservapaquetePage.prototype.getDattts = function (str) {
        if (str) {
            return __WEBPACK_IMPORTED_MODULE_4_moment__(str, 'YYYY-MM-DD HH:mm:ss').format('h:mm a');
        }
        else {
            return ' ';
        }
    };
    ReservapaquetePage.prototype.getServiciosCategoria = function () {
        var dataE = { idCategoria: this.navParams.get('idCategoria'),
            idCentro: this.navParams.get('idCentro') };
        this.apiProvider.getServiciosCategoria(dataE).then(function (data) {
            console.log(data);
        });
    };
    ReservapaquetePage.prototype.getEmpleadosDisponibles = function (data) {
        var _this = this;
        this.apiProvider.getEmpleadosDisponibles(data).then(function (data) {
            console.log(data);
            if (data) {
                _this.empleados = data;
            }
        });
    };
    ReservapaquetePage.prototype.getDattt = function (str) {
        if (str) {
            var gg = str + '.000';
            return gg.replace(/\s/g, "T");
        }
        else {
            return ' ';
        }
    };
    ReservapaquetePage.prototype.getCentroInfo = function (idCentro) {
        var _this = this;
        var dataPost = { idCentro: idCentro };
        console.log(dataPost);
        this.apiProvider.getCentroServicios2(dataPost)
            .then(function (data) {
            if (data) {
                _this.serviciosAll = data['servicios'];
                // this.tipoReserva = data['tipoReserva'][0].tipoReserva;
                //  this.empleados = data['empleados'];
                _this.horario = data['horario'];
                console.log(_this.tipoReserva);
                var sources2 = data['horarioEspecial'].filter(function (dia) { return dia.abierto == 0; }).map(function (item) {
                    var base = (item.fecha.split('T')[0].split('-'));
                    var ano = parseInt(base[0]);
                    var mes = parseInt(base[1]) - 1;
                    var dia = parseInt(base[2]);
                    return {
                        date: new Date(ano, mes, dia),
                        disable: true
                    };
                });
                console.log(sources2);
                var sources = [0, 1, 2, 3, 4, 5, 6].filter(function (dia) {
                    if (_this.horario.some(function (horarioDia) { return horarioDia.diaSemana == dia; })) {
                        if (_this.horario.some(function (horarioDia) { return ((horarioDia.diaSemana == dia) && (horarioDia.estado == 1)); })) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                    else {
                        return true;
                    }
                });
                _this.options = {
                    from: Date.now(),
                    defaultDate: _this.date,
                    disableWeeks: sources,
                    weekdays: ['D', 'L', 'M', 'K', 'J', 'V', 'S'],
                    weekStart: 1,
                    monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
                    daysConfig: sources2,
                };
                _this.horarioEspecial = data['horarioEspecial'];
            }
            else {
                console.log('Ha ocurrido un error');
            }
            console.log(data);
        });
    };
    ReservapaquetePage.prototype.getMinH = function (dia) {
        var horarioFix = '00:00';
        if (this.horario.find(function (x) { return x.diaSemana == dia; })) {
            this.diaCerrado = false;
            horarioFix = this.horario.find(function (x) { return x.diaSemana == dia; }).horaAbrir;
        }
        return horarioFix;
    };
    ReservapaquetePage.prototype.getMaxH = function (dia) {
        var horarioFix = '00:00';
        if (this.horario.find(function (x) { return x.diaSemana == dia; })) {
            horarioFix = this.horario.find(function (x) { return x.diaSemana == dia; }).horaCerrar;
        }
        return horarioFix;
    };
    ReservapaquetePage.prototype.quitarItem = function (idServicio) {
        var _this = this;
        if (this.serviciosCarro.length < 2) {
            return true;
        }
        else {
            this.apiProvider.sacarProducto(idServicio)
                .then(function (data) {
                _this.serviciosCarro = data;
                if (_this.fechaSeleccionada) {
                    _this.onChange(_this.fechaSeleccionada);
                }
                //  if(this.horaSeleccionada){
                // console.log('3de3d3');
                //this.actualizarHora(this.horaSeleccionada);
                // }
                // console.log(data);
            });
        }
    };
    ReservapaquetePage.prototype.goAddServicios = function () {
        //this.navCtrl.push('AddserviciosPage');
        //this.openServices();
        this.navCtrl.pop();
    };
    ReservapaquetePage.prototype.getMinutosCita = function (hora) {
        var duracionMinutos = 0;
        this.serviciosCarro.forEach(function (item) {
            duracionMinutos += item.duracion;
        });
        return duracionMinutos;
    };
    ReservapaquetePage.prototype.formatTime = function (n) {
        return n > 9 ? "" + n : "0" + n;
    };
    //n > 9 ? "" + n: "0" + n;
    ReservapaquetePage.prototype.actualizarHora = function (hora) {
        console.log(hora);
        this.staffSeleccionado = -1;
        this.empleados = [];
        var theAdd = new Date();
        theAdd.setHours(hora.split(':')[0], hora.split(':')[1], 0, 0);
        theAdd.setMinutes(theAdd.getMinutes() + this.serviciosCarro[0].duracionPaquete);
        this.horaFinalizacion = this.formatTime(theAdd.getHours()) + ":" + this.formatTime(theAdd.getMinutes()) + ':00';
        //cerrar cuando se selecciona
        this.information[1].open = true;
    };
    ReservapaquetePage.prototype.goReserva3 = function (fechaSeleccionada, horaSeleccionada) {
        var _this = this;
        //console.log((this.serviciosAll));
        var fechaInicio = fechaSeleccionada + ' ' + horaSeleccionada + ':00';
        var fechaFinal = fechaSeleccionada + ' ' + this.horaFinalizacion;
        var dataE = { 'fechaInicio': fechaInicio, 'fechaFinal': fechaFinal, 'fecha': fechaSeleccionada, 'hora': horaSeleccionada, 'horaF': this.horaFinalizacion, 'idCita': this.navParams.get('idCita'), 'idEmpleado': this.staffSeleccionado || 0, 'nombreStaff': this.nombreStaff || '' };
        var loading = this.loadingCtrl.create({ content: "Reprogramando Cita..." });
        loading.present();
        this.apiProvider.reproCitaApp(dataE)
            .then(function (data) {
            if (data) {
                console.log(data);
                if (data.affectedRows > 0) {
                    _this.navCtrl.pop();
                }
            }
            else {
                console.log('Ha ocurrido un error');
            }
            loading.dismissAll();
        });
    };
    ReservapaquetePage.prototype.goReserva = function (fechaSeleccionada, horaSeleccionada) {
        //console.log((this.serviciosAll));
        var fechaInicio = fechaSeleccionada + ' ' + horaSeleccionada + ':00';
        var fechaFinal = fechaSeleccionada + ' ' + this.horaFinalizacion;
        var dataE = { 'idCuponCliente': null, 'fechaInicio': fechaInicio, 'fechaFinal': fechaFinal, 'fecha': fechaSeleccionada, 'hora': horaSeleccionada,
            'idCentro': this.navParams.get('idCentro'), 'horaF': this.horaFinalizacion, 'servicios': this.serviciosCarro, 'idEmpleado': this.staffSeleccionado || 0, 'nombreStaff': this.nombreStaff || '' };
        this.navCtrl.push('ConfirmacionpaquetePage', dataE);
    };
    ReservapaquetePage.prototype.openCalendar = function () {
        var _daysConfig = [];
        //  for (let i = 0; i < 31; i++) {
        _daysConfig.push({
            date: new Date(2018, 8, 25),
            disable: true
        });
        // }
        var options = {
            title: 'BASIC',
            daysConfig: _daysConfig
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            console.log(date);
        });
    };
    ReservapaquetePage.prototype.onChange = function ($event) {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: "Verificando Disponibilidad" });
        this.loading.present();
        this.diaLibre = false;
        this.diaCerrado = false;
        var encontrado = false;
        this.information[1].open = false;
        var t1 = '00:00';
        var t2 = '00:00';
        var cerrado = false;
        var d = new Date($event);
        var n = d.getDay();
        console.log(n);
        if (n == 6) {
            n = 0;
        }
        else {
            n = n + 1;
        }
        this.diaNSeleccionado = n;
        console.log($event);
        this.fechaSeleccionada = $event;
        console.log(this.horarioEspecial);
        console.log(this.fechaSeleccionada);
        console.log(this.horario);
        if (this.tipoReserva == 1 || this.tipoReserva == '1') {
            this.horaSeleccionada = '';
        }
        if (this.horario.find(function (x) { return (x.diaSemana == n && x.estado == '1'); })) {
            if (this.horarioEspecial && this.horarioEspecial.length > 0) {
                this.horarioEspecial.forEach(function (item) {
                    if (item.fecha.split('T')[0] == _this.fechaSeleccionada) {
                        encontrado = true;
                        t2 = item.horaAbrir;
                        t1 = item.horaCerrar;
                        cerrado = item.abierto;
                    }
                });
                if (encontrado) {
                    if (cerrado == 1 || cerrado == '1') {
                        this.maxH = t1;
                        this.minH = t2;
                    }
                    else {
                        this.diaCerrado = true;
                    }
                }
                else {
                    this.maxH = this.getMaxH(n);
                    this.minH = this.getMinH(n);
                }
            }
            else {
                this.maxH = this.getMaxH(n);
                this.minH = this.getMinH(n);
            }
        }
        else {
            this.diaCerrado = true;
        }
        if (this.tipoReserva == 2 || this.tipoReserva == '2') {
            console.log(this.minH, this.maxH);
            this.loading.dismiss();
            this.information[0].open = false;
            this.information[1].open = true;
        }
        else {
            var env = { fechaSeleccionada: this.fechaSeleccionada,
                duracion: this.getMinutosCita(),
                horaAbrir: this.minH,
                horaCerrar: this.maxH,
                idCategoria: this.navParams.get('idCategoria'),
                idCentro: this.navParams.get('idCentro')
            };
            console.log(env);
            this.getHorasDispo(env);
        }
    };
    ReservapaquetePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Ocupacion llena',
            subTitle: 'No hay empleados elegibles, intenta otra fecha',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    ReservapaquetePage.prototype.toggleSection = function (i) {
        if (i == 1) {
            if (this.tipoReserva == 2 || this.tipoReserva == '2') {
                this.information[i].open = !this.information[i].open;
            }
            else {
                if (this.horasDisponibles.length > 0) {
                    this.abrirSelect();
                }
                else {
                    this.presentAlert();
                }
            }
        }
        else {
            this.information[i].open = !this.information[i].open;
        }
    };
    ReservapaquetePage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    ReservapaquetePage.prototype.radioChecked = function (checkE) {
        this.nombreStaff = checkE;
        console.log(checkE);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selectH'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Select"])
    ], ReservapaquetePage.prototype, "selectH", void 0);
    ReservapaquetePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reservapaquete',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/reservapaquete/reservapaquete.html"*/'<!--\n  Generated template for the ReservaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  	<ion-navbar  >\n    <ion-title>Reserva</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<div>\n<!--   \n		<div style="    height: 30px;\n    margin: 22px;" *ngIf=\'serviciosCarro\' class="paqueteI">\n\n			<span style="float: left;">\n				<b>Paquete </b> {{serviciosCarro[0]?.nombrePaquete}}</span>\n			<span style="float: right;color:#EC527E; margin-right: 10px"> <b>Precio Total </b>${{serviciosCarro[0]?.precioPaquete.toFixed(2)}}</span>\n\n			\n		</div> -->\n\n\n	<div class="itemReserva"  style="text-align: center" >\n	\n	<div style="\n    display: inline-block;\n    width: 70%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n">\n		<span style="    font-size: 16px;\n    color: #444;"><b>Paquete </b> {{serviciosCarro[0]?.nombrePaquete}}</span>\n    <br>\n			<span style="color:#EC527E; font-size: 16px; margin-right: 10px"> <b>Precio Total </b>${{serviciosCarro[0]?.precioPaquete.toFixed(2)}}</span>\n</div>\n\n</div>\n\n\n<!-- <div class="itemReserva" *ngFor="let n of serviciosAll | filtrofav: filterFav"  > -->\n	<div class="itemReserva" *ngFor="let n of serviciosCarro"  >\n	<img src="http://50.116.17.150:3000/{{n.imagenCategoria}}" \n        onError="this.src=\'assets/imgs/reservation.png\';" style="    max-height: 40px;\n    margin-right: 13px;">\n	<div style="\n    display: inline-block;\n    width: 70%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n">\n		<span style="    font-size: 17px;\n    color: #444;">{{n.nombreServicio}}</span>\n<br>\n 		<p style=" color: #888;\n    margin-top: 8px;\n    display: inline-block;\n    margin-right: 14px;text-decoration: line-through">${{n.precioServicio}}</p>\n\n<!--\n    		<span style="    color: darkgrey;\n    margin-top: 8px;\n    display: inline-block;">{{n.duracion}}min</span> -->\n\n\n\n\n	</div>\n\n</div>\n\n\n</div>\n<div style="margin-top:20px;width:90%; margin-left:5%">\n\n\n\n		<ion-list class="accordion-list">\n			<!-- First Level -->\n			<ion-list-header  [ngClass]="{\'borderSelected\': item.open, \'borderSelected2\': item.open && item.id==1}" *ngFor="let item of information; let i = index" no-lines no-padding\n			 [hidden]=\'(!fechaSeleccionada && (item.id == 2 || item.id == 3)) || \n			 		   (!horaSeleccionada && (item.id == 3))\' >\n			<!-- Toggle Button -->\n			<button style=\'    background: white !important;\n    border-bottom: solid 1px #d3d3d352\'  ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n			<ion-icon class=\'btnList\' item-right  name="ios-add" *ngIf="!item.open"></ion-icon>\n			<ion-icon class=\'btnList\' item-right name="ios-remove" *ngIf="item.open"></ion-icon>\n\n			{{ item.id == 1 ? (fechaSeleccionada || item.nombre) : \n			   item.id == 2 ? ( item.nombre) : \n			   item.id == 3 ? ( item.nombre) : item.nombre }}\n\n			</button>\n\n			<ion-list style=\'margin:0px !important\' *ngIf="item.open && item.id == 1" no-lines >\n			<!-- Second Level -->\n			\n				 <ion-calendar [(ngModel)]="date"\n	                  (onChange)="onChange($event)"\n	                  [options]="options"\n	                  type="string"\n\n	                  format="YYYY-MM-DD">\n	   			 </ion-calendar>\n			</ion-list>\n\n\n			<ion-list class=\'backItem\' style=\'width: 100%;\n    display: table;\n    white-space: normal;\'  [hidden]=\'!fechaSeleccionada\' *ngIf="item.open && item.id == 2 "  radio-group [(ngModel)]="horaSeleccionada">\n\n<div [hidden]=\'diaCerrado\'>\n\n\n\n<ion-item  *ngIf=\'(tipoReserva==2 || tipoReserva=="2")\'  style=\'background: white !important;     padding-top: 6px;\n    padding-bottom: 10px;  border-top: solid 1px lightgray;\'>\n  <ion-label style=\'    color: #444 !important;\'>Hora de Inicio</ion-label>\n <ion-datetime (ionChange)=\'actualizarHora(horaSeleccionada)\' style=\'    color: #444 !important;\' [(ngModel)]="horaSeleccionada" displayFormat="hh:mm A" pickerFormat="HH:mm"  minuteValues="0,30"  max="{{maxH}}" min="{{minH}}"> </ion-datetime> \n\n</ion-item>\n\n<!-- <ion-item (click)=\'abrirSelect()\'   *ngIf=\'true\'  style=\'background: white !important;     padding-top: 6px;\n    padding-bottom: 10px;  border-top: solid 1px lightgray;\'>\n  <ion-label style=\'    color: #444 !important;\'>Hora de Inicio</ion-label>\n\n\n\n</ion-item> -->\n\n<ion-item *ngIf=\'horaSeleccionada && (tipoReserva==1 || tipoReserva=="1")\'  style=\'     background: white !important;     padding-top: 6px;\n    padding-bottom: 10px;  border-top: solid 1px lightgray;\'>\n  <ion-label style=\'    color: #444 !important;\'>Hora Inicio</ion-label>\n <ion-datetime [disabled]=\'true\' style=\'    color: #444 !important;\' [(ngModel)]="horaSeleccionada" displayFormat="hh:mm A"> </ion-datetime> \n\n</ion-item>\n<ion-item *ngIf=\'horaSeleccionada\'  style=\'     background: white !important;     padding-top: 6px;\n    padding-bottom: 10px;  border-top: solid 1px lightgray;\'>\n  <ion-label style=\'    color: #444 !important;\'>Finaliza aprox.</ion-label>\n <ion-datetime [disabled]=\'true\' style=\'    color: #444 !important;\' [(ngModel)]="horaFinalizacion" displayFormat="hh:mm A" > </ion-datetime> \n\n</ion-item>\n\n\n</div>\n<div style="    margin: 25px;\n    text-align: center;\n    font-size: 16px;\n    font-family: sans-serif;\n    font-weight: 400;\n    color: lightcoral;" [hidden]=\'!diaCerrado\'>\n	\n	Centro cerrado este dia\n</div>\n\n\n	<!-- 			<ion-item class=\'itemHora\'>\n				<ion-label>11:25am</ion-label>\n				<ion-radio mode=\'wp\' value="11:25am" checked></ion-radio>\n				</ion-item>\n				<ion-item class=\'itemHora\' >\n				<ion-label>11:35am</ion-label>\n				<ion-radio mode=\'wp\' value="11:35am"></ion-radio>\n				</ion-item>\n				<ion-item class=\'itemHora\'>\n				<ion-label>11:55am</ion-label>\n				<ion-radio mode=\'wp\' value="11:55am" [disabled]="isDisabled"></ion-radio>\n				</ion-item> -->\n\n\n\n\n\n			</ion-list>\n\n\n\n<!-- 						<ion-list class=\'backItem\' style=\'width: 100%;\n    display: table;\n    white-space: normal;\'  *ngIf="item.open && item.id == 3 "  radio-group [(ngModel)]="staffSeleccionado">\n\n\n\n\n				<ion-item class=\'avatarSelect\' *ngFor="let n of empleados" >\n				<ion-label>\n				<ion-avatar item-start>\n				<img src="http://50.116.17.150:3000/{{n.idFoto}}" \n        onError="this.src=\'assets/imgs/usuario.png\';" style="display: inline-block;">\n				<div style="    width: 100%;display: inline-block;margin-left: 7px;">\n				<h2  style="margin-bottom: 4px;">{{n.nombre}}</h2>\n				<p style="    white-space: normal;\n    width: calc(100% - 50px);">{{n.descripcion}}</p>\n				</div>\n				</ion-avatar>\n				</ion-label>\n				\n				<ion-radio mode=\'wp\' value="{{n.idEmpleado}}" (ionSelect)="radioChecked(n.nombre)"></ion-radio>\n				</ion-item>\n\n				<ion-item class=\'avatarSelect\' *ngIf=\'(tipoReserva==2 || tipoReserva=="2")\' >\n				<ion-label>\n				<ion-avatar item-start>\n				<img src="assets/imgs/usuario.png" style="display: inline-block;">\n				<div style="    width: 100%;display: inline-block;margin-left: 7px;">\n				<h2  style="margin-bottom: 4px;">Cualquier Personal</h2>\n\n				</div>\n				</ion-avatar>\n				</ion-label>\n				\n				<ion-radio mode=\'wp\' value="-1" (ionSelect)="radioChecked(\'Cualquier Personal\')"></ion-radio>\n				</ion-item>\n\n\n\n<div style="    margin: 25px;\n    text-align: center;\n    font-size: 16px;\n    font-family: sans-serif;\n    font-weight: 400;\n    color: lightcoral;" *ngIf=\'!(tipoReserva==2 || tipoReserva=="2") && (empleados.length<1) || !(empleados)\'>\n	\n	<ion-spinner name="bubbles"></ion-spinner>\n</div>\n\n\n\n			</ion-list> -->\n\n\n\n\n\n\n\n			</ion-list-header>\n		</ion-list>\n\n\n<div style="    width: 100%;\n    margin-top: 30px;\n    margin-bottom: 30px;">\n	\n	    <button  *ngIf="!reprogra && fechaSeleccionada && horaSeleccionada && staffSeleccionado && staffSeleccionado !== 0 && (serviciosCarro?.length>0)" (click)=\'goReserva(fechaSeleccionada,horaSeleccionada)\' ion-button class="botonVerdeFulls"\n	    	>Confirmar {{fechaSeleccionada}} - {{getDattts(fechaSeleccionada+\' \'+horaSeleccionada+\':00\') }}</button>\n\n</div>\n\n</div>\n\n\n\n<select-alertless   #selectH style=\'display:none\'  [selectOptions]="selectOptions" (ionChange)=\'printOption($event)\' >\n\n      <ion-option *ngFor="let d of horasDisponibles"  value="{{d[0].inicio.split(\' \')[1].substring(0, 5)}}" >\n   		<!--   \n    {{d[0].inicio.split(\' \')[1].substring(0, 5)}} - {{d[0].fin.split(\' \')[1].substring(0, 5)}} \n		-->\n\n\n		   {{getDattts(d[0].inicio)}} - {{getDattts(d[0].fin)}} \n  		</ion-option>\n\n</select-alertless>\n\n</ion-content>\n\n\n<!-- <ion-footer style=\'    background-color: #f7f8f9 !important;\'>\n  <ion-toolbar >\n\n\n    <button (click)=\'goReserva()\' ion-button class="botonVerdeFull">Agendar Cita<ion-icon style=\'    margin-left: 10px !important;\' name="md-arrow-forward"></ion-icon> </button>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n -->\n\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/reservapaquete/reservapaquete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ReservapaquetePage);
    return ReservapaquetePage;
}());

//# sourceMappingURL=reservapaquete.js.map

/***/ })

});
//# sourceMappingURL=0.js.map