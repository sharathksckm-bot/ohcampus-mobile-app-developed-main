"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_specoursebyclglts_specoursebyclglts_module_ts"],{

/***/ 73041:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/specoursebyclglts/specoursebyclglts-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecoursebyclgltsPageRoutingModule": () => (/* binding */ SpecoursebyclgltsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _specoursebyclglts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specoursebyclglts.page */ 3285);




const routes = [
    {
        path: '',
        component: _specoursebyclglts_page__WEBPACK_IMPORTED_MODULE_0__.SpecoursebyclgltsPage
    }
];
let SpecoursebyclgltsPageRoutingModule = class SpecoursebyclgltsPageRoutingModule {
};
SpecoursebyclgltsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpecoursebyclgltsPageRoutingModule);



/***/ }),

/***/ 36865:
/*!*********************************************************************!*\
  !*** ./src/app/pages/specoursebyclglts/specoursebyclglts.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecoursebyclgltsPageModule": () => (/* binding */ SpecoursebyclgltsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _specoursebyclglts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specoursebyclglts-routing.module */ 73041);
/* harmony import */ var _specoursebyclglts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specoursebyclglts.page */ 3285);







let SpecoursebyclgltsPageModule = class SpecoursebyclgltsPageModule {
};
SpecoursebyclgltsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _specoursebyclglts_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpecoursebyclgltsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_specoursebyclglts_page__WEBPACK_IMPORTED_MODULE_1__.SpecoursebyclgltsPage]
    })
], SpecoursebyclgltsPageModule);



/***/ }),

/***/ 3285:
/*!*******************************************************************!*\
  !*** ./src/app/pages/specoursebyclglts/specoursebyclglts.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecoursebyclgltsPage": () => (/* binding */ SpecoursebyclgltsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_specoursebyclglts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./specoursebyclglts.page.html */ 19097);
/* harmony import */ var _specoursebyclglts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specoursebyclglts.page.scss */ 51924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shortlist.service */ 17098);











