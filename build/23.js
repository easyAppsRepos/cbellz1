webpackJsonp([23],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarModalPageModule", function() { return BuscarModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buscar_modal__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BuscarModalPageModule = (function () {
    function BuscarModalPageModule() {
    }
    BuscarModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buscar_modal__["a" /* BuscarModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__buscar_modal__["a" /* BuscarModalPage */]),
            ],
        })
    ], BuscarModalPageModule);
    return BuscarModalPageModule;
}());

//# sourceMappingURL=buscar-modal.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscarModalPage; });
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
 * Generated class for the BuscarModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscarModalPage = (function () {
    function BuscarModalPage(navCtrl, navParams, modalCtrl, loadingCtrl, events, alertCtrl, apiProvider, viewCtrl, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.apiProvider = apiProvider;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.date = new Date();
        this.options = {
            from: Date.now(),
            defaultDate: this.date,
            weekdays: ['D', 'L', 'M', 'K', 'J', 'V', 'S'],
            monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
        };
        this.seleccionIn = true;
        this.geocoder = new google.maps.Geocoder;
        this.filtroSeleccion = {};
        this.information = [{ nombre: 'Disponible en fecha', id: 1 },
            { nombre: 'Disponible en hora', id: 2 },
            { nombre: 'Servicio', id: 3 }];
        //plugin.google.maps
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.testCheckboxResult = [];
        this.resultadosCentro = [];
    }
    BuscarModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuscarModalPage');
    };
    BuscarModalPage.prototype.ionViewDidEnter = function () {
    };
    BuscarModalPage.prototype.updateSearchResults = function () {
        var _this = this;
        if (this.autocomplete.input == '') {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, function (predictions, status) {
            _this.autocompleteItems = [];
            _this.autocompleteItems = predictions;
            /*
                this.zone.run(() => {
                  predictions.forEach((prediction) => {
                    this.autocompleteItems.push(prediction);
                    console.log(prediction);
                  });
                });
            */
        });
    };
    BuscarModalPage.prototype.selectSearchResult = function (item) {
        var _this = this;
        //this.clearMarkers();
        this.autocomplete.input = item.description;
        this.seleccionIn = false;
        this.autocompleteItems = [];
        this.geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status === 'OK' && results[0]) {
                var position = {
                    lat: results[0].geometry.location.lat,
                    lng: results[0].geometry.location.lng
                };
                //results[0].geometry.location.toJSON()
                /*
                let marker = new google.maps.Marker({
                  position: results[0].geometry.location,
                  map: this.map,
                });
                */
                console.log(results[0].geometry.location.toJSON());
                _this.filtroSeleccion.lat = results[0].geometry.location.toJSON().lat;
                _this.filtroSeleccion.long = results[0].geometry.location.toJSON().lng;
                _this.filtroSeleccion.stringPlace = _this.autocomplete.input;
                //this.markers.push(marker);
                //this.map.setCenter(results[0].geometry.location);
            }
        });
    };
    BuscarModalPage.prototype.verificarL = function () {
        var re = (Object.keys(this.filtroSeleccion).length) > 0;
        console.log(re);
        return !re;
    };
    BuscarModalPage.prototype.closeModal = function () {
        //	this.events.publish('modalServices');
        this.viewCtrl.dismiss();
    };
    BuscarModalPage.prototype.filtroBusqueda = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Buscando ..." });
        loading.present();
        if (this.filtroSeleccion.abierto) {
            var d = new Date(Date.now());
            var n = d.getDay();
            var h = d.getHours();
            var m = d.getMinutes();
            console.log(n);
            this.filtroSeleccion.diaSemana = n;
            this.filtroSeleccion.horaSemana = h + ':' + m + ':00';
        }
        if (this.filtroSeleccion.disponible) {
            var d = new Date(Date.now());
            var n = d.getDay();
            this.filtroSeleccion.diaSemana = n;
        }
        if (this.horaSeleccionada) {
            this.filtroSeleccion.filtroHora = this.horaSeleccionada + ':00';
        }
        //  this.filtroSeleccion.fecha= this.fechaSeleccionada;
        if (this.fechaSeleccionada) {
            var d = new Date(this.fechaSeleccionada);
            console.log(d);
            var n = d.getDay();
            this.filtroSeleccion.fecha = n + 1;
        }
        this.filtroSeleccion.orden = this.ordenarPor;
        this.filtroSeleccion.hora = this.horaSeleccionada;
        this.filtroSeleccion.servicios = this.testCheckboxResult;
        console.log(this.filtroSeleccion);
        //console.log(this.ordenarPor);
        //console.log(Object.keys(this.filtroSeleccion).length);
        //buscarServiciosFiltro
        this.apiProvider.buscarServiciosFiltro(this.filtroSeleccion)
            .then(function (data) {
            loading.dismissAll();
            console.log(data);
            _this.resultadosCentro = data;
            _this.navCtrl.push('ResultadosPage', { 'resultados': data, 'filtro': _this.filtroSeleccion });
        });
    };
    BuscarModalPage.prototype.showCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create({ cssClass: 'alertCustomCss' });
        alert.setTitle('Filtra por categoria');
        alert.addInput({
            type: 'checkbox',
            label: 'Peluqueria',
            value: 1,
            checked: this.testCheckboxResult.includes(1)
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Rostro y Cuerpo',
            value: 2,
            checked: this.testCheckboxResult.includes(2)
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Uñas',
            value: 3,
            checked: this.testCheckboxResult.includes(3)
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Masaje',
            value: 4,
            checked: this.testCheckboxResult.includes(4)
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Depilacion',
            value: 5,
            checked: this.testCheckboxResult.includes(5)
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bienestar',
            value: 6,
            checked: this.testCheckboxResult.includes(6)
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Paquetes',
            value: 7,
            checked: this.testCheckboxResult.includes(7)
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Ofertas',
            value: 8,
            checked: this.testCheckboxResult.includes(8)
        });
        //this.testCheckboxResult
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
    BuscarModalPage.prototype.onChange = function ($event) {
        console.log($event);
        this.fechaSeleccionada = $event;
    };
    BuscarModalPage.prototype.toggleSection = function (i) {
        if (i == 2) {
            this.showCheckbox();
        }
        else if (i == 1) {
            //hora
        }
        else {
            this.information[i].open = !this.information[i].open;
        }
    };
    BuscarModalPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    BuscarModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-buscar-modal',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/buscar-modal/buscar-modal.html"*/'<!--\n  Generated template for the BuscarModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Filtrar busqueda</ion-title>\n\n\n\n    <ion-buttons end>\n    <button style="    font-size: 34px;" ion-button (tap)="closeModal()"><ion-icon ios="ios-close"></ion-icon></button>\n\n\n    </ion-buttons>\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n<ion-list style=\'margin:0px;\'>\n  <ion-item style=\'       background: white !important;  padding-top: 6px;\n    padding-bottom: 6px;   color: #444 !important;\'>\n    <ion-label >Palabra clave</ion-label>\n    <ion-input  [(ngModel)]="filtroSeleccion.palabra"  placeholder="Opcional"></ion-input>\n  </ion-item>\n\n  <ion-item  style=\'        background: white !important;    padding-top: 6px;\n    padding-bottom: 6px;   border-top: solid 1px lightgray; color: #444 !important;\'>\n    <ion-label  fixed>Lugar</ion-label>\n    <!-- <ion-input type="text" placeholder="Opcional"></ion-input> -->\n      <ion-input [(ngModel)]="autocomplete.input" (ionFocus)="seleccionIn=true"  (ionChange)="updateSearchResults()" placeholder="Busqueda por lugar"></ion-input>\n\n\n\n\n  </ion-item>\n</ion-list>\n \n\n       <ion-list [hidden]="autocompleteItems?.length == 0 || !seleccionIn">\n  <ion-item *ngFor="let item of autocompleteItems" tappable (tap)="selectSearchResult(item)">\n    {{ item.description }}\n  </ion-item>\n</ion-list>\n\n\n <div style="font-weight: 800;\n    font-size: 18px;\n    padding: 13px;\n    background: #9993;">Ordenar Por</div>\n\n<div style="    margin: 29px 15px;">\n  <ion-segment  style=\'background: rgb(245,246,247);\n    font-weight: 800;\' color=\'verdeApp\' [(ngModel)]="ordenarPor">\n    <ion-segment-button value="ASC">\n      Menor a mayor precio\n    </ion-segment-button>\n    <ion-segment-button value="DESC">\n      Mayor a menor precio\n    </ion-segment-button>\n  </ion-segment>\n\n</div>\n\n\n<ion-list style=\'margin-bottom: 0px\'>\n\n\n  <ion-item style=\'       background: white !important;    padding-top: 6px;\n    padding-bottom: 6px; border-top: solid 1px lightgray !important;\'>\n    <ion-label  style=\'    color: #444 !important;\'>Opiniones altas  primero</ion-label>\n    <ion-checkbox  item-right [(ngModel)]="filtroSeleccion.ordenOpiniones"></ion-checkbox>\n  </ion-item>\n\n\n\n</ion-list>\n\n\n\n <div style="font-weight: 800;\n    font-size: 18px;\n    padding: 13px;\n    background: #9993;">Mostrar solo</div>\n\n\n<ion-list style=\'margin-bottom: 0px\'>\n\n  <ion-item style=\'     background: white !important;     padding-top: 6px;\n    padding-bottom: 6px;  border-top: solid 1px lightgray;\'>\n    <ion-label style=\'    color: #444 !important;\'>Abierto ahora</ion-label>\n    <ion-checkbox  item-right [(ngModel)]="filtroSeleccion.abierto"></ion-checkbox>\n  </ion-item>\n\n\n  <ion-item style=\'     background: white !important;     padding-top: 6px;\n    padding-bottom: 10px;  border-top: solid 1px lightgray;\'>\n    <ion-label  style=\'    color: #444 !important;\'>Disponible hoy</ion-label>\n    <ion-checkbox  item-right [(ngModel)]="filtroSeleccion.disponible"></ion-checkbox>\n  </ion-item>\n\n\n\n</ion-list>\n\n\n<ion-item style=\'     background: white !important;     padding-top: 6px;\n    padding-bottom: 10px;  border-top: solid 1px lightgray;\'>\n  <ion-label style=\'    color: #444 !important;\'>Disponible en hora</ion-label>\n <ion-datetime style=\'    color: #444 !important;\' [(ngModel)]="horaSeleccionada" displayFormat="HH:mm" > </ion-datetime> \n\n</ion-item>\n\n\n\n\n		<ion-list class="accordion-list">\n			<!-- First Level -->\n			<ion-list-header style=\'background: white !important;\n    border-top: solid 1px lightgray;    padding-bottom: 10px;\'  [ngClass]="{\'borderSelected\': item.open, \'borderSelected2\': item.open && item.id==1}" *ngFor="let item of information; let i = index" no-lines no-padding [hidden]="item.id == 2">\n			<!-- Toggle Button -->\n\n\n			<button *ngIf="item.id !== 2" style=\'    color: #444 !important;background: white !important;\'  ion-item (tap)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n			<ion-icon class=\'btnList\' item-right  name="ios-add" *ngIf="!item.open"></ion-icon>\n			<ion-icon class=\'btnList\' item-right name="ios-remove" *ngIf="item.open"></ion-icon>\n\n\n{{item.nombre}} \n			{{ item.id == 1 ? (fechaSeleccionada || \'\') : \n			   item.id == 2 ? (horaSeleccionada  || \'\') : \n			   item.id == 3 ? (staffSeleccionado  || \'\') : \'\' }}\n\n      \n\n			</button>\n\n\n\n\n			<ion-list style=\'margin:0px !important\' *ngIf="item.open && item.id == 1" no-lines >\n			<!-- Second Level -->\n			\n				 <ion-calendar [(ngModel)]="filtroSeleccion.filtroFecha"\n	                  (onChange)="onChange($event)"\n	                  [options]="options"\n	                  type="string"\n	                  format="YYYY-MM-DD">\n	   			 </ion-calendar>\n			</ion-list>\n\n<ion-list class=\'backItem\' style=\'margin:0px !important\' *ngIf="item.open && item.id == 2" no-lines >\n<!-- \n			<ion-list class=\'backItem\' style=\'width: 100%;\n    display: table;\n    white-space: normal;\'  *ngIf="item.open && item.id == 2 "  radio-group [(ngModel)]="horaSeleccionada">\n \n\n				<ion-item class=\'itemHora\'>\n				<ion-label>11:25am</ion-label>\n				<ion-radio mode=\'wp\' value="11:25am" checked></ion-radio>\n				</ion-item>\n				<ion-item class=\'itemHora\' >\n				<ion-label>11:35am</ion-label>\n				<ion-radio mode=\'wp\' value="11:35am"></ion-radio>\n				</ion-item>\n				<ion-item class=\'itemHora\'>\n				<ion-label>11:55am</ion-label>\n				<ion-radio mode=\'wp\' value="11:55am" [disabled]="isDisabled"></ion-radio>\n				</ion-item>\n\n\n -->\n\n\n			</ion-list>\n\n\n\n\n\n\n\n			</ion-list-header>\n		</ion-list>\n\n		<div style="width:100%;height:50px;"></div>\n\n\n    <div style="width: 100%;\n    position: fixed;\n    z-index: 33;\n    bottom: 0px;\n    background: rgb(247,248,249);\n    padding-bottom: 6px;\n">\n          <button ion-button   (tap)=\'filtroBusqueda()\' class="botonVerdeFull">Buscar<ion-icon style=\'    margin-left: 10px !important;\' name="md-arrow-forward"  ></ion-icon> </button>\n\n\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/buscar-modal/buscar-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], BuscarModalPage);
    return BuscarModalPage;
}());

//# sourceMappingURL=buscar-modal.js.map

/***/ })

});
//# sourceMappingURL=23.js.map