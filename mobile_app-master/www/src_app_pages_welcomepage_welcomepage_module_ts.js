"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_welcomepage_welcomepage_module_ts"],{

/***/ 71935:
/*!*****************************************************************!*\
  !*** ./src/app/pages/welcomepage/welcomepage-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomepagePageRoutingModule": () => (/* binding */ WelcomepagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _welcomepage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomepage.page */ 96581);




const routes = [
    {
        path: '',
        component: _welcomepage_page__WEBPACK_IMPORTED_MODULE_0__.WelcomepagePage
    }
];
let WelcomepagePageRoutingModule = class WelcomepagePageRoutingModule {
};
WelcomepagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomepagePageRoutingModule);



/***/ }),

/***/ 6141:
/*!*********************************************************!*\
  !*** ./src/app/pages/welcomepage/welcomepage.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomepagePageModule": () => (/* binding */ WelcomepagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _welcomepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomepage-routing.module */ 71935);
/* harmony import */ var _welcomepage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcomepage.page */ 96581);







//  import { AngularFireAuth } from '@angular/fire/auth';
let WelcomepagePageModule = class WelcomepagePageModule {
};
WelcomepagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _welcomepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomepagePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_welcomepage_page__WEBPACK_IMPORTED_MODULE_1__.WelcomepagePage]
    })
], WelcomepagePageModule);



/***/ }),

/***/ 96581:
/*!*******************************************************!*\
  !*** ./src/app/pages/welcomepage/welcomepage.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomepagePage": () => (/* binding */ WelcomepagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_welcomepage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./welcomepage.page.html */ 62421);
/* harmony import */ var _welcomepage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcomepage.page.scss */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 147);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service.service */ 59353);









let WelcomepagePage = class WelcomepagePage {
    constructor(platform, googlePlus, router, loadingController, service, toastController) {
        this.platform = platform;
        this.googlePlus = googlePlus;
        this.router = router;
        this.loadingController = loadingController;
        this.service = service;
        this.toastController = toastController;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Connecting ...'
            });
        });
    }
    go() {
        this.router.navigateByUrl('/login');
    }
    skipLogin() {
        localStorage.setItem('hasSkipped', 'true');
        this.router.navigateByUrl('/preferedcourses');
    }
    googleSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
                    this.service.googleusercreat(selectPara).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        console.log('User creation response:', response);
                        if (response && response.response_data) {
                            localStorage.setItem('response_data', JSON.stringify(response.response_data));
                        }
                        yield loading.dismiss(); // Dismiss loading spinner
                        yield this.presentToast('Login successful!', 'success');
                        this.router.navigateByUrl('/preferedcourses'); // Redirect to edit profile page
                    }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
                color,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
WelcomepagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_3__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
WelcomepagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-welcomepage',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_welcomepage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_welcomepage_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomepagePage);



/***/ }),

/***/ 62421:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/welcomepage/welcomepage.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <div style=\"    margin: 0;\n  position: absolute;\n  top: 55%;\n  left: 50%;\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 100%;\">\n    <!-- <div class=\"welcomeslides\">\n    </div> -->\n\n    <div class=\"welcome ion-padding\" style=\"text-align:center;\">\n      <img src=\"./../../../assets/icon/logo_15.png\">\n      <p>Hello</p>\n      <p>Welcome To <span style=\"color: var(--ion-color-primary);\">OhCampus.com</span></p>\n\n      <div class=\"wel-section\">\n        <ion-icon name=\"school\"></ion-icon>\n        <ion-label> <b>Explore 10,000+ Colleges & 6,000+ Courses </b>- Find the perfect college and program for you. </ion-label>\n        <div style=\"margin-top:6px\">\n          <img src=\"../../../assets/icon/notebook.png\">\n          <ion-label> <b>250+ Exams Insights</b> - Get details on entrance exams, eligibility, and tips.  </ion-label>\n        </div>\n        <div style=\"margin-top:6px\">\n          <img src=\"../../../assets/icon/speaking.png\">\n          <ion-label> <b>Student Reviews</b> - Read real student experiences and ask any questions for guidance. </ion-label>\n        </div>\n        <div style=\"margin-top:6px\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"margin-right: 10px;\n          fill: #ad9187;\"  width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-briefcase-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5\"/>\n            <path d=\"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z\"/>\n          </svg>\n          <ion-label> <b>Personalized Admission Guidance</b> - Simplify your admission process with expert advice. </ion-label>\n        </div>\n      </div>\n      </div>\n\n    <div class=\"welcomeFooter\">\n\n      \n      <p>Sign up using</p>\n    \n       <ion-button fill=\"outline\" shape=\"round\" *ngIf=\"!isGoogleLogin\" (click)=\"googleSignIn()\" >\n        <img src=\"../../../assets/icon/search.png\">Google\n        </ion-button> \n \n\n      <ion-button fill=\"outline\"  shape=\"round\" routerLink=\"/gmailform\">\n        <ion-icon name=\"mail\" slot=\"start\" class=\"e\" ></ion-icon>Email\n      </ion-button>\n      <p>Already have an account? <span routerLink=\"/login\">Login</span></p>\n\n      <span  (click)=\"skipLogin()\">Skip and start the search</span>\n    </div>\n\n  \n  <div *ngIf=\"isGoogleLogin\">\n    <ion-card>\n  <ion-card-header>\n    <ion-card-title class=\"ion-text-center\"><b>{{user.displayName}}</b></ion-card-title>\n   \n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-img [src]=\"user.photoURL\" style=\"border-radius: 1px;\"></ion-img>\n    <ion-item>\n      <ion-label>email:</ion-label>\n      <span>{{user.email}}</span>\n    </ion-item>\n  </ion-card-content>\n</ion-card>\n</div>\n\n</div>\n</ion-content>\n\n\n\n\n\n\n");

