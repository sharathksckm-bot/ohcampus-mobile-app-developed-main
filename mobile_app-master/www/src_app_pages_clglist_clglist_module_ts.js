"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_clglist_clglist_module_ts"],{

/***/ 45802:
/*!*********************************************************!*\
  !*** ./src/app/pages/clglist/clglist-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClglistPageRoutingModule": () => (/* binding */ ClglistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _clglist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clglist.page */ 97071);




const routes = [
    {
        path: '',
        component: _clglist_page__WEBPACK_IMPORTED_MODULE_0__.ClglistPage
    }
];
let ClglistPageRoutingModule = class ClglistPageRoutingModule {
};
ClglistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClglistPageRoutingModule);



/***/ }),

/***/ 86863:
/*!*************************************************!*\
  !*** ./src/app/pages/clglist/clglist.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClglistPageModule": () => (/* binding */ ClglistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _clglist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clglist-routing.module */ 45802);
/* harmony import */ var _clglist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clglist.page */ 97071);







let ClglistPageModule = class ClglistPageModule {
};
ClglistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _clglist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClglistPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_clglist_page__WEBPACK_IMPORTED_MODULE_1__.ClglistPage]
    })
], ClglistPageModule);



/***/ }),

/***/ 97071:
/*!***********************************************!*\
  !*** ./src/app/pages/clglist/clglist.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClglistPage": () => (/* binding */ ClglistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_clglist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./clglist.page.html */ 63985);
/* harmony import */ var _clglist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clglist.page.scss */ 49427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shortlist.service */ 17098);











let ClglistPage = class ClglistPage {
    constructor(service, activatedRoute, router, loadingController, platform, modalController, alertController, shortlistService) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.shortlistService = shortlistService;
        this.locationArr = [];
        this.college = [];
        this.start = 0;
        this.pageSize = 5;
        this.order = [
            {
                column: 0,
                dir: 'desc'
            }
        ];
        this.draw = 1;
        this.selectedCityIds = [];
        this.storedIds = [];
        this.loginuserId = null;
        this.shortlistedColleges = new Set();
        this.isBookmarked = false;
        this.isLoading = false;
        this.clgArry = [];
        this.hasMoreColleges = true;
        this.dataLoaded = false;
    }
    ngOnInit() {
        this.subcategory = localStorage.getItem('selectedCourseId');
        console.log(localStorage.getItem('selectedCourseId'));
        this.getResponseDataFromLocalStorage();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            console.log('User information:', user);
            this.loginuserId = user.id;
            console.log(this.loginuserId);
        }
        else {
            console.log('No user information found in local storage.');
        }
        this.storedIds = localStorage.getItem('selectedLocationIds');
        console.log(this.storedIds.length);
        if (!this.storedIds || this.storedIds.length === 0) {
            this.locId = this.activatedRoute.snapshot.paramMap.get('locId');
            console.log('Received locId from route:', this.locId);
        }
        else {
            this.locId = this.storedIds; // Directly use the comma-separated string
            console.log('Selected Location IDs:', this.locId);
        }
        this.courseArry = JSON.parse(localStorage.getItem('courses'));
        this.courseId = this.courseArry[0].id;
        console.log(this.courseId);
        this.getclglist();
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
    getclglist() {
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
            this.isLoading = true;
            // this.subcategory = this.courseId;
            this.service.getctyclglt('0', '100', this.locId, this.subcategory).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                if (res.response_code == '200') {
                    this.clgArry = res.Colleges || [];
                }
                else if (res.response_code == '400') {
                    this.clgArry = []; // No data available
                }
                this.dataLoaded = true; // Set dataLoaded to true after response
                this.isLoading = false;
                yield loading.dismiss();
            }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.error('Error fetching college list:', error);
                this.isLoading = false;
                yield loading.dismiss();
                this.dataLoaded = true; // Set dataLoaded to true even if there's an error
            }));
        });
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
    getclgid(collegeid) {
        this.router.navigate(['/clgdetails', collegeid]);
    }
    toggleIconColor(collegeId) {
        // Toggle the state of the icon
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
                // Handle errors from API call or any unexpected errors
                yield this.showAlert('Error', 'An unexpected error occurred');
            }
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
ClglistPage.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__.ShortlistService }
];
ClglistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-clglist',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_clglist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clglist_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClglistPage);



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

