"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_toprankclg_toprankclg_module_ts"],{

/***/ 49885:
/*!***************************************************************!*\
  !*** ./src/app/pages/toprankclg/toprankclg-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToprankclgPageRoutingModule": () => (/* binding */ ToprankclgPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _toprankclg_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toprankclg.page */ 21775);




const routes = [
    {
        path: '',
        component: _toprankclg_page__WEBPACK_IMPORTED_MODULE_0__.ToprankclgPage
    }
];
let ToprankclgPageRoutingModule = class ToprankclgPageRoutingModule {
};
ToprankclgPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ToprankclgPageRoutingModule);



/***/ }),

/***/ 89777:
/*!*******************************************************!*\
  !*** ./src/app/pages/toprankclg/toprankclg.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToprankclgPageModule": () => (/* binding */ ToprankclgPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _toprankclg_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toprankclg-routing.module */ 49885);
/* harmony import */ var _toprankclg_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toprankclg.page */ 21775);







let ToprankclgPageModule = class ToprankclgPageModule {
};
ToprankclgPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _toprankclg_routing_module__WEBPACK_IMPORTED_MODULE_0__.ToprankclgPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_toprankclg_page__WEBPACK_IMPORTED_MODULE_1__.ToprankclgPage]
    })
], ToprankclgPageModule);



/***/ }),

/***/ 21775:
/*!*****************************************************!*\
  !*** ./src/app/pages/toprankclg/toprankclg.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToprankclgPage": () => (/* binding */ ToprankclgPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_toprankclg_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./toprankclg.page.html */ 5115);
/* harmony import */ var _toprankclg_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toprankclg.page.scss */ 92623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shortlist.service */ 17098);











