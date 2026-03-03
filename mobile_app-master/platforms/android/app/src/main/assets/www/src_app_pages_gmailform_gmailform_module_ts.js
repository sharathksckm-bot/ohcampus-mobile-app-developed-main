"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_gmailform_gmailform_module_ts"],{

/***/ 51053:
/*!*************************************************************!*\
  !*** ./src/app/pages/gmailform/gmailform-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GmailformPageRoutingModule": () => (/* binding */ GmailformPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _gmailform_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gmailform.page */ 30555);




const routes = [
    {
        path: '',
        component: _gmailform_page__WEBPACK_IMPORTED_MODULE_0__.GmailformPage
    }
];
let GmailformPageRoutingModule = class GmailformPageRoutingModule {
};
GmailformPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GmailformPageRoutingModule);



/***/ }),

/***/ 343:
/*!*****************************************************!*\
  !*** ./src/app/pages/gmailform/gmailform.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GmailformPageModule": () => (/* binding */ GmailformPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _gmailform_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gmailform-routing.module */ 51053);
/* harmony import */ var _gmailform_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gmailform.page */ 30555);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);















let GmailformPageModule = class GmailformPageModule {
};
GmailformPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gmailform_routing_module__WEBPACK_IMPORTED_MODULE_0__.GmailformPageRoutingModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOptionModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule
        ],
        declarations: [_gmailform_page__WEBPACK_IMPORTED_MODULE_1__.GmailformPage]
    })
], GmailformPageModule);



/***/ }),

/***/ 30555:
/*!***************************************************!*\
  !*** ./src/app/pages/gmailform/gmailform.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GmailformPage": () => (/* binding */ GmailformPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gmailform_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./gmailform.page.html */ 51922);
/* harmony import */ var _gmailform_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gmailform.page.scss */ 96520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 147);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);