let SpecoursebyclgltsPage = class SpecoursebyclgltsPage {
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
        this.rank = [];
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
        this.courseid = this.activatedRoute.snapshot.paramMap.get('id');
        this.getclglts();
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
        const storedResponseData = localStorage.getItem('response_data');
        if (storedResponseData) {
            const responseData = JSON.parse(storedResponseData);
            if (responseData && responseData.length > 0) {
                this.loginuserId = responseData[0].id;
                this.username = responseData[0].f_name;
                this.email = responseData[0].email;
                this.phone = responseData[0].phone;
                this.token = responseData[0].token;
            }
            else {
                console.log('No user data found in response_data.');
            }
        }
        else {
            console.log('No response_data found in local storage.');
        }
    }
    getclglts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
      `,
                spinner: null,
                translucent: true,
                cssClass: 'custom-loading'
            });
            this.isLoading = true;
            yield loader.present();
            this.service.specoursebyclglist(this.courseid).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                // Store the response data
                this.clgltsArry = res.data;
                this.isLoading = false; // Set loading flag to false once data is fetched
                yield loader.dismiss();
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.error('Error fetching college list:', err);
                this.isLoading = false; // Set loading flag to false in case of error
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
                const res = yield this.service.getbrochure(this.collegeId, this.userId).toPromise();
                console.log(this.collegeId);
                console.log(this.userId);
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
SpecoursebyclgltsPage.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__.ShortlistService }
];
SpecoursebyclgltsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-specoursebyclglts',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_specoursebyclglts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_specoursebyclglts_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpecoursebyclgltsPage);



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

/***/ 19097:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/specoursebyclglts/specoursebyclglts.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/specourselist\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          \n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n\n<ion-content style=\"--background: aliceblue;\">\n  <div>\n    <h5 style=\"margin:10px\">Trending Specialization Colleges</h5>\n\n    \n    <div *ngIf=\"isLoading; else dataContent\">\n      <p style=\"text-align: center;\">Loading specialization colleges, please wait...</p>\n    </div>\n\n    <ng-template #dataContent>\n      \n      <div class=\"m10\" *ngIf=\"clgltsArry && clgltsArry.length > 0; else noData\">\n        <div *ngFor=\"let clg of clgltsArry\" lines=\"none\">\n          <ion-card class=\"size_set\">\n            <img class=\"img_align\" [src]=\"clg.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            \n            <p class=\"tit_set\" (click)=\"getclgid(clg.id)\">{{ clg.title }}</p>\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{ clg.city }}\n            </p>\n            <p class=\"courserate\">\n              <span>Total Course - {{ clg.courseCount }}</span>\n            </p>\n            <p class=\"fees\" *ngIf=\"clg.total_fees\">Annual Fees (INR): - {{ clg.total_fees }}</p>\n\n            <ion-row>\n             \n              <div class=\"img_alignn\" \n              [ngClass]=\"{'shortlisted': isShortlisted(clg.id)}\"\n              (click)=\"toggleShortlist(clg.id)\">\n           <ion-icon [name]=\"isShortlisted(clg.id) ? 'bookmark' : 'bookmark-outline'\"\n                     [class.active]=\"isShortlisted(clg.id)\">\n           </ion-icon>\n         </div>\n\n              <ion-button (click)=\"brochure(clg.id)\">Brochure</ion-button>\n              <ion-button (click)=\"clgpredict(clg.id, clg.CatId, clg.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </ion-row>\n          </ion-card>\n        </div>\n      </div>\n\n      <ng-template #noData>\n        <p style=\"text-align:center; margin:20px;\">Data not found</p>\n      </ng-template>\n    </ng-template>\n  </div>\n</ion-content>\n\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 51924:
/*!*********************************************************************!*\
  !*** ./src/app/pages/specoursebyclglts/specoursebyclglts.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n.size_set {\n  border-radius: 20px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible!important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 20px 20px 12px;\n  margin: 0rem;\n  margin-top: 2.5rem !important;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important;\n  box-shadow: none;\n}\n.size_set ion-button {\n  --box-shadow: none!important;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: normal;\n}\n.tit_set {\n  font-size: 0.9rem;\n  color: black;\n  font-weight: 500;\n  padding-top: 14px;\n  margin-top: 20px;\n}\n.set_botm {\n  border-bottom: 1px dashed #f3f3f3;\n  font-size: 14px;\n  padding-bottom: 6px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.fees {\n  font-size: 16px;\n  margin: 5px;\n}\n.img_align {\n  padding: 5px;\n  height: 70px !important;\n  width: 70px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: absolute !important;\n  left: 20px;\n  top: -14%;\n  border: 1px solid #c9c9c9;\n}\n.bookMark {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 10px;\n  top: 6%;\n  border: 1px solid #746ac0;\n}\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n  /* Background color for shortlisted item */\n}\nion-icon.active {\n  color: blue;\n  /* Color for active bookmark (when shortlisted) */\n}\n.img_alignn {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 20px;\n  top: 14px;\n  border: 1px solid #746ac0;\n  width: 26px;\n  height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNvdXJzZWJ5Y2xnbHRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUlBO0VBR0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBRUEsc0RBQUE7RUFFRSxnQkFBQTtBQUpKO0FBS0U7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVBGO0FBU0E7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFORjtBQVNBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFOQTtBQVNBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBTko7QUFTQztFQUNLLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBTk47QUFTRTtFQUNFLHlCQUFBO0VBQTJCLDBDQUFBO0FBTC9CO0FBUUU7RUFDRSxXQUFBO0VBQWEsaURBQUE7QUFKakI7QUFRRTtFQUNFLFlBQUE7RUFDRCw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0csU0FBQTtFQUNILHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMSCIsImZpbGUiOiJzcGVjb3Vyc2VieWNsZ2x0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9ue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGlvbi1iYWRnZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTUlO1xuICAgICAgICB0b3A6IC03cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDRweDtcbiAgICB9XG59XG5cbi8vIGNhcmQgYWxpZ25cblxuLnNpemVfc2V0e1xuICAvLyAgIGhlaWdodDogMjY3cHg7XG4gIC8vIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd29yZC1zcGFjaW5nOiAycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtLW92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGNvbnRhaW46IHVuc2V0O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTJweDtcbiAgbWFyZ2luOiAwcmVtO1xuICBtYXJnaW4tdG9wOiAyLjVyZW0gIWltcG9ydGFudDtcbiBcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIGlvbi1idXR0b257XG4gICAgLS1ib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAvLyAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAvLyAtLXBhZGRpbmctZW5kOiAxLjVlbTtcbiAgfVxufVxuIFxuLnRpdF9zZXR7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxNHB4OyBcbiAgbWFyZ2luLXRvcDoyMHB4O1xufVxuLnNldF9ib3Rte1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmM2YzZjM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmVlc3tcbmZvbnQtc2l6ZTogMTZweDtcbm1hcmdpbjo1cHg7XG59XG5cbi5pbWdfYWxpZ257XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIHRvcDogLTE0JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xuICB9XG5cbiAuYm9va01hcmt7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiA2JTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NDZhYzA7XG4gIH1cblxuICAuaW1nX2FsaWdubi5zaG9ydGxpc3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgLyogQmFja2dyb3VuZCBjb2xvciBmb3Igc2hvcnRsaXN0ZWQgaXRlbSAqL1xuICB9XG4gIFxuICBpb24taWNvbi5hY3RpdmUge1xuICAgIGNvbG9yOiBibHVlOyAvKiBDb2xvciBmb3IgYWN0aXZlIGJvb2ttYXJrICh3aGVuIHNob3J0bGlzdGVkKSAqL1xuICB9XG4gIFxuICBcbiAgLmltZ19hbGlnbm57XG4gICAgcGFkZGluZzogNXB4O1xuICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICByaWdodDogMjBweDtcbiAgICAgIHRvcDogMTRweDtcbiAgIGJvcmRlcjogMXB4IHNvbGlkICM3NDZhYzA7XG4gICB3aWR0aDogMjZweDtcbiAgIGhlaWdodDogMjZweDtcbiAgfSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_specoursebyclglts_specoursebyclglts_module_ts.js.map