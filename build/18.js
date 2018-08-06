webpackJsonp([18],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleReservaPageModule", function() { return DetalleReservaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_reserva__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DetalleReservaPageModule = (function () {
    function DetalleReservaPageModule() {
    }
    DetalleReservaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalle_reserva__["a" /* DetalleReservaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__detalle_reserva__["a" /* DetalleReservaPage */]),
            ],
        })
    ], DetalleReservaPageModule);
    return DetalleReservaPageModule;
}());

//# sourceMappingURL=detalle-reserva.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleReservaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__);
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
 * Generated class for the DetalleReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalleReservaPage = (function () {
    function DetalleReservaPage(alertCtrl, navCtrl, navParams, modalCtrl, apiProvider, loadingCtrl, events, zone) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.zone = zone;
        this.date = new Date();
        this.options = {
            from: Date.now(),
            defaultDate: this.date,
            weekdays: ['D', 'L', 'M', 'K', 'J', 'V', 'S'],
            weekStart: 1,
            monthPickerFormat: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
        };
        this.horario = [];
        this.dataCentro = {};
        this.diaCerrado = false;
        this.edicionFecha = false;
        this.minH = '00:00';
        this.maxH = '00:00';
    }
    DetalleReservaPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad DetalleReservaPage');
        this.getDataCita(this.navParams.get('idCita'));
    };
    DetalleReservaPage.prototype.getEstado = function (idEstado) {
        var estado = '';
        idEstado == 1 ? estado = "Pendiente confirmar" :
            idEstado == 5 ? estado = "Reprogramada" :
                idEstado == 2 ? estado = "Confimada" :
                    idEstado == 3 ? estado = "Completada" :
                        idEstado == 4 ? estado = "Cancelada" : estado = "";
        return estado;
    };
    DetalleReservaPage.prototype.getMinH = function (dia) {
        var horarioFix = '00:00';
        if (this.horario.find(function (x) { return x.diaSemana === dia; })) {
            this.diaCerrado = false;
            horarioFix = this.horario.find(function (x) { return x.diaSemana === dia; }).horaAbrir;
        }
        return horarioFix;
    };
    DetalleReservaPage.prototype.getMaxH = function (dia) {
        var horarioFix = '00:00';
        if (this.horario.find(function (x) { return x.diaSemana === dia; })) {
            horarioFix = this.horario.find(function (x) { return x.diaSemana === dia; }).horaCerrar;
        }
        return horarioFix;
    };
    DetalleReservaPage.prototype.onChange = function ($event) {
        var d = new Date($event);
        var n = d.getDay();
        console.log(n);
        console.log($event);
        // this.fechaSeleccionada = $event;
        this.horaSeleccionada = '';
        if (this.horario.find(function (x) { return x.diaSemana === n; })) {
            console.log(this.horario.find(function (x) { return x.diaSemana === n; }));
            this.maxH = this.getMaxH(n);
            this.minH = this.getMinH(n);
        }
        else {
            this.diaCerrado = true;
        }
    };
    DetalleReservaPage.prototype.openCalendar = function () {
        var options = {
            title: 'BASIC',
        };
        var myCalendar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3_ion2_calendar__["CalendarModal"], {
            options: options
        });
        myCalendar.present();
        myCalendar.onDidDismiss(function (date, type) {
            console.log(date);
        });
    };
    DetalleReservaPage.prototype.getDataCita = function (idCita) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando...", cssClass: "my-loading" });
        loading.present();
        var dataE = { idCita: idCita };
        console.log(dataE);
        this.apiProvider.getDataCita(dataE)
            .then(function (data) {
            console.log(data);
            if (data) {
                _this.zone.run(function () {
                    _this.dataCita = data['cita'][0] || [];
                    _this.horaSeleccionada = _this.dataCita.horaInicio;
                    _this.horaFinalizacion = _this.dataCita.horaFinalEsperado;
                    _this.fechaCalendario = _this.dataCita.horaInicio;
                    _this.servicios = data['servicios'] || [];
                    _this.horario = data['horario'];
                });
            }
            else {
                console.log('Ha ocurrido un error');
            }
            loading.dismissAll();
        });
    };
    DetalleReservaPage.prototype.comoLlegar = function () {
        console.log(this.dataCentro.latitud);
        launchnavigator.navigate([this.dataCita.latitud, this.dataCita.longitud]);
    };
    DetalleReservaPage.prototype.getPrecioDescuento = function (precio) {
        var retorno = 0;
        if (this.dataCita.descuento) {
            var descuento = this.dataCita.descuento;
            var precioN = precio;
            retorno = precioN - (precioN * (descuento / 100));
        }
        else {
            retorno = precio;
        }
        return retorno.toFixed(2);
    };
    DetalleReservaPage.prototype.llamar = function () {
        if (this.dataCita.telefono) {
            var num = this.dataCita.telefono;
            window.plugins.CallNumber.callNumber(function (suc) { console.log(suc); }, function (err) { console.log(err); }, num, true);
        }
    };
    DetalleReservaPage.prototype.alertaAcep = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirmacion exitosa',
            subTitle: 'Tu reserva ha sido confirmada',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    DetalleReservaPage.prototype.aceptarReprogramacion = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando ..." });
        loading.present();
        this.apiProvider.aceptarReprogramacion({ idCita: this.dataCita.idCita })
            .then(function (data) {
            console.log(data);
            loading.dismissAll();
            if (data.affectedRows > 0) {
                _this.alertaAcep();
                _this.getDataCita(_this.dataCita.idCita);
                _this.edicionFecha = false;
            }
            else {
                alert('Ha ocurrido un error');
            }
        });
        console.log('aceptarReprogramacion');
        console.log(this.dataCita);
    };
    DetalleReservaPage.prototype.alertaRepro = function () {
        var alert = this.alertCtrl.create({
            title: 'Reprogramacion exitosa',
            subTitle: 'La reservacion fue reprogramada, te notificaremos cuando sea aceptada',
            buttons: ['Cerrar']
        });
        alert.present();
    };
    DetalleReservaPage.prototype.guardarReprogramacion = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando ..." });
        loading.present();
        var horaNueva = '';
        var finaliza = '';
        if (isNaN(Date.parse(this.horaSeleccionada))) {
            horaNueva = this.fechaCalendario + ' ' + this.horaSeleccionada + ':00';
        }
        else {
            horaNueva = this.horaSeleccionada.split('T')[0] + ' ' + (this.horaSeleccionada.split('T')[1]).substring(0, 7);
        }
        finaliza = this.horaFinalizacion.split('T')[0] + ' ' + (this.horaFinalizacion.split('T')[1]).substring(0, 7);
        //console.log(this.horaFinalizacion);
        // console.log(this.horaSeleccionada);
        //console.log(this.fechaCalendario);
        var dataE = { idCita: this.dataCita.idCita,
            horaInicio: horaNueva,
            horaFinalEsperado: finaliza
        };
        console.log(dataE);
        this.apiProvider.reprogramarCita(dataE)
            .then(function (data) {
            loading.dismissAll();
            console.log(data);
            if (data.affectedRows > 0) {
                _this.alertaRepro();
                _this.getDataCita(_this.dataCita.idCita);
                _this.edicionFecha = false;
            }
            else {
                alert('Ha ocurrido un error');
            }
        });
    };
    DetalleReservaPage.prototype.reprogramarCita = function () {
        var _this = this;
        this.apiProvider.addProductoz(this.servicios)
            .then(function (data) {
            _this.goReserva(_this.servicios[0].idCategoria);
        });
    };
    //idcen idcat
    DetalleReservaPage.prototype.goReserva = function (categoria) {
        //servicios: this.arraySelected
        var dataE = { 'servicios': [], 'idCita': this.dataCita.idCita, 'idCentro': this.dataCita.idCentro, centro: this.dataCentro, 'cupon': this.dataCita.idCuponCliente, idCategoria: categoria, reprogra: true };
        console.log(dataE);
        this.navCtrl.push('ReservaPage', dataE);
        // this.navCtrl.push('ReservaPage');
    };
    DetalleReservaPage.prototype.reprogramarCita2 = function () {
        console.log('reprogramarCita');
        console.log(this.dataCita);
        this.edicionFecha = true;
    };
    DetalleReservaPage.prototype.cancelarEdicion = function () {
        this.horaSeleccionada = this.dataCita.horaInicio;
        this.horaFinalizacion = this.dataCita.horaFinalEsperado;
        this.fechaCalendario = this.dataCita.horaInicio;
        this.edicionFecha = false;
    };
    DetalleReservaPage.prototype.cancelarCita = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Cancelar Reserva',
            message: 'Seguro que deseas cancelar esta reserva?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        var dataE = { idCita: _this.dataCita.idCita };
                        console.log(dataE);
                        _this.apiProvider.cancelarCita(dataE)
                            .then(function (data) {
                            console.log(data);
                            if (data) {
                                console.log('borrada');
                                _this.navCtrl.pop();
                            }
                            else {
                                console.log('Ha ocurrido un error');
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DetalleReservaPage.prototype.getMinutosCita = function (hora) {
        var duracionMinutos = 0;
        this.servicios.forEach(function (item) {
            duracionMinutos += item.duracion;
        });
        console.log(duracionMinutos);
        return duracionMinutos;
    };
    DetalleReservaPage.prototype.formatTime = function (n) {
        return n > 9 ? "" + n : "0" + n;
    };
    //n > 9 ? "" + n: "0" + n;
    DetalleReservaPage.prototype.actualizarHora = function (hora) {
        var theAdd = new Date(hora);
        console.log(Date.parse(theAdd));
        if (isNaN(Date.parse(theAdd))) {
            if (hora !== '') {
                theAdd = new Date(this.fechaCalendario + 'T' + hora + ':00Z');
                theAdd.setMinutes(theAdd.getMinutes() + this.getMinutosCita());
                this.horaFinalizacion = new Date(theAdd).toISOString();
            }
        }
        else {
            console.log(theAdd);
            theAdd.setMinutes(theAdd.getMinutes() + this.getMinutosCita());
            this.horaFinalizacion = theAdd.toISOString();
        }
    };
    DetalleReservaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalle-reserva',template:/*ion-inline-start:"/Users/jose/Documents/beyouApp/beYou/src/pages/detalle-reserva/detalle-reserva.html"*/'<!--\n  Generated template for the DetalleReservaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mi Reservación</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div *ngIf=\'dataCita\'>\n\n\n\n	<div>\n		<div><span  class="tituloBook">Reserva ID</span> <span  class="subBook">{{dataCita?.idCita}}</span></div>\n		<div style="margin-top: 10px;">\n            <span class="tituloBook">Estado</span> \n            <span class="subBook">{{getEstado(dataCita?.estado)}}</span>\n        </div>\n\n        <div style="margin-top: 10px;">\n            <span class="tituloBook">Staff</span> \n            <span class="subBook">{{(dataCita?.nombreEmpleado || \'Cualquier personal\')}}</span>\n        </div>\n        <div style="margin-top: 10px;">\n            <span class="tituloBook">Fecha</span> \n            <span class="subBook">{{(dataCita?.horaInicio.split(\'T\')[0] || \' \')}}</span>\n        </div>\n\n        <div *ngIf=\'dataCita?.estado == 5\' >\n		<span style="    font-size: 15px;\n    color: #777;\n    display: inline-block;\n    margin-top: 12px;">Motivo de reprogramacion</span>\n		<p class="parrafoHead">{{dataCita?.comentarioEstado}}</p>\n        </div>\n\n		<div style="\n    display: inline-block;    width: 100%;    margin-top: 20px;\n">\n	<img src="http://50.116.17.150:3000/{{dataCita?.idFoto}}" \n        onError="this.src=\'assets/imgs/fotoComercio.png\';"  style="\n    display: inline-block;\n    height: 90px;\n    width: 90px !important;\n    vertical-align: top;\n">\n	<div style="\n    display: inline-block;\n    width: calc(100% - 114px);\n    margin-left:  20px;\n">\n		<span style="margin: 2px 0px 0px 0px;\n    font-size: 19px;\n    color: #333;">{{dataCita?.nombre}}</span>\n		<span style="margin-top:10px" class="itemComercio">{{dataCita?.direccion}}</span>\n		<span style="margin-top:10px" class="itemComercio"></span>\n\n\n	</div>\n	</div>\n\n\n\n	</div>\n\n\n <div style="    width: 100%;\n    text-align: center;\n margin-top: 20px;">\n\n	<button (click)=\'llamar()\' [disabled]="!dataCita?.telefono"  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;" > <img style="margin-right:10px" src="assets/imgs/telefono.png"> Llamar</button> \n\n	<button  (click)=\'comoLlegar()\' style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;"  color=\'verdeApp\' ion-button> <img style="margin-right:10px" src="assets/imgs/agregadosBlanco.png">Cómo llegar</button>\n\n\n\n</div>\n\n\n\n<!-- \n    <ion-item  style=\' margin-top: 15px    \'>\n                <ion-calendar \n                    [(ngModel)]="fechaCalendario"\n                      [options]="options"\n                          (onChange)="onChange($event)"\n                      type="string"\n\n                      format="YYYY-MM-DD" [readonly]=\'!edicionFecha\'>\n                 </ion-calendar>\n</ion-item>\n -->\n<ion-list class=\'backItem\' style=\'width: 100%;    margin-top: 23px;    margin-bottom: 23px;\n    display: table;\n    white-space: normal;    background: transparent !important; \'>\n\n\n<div [hidden]=\'diaCerrado\'>\n<ion-item style=\'     padding-top: 6px;padding-left: 0px !important;\n    padding-bottom: 10px;  border-top: solid 1px lightgray;\'>\n  <ion-label style=\'    color: #444 !important;\'>Hora de Inicio</ion-label>\n <ion-datetime (ionChange)=\'actualizarHora(horaSeleccionada)\' style=\'    color: #444 !important;\' [(ngModel)]="horaSeleccionada" displayFormat="hh:mm A"  minuteValues="0,15,30,45"  max="{{maxH}}" min="{{minH}}" [disabled]=\'!edicionFecha\'> </ion-datetime> \n\n</ion-item>\n\n<ion-item   style=\'     padding-top: 6px;padding-left: 0px !important;\n    padding-bottom: 10px;  border-top: solid 1px lightgray;\'>\n  <ion-label style=\'    color: #444 !important;\'>Finaliza aprox.</ion-label>\n <ion-datetime *ngIf=\'horaSeleccionada\' [disabled]=\'true\' style=\'    color: #444 !important;\' [(ngModel)]="horaFinalizacion" displayFormat="hh:mm A" > </ion-datetime> \n\n</ion-item>\n</div>\n\n<div style="    margin: 25px;\n    text-align: center;\n    font-size: 16px;\n    font-family: sans-serif;\n    font-weight: 400;\n    color: lightcoral;" [hidden]=\'!diaCerrado\'>\n    \n    Centro cerrado este dia\n</div>\n</ion-list>\n\n\n\n <div *ngIf=\'dataCita?.estado == 5\'  style="width: 100%;\n    text-align: center; display: inline-block;">\n\n   \n\n    <button  (click)=\'aceptarReprogramacion()\' style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;float:left"  color=\'verdeApp\' ion-button> Aceptar</button>\n\n    <button  (click)=\'cancelarCita()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right;" >Cancelar</button> \n\n\n</div>\n\n\n\n\n <div *ngIf=\'dataCita?.estado == 2 || dataCita?.estado == 1\'  style="     width: 100%;\n    text-align: center; display: inline-block;\n   ">\n\n<div  [hidden]=\'edicionFecha\'>\n     <button [disabled]=\'dataCita?.estado == 2\' (click)=\'reprogramarCita()\' style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%; float:left"  color=\'verdeApp\' ion-button> Reprogramar</button>\n\n\n    <button (click)=\'cancelarCita()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" >Cancelar</button> \n\n\n</div>\n<div [hidden]=\'!edicionFecha\'>\n    \n\n    <button [disabled]=\'horaSeleccionada==""\'  (click)=\'guardarReprogramacion()\' style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;float:left"  color=\'verdeApp\' ion-button> Guardar cambio</button> \n\n    <button (click)=\'cancelarEdicion()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;float:right" >Deshacer</button>\n\n\n</div>\n\n\n</div>\n\n\n\n\n<!-- <div style="margin-top:13px"><span  style=\' \n    width: 50px;\n    margin-left: 8px;\n    font-size: 15px;\' class="tituloBook">Fecha</span> <span  style=\'    font-size: 15px;\' class="subBook">{{dataCita?.horaInicio.split(\'T\')[0]}}</span></div>\n\n    <div style="margin-top:13px"><span  style=\' \n    width: 50px;\n    margin-left: 8px;\n    font-size: 15px;\' class="tituloBook">Inicio:</span> <span  style=\'    font-size: 15px;\' class="subBook">{{dataCita?.horaFinalEsperado.split(\'T\')[1]}}</span></div>\n\n    <div style="margin-top:13px"><span  style=\' \n    width: 50px;\n    margin-left: 8px;\n    font-size: 15px;\' class="tituloBook">Final aprox:</span> <span  style=\'    font-size: 15px;\' class="subBook">{{dataCita?.horaInicio.split(\'T\')[1]}}</span></div>\n\n -->\n\n\n<div  *ngFor="let n of servicios">\n\n\n\n<div style="\n    width: 100%;\n    display: inline-block;\n">\n	\n<!-- 	<img src="http://50.116.17.150:3000/{{n.imagenCategoria}}" \n        onError="this.src=\'assets/imgs/reservation.png\';" style="\n    display: inline-block;\n    vertical-align: top;\n    max-height: 36px;\n\n"> -->\n	<div style="\n    display: inline-block;\n    width: 100%;\n    padding: 15px 0px;\n    border-top: solid 2px #ececec;\n    margin-top: 10px;\n">\n\n\n\n\n\n\n		<span style="\n    font-size: 19px;\n    color:  #333;\n">{{n.nombre}}</span>\n\n	<div style="    margin-top: 7px;">\n        <span style="margin-right: 20px;   color: #333;\n        font-size: 12px;">\n        <ion-icon style=\'margin-right: 5px\' name="ios-time-outline">\n        </ion-icon>{{n.duracion}} min\n        </span>\n   \n          <span style="color: #EC527E !important;\n\n            float: right;\n            min-width: 41px;\n            text-align: left;">${{n.precioCobrado}}\n        </span>\n           <span *ngIf=\'n.precio !== n.precioCobrado\' style="\n            font-size: 15px;\n            color: #777;\n            float: right;\n            margin-right: 15px;\n            text-decoration: line-through;">${{n.precio}}\n        </span>\n\n\n    </div>\n	</div>\n</div>\n\n</div>\n\n\n\n\n\n\n	<div style="    margin-bottom: 15px;\n    border-top: solid 2px #ececec;\n    padding: 15px 0px;"><span style="\n    font-size: 16px;\n    color: #333;\n">Total</span> <span style="    color: #EC527E !important;\n    font-size: 16px;\n    margin-left: 47px;">${{dataCita?.precioEsperado}}</span></div>\n\n\n<!-- \n <div style="    width: 100%;\n    text-align: center;\n margin-top: 20px; margin-bottom: 30px;">\n\n	<button  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;" > Cancelar</button> \n\n	<button  style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;"  color=\'verdeApp\' ion-button> Aceptar </button>\n\n\n\n</div>\n\n -->\n\n<!-- \n <div *ngIf=\'dataCita?.estado == 2 || dataCita?.estado == 1\'  style="    width: 100%;\n    text-align: center;\n margin-top: 40px;">\n\n    <button (click)=\'cancelarCita()\'  color=\'headerColor\' ion-button  style="    width: 40%;\n    margin-right: 5%;\n    border-radius: 70px;" > Cancelar Reserva</button> \n\n    <button  (click)=\'reprogramarCita()\' style=" border-radius: 70px;   width: 40%;\n    margin-left: 5%;"  color=\'verdeApp\' ion-button> Reprogramar</button>\n\n\n\n</div> -->\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jose/Documents/beyouApp/beYou/src/pages/detalle-reserva/detalle-reserva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], DetalleReservaPage);
    return DetalleReservaPage;
}());

//# sourceMappingURL=detalle-reserva.js.map

/***/ })

});
//# sourceMappingURL=18.js.map