let ToprankclgPage = class ToprankclgPage {
    constructor(service, activatedRoute, router, loadingController, platform, modalController, alertController, shortlistService) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.shortlistService = shortlistService;
        this.loginuserId = null;
        this.isBookmarked = false;
        this.shortlistedColleges = new Set();
        this.isLoading = true;
        this.trnkclgArry = [];
    }
    ngOnInit() {
        this.getResponseDataFromLocalStorage();
        const param = this.activatedRoute.snapshot.params;
        console.log(param);
        if (param) {
            const coursetenmp = param.id;
            this.crsename = param.name;
            localStorage.getItem('courses');
            this.coursesArray = JSON.parse(localStorage.getItem('courses'));
            console.log(this.coursesArray[0].id);
            this.courseId = this.coursesArray[0].id;
            console.log(this.courseId);
            this.catid = JSON.parse(localStorage.getItem('catID'));
        }
        this.gettoprnkclg();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            console.log('User information:', user);
            this.loginuserId = user.id;
            console.log(this.loginuserId);
        }
        else {
            console.log('No user information found in local storage.');
        }
    }
    getResponseDataFromLocalStorage() {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            this.userData = JSON.parse(storedUserData);
            console.log(this.userData);
            this.email = this.userData.email;
            this.username = this.userData.displayName;
            this.loginuserId = this.userData.userId;
            console.log('google user id:', this.loginuserId);
        }
        else {
            console.log('No google user information found in local storage.');
        }
    }
    gettoprnkclg() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
        <span style="margin-top: 10px;"></span>`,
                spinner: null,
                translucent: true,
                cssClass: 'custom-loading' // Custom class for additional styling
            });
            yield loader.present();
            this.isLoading = true;
            this.id = this.courseId;
            this.service.gettoprankclg(this.id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log('Response received:', res);
                this.trnkclgArry = res.collegelist || []; // Ensure it's an array even if null
                this.isLoading = false; // Loading complete
                yield loader.dismiss();
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.error('Error fetching top-ranked colleges:', err);
                this.trnkclgArry = []; // Reset array on error
                this.isLoading = false; // Loading complete
                yield loader.dismiss();
            }));
        });
    }
    getclgid(collegeid) {
        this.router.navigate(['/clgdetails', collegeid]);
    }
    predictadmission(id, CatId, subCatName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_3__.PredictadmissionPage,
                componentProps: {
                    id,
                    CatId,
                    subCatName
                }
            });
            return yield modal.present();
        });
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    presentSignInModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__.PopuplogsignPage,
            });
            return yield modal.present();
        });
    }
    toggleIconColor(collegeId) {
        this.isBookmarked = !this.isBookmarked;
    }
    toggleShortlist(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            try {
                if (this.shortlistService.isShortlisted(collegeId)) {
                    yield this.removeclgshortlist(collegeId);
                }
                else {
                    yield this.addclgshortlist(collegeId);
                }
            }
            catch (error) {
                console.error('Error toggling shortlist:', error);
            }
        });
    }
    addclgshortlist(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
            try {
                const res = yield this.service.addclgshortlist(this.loginuserId, collegeId, '1', 'insert').toPromise();
                if (res.response_code === '200') {
                    this.shortlistService.addToShortlist(collegeId);
                    yield this.showAlert('Success', 'College added to shortlist successfully');
                }
                else {
                    yield this.showAlert('Error', 'Failed to add college to shortlist');
                }
            }
            catch (error) {
                console.error(error);
                yield this.showAlert('Error', 'An error occurred while adding to shortlist');
            }
            finally {
                yield loading.dismiss();
            }
        });
    }
    removeclgshortlist(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
            try {
                const res = yield this.service.addclgshortlist(this.loginuserId, collegeId, '0', 'update').toPromise();
                if (res.response_code === '200') {
                    this.shortlistService.removeFromShortlist(collegeId);
                    yield this.showAlert('Success', 'College removed from shortlist successfully');
                }
                else {
                    yield this.showAlert('Error', 'Failed to remove college from shortlist');
                }
            }
            catch (error) {
                console.error(error);
                yield this.showAlert('Error', 'An error occurred while removing from shortlist');
            }
            finally {
                yield loading.dismiss();
            }
        });
    }
    isShortlisted(collegeId) {
        return this.shortlistService.isShortlisted(collegeId);
    }
    Alert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    brochure(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            try {
                this.collegeId = collegeId;
                this.userId = this.loginuserId;
                // Call your service method to get the brochure
                const res = yield this.service.getbrochure(this.collegeId, this.userId).toPromise();
                console.log(this.collegeId);
                console.log(this.userId);
                // Handle different response codes
                if (res.response_code === '200') {
                    yield this.showAlert('Success', 'Brochure sent successfully by mail');
                }
                else if (res.response_code === '500') {
                    yield this.showAlert('Error', 'Brochure not available');
                }
                else {
                    yield this.showAlert('Error', 'An unexpected error occurred');
                }
            }
            catch (error) {
                // Handle errors from API call or any unexpected errors
                yield this.showAlert('Error', 'An unexpected error occurred');
            }
        });
    }
    showAlert(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    clgpredict(id, CatId, subCatName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // this.token = localStorage.getItem('token');
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            else {
                yield this.predictadmission(id, CatId, subCatName);
            }
        });
    }
};
ToprankclgPage.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__.ShortlistService }
];
ToprankclgPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-toprankclg',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_toprankclg_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_toprankclg_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ToprankclgPage);



/***/ }),

/***/ 17098:
/*!***********************************************!*\
  !*** ./src/app/services/shortlist.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShortlistService": () => (/* binding */ ShortlistService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76491);
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ShortlistService {
//   private shortlistedColleges = new Set<string>(); // Maintain a set of shortlisted colleges
//   private shortlistSubject = new BehaviorSubject<Set<string>>(this.shortlistedColleges);
//   // Observable to track changes to the shortlist
//   shortlist$ = this.shortlistSubject.asObservable();
//   // Add college to shortlist
//   addToShortlist(collegeId: string): void {
//     this.shortlistedColleges.add(collegeId);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }
//   // Remove college from shortlist
//   removeFromShortlist(collegeId: string): void {
//     this.shortlistedColleges.delete(collegeId);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }
//   // Check if a college is shortlisted
//   isShortlisted(collegeId: string): boolean {
//     return this.shortlistedColleges.has(collegeId);
//   }
//   // Set initial shortlist (e.g., from API response)
//   setInitialShortlist(colleges: string[]): void {
//     this.shortlistedColleges = new Set(colleges);
//     this.shortlistSubject.next(this.shortlistedColleges);
//   }
// }


let ShortlistService = class ShortlistService {
    constructor() {
        this.shortlistedColleges = new Set(); // Maintain a set of shortlisted colleges
        this.shortlistSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.shortlistedColleges);
        this.shortlist$ = this.shortlistSubject.asObservable();
        this.loadShortlistedColleges(); // Load shortlist from localStorage on initialization
    }
    addToShortlist(collegeId) {
        this.shortlistedColleges.add(collegeId);
        this.saveShortlistedColleges(); // Save updated shortlist to localStorage
        this.shortlistSubject.next(this.shortlistedColleges);
    }
    removeFromShortlist(collegeId) {
        this.shortlistedColleges.delete(collegeId);
        this.saveShortlistedColleges(); // Save updated shortlist to localStorage
        this.shortlistSubject.next(this.shortlistedColleges);
    }
    isShortlisted(collegeId) {
        return this.shortlistedColleges.has(collegeId);
    }
    setInitialShortlist(colleges) {
        this.shortlistedColleges = new Set(colleges);
        this.saveShortlistedColleges(); // Save updated shortlist to localStorage
        this.shortlistSubject.next(this.shortlistedColleges);
    }
    saveShortlistedColleges() {
        const collegeIds = Array.from(this.shortlistedColleges);
        localStorage.setItem('shortlistedColleges', JSON.stringify(collegeIds));
    }
    loadShortlistedColleges() {
        const storedColleges = localStorage.getItem('shortlistedColleges');
        if (storedColleges) {
            this.shortlistedColleges = new Set(JSON.parse(storedColleges));
            this.shortlistSubject.next(this.shortlistedColleges);
        }
    }
};
ShortlistService.ctorParameters = () => [];
ShortlistService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], ShortlistService);



/***/ }),

/***/ 5115:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/toprankclg/toprankclg.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n\n\n\n<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\" routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n\n<ion-content style=\"--background: aliceblue;\">\n  <div>\n    <h5 style=\"margin:10px\">Top Ranking Colleges</h5>\n\n    <div *ngIf=\"!isLoading && trnkclgArry && trnkclgArry.length > 0; else noData\">\n      <div class=\"m10\">\n        <div *ngFor=\"let trnkclg of trnkclgArry\">\n          <ion-card class=\"size_set\">\n            <img class=\"img_align\" [src]=\"trnkclg.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            \n            <p class=\"tit_set\" (click)=\"getclgid(trnkclg.collegeid)\">{{ trnkclg.title }}</p>\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{ trnkclg.city }}. {{ trnkclg.accreditation }}\n            </p>\n            <p class=\"courserate\"> # {{ trnkclg.rank }} {{ trnkclg.rank_title }}</p>\n\n            <p class=\"courserate\" *ngIf=\"trnkclg.ratings > 0\">\n              <ion-icon name=\"star\" style=\"color: #e5b60c;\"></ion-icon>\n              <span> - {{ trnkclg.ratings }}</span>\n            </p>\n\n            <p class=\"fees\" *ngIf=\"trnkclg.total_fees\">Annual Fees (INR): - {{ trnkclg.total_fees }}</p>\n\n            <ion-row>\n              <div class=\"img_alignn\" \n                [ngClass]=\"{'shortlisted': isShortlisted(trnkclg.collegeid)}\"\n                (click)=\"toggleShortlist(trnkclg.collegeid)\">\n                <ion-icon [name]=\"isShortlisted(trnkclg.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                          [class.active]=\"isShortlisted(trnkclg.collegeid)\">\n                </ion-icon>\n              </div>\n\n              <ion-button (click)=\"brochure(trnkclg.collegeid)\">Brochure</ion-button>\n              <ion-button (click)=\"clgpredict(trnkclg.collegeid, trnkclg.CatId, trnkclg.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </ion-row>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n\n    <!-- Show \"Data Not Found\" -->\n    <ng-template #noData>\n      <p style=\"text-align:center; margin:20px;\" *ngIf=\"!isLoading\">Data not found</p>\n    </ng-template>\n  </div>\n</ion-content>\n\n\n<ion-footer>\n  <ion-row>\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab1\">\n      <ion-icon name=\"home\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Home</ion-label>\n    </ion-tab-button> \n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab2\">\n      <ion-icon name=\"search-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Search</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab3\">\n      <ion-icon name=\"albums-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Recommended</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab4\">\n      <ion-icon name=\"bookmark-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Shortlist</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab5\">\n      <ion-icon name=\"chatbox-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Assistant</ion-label>\n    </ion-tab-button>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ 92623:
/*!*******************************************************!*\
  !*** ./src/app/pages/toprankclg/toprankclg.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n.size_set {\n  border-radius: 20px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible!important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 20px 20px 12px;\n  margin: 0rem;\n  margin-top: 2.5rem !important;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important;\n  box-shadow: none;\n}\n.size_set ion-button {\n  --box-shadow: none!important;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: normal;\n}\n.tit_set {\n  font-size: 0.9rem;\n  color: black;\n  font-weight: 500;\n  padding-top: 14px;\n  margin-top: 20px;\n}\n.set_botm {\n  border-bottom: 1px dashed #f3f3f3;\n  font-size: 14px;\n  padding-bottom: 6px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.fees {\n  font-size: 16px;\n  margin: 5px;\n}\n.img_align {\n  padding: 5px;\n  height: 70px !important;\n  width: 70px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: absolute !important;\n  left: 20px;\n  top: -14%;\n  border: 1px solid #c9c9c9;\n}\n.bookMark {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 10px;\n  top: 6%;\n}\n.backicon {\n  margin-top: 5px;\n}\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n  /* Background color for shortlisted item */\n}\nion-icon.active {\n  color: blue;\n  /* Color for active bookmark (when shortlisted) */\n}\n.img_alignn {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 20px;\n  top: 14px;\n  border: 1px solid #746ac0;\n  width: 26px;\n  height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcHJhbmtjbGcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7QUFoR0Y7QUFpR0U7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQS9GTjtBQXFHQTtFQUdBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUVBLHNEQUFBO0VBRUUsZ0JBQUE7QUFyR0Y7QUFzR0E7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBcEdGO0FBMkdBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBeEdBO0FBMEdBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdkdBO0FBMEdBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF2R0E7QUEwR0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUF2R0Y7QUE2R0E7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUExR0o7QUE4R0E7RUFDQSxlQUFBO0FBM0dBO0FBbUhBO0VBQ0UseUJBQUE7RUFBMkIsMENBQUE7QUEvRzdCO0FBa0hBO0VBQ0UsV0FBQTtFQUFhLGlEQUFBO0FBOUdmO0FBa0hBO0VBQ0UsWUFBQTtFQUNELDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDRyxTQUFBO0VBQ0gseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQS9HRCIsImZpbGUiOiJ0b3ByYW5rY2xnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gLm5vdGlmaWNhdGlvbntcbi8vICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBpb24tYmFkZ2V7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgcmlnaHQ6IC01JTtcbi8vICAgICAgICAgdG9wOiAtN3B4O1xuLy8gICAgICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4vLyAgICAgICAgIHdpZHRoOiAyMHB4O1xuLy8gICAgICAgICBoZWlnaHQ6IDIwcHg7XG4vLyAgICAgICAgIHBhZGRpbmc6IDZweCA0cHg7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAvLyBjYXJkIGFsaWduXG5cblxuLy8gLy8gY2FyZCBhbGlnblxuXG4vLyAuc2l6ZV9zZXR7XG4vLyAgIC8vICAgaGVpZ2h0OiAyNjdweDtcbi8vICAgLy8gd2lkdGg6IDMwMHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gICB3b3JkLXNwYWNpbmc6IDJweDtcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgIC0tb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xuLy8gICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbi8vICAgY29udGFpbjogdW5zZXQ7XG4vLyAgIHBhZGRpbmc6IDIwcHggMjBweCAxMnB4O1xuLy8gICBtYXJnaW46IDByZW07XG4vLyAgIG1hcmdpbi10b3A6IDIuNXJlbSAhaW1wb3J0YW50O1xuIFxuLy8gICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4IWltcG9ydGFudDtcbi8vICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4vLyAgICAgYm94LXNoYWRvdzogbm9uZTtcbi8vICAgaW9uLWJ1dHRvbntcbi8vICAgICAtLWJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbi8vICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICAgIC8vIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbi8vICAgICAvLyAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuLy8gICAgIC8vIC0tcGFkZGluZy1lbmQ6IDEuNWVtO1xuLy8gICB9XG4vLyB9XG4gXG4vLyAudGl0X3NldHtcbi8vICAgZm9udC1zaXplOiAwLjlyZW07XG4vLyAgIGNvbG9yOiBibGFjaztcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcbi8vICAgcGFkZGluZy10b3A6IDE0cHg7IFxuLy8gICBtYXJnaW4tdG9wOjIwcHg7XG4vLyB9XG4vLyAuc2V0X2JvdG17XG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2YzZjNmMztcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuLy8gICBtYXJnaW46IDA7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyB9XG5cbi8vIC5mZWVze1xuLy8gZm9udC1zaXplOiAxNnB4O1xuLy8gbWFyZ2luOjVweDtcbi8vIH1cblxuLy8gLmltZ19hbGlnbntcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuLy8gICAgIGxlZnQ6IDIwcHg7XG4vLyAgICAgdG9wOiAtMTQlO1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XG4vLyAgIH1cblxuLy8gIC5ib29rTWFya3tcbi8vICAgICAgIHBhZGRpbmc6IDVweDtcbi8vICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbi8vICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuLy8gICAgICAgcmlnaHQ6IDEwcHg7XG4vLyAgICAgICB0b3A6IDYlO1xuLy8gICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc0NmFjMDtcbi8vICAgfVxuLy8gICAuYmFja2ljb257XG4vLyAgICAgbWFyZ2luLXRvcDogNXB4O1xuLy8gICB9XG5cblxuXG4ubm90aWZpY2F0aW9ue1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGlvbi1iYWRnZXtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAtNSU7XG4gICAgICB0b3A6IC03cHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBwYWRkaW5nOiA2cHggNHB4O1xuICB9XG59XG5cbi8vIGNhcmQgYWxpZ25cblxuLnNpemVfc2V0e1xuLy8gICBoZWlnaHQ6IDI2N3B4O1xuLy8gd2lkdGg6IDMwMHB4O1xuYm9yZGVyLXJhZGl1czogMjBweDtcbndvcmQtc3BhY2luZzogMnB4O1xuYmFja2dyb3VuZDogd2hpdGU7XG50ZXh0LWFsaWduOiBsZWZ0O1xuLS1vdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XG5vdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbmNvbnRhaW46IHVuc2V0O1xucGFkZGluZzogMjBweCAyMHB4IDEycHg7XG5tYXJnaW46IDByZW07XG5tYXJnaW4tdG9wOiAyLjVyZW0gIWltcG9ydGFudDtcblxuYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbmlvbi1idXR0b257XG4gIC0tYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC8vIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgLy8gLS1wYWRkaW5nLWVuZDogMS41ZW07XG59XG59XG5cbi50aXRfc2V0e1xuZm9udC1zaXplOiAwLjlyZW07XG5jb2xvcjogYmxhY2s7XG5mb250LXdlaWdodDogNTAwO1xucGFkZGluZy10b3A6IDE0cHg7IFxubWFyZ2luLXRvcDoyMHB4O1xufVxuLnNldF9ib3Rte1xuYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjNmM2YzO1xuZm9udC1zaXplOiAxNHB4O1xucGFkZGluZy1ib3R0b206IDZweDtcbm1hcmdpbjogMDtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmVlc3tcbmZvbnQtc2l6ZTogMTZweDtcbm1hcmdpbjo1cHg7XG59XG5cbi5pbWdfYWxpZ257XG4gIHBhZGRpbmc6IDVweDtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgbGVmdDogMjBweDtcbiAgdG9wOiAtMTQlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xuXG59XG5cblxuXG4uYm9va01hcmt7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA2JTtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjNzQ2YWMwO1xufVxuXG4uYmFja2ljb257XG5tYXJnaW4tdG9wOiA1cHg7XG59XG5cbi8vIGlvbi1pY29uLmFjdGl2ZSB7XG4vLyBjb2xvcjogYmx1ZTsgLyogQ2hhbmdlIHRoaXMgdG8gdGhlIGRlc2lyZWQgY29sb3IgKi9cbi8vIH1cblxuXG4uaW1nX2FsaWdubi5zaG9ydGxpc3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHNob3J0bGlzdGVkIGl0ZW0gKi9cbn1cblxuaW9uLWljb24uYWN0aXZlIHtcbiAgY29sb3I6IGJsdWU7IC8qIENvbG9yIGZvciBhY3RpdmUgYm9va21hcmsgKHdoZW4gc2hvcnRsaXN0ZWQpICovXG59XG5cblxuLmltZ19hbGlnbm57XG4gIHBhZGRpbmc6IDVweDtcbiBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogMTRweDtcbiBib3JkZXI6IDFweCBzb2xpZCAjNzQ2YWMwO1xuIHdpZHRoOiAyNnB4O1xuIGhlaWdodDogMjZweDtcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_toprankclg_toprankclg_module_ts.js.map