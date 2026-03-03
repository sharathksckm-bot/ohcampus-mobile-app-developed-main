"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 70781);











let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 57230);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 12032);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);









let LoginPage = class LoginPage {
    constructor(formBuilder, router, http, service, loadingController, toastController) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.service = service;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.showPassword = false;
        this.deviceid = localStorage.getItem('device_token');
        console.log('Device ID:', localStorage.getItem('device_token'));
    }
    ngOnInit() {
        this.regForm = this.formBuilder.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}'),
                ],
            ],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(15),
                ],
            ],
        });
        // this.deviceid=
        // localStorage.getItem('device_token');
        // console.log('Device ID:',  localStorage.getItem('device_token'));
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    // async presentLoading() {
    //   const loading = await this.loadingController.create({
    //     message: 'Please wait...',
    //   });
    //   await loading.present();
    //   return loading;
    // }
    // async presentToast(message: string, color: string) {
    //   const toast = await this.toastController.create({
    //     message,
    //     duration: 2000,
    //     color,
    //   });
    //   toast.present();
    // }
    // async login() {
    //   if (this.regForm.invalid) {
    //     this.regForm.markAllAsTouched();
    //     return;
    //   }
    //   this.username = this.regForm.get('email').value;
    //   this.password = this.regForm.get('password').value;
    //   const loading = await this.presentLoading();
    //   this.service.loginuser(this.username, this.password).subscribe(
    //     async (res) => {
    //       await loading.dismiss();
    //       if (res.response_status === 'Success') {
    //         console.log('Login successful:', res);
    //         localStorage.setItem('user', JSON.stringify(res.response_message.user));
    //         await this.presentToast('Login successfully!', 'success');
    //         this.router.navigateByUrl('/preferedcourses');
    //       } else {
    //         console.error('Unexpected response:', res);
    //         await this.presentToast('Your email or password is invalid', 'danger');
    //       }
    //       this.resetForm();
    //     },
    //     async (error) => {
    //       await loading.dismiss();
    //       console.error('Error occurred during login:', error);
    //       await this.presentToast('Please enter valid email & password.', 'danger');
    //       this.resetForm();
    //     }
    //   );
    // }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.regForm.invalid) {
                this.regForm.markAllAsTouched();
                return;
            }
            let selectpara = {
                username: this.regForm.get('email').value,
                password: this.regForm.get('password').value,
                deviceid: localStorage.getItem('device_token'),
                platform: "android"
            };
            const loading = yield this.presentLoading();
            this.service.loginuser(selectpara).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (res.response_status === 'Success') {
                    console.log('Login successful:', res);
                    localStorage.setItem('user', JSON.stringify(res.response_message.user));
                    localStorage.setItem('simpleauthToken', res.response_message.token); // Store token if provided
                    yield this.presentToast('Login successfully!', 'success');
                    this.router.navigateByUrl('/preferedcourses');
                }
                else {
                    console.error('Unexpected response:', res);
                    yield this.presentToast('Your email or password is invalid', 'danger');
                }
                this.resetForm();
            }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                console.error('Error occurred during login:', error);
                yield this.presentToast('Please enter valid email & password.', 'danger');
                this.resetForm();
            }));
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
                spinner: null,
                translucent: true,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            return loading;
        });
    }
    presentToast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
                color,
                cssClass: 'custom-toast' // Apply custom CSS class
            });
            toast.present();
        });
    }
    resetForm() {
        this.regForm.reset();
        this.showPassword = false;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    get errorControl() {
        return this.regForm.controls;
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 57230:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- \n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"main-div\">\n    <form [formGroup]=\"regForm\" class=\"form_login\" >\n      <div class=\"setimg\">\n        <img src=\"../../../assets/icon/N_imgP.png\">\n      </div>\n      <div class=\"login\">\n        <img src=\"../../../assets/icon/logo_15.png\">\n\n      </div>\n      \n      <div class=\"matfield\">\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>email</mat-label>\n          <input matInput type=\"email\" id=\"email\" formControlName=\"email\" >\n          <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('required')\">\n            Email address is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('pattern')\">\n            Please enter a valid email address\n          </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput formControlName=\"password\" type=\"{{ showPassword ? 'text' : 'password' }}\"[(ngModel)]=\"password\" required>\n          <ion-icon class=\"icon\" matSuffix name=\"eye-off-outline\" name=\"{{ showPassword ? 'eye-off' : 'eye' }}\"\n          (click)=\"togglePasswordVisibility()\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('required')\">\n            Password is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('pattern')\">\n            Please enter Password at least 1 digit 1 capital and small letter and 1 special character. \n          </mat-error>\n        </mat-form-field>\n\n        <p class=\"p1\" routerLink=\"/forgot\">Forgot Password?</p>\n        <div style=\"position:relative; z-index:11\">\n          <button (click)=\"login()\" class=\"btn\" mat-raised-button color=\"primary\" >Login</button>\n        </div>\n        <p>Create an account -<span class=\"span\" routerLink=\"/signup\"> Signup Now</span></p>\n      </div>\n    </form>\n  </div>\n</ion-content> -->\n\n\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"main-div\">\n    <form [formGroup]=\"regForm\" class=\"form_login\" (ngSubmit)=\"login()\">\n      <div class=\"setimg\">\n        <img src=\"../../../assets/icon/N_imgP.png\">\n      </div>\n      <div class=\"login\">\n        <img src=\"../../../assets/icon/logo_15.png\">\n      </div>\n      \n      <div class=\"matfield\">\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input matInput type=\"email\" id=\"email\" formControlName=\"email\">\n          <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('required')\">\n            Email address is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('email')?.hasError('pattern')\">\n            Please enter a valid email address\n          </mat-error>\n        </mat-form-field>\n        \n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Password</mat-label>\n          <input matInput formControlName=\"password\" [type]=\"showPassword ? 'text' : 'password'\" required>\n          <ion-icon class=\"icon\" matSuffix [name]=\"showPassword ? 'eye-off' : 'eye'\" (click)=\"togglePasswordVisibility()\"></ion-icon>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('required')\">\n            Password is required\n          </mat-error>\n          <mat-error *ngIf=\"regForm.get('password')?.hasError('pattern')\">\n            Please enter a password with at least one digit, one uppercase letter, one lowercase letter, and one special character.\n          </mat-error>\n        </mat-form-field>\n\n        <p class=\"p1\" routerLink=\"/forgot\">Forgot Password?</p>\n        <div style=\"position:relative; z-index:11\">\n          <ion-button type=\"submit\" class=\"btn\" mat-raised-button color=\"primary\">Login</ion-button>\n        </div>\n        <p>Create an account - <span class=\"span\" routerLink=\"/signup\">Signup Now</span></p>\n      </div>\n    </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 12032:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-input {\n  border: 1px solid;\n  width: 80%;\n  border-radius: 8px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.login {\n  margin-top: -15px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.main-div {\n  background: \"/../../src/assets/icon/simple-img.png\";\n}\n\n.setimg {\n  text-align: right;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.span {\n  color: #0081dc;\n}\n\n.p1 {\n  padding-right: 20px;\n  color: #0081dc;\n  margin-top: 0px !important;\n  text-align: right;\n  margin-bottom: 12px;\n}\n\n.matfield {\n  text-align: center;\n}\n\n.w-75 {\n  width: 90%;\n  margin: 0 10px;\n}\n\n.setimg2 {\n  position: fixed;\n  bottom: 0%;\n  left: 0%;\n  z-index: -1;\n}\n\n.form_login {\n  z-index: 111 !important;\n  background-color: #ffffff !important;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.custom-loading {\n  backdrop-filter: blur(4px);\n}\n\n.custom-spinner-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.custom-spinner-icon {\n  width: 50px;\n  height: 50px;\n}\n\n.custom-toast {\n  --background: #3880ff;\n  --color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0ksbURBQUE7QUFHSjs7QUFEQTtFQUNFLGlCQUFBO0FBSUY7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhFO0VBQ0UsaUJBQUE7QUFNSjs7QUFKRTs7RUFFRSxhQUFBO0FBT0o7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBUUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURBO0VBQ0csZUFBQTtFQUNELFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUlGOztBQURBO0VBQ0UsdUJBQUE7RUFFQSxvQ0FBQTtBQUdGOztBQUFBO0VBQ0Usc0NBQUE7QUFHRjs7QUFEQTtFQUEwQyxXQUFBO0FBSzFDOztBQUhBO0VBQ0kseUNBQUE7RUFDQSxpQkFBQTtBQU1KOztBQURBO0VBQ0UsMEJBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFJRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSUY7O0FBREE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFJRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pbnB1dHtcbiAgYm9yZGVyOiAxcHggc29saWQgO1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uZXJyb3J7XG4gICAgY29sb3I6cmVkO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IFxufSBcbi5sb2dpbntcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLWRpdntcbiAgICBiYWNrZ3JvdW5kOiAoJy8uLi8uLi9zcmMvYXNzZXRzL2ljb24vc2ltcGxlLWltZy5wbmcnKTtcbn1cbi5zZXRpbWd7XG4gIHRleHQtYWxpZ246cmlnaHQ7XG59XG4uZXhhbXBsZS1jb250YWluZXIgbWF0LWZvcm0tZmllbGQgKyBtYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfSBcbiAgLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbi5pY29ue1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOnJnYig5OSwgOTIsIDkyKTtcbn1cbi8vIC5idG57XG4vLyAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuLy8gICBoZWlnaHQ6IDQ0cHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdmZGMgIWltcG9ydGFudDtcbi8vICAgbWFyZ2luOiAwcHggMTZweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNTBweDtcbi8vICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuLy8gICBmb250LXNpemU6IDE2cHg7XG4vLyB9XG4uc3BhbntcbiAgY29sb3I6ICMwMDgxZGM7XG59XG4ucDF7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjMDA4MWRjO1xuICBtYXJnaW4tdG9wOiAwcHghaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5tYXRmaWVsZHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnctNzV7XG4gIHdpZHRoOjkwJTtcbiAgbWFyZ2luOiAwIDEwcHg7IFxufVxuLnNldGltZzJ7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmZvcm1fbG9naW57XG4gIHotaW5kZXg6IDExMSFpbXBvcnRhbnQ7XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC4zZW0gMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuNWVtOyB9XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xuICAgIHdpZHRoOiAxMzMuMzMzMzMlO1xufVxuXG5cblxuLmN1c3RvbS1sb2FkaW5nIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7IC8vIE9wdGlvbmFsOiBibHVyIGVmZmVjdCBmb3IgdGhlIGJhY2tkcm9wXG59XG5cbi5jdXN0b20tc3Bpbm5lci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmN1c3RvbS1zcGlubmVyLWljb24ge1xuICB3aWR0aDogNTBweDsgLy8gQ3VzdG9taXplIHRoZSBsb2dvIHNpemVcbiAgaGVpZ2h0OiA1MHB4OyAvLyBDdXN0b21pemUgdGhlIGxvZ28gc2l6ZVxufVxuXG4uY3VzdG9tLXRvYXN0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmOyAvLyBDdXN0b21pemUgdG9hc3QgYmFja2dyb3VuZCBjb2xvclxuICAtLWNvbG9yOiAjZmZmOyAvLyBDdXN0b21pemUgdG9hc3QgdGV4dCBjb2xvclxufVxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map