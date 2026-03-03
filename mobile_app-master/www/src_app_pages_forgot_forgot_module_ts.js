"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_forgot_forgot_module_ts"],{

/***/ 36493:
/*!*******************************************************!*\
  !*** ./src/app/pages/forgot/forgot-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageRoutingModule": () => (/* binding */ ForgotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page */ 85792);




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ 93647:
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageModule": () => (/* binding */ ForgotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-routing.module */ 36493);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page */ 85792);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 70781);











let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPage]
    })
], ForgotPageModule);



/***/ }),

/***/ 85792:
/*!*********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPage": () => (/* binding */ ForgotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./forgot.page.html */ 87330);
/* harmony import */ var _forgot_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page.scss */ 82549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);








let ForgotPage = class ForgotPage {
    constructor(formBuilder, router, service, alertController) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.alertController = alertController;
        this.hidePassword = true;
        this.hideConfirmPassword = true;
    }
    ngOnInit() {
        this.forgotForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        }, { validators: this.passwordMatchValidator });
    }
    togglePasswordVisibility() {
        this.hidePassword = !this.hidePassword;
    }
    toggleConfirmPasswordVisibility() {
        this.hideConfirmPassword = !this.hideConfirmPassword;
    }
    passwordMatchValidator(control) {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');
        if (password && confirmPassword && password.value !== confirmPassword.value) {
            confirmPassword.setErrors({ passwordMismatch: true });
            return { passwordMismatch: true };
        }
        return null;
    }
    submitForm() {
        var _a, _b, _c;
        this.markFormGroupTouched(this.forgotForm);
        if (this.forgotForm.valid) {
            const email = (_a = this.forgotForm.get('email')) === null || _a === void 0 ? void 0 : _a.value;
            const newPass = (_b = this.forgotForm.get('password')) === null || _b === void 0 ? void 0 : _b.value;
            const confirmPass = (_c = this.forgotForm.get('confirmPassword')) === null || _c === void 0 ? void 0 : _c.value;
            this.service.forgotpass(this.forgotForm.value).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (res.response_code === "200") {
                    // Show success alert and navigate on OK
                    const alert = yield this.alertController.create({
                        header: 'Success',
                        message: res.response_message,
                        buttons: [
                            {
                                text: 'OK',
                                handler: () => {
                                    this.router.navigateByUrl('/login');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    const alert = yield this.alertController.create({
                        header: 'Error',
                        message: 'Unexpected response code',
                        buttons: [
                            {
                                text: 'OK',
                                handler: () => {
                                    this.router.navigateByUrl('/login');
                                }
                            }
                        ]
                    });
                    yield alert.present();
                    // Handle other response codes if necessary
                    // alert('Unexpected response code');
                }
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
                    header: 'Error',
                    message: 'Something went wrong. Please try again later.',
                    buttons: [
                        {
                            text: 'OK',
                            handler: () => {
                                this.router.navigateByUrl('/login');
                            }
                        }
                    ]
                });
                yield alert.present();
                console.error('Form submission failed', err);
            }));
        }
    }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup) {
                this.markFormGroupTouched(control);
            }
        });
    }
};
ForgotPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
ForgotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgot',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_forgot_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgot_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPage);



/***/ }),

/***/ 87330:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/forgot/forgot.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content>\n  <div class=\"main-div\">\n    <form [formGroup]=\"forgotForm\" (ngSubmit)=\"submitForm()\">\n      <div class=\"setimg\">\n        <img src=\"../../../assets/icon/N_imgP.png\">\n      </div>\n      <div class=\"forgot\">\n        <img src=\"../../../assets/icon/logo_15.png\">\n      </div>\n      <div class=\"matfield\">\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input matInput formControlName=\"email\" placeholder=\"Enter your email address\">\n          <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n          <mat-error *ngIf=\"forgotForm.get('email').hasError('required') && forgotForm.get('email').touched\">\n            Email is required\n          </mat-error>\n          <mat-error *ngIf=\"forgotForm.get('email').hasError('email') && forgotForm.get('email').touched\">\n            Please enter a valid email address\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput formControlName=\"password\" [type]=\"hidePassword ? 'password' : 'text'\" placeholder=\"Please enter your password\">\n          <ion-icon class=\"icon\" matSuffix [name]=\"hidePassword ? 'eye-off-outline' : 'eye-outline'\" (click)=\"togglePasswordVisibility()\"></ion-icon>\n          <mat-error *ngIf=\"forgotForm.get('password').hasError('required') && forgotForm.get('password').touched\">\n            Password is required\n          </mat-error>\n          <mat-error *ngIf=\"forgotForm.get('password').hasError('minlength') && forgotForm.get('password').touched\">\n            Password must be at least 6 characters long\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Confirm Password</mat-label>\n          <input matInput formControlName=\"confirmPassword\" [type]=\"hideConfirmPassword ? 'password' : 'text'\" placeholder=\"Confirm your password\">\n          <ion-icon class=\"icon\" matSuffix [name]=\"hideConfirmPassword ? 'eye-off-outline' : 'eye-outline'\" (click)=\"toggleConfirmPasswordVisibility()\"></ion-icon>\n          <mat-error *ngIf=\"forgotForm.get('confirmPassword').hasError('required') && forgotForm.get('confirmPassword').touched\">\n            Confirm Password is required\n          </mat-error>\n          <mat-error *ngIf=\"forgotForm.hasError('passwordMismatch') && forgotForm.get('confirmPassword').touched\">\n            Passwords do not match\n          </mat-error>\n        </mat-form-field>\n\n        <ion-button type=\"submit\" class=\"btn\" color=\"primary\">Submit</ion-button>\n        <p>Already have an account - <span class=\"span\" routerLink=\"/login\">Sign in</span></p>\n      </div>\n    </form>\n  </div>\n</ion-content>\n\n");

