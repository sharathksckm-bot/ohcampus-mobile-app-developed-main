"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_tab3_tab3_module_ts"],{

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

/***/ 99818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 53746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 99818);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 37007);














let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 78592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab3.page.html */ 38752);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 55816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _pages_popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _pages_predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/shortlist.service */ 17098);











let Tab3Page = class Tab3Page {
    constructor(router, service, activatedRoute, toastController, modalController, formBuilder, loadingController, alertController, shortlistService) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.shortlistService = shortlistService;
        this.formSubmitted = false;
        this.fewclgArr = [];
        this.coursesArray = [];
        this.isModalOpen = false;
        this.stateltsArry = [];
        this.cityltsArry = [];
        this.lastFiveYears = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.checkUserData();
            this.admissionForm = this.formBuilder.group({
                StudentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                passingstatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                passingYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                interestedCourses: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]{10}$')]]
            });
            const coursedata = localStorage.getItem('courses');
            if (coursedata) {
                this.coursesArray = JSON.parse(coursedata);
                this.courseId = this.coursesArray[0].id;
                this.coursename = this.coursesArray[0].name;
                this.categoryId = this.coursesArray[0].parent_category;
                this.feuturedclg();
                this.getformscitylist();
                this.getformstatelist();
                this.populateUserData();
            }
            const currentYear = new Date().getFullYear();
            for (let i = 0; i < 10; i++) {
                this.lastFiveYears.push(currentYear - i);
            }
        });
    }
    ionViewWillEnter() {
        // Check for user data when the view is about to enter
        this.checkUserData();
    }
    populateUserData() {
        this.checkUserData();
        // Populate form fields if user data exists
        if (this.loginuserId) {
            this.admissionForm.patchValue({
                StudentName: this.username,
                email: this.email,
                mobileNumber: this.phone,
            });
        }
    }
    checkUserData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.id) {
                this.loginuserId = user.id;
                this.username = user.name;
                this.email = user.email;
                this.phone = user.phone;
            }
            else {
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
                        yield this.checkuser();
                    }
                }
                else {
                    yield this.checkuser();
                }
            }
        });
    }
    checkuser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_3__.PopuplogsignPage,
                componentProps: { fromTab: 'tab3' }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data && data.loggedIn) {
                this.setUserData(data.user);
            }
        });
    }
    setUserData(user) {
        this.loginuserId = user.id;
        this.username = user.name;
        this.email = user.email;
        this.phone = user.phone;
        localStorage.setItem('user', JSON.stringify(user));
    }
    savconsellingform() {
        if (this.admissionForm.invalid) {
            this.admissionForm.markAllAsTouched();
            return;
        }
        if (this.admissionForm.valid) {
            this.service.ConsellingForm(this.admissionForm.controls.StudentName.value, this.admissionForm.controls.state.value, this.admissionForm.controls.city.value, this.admissionForm.controls.passingstatus.value, this.admissionForm.controls.passingYear.value, this.admissionForm.controls.interestedCourses.value, this.admissionForm.controls.mobileNumber.value).subscribe(response => {
                this.showAlert('Submitted!', 'Thanks for submitting the details. Our counsellor will contact you shortly.');
                this.admissionForm.reset();
                this.setOpen(false);
            }, error => {
                this.showAlert('failed!', 'Submission failed. Please try again.');
            });
        }
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    getformstatelist() {
        this.service.statelist().subscribe(res => {
            this.stateltsArry = res.res_data;
        });
    }
    getformscitylist() {
        this.service.citylist(this.stateId).subscribe(res => {
            this.cityltsArry = res.res_data;
        });
    }
    onStateChange(stateId) {
        this.service.citylist(stateId).subscribe(res => {
            this.cityltsArry = res.res_data;
        });
    }
    feuturedclg() {
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
                cssClass: 'custom-loading'
            });
            yield loader.present();
            this.service.getfeatureclg(this.categoryId).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                this.fewclgArr = res.data;
                yield loader.dismiss();
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.error('Error fetching featured colleges:', err);
                yield loader.dismiss();
            }));
        });
    }
    toggleShortlist(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    setOpen(isOpen) {
        this.isModalOpen = isOpen;
    }
    openModal() {
        this.isModalOpen = true;
    }
    closeModal() {
        this.isModalOpen = false;
    }
    checkValidInputData(event, field) {
        if (field === 'studentName') {
            const pattern = /^[a-zA-Z \'-]*$/;
            if (!pattern.test(event.target.value)) {
                event.target.value = event.target.value.replace(/[^a-zA-Z \'-]/g, '');
            }
        }
        else if (field === 'mobileNumber') {
            const pattern = /^[0-9]*$/;
            if (!pattern.test(event.target.value)) {
                event.target.value = event.target.value.replace(/[^0-9]/g, '');
            }
            if (event.target.value.length > 10) {
                event.target.value = event.target.value.slice(0, 10);
            }
        }
    }
    brochure(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.userId = this.loginuserId;
                const res = yield this.service.getbrochure(collegeId, this.userId).toPromise();
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
                console.error('An error occurred:', error);
                yield this.showAlert('Error', 'An error occurred while sending the brochure.');
            }
        });
    }
    clgpredict(id, CatId, subCatName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                yield this.checkuser();
                return;
            }
            yield this.predictadmission(id, CatId, subCatName);
        });
    }
    predictadmission(id, CatId, subCatName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_4__.PredictadmissionPage,
                componentProps: { id, CatId, subCatName }
            });
            return yield modal.present();
        });
    }
    clgdetails(collegeid) {
        this.router.navigate(['/clgdetails', collegeid]);
    }
    notification() {
        this.router.navigateByUrl('/notification');
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__.ShortlistService }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-tab3',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 38752:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab3/tab3.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" class=\"headerBg\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"9\">\n          <ion-buttons class=\"primaryhead\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n\n\n\n          <ion-icon routerLink=\"/editprofile\" class=\"notification\" name=\"person-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!-- section-1 -->\n  <div class=\"m10\">\n\n    <div *ngIf=\"fewclgArr && fewclgArr.length  > 0; else noDataTemplate\">\n\n\n\n      <h4> Featured Colleges</h4>\n      <div class=\"slide_set\" *ngFor=\"let item of fewclgArr\">\n\n        <ion-card class=\"size_set m0\" style=\"margin-bottom: 12px !important;\">\n          <div class=\"imgHead\">\n            <div>\n              <p class=\"tit_set\" (click)=\"clgdetails(item.id)\">{{ item.title }}</p>\n              <p class=\"set_botm\">\n                <ion-icon name=\"location-outline\"></ion-icon>{{ item.city }}\n              </p>\n            </div>\n            <img class=\"img_align\" [src]=\"item.image || '../../assets/clg_img/no_image2.jpg'\" alt=\"College logo\">\n          </div>\n          <p>Courses Offered</p>\n          <p><span class=\"spna\">{{ item.totalCourseCount }} courses</span>\n            <span class=\"spnn\" *ngIf=\"item.rating> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon> {{ item.rating\n              }}</span>\n          </p>\n          <ion-row class=\"footerpart\">\n\n\n            <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\" [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\"\n              (click)=\"toggleShortlist(item.id)\">\n              <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\n                [class.active]=\"isShortlisted(item.id)\">\n              </ion-icon>\n            </ion-button>\n\n\n            <ion-button shape=\"round\" (click)=\"brochure(item.id)\">\n              Brochure\n            </ion-button>\n            <ion-button shape=\"round\" (click)=\"clgpredict(item.id, item.CatId, item.subCatName)\">\n              Predict Admission\n            </ion-button>\n          </ion-row>\n        </ion-card>\n      </div>\n    </div>\n\n    <ng-template #noDataTemplate>\n      <p>No colleges found.</p>\n    </ng-template>\n\n\n\n\n\n    <div class=\"conselling\">\n      <ion-row>\n        <ion-col size=\"8\" class=\"selfcenter\">\n          <h3>Confused about which college or exam to opt for?</h3>\n        </ion-col>\n        <ion-col size=\"4\">\n          <img src=\"../../assets/clg_icon/noimageanu.jpg\">\n        </ion-col>\n      </ion-row>\n\n      <ul>\n        <li>Chat with our counselor</li>\n        <li>Get your personalised list of colleges & exam matching your preferrences</li>\n      </ul>\n      <div class=\"setbtn\">\n        <ion-button (click)=\"openModal()\">Get Free Counselling</ion-button>\n      </div>\n    </div>\n\n  </div>\n\n\n\n  <ion-modal [isOpen]=\"isModalOpen\">\n    <ng-template>\n\n      <ion-content>\n        <div class=\"matfield\">\n          <div class=\"modelhead\">\n            <ion-icon class=\"iconclose\" name=\"close-outline\" (click)=\"setOpen(false)\"></ion-icon>\n            <h2 style=\"text-align: center;\">Counselling Form</h2>\n\n          </div>\n\n          <div class=\"modal-content\" style=\"overflow: hidden;\">\n\n            <form [formGroup]=\"admissionForm\">\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\n                <mat-label>Student Name</mat-label>\n                <input matInput placeholder=\"Enter student name\" formControlName=\"StudentName\"\n                  (input)=\"checkValidInputData($event, 'studentName')\">\n              </mat-form-field>\n\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\n                <mat-label>State</mat-label>\n                <mat-select formControlName=\"state\" (selectionChange)=\"onStateChange($event.value)\">\n                  <mat-option *ngFor=\"let state of stateltsArry\" [value]=\"state.id\">{{ state.statename }}</mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\n                <mat-label>City</mat-label>\n                <mat-select formControlName=\"city\">\n                  <mat-option *ngFor=\"let city of cityltsArry\" [value]=\"city.id\">{{ city.city }}</mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              \n\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\n                <mat-label>Pursuing / Completed Course</mat-label>\n                \n                <input matInput placeholder=\"Enter Course Name\" formControlName=\"passingstatus\">\n\n              </mat-form-field>\n\n\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\n                <mat-label>Passing Year</mat-label>\n                <mat-select placeholder=\"Enter Passing year\" formControlName=\"passingYear\">\n                  <!-- <mat-option ngFor=\"let item of lastFiveYears\">{{item}}</mat-option> -->\n                  <mat-option *ngFor=\"let visaregions of lastFiveYears\" [value]=\"visaregions\">\n                    {{visaregions}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\n                <mat-label>Interested Courses</mat-label>\n                <input matInput placeholder=\"Enter Course name\" formControlName=\"interestedCourses\"\n                  (input)=\"checkValidInputData($event, 'studentName')\">\n              </mat-form-field>\n\n\n              <mat-form-field class=\"w-100\" appearance=\"outline\">\n                <mat-label>Contact Number</mat-label>\n                <input matInput placeholder=\"Enter contact number\" formControlName=\"mobileNumber\"\n                  (input)=\"checkValidInputData($event, 'mobileNumber')\">\n              </mat-form-field>\n\n              <button mat-raised-button color=\"primary\" class=\"px-12 centbtn mt-4 mb-10\" type=\"submit\"\n                (click)=\"savconsellingform()\">Submit</button>\n            </form>\n          </div>\n        </div>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>");

