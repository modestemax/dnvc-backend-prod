(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["structures-structures-module"],{

/***/ "C55j":
/*!****************************************************!*\
  !*** ./src/app/structures/structures.component.ts ***!
  \****************************************************/
/*! exports provided: StructuresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuresComponent", function() { return StructuresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StructuresComponent {
    constructor() { }
    ngOnInit() {
    }
}
StructuresComponent.ɵfac = function StructuresComponent_Factory(t) { return new (t || StructuresComponent)(); };
StructuresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StructuresComponent, selectors: [["app-structures"]], decls: 2, vars: 0, template: function StructuresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "structures works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJ1Y3R1cmVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "N+0g":
/*!*************************************************!*\
  !*** ./src/app/structures/structures.module.ts ***!
  \*************************************************/
/*! exports provided: StructuresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuresModule", function() { return StructuresModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _structures_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structures-routing.module */ "OzPM");
/* harmony import */ var _structures_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./structures.component */ "C55j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class StructuresModule {
}
StructuresModule.ɵfac = function StructuresModule_Factory(t) { return new (t || StructuresModule)(); };
StructuresModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: StructuresModule });
StructuresModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _structures_routing_module__WEBPACK_IMPORTED_MODULE_1__["StructuresRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](StructuresModule, { declarations: [_structures_component__WEBPACK_IMPORTED_MODULE_2__["StructuresComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _structures_routing_module__WEBPACK_IMPORTED_MODULE_1__["StructuresRoutingModule"]] }); })();


/***/ }),

/***/ "OzPM":
/*!*********************************************************!*\
  !*** ./src/app/structures/structures-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StructuresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuresRoutingModule", function() { return StructuresRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _structures_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structures.component */ "C55j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _structures_component__WEBPACK_IMPORTED_MODULE_1__["StructuresComponent"] }];
class StructuresRoutingModule {
}
StructuresRoutingModule.ɵfac = function StructuresRoutingModule_Factory(t) { return new (t || StructuresRoutingModule)(); };
StructuresRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StructuresRoutingModule });
StructuresRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StructuresRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=structures-structures-module.js.map