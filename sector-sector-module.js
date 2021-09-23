(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sector-sector-module"],{

/***/ "91uB":
/*!********************************************!*\
  !*** ./src/app/sector/sector.component.ts ***!
  \********************************************/
/*! exports provided: SectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorComponent", function() { return SectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SectorComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectorComponent.ɵfac = function SectorComponent_Factory(t) { return new (t || SectorComponent)(); };
SectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectorComponent, selectors: [["app-sector"]], decls: 2, vars: 0, template: function SectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sector works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "RO7Q":
/*!*****************************************!*\
  !*** ./src/app/sector/sector.module.ts ***!
  \*****************************************/
/*! exports provided: SectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorModule", function() { return SectorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sector_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sector-routing.module */ "fphC");
/* harmony import */ var _sector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sector.component */ "91uB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SectorModule {
}
SectorModule.ɵfac = function SectorModule_Factory(t) { return new (t || SectorModule)(); };
SectorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SectorModule });
SectorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _sector_routing_module__WEBPACK_IMPORTED_MODULE_1__["SectorRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SectorModule, { declarations: [_sector_component__WEBPACK_IMPORTED_MODULE_2__["SectorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _sector_routing_module__WEBPACK_IMPORTED_MODULE_1__["SectorRoutingModule"]] }); })();


/***/ }),

/***/ "fphC":
/*!*************************************************!*\
  !*** ./src/app/sector/sector-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SectorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorRoutingModule", function() { return SectorRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sector.component */ "91uB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _sector_component__WEBPACK_IMPORTED_MODULE_1__["SectorComponent"] }];
class SectorRoutingModule {
}
SectorRoutingModule.ɵfac = function SectorRoutingModule_Factory(t) { return new (t || SectorRoutingModule)(); };
SectorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SectorRoutingModule });
SectorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SectorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=sector-sector-module.js.map