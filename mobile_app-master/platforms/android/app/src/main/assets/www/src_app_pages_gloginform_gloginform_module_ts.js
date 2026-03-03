"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_gloginform_gloginform_module_ts"],{

/***/ 99515:
/*!***************************************************************!*\
  !*** ./src/app/pages/gloginform/gloginform-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GloginformPageRoutingModule": () => (/* binding */ GloginformPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _gloginform_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gloginform.page */ 6813);




const routes = [
    {
        path: '',
        component: _gloginform_page__WEBPACK_IMPORTED_MODULE_0__.GloginformPage
    }
];
let GloginformPageRoutingModule = class GloginformPageRoutingModule {
};
GloginformPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GloginformPageRoutingModule);



/***/ }),

/***/ 98021:
/*!*******************************************************!*\
  !*** ./src/app/pages/gloginform/gloginform.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GloginformPageModule": () => (/* binding */ GloginformPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _gloginform_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gloginform-routing.module */ 99515);
/* harmony import */ var _gloginform_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gloginform.page */ 6813);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);















let GloginformPageModule = class GloginformPageModule {
};
GloginformPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gloginform_routing_module__WEBPACK_IMPORTED_MODULE_0__.GloginformPageRoutingModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOptionModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule
        ],
        declarations: [_gloginform_page__WEBPACK_IMPORTED_MODULE_1__.GloginformPage]
    })
], GloginformPageModule);



/***/ }),

/***/ 6813:
/*!*****************************************************!*\
  !*** ./src/app/pages/gloginform/gloginform.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GloginformPage": () => (/* binding */ GloginformPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gloginform_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gloginform.page.html */ 48556);
/* harmony import */ var _gloginform_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gloginform.page.scss */ 81367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 147);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);











let GloginformPage = class GloginformPage {
    constructor(platform, googlePlus, formBuilder, router, http, service, loadingController, toastController) {
        this.platform = platform;
        this.googlePlus = googlePlus;
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.service = service;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.showPassword = false;
        this.isGoogleLogin = false;
        localStorage.getItem('device_token');
    }
    ngOnInit() {
        this.regForm = this.formBuilder.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-zA-Z0-9.-_-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'),
                ],
            ],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(15),
                ],
            ],
        });
        localStorage.getItem('device_token');
    }
    go() {
        this.router.navigateByUrl('/welcomepage');
    }
    signup() {
        this.router.navigateByUrl('/gmailform');
    }
    get errorControl() {
        return this.regForm.controls;
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
            });
            yield loading.present();
            return loading;
        });
    }
    presentToast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                color: color,
            });
            toast.present();
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // this.username = this.regForm.get('email').value;
            // this.password = this.regForm.get('password').value;
            let selectpara = {
                username: this.regForm.get('email').value,
                password: this.regForm.get('password').value,
                deviceid: localStorage.getItem('device_token'),
                platform: "android"
            };
            const loading = yield this.presentLoading();
            this.service.loginuser(selectpara).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (res.response_status === 'Success') {
                    console.log(res.response_status);
                    console.log(res.response_message);
                    console.log('Login successful:', res);
                    // localStorage.setItem('token',res.response_message.token);
                    localStorage.setItem('user', JSON.stringify(res.response_message.user));
                    // Display success message
                    this.presentToast('Login successfully!', 'success');
                    // Navigate to preferred courses page
                    this.router.navigateByUrl('/preferedcourses');
                    // Reset the form
                    this.regForm.reset();
                }
                else {
                    console.error('Unexpected response:', res);
                    this.presentToast('Your email or password is invalid', 'danger');
                    // Reset the form
                    this.regForm.reset();
                }
            }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                console.error('Error occurred during login:', error);
                // this.presentToast('An error occurred during the login process. Please try again.', 'danger');
            }));
        });
    }
    googleSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is('android')) {
                const loading = yield this.loadingController.create({
                    message: 'Please wait...',
                    duration: 5000 // Set a timeout for 5 seconds
                });
                yield loading.present();
                try {
                    const fingerprint = yield this.googlePlus.getSigningCertificateFingerprint();
                    // alert(fingerprint);
                    // console.log(fingerprint);
                    const result = yield this.googlePlus.login({});
                    this.userData = result;
                    // alert(this.userData);
                    // console.log(this.userData);
                    const selectPara = {
                        fname: this.userData.displayName,
                        device_id: localStorage.getItem('device_token'),
                        platform: 'android',
                        login_with: 'gmail',
                        email: this.userData.email
                    };
                    // Save login data to local storage
                    localStorage.setItem('userData', JSON.stringify(this.userData));
                    // Navigate to the preferred courses page
                    this.router.navigateByUrl('/preferedcourses').then(() => {
                        loading.dismiss(); // Dismiss the loading indicator after navigation
                        window.location.reload(); // Reload the page after navigation
                    });
                }
                catch (err) {
                    loading.dismiss(); // Dismiss the loading indicator on error
                    console.error('Google login error:', err);
                    // If logout fails, catch and log the error, but don't do anything else
                    try {
                        yield this.googlePlus.logout();
                    }
                    catch (logoutError) {
                        // console.error('Google logout error:', logoutError);
                    }
                }
            }
        });
    }
};
GloginformPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
GloginformPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-gloginform',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gloginform_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gloginform_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GloginformPage);



