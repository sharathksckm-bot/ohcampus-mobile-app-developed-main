"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_editprofile_editprofile_module_ts"],{

/***/ 29938:
/*!*****************************************************************!*\
  !*** ./src/app/pages/editprofile/editprofile-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePageRoutingModule": () => (/* binding */ EditprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile.page */ 72749);




const routes = [
    {
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_0__.EditprofilePage
    }
];
let EditprofilePageRoutingModule = class EditprofilePageRoutingModule {
};
EditprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditprofilePageRoutingModule);



/***/ }),

/***/ 64686:
/*!*********************************************************!*\
  !*** ./src/app/pages/editprofile/editprofile.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePageModule": () => (/* binding */ EditprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile-routing.module */ 29938);
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editprofile.page */ 72749);







let EditprofilePageModule = class EditprofilePageModule {
};
EditprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditprofilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_1__.EditprofilePage]
    })
], EditprofilePageModule);



/***/ }),

/***/ 72749:
/*!*******************************************************!*\
  !*** ./src/app/pages/editprofile/editprofile.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePage": () => (/* binding */ EditprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./editprofile.page.html */ 38938);
/* harmony import */ var _editprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editprofile.page.scss */ 67182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 147);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popuplogsign/popuplogsign.page */ 74303);










let EditprofilePage = class EditprofilePage {
    constructor(service, activatedRoute, router, googlePlus, modalController, formBuilder) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.googlePlus = googlePlus;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.getResponseDataFromLocalStorage();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            console.log('User information:', user);
            this.loginuserId = user.id;
            console.log(this.loginuserId);
            this.username = user.name;
            this.email = user.email;
        }
        else {
            console.log('No user information found in local storage.');
        }
        // const storedUserData = localStorage.getItem('userData');
        //   if (storedUserData) {
        //     this.userData = JSON.parse(storedUserData);
        //     console.log(this.userData);
        //     // this.token = this.userData.accesstoken;
        //     this.email = this.userData.email;
        //     this.username = this.userData.displayName;
        //     this.loginuserId = this.userData.userId;
        //     console.log(this.loginuserId);
        //   }else {
        //     console.log('No google user information found in local storage.');
        //   }
    }
    presentSignInModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__.PopuplogsignPage,
            });
            return yield modal.present();
        });
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    // getResponseDataFromLocalStorage() {
    //   // Get the stored response_data from localStorage
    //   const storedResponseData = localStorage.getItem('response_data');
    //   // Check if there is stored data
    //   if (storedResponseData) {
    //     // Parse the JSON string back into an object or array
    //     this.responseData = JSON.parse(storedResponseData);
    //     // Access specific data, such as id
    //     if (Array.isArray(this.responseData) && this.responseData.length > 0) {
    //       this.loginuserId = this.responseData[0].id; // Extract the 'id'
    //       console.log('User ID:', this.loginuserId);
    //       console.log('Full Response Data:', this.responseData);
    //     } else {
    //       console.error('response_data is not an array or is empty.');
    //     }
    //   } else {
    //     console.error('No response_data found in localStorage.');
    //   }
    // }
    getResponseDataFromLocalStorage() {
        const storedResponseData = localStorage.getItem('response_data');
        if (storedResponseData) {
            const responseData = JSON.parse(storedResponseData);
            // Ensure that responseData is not empty and has at least one entry
            if (responseData && responseData.length > 0) {
                this.loginuserId = responseData[0].id;
                this.username = responseData[0].f_name;
                this.email = responseData[0].email;
                this.phone = responseData[0].phone;
                this.token = responseData[0].token;
                console.log('User ID:', this.loginuserId);
                console.log('First Name:', this.username);
                console.log('Email:', this.email);
                console.log('Phone:', this.phone);
                console.log('Token:', this.token);
            }
            else {
                console.log('No user data found in response_data.');
            }
        }
        else {
            console.log('No response_data found in local storage.');
        }
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                // Clear Google session to force account selection next time
                yield this.googlePlus.logout();
                // Clear user data from local storage
                localStorage.removeItem('user');
                localStorage.removeItem('response_data');
                localStorage.clear(); // Clears all local storage
                // Navigate to the welcome page
                this.router.navigate(['/welcomepage']);
                console.log('User successfully logged out');
            }
            catch (error) {
                console.error('Error during logout:', error);
                // await this.presentToast('Logout failed. Please try again.', 'danger');
            }
        });
    }
    logout1() {
        localStorage.removeItem('user');
        localStorage.removeItem('response_data');
        localStorage.clear();
        // Navigate to the welcome page
        this.router.navigate(['/welcomepage']);
    }
};
EditprofilePage.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__.GooglePlus },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder }
];
EditprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-editprofile',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditprofilePage);



/***/ }),

/***/ 38938:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/editprofile/editprofile.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n\n\n <ion-header [translucent]=\"true\">\n  <ion-toolbar >\n    <ion-grid >\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-icon name=\"arrow-back\" routerLink=\"/tabs/tabs/tab1\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"8\" class=\"text-center\">\n          <h5 class=\"primaryhead m0\">Profile </h5>\n        </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header> \n\n<ion-content [fullscreen]=\"true\" style=\"--background:aliceblue ;\">\n  <div class=\"profbox\">\n  <ion-list>\n\n  <ion-item class=\"profilehead\" lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img alt=\"Silhouette of a person's head\" src=\"https://ionicframework.com/docs/img/demos/avatar.svg\" />\n    </ion-avatar>\n    <ion-label> \n      <h6>{{username}}</h6>\n     \n    </ion-label>\n  </ion-item>\n\n\n  <ion-item lines=\"full\" class=\"ion-margin-top\" *ngIf=\"email\">\n    <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n    <ion-label> {{email}}</ion-label>\n  </ion-item>\n\n \n  <ion-item lines=\"full\" *ngIf=\"email\"  (click)=\"logout()\" (click)=\"logout1()\" >\n    <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n    <ion-label> Log Out</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"full\" *ngIf=\"!email\" (click)=\"presentSignInModal()\">\n    <ion-icon name=\"log-in-outline\" slot=\"start\"></ion-icon>\n    <ion-label> Log In</ion-label>\n  </ion-item>\n\n</ion-list>\n</div>\n</ion-content>\n\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 67182:
/*!*********************************************************!*\
  !*** ./src/app/pages/editprofile/editprofile.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".profilehead {\n  margin-top: 1rem;\n  height: 85px;\n  --background: var(--ion-color-primary);\n}\n.profilehead ion-avatar {\n  width: 60px;\n  height: 60px;\n  border: 2px solid #ffffff;\n}\n.profilehead h6 {\n  font-size: 18px;\n  font-weight: 500;\n  color: #fff;\n}\n.profbox ion-list {\n  margin: 1rem 10px;\n  border-radius: 10px;\n  padding: 0;\n  background: var(--ion-color-primary);\n}\n.profbox ion-list ion-item:last-child {\n  --border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBQUo7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNSO0FBSUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0FBREo7QUFHRTtFQUNFLGlCQUFBO0FBREoiLCJmaWxlIjoiZWRpdHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHJvZmlsZWhlYWR7XG4gICAgbWFyZ2luLXRvcDogMXJlbTsgXG4gICAgaGVpZ2h0OiA4NXB4O1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGlvbi1hdmF0YXJ7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgfVxuICAgIGg2e1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLnByb2Zib3h7XG4gIGlvbi1saXN0e1xuICAgIG1hcmdpbjogMXJlbSAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgaW9uLWxpc3QgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIH1cbiBcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_editprofile_editprofile_module_ts.js.map