/***/ }),

/***/ 82549:
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "ion-input {\n  border: 1px solid;\n  width: 80%;\n  border-radius: 8px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.forgot {\n  margin-bottom: 20px;\n  text-align: center;\n  height: 60px;\n}\n\n.main-div {\n  background: \"/../../src/assets/icon/simple-img.png\";\n}\n\n.setimg {\n  text-align: right;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.btn {\n  width: -webkit-fill-available;\n  height: 44px;\n  background-color: #007fdc !important;\n  margin: 0px 16px;\n  border-radius: 50px;\n  box-shadow: none !important;\n}\n\n::ng-deep .mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  background-color: #007fdc;\n  width: -webkit-fill-available;\n  height: 44px;\n  margin: 0px 16px;\n  border-radius: 50px;\n  box-shadow: none !important;\n}\n\n.span {\n  color: blue;\n}\n\n.p1 {\n  padding-left: 40%;\n  color: gray;\n  margin-top: -13px;\n}\n\n.matfield {\n  text-align: center;\n}\n\n.w-75 {\n  width: 90%;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVDO0VBQ0MsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0ksbURBQUE7QUFFSjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsaUJBQUE7QUFLSjs7QUFIRTs7RUFFRSxhQUFBO0FBTUo7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQVFGOztBQU5BO0VBQ0cseUJBQUE7RUFDRCw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7QUFVRjs7QUFSQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBV0o7O0FBVEE7RUFDRSxrQkFBQTtBQVlGOztBQVZBO0VBQ0UsVUFBQTtBQWFGOztBQVBBO0VBQ0Usc0NBQUE7QUFVRjs7QUFSQTtFQUEwQyxXQUFBO0FBWTFDOztBQVZBO0VBQ0kseUNBQUE7RUFDQSxpQkFBQTtBQWFKIiwiZmlsZSI6ImZvcmdvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pbnB1dHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4gLmVycm9ye1xuICBjb2xvcjpyZWQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7ICBcbn0gXG4uZm9yZ290e1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDsgICBcbn1cblxuLm1haW4tZGl2e1xuICAgIGJhY2tncm91bmQ6ICgnLy4uLy4uL3NyYy9hc3NldHMvaWNvbi9zaW1wbGUtaW1nLnBuZycpO1xufVxuLnNldGltZ3tcbiAgdGV4dC1hbGlnbjpyaWdodDtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZCArIG1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfSBcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuLmljb257XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY29sb3I6cmdiKDk5LCA5MiwgOTIpO1xufVxuLmJ0bntcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2ZkYyAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZmRjO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW46IDBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4uc3BhbntcbiAgY29sb3I6IGJsdWU7XG59XG4ucDF7XG4gICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gICAgY29sb3I6Z3JheTtcbiAgICBtYXJnaW4tdG9wOiAtMTNweFxuICB9XG4ubWF0ZmllbGR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53LTc1e1xuICB3aWR0aDo5MCU7XG59XG5cblxuXG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuM2VtIDBweCAxMHB4IDBweCAhaW1wb3J0YW50O1xuICB9XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoLjc1KTtcbiAgICB3aWR0aDogMTMzLjMzMzMzJTtcbn1cblxuXG5cblxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot_forgot_module_ts.js.map