/***/ }),

/***/ 48556:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/gloginform/gloginform.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content>\n \n\n   <ion-row class=\"ion-align-items-center ion-padding-top\">\n    <ion-col size=\"2\" class=\"text-center\">\n      <ion-icon class=\"closeicon\" name=\"close-outline\" (click)=\"go()\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"7\">\n      <div class=\"seticon\">\n        <!-- <img class=\"iconsize\" src=\"../assets/icon/logo_15.png\"> -->\n        <img class=\"iconsize\" src=\"../../../assets/icon/logo_15.png\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\">\n      <h5 class=\"loginh5\" (click)=\"signup()\">Signup</h5>\n    </ion-col>\n   </ion-row>\n\n<div class=\"setlets\">\n  <h5>Let's get you started!</h5>\n  <p>Sign up to discover insights on colleges, exams, courses, and more, tailored just for you</p>\n</div>\n\n  <div class=\"googldiv\" *ngIf=\"!isGoogleLogin\" (click)=\"googleSignIn()\">\n    <img class=\"googlelogo\" src=\"../../../assets/icon/search.png\">Login with Google</div> \n\n    <p class=\"or-divider\">OR</p>\n\n\n    <form [formGroup]=\"regForm\" class=\"form_login\" >\n      \n      <div class=\"matfield\">\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>email</mat-label>\n          <input matInput type=\"email\" id=\"email\" formControlName=\"email\" >\n          <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('required')\">\n            Email address is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('pattern')\">\n            Please enter a valid email address\n          </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput formControlName=\"password\" type=\"{{ showPassword ? 'text' : 'password' }}\"[(ngModel)]=\"password\" required>\n          <ion-icon class=\"icon\" matSuffix name=\"eye-off-outline\" name=\"{{ showPassword ? 'eye-off' : 'eye' }}\"\n          (click)=\"togglePasswordVisibility()\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('required')\">\n            Password is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('pattern')\">\n            Please enter Password at least 1 digit 1 capital and small letter and 1 special character. \n          </mat-error>\n        </mat-form-field>\n\n        <p class=\"p1\" routerLink=\"/forgot\">Forgot Password?</p>\n        <div class=\"mt1rem\">\n          <ion-button expand=\"block\" (click)=\"login()\" class=\"dsa mx-16\" color=\"primary\" >Login</ion-button>\n        </div>\n      \n      </div>\n     \n    </form>\n\n    <div *ngIf=\"isGoogleLogin\">\n      <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\"><b>{{user.displayName}}</b></ion-card-title>\n     \n    </ion-card-header>\n    \n    <ion-card-content>\n      <ion-img [src]=\"user.photoURL\" style=\"border-radius: 1px;\"></ion-img>\n      <ion-item>\n        <ion-label>email:</ion-label>\n        <span>{{user.email}}</span>\n      </ion-item>\n    </ion-card-content>\n    </ion-card>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ 81367:
/*!*******************************************************!*\
  !*** ./src/app/pages/gloginform/gloginform.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".googldiv {\n  display: flex;\n  border: 1px solid gray;\n  border-radius: 50px;\n  margin: auto;\n  width: 80%;\n  font-size: 16px;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  height: 42px;\n}\n\n.googlelogo {\n  width: 24px;\n  position: relative;\n  right: 15px;\n}\n\n.loginh5 {\n  color: #1388de;\n  text-align: center;\n  margin: 0px;\n}\n\n.or-divider {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000;\n  /* Change the color as needed */\n  font-size: 16px;\n  /* Adjust the font size as needed */\n  margin: 20px 35px;\n}\n\n.or-divider::before,\n.or-divider::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 1px solid lightgray;\n  /* Change the line color as needed */\n  margin: 0 10px;\n}\n\n.mx-16 {\n  margin: 0 16px;\n}\n\n.seticon {\n  text-align: center;\n}\n\n.setlets {\n  margin: 28px;\n}\n\n.setlets h5 {\n  font-weight: 500;\n  font-size: 23px;\n}\n\n.closeicon {\n  font-size: 26px;\n}\n\n.gmailform {\n  text-align: center;\n  padding-bottom: 10px;\n}\n\nion-input {\n  border: 1px solid;\n  width: 80%;\n  border-radius: 8px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.login {\n  margin-top: -15px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.main-div {\n  background: \"/../../src/assets/icon/simple-img.png\";\n}\n\n.setimg {\n  text-align: right;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.btn {\n  width: 30%;\n  height: 37px;\n  width: -webkit-fill-available;\n  height: 44px;\n  background-color: #007fdc !important;\n  margin: 0px 16px;\n  border-radius: 50px;\n  box-shadow: none !important;\n}\n\n.span {\n  color: blue;\n}\n\n.p1 {\n  padding-right: 20px;\n  color: #0081dc;\n  margin-top: 0px !important;\n  text-align: right;\n}\n\n.matfield {\n  text-align: center;\n}\n\n.w-75 {\n  width: 90%;\n  margin: 0 10px;\n}\n\n.setimg2 {\n  position: fixed;\n  bottom: 0%;\n  left: 0%;\n  z-index: -1;\n}\n\n.form_login {\n  z-index: 111 !important;\n  background-color: #ffffff !important;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.iconsize {\n  position: relative;\n  top: 6px;\n  height: 44px;\n  left: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2dpbmZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFBYSwrQkFBQTtFQUNiLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsaUJBQUE7QUFHRjs7QUFBQTs7RUFFRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtDQUFBO0VBQW9DLG9DQUFBO0VBQ3BDLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7QUFLRjs7QUFGQTtFQUVFLGtCQUFBO0FBSUY7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBREk7RUFDSSxnQkFBQTtFQUNKLGVBQUE7QUFHSjs7QUFFRTtFQUNFLGVBQUE7QUFDSjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBS0U7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFGTjs7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUdFO0VBQ0ksbURBQUE7QUFBTjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDSSxnQkFBQTtBQUVOOztBQUFJO0VBQ0UsaUJBQUE7QUFHTjs7QUFESTs7RUFFRSxhQUFBO0FBSU47O0FBRkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBS0o7O0FBSEU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBTUo7O0FBSkU7RUFDRSxXQUFBO0FBT0o7O0FBTEU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBUUo7O0FBTkU7RUFDRSxrQkFBQTtBQVNKOztBQVBFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUFVSjs7QUFSRTtFQUNHLGVBQUE7RUFDRCxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFXSjs7QUFSRTtFQUNFLHVCQUFBO0VBRUEsb0NBQUE7QUFVSjs7QUFQRTtFQUNFLHNDQUFBO0FBVUo7O0FBUkU7RUFBMEMsV0FBQTtBQVk1Qzs7QUFWRTtFQUNJLHlDQUFBO0VBQ0EsaUJBQUE7QUFhTjs7QUFWRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFFQSxVQUFBO0FBWUoiLCJmaWxlIjoiZ2xvZ2luZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ29vZ2xkaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuXG4uZ29vZ2xlbG9nb3tcbiAgd2lkdGg6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbi5sb2dpbmg1e1xuICBjb2xvcjogIzEzODhkZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbn1cblxuLm9yLWRpdmlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIGFzIG5lZWRlZCAqL1xuICBmb250LXNpemU6IDE2cHg7IC8qIEFkanVzdCB0aGUgZm9udCBzaXplIGFzIG5lZWRlZCAqL1xuICBtYXJnaW46IDIwcHggMzVweDtcbn1cblxuLm9yLWRpdmlkZXI6OmJlZm9yZSxcbi5vci1kaXZpZGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBmbGV4OiAxO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5OyAvKiBDaGFuZ2UgdGhlIGxpbmUgY29sb3IgYXMgbmVlZGVkICovXG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLm14LTE2e1xuICBtYXJnaW46IDAgMTZweDtcbn1cbiAgXG4uc2V0aWNvbntcbiAgICBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuICAuc2V0bGV0c3tcbiAgICBtYXJnaW46IDI4cHg7XG4gICAgaDV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbiAgfVxuXG5cbiAgLmNsb3NlaWNvbntcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cblxuXG5cbiAgLmdtYWlsZm9ybXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cblxuXG4gIFxuaW9uLWlucHV0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuICAuZXJyb3J7XG4gICAgICBjb2xvcjpyZWQ7XG4gICAgICBsaXN0LXN0eWxlOiBub25lOyBcbiAgfSBcbiAgLmxvZ2lue1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tYWluLWRpdntcbiAgICAgIGJhY2tncm91bmQ6ICgnLy4uLy4uL3NyYy9hc3NldHMvaWNvbi9zaW1wbGUtaW1nLnBuZycpO1xuICB9XG4gIC5zZXRpbWd7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgfVxuICAuZXhhbXBsZS1jb250YWluZXIgbWF0LWZvcm0tZmllbGQgKyBtYXQtZm9ybS1maWVsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH0gXG4gICAgLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gICAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgLmljb257XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6cmdiKDk5LCA5MiwgOTIpO1xuICB9XG4gIC5idG57XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDM3cHg7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdmZGMgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5zcGFue1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG4gIC5wMXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMDA4MWRjO1xuICAgIG1hcmdpbi10b3A6IDBweCFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLm1hdGZpZWxke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAudy03NXtcbiAgICB3aWR0aDo5MCU7XG4gICAgbWFyZ2luOiAwIDEwcHg7IFxuICB9XG4gIC5zZXRpbWcye1xuICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwJTtcbiAgICBsZWZ0OiAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICBcbiAgLmZvcm1fbG9naW57XG4gICAgei1pbmRleDogMTExIWltcG9ydGFudDtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAwLjNlbSAwcHggMTBweCAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuNWVtOyB9XG4gIFxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xuICAgICAgd2lkdGg6IDEzMy4zMzMzMyU7XG4gIH1cbiAgXG4gIC5pY29uc2l6ZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA2cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgXG4gICAgbGVmdDogMTRweDtcbn1cbiAgXG5cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gloginform_gloginform_module_ts.js.map