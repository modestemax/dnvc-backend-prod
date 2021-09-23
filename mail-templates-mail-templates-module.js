(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mail-templates-mail-templates-module"],{

/***/ "ELPz":
/*!************************************************************!*\
  !*** ./src/app/mail-templates/mail-templates.component.ts ***!
  \************************************************************/
/*! exports provided: MailTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailTemplatesComponent", function() { return MailTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MailTemplatesComponent {
    constructor() { }
    ngOnInit() {
    }
}
MailTemplatesComponent.ɵfac = function MailTemplatesComponent_Factory(t) { return new (t || MailTemplatesComponent)(); };
MailTemplatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MailTemplatesComponent, selectors: [["app-mail-templates"]], decls: 2, vars: 0, template: function MailTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mail-templates works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsLXRlbXBsYXRlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "eAK1":
/*!*********************************************************!*\
  !*** ./src/app/mail-templates/mail-templates.module.ts ***!
  \*********************************************************/
/*! exports provided: MailTemplatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailTemplatesModule", function() { return MailTemplatesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mail_templates_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail-templates-routing.module */ "iqQ3");
/* harmony import */ var _mail_templates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-templates.component */ "ELPz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class MailTemplatesModule {
}
MailTemplatesModule.ɵfac = function MailTemplatesModule_Factory(t) { return new (t || MailTemplatesModule)(); };
MailTemplatesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MailTemplatesModule });
MailTemplatesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _mail_templates_routing_module__WEBPACK_IMPORTED_MODULE_1__["MailTemplatesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MailTemplatesModule, { declarations: [_mail_templates_component__WEBPACK_IMPORTED_MODULE_2__["MailTemplatesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _mail_templates_routing_module__WEBPACK_IMPORTED_MODULE_1__["MailTemplatesRoutingModule"]] }); })();


/***/ }),

/***/ "iqQ3":
/*!*****************************************************************!*\
  !*** ./src/app/mail-templates/mail-templates-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MailTemplatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailTemplatesRoutingModule", function() { return MailTemplatesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mail_templates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail-templates.component */ "ELPz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _mail_templates_component__WEBPACK_IMPORTED_MODULE_1__["MailTemplatesComponent"] }];
class MailTemplatesRoutingModule {
}
MailTemplatesRoutingModule.ɵfac = function MailTemplatesRoutingModule_Factory(t) { return new (t || MailTemplatesRoutingModule)(); };
MailTemplatesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MailTemplatesRoutingModule });
MailTemplatesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MailTemplatesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=mail-templates-mail-templates-module.js.map