/***/ }),

/***/ 36362:
/*!*********************************************************!*\
  !*** ./src/app/pages/welcomepage/welcomepage.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".welcomeslides h1 {\n  color: var(--ion-color-primary);\n  margin: 1rem;\n}\n\n.welcome h1 {\n  font-weight: 600;\n  margin: 3rem 0 0;\n  text-align: center;\n}\n\n.welcome p {\n  margin-top: 10px;\n  margin: 0;\n  font-size: 16px;\n  color: #424242;\n}\n\n.welcome ion-icon {\n  width: 20px;\n  height: 20px;\n  vertical-align: bottom;\n  margin-right: 10px;\n}\n\n.welcome .red {\n  color: red;\n  fill: red;\n  background: #fff5e7;\n}\n\n.welcome .green {\n  color: #45cb45;\n  background: #e5ffc6;\n}\n\n.welcome .yellow {\n  color: #FFC107;\n  background: #fffaca;\n}\n\n.welcomeFooter {\n  text-align: center;\n  background: whitesmoke;\n  height: 38vh;\n  width: 100%;\n  padding-top: 16px;\n}\n\n.welcomeFooter p {\n  color: gray;\n  margin-bottom: 1.5rem;\n}\n\n.welcomeFooter span {\n  color: var(--ion-color-primary);\n}\n\n.welcomeFooter ion-button {\n  --border-color: #d5d5d5;\n  color: gray;\n  text-transform: capitalize;\n  font-weight: 500;\n}\n\n.welcomeFooter ion-button ion-icon.e {\n  color: var(--ion-color-primary);\n}\n\n.welcomeFooter ion-button img {\n  width: 16px;\n  height: 16px;\n  margin-right: 8px;\n}\n\n.wel-section {\n  margin-top: 1rem;\n  font-size: 16px;\n  color: #424242;\n}\n\n.wel-section b {\n  color: #000;\n  font-weight: 600 !important;\n  letter-spacing: 0.5px;\n}\n\n.wel-section img {\n  width: 22px;\n  height: 22px;\n  vertical-align: bottom;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWVwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtBQURSOztBQUtJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRlI7O0FBSUk7RUFJUSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUxaOztBQVFJO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBUFI7O0FBU0k7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBUFI7O0FBU0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFQUjs7QUFTSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQVBSOztBQVdBO0VBU0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFoQko7O0FBa0JJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FBaEJSOztBQWtCSTtFQUNJLCtCQUFBO0FBaEJSOztBQWtCSTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFoQlI7O0FBa0JRO0VBQ0ksK0JBQUE7QUFoQlo7O0FBa0JRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWhCWjs7QUF1QkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBcEJKOztBQXFCSTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBbkJSOztBQXFCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQW5CUiIsImZpbGUiOiJ3ZWxjb21lcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi53ZWxjb21lc2xpZGVze1xuICAgIGgxe1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgfVxufVxuLndlbGNvbWV7XG4gICAgaDF7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbjogM3JlbSAwIDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgcHtcbiAgICAgICBcblxuICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6MTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgIFxuICAgIH1cbiAgICBpb24taWNvbntcbiAgICAgICBcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAucmVke1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBmaWxsOiByZWQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY1ZTc7XG4gICAgfVxuICAgIC5ncmVlbntcbiAgICAgICAgY29sb3I6ICM0NWNiNDU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNWZmYzY7XG4gICAgfVxuICAgIC55ZWxsb3d7XG4gICAgICAgIGNvbG9yOiAjRkZDMTA3O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmYWNhO1xuICAgIH1cblxufVxuLndlbGNvbWVGb290ZXJ7XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIG1hcmdpbi10b3A6IDJyZW07XG4gICAgLy8gYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICAvLyBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmctdG9wOiAxNnB4O1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgaGVpZ2h0OiAzOHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIFxuICAgIHB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZDVkNWQ1O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIFxuICAgICAgICBpb24taWNvbi5le1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLndlbC1zZWN0aW9ue1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgY29sb3I6ICM0MjQyNDI7XG4gICAgYntcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_welcomepage_welcomepage_module_ts.js.map