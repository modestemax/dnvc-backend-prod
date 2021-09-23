(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mailing-mailing-module"],{

/***/ "C/PX":
/*!***************************************************!*\
  !*** ./src/app/mailing/mailing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MailingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailingRoutingModule", function() { return MailingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mailing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mailing.component */ "duJc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _mailing_component__WEBPACK_IMPORTED_MODULE_1__["MailingComponent"] }];
class MailingRoutingModule {
}
MailingRoutingModule.ɵfac = function MailingRoutingModule_Factory(t) { return new (t || MailingRoutingModule)(); };
MailingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MailingRoutingModule });
MailingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MailingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "duJc":
/*!**********************************************!*\
  !*** ./src/app/mailing/mailing.component.ts ***!
  \**********************************************/
/*! exports provided: MailingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailingComponent", function() { return MailingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MailingComponent {
    constructor() { }
    ngOnInit() {
    }
}
MailingComponent.ɵfac = function MailingComponent_Factory(t) { return new (t || MailingComponent)(); };
MailingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailingComponent, selectors: [["app-mailing"]], decls: 2, vars: 0, template: function MailingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mailing works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "wwfY":
/*!*******************************************!*\
  !*** ./src/app/mailing/mailing.module.ts ***!
  \*******************************************/
/*! exports provided: MailingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailingModule", function() { return MailingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mailing_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mailing-routing.module */ "C/PX");
/* harmony import */ var _mailing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mailing.component */ "duJc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class MailingModule {
}
MailingModule.ɵfac = function MailingModule_Factory(t) { return new (t || MailingModule)(); };
MailingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MailingModule });
MailingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _mailing_routing_module__WEBPACK_IMPORTED_MODULE_1__["MailingRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MailingModule, { declarations: [_mailing_component__WEBPACK_IMPORTED_MODULE_2__["MailingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _mailing_routing_module__WEBPACK_IMPORTED_MODULE_1__["MailingRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=mailing-mailing-module.js.map