/***/ 63985:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clglist/clglist.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\" routerLink=\"/tabs/tabs/tab1\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content style=\"--background: aliceblue;\">\n  <div>\n    <div class=\"m10\">\n      <div>\n        <h5 style=\"text-align: center;\">College List By Location</h5>\n      </div>\n\n      <div *ngIf=\"clgArry && clgArry.length > 0; else noData\">\n        <div *ngFor=\"let clglist of clgArry\" lines=\"none\">\n          <ion-card class=\"size_set\">\n            <img class=\"img_align\" [src]=\"clglist.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n\n            <p class=\"tit_set\" (click)=\"getclgid(clglist.id)\">{{ clglist.title }}</p>\n\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{ clglist.city }}. {{ clglist.accreditation }}\n            </p>\n\n            <p class=\"courserate\">\n              <span>Total Courses - {{ clglist.coursesCount }}</span>  \n              <span class=\"spnn\" *ngIf=\"clglist.rating> 0\">  <ion-icon name=\"star\" style=\"color:greenyellow\"></ion-icon>{{ clglist.ratings }}</span >\n            </p>\n\n            <ion-row>\n           \n              <div class=\"img_alignn\" [ngClass]=\"{'shortlisted': isShortlisted(clglist.id)}\"\n                (click)=\"toggleShortlist(clglist.id)\">\n                <ion-icon [name]=\"isShortlisted(clglist.id) ? 'bookmark' : 'bookmark-outline'\"\n                  [class.active]=\"isShortlisted(clglist.id)\">\n                </ion-icon>\n              </div>\n\n              <ion-button (click)=\"brochure(clglist.id)\">Brochure</ion-button>\n\n              <ion-button (click)=\"clgpredict(clglist.id, clglist.CatId, clglist.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </ion-row>\n          </ion-card>\n        </div>\n      </div>\n\n      <ng-template #noData>\n        <p style=\"text-align:center; margin:20px;\"></p>\n      </ng-template>\n    </div>\n  </div>\n</ion-content>\n\n\n\n\n<ion-footer>\n  <ion-row>\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab1\">\n      <ion-icon name=\"home\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" tab=\"tab2\" routerLink=\"/tabs/tabs/tab2\">\n      <ion-icon name=\"search-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Search</ion-label>\n    </ion-tab-button>\n\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab3\">\n      <ion-icon name=\"albums-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Recommended</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab4\">\n      <ion-icon name=\"bookmark-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Shortlist</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab5\">\n      <ion-icon name=\"chatbox-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Assistant</ion-label>\n    </ion-tab-button>\n\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ 49427:
/*!*************************************************!*\
  !*** ./src/app/pages/clglist/clglist.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".size_set {\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 20px 20px 12px;\n  margin-top: 2rem !important;\n  box-shadow: rgba(205, 211, 214, 0.8) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n  margin: 0;\n}\n.size_set ion-button {\n  --box-shadow: none!important;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: normal;\n}\n.tit_set {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin-top: 20px;\n  padding-top: 20px;\n}\n.set_botm {\n  border-bottom: 1px dashed #f3f3f3;\n  font-size: 14px;\n  padding-bottom: 6px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n.fees {\n  font-size: 16px;\n  margin: 5px;\n}\n.img_align {\n  padding: 5px;\n  height: 70px !important;\n  width: 70px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: absolute !important;\n  left: 20px;\n  top: -12%;\n  border: 1px solid #c9c9c9;\n}\n.courserate ion-icon {\n  margin-right: 4px;\n}\n.bookMark {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 10px;\n  top: 6%;\n  border: 1px solid gray;\n}\n.btnsett {\n  text-align: center;\n  margin-top: 20px;\n}\n.btnsett ion-button {\n  --border-radius: 50px;\n  border-radius: 50px;\n}\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n  /* Background color for shortlisted item */\n}\nion-icon.active {\n  color: blue;\n  /* Color for active bookmark (when shortlisted) */\n}\n.img_alignn {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 20px;\n  top: 14px;\n  border: 1px solid #746ac0;\n  width: 26px;\n  height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZ2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBQ0Y7QUFBSTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUtFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUlFO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBREo7QUFHRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0k7RUFDRSxpQkFBQTtBQUFOO0FBR0U7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0E7RUFDRSxrQkFBQTtFQUNFLGdCQUFBO0FBQUo7QUFDSTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUlBO0VBQ0UseUJBQUE7RUFBMkIsMENBQUE7QUFBN0I7QUFHQTtFQUNFLFdBQUE7RUFBYSxpREFBQTtBQUNmO0FBRUE7RUFDRSxZQUFBO0VBQ0QsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNHLFNBQUE7RUFDSCx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0QiLCJmaWxlIjoiY2xnbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l6ZV9zZXR7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd29yZC1zcGFjaW5nOiAycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtLW92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICBjb250YWluOiB1bnNldDtcbiAgcGFkZGluZzogMjBweCAyMHB4IDEycHg7XG4gIG1hcmdpbi10b3A6IDJyZW0gIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogcmdiYSgyMDUsIDIxMSwgMjE0LCAwLjgpIDBweCA4cHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luOiAwO1xuICAgIGlvbi1idXR0b257XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgLy8gLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAgIC8vIC0tcGFkZGluZy1lbmQ6IDEuNWVtO1xuICAgIH1cbiAgfVxuICAgXG4gIC50aXRfc2V0e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgLnNldF9ib3Rte1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2YzZjNmMztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuZmVlc3tcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOjVweDtcbiAgfVxuICAuaW1nX2FsaWdue1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMjBweDtcbiAgICB0b3A6IC0xMiU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgfVxuICAuY291cnNlcmF0ZXtcbiAgICBpb24taWNvbntcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgfVxuICAuYm9va01hcmt7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA2JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG4uYnRuc2V0dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG59XG5cblxuLmltZ19hbGlnbm4uc2hvcnRsaXN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3OyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBzaG9ydGxpc3RlZCBpdGVtICovXG59XG5cbmlvbi1pY29uLmFjdGl2ZSB7XG4gIGNvbG9yOiBibHVlOyAvKiBDb2xvciBmb3IgYWN0aXZlIGJvb2ttYXJrICh3aGVuIHNob3J0bGlzdGVkKSAqL1xufVxuXG4uaW1nX2FsaWdubntcbiAgcGFkZGluZzogNXB4O1xuIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gcmlnaHQ6IDIwcHg7XG4gICAgdG9wOiAxNHB4O1xuIGJvcmRlcjogMXB4IHNvbGlkICM3NDZhYzA7XG4gd2lkdGg6IDI2cHg7XG4gaGVpZ2h0OiAyNnB4O1xufVxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_clglist_clglist_module_ts.js.map