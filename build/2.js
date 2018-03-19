webpackJsonp([2],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaPageModule", function() { return ReservaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reserva__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReservaPageModule = (function () {
    function ReservaPageModule() {
    }
    ReservaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reserva__["a" /* ReservaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__reserva__["a" /* ReservaPage */])
            ],
        })
    ], ReservaPageModule);
    return ReservaPageModule;
}());

//# sourceMappingURL=reserva.module.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__);
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
 * Generated class for the ReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservaPage = (function () {
    function ReservaPage(navCtrl, navParams, modalCtrl, loadingCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.date = new Date();
        this.options = {
            from: Date.now(),
            defaultDate: this.date,
            weekdays: ['D', 'L', 'M', 'K', 'J', 'V', 'S'],
            monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
        };
        this.loading = this.loadingCtrl.create({
            cssClass: "my-loading"
        });
        events.subscribe('modalServices', function () {
            // user and time are the same arguments passed in `events.publish(user, time)`
            console.log('recargarServicios');
            _this.loading.dismiss();
            _this.loading = _this.loadingCtrl.create({
                cssClass: "my-loading"
            });
        });
        this.information = [{ nombre: 'Seleccionar Fecha', id: 1 },
            { nombre: 'Seleccionar Hora', id: 2 },
            { nombre: 'Seleccionar Personal', id: 3 }];
        //this.fechaSeleccionada = new Date(Date.now());
    }
    ReservaPage.prototype.openServices = function () {
        var profileModal = this.modalCtrl.create('ModalServicesPage', { serviceId: 1 });
        profileModal.present();
        //  this.presentLoadingDefault();
    };
    ReservaPage.prototype.ionViewDidLoad = function () {
        console.log('ioiewidLoadeservaPage');
        // this.openCa lendar();
        //new Date( Date.now());
    };
    ReservaPage.prototype.presentLoadingDefault = function () {
        this.loading.present();
    };
    ReservaPage.prototype.goAddServicios = function () {
        //this.navCtrl.push('AddserviciosPage');
        this.openServices();
    };
    ReservaPage.prototype.goReserva = function () {
        this.navCtrl.push('ConfirmarReservaPage');
        //this.openServices();
    };
    ReservaPage.prototype.openCalendar = function () {
        var options = {
            title: 'BASIC',
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            console.log(date);
        });
    };
    ReservaPage.prototype.onChange = function ($event) {
        console.log($event);
        this.fechaSeleccionada = $event;
    };
    ReservaPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    ReservaPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    ReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reserva',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/reserva/reserva.html"*/'<!--\n  Generated template for the ReservaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  	<ion-navbar  >\n    <ion-title>Reserva</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<div>\n\n\n<div class="itemReserva" >\n	<img src="assets/imgs/tijeras.png" >\n	<div style="\n    display: inline-block;\n    width: 70%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n">\n		<span style="    font-size: 17px;\n    color: #444;">Hair Cut</span>\n		<p style="\n    margin-top:  1px;\n    margin-bottom: 1px;    color: #777;\n">Lorem ipsum dolor sit amet, lectus voluptas ipsum felis nec massa vel.</p>\n		<span style="    color: #EC527E;\n    margin-top: 8px;\n    display: block;">$60.00</span>\n\n    <button ion-button style="    position: absolute;\n    top: 0;\n    right: 0px;\n    margin-right: 13px;\n    margin-top: 5px;\n    font-size: 27px;\n    width: 30px;\n    background: none;height: 30px;padding: 6px;\n    color: #888;"><ion-icon ios="ios-close"></ion-icon></button>\n	</div>\n\n</div>\n\n<div class="itemReserva" >\n	<img src="assets/imgs/tijeras.png" >\n	<div style="\n    display: inline-block;\n    width: 70%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n">\n		<span style="    font-size: 17px;\n    color: #444;">Hair Cut</span>\n		<p style="\n    margin-top:  1px;\n    margin-bottom: 1px;    color: #777;\n">Lorem ipsum dolor sit amet, lectus voluptas ipsum felis nec massa vel.</p>\n		<span style="    color: #EC527E;\n    margin-top: 8px;\n    display: block;">$60.00</span>\n\n    <button ion-button style="    position: absolute;\n    top: 0;\n    right: 0px;\n    margin-right: 13px;\n    margin-top: 5px;\n    font-size: 27px;\n    width: 30px;\n    background: none;height: 30px;padding: 6px;\n    color: #888;"><ion-icon ios="ios-close"></ion-icon></button>\n	</div>\n\n</div>\n\n\n    <button (click)=\'goAddServicios()\' ion-button class="botonVerdeFull">Agregar mas servicios </button>\n\n\n</div>\n<div style="margin-top:20px;width:90%; margin-left:5%">\n\n\n\n		<ion-list class="accordion-list">\n			<!-- First Level -->\n			<ion-list-header  [ngClass]="{\'borderSelected\': item.open, \'borderSelected2\': item.open && item.id==1}" *ngFor="let item of information; let i = index" no-lines no-padding>\n			<!-- Toggle Button -->\n			<button style=\'    background: white !important;\n    border-bottom: solid 1px #d3d3d352\'  ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n			<ion-icon class=\'btnList\' item-right  name="ios-add" *ngIf="!item.open"></ion-icon>\n			<ion-icon class=\'btnList\' item-right name="ios-remove" *ngIf="item.open"></ion-icon>\n\n			{{ item.id == 1 ? (fechaSeleccionada || item.nombre) : \n			   item.id == 2 ? (horaSeleccionada  || item.nombre) : \n			   item.id == 3 ? (staffSeleccionado  || item.nombre) : item.nombre }}\n\n			</button>\n\n			<ion-list style=\'margin:0px !important\' *ngIf="item.open && item.id == 1" no-lines >\n			<!-- Second Level -->\n			\n				 <ion-calendar [(ngModel)]="date"\n	                  (onChange)="onChange($event)"\n	                  [options]="options"\n	                  type="string"\n\n	                  format="MMM DD YYYY">\n	   			 </ion-calendar>\n			</ion-list>\n\n\n			<ion-list class=\'backItem\' style=\'width: 100%;\n    display: table;\n    white-space: normal;\'  *ngIf="item.open && item.id == 2 "  radio-group [(ngModel)]="horaSeleccionada">\n				<ion-item class=\'itemHora\'>\n				<ion-label>11:25am</ion-label>\n				<ion-radio mode=\'wp\' value="11:25am" checked></ion-radio>\n				</ion-item>\n				<ion-item class=\'itemHora\' >\n				<ion-label>11:35am</ion-label>\n				<ion-radio mode=\'wp\' value="11:35am"></ion-radio>\n				</ion-item>\n				<ion-item class=\'itemHora\'>\n				<ion-label>11:55am</ion-label>\n				<ion-radio mode=\'wp\' value="11:55am" [disabled]="isDisabled"></ion-radio>\n				</ion-item>\n\n\n\n\n\n\n			</ion-list>\n\n\n\n						<ion-list class=\'backItem\' style=\'width: 100%;\n    display: table;\n    white-space: normal;\'  *ngIf="item.open && item.id == 3 "  radio-group [(ngModel)]="staffSeleccionado">\n\n\n\n				<ion-item class=\'avatarSelect\'>\n				<ion-label>\n				<ion-avatar item-start>\n				<img src="assets/imgs/ben.png"  style="display: inline-block;">\n				<div style="    width: 100%;display: inline-block;margin-left: 7px;">\n				<h2  style="margin-bottom: 4px;">Carl Smith</h2>\n				<p style="    white-space: normal;\n    width: calc(100% - 50px);">Especialista en tintes</p>\n				</div>\n				</ion-avatar>\n				</ion-label>\n				\n				<ion-radio mode=\'wp\' value="Carl Smith" ></ion-radio>\n				</ion-item>\n\n\n\n				<ion-item class=\'avatarSelect\'>\n				<ion-label>\n				<ion-avatar item-start>\n				<img src="assets/imgs/ben.png"  style="display: inline-block;">\n				<div style="    width: 100%;display: inline-block;margin-left: 7px;">\n				<h2 style="margin-bottom: 4px;">Lilian Gen</h2>\n				<p style="    white-space: normal;\n    width: calc(100% - 50px);">Recomendado en el servicio</p>\n				</div>\n				</ion-avatar>\n				</ion-label>\n				\n				<ion-radio mode=\'wp\' value="Lilian Gen" ></ion-radio>\n				</ion-item>\n\n\n\n\n				<ion-item class=\'avatarSelect\'>\n				<ion-label>\n				<ion-avatar item-start>\n				<img src="assets/imgs/ben.png"  style="display: inline-block;">\n				<div style="    width: 100%;display: inline-block;margin-left: 7px;">\n				<h2  style="margin-bottom: 4px;">Marty McFly</h2>\n				<p style="    white-space: normal;\n    width: calc(100% - 50px);">Especialista en tintes</p>\n				</div>\n				</ion-avatar>\n				</ion-label>\n				\n				<ion-radio mode=\'wp\' value="Marty McFly" ></ion-radio>\n				</ion-item>\n\n\n\n			</ion-list>\n\n\n\n\n\n\n\n			</ion-list-header>\n		</ion-list>\n\n\n<div style="    width: 100%;\n    margin-top: 30px;\n    margin-bottom: 30px;">\n	\n	    <button  *ngIf="fechaSeleccionada && horaSeleccionada" (click)=\'goReserva()\' ion-button class="botonVerdeFulls">Confirmar {{fechaSeleccionada}},{{horaSeleccionada}}</button>\n\n</div>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n\n<!-- <ion-footer style=\'    background-color: #f7f8f9 !important;\'>\n  <ion-toolbar >\n\n\n    <button (click)=\'goReserva()\' ion-button class="botonVerdeFull">Agendar Cita<ion-icon style=\'    margin-left: 10px !important;\' name="md-arrow-forward"></ion-icon> </button>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n -->\n\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/reserva/reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], ReservaPage);
    return ReservaPage;
}());

//# sourceMappingURL=reserva.js.map

/***/ })

});
//# sourceMappingURL=2.js.map