let GmailformPage = class GmailformPage {
    constructor(platform, googlePlus, formBuilder, router, service, loadingController, toastController, alertController, modalController) {
        this.platform = platform;
        this.googlePlus = googlePlus;
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.showPassword = false;
        this.showConfirmPassword = false;
        this.otp = ['', '', '', '', '', ''];
        this.isGoogleLogin = false;
        this.showOtpSection = false;
        this.signForm = this.formBuilder.group({
            agreements: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue]
        });
    }
    ngOnInit() {
        this.signForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \'-]+$')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
            confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.passwordMatchValidator()]],
            mobilenum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]{10}$')]],
            agreements: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue],
            Otp: [''],
        });
    }
    glogin() {
        this.router.navigateByUrl('/gloginform');
    }
    go() {
        this.router.navigateByUrl('/welcomepage');
    }
    // async googleSignIn() {
    //   if (this.platform.is('android')) {
    //     const loading = await this.loadingController.create({
    //       message: 'Please wait...',
    //       duration: 5000 // Set a timeout for 5 seconds
    //     });
    //     await loading.present();
    //     try {
    //       const fingerprint = await this.googlePlus.getSigningCertificateFingerprint();
    //       const result = await this.googlePlus.login({});
    //       this.userData = result;
    //       const selectPara = {
    //         fname: this.userData.displayName,
    //         device_id: localStorage.getItem('device_token'),
    //         platform: 'android',
    //         login_with: 'gmail',
    //         email: this.userData.email
    //       };
    //       localStorage.setItem('userData', JSON.stringify(this.userData));
    //       this.router.navigateByUrl('/preferedcourses').then(() => {
    //         loading.dismiss(); 
    //         window.location.reload(); 
    //       });
    //     } catch (err) {
    //       loading.dismiss(); 
    //       console.error('Google login error:', err);
    //       try {
    //         await this.googlePlus.logout();
    //       } catch (logoutError) {
    //       }
    //     }
    //   }
    // }
    googleSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is('android')) {
                const loading = yield this.loadingController.create({
                    message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
         <span style="margin-top: 10px;"></span>`,
                    spinner: null,
                    translucent: true,
                    cssClass: 'custom-loading' // Optional: custom CSS class for additional styling
                });
                try {
                    yield loading.present(); // Show the loading spinner
                    const fingerprint = yield this.googlePlus.getSigningCertificateFingerprint();
                    console.log(fingerprint);
                    const result = yield this.googlePlus.login({
                        offline: true // Ensures account selection each time
                    });
                    this.response_data = result;
                    console.log(this.response_data);
                    const selectPara = {
                        fname: this.response_data.displayName,
                        email: this.response_data.email,
                        device_id: localStorage.getItem('device_token'),
                        platform: 'android',
                        type: "loginwithgoogle",
                        otp: "",
                        password: "",
                        mobile_no: "",
                    };
                    // localStorage.setItem('111response_data', JSON.stringify(this.response_data));
                    this.service.googleusercreat(selectPara).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        console.log('User creation response:', response);
                        if (response && response.response_data) {
                            localStorage.setItem('response_data', JSON.stringify(response.response_data));
                        }
                        yield loading.dismiss(); // Dismiss loading spinner
                        yield this.presentToast('Login successful!', 'success');
                        this.router.navigateByUrl('/preferedcourses'); // Redirect to edit profile page
                    }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        console.error('API error:', error);
                        yield loading.dismiss(); // Dismiss loading spinner
                        yield this.presentToast('Google login failed. Please try again.', 'danger');
                    }));
                }
                catch (err) {
                    console.error('Google Login Error:', JSON.stringify(err));
                    yield loading.dismiss();
                    yield this.presentToast(`Error: ${JSON.stringify(err)}`, 'danger');
                    this.googlePlus.logout()
                        .then(res => {
                        console.log(res);
                    }, err => {
                        console.log(err);
                    });
                }
            }
        });
    }
    presentToast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
                color,
                position: 'bottom'
            });
            toast.present();
        });
    }
    togglePasswordVisibility(field) {
        if (field === 'password') {
            this.showPassword = !this.showPassword;
        }
        else if (field === 'cpassword') {
            this.showConfirmPassword = !this.showConfirmPassword;
        }
    }
    sign() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.signForm.valid) {
                try {
                    this.service.signup(this.signForm.value).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        this.showOtpSection = true;
                        const email = this.signForm.get('email').value;
                        const password = this.signForm.get('password').value;
                        const mobile = this.signForm.get('mobile').value;
                        const Otp = this.signForm.get('Otp').value;
                        this.Otp = this.signForm.value.Otp;
                        this.email = this.signForm.value.email;
                        localStorage.setItem('email', email);
                        localStorage.setItem('password', password);
                        localStorage.setItem('mobilenum', mobile);
                    }));
                }
                catch (error) {
                    console.error('Error occurred during registration:', error);
                }
            }
            else {
                this.signForm.markAllAsTouched();
            }
        });
    }
    passwordMatchValidator() {
        return (control) => {
            const password = control.root.get('password');
            return password && control.value !== password.value ? { passwordMismatch: true } : null;
        };
    }
    checkValidInputData(event) {
        const pattern = /^[A-Za-z]+$/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    cancel() {
        this.modal.dismiss('/signup');
        this.modalController.dismiss({
            dismissed: true,
        });
    }
    submit() {
        if (this.signForm.invalid) {
            this.alertController.create({
                header: 'Form Validation Error',
                message: 'Please fill in all required fields correctly before submitting.',
                buttons: ['OK']
            }).then(alert => {
                alert.present();
            });
            return;
        }
        console.log('form.values', this.signForm.value);
        console.log('form.values', this.signForm.value);
        let selectpara = {
            "form": this.signForm.value,
            "deviceID": localStorage.getItem('device_token'),
            // localStorage.getItem('device_token'),
            "platform": "android"
        };
        this.service.signup(selectpara).subscribe(res => {
            if (res.response_code === '300') {
                // Handle the specific response code
                this.alertController.create({
                    header: '',
                    message: 'This user already exists! Please try another or log in.',
                    buttons: ['OK']
                }).then(alert => {
                    alert.present();
                });
                return;
            }
            console.log(res);
            console.log(this.signForm.value);
            this.signForm.get('Otp').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
            this.showOtpSection = true;
            const email = this.signForm.get('email').value;
            const password = this.signForm.get('password').value;
            const mobile = this.signForm.get('mobile').value;
            const Otp = this.signForm.get('Otp').value;
            this.Otp = this.signForm.value.Otp;
            this.email = this.signForm.value.email;
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('mobilenum', mobile);
            // this.startTimer();
        }, error => {
            // Handle any errors from the service call
            this.alertController.create({
                header: 'Error',
                message: 'An error occurred while submitting the form. Please try again.',
                buttons: ['OK']
            }).then(alert => {
                alert.present();
            });
        });
    }
    submitOtp() {
        this.email = this.signForm.get('email').value;
        this.Otp = this.signForm.get('Otp').value;
        this.service.verifyotp(this.email, this.Otp).subscribe((res) => {
            if (res.response_code === "200") {
                this.alertController.create({
                    header: 'Success',
                    message: 'OTP verified successfully!',
                    buttons: ['OK']
                }).then(alert => {
                    alert.present();
                });
                this.router.navigateByUrl('/login');
            }
            else if (res.response_code == "400") {
                // Show alert if user already exists
                this.alertController.create({
                    header: 'Error',
                    message: 'Invalid OTP. Please try again.',
                    buttons: ['OK']
                }).then(alert => {
                    alert.present();
                });
            }
        }, (error) => {
            console.error('Error occurred during OTP verification:', error);
        });
    }
};
GmailformPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
GmailformPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal,] }]
};
GmailformPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-gmailform',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_gmailform_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gmailform_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GmailformPage);



/***/ }),

/***/ 51922:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/gmailform/gmailform.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n <ion-content>\n\n  <ion-row class=\"ion-align-items-center ion-padding-top\">\n    <ion-col size=\"2\" class=\"text-center\">\n      <ion-icon class=\"closeicon\" name=\"close-outline\" (click)=\"go()\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"7\">\n      <div class=\"seticon\">\n        <img class=\"iconsize\" src=\"../assets/icon/logo_15.png\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\">\n      <h5 class=\"loginh5\" (click)=\"glogin()\">Login</h5>\n    </ion-col>\n   </ion-row>\n\n<div class=\"setlets\">\n  <h5>Let's get you started!</h5>\n  <p>Sign up to discover insights on colleges, exams, courses, and more, tailored just for you</p>\n</div>\n\n  <div class=\"googldiv\" *ngIf=\"!isGoogleLogin\" (click)=\"googleSignIn()\">\n    <img class=\"googlelogo\" src=\"../../../assets/icon/search.png\">Sign up with Google</div> \n\n    <p class=\"or-divider\">OR</p>\n\n\n<form [formGroup]=\"signForm\" class=\"gmailform\" >\n \n  <div class=\"matfield\">\n    <div *ngIf=\"!showOtpSection\">\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Enter your name\" formControlName=\"name\"\n        >\n        <ion-icon name=\"person-outline\" class=\"icon\" matSuffix></ion-icon>\n        <mat-error *ngIf=\"signForm.get('name').errors?.required && signForm.get('name').touched\">\n          Name is required\n        </mat-error>\n        <mat-error *ngIf=\"signForm.get('name').errors?.pattern && signForm.get('name').touched\">\n          Only alphabets are allowed\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Email</mat-label>\n        <input matInput placeholder=\"Enter your email address\" formControlName=\"email\">\n        <ion-icon class=\"icon\" matSuffix name=\"mail-outline\"></ion-icon>\n        <mat-error *ngIf=\"signForm.get('email').errors?.required && signForm.get('email').touched\">\n          Email address is required\n        </mat-error>\n        <mat-error *ngIf=\"signForm.get('email').errors?.email && signForm.get('email').touched\">\n          Please enter a valid email address\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Password</mat-label>\n        <input matInput formControlName=\"password\" [type]=\"showPassword ? 'text' : 'password'\"\n          placeholder=\"Enter your password\">\n        <ion-icon class=\"icon\" matSuffix [name]=\"showPassword ? 'eye-off-outline' : 'eye-outline'\"\n          (click)=\"togglePasswordVisibility('password')\"></ion-icon>\n        <mat-error *ngIf=\"signForm.get('password').errors?.required && signForm.get('password').touched\">\n          Password is required\n        </mat-error>\n        <mat-error *ngIf=\"signForm.get('password').errors?.minlength && signForm.get('password').touched\">\n          Password must be at least 6 characters long\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Confirm Password</mat-label>\n        <input matInput formControlName=\"confirmpassword\" [type]=\"showConfirmPassword ? 'text' : 'password'\"\n          placeholder=\"Confirm your password\">\n        <ion-icon class=\"icon\" matSuffix [name]=\"showConfirmPassword ? 'eye-off-outline' : 'eye-outline'\"\n          (click)=\"togglePasswordVisibility('confirmpassword')\"></ion-icon>\n        <mat-error\n          *ngIf=\"signForm.get('confirmpassword').errors?.required && signForm.get('confirmpassword').touched\">\n          Confirm password is required\n        </mat-error>\n        <mat-error\n          *ngIf=\"signForm.get('confirmpassword').errors?.passwordMismatch && signForm.get('confirmpassword').touched\">\n          Passwords do not match\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n        <mat-label>Mobile No</mat-label>\n        <input matInput placeholder=\"Enter your Mobile Number\" formControlName=\"mobilenum\" type=\"tel\" maxlength=\"10\">\n        <ion-icon class=\"icon\" matSuffix name=\"call-outline\"></ion-icon>\n        <mat-error *ngIf=\"signForm.get('mobilenum').hasError('required') && signForm.get('mobilenum').touched\">\n          Mobile Number is required\n        </mat-error>\n        <mat-error *ngIf=\"signForm.get('mobilenum').hasError('pattern') && signForm.get('mobilenum').touched\">\n          Please enter a valid 10-digit Mobile Number\n        </mat-error>\n      </mat-form-field>\n\n\n      <mat-checkbox formControlName=\"agreements\" class=\"termscon\"  color=\"primary\">\n        <span class=\"termstext\" style=\"color: black;\">I agree to the OhCampus Terms and Conditions <br>and privacy policy and  provide consent to be <br> contacted for promotion via whatsapp, sms,mail,<br>etc. </span>\n      </mat-checkbox>\n       \n    </div>\n  <div *ngIf=\"showOtpSection\">\n    <mat-form-field class=\"w-75\" appearance=\"outline\" >\n      <mat-label>OTP</mat-label>\n      <input matInput placeholder=\"Enter your  Otp\" formControlName=\"Otp\">\n      <mat-error *ngIf=\"signForm.get('Otp').errors?.required && signForm.get('Otp').touched\">\n        Otp is required\n      </mat-error>\n      <mat-error *ngIf=\"signForm.get('Otp').errors?.email && signForm.get('Otp').touched\">\n        Please enter a valid Otp\n      </mat-error>   \n    </mat-form-field>\n  </div>\n   \n    <ion-button *ngIf=\"!showOtpSection\" (click)=\"submit()\"  class=\"dsa\"  mat-raised-button color=\"primary\" >Sign up</ion-button>\n    <ion-button *ngIf=\"showOtpSection\" (click)=\"submitOtp()\" class=\"dsa\"  mat-raised-button color=\"primary\">Verify OTP</ion-button>\n   \n   \n \n\n  </div>\n \n</form>\n\n\n\n<div *ngIf=\"isGoogleLogin\">\n  <ion-card>\n<ion-card-header>\n  <ion-card-title class=\"ion-text-center\"><b>{{user.displayName}}</b></ion-card-title>\n \n</ion-card-header>\n\n<ion-card-content>\n  <ion-img [src]=\"user.photoURL\" style=\"border-radius: 1px;\"></ion-img>\n  <ion-item>\n    <ion-label>email:</ion-label>\n    <span>{{user.email}}</span>\n  </ion-item>\n</ion-card-content>\n</ion-card>\n</div>\n\n</ion-content> \n\n\n\n");

/***/ }),

/***/ 96520:
/*!*****************************************************!*\
  !*** ./src/app/pages/gmailform/gmailform.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".setform {\n  padding: 14px;\n}\n\n.w-75 {\n  width: 323px;\n}\n\n.setfield {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0 !important;\n}\n\n.btnclass {\n  text-align: center;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.setp {\n  text-align: center;\n}\n\n.span {\n  color: #007fdc;\n  font-weight: 500;\n}\n\n.seticon {\n  text-align: center;\n}\n\n.icons {\n  height: 35px;\n  width: 36px;\n  margin-right: 5px;\n}\n\n.iconss {\n  height: 28px;\n  width: 27px;\n  margin-right: 5px;\n  margin-top: 4px;\n}\n\n.settext {\n  margin: 0;\n  font-size: 12px;\n}\n\n.setspn {\n  color: #007fdc;\n  font-weight: 500;\n}\n\n.setcol {\n  display: flex;\n}\n\n.iconsize {\n  height: 40px;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.mobnofield {\n  margin-top: 1rem;\n  display: flex;\n}\n\n.mobnofield .ccode {\n  width: 35%;\n}\n\n.googldiv {\n  display: flex;\n  border: 1px solid gray;\n  border-radius: 50px;\n  margin: auto;\n  width: 80%;\n  font-size: 16px;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  height: 42px;\n}\n\n.googlelogo {\n  width: 24px;\n  position: relative;\n  right: 15px;\n}\n\n.loginh5 {\n  color: #1388de;\n  text-align: center;\n  margin: 0px;\n}\n\n.or-divider {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  color: #000;\n  /* Change the color as needed */\n  font-size: 16px;\n  /* Adjust the font size as needed */\n  margin: 20px 35px;\n}\n\n.or-divider::before,\n.or-divider::after {\n  content: \"\";\n  flex: 1;\n  border-bottom: 1px solid lightgray;\n  /* Change the line color as needed */\n  margin: 0 10px;\n}\n\n.setlets {\n  margin: 18px 28px;\n}\n\n.setlets h5 {\n  font-weight: 500;\n  font-size: 23px;\n}\n\n.closeicon {\n  font-size: 26px;\n}\n\n.gmailform {\n  text-align: center;\n  padding-bottom: 10px;\n}\n\n.btn {\n  margin: 15px;\n}\n\n.signupbtn {\n  background: #ebebeb57;\n  /* border-radius: 10px; */\n  display: flex;\n  border: 1px solid gray;\n  border-radius: 50px;\n  margin: auto;\n  width: 80%;\n  font-size: 16px;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  height: 42px;\n  color: black;\n  box-shadow: none;\n}\n\n.btn {\n  width: 30%;\n  height: 37px;\n  width: -webkit-fill-available;\n  height: 44px;\n  background-color: #007fdc !important;\n  margin: 0px 16px;\n  border-radius: 50px;\n  box-shadow: none !important;\n  --border-radius: 50px;\n  border-radius: 50px;\n}\n\n.dsa {\n  width: 30%;\n  height: 37px;\n  width: -webkit-fill-available;\n  height: 44px;\n  background-color: #007fdc !important;\n  margin: 0px 16px;\n  border-radius: 50px;\n  box-shadow: none !important;\n  --border-radius: 50px;\n  border-radius: 50px;\n}\n\n::ng-deep .mat-checkbox.termscon {\n  margin: 0px 20px 10px;\n}\n\n::ng-deep .mat-checkbox.termscon .mat-checkbox-inner-container {\n  display: inline-block;\n  height: 16px;\n  line-height: 0;\n  margin-right: 8px;\n  order: 0;\n  position: relative;\n  white-space: nowrap;\n  width: 16px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n\n::ng-deep .mat-checkbox.termscon .mat-checkbox-layout .mat-checkbox-label {\n  line-height: 20px;\n}\n\n.termstext {\n  font-size: 14px;\n  text-wrap: wrap;\n  display: block;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdtYWlsZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBR0E7RUFHSSxXQUFBO0FBRko7O0FBSUE7RUFDSSxvQkFBQTtBQURKOztBQUlBO0VBQ0csa0JBQUE7QUFESDs7QUFNQTtFQUNJLHNDQUFBO0FBSEo7O0FBS0U7RUFBMEMsV0FBQTtBQUQ1Qzs7QUFHRTtFQUNJLHlDQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDRyxjQUFBO0VBQ0ksZ0JBQUE7QUFDUDs7QUFFQTtFQUVJLGtCQUFBO0FBQUo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREo7O0FBR0E7RUFDSSxZQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFSOztBQUtBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNHLGNBQUE7RUFDSSxnQkFBQTtBQUZQOztBQUtBO0VBQ0ksYUFBQTtBQUZKOztBQUtBO0VBRUksWUFBQTtBQUhKOztBQU1BO0VBQ0ksZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQUhKOztBQUlJO0VBQ0ksVUFBQTtBQUZSOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFBYSwrQkFBQTtFQUNiLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsaUJBQUE7QUFESjs7QUFJRTs7RUFFRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtDQUFBO0VBQW9DLG9DQUFBO0VBQ3BDLGNBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0FBQUo7O0FBQ0k7RUFDSSxnQkFBQTtFQUNKLGVBQUE7QUFDSjs7QUFJRTtFQUNFLGVBQUE7QUFESjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFGSjs7QUFLRTtFQUNFLFlBQUE7QUFGSjs7QUFLRTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFPRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBUUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFBO0VBQ0kscUJBQUE7QUFMSjs7QUFPRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSko7O0FBTUU7RUFDRSxpQkFBQTtBQUhKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFGSiIsImZpbGUiOiJnbWFpbGZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldGZvcm17XG4gICAgcGFkZGluZzoxNHB4O1xufVxuXG4udy03NXtcbiAgICB3aWR0aDogMzIzcHg7XG59XG5cblxuLnNldGZpZWxke1xuICAgXG4gIFxuICAgIHdpZHRoOjEwMCVcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBtYXJnaW46MCFpbXBvcnRhbnQ7IFxufVxuXG4uYnRuY2xhc3N7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICBcbiAgIH1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAwLjNlbSAwcHggMTBweCAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuNWVtOyB9XG4gIFxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xuICAgICAgd2lkdGg6IDEzMy4zMzMzMyU7XG4gIH1cblxuLnNldHB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNwYW57XG4gICBjb2xvcjogIzAwN2ZkYztcbiAgICAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2V0aWNvbntcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmljb25ze1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDt9XG5cbi5pY29uc3N7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICB3aWR0aDogMjdweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbn1cblxuXG5cbi5zZXR0ZXh0e1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zZXRzcG57XG4gICBjb2xvcjogIzAwN2ZkYztcbiAgICAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2V0Y29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pY29uc2l6ZXtcblxuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkICsgbWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cblxuLm1vYm5vZmllbGR7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5jY29kZXtcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICB9XG59XG5cbi5nb29nbGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNDJweDtcbn1cblxuLmdvb2dsZWxvZ297XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAxNXB4O1xufVxuXG4ubG9naW5oNXtcbiAgICBjb2xvcjojMTM4OGRlOztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5vci1kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMDAwOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIGFzIG5lZWRlZCAqL1xuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogQWRqdXN0IHRoZSBmb250IHNpemUgYXMgbmVlZGVkICovXG4gICAgbWFyZ2luOiAyMHB4IDM1cHg7XG4gIH1cbiAgXG4gIC5vci1kaXZpZGVyOjpiZWZvcmUsXG4gIC5vci1kaXZpZGVyOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5OyAvKiBDaGFuZ2UgdGhlIGxpbmUgY29sb3IgYXMgbmVlZGVkICovXG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbiAgXG4gIC5zZXRsZXRze1xuICAgIG1hcmdpbjogMThweCAyOHB4O1xuICAgIGg1e1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB9XG4gIH1cblxuXG4gIC5jbG9zZWljb257XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG5cblxuICAuZ21haWxmb3Jte1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5idG57XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG5cbiAgLnNpZ251cGJ0bntcbiAgICBiYWNrZ3JvdW5kOiAjZWJlYmViNTc7XG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNDJweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG5cblxuICAuYnRue1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGhlaWdodDogNDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZmRjICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuXG4uZHNhe1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAzN3B4O1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGhlaWdodDogNDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZmRjICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gudGVybXNjb257XG4gICAgbWFyZ2luOiAwcHggMjBweCAxMHB4O1xuICB9XG4gIDo6bmctZGVlcCAubWF0LWNoZWNrYm94LnRlcm1zY29uIC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIG9yZGVyOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgfVxuICA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC50ZXJtc2NvbiAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAudGVybXN0ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gmailform_gmailform_module_ts.js.map