/***/ }),

/***/ 55816:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".img {\n  position: absolute;\n  top: 23%;\n}\n\n.px-12 {\n  padding: 0 12px !important;\n}\n\n.py-12 {\n  padding: 12px 0 !important;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.headtxt {\n  font-weight: 500 !important;\n}\n\n.sbtxt {\n  font-size: 14px;\n  font-weight: 300 !important;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\n.segmentStud {\n  margin-top: 12px;\n}\n\n.likeDis {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.likeDis .like {\n  color: green;\n}\n\n.likeDis .dislike {\n  color: red;\n}\n\n.likeDis p {\n  color: #0083dc;\n}\n\n.likeDis span {\n  vertical-align: middle;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.m-12 {\n  margin: 12px;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.border-y {\n  margin-bottom: 14px;\n  padding: 0px 12px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n\n.setspn {\n  color: blue;\n}\n\n.setnotification {\n  width: 360px;\n  height: 370px;\n}\n\n.setnotification .settitle {\n  text-align: center;\n  background: #a4affe;\n  position: relative;\n  top: -14px;\n  height: 35px;\n}\n\n.setnotification p {\n  color: #0083dc;\n}\n\n.star-icon {\n  color: #FFC107;\n}\n\n.HeadTxt {\n  margin-left: 12px;\n}\n\n.purlegrad {\n  padding-bottom: 2rem;\n  background-image: radial-gradient(circle farthest-corner at -14.3% -17.5%, rgba(245, 168, 168, 0.5) 4%, rgba(164, 168, 248, 0.5) 100.2%) !important;\n  border-radius: 14px !important;\n}\n\n.purlegrad p {\n  margin: 6px 0px;\n  align-items: center;\n  display: flex;\n}\n\n.rctxt {\n  margin-bottom: 0 !important;\n  font-size: 15px;\n  justify-content: center;\n  font-weight: 500;\n}\n\n.rctxt ion-icon {\n  border: 1px solid lightgray;\n  background: #fff;\n  padding: 8px;\n  font-size: 18px;\n  margin-left: 8px;\n  border-radius: 50px;\n  color: #8f8f8f;\n}\n\n.sctwo {\n  padding: 12px 12px 25px;\n}\n\n.sctwo p {\n  margin: 6px 0px;\n  align-items: center;\n  display: flex;\n}\n\n.thirdsec {\n  border-radius: 16px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  padding: 0.5rem 0.5rem 2rem;\n  margin-bottom: 2rem;\n}\n\n.thirdsec p {\n  margin: 6px 0px;\n  align-items: center;\n  display: flex;\n}\n\n.imgtxt {\n  display: flex;\n  align-items: center;\n}\n\n.imgtxt img {\n  width: 25px;\n  margin-right: 8px;\n}\n\n.my-10 {\n  margin: 10px 0px;\n}\n\n.blutxt {\n  color: #0083dc;\n}\n\nion-segment-button.ion-activated {\n  --background: #3880ff;\n  /* Active background color */\n  --color: #fff;\n  /* Active text color */\n}\n\nion-segment-button {\n  --background: #f4f5f8;\n  /* Default background color */\n  --color: #000;\n  /* Default text color */\n  --indicator-color: #3880ff;\n  /* Indicator color when active */\n}\n\nion-segment-button .star-icon {\n  color: inherit;\n  /* Ensure the icon color inherits from the text color */\n}\n\n.seg-btn.active {\n  background-color: #88d834;\n  /* Change to your desired active background color */\n  color: #fff;\n  /* Change to your desired active text color */\n}\n\n.conselling {\n  background: rgba(165, 88, 236, 0.22);\n  border-radius: 21px;\n  margin: 1.5rem 0;\n  padding: 10px;\n}\n\n.conselling .setbtn {\n  text-align: center;\n}\n\n.conselling .setbtn ion-button {\n  --background: #673AB7;\n  --border-radius: 50px;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.conselling img {\n  border-radius: 10px;\n}\n\n.conselling h3 {\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.conselling ul {\n  padding-left: 20px;\n  margin: 10px 0px 16px;\n}\n\n.boomark {\n  --color: gray;\n  --border-color: #cfcfcf;\n}\n\n.spna {\n  color: var(--ion-color-secondary);\n  border-right: 1px solid lightgrey;\n  font-size: 16px;\n  padding-right: 6px;\n  margin-right: 6px;\n}\n\n.size_set {\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.8) 0px 8px 25px;\n}\n\n.modal-content {\n  padding: 20px;\n}\n\nion-modal {\n  --width: 90%;\n  --height: 90%;\n  --border-radius: 8px;\n}\n\n.modelhead {\n  padding: 16px 16px 0;\n}\n\n.modelhead ion-icon {\n  font-size: 25px;\n  margin-left: auto;\n  display: block;\n  margin-bottom: 6px;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 12px;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.centbtn {\n  margin: auto;\n  display: block;\n}\n\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n  /* Background color for shortlisted item */\n}\n\nion-icon.active {\n  color: blue;\n  /* Color for active bookmark (when shortlisted) */\n}\n/*# sourceMappingURL=data:application/json;base64,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dGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIzJTtcbn1cblxuXG4ucHgtMTJ7XG4gICAgcGFkZGluZzogMCAxMnB4IWltcG9ydGFudDtcbn1cbi5weS0xMntcbiAgICBwYWRkaW5nOiAxMnB4IDAhaW1wb3J0YW50O1xufVxuLnB0LTEye1xuICAgIHBhZGRpbmctdG9wOjEycHg7XG59XG4uaGVhZHR4dHtcbiAgICBmb250LXdlaWdodDogNTAwIWltcG9ydGFudDtcbiAgICBcbn1cbi5zYnR4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMCFpbXBvcnRhbnQ7XG59XG4ub3ZyYWxscmF0aW5ne1xuICAgIGgxe1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAucCwgLnN0YXJyYXRleHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG4gICAgLmJsdXR4dHtcbiAgICAgICAgY29sb3I6ICMwMDgzZGM7XG4gICAgfVxuICAgIC5zdGFycmF0ZXtcbiAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgfVxuICAgIC5ydHZhbHVle1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC52ZXJ0eHR7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBtYXJnaW46IDEycHggMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XG59XG4ucG9wdWxhcnR4dHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGgye1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cbi5zZWdtZW50U3R1ZHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG4gIC5saWtlRGlze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmxpa2V7XG4gICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG4gICAgLmRpc2xpa2V7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xuICAgIH1cbiAgICBzcGFue1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgfVxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy8gLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbjogMHB4IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuLm0tMTJ7XG4gICAgbWFyZ2luOiAxMnB4O1xufVxuLmhpZ2hsaWd0Ym94e1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgLmFsaWNlYmx1ZXtcbiAgICAgICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6MTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICAucGlua2xpZ2h0e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjllY2VlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6MTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cbiAgICBcbn1cbi5yYXRlc3tcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xuICAgICAgICBjb2xvcjogIzExYzkxODtcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICB9XG59XG4uYm9yZGVyLXl7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICBwYWRkaW5nOiAwcHggMTJweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xufVxuXG5cblxuXG4uc2V0c3Bue1xuICAgIGNvbG9yOmJsdWU7XG59XG5cbi5zZXRub3RpZmljYXRpb257XG4gICAgd2lkdGg6MzYwcHg7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICAuc2V0dGl0bGV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjYTRhZmZlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xNHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgY29sb3I6IzAwODNkYztcbiAgICB9XG59XG5cbi5zdGFyLWljb24ge1xuICAgIGNvbG9yOiAjRkZDMTA3OyBcbiAgfVxuICBcbiAgLkhlYWRUeHR7XG4gICAgXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEycHg7XG4gICAgXG4gIH1cblxuXG5cblxuLnB1cmxlZ3JhZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAtMTQuMyUgLTE3LjUlLCByZ2JhKDI0NSwgMTY4LCAxNjgsIDAuNSkgNCUsIHJnYmEoMTY0LCAxNjgsIDI0OCwgMC41KSAxMDAuMiUpIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4IWltcG9ydGFudDtcbiAgICBwe1xuICAgICAgICBtYXJnaW46IDZweCAwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxufVxuXG4ucmN0eHR7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuaW9uLWljb257XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgY29sb3I6ICM4ZjhmOGY7XG4gfVxufVxuLnNjdHdve1xuICAgIHBhZGRpbmc6IDEycHggMTJweCAyNXB4O1xuICAgIHB7XG4gICAgICAgIG1hcmdpbjogNnB4IDBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG59XG5cbi50aGlyZHNlY3tcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiA2cHggMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbn1cbi5pbWd0eHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6MjVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgLy8gZmxleC1zaHJpbms6IDA7XG4gICAgICAvLyAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAvL21hcmdpbi10b3A6IDFyZW07XG4gICAgfVxufVxuLm15LTEwe1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG59XG4uYmx1dHh0e1xuICAgIGNvbG9yOiAjMDA4M2RjO1xufVxuaW9uLXNlZ21lbnQtYnV0dG9uLmlvbi1hY3RpdmF0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjsgLyogQWN0aXZlIGJhY2tncm91bmQgY29sb3IgKi9cbiAgICAtLWNvbG9yOiAjZmZmOyAvKiBBY3RpdmUgdGV4dCBjb2xvciAqL1xuICB9XG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4OyAvKiBEZWZhdWx0IGJhY2tncm91bmQgY29sb3IgKi9cbiAgICAtLWNvbG9yOiAjMDAwOyAvKiBEZWZhdWx0IHRleHQgY29sb3IgKi9cbiAgICAtLWluZGljYXRvci1jb2xvcjogIzM4ODBmZjsgLyogSW5kaWNhdG9yIGNvbG9yIHdoZW4gYWN0aXZlICovXG4gIH1cbiAgXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiAuc3Rhci1pY29uIHtcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogRW5zdXJlIHRoZSBpY29uIGNvbG9yIGluaGVyaXRzIGZyb20gdGhlIHRleHQgY29sb3IgKi9cbiAgfSBcbiAgLnNlZy1idG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4OGQ4MzQ7IC8qIENoYW5nZSB0byB5b3VyIGRlc2lyZWQgYWN0aXZlIGJhY2tncm91bmQgY29sb3IgKi9cbiAgICBjb2xvcjogI2ZmZjsgLyogQ2hhbmdlIHRvIHlvdXIgZGVzaXJlZCBhY3RpdmUgdGV4dCBjb2xvciAqL1xuICB9XG5cblxuXG4vLyAgIGNvbnNlbGxpbmcgc2VjdGlvblxuXG4uY29uc2VsbGluZ3tcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTY1IDg4IDIzNiAvIDIyJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjFweDtcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLnNldGJ0bntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNjczQUI3O1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW1ne1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICBoM3tcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgICB1bHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4IDE2cHg7XG4gICAgfVxufVxuXG4uYm9vbWFya3tcbiAgICAtLWNvbG9yOiBncmF5O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjY2ZjZmNmO1xufVxuLnNwbmF7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG5cbi5zaXplX3NldCB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdvcmQtc3BhY2luZzogMnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLS1vdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGNvbnRhaW46IHVuc2V0O1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgyMDUsIDIxMSwgMjE0LCAwLjgpIDBweCA4cHggMjVweDtcbn1cblxuLy8gLnNob3J0bGlzdGVkIGlvbi1pY29uIHtcbi8vICAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50OyAvKiBPcHRpb25hbCAtIHRvIGVuc3VyZSBpY29uIGlzIGJsdWUgKi9cbi8vICAgfVxuXG5cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1tb2RhbCB7XG4gICAgLS13aWR0aDogOTAlO1xuICAgIC0taGVpZ2h0OiA5MCU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cblxuICAubW9kZWxoZWFke1xuICAgIHBhZGRpbmc6MTZweCAxNnB4IDAgO1xuICAgIGlvbi1pY29ue1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG4gIH1cbiAgXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogMC4zZW0gMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICBcbiAgICB9XG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuNWVtOyB9XG4gIFxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xuICAgICAgd2lkdGg6IDEzMy4zMzMzMyU7XG4gIH1cbiAgXG4gIC53LTEwMHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIFxuICB9XG4gIFxuICAuY2VudGJ0bntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuXG4gIC5pbWdfYWxpZ25uLnNob3J0bGlzdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3OyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBzaG9ydGxpc3RlZCBpdGVtICovXG4gIH1cbiAgXG4gIGlvbi1pY29uLmFjdGl2ZSB7XG4gICAgY29sb3I6IGJsdWU7IC8qIENvbG9yIGZvciBhY3RpdmUgYm9va21hcmsgKHdoZW4gc2hvcnRsaXN0ZWQpICovXG4gIH1cbiAgIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map