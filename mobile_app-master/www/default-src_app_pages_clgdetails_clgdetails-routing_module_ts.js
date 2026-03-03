"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["default-src_app_pages_clgdetails_clgdetails-routing_module_ts"],{

/***/ 50617:
/*!****************************************************************!*\
  !*** ./src/app/pages/clgdetails/admissions/admissions.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmissionsPage": () => (/* binding */ AdmissionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admissions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./admissions.page.html */ 1078);
/* harmony import */ var _admissions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admissions.page.scss */ 51733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shortlist.service */ 17098);












let AdmissionsPage = class AdmissionsPage {
    constructor(router, service, activatedRoute, loadingController, platform, modalController, alertController, formBuilder, shortlistService) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.shortlistService = shortlistService;
        this.slidepic = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.segmentStud = 'tabs1';
        this.selectedSegment = 'Latest';
        this.filtersegment = 'tabsA';
        this.clgdetailArry = [];
        this.tableOfContent = [];
        this.faqsarray = [];
        this.notificationarry = [];
        this.clghightlight = [];
        this.admiprocessarry = [];
        this.examedateArr = [];
        this.entranceExamsArr = [];
        this.admissionProcessFAQArr = [];
        this.ansquesArr = [];
        this.clgimgArry = [];
        this.slideOpts1 = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.slideOptsnew = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.slideOptssuited = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.reviewsArr = [];
        this.isThumbsUpClicked = false; // Initially not clicked
        this.isThumbsDownClicked = false; // Initially not clicked
        this.loginuserId = null;
        this.isBookmarked = false;
        this.shortlistedColleges = new Set();
        this.selectedCourseName = null;
    }
    ngOnInit() {
        this.getResponseDataFromLocalStorage();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.loginuserId = user.id;
        }
        else {
        }
        this.studentForum = this.formBuilder.group({
            studentque: ['']
        });
        this.selectedCourseName = localStorage.getItem('selectedCourseName');
        if (this.selectedCourseName) {
            console.log('Selected Course Name exists:', this.selectedCourseName);
        }
        else {
            console.log('Selected Course Name is null or undefined.');
        }
        this.coursesArray = JSON.parse(localStorage.getItem('courses'));
        this.courseId = this.coursesArray[0].id;
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params.collegeid;
            this.getclgdetail();
            this.faqs();
            this.notifications();
            this.admissionproces();
            this.getlatestnpop();
            this.ansques();
            this.review();
        });
    }
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
            }
            else {
                console.log('No user data found in response_data.');
            }
        }
        else {
            console.log('No response_data found in local storage.');
        }
    }
    postQuestion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            if (this.studentForum.invalid) {
                this.studentForum.markAllAsTouched();
            }
            else {
                this.user_id = this.loginuserId;
                this.service.userqnspost(this.collegeId, this.courselevel, this.course, this.user_id, this.studentForum.value.studentque).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.showAlert('Success', 'Question has been submitted. We will get back to you soon!');
                    this.studentForum.reset();
                }));
            }
        });
    }
    voteReview(reviewId, userId, ishelpful) {
        // console.log(this.value);
        this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
            // console.log(res);
        });
    }
    articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
    toggleAccordion(item) {
        item.isOpen = !item.isOpen;
    }
    studentSay(ev) {
        this.segmentStud = ev.detail.value;
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    filterTabs(ev) {
        this.filtersegment = ev.detail.value;
    }
    getclgid(collegeid) {
        this.router.navigate(['/clgdetails', collegeid]);
    }
    getclgdetail() {
        this.service.getclgdetails(this.collegeId).subscribe(res => {
            // console.log(res);
            this.clgdetailArry = res.college_detail;
            this.collegename = res.college_detail[0].title;
            this.currentYear = (new Date()).getFullYear();
            this.whatnew = res.college_detail[0].what_new;
            this.tableOfContent = res.table_of_content;
            this.clghightlight = res.college_detail[0].CollegeHighlight;
            //  console.log(this.clghightlight);
            this.cityid = res.college_detail[0].cityid;
            this.clgimgArry = res.college_images;
            // console.log(this.cityid)
            this.bylocpopclg();
            this.categories = res.college_detail[0].categoryid;
            console.log(this.categories);
            this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
            //  console.log(this.categories);
            this.suitedclg();
        });
    }
    faqs() {
        this.service.getFaqs(this.collegeId).subscribe(res => {
            // console.log(res);
            this.faqsarray = res.FAQs;
            // console.log(this.faqsarray);
        });
    }
    addmissiondatepdf(sub_category) {
        this.service.addmisiondatepdf(this.collegeId, sub_category).subscribe(res => {
            this.viewPDF = res;
            window.open(this.viewPDF.PDF, '_blank');
        });
    }
    notifications() {
        this.service.getnotification(this.collegeId).subscribe(res => {
            this.notificationarry = res.response_data;
        });
    }
    admissionproces() {
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
            yield loading.present(); // Display the loader
            this.service.admissionprocess(this.collegeId).subscribe(res => {
                this.admiprocessarry = res.AdmissionProcess;
                this.entranceExamsArr = res.AdmissionProcess.entrance_exams;
                this.admissionProcessFAQArr = res.Commonaly_Asked_Questions;
                loading.dismiss(); // Dismiss the loader once data is fetched
            }, error => {
                console.error('Error fetching admission process:', error);
                loading.dismiss(); // Dismiss the loader in case of an error
            });
        });
    }
    bylocpopclg() {
        this.service.clgpopular(this.courseid).subscribe(res => {
            this.popularclgarry = res.response_data;
        });
    }
    getlatestnpop() {
        this.service.getlatestnpop().subscribe(res => {
            // console.log(res);
            this.latenpopArr = res.latest_blogs;
            this.popularArr = res.popular_blogs;
        });
    }
    ansques() {
        this.service.addmissionqueans(this.collegeId).subscribe(res => {
            // console.log(res);
            this.ansquesArr = res.QueAnsAboutAdmissions;
        });
    }
    review() {
        this.service.getclgreview(this.collegeId).subscribe(res => {
            // console.log(res);
            this.reviewsArry = res.data;
            //  console.log(this.reviewsArry);
            this.reviewsArr = res.data.reviews;
            this.overallrating = res.data.reviews[0].totalRatingCount;
            // console.log(this.overallrating);
            this.totalRateCount = res.data.totalRateCount;
            this.totalPlacementRateCount = res.data.totalPlacementRateCount;
            this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
            this.totalFacultyRateCount = res.data.totalFacultyRateCount;
            this.totalHostelRateCount = res.data.totalHostelRateCount;
            this.totalCampusRateCount = res.data.totalCampusRateCount;
            this.totalMoneyRateCount = res.data.totalMoneyRateCount;
            this.one2twoRate = res.data.one2twoRate;
            this.two2threeRate = res.data.two2threeRate;
            this.three2fourRate = res.data.three2fourRate;
            this.four2fiveRate = res.data.four2fiveRate;
        });
    }
    suitedclg() {
        this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
            console.log(res);
            this.suitclgarry = res.bestSuitedColleges;
            console.log(this.suitclgarry);
        });
    }
    compclg(collegeId) {
        this.router.navigate(['/clgcompare', collegeId]);
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
    brochuresuit(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            // alert(collegeId)
            try {
                // this.collegeId = collegeId;
                this.userId = this.loginuserId;
                const res = yield this.service.getbrochure(collegeId, this.userId).toPromise();
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
    brochure(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // Check if token exists in local storage
            // this.token = localStorage.getItem('token');
            if (!this.loginuserId) {
                // Token is not present, so present sign-in modal
                this.presentSignInModal();
                return; // Exit function if token is missing
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
AdmissionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__.ShortlistService }
];
AdmissionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-admissions',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admissions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_admissions_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdmissionsPage);



/***/ }),

/***/ 90644:
/*!***************************************************************!*\
  !*** ./src/app/pages/clgdetails/clgdetails-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "ClgdetailsPageRoutingModule": () => (/* binding */ ClgdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _clgdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clgdetails.page */ 79154);
/* harmony import */ var _coursesfees_coursesfees_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursesfees/coursesfees.page */ 54525);
/* harmony import */ var _reviews_reviews_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reviews/reviews.page */ 75934);
/* harmony import */ var _admissions_admissions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admissions/admissions.page */ 50617);
/* harmony import */ var _placements_placements_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placements/placements.page */ 67229);
/* harmony import */ var _cutoffs_cutoffs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cutoffs/cutoffs.page */ 7019);
/* harmony import */ var _infrastructure_infrastructure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infrastructure/infrastructure.page */ 62737);
/* harmony import */ var _compare_compare_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compare/compare.page */ 93808);
/* harmony import */ var _scolarship_scolarship_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scolarship/scolarship.page */ 62932);
/* harmony import */ var _news_news_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./news/news.page */ 4553);
/* harmony import */ var _questionans_questionans_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./questionans/questionans.page */ 85607);
/* harmony import */ var _coursinfo_coursinfo_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coursinfo/coursinfo.page */ 65665);















const routes = [
    {
        path: '',
        component: _clgdetails_page__WEBPACK_IMPORTED_MODULE_0__.ClgdetailsPage,
        children: [
            {
                path: '',
                component: _clgdetails_page__WEBPACK_IMPORTED_MODULE_0__.ClgdetailsPage
            },
            {
                path: '',
                component: _coursesfees_coursesfees_page__WEBPACK_IMPORTED_MODULE_1__.CoursesfeesPage
            },
            {
                path: '',
                component: _reviews_reviews_page__WEBPACK_IMPORTED_MODULE_2__.ReviewsPage
            },
            {
                path: '',
                component: _admissions_admissions_page__WEBPACK_IMPORTED_MODULE_3__.AdmissionsPage
            },
            {
                path: '',
                component: _placements_placements_page__WEBPACK_IMPORTED_MODULE_4__.PlacementsPage
            },
            {
                path: '',
                component: _cutoffs_cutoffs_page__WEBPACK_IMPORTED_MODULE_5__.CutoffsPage
            },
            {
                path: '',
                component: _infrastructure_infrastructure_page__WEBPACK_IMPORTED_MODULE_6__.InfrastructurePage
            },
            {
                path: '',
                component: _compare_compare_page__WEBPACK_IMPORTED_MODULE_7__.ComparePage
            },
            {
                path: '',
                component: _scolarship_scolarship_page__WEBPACK_IMPORTED_MODULE_8__.ScolarshipPage
            },
            {
                path: '',
                component: _news_news_page__WEBPACK_IMPORTED_MODULE_9__.NewsPage
            },
            {
                path: '',
                component: _questionans_questionans_page__WEBPACK_IMPORTED_MODULE_10__.QuestionansPage
            },
            {
                path: 'CoursinfoPage/:courseid',
                component: _coursinfo_coursinfo_page__WEBPACK_IMPORTED_MODULE_11__.CoursinfoPage
            },
        ]
    }
];
let ClgdetailsPageRoutingModule = class ClgdetailsPageRoutingModule {
};
ClgdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    })
], ClgdetailsPageRoutingModule);

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { ClgdetailsPage } from './clgdetails.page';
// import { CoursesfeesPage } from './coursesfees/coursesfees.page';
// import { ReviewsPage } from './reviews/reviews.page';
// import { AdmissionsPage } from './admissions/admissions.page';
// import { PlacementsPage } from './placements/placements.page';
// import { CutoffsPage } from './cutoffs/cutoffs.page';
// import { InfrastructurePage } from './infrastructure/infrastructure.page';
// import { FacultyPage } from './faculty/faculty.page';
// import { ComparePage } from './compare/compare.page';
// import { ScolarshipPage } from './scolarship/scolarship.page';
// import { NewsPage } from './news/news.page';
// import { QuestionansPage } from './questionans/questionans.page';
// import { CoursinfoPage } from './coursinfo/coursinfo.page';
// const routes: Routes = [
//   {
//     path: '',
//     component: ClgdetailsPage,
//     children: [
//       { path: 'coursesfees', component: CoursesfeesPage },
//       { path: 'reviews', component: ReviewsPage },
//       { path: 'admissions', component: AdmissionsPage },
//       { path: 'placements', component: PlacementsPage },
//       { path: 'cutoffs', component: CutoffsPage },
//       { path: 'infrastructure', component: InfrastructurePage },
//       { path: 'faculty', component: FacultyPage },
//       { path: 'compare', component: ComparePage },
//       { path: 'scolarship', component: ScolarshipPage },
//       { path: 'news', component: NewsPage },
//       { path: 'questionans', component: QuestionansPage },
//       { path: 'coursinfo/:courseid', component: CoursinfoPage },
//       // { path: '', redirectTo: 'coursesfees', pathMatch: 'full' } // Default route
//     ]
//   }
// ];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class ClgdetailsPageRoutingModule {}


/***/ }),

/***/ 79154:
/*!*****************************************************!*\
  !*** ./src/app/pages/clgdetails/clgdetails.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClgdetailsPage": () => (/* binding */ ClgdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_clgdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./clgdetails.page.html */ 18527);
/* harmony import */ var _clgdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clgdetails.page.scss */ 2537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shortlist.service */ 17098);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 1331);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 64314);



/* eslint-disable @typescript-eslint/naming-convention */













let ClgdetailsPage = class ClgdetailsPage {
    constructor(socialSharing, iab, router, service, activatedRoute, formBuilder, loadingController, platform, modalController, alertController, shortlistService, el, cdr) {
        this.socialSharing = socialSharing;
        this.iab = iab;
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.shortlistService = shortlistService;
        this.el = el;
        this.cdr = cdr;
        this.totalReview = 0;
        this.showMore = false;
        this.coureseinfotab = false;
        this.slidepic = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.slideOpts1 = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.slideOptspage = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.slideOptssuited = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.yearsArray = [];
        this.isThumbsUpClicked = false; // Initially not clicked
        this.isThumbsDownClicked = false; // Initially not clicked
        this.rankingarray = null;
        this.segment = 'tabsA';
        this.segmentStud = 'tabs1';
        this.selectedSegment = 'Latest';
        this.clgdetailArry = [];
        this.clgimgArry = [];
        this.tableOfContent = [];
        this.clghightlight = [];
        this.popprogrmmArry = [];
        this.qunanswer = [];
        this.admissionQarray = [];
        this.prosesarray = [];
        this.placementarray = [];
        this.rankingQarray = [];
        this.coursefeesarray = [];
        this.coursfeeQarray = [];
        this.scholershiparray = [];
        this.scholershipQarray = [];
        this.faqsarray = [];
        this.notificationarry = [];
        this.detailsarry = [];
        this.reviewsArr = [];
        this.showShearDiv = false;
        this.loginuserId = null;
        this.isBookmarked = false;
        this.shortlistedColleges = new Set();
        this.TabselectedIndex = 0;
        this.segmentButtons = [
            { value: 'tabsA', label: 'College info' },
            { value: 'tabsB', label: 'Courses & Fees' },
            { value: 'tabsC', label: 'Reviews' },
            { value: 'tabsD', label: 'Admissions' },
            { value: 'tabsE', label: 'Placements' },
            { value: 'tabsF', label: 'Cut-Offs' },
            { value: 'tabsG', label: 'Infrastructure' },
            { value: 'tabsI', label: 'Compare' },
            { value: 'tabsJ', label: 'Q&A' },
            { value: 'tabsK', label: 'Scholarships' },
            { value: 'tabsL', label: 'Articles' },
            { value: 'tabsM', label: 'Course Info' },
        ];
        this.tblecontentArry = [];
        this.selectedCourseIdB = '';
        this.selectedCourseName = null;
        this.popprogrmmArrydata = [];
        const currentYear = new Date().getFullYear();
        for (let i = 0; i < 25; i++) {
            const startYear = currentYear - i;
            const endYear = startYear + 1;
            const yearLabel = `${startYear}-${String(endYear).slice(2)}`;
            this.yearsArray.push(yearLabel);
        }
    }
    toggleShowMore() {
        this.showMore = !this.showMore;
    }
    ngOnInit() {
        // this.selectedCourseIdB = localStorage.getItem('selectedCourseIdB');
        // console.log(this.selectedCourseIdB);
        // const selectedCourseName = localStorage.getItem('selectedCourseName');
        // console.log('Selected Course Name:', selectedCourseName);
        this.selectedCourseName = localStorage.getItem('selectedCourseName');
        if (this.selectedCourseName) {
            console.log('Selected Course Name exists:', this.selectedCourseName);
        }
        else {
            console.log('Selected Course Name is null or undefined.');
        }
        this.getResponseDataFromLocalStorage();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.loginuserId = user.id;
        }
        else {
        }
        this.studentForum = this.formBuilder.group({
            studentque: ['']
        });
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params.collegeid;
            this.clgrankingdata();
            this.getclgdetail();
            this.hightlightqns();
            this.admissionproces();
            this.tbleofcontent();
            this.getlatestnpop();
            this.cousesnfees();
            this.scholership();
            this.FAqs();
            this.notifications();
            this.contactdetail();
            this.review();
        });
        this.placementForm = this.formBuilder.group({
            course_category: ['',],
            year: [''],
        });
        this.placementcat();
        this.placement();
        this.getCollegeFacilitiesByID();
        this.getCollegeAdmissionProcess();
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
    compclg1(collegeId) {
        this.router.navigate(['/clgcompare', collegeId]);
    }
    onCourseClicked(courseid, course_category, tabName) {
        this.segment = tabName;
        localStorage.setItem('course_category', course_category);
        localStorage.setItem('selectedCourseId', courseid);
        console.log('Selected Course ID:', courseid);
    }
    shareBlog(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.id = collegeId;
            let selectpara = {
                "id": this.id,
                "type": "college"
            };
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
            this.service.generateLink_req(selectpara).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                yield loader.dismiss();
                this.sharelink = res.data.share_link;
                this.socialSharing.share(this.sharelink).then(() => {
                    console.log("Shared successfully");
                });
            }));
        });
    }
    onCourseClicked1(event) {
        console.log(event);
        this.segment = 'tabsM';
        this.coureseinfotab = true;
        this.segment = 'tabsM';
        console.log(this.TabselectedIndex);
    }
    oncourseinfo(event) {
        console.log(event);
    }
    scrollTo(sectionName) {
        console.log(sectionName);
        const element = this.el.nativeElement.querySelector(`[name="${sectionName}"]`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    onTabChange(event) {
        console.log(event);
    }
    toggleAccordion(item) {
        item.isOpen = !item.isOpen;
    }
    clgDetailTabs(ev) {
        this.segment = ev.detail.value;
    }
    studentSay(ev) {
        this.segmentStud = ev.detail.value;
    }
    toggleShearDiv() {
        this.showShearDiv = !this.showShearDiv;
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    toggleDescription(item) {
        item.showMore = !item.showMore;
    }
    getMapUrl(location) {
        const encodedLocation = encodeURIComponent(location);
        return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
    }
    getclgdetail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
            yield loading.present(); // Ensure the loader is presented
            this.service.getclgdetails(this.collegeId).subscribe(res => {
                console.log(res.response_code);
                if (res.response_code == 200) {
                    this.clgdetailArry = res.college_detail;
                    console.log(this.clgdetailArry);
                    this.description = res.college_detail[0].description;
                    this.catid = res.college_detail[0].categoryid;
                    this.clglogo = res.college_detail[0].logo;
                    this.collegename = res.college_detail[0].title;
                    this.cityname = res.college_detail[0].city;
                    this.state = res.college_detail[0].state;
                    this.description = res.college_detail[0].description;
                    this.clgcategory = res.college_detail[0].Collage_category;
                    this.estd = res.college_detail[0].estd;
                    this.image = res.college_detail[0].image;
                    this.currentYear = (new Date()).getFullYear();
                    this.whatnew = res.college_detail[0].what_new;
                    this.tableOfContent = res.table_of_content;
                    this.clgimgArry = res.college_images;
                    this.cityidArry = res.college_detail[0].cityid;
                    this.courseId = res.college_detail[0].coursesandfees[0].sub_category;
                    console.log('Sub Category:', this.courseId);
                    this.popularclg();
                    this.categories = res.college_detail[0].categoryid;
                    console.log(this.categories);
                    this.suitedclg();
                    this.popprogrammes();
                    loading.dismiss();
                }
                else {
                    loading.dismiss();
                }
            }, error => {
                console.error('Error fetching college details:', error);
                if (error.status === 400) {
                    loading.dismiss();
                }
                else {
                }
            });
        });
    }
    popularclg() {
        this.service.clgpopular(this.courseId).subscribe(res => {
            this.popularclgarry = res.response_data;
        });
    }
    popprogrammes() {
        this.subcategory = '';
        console.log(this.courseId);
        let collegeTypeId = this.clgcategory;
        this.service.getpopprogrammes(this.collegeId, this.subcategory, collegeTypeId).subscribe(res => {
            this.popprogrmmArrydata = res.popular_programmes;
            this.qunanswer = res.Commonaly_Asked_Questions;
        });
    }
    suitedclg() {
        this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
            this.suitclgarry = res.bestSuitedColleges;
        });
    }
    getclgid(collegeid) {
        this.router.navigate(['/clgdetails', collegeid]);
    }
    tbleofcontent() {
        this.service.tableofcontent(this.collegeId).subscribe(res => {
            this.tblecontentArry = res.response_data;
        });
    }
    hightlightqns() {
        this.service.gethighlightqan(this.collegeId).subscribe(res => {
            // console.log(res);
            this.clghightlight = res.CollegeHighlight;
            this.qunanswer = res.Commonaly_Asked_Questions;
        });
    }
    postQuestion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            if (this.studentForum.invalid) {
                this.studentForum.markAllAsTouched();
            }
            else {
                this.user_id = this.loginuserId;
                this.service.userqnspost(this.collegeId, this.courselevel, this.course, this.user_id, this.studentForum.value.studentque).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.showAlert('Success', 'Question has been submitted. We will get back to you soon!');
                    this.studentForum.reset();
                }));
            }
        });
    }
    admissionproces() {
        this.service.getAdmissionprosess(this.collegeId).subscribe(res => {
            this.prosesarray = res.AdmissionProcess;
            this.admissionQarray = res.Commonaly_Asked_Questions;
            this.examinfoarray = res.Examnotification_or_ImportantDates;
        });
    }
    placementcat() {
        this.service.getplacecategory(this.collegeId).subscribe((res) => {
            this.PlaceCategoryArr = res.response_data;
            console.log('Place Category Array:', this.PlaceCategoryArr);
            if (this.PlaceCategoryArr && this.PlaceCategoryArr.length > 0) {
                // Set the first item's ID to the course_category field
                const firstCategoryId = this.PlaceCategoryArr[0].id;
                this.placementForm.patchValue({
                    course_category: firstCategoryId,
                });
                console.log('First Category Name:', this.PlaceCategoryArr[0].name);
                console.log('First Category ID:', firstCategoryId);
                // Call the year function with the first category ID
                this.placemtyear(firstCategoryId);
            }
        });
    }
    placemtyear(selectedCategoryId) {
        this.service.getplacecategoryyear(this.collegeId, selectedCategoryId).subscribe((res) => {
            var _a;
            console.log('Year Response:', res);
            if (res && res.year) {
                // Map the years and update the yearsArray
                this.yearsArray = res.year.map((item) => item.year);
                console.log('Years Array:', this.yearsArray);
                if (this.yearsArray.length > 0) {
                    // Set the first year into the form
                    const firstYear = this.yearsArray[0];
                    (_a = this.placementForm.get('year')) === null || _a === void 0 ? void 0 : _a.setValue(firstYear);
                    // Call the placement function with both category and year
                    this.placement();
                }
            }
        });
    }
    placement() {
        const selectedYear = this.placementForm.value.year; // Get selected year
        const selectedCategory = this.placementForm.value.course_category; // Get selected course category
        console.log('Selected Year:', selectedYear);
        console.log('Selected Course Category:', selectedCategory);
        if (selectedYear && selectedCategory) {
            // Fetch placement data
            this.service
                .getplacement(selectedYear, selectedCategory, this.collegeId)
                .subscribe((res) => {
                this.placementarray = res.placementlist;
                console.log('Placement List:', this.placementarray);
                this.placementQarray = res.Commonaly_Asked_Questions;
                console.log('Questions:', this.placementQarray);
            });
        }
        else {
            console.warn('Please select both Year and Course Category.');
        }
    }
    getlatestnpop() {
        this.service.getlatestnpop().subscribe(res => {
            this.latenpopArr = res.latest_blogs;
            this.popularArr = res.popular_blogs;
        });
    }
    clgrankingdata() {
        this.service.getclgranking(this.collegeId).subscribe((response) => {
            if (response && response.length > 0) {
                this.rankingarray = response;
            }
            else {
                this.rankingarray = null;
            }
        });
    }
    cousesnfees() {
        this.service.getcoursfeesnfees(this.collegeId).subscribe(res => {
            this.coursefeesarray = res.courselist;
            console.log(this.coursefeesarray);
            this.coursfeeQarray = res.Commonaly_Asked_Questions;
        });
    }
    scholership() {
        this.service.getscholarship(this.collegeId).subscribe(res => {
            this.scholershiparray = res.scholarship_data;
            this.scholershipQarray = res.Commonaly_Asked_Questions;
        });
    }
    FAqs() {
        this.service.getFaqs(this.collegeId).subscribe(res => {
            this.faqsarray = res.FAQs;
        });
    }
    notifications() {
        this.service.getnotification(this.collegeId).subscribe(res => {
            this.notificationarry = res.response_data;
        });
    }
    contactdetail() {
        this.service.contactdetails(this.collegeId).subscribe(res => {
            this.detailsarry = res.ContactDetails;
        });
    }
    review() {
        this.service.getclgreview(this.collegeId).subscribe(res => {
            var _a;
            this.reviewsArry = res.data;
            console.log(this.reviewsArry);
            this.reviewsArr = res.data.reviews;
            this.overallrating = res.data.reviews.totalRateCount;
            this.totalRateCount = res.data.totalRateCount;
            this.totalReview = ((_a = res.data.reviews) === null || _a === void 0 ? void 0 : _a.length) || 0;
            this.totalPlacementRateCount = res.data.totalPlacementRateCount;
            this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
            this.totalFacultyRateCount = res.data.totalFacultyRateCount;
            this.totalHostelRateCount = res.data.totalHostelRateCount;
            this.totalCampusRateCount = res.data.totalCampusRateCount;
            this.totalMoneyRateCount = res.data.totalMoneyRateCount;
            this.one2twoRate = res.data.one2twoRate;
            this.two2threeRate = res.data.two2threeRate;
            this.three2fourRate = res.data.three2fourRate;
            this.four2fiveRate = res.data.four2fiveRate;
        });
    }
    Articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
    compclg(collegeId) {
        this.router.navigate(['/clgcompare', collegeId]);
    }
    predictadmission(id, CatId, subCatName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    presentSignInModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    brochure(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            // alert(collegeId)
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
    brochuresuit(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            // alert(collegeId)
            try {
                // this.collegeId = collegeId;
                this.userId = this.loginuserId;
                const res = yield this.service.getbrochure(collegeId, this.userId).toPromise();
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header,
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    clgpredict(id, CatId, subCatName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            else {
                yield this.predictadmission(id, CatId, subCatName);
            }
        });
    }
    addmissiondatepdf(sub_category) {
        this.service.addmisiondatepdf(this.collegeId, sub_category).subscribe(res => {
            this.viewPDF = res;
            window.open(this.viewPDF.PDF, '_blank');
        });
    }
    // shareOnWhatsApp(collegeId): void {
    //   const shareText = `Check out this event: ${'https://ohcampus.com/'}${window.location.pathname}`;
    //   const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent
    //     ('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;
    //   window.open(whatsappUrl, '_blank');
    // }
    shareOnWhatsApp(collegeId) {
        const shareLink = `http://api.ohcampus.com?id=${collegeId}&type=college`;
        this.iab.create(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareLink)}`, '_system');
    }
    shareOnFacebook(collegeId) {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;
        this.iab.create(url, '_blank');
    }
    shareOnTwitter(collegeId) {
        const shareText = `Check out this exam: ${'https://ohcampus.com/'}${window.location.pathname}`;
        // const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareText)}`;
        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;
        this.iab.create(url, '_blank');
    }
    shareOnLinkedin(collegeId) {
        const shareText = `Check out this exam: ${'https://ohcampus.com/'}${window.location.pathname}`;
        const url = `https://www.linkedin.com/send?text=$
    {encodeURIComponent('http://api.ohcampus.com?id=' + collegeId + '&type=college')}`;
        this.iab.create(url, '_blank');
    }
    getCollegeAdmissionProcess() {
        let selctpara = {
            "collegeId": this.collegeId
        };
        this.service.getCollegeAdmissionProcess(selctpara).subscribe(res => {
        });
    }
    getCollegeFacilitiesByID() {
        let selctpara = {
            "collegeId": this.collegeId
        };
        this.service.getCollegeFacilitiesByID(selctpara).subscribe(res => {
            this.facility_titles = res.CollegeFac.facility_titles;
            console.log(this.facility_titles);
        });
    }
};
ClgdetailsPage.ctorParameters = () => [
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__.SocialSharing },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__.ShortlistService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef }
];
ClgdetailsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, { static: false },] }]
};
ClgdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-clgdetails',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_clgdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clgdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClgdetailsPage);



/***/ }),

/***/ 93808:
/*!**********************************************************!*\
  !*** ./src/app/pages/clgdetails/compare/compare.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparePage": () => (/* binding */ ComparePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_compare_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./compare.page.html */ 40110);
/* harmony import */ var _compare_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare.page.scss */ 80250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);








let ComparePage = class ComparePage {
    constructor(router, service, activatedRoute, formBuilder, loadingController, modalController, alertController) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.alertController = alertController;
        this.slideOptspage = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.selectedSegment = 'Latest';
        this.coursesArray = [];
        this.selectedCourseName = null;
    }
    ngOnInit() {
        this.getResponseDataFromLocalStorage();
        this.selectedCourseName = localStorage.getItem('selectedCourseName');
        if (this.selectedCourseName) {
        }
        else {
        }
        // Get collegeid from route parameters
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params.collegeid;
            this.getclgdetail();
            this.getlatestnpop();
            const coursedata = localStorage.getItem('courses');
            this.coursesArray = JSON.parse(coursedata);
            this.categoryid = this.coursesArray[0].parent_category;
            this.clglistforcompr();
        });
    }
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
            }
            else {
                console.log('No user data found in response_data.');
            }
        }
        else {
            console.log('No response_data found in local storage.');
        }
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
    getclgdetail() {
        this.service.getclgdetails(this.collegeId).subscribe(res => {
            this.clgdetailArry = res.college_detail;
            this.clglogo = res.college_detail[0].logo;
            this.collegename = res.college_detail[0].title;
            this.cityname = res.college_detail[0].city;
            this.clgtotlrating = res.college_detail[0].Rating.totalRateCount;
            this.collegename = res.college_detail[0].title;
            this.currentYear = (new Date()).getFullYear();
            this.whatnew = res.college_detail[0].what_new;
            this.tableOfContent = res.table_of_content;
            this.clghightlight = res.college_detail[0].CollegeHighlight;
            this.clgimgArry = res.college_images;
            this.cityidArry = res.college_detail[0].cityid;
            this.categories = res.college_detail[0].categoryId;
        });
    }
    clglistforcompr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
            yield loading.present(); // Display the loader
            this.service.clglistforcompr(this.categoryid).subscribe(res => {
                this.clglistforcomp = res.CollegeListForCompare;
                this.secclglogo = res.CollegeListForCompare[0].logo;
                this.secclgname = res.CollegeListForCompare[0].title;
                this.collegeId2 = res.CollegeListForCompare[0].id;
                loading.dismiss(); // Dismiss the loader once data is fetched
            }, error => {
                console.error('Error fetching college list for comparison:', error);
                loading.dismiss(); // Dismiss the loader in case of an error
            });
        });
    }
    getlatestnpop() {
        this.service.getlatestnpop().subscribe(res => {
            this.latenpopArr = res.latest_blogs;
            this.popularArr = res.popular_blogs;
        });
    }
    compclg(collegeId) {
        this.router.navigate(['/clgcompare', collegeId]);
    }
    twoclgcompar(collegeId, collegeId2) {
        this.router.navigate(['/clgcompare', collegeId, collegeId2]);
    }
    popularclg() {
        this.service.getpopularclg(this.cityidArry).subscribe(res => {
            // console.log(res);
            this.popularclgarry = res.popularColleges;
            // console.log(this.popularclgarry);
        });
    }
    suitedclg() {
        this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
            // console.log(res);
            this.suitclgarry = res.bestSuitedColleges;
            // console.log(this.suitclgarry);
        });
    }
};
ComparePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
ComparePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-compare',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_compare_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_compare_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComparePage);



/***/ }),

/***/ 54525:
/*!******************************************************************!*\
  !*** ./src/app/pages/clgdetails/coursesfees/coursesfees.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesfeesPage": () => (/* binding */ CoursesfeesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coursesfees_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coursesfees.page.html */ 25744);
/* harmony import */ var _coursesfees_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursesfees.page.scss */ 86359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);
var CoursesfeesPage_1;










let CoursesfeesPage = CoursesfeesPage_1 = class CoursesfeesPage {
    constructor(router, service, activatedRoute, loadingController, platform, modalController, alertController) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.courseClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.slidepic = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.activeSegment = 'tabsA'; // Default active segment
        this.showCourseInfoTab = false;
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        this.segmentStud = 'tabs1';
        this.selectedSegment = 'Latest';
        this.filtersegment = 'tabsA';
        this.slideOpts1 = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.slideOptspage = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        // programmeQarray: any[]=[];
        this.clgimgArry = [];
        this.notificationarry = [];
        this.loginuserId = null;
        this.isBookmarked = false;
        this.shortlistedColleges = new Set();
    }
    // ngOnInit() {
    //   localStorage.setItem('selectedCourseIdB', '');
    //           this.course_categoryvalue=localStorage.getItem('course_category')
    //           alert('Course Category'+this.course_categoryvalue);
    //   this.crsubcategory = localStorage.getItem('selectedCourseId');
    //   console.log(this.crsubcategory);
    //   this.getResponseDataFromLocalStorage();
    //       this.categoryId=  this.categoryId = localStorage.getItem('catID')?.replace(/"/g, '');
    //   console.log('Selected Course ID:', this.crsubcategory);
    //   const user = JSON.parse(localStorage.getItem('user'));
    //   if (user) {
    //     console.log('User information:', user);
    //     this.loginuserId = user.id;
    //     console.log(this.loginuserId);
    //   } else {
    //     console.log('No user information found in local storage.');
    //   }
    //   this.activatedRoute.params.subscribe(params => {
    //     this.collegeId = params.collegeid;
    //     this.getclgdetail();
    //     this.notifications();
    //     this.getlatestnpop();
    //     this.subcatlts();
    //     this.courselevel();
    //     this.dataofclg();
    //     this.examAccepted();
    //     this.courseinfo();
    //   });
    // }
    ngOnInit() {
        localStorage.setItem('selectedCourseIdB', '');
        // Get course_category first
        this.course_categoryvalue = localStorage.getItem('course_category');
        console.log('Course Category:', this.course_categoryvalue);
        // Get selected course
        this.crsubcategory = localStorage.getItem('selectedCourseId');
        console.log('Selected Course ID:', this.crsubcategory);
        // Get catID
        let catIdFromStorage = localStorage.getItem('catID');
        if (this.course_categoryvalue === null || this.course_categoryvalue === '') {
            this.categoryId = catIdFromStorage.replace(/"/g, '');
        }
        else {
            this.categoryId = this.course_categoryvalue;
        }
        // if (catIdFromStorage && catIdFromStorage !== '') {
        //   // If catID exists → use it
        //   this.categoryId = catIdFromStorage.replace(/"/g, '');
        // } else {
        //   // If catID NOT found → use course_category
        //   this.categoryId = this.course_categoryvalue;
        // }
        console.log('Final Category ID:', this.categoryId);
        // alert('Final Category ID: ' + this.categoryId);
        // User info
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.loginuserId = user.id;
            console.log('User ID:', this.loginuserId);
        }
        else {
            console.log('No user information found in local storage.');
        }
        // Route params
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params.collegeid;
            this.getclgdetail();
            this.notifications();
            this.getlatestnpop();
            this.subcatlts();
            this.courselevel();
            this.dataofclg();
            this.examAccepted();
            this.courseinfo();
        });
    }
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
            }
            else {
                console.log('No user data found in response_data.');
            }
        }
        else {
            console.log('No response_data found in local storage.');
        }
    }
    articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
    ngAfterViewInit() {
    }
    onCourseClicked(courseid, tabName) {
        // alert('course id'+courseid);
        this.segment = tabName;
        localStorage.setItem('selectedCourseIdB', courseid);
        this.segment = tabName;
        this.courseClicked.emit(tabName);
        this.TabselectedIndex = 11; // Set the selected index for the "Course Info" tab
        console.log('Selected Tab:', tabName, 'Selected Index:', this.selectedIndex);
    }
    courseinfo() {
        this.service.getotherprogrmes(this.collegeId, this.crsubcategory).subscribe(res => {
            // console.log(res);
            this.selectedclgArr = res.popular_programmes;
            console.log(this.selectedclgArr);
            ;
        });
    }
    clgdetls(collegeid) {
        this.router.navigate(['/clgdetails', collegeid]);
    }
    studentSay(ev) {
        this.segmentStud = ev.detail.value;
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    filterTabs(ev) {
        this.filtersegment = ev.detail.value;
    }
    feesbaseclg() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // alert('college type id'+this.collegeTypeId);
            console.log(this.collegeTypeId);
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
            this.service.getcoursiformation(this.collegeId, this.crsubcategory, this.collegeTypeId, this.categoryId).subscribe(res => {
                this.feesbclgarray = res.courses_list;
                loading.dismiss(); // Dismiss the loader after data is fetched
            }, error => {
                console.error('Error fetching fees-based colleges:', error);
                loading.dismiss(); // Dismiss the loader in case of an error
            });
        });
    }
    otherclgincity() {
        this.cityId = this.cityId;
        this.service.getcityotherclg(this.cityId, this.collegeId, this.crsubcategory).subscribe(res => {
            console.log(res);
            this.cityotherclg = res.courses_list;
            console.log(this.cityotherclg);
        });
    }
    notifications() {
        this.service.getnotification(this.collegeId).subscribe(res => {
            // console.log(res);
            this.notificationarry = res.response_data;
            // console.log(this.notificationarry);
        });
    }
    getlatestnpop() {
        this.service.getlatestnpop().subscribe(res => {
            // console.log(res);
            this.latenpopArr = res.latest_blogs;
            this.popularArr = res.popular_blogs;
        });
    }
    getclgdetail() {
        this.service.getclgdetails(this.collegeId).subscribe(res => {
            // console.log(res);
            this.clgdetailArry = res.college_detail;
            console.log(this.clgdetailArry);
            this.collegename = res.college_detail[0].title;
            this.clgimgArry = res.college_images;
            this.cityId = res.college_detail[0].cityid;
            this.collegeTypeId = res.college_detail[0].Collage_category;
            this.feesbaseclg();
            console.log(this.collegeTypeId);
            this.otherclgincity();
            this.cityname = res.college_detail[0].city;
        });
    }
    subcatlts() {
        this.service.getsubcatlist(this.collegeId).subscribe(res => {
            // console.log(res);
            this.subcatltsArr = res.SubCategory;
        });
    }
    courselevel() {
        this.service.getcourselevel(this.collegeId).subscribe(res => {
            // console.log(res);
            this.courselevelArr = res.SubCategory;
        });
    }
    dataofclg() {
        this.service.getFeesDataOfCollege(this.collegeId).subscribe(res => {
            // console.log(res);
            this.dataofclgArr = res.fees_list;
        });
    }
    examAccepted() {
        this.service.getExamAccepted(this.collegeId).subscribe(res => {
            // console.log(res);
            this.examAcceptedArr = res.SubCategory;
        });
    }
    openModal(modalId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let modal;
            switch (modalId) {
                case 'filter-modal':
                    modal = yield this.modalController.create({
                        component: CoursesfeesPage_1, // replace with your filter modal component
                        // Add any necessary data to pass to the modal here
                    });
                    break;
                case 'course-modal':
                    modal = yield this.modalController.create({
                        component: CoursesfeesPage_1, // replace with your course modal component
                        // Add any necessary data to pass to the modal here
                    });
                    break;
                // Add other cases for additional modals
                default:
                    break;
            }
            return yield modal.present();
        });
    }
    compclg(collegeId) {
        this.router.navigate(['/clgcompare', collegeId]);
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
        // Toggle the state of the icon
        this.isBookmarked = !this.isBookmarked;
        // Your logic to handle the click event, such as calling addclgshortlist
        // this.addclgshortlist();
    }
    addclgshortlist(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            try {
                this.collegeId = collegeId;
                this.userId = this.loginuserId;
                this.active = '1';
                this.event = 'insert';
                const res = yield this.service.addclgshortlist(this.userId, this.collegeId, this.active, this.event).toPromise();
                if (res.response_code === '200') {
                    this.shortlistedColleges.add(collegeId);
                    this.isBookmarked = true; // Mark as bookmarked
                    yield this.Alert('Success', 'College added to shortlist successfully');
                }
                else if (res.response_code === '100') {
                    yield this.Alert('', 'College already added to shortlist');
                }
                else {
                    yield this.Alert('Error', 'An unexpected error occurred');
                }
            }
            catch (error) {
                yield this.Alert('', 'An unexpected error occurred');
            }
        });
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
            // Check if token exists in local storage
            // this.token = localStorage.getItem('token');
            if (!this.loginuserId) {
                // Token is not present, so present sign-in modal
                this.presentSignInModal();
                return; // Exit function if token is missing
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
    ionViewWillLeave() {
        localStorage.removeItem('course_category');
    }
};
CoursesfeesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
CoursesfeesPage.propDecorators = {
    courseClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
CoursesfeesPage = CoursesfeesPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-coursesfees',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coursesfees_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_coursesfees_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoursesfeesPage);



/***/ }),

/***/ 65665:
/*!**************************************************************!*\
  !*** ./src/app/pages/clgdetails/coursinfo/coursinfo.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursinfoPage": () => (/* binding */ CoursinfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coursinfo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coursinfo.page.html */ 17647);
/* harmony import */ var _coursinfo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursinfo.page.scss */ 1669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 33927);













let CoursinfoPage = class CoursinfoPage {
    constructor(router, service, activatedRoute, loadingController, platform, modalController, alertController, formBuilder) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
        this.slideOptspage = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.slidepic = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.selectedSegment = 'Latest';
        this.loginuserId = null;
        this.isBookmarked = false;
        this.shortlistedColleges = new Set();
        this.courseinfoArr = [];
        this.courseexamArry = [];
        this.commanlyaskedqaeArr = [];
        this.qunanswer = [];
        this.popprogrmmArry = [];
        this.clgimgArry = [];
        this.CourseCategoryArr = [];
        this.examListArr = [];
        this.CoursesByCatArr = [];
        this.sameclgArry = [];
        this.entranceExamControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
    }
    ngOnInit() {
        this.aplicationForm = this.formBuilder.group({
            student_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z \'-]+$')]],
            mobile_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]{10}$')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            college: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            entrence_exam: ['',],
            rank: ['',],
            score: ['',]
        });
        this.studentForum = this.formBuilder.group({
            studentque: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
        this.coursesArray = JSON.parse(localStorage.getItem('courses'));
        this.courseId = this.coursesArray[0].id;
        this.crsubcategory = localStorage.getItem('selectedCourseIdB');
        //  alert(this.crsubcategory);
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params.collegeid;
            console.log(this.collegeId);
            this.getcourseinfo();
            this.coursesAdmissionProcess();
            this.entranceExamsForCourse();
            this.coursesfeesstucture();
            this.getCollegeProgrammesByID();
            this.clgbylocation();
            this.getclgdetail();
            this.getlatestnpop();
            this.getcourscategory();
            this.setupAutocomplete();
            this.getexamlist();
            this.getCourseByCategoryClg();
            this.populateUserData();
        });
    }
    populateUserData() {
        this.simpleuserdata();
        this.getResponseDataFromLocalStorage();
        // Populate form fields if user data exists
        if (this.loginuserId) {
            this.aplicationForm.patchValue({
                student_name: this.username,
                email: this.email,
                mobile_no: this.phone,
            });
        }
    }
    simpleuserdata() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            console.log('User information:', user);
            this.loginuserId = user.id;
            this.email = user.email; // Correctly assign the email
            this.username = user.name; // Correctly assign the username
            this.phone = user.phone; // Assuming the phone is stored in user object
        }
        else {
            console.log('No user information found in local storage.');
        }
    }
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
            }
            else {
                console.log('No user data found in response_data.');
            }
        }
        else {
            console.log('No response_data found in local storage.');
        }
    }
    openModal(modalId) {
        const modal = document.getElementById(modalId);
    }
    savCourseApplication() {
        if (this.aplicationForm.invalid) {
            this.aplicationForm.markAllAsTouched();
            return;
        }
        if (this.aplicationForm.valid) {
            this.service.saveapplication(this.aplicationForm.controls.student_name.value, this.aplicationForm.controls.email.value, this.aplicationForm.controls.mobile_no.value, this.aplicationForm.controls.category.value, this.aplicationForm.controls.college.value, this.aplicationForm.controls.course.value, this.aplicationForm.controls.entrence_exam.value, this.aplicationForm.controls.rank.value, this.aplicationForm.controls.score.value).subscribe(res => {
                this.showAlert('Submitted !', 'Thanks for submitting the details.Our counsellor will contact you shortly to provide details.');
                this.aplicationForm.reset();
                this.close();
            });
        }
    }
    cancel() {
        this.modal.dismiss('/tabM');
        this.modalController.dismiss({
            dismissed: true,
        }).then(() => {
            // this.resetSelections();
        });
    }
    numberOnly(event) {
        console.log(event.target.value);
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    exmdetail(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/coursewiseexamdetails', id]);
        });
    }
    getcourscategory() {
        this.service.getCoursescategory().subscribe(res => {
            console.log(res);
            this.CourseCategoryArr = res.data;
        });
    }
    //   getexamlist(){
    //     this.service.getexamlist('').subscribe(res => {
    //       console.log(res);
    //       this.examListArr = res.response_data;
    //     });
    // }
    getexamlist() {
        this.service.getexamlist('').subscribe(res => {
            this.examListArr = res.response_data;
            console.log(this.examListArr);
        });
    }
    setupAutocomplete() {
        this.filteredExams = this.entranceExamControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(value => this.filterExams(value)));
        this.entranceExamControl.valueChanges.subscribe(value => {
            this.aplicationForm.patchValue({ entrence_exam: value });
        });
    }
    filterExams(searchTerm) {
        if (!searchTerm) {
            return this.examListArr;
        }
        return this.examListArr.filter(exam => exam.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    getCourseByCategoryClg() {
        this.service.getcourcatogorybyclg(this.aplicationForm.value.category, this.collegeId).subscribe(res => {
            this.courseLoader = false;
            this.CoursesByCatArr = res.data;
        });
    }
    articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
    getlatestnpop() {
        this.service.getlatestnpop().subscribe(res => {
            console.log(res);
            this.latenpopArr = res.latest_blogs;
            this.popularArr = res.popular_blogs;
        });
    }
    postQuestion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            if (this.studentForum.controls['studentque'].invalid) {
                this.studentForum.markAllAsTouched();
            }
            else {
                this.user_id = this.loginuserId;
                this.service.userqnspost(this.collegeId, this.courselevel, this.course, this.user_id, this.studentForum.value.studentque).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.showAlert('Success', 'Question has been submitted. We will get back to you soon!');
                    this.studentForum.reset();
                }));
            }
        });
    }
    clgbylocation() {
        //  this.cityid =this.cityId;
        this.service.clgbylocation(this.cityid).subscribe(res => {
            console.log(res);
            this.popularclgarry = res.popularColleges;
            console.log(this.popularclgarry);
        });
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    getclgdetail() {
        this.service.getclgdetails(this.collegeId).subscribe(res => {
            console.log(res);
            this.clgdetailArry = res.college_detail;
            console.log(this.clgdetailArry);
            this.collegename = res.college_detail[0].title;
            this.clgimgArry = res.college_images;
            this.clgcategory = res.college_detail[0].Collage_category;
            this.cityid = res.college_detail[0].cityid; // Bind cityid here
            this.clgofferingsamesity();
            this.cityname = res.college_detail[0].city;
            this.categories = res.college_detail[0].categoryId;
            console.log(this.categories);
        });
    }
    compclg(collegeId) {
        this.router.navigate(['/clgcompare', collegeId]);
    }
    clgdetls(collegeid) {
        this.router.navigate(['/clgdetails', collegeid]);
    }
    getcourseinfo() {
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
            yield loading.present(); // Show the loader
            this.courseid = this.crsubcategory;
            this.service.getcoursesinfo(this.courseid, this.collegeId).subscribe(res => {
                if (res.response_code === "200") {
                    loading.dismiss();
                    // Data is available
                    this.courseinfoArr = res.courseinfo;
                    this.coursename = res.courseinfo[0].name;
                    this.corsesfessarr = res.coursefees;
                    this.eligibilityArr = res.eligibility;
                    console.log(this.eligibilityArr);
                }
                else if (res.response_code === "400") {
                    console.error('Error: Data not found or invalid request');
                }
                else {
                    console.error('Unexpected response code:', res.response_code);
                }
                // Dismiss the loader after processing
            }, error => {
                console.error('Error fetching course info:', error);
                // Dismiss the loader in case of an error
                loading.dismiss();
            });
        });
    }
    coursesfeesstucture() {
        this.service.getCoursesFeeStructure(this.courseid, this.collegeId).subscribe(res => {
            console.log(res);
            this.crsfeesstuctreArry = res.coursefees;
        });
    }
    coursesAdmissionProcess() {
        this.service.getCoursesAdmissionProcess(this.courseid, this.collegeId).subscribe(res => {
            console.log(res);
            this.admisionprocesArry = res.coursefees;
            this.commanlyaskedqaeArr = res.Commonaly_Asked_Questions;
        });
    }
    entranceExamsForCourse() {
        this.courseid = this.crsubcategory;
        this.service.getEntranceExamsForCourse(this.courseid, this.collegeId).subscribe(res => {
            console.log(res);
            this.courseexamArry = res.EntranceExams;
        });
    }
    clgofferingsamesity() {
        this.courseid = this.crsubcategory;
        this.service.clgofferingsamecity(this.courseid, this.cityid, this.collegeId).subscribe(res => {
            console.log(res);
            this.sameclgArry = res.colleges_Offereing_SameCourse;
            //  console.log(this.sameclgArry);
        });
    }
    getCollegeProgrammesByID() {
        let collegeTypeId = this.clgcategory;
        this.service.getpopprogrammes(this.collegeId, this.subcategory, collegeTypeId).subscribe(res => {
            // console.log(res);
            this.popprogrmmArry = res.popular_programmes;
            // console.log(this.popprogrmmArry);
            this.qunanswer = res.Commonaly_Asked_Questions;
        });
    }
    toggleIconColor(collegeId) {
        // Toggle the state of the icon
        this.isBookmarked = !this.isBookmarked;
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
    addclgshortlist(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            try {
                this.collegeId = collegeId;
                this.userId = this.loginuserId;
                this.active = '1';
                this.event = 'insert';
                const res = yield this.service.addclgshortlist(this.userId, this.collegeId, this.active, this.event).toPromise();
                if (res.response_code === '200') {
                    this.shortlistedColleges.add(collegeId);
                    this.isBookmarked = true; // Mark as bookmarked
                    yield this.Alert('Success', 'College added to shortlist successfully');
                }
                else if (res.response_code === '100') {
                    yield this.Alert('', 'College already added to shortlist');
                }
                else {
                    yield this.Alert('Error', 'An unexpected error occurred');
                }
            }
            catch (error) {
                yield this.Alert('', 'An unexpected error occurred');
            }
        });
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
                // Token is not present, so present sign-in modal
                this.presentSignInModal();
                return; // Exit function if token is missing
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
    // Additional input validation for other fields
    checkValidInputDat(event, field) {
        if (field === 'student_name') {
            const pattern = /^[a-zA-Z \'-]*$/;
            if (!pattern.test(event.target.value)) {
                event.target.value = event.target.value.replace(/[^a-zA-Z \'-]/g, '');
            }
        }
        else if (field === 'mobile_no') {
            const pattern = /^[0-9]*$/;
            if (!pattern.test(event.target.value)) {
                event.target.value = event.target.value.replace(/[^0-9]/g, '');
            }
            // Limit to 10 digits
            if (event.target.value.length > 10) {
                event.target.value = event.target.value.slice(0, 10);
            }
        }
    }
};
CoursinfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder }
];
CoursinfoPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal,] }]
};
CoursinfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-coursinfo',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coursinfo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_coursinfo_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoursinfoPage);



/***/ }),

/***/ 7019:
/*!**********************************************************!*\
  !*** ./src/app/pages/clgdetails/cutoffs/cutoffs.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CutoffsPage": () => (/* binding */ CutoffsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cutoffs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cutoffs.page.html */ 24471);
/* harmony import */ var _cutoffs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cutoffs.page.scss */ 80057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shortlist.service */ 17098);











let CutoffsPage = class CutoffsPage {
    constructor(router, service, activatedRoute, loadingController, platform, modalController, alertController, shortlistService) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.shortlistService = shortlistService;
        this.slideOpts1 = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.slideOptspage = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.slideOptsnew = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.slideOptssuited = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.segmentStud = 'tabs1';
        this.selectedSegment = 'Latest';
        this.filtersegment = 'tabsA';
        this.totalRateCount = 0;
        // selectedSegment = 'Latest';
        // public segmentStud = 'tabs1';
        this.segmentStudClgLife = 'tabsseg1';
        this.blogsArry = [];
        this.notificationarry = [];
        // totalRateCount: any;
        this.reviewsArry = [];
        this.reviewsArr = [];
        this.tableOfContent = [];
        this.clghightlight = [];
        this.isBookmarked = false;
        this.shortlistedColleges = new Set();
        this.reviewsssArr = [];
        this.kcetarry = [];
        this.komedearry = [];
        this.selectedCourseName = null;
        this.isThumbsUpClicked = false; // Initially not clicked
        this.isThumbsDownClicked = false; // Initially not clicked
    }
    ngOnInit() {
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
        this.selectedCourseName = localStorage.getItem('selectedCourseName');
        if (this.selectedCourseName) {
            console.log('Selected Course Name exists:', this.selectedCourseName);
        }
        else {
            console.log('Selected Course Name is null or undefined.');
        }
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params.collegeid;
            this.getclgdetail();
            this.notifications();
            this.blogs();
            this.reviews();
            this.getlatestnpop();
            this.kcetcutoff();
            this.komedecutoff();
            this.coursesArray = JSON.parse(localStorage.getItem('courses'));
            // console.log(this.coursesArray);
            this.courseId = this.coursesArray[0].id;
        });
    }
    brochuresuit(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            // alert(collegeId)
            try {
                // this.collegeId = collegeId;
                this.userId = this.loginuserId;
                const res = yield this.service.getbrochure(collegeId, this.userId).toPromise();
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
    kcetcutoff() {
        this.college_id = this.collegeId;
        this.service.kcetcutoff(this.college_id).subscribe(res => {
            this.kcetarry = res.CoutOffRoundWise;
            console.log(this.kcetarry);
            // Assigning the round data
            this.round1 = res.CoutOffRoundWise.round1;
            this.round2 = res.CoutOffRoundWise.round2;
            this.round3 = res.CoutOffRoundWise.round3;
            console.log('Round 1:', this.comedround1);
        });
    }
    hasRoundData() {
        return (this.round1 && this.round1.length > 0) ||
            (this.round2 && this.round2.length > 0) ||
            (this.round3 && this.round3.length > 0);
    }
    komedecutoff() {
        this.college_id = this.collegeId;
        this.service.komedecutoff(this.college_id).subscribe(res => {
            this.komedearry = res.CoutOffRoundWise;
            console.log(this.kcetarry);
            // Assigning the round data
            this.comedround1 = res.CoutOffRoundWise.round1;
            this.comedround2 = res.CoutOffRoundWise.round2;
        });
    }
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
            }
            else {
                console.log('No user data found in response_data.');
            }
        }
        else {
            console.log('No response_data found in local storage.');
        }
    }
    voteReview(reviewId, userId, ishelpful) {
        console.log(this.value);
        this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
            console.log(res);
        });
    }
    articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
    studentSay(ev) {
        this.segmentStud = ev.detail.value;
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    filterTabs(ev) {
        this.filtersegment = ev.detail.value;
    }
    getclgdetail() {
        this.service.getclgdetails(this.collegeId).subscribe(res => {
            // console.log(res);
            this.clgdetailArry = res.college_detail;
            this.collegename = res.college_detail[0].title;
            this.collegename = res.college_detail[0].title;
            this.currentYear = (new Date()).getFullYear();
            this.description = res.college_detail[0].description;
            this.whatnew = res.college_detail[0].what_new;
            this.tableOfContent = res.table_of_content;
            this.clghightlight = res.college_detail[0].CollegeHighlight;
            this.clgimgArry = res.college_images;
            // console.log(this.clgimgArry);
            this.cityidArry = res.college_detail[0].cityid;
            this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
            this.popularclg();
            this.categories = res.college_detail[0].categoryid;
            // console.log(this.categories);
            this.suitedclg();
        });
    }
    popularclg() {
        this.service.clgpopular(this.courseid).subscribe(res => {
            this.popularclgarry = res.response_data;
        });
    }
    suitedclg() {
        this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
            console.log(res);
            this.suitclgarry = res.bestSuitedColleges;
            console.log(this.suitclgarry);
        });
    }
    notifications() {
        this.service.getnotification(this.collegeId).subscribe(res => {
            // console.log(res);
            this.notificationarry = res.response_data;
            // console.log(this.notificationarry);
        });
    }
    blogs() {
        this.service.latestblog(this.collegeId).subscribe(res => {
            this.blogsArry = res.latest_blogs;
        });
    }
    reviews() {
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
            yield loading.present(); // Display the loader
            this.service.reviewDetails(this.collegeId).subscribe(res => {
                var _a, _b, _c;
                if (res && res.data) {
                    this.reviewsArry = res.data;
                    this.reviewsArr = res.data.reviews;
                    this.placement = ((_a = res.data.reviews[0]) === null || _a === void 0 ? void 0 : _a.placement_desc) || 'No description available';
                    this.infra = ((_b = res.data.reviews[0]) === null || _b === void 0 ? void 0 : _b.infrastructure_desc) || 'No description available';
                    this.faculty = ((_c = res.data.reviews[0]) === null || _c === void 0 ? void 0 : _c.faculty_desc) || 'No description available';
                    this.totalRateCount = res.data.totalRateCount;
                    this.totalPlacementRateCount = res.data.totalPlacementRateCount;
                    this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
                    this.totalFacultyRateCount = res.data.totalFacultyRateCount;
                    this.totalHostelRateCount = res.data.totalHostelRateCount;
                    this.totalCampusRateCount = res.data.totalCampusRateCount;
                    this.totalMoneyRateCount = res.data.totalMoneyRateCount;
                    this.one2twoRate = res.data.one2twoRate;
                    this.two2threeRate = res.data.two2threeRate;
                    this.three2fourRate = res.data.three2fourRate;
                    this.four2fiveRate = res.data.four2fiveRate;
                    this.totalReview = res.data.totalReview;
                    this.reviewsssArr = res.data.reviews;
                }
                else {
                }
                loading.dismiss(); // Dismiss the loader after data is fetched or if empty
            }, error => {
                console.error('Error fetching reviews:', error);
                // this.showErrorToast('Failed to load reviews. Please try again later.');
                loading.dismiss(); // Dismiss the loader in case of an error
            });
        });
    }
    getStarArray() {
        const filledStars = Math.floor(this.totalRateCount); // Number of filled stars
        const hasHalfStar = this.totalRateCount - filledStars >= 0.5; // Check for half star
        const starArray = [];
        // Fill array with appropriate star names
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                starArray.push('star');
            }
            else if (i === filledStars && hasHalfStar) {
                starArray.push('star-half');
            }
            else {
                starArray.push('star-outline');
            }
        }
        return starArray;
    }
    getlatestnpop() {
        this.service.getlatestnpop().subscribe(res => {
            // console.log(res);
            this.latenpopArr = res.latest_blogs;
            this.popularArr = res.popular_blogs;
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
            // Check if token exists in local storage
            // this.token = localStorage.getItem('token');
            if (!this.loginuserId) {
                // Token is not present, so present sign-in modal
                this.presentSignInModal();
                return; // Exit function if token is missing
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
CutoffsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__.ShortlistService }
];
CutoffsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cutoffs',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cutoffs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cutoffs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CutoffsPage);



/***/ }),

/***/ 62737:
/*!************************************************************************!*\
  !*** ./src/app/pages/clgdetails/infrastructure/infrastructure.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfrastructurePage": () => (/* binding */ InfrastructurePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_infrastructure_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./infrastructure.page.html */ 33975);
/* harmony import */ var _infrastructure_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infrastructure.page.scss */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shortlist.service */ 17098);








let InfrastructurePage = class InfrastructurePage {
    constructor(router, service, activatedRoute, loadingController, modalController, alertController, shortlistService) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.alertController = alertController;
        this.shortlistService = shortlistService;
        this.slideOpts1 = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.slideOptspage = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.slideOptsnew = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.segmentStud = 'tabs1';
        this.selectedSegment = 'Latest';
        this.filtersegment = 'tabsA';
        this.segmentStudClgLife = 'tabsseg1';
        this.clgdetailArry = [];
        this.clgimgArry = [];
        this.tableOfContent = [];
        this.clghightlight = [];
        this.reviewsssArr = [];
        this.facilitiesarr = [];
        this.isThumbsUpClicked = false; // Initially not clicked
        this.isThumbsDownClicked = false; // Initially not clicked
    }
    ngOnInit() {
        this.getResponseDataFromLocalStorage();
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params.collegeid;
            this.getclgdetail();
            this.getlatestnpop();
            this.infrarating();
        });
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
    getclgid(collegeid) {
        this.router.navigate(['/clgdetails', collegeid]);
    }
    voteReview(reviewId, userId, ishelpful) {
        this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
        });
    }
    articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
    studentSay(ev) {
        this.segmentStud = ev.detail.value;
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    filterTabs(ev) {
        this.filtersegment = ev.detail.value;
    }
    clgLife(ev) {
        this.segmentStudClgLife = ev.detail.value;
    }
    getclgdetail() {
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
            yield loading.present(); // Display the loader
            this.service.getclgdetails(this.collegeId).subscribe(res => {
                this.clgdetailArry = res.college_detail;
                this.collegename = res.college_detail[0].title;
                this.currentYear = (new Date()).getFullYear();
                this.whatnew = res.college_detail[0].what_new;
                this.tableOfContent = res.table_of_content;
                this.clghightlight = res.college_detail[0].CollegeHighlight;
                this.facilitiesarr = res.college_detail[0].facilities;
                this.clgimgArry = res.college_images;
                this.cityidArry = res.college_detail[0].cityid;
                this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
                this.categories = res.college_detail[0].categoryid;
                loading.dismiss(); // Dismiss the loader after data is fetched
            }, error => {
                console.error('Error fetching college details:', error);
                loading.dismiss(); // Dismiss the loader in case of an error
            });
        });
    }
    getlatestnpop() {
        this.service.getlatestnpop().subscribe(res => {
            // console.log(res);
            this.latenpopArr = res.latest_blogs;
            this.popularArr = res.popular_blogs;
        });
    }
    infrarating() {
        this.service.getinfrarating(this.collegeId).subscribe(res => {
            // console.log(res);
            this.infrareviewarry = res.data;
            this.infratotalrate = res.data.totalInfrastructureRate;
            this.one2twoRate = res.data.one2twoRate;
            this.two2threeRate = res.data.two2threeRate;
            this.three2fourRate = res.data.three2fourRate;
            this.four2fiveRate = res.data.four2fiveRate;
            this.reviewsArry = res.data.infraReviews;
            this.reviewsssArr = res.data.infraReviews;
            this.totalReview = res.data.totalReview;
            this.totalInfrastructureRate = res.data.totalInfrastructureRate;
        });
    }
    getStarArray() {
        const filledStars = Math.floor(this.totalInfrastructureRate); // Number of filled stars
        const hasHalfStar = this.totalInfrastructureRate - filledStars >= 0.5; // Check for half star
        const starArray = [];
        // Fill array with appropriate star names
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                starArray.push('star');
            }
            else if (i === filledStars && hasHalfStar) {
                starArray.push('star-half');
            }
            else {
                starArray.push('star-outline');
            }
        }
        return starArray;
    }
};
InfrastructurePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_3__.ShortlistService }
];
InfrastructurePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-infrastructure',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_infrastructure_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_infrastructure_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], InfrastructurePage);



/***/ }),

/***/ 4553:
/*!****************************************************!*\
  !*** ./src/app/pages/clgdetails/news/news.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsPage": () => (/* binding */ NewsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_news_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./news.page.html */ 62660);
/* harmony import */ var _news_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.page.scss */ 28313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);







let NewsPage = class NewsPage {
    constructor(router, service, activatedRoute, loadingController) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.slideOptspage = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.slidepic = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.selectedSegment = 'Latest';
        this.segmentStud = 'tabs1';
        this.segmentStudClgLife = 'tabsseg1';
        this.blogsArry = [];
        this.notificationarry = [];
        this.reviewsArry = [];
        this.reviewsArr = [];
        this.clgimgArry = [];
        this.selectedCourseName = null;
        this.isThumbsUpClicked = false; // Initially not clicked
        this.isThumbsDownClicked = false; // Initially not clicked
    }
    ngOnInit() {
        this.selectedCourseName = localStorage.getItem('selectedCourseName');
        this.getResponseDataFromLocalStorage();
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params.collegeid;
            // console.log(this.collegeId);
            this.getclgdetail();
            this.notifications();
            this.blogs();
            this.reviews();
            this.getlatestnpop();
        });
    }
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
            }
            else {
                console.log('No user data found in response_data.');
            }
        }
        else {
            console.log('No response_data found in local storage.');
        }
    }
    articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
    studentSay(ev) {
        this.segmentStud = ev.detail.value;
    }
    clgLife(ev) {
        this.segmentStudClgLife = ev.detail.value;
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    getclgdetail() {
        this.details = '';
        this.service.getclgdetails(this.collegeId).subscribe(res => {
            console.log(res);
            this.clgdetailArry = res.college_detail;
            this.collegename = res.college_detail[0].title;
            this.collegename = res.college_detail[0].title;
            this.clgimgArry = res.college_images;
            this.categories = res.college_detail[0].categoryId;
            this.suitedclg();
        });
    }
    suitedclg() {
        this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
            console.log(res);
            this.suitclgarry = res.bestSuitedColleges;
        });
    }
    notifications() {
        this.service.getnotification(this.collegeId).subscribe(res => {
            this.notificationarry = res.response_data;
        });
    }
    blogs() {
        this.service.latestblog(this.collegeId).subscribe(res => {
            this.blogsArry = res.latest_blogs;
        });
    }
    reviews() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
            yield loading.present(); // Show the loader
            this.service.reviewDetails(this.collegeId).subscribe(res => {
                var _a, _b, _c;
                // Check if data is present
                if (res && res.data && res.data.reviews) {
                    this.reviewsArry = res.data;
                    this.reviewsArr = res.data.reviews;
                    this.placement = ((_a = res.data.reviews[0]) === null || _a === void 0 ? void 0 : _a.placement_desc) || '';
                    this.infra = ((_b = res.data.reviews[0]) === null || _b === void 0 ? void 0 : _b.infrastructure_desc) || '';
                    this.faculty = ((_c = res.data.reviews[0]) === null || _c === void 0 ? void 0 : _c.faculty_desc) || '';
                    this.totalRateCount = res.data.totalRateCount || 0;
                    this.totalPlacementRateCount = res.data.totalPlacementRateCount || 0;
                    this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount || 0;
                    this.totalFacultyRateCount = res.data.totalFacultyRateCount || 0;
                    this.totalHostelRateCount = res.data.totalHostelRateCount || 0;
                    this.totalCampusRateCount = res.data.totalCampusRateCount || 0;
                    this.totalMoneyRateCount = res.data.totalMoneyRateCount || 0;
                    this.one2twoRate = res.data.one2twoRate || 0;
                    this.two2threeRate = res.data.two2threeRate || 0;
                    this.three2fourRate = res.data.three2fourRate || 0;
                    this.four2fiveRate = res.data.four2fiveRate || 0;
                }
                else {
                    console.warn('No data found for reviews.');
                }
                loading.dismiss(); // Dismiss the loader after successfully processing the data
            }, error => {
                console.error('Error fetching reviews:', error);
                loading.dismiss(); // Dismiss the loader in case of an error
            });
        });
    }
    getStarArray() {
        const filledStars = Math.floor(this.totalRateCount); // Number of filled stars
        const hasHalfStar = this.totalRateCount - filledStars >= 0.5; // Check for half star
        const starArray = [];
        // Fill array with appropriate star names
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                starArray.push('star');
            }
            else if (i === filledStars && hasHalfStar) {
                starArray.push('star-half');
            }
            else {
                starArray.push('star-outline');
            }
        }
        return starArray;
    }
    getlatestnpop() {
        this.service.getlatestnpop().subscribe(res => {
            // console.log(res);
            this.latenpopArr = res.latest_blogs;
            this.popularArr = res.popular_blogs;
        });
    }
    voteReview(reviewId, userId, ishelpful) {
        console.log(this.value);
        this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
            // console.log(res);
        });
    }
};
NewsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
NewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-news',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_news_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_news_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewsPage);



/***/ }),

/***/ 67229:
/*!****************************************************************!*\
  !*** ./src/app/pages/clgdetails/placements/placements.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacementsPage": () => (/* binding */ PlacementsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_placements_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./placements.page.html */ 37232);
/* harmony import */ var _placements_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placements.page.scss */ 20816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shortlist.service */ 17098);












let PlacementsPage = class PlacementsPage {
    constructor(router, service, activatedRoute, formBuilder, loadingController, platform, modalController, alertController, shortlistService) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.shortlistService = shortlistService;
        this.segmentStud = 'tabs1';
        this.selectedSegment = 'Latest';
        this.filtersegment = 'tabsA';
        this.segmentStudClgLife = 'tabsseg1';
        this.slideOpts1 = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.slideOptspage = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.slidepic = {
            initialSlide: 0,
            slidesPerView: 1.3,
        };
        this.slideOptsnew = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.slideOptssuited = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.isThumbsUpClicked = false; // Initially not clicked
        this.isThumbsDownClicked = false; // Initially not clicked
        this.clgdetailArry = [];
        this.clgimgArry = [];
        this.tableOfContent = [];
        this.clghightlight = [];
        this.notificationarry = [];
        this.placementdataarry = [];
        this.placereviewarry = [];
        this.placementqaarry = [];
        this.placementinfo = [];
        this.reviewsArr = [];
        this.loginuserId = null;
        this.isBookmarked = false;
        this.shortlistedColleges = new Set();
        this.selectedCourseName = null;
    }
    ngOnInit() {
        this.selectedCourseName = localStorage.getItem('selectedCourseName');
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
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params.collegeid;
            this.getclgdetail();
            this.getlatestnpop();
            this.notifications();
            this.placementdata();
            this.placereview();
        });
    }
    brochuresuit(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            // alert(collegeId)
            try {
                // this.collegeId = collegeId;
                this.userId = this.loginuserId;
                const res = yield this.service.getbrochure(collegeId, this.userId).toPromise();
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
            }
            else {
                console.log('No user data found in response_data.');
            }
        }
        else {
            console.log('No response_data found in local storage.');
        }
    }
    articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
    studentSay(ev) {
        this.segmentStud = ev.detail.value;
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    filterTabs(ev) {
        this.filtersegment = ev.detail.value;
    }
    clgLife(ev) {
        this.segmentStudClgLife = ev.detail.value;
    }
    getclgdetail() {
        this.service.getclgdetails(this.collegeId).subscribe(res => {
            console.log(res);
            this.clgdetailArry = res.college_detail;
            this.collegename = res.college_detail[0].title;
            this.currentYear = (new Date()).getFullYear();
            this.whatnew = res.college_detail[0].what_new;
            this.tableOfContent = res.table_of_content;
            this.clghightlight = res.college_detail[0].CollegeHighlight;
            this.clgimgArry = res.college_images;
            this.cityidArry = res.college_detail[0].cityid;
            this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
            this.popularclg();
            this.categories = res.college_detail[0].categoryid;
            console.log(this.categories);
            this.suitedclg();
        });
    }
    popularclg() {
        this.service.clgpopular(this.courseid).subscribe(res => {
            this.popularclgarry = res.response_data;
        });
    }
    suitedclg() {
        this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
            console.log(res);
            this.suitclgarry = res.bestSuitedColleges;
            console.log(this.suitclgarry);
        });
    }
    getlatestnpop() {
        this.details = '';
        this.service.getlatestnpop().subscribe(res => {
            // console.log(res);
            this.latenpopArr = res.latest_blogs;
            this.popularArr = res.popular_blogs;
        });
    }
    notifications() {
        this.details = '';
        this.service.getnotification(this.collegeId).subscribe(res => {
            // console.log(res);
            this.notificationarry = res.response_data;
            // console.log(this.notificationarry);
        });
    }
    placementdata() {
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
            yield loading.present(); // Display the loader
            this.service.placementdata(this.collegeId).subscribe(res => {
                this.placementdataarry = res.placementlist;
                this.placementqaarry = res.Commonaly_Asked_Question;
                loading.dismiss(); // Dismiss the loader once data is fetched
            }, error => {
                console.error('Error fetching placement data:', error);
                loading.dismiss(); // Dismiss the loader in case of an error
            });
        });
    }
    placereview() {
        this.details = '';
        this.service.placementreview(this.collegeId).subscribe(res => {
            // console.log(res);
            this.placereviewarry = res.data;
            this.totalReview = res.data.totalReview;
            this.reviewsArr = res.data.reviews;
            this.placementinfo = res.data.reviews;
            console.log(this.placementinfo);
            this.totalPlacementRate = res.data.totalPlacementRate;
            this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
            this.totalFacultyRateCount = res.data.totalFacultyRateCount;
            this.totalHostelRateCount = res.data.totalHostelRateCount;
            this.totalCampusRateCount = res.data.totalCampusRateCount;
            this.totalMoneyRateCount = res.data.totalMoneyRateCount;
            this.one2twoRate = res.data.one2twoRate;
            this.two2threeRate = res.data.two2threeRate;
            this.three2fourRate = res.data.three2fourRate;
            this.four2fiveRate = res.data.four2fiveRate;
            //  console.log(this.four2fiveRate);
        });
    }
    getStarArray() {
        const filledStars = Math.floor(this.totalPlacementRate); // Number of filled stars
        const hasHalfStar = this.totalPlacementRate - filledStars >= 0.5; // Check for half star
        const starArray = [];
        // Fill array with appropriate star names
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                starArray.push('star');
            }
            else if (i === filledStars && hasHalfStar) {
                starArray.push('star-half');
            }
            else {
                starArray.push('star-outline');
            }
        }
        return starArray;
    }
    compclg(collegeId) {
        this.router.navigate(['/clgcompare', collegeId]);
    }
    getclgid(collegeid) {
        this.router.navigate(['/clgdetails', collegeid]);
    }
    voteReview(reviewId, userId, ishelpful) {
        console.log(this.value);
        this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
            console.log(res);
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
                return; // Exit function if token is missing
            }
            try {
                this.collegeId = collegeId;
                this.userId = this.loginuserId;
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
PlacementsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__.ShortlistService }
];
PlacementsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-placements',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_placements_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_placements_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlacementsPage);



/***/ }),

/***/ 85607:
/*!******************************************************************!*\
  !*** ./src/app/pages/clgdetails/questionans/questionans.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionansPage": () => (/* binding */ QuestionansPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_questionans_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./questionans.page.html */ 72809);
/* harmony import */ var _questionans_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questionans.page.scss */ 88046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);









let QuestionansPage = class QuestionansPage {
    constructor(router, service, activatedRoute, formBuilder, alertController, modalController, loadingController) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.courseClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.segmentStud = 'tabs1';
        this.isFollowing = false;
        this.selectedSegment = 'Questions';
        this.clgdetailArry = [];
        this.clgimgArry = [];
        this.ansArry = [];
        this.unansArry = [];
        this.CourseCategoryArr = [];
        this.filtersegment = 'tabsA';
        this.CoursesByCatArr = [];
        // QaCollegeArr: any = []; 
        this.isClicked = [];
        this.isClicked2 = [];
    }
    ngOnInit() {
        this.getResponseDataFromLocalStorage();
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.loginuserId = user.id;
        }
        else {
        }
        this.aplicationForm = this.formBuilder.group({
            course_category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            coursename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            college: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
        this.studentForum = this.formBuilder.group({
            studentque: ['']
        });
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params['collegeid'];
            this.getclgdetail();
            this.getans();
            this.getUnanswer();
            this.toggleFollow('item: any');
        });
    }
    getCourseByCategoryClg() {
        this.service.getcourcatogorybyclg(this.aplicationForm.value.course_category, this.collegeId).subscribe(res => {
            this.courseLoader = false;
            this.CoursesByCatArr = res.data;
        });
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
    responseData(responseData) {
        throw new Error('Method not implemented.');
    }
    onCourseClicked(tabName) {
        alert(1);
        this.courseClicked.emit(tabName);
        this.segment = tabName;
    }
    studentSay(ev) {
        this.segmentStud = ev.detail.value;
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    filterTabs(ev) {
        this.filtersegment = ev.detail.value;
    }
    getcourscategory() {
        this.service.getCoursescategory().subscribe(res => {
            console.log(res);
            this.CourseCategoryArr = res.data;
        });
    }
    getclgdetail() {
        this.service.getclgdetails(this.collegeId).subscribe(res => {
            this.clgdetailArry = res.college_detail;
            this.collegename = res.college_detail[0].title;
            this.currentYear = (new Date()).getFullYear();
            this.clgimgArry = res.college_images;
        });
    }
    getans() {
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
            yield loading.present(); // Display the loader
            this.length = '5';
            this.draw = '1';
            this.service.qnsandans(this.collegeId, this.length, this.draw).subscribe(res => {
                this.ansArry = res.response_data;
                loading.dismiss(); // Dismiss the loader once data is fetched
            }, error => {
                console.error('Error fetching Q&A:', error);
                loading.dismiss(); // Dismiss the loader in case of an error
            });
        });
    }
    getUnanswer() {
        this.length = '5';
        this.draw = '1';
        this.service.unanser(this.collegeId, this.length, this.draw).subscribe(res => {
            this.unansArry = res.response_data;
        });
    }
    postQuestion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            if (this.studentForum.invalid) {
                this.studentForum.markAllAsTouched();
            }
            else {
                this.user_id = this.loginuserId;
                this.service.userqnspost(this.collegeId, this.courselevel, this.course, this.user_id, this.studentForum.value.studentque).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    yield this.showAlert('Success', 'Question has been submitted. We will get back to you soon!');
                    this.studentForum.reset();
                }));
            }
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
                component: _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_3__.PopuplogsignPage,
            });
            return yield modal.present();
        });
    }
    cancel() {
        this.modal.dismiss('/tabM');
        this.modalController.dismiss({
            dismissed: true,
        }).then(() => {
        });
    }
    toggleFollow(item) {
        const action = item.isFollowing ? 'unfollow' : 'follow';
        this.user_id = this.loginuserId;
        this.service.followQuestion(action, this.user_id, item.question_id)
            .subscribe((res) => {
            item.isFollowing = !item.isFollowing;
        }, (error) => {
            console.error('Error:', error);
        });
    }
    toggleLikeDislike(answer, action) {
        answer.likeCount = answer.like || 0;
        answer.dislikeCount = answer.dis_like || 0;
        if (!answer || !answer.answer_id) {
            console.error('Answer ID is missing or undefined');
            return;
        }
        const user_id = this.loginuserId;
        const answer_id = answer.answer_id;
        this.service.voteAnswere(action, answer_id, user_id).subscribe(res => {
            if (res.response_code === '200') {
                if (action === 'like') {
                    // Toggle like state
                    answer.isLiked = !answer.isLiked;
                    if (answer.isLiked) {
                        // Increment likeCount if the user liked
                        answer.likeCount += 1;
                        // Remove dislike if previously disliked
                        if (answer.isDisliked) {
                            answer.isDisliked = false;
                            answer.dislikeCount -= 1;
                        }
                    }
                    else {
                        // Decrement likeCount if unliked
                        answer.likeCount -= 1;
                    }
                }
                else if (action === 'dislike') {
                    // Toggle dislike state
                    answer.isDisliked = !answer.isDisliked;
                    if (answer.isDisliked) {
                        // Increment dislikeCount if the user disliked
                        answer.dislikeCount += 1;
                        // Remove like if previously liked
                        if (answer.isLiked) {
                            answer.isLiked = false;
                            answer.likeCount -= 1;
                        }
                    }
                    else {
                        // Decrement dislikeCount if undisliked
                        answer.dislikeCount -= 1;
                    }
                }
            }
        }, error => {
            console.error('Error in voting:', error);
        });
    }
};
QuestionansPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
QuestionansPage.propDecorators = {
    courseClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
QuestionansPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-questionans',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_questionans_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_questionans_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuestionansPage);



/***/ }),

/***/ 75934:
/*!**********************************************************!*\
  !*** ./src/app/pages/clgdetails/reviews/reviews.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsPage": () => (/* binding */ ReviewsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reviews_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./reviews.page.html */ 55351);
/* harmony import */ var _reviews_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews.page.scss */ 31219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _predictadmission_predictadmission_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../predictadmission/predictadmission.page */ 21663);
/* harmony import */ var _popuplogsign_popuplogsign_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../popuplogsign/popuplogsign.page */ 74303);
/* harmony import */ var _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shortlist.service */ 17098);











let ReviewsPage = class ReviewsPage {
    constructor(router, service, activatedRoute, loadingController, platform, modalController, alertController, shortlistService) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.platform = platform;
        this.modalController = modalController;
        this.alertController = alertController;
        this.shortlistService = shortlistService;
        this.totalRateCount = 0;
        this.selectedSegment = 'Latest';
        this.segmentStud = 'tabs1';
        this.segmentStudClgLife = 'tabsseg1';
        this.blogsArry = [];
        this.notificationarry = [];
        this.reviewsArry = [];
        this.reviewsArr = [];
        this.loginuserId = null;
        this.isBookmarked = false;
        this.shortlistedColleges = new Set();
        this.slideOptsnew = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.isThumbsUpClicked = false;
        this.isThumbsDownClicked = false;
        this.slideOptssuited = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.reviewsssArr = [];
        this.selectedCourseName = null;
    }
    ngOnInit() {
        this.selectedCourseName = localStorage.getItem('selectedCourseName');
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
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params.collegeid;
            console.log(this.collegeId);
            this.getclgdetail();
            this.notifications();
            this.blogs();
            this.reviews();
            this.getlatestnpop();
        });
    }
    brochuresuit(collegeId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginuserId) {
                this.presentSignInModal();
                return;
            }
            // alert(collegeId)
            try {
                // this.collegeId = collegeId;
                this.userId = this.loginuserId;
                const res = yield this.service.getbrochure(collegeId, this.userId).toPromise();
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
    getclgid(collegeid) {
        this.router.navigate(['/clgdetails', collegeid]);
    }
    articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
    studentSay(ev) {
        this.segmentStud = ev.detail.value;
    }
    clgLife(ev) {
        this.segmentStudClgLife = ev.detail.value;
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    getclgdetail() {
        this.service.getclgdetails(this.collegeId).subscribe(res => {
            console.log(res);
            this.clgdetailArry = res.college_detail;
            console.log(this.clgdetailArry);
            this.collegename = res.college_detail[0].title;
            this.collegename = res.college_detail[0].title;
            this.cityId = res.college_detail[0].cityid;
            this.categories = res.college_detail[0].categoryid;
            console.log(this.categories);
            this.courseid = res.college_detail[0].coursesandfees[0].sub_category;
            this.suitedclg();
            this.popularclg();
        });
    }
    suitedclg() {
        this.service.getsuitclg(this.collegeId, this.categories).subscribe(res => {
            console.log(res);
            this.suitclgarry = res.bestSuitedColleges;
            console.log(this.suitclgarry);
        });
    }
    popularclg() {
        this.service.clgpopular(this.courseid).subscribe(res => {
            this.popularclgarry = res.response_data;
        });
    }
    notifications() {
        this.service.getnotification(this.collegeId).subscribe(res => {
            console.log(res);
            this.notificationarry = res.response_data;
            console.log(this.notificationarry);
        });
    }
    blogs() {
        this.service.latestblog(this.collegeId).subscribe(res => {
            console.log(res);
            this.blogsArry = res.latest_blogs;
        });
    }
    reviews() {
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
            const timeoutId = setTimeout(() => {
                if (loading) {
                    loading.dismiss();
                }
            }, 5000);
            this.service.reviewDetails(this.collegeId).subscribe(res => {
                clearTimeout(timeoutId);
                if (res && res.data && res.data.reviews && res.data.reviews.length > 0) {
                    this.reviewsArry = res.data;
                    this.reviewsArr = res.data.reviews;
                    console.log(this.reviewsArr);
                    this.placement = res.data.reviews.placement_desc;
                    this.infra = res.data.reviews[0].infrastructure_desc;
                    this.faculty = res.data.reviews[0].faculty_desc;
                    this.campus = res.data.reviews[0].campus_desc;
                    this.money = res.data.reviews[0].money_desc;
                    this.hostel = res.data.reviews[0].hostel_desc;
                    this.totalRateCount = res.data.totalRateCount;
                    this.totalPlacementRateCount = res.data.totalPlacementRateCount;
                    this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount;
                    this.totalFacultyRateCount = res.data.totalFacultyRateCount;
                    this.totalHostelRateCount = res.data.totalHostelRateCount;
                    this.totalCampusRateCount = res.data.totalCampusRateCount;
                    this.totalMoneyRateCount = res.data.totalMoneyRateCount;
                    this.one2twoRate = res.data.one2twoRate;
                    this.two2threeRate = res.data.two2threeRate;
                    this.three2fourRate = res.data.three2fourRate;
                    this.four2fiveRate = res.data.four2fiveRate;
                    this.totalReview = res.data.totalReview;
                }
                else {
                    console.warn('No reviews available.');
                }
                loading.dismiss();
            }, error => {
                clearTimeout(timeoutId);
                console.error('Error fetching reviews:', error);
                loading.dismiss();
            });
        });
    }
    getStarArray(rating) {
        const starArray = [];
        const fullStars = Math.floor(rating); // Full stars
        const halfStar = rating % 1 !== 0; // Half star check
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Empty stars
        for (let i = 0; i < fullStars; i++) {
            starArray.push('star');
        }
        if (halfStar) {
            starArray.push('star-half'); // Half star
        }
        for (let i = 0; i < emptyStars; i++) {
            starArray.push('star-outline'); // Empty star
        }
        return starArray;
    }
    getlatestnpop() {
        this.service.getlatestnpop().subscribe(res => {
            console.log(res);
            this.latenpopArr = res.latest_blogs;
            this.popularArr = res.popular_blogs;
        });
    }
    voteReview(reviewId, userId, ishelpful) {
        console.log(this.value);
        this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
            console.log(res);
        });
    }
    compclg(collegeId) {
        this.router.navigate(['/clgcompare', collegeId]);
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
ReviewsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _services_shortlist_service__WEBPACK_IMPORTED_MODULE_5__.ShortlistService }
];
ReviewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-reviews',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reviews_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reviews_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReviewsPage);



/***/ }),

/***/ 62932:
/*!****************************************************************!*\
  !*** ./src/app/pages/clgdetails/scolarship/scolarship.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScolarshipPage": () => (/* binding */ ScolarshipPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_scolarship_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./scolarship.page.html */ 94806);
/* harmony import */ var _scolarship_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scolarship.page.scss */ 91010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);








let ScolarshipPage = class ScolarshipPage {
    constructor(router, service, activatedRoute, formBuilder, alertController, loadingController) {
        this.router = router;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.slideOptspage = {
            initialSlide: 0,
            slidesPerView: 1.1,
        };
        this.selectedSegment = 'Latest';
        this.clgdetailArry = [];
        this.clgimgArry = [];
        this.reviewsArr = [];
        this.isThumbsUpClicked = false; // Initially not clicked
        this.isThumbsDownClicked = false; // Initially not clicked
        this.selectedCourseName = null;
    }
    ngOnInit() {
        this.selectedCourseName = localStorage.getItem('selectedCourseName');
        this.getResponseDataFromLocalStorage();
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params.collegeid;
            console.log(this.collegeId);
            this.getclgdetail();
            this.scolshipdata();
            this.review();
            this.scolshipdata();
            this.getlatestnpop();
            this.infrarating();
        });
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
    voteReview(reviewId, userId, ishelpful) {
        this.service.reviewvote(reviewId, userId, ishelpful).subscribe(res => {
        });
    }
    articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    getclgdetail() {
        this.service.getclgdetails(this.collegeId).subscribe(res => {
            console.log(res);
            this.clgdetailArry = res.college_detail;
            this.collegename = res.college_detail[0].title;
            this.currentYear = (new Date()).getFullYear();
            this.clgimgArry = res.college_images;
            console.log(this.clgimgArry);
            this.cityidArry = res.college_detail[0].cityid;
            console.log(this.cityidArry);
            this.courseId = res.college_detail[0].coursesandfees[0].sub_category;
            console.log('Sub Category:', this.courseId);
            this.categories = res.college_detail[0].categoryId;
            console.log(this.categories);
        });
    }
    review() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
            this.service.getclgreview(this.collegeId).subscribe(res => {
                var _a, _b;
                if (res && res.data) {
                    this.reviewsArry = res.data;
                    this.reviewsArr = res.data.reviews;
                    this.overallrating = ((_b = (_a = res.data.reviews) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.totalRatingCount) || 0;
                    this.totalRateCount = res.data.totalRateCount || 0;
                    this.totalPlacementRateCount = res.data.totalPlacementRateCount || 0;
                    this.totalInfrastructureRateCount = res.data.totalInfrastructureRateCount || 0;
                    this.totalFacultyRateCount = res.data.totalFacultyRateCount || 0;
                    this.totalHostelRateCount = res.data.totalHostelRateCount || 0;
                    this.totalCampusRateCount = res.data.totalCampusRateCount || 0;
                    this.totalMoneyRateCount = res.data.totalMoneyRateCount || 0;
                    this.one2twoRate = res.data.one2twoRate || 0;
                    this.two2threeRate = res.data.two2threeRate || 0;
                    this.three2fourRate = res.data.three2fourRate || 0;
                    this.four2fiveRate = res.data.four2fiveRate || 0;
                    this.totalReview = res.data.totalReview || 0;
                }
                else {
                    console.warn('Data is empty or null');
                }
                loading.dismiss();
            }, error => {
                console.error('Error fetching reviews:', error);
                loading.dismiss();
            });
        });
    }
    infrarating() {
        this.service.getinfrarating(this.collegeId).subscribe(res => {
            console.log(res);
            this.infrareviewarry = res.data;
            this.infratotalrate = res.data.totalInfrastructureRate;
            this.one2twoRate = res.data.one2twoRate;
            this.two2threeRate = res.data.two2threeRate;
            this.three2fourRate = res.data.three2fourRate;
            this.four2fiveRate = res.data.four2fiveRate;
            this.reviewsArry = res.data.infraReviews;
            console.log(this.reviewsArry);
        });
    }
    scolshipdata() {
        this.service.getscolershipinfo(this.collegeId).subscribe(res => {
            console.log(res);
            this.scolshipdataarry = res.scholarship_data;
            this.scholarshipdata = res.scholarship_data[0].scholarship;
        });
    }
    getlatestnpop() {
        this.service.getlatestnpop().subscribe(res => {
            console.log(res);
            this.latenpopArr = res.latest_blogs;
            this.popularArr = res.popular_blogs;
        });
    }
    getStarIcons() {
        const fullStars = Math.floor(this.totalRateCount);
        const halfStars = this.totalRateCount % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;
        return {
            full: new Array(fullStars),
            half: new Array(halfStars),
            empty: new Array(emptyStars)
        };
    }
};
ScolarshipPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
ScolarshipPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-scolarship',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_scolarship_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scolarship_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScolarshipPage);



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

/***/ 1078:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/admissions/admissions.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"tabbody \">\n\n  <!-- section-1 -->\n  <div class=\"m10\">\n\n\n    <div *ngIf=\"whatnew && whatnew.trim()\" class=\"bgsmockgray\">\n      <div class=\"headcard\">\n        <div>\n          <h2>{{collegename}}</h2>\n        </div>\n      </div>\n      <div class=\"angular-editor-textarea\" [innerHTML]=\"whatnew\"></div>\n    </div>\n\n    <!-- section -2 -->\n\n\n\n\n    <ion-accordion-group *ngIf=\"admiprocessarry && admiprocessarry.length > 0\" class=\"tblcontent accordians\">\n      <ion-accordion value=\"first\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label>\n            <h6 class=\"my-10 ion-padding-top\">{{collegename}} {{currentYear}}</h6>\n            <h2>Admission Process</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"ion-padding\" slot=\"content\">\n          <ng-container>\n            <table style=\"width:100%\">\n              <tr>\n                <th>Popular Courses</th>\n                <th>Accepted Exams</th>\n                <th>Eligibility/Cut-Off </th>\n              </tr>\n\n\n\n              <tr *ngFor=\"let item of admiprocessarry\">\n                <td>{{ item.subCatName || 'N/A' }}</td>\n                <td>{{ item.Accepting_Exams || 'N/A' }}</td>\n                <td>\n                  <p>Qualification - </p>\n                  <div *ngIf=\"item.eligibility?.qualification?.length > 0; else noQualification\">\n                    <div *ngFor=\"let qualification of item.eligibility.qualification\">\n                      {{ qualification }}<br>\n                    </div>\n                  </div>\n                  <ng-template #noQualification>\n                    N/A\n                  </ng-template>\n\n                  <p>Cut_off - </p>\n                  <div *ngIf=\"item.eligibility?.cut_off?.length > 0; else noCutOff\">\n                    <div *ngFor=\"let cut_off of item.eligibility.cut_off\">\n                      {{ cut_off }}<br>\n                    </div>\n                  </div>\n                  <ng-template #noCutOff>\n                    N/A\n                  </ng-template>\n\n                  <div>\n                    <p>Other Eligibility - </p>\n                    <div *ngIf=\"item.eligibility?.other_eligibility; else noOtherEligibility\">\n                      {{ item.eligibility.other_eligibility }}\n                    </div>\n                    <ng-template #noOtherEligibility>\n                      N/A\n                    </ng-template>\n                  </div>\n                </td>\n              </tr>\n\n\n\n            </table>\n          </ng-container>\n        </div>\n      </ion-accordion>\n    </ion-accordion-group>\n\n\n\n\n\n\n    <!-- section -3 -->\n\n\n\n\n    <ng-container *ngFor=\"let item of admiprocessarry\">\n      <div class=\"courseCard\" style=\"padding: 2px 12px;\" *ngIf=\"item.Examnotification_or_ImportantDates\">\n        <h6 class=\"my-10\">{{collegename}} {{item.subCatName}} Admissions {{currentYear}}</h6>\n        <p>{{item.courseCount}} Courses | {{item.duration}} Years</p>\n\n\n\n\n        <div *ngIf=\"item.eligibility?.qualification?.length > 0 || \n          item.eligibility?.cut_off?.length > 0 || \n          item.eligibility?.other_eligibility\" style=\"border: 1px solid lightgray;\">\n          <p class=\"dticon\"> <ion-icon name=\"checkmark-circle-outline\"></ion-icon> Eligibility:</p>\n\n          <ion-row>\n            <ion-col>Qualification -</ion-col>\n            <ion-col *ngFor=\"let qualification of item.eligibility.qualification\">{{ qualification }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>Cut_off -</ion-col>\n            <ion-col *ngFor=\"let cut_off of item.eligibility.cut_off\">{{ cut_off }}</ion-col>\n            <ion-col *ngIf=\"item.eligibility.other_eligibility\">{{ item.eligibility.other_eligibility }}</ion-col>\n          </ion-row>\n        </div>\n\n\n\n\n\n        <ion-row class=\"datevnt\">\n          <ion-col class=\"dticon\">\n            <ion-icon name=\"calendar-outline\"></ion-icon> Dates & Events\n          </ion-col>\n          <ion-col class=\"blutxt\" (click)=\"addmissiondatepdf(item.sub_category)\">\n            Download Dates <ion-icon name=\"arrow-down-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"tabecontent mt-3\" [innerHTML]=\"item.Examnotification_or_ImportantDates\"></div>\n      </div>\n    </ng-container>\n\n\n    <!--  -->\n\n    <!-- section- 4 -->\n  </div>\n\n\n\n  <div class=\"thirdsectionpop\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n    <div class=\"HeadTxt\">\n      <h5>Explore popular similar colleges</h5>\n    </div>\n\n    <div>\n      <ion-slides [options]=\"slideOptsnew\">\n\n        <ion-slide *ngFor=\"let item of popularclgarry\">\n          <ion-card class=\"size_setpop\" style=\"margin-left: 0;width: 97%!important; margin-bottom:0 !important\">\n            <div class=\"imgHeadpop\">\n\n\n              <p class=\"tit_setpop\" (click)=\"getclgid(item.collegeid)\">\n                {{ item.title.length > 30 ? (item.title | slice:0:30) + '...' : item.title }}\n              </p>\n              <img class=\"img_alignpop\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{item.city}}\n            </p>\n            <p style=\"display: flex;\"> <span class=\"spnpop\"></span>\n              <span class=\"spnn\" *ngIf=\"item.rating> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                {{item.ratings}}</span>\n            </p>\n\n            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n\n\n              <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                [ngClass]=\"{'shortlisted': isShortlisted(item.collegeid)}\" (click)=\"toggleShortlist(item.collegeid)\">\n                <ion-icon [name]=\"isShortlisted(item.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                  [class.active]=\"isShortlisted(item.collegeid)\">\n                </ion-icon>\n              </ion-button>\n\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n                (click)=\"brochure(item.collegeid)\">\n                <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n                Brochure\n              </ion-button>\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </div>\n\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n  </div>\n  <!--  -->\n\n\n\n\n  <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n    <div class=\"px-10 cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\" class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n\n          <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n            {{ item.user_name.charAt(0) }}\n          </h1>\n          <ng-template #showDefaultIcon class=\"firstchar\">\n            <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n          </ng-template>\n\n        </ion-col>\n        <ion-col size=\"7\">\n          <h2>{{item.user_name}}</h2>\n          <p class=\"sbtxt\">{{item.coursename}}</p>\n        </ion-col>\n        <ion-col size=\"3\">\n          <div class=\"rates\">\n            <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n          </div>\n        </ion-col>\n      </ion-row>\n      <div class=\"ratingBtns\">\n        <ion-button fill=\"outline\" size=\"small\">\n          <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n        </ion-button>\n        <ion-button fill=\"outline\" size=\"small\">\n          <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n        </ion-button>\n        <ion-button fill=\"outline\" size=\"small\">\n          <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n        </ion-button>\n        <ion-button fill=\"outline\" size=\"small\">\n          <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n        </ion-button>\n        <ion-button fill=\"outline\" size=\"small\">\n          <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n        </ion-button>\n      </div>\n      <p><span>Placements: </span> {{item.placement_desc}} </p>\n      <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n      <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n      <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n      <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n      <ion-row class=\"thumbicon\">\n        <ion-col class=\"setlikecol\">\n          <div>Was this review helpful </div>\n\n          <div style=\"display: flex;\">\n            <!-- Thumbs Up Icon -->\n            <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n              <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\" [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n              </ion-icon>\n            </span>\n\n            <!-- Separator -->\n            <span class=\"span\">|</span>\n\n            <!-- Thumbs Down Icon -->\n            <span class=\"span\" (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n              <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n              </ion-icon>\n            </span>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n</div>\n<!--close-   Anonymous-->\n\n\n<!-- section- 6  best suited colleges -->\n<div class=\"m10\">\n\n  <div class=\"suitedclg\">\n\n\n\n\n    <div *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n      <div class=\"thirdsection\">\n        <div class=\"HeadTxt\">\n          <h5> Best suited colleges for you</h5>\n          <p>Because you showed interest in {{ selectedCourseName }}</p>\n        </div>\n        <div>\n          <ion-slides [options]=\"slideOptssuited\">\n\n            <ion-slide *ngFor=\"let item of suitclgarry\">\n              <ion-card class=\"size_setpop\">\n                <div class=\"imgHead\">\n\n                  <p class=\"tit_set\">\n                    {{ item.title.length > 23 ? (item.title | slice:0:23) + '...' : item.title }}\n                  </p>\n                  <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                </div>\n\n                <p class=\"set_botm\">\n                  <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n                </p>\n                <p style=\"display: flex;\"> <span class=\"spnpop\"></span>\n                  <span class=\"spnn\" *ngIf=\"item.rating> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                    {{item.ratings}}</span>\n                </p>\n\n                <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n                  <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                    [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\" (click)=\"toggleShortlist(item.id)\">\n                    <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\n                      [class.active]=\"isShortlisted(item.id)\">\n                    </ion-icon>\n                  </ion-button>\n\n                  <ion-button shape=\"round\" class=\"capitalize greenbtn\" (click)=\"brochuresuit(item.id)\">\n                    <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure\n                  </ion-button>\n                  <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                    (click)=\"clgpredict(item.id,item.CatId,item.subCatName)\">\n                    Predict Admission\n                  </ion-button>\n                </div>\n              </ion-card>\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </div>\n    </div>\n\n\n    <!--  -->\n\n\n\n    <!-- section- 7 photo  & videos -->\n    <div *ngIf=\"collegename && clgimgArry?.length > 0\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <p style=\"margin: 0;\">{{collegename}}</p>\n        </ion-col>\n      </ion-row>\n\n      <h5>Take a look at Campus</h5>\n\n      <ion-slides [options]=\"slidepic\">\n        <ion-slide *ngFor=\"let item of clgimgArry\">\n          <ion-card class=\"setpic\">\n            <img [src]=\"item.image\">\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n\n\n    <!--  -->\n\n\n\n\n\n\n\n    <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n      <div class=\"populartxt\">\n        <h2> Latest & Popular Articles</h2>\n      </div>\n\n\n      <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"Latest\">\n          <ion-label>Latest</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Popular\">\n          <ion-label>Popular</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <div *ngIf=\"selectedSegment === 'Latest'\" class=\"mt10\">\n        <div *ngFor=\"let latest of latenpopArr\">\n          <ion-row class=\"setrw mb5 mt6 pb0\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n              <p class=\"p1\">{{latest.title}}: </p>\n              <p class=\"p2\"> {{latest.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{latest.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"latest.image\">\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngIf=\"selectedSegment === 'Popular'\">\n        <div *ngFor=\"let popular of popularArr\">\n          <ion-row class=\"setrw mb5 mt6 pb0\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n              <p class=\"p1\">{{popular.title}}: </p>\n              <p class=\"p2\">{{popular.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{popular.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"popular.image\">\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n    <!--  -->\n  </div>\n  <!-- student Forum section -->\n\n  <div class=\"forumsec\">\n    <ion-row class=\"firstrow\">\n      <ion-col size=\"12\">\n        <h4>{{collegename}}</h4>\n        <h5>Student Forum</h5>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"studentForum\">\n      <div class=\"setdiv\">\n        <ion-row class=\"firstrow\">\n          <ion-col size=\"12\">\n            <h5>Anything you would want to ask experts?</h5>\n          </ion-col>\n        </ion-row>\n        <ion-input placeholder=\"Write here\" formControlName=\"studentque\">\n        </ion-input>\n        <ion-button (click)=\"postQuestion()\">Submit</ion-button>\n      </div>\n    </form>\n  </div>\n\n  <!--  -->\n\n\n\n\n\n\n\n</div>");

/***/ }),

/***/ 18527:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/clgdetails.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\"> <ion-icon name=\"chevron-back-outline\" routerLink=\"/tabs/tabs/tab1\"></ion-icon></ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n\n          <!-- <div class=\"notification\"><ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n          </div> -->\n          <ion-icon routerLink=\"/editprofile\" class=\"notification\" name=\"person-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content>\n\n  <div class=\"clgcoverphoto\">\n    <img class=\"imgclg\" [src]=\"image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n    <img class=\"log\" [src]=\"clglogo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n\n  </div>\n\n  <div>\n    <div class=\"px-10 pt-12\">\n      <div class=\"shortInfo\">\n        <h4>{{collegename}}</h4>\n        <p><span><ion-icon name=\"location-outline\" class=\"location\"></ion-icon>{{cityname}}.{{state}}</span>\n\n        </p>\n      </div>\n\n      <div class=\"subact\">\n        <div>\n          <span class=\"bglightgry\">{{clgcategory}} </span> <span class=\"bglightgry\">Estd. {{estd}}</span>\n        </div>\n        <ion-icon class=\"shareicon\" name=\"share-social\" (click)=\"shareBlog(collegeId)\"> Share</ion-icon>\n      </div>\n     \n\n      <ion-row>\n        <ion-col size=\"6\" class=\"pl0\"><ion-button fill=\"outline\" shape=\"round\" expand=\"block\" class=\"capitalize\"\n            (click)=\"compclg(collegeId)\"><ion-icon name=\"documents\" class=\"mr-6\"></ion-icon>\n            Compare</ion-button></ion-col>\n        <ion-col size=\"6\"><ion-button (click)=\"brochure(collegeId)\" shape=\"round\" expand=\"block\"\n            class=\"capitalize\"><ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n            Brochure</ion-button></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\"><ion-button    (click)=\"clgpredict(collegeId)\" shape=\"round\" expand=\"block\"\n          class=\"capitalize\"><ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n          Predict Admission </ion-button></ion-col>\n      </ion-row>\n    </div>\n\n\n\n\n\n\n    <!-- Segment content -2 -->\n\n    <div class=\"segment2\">\n      <ion-segment [scrollable]=\"true\" class=\"segment px-10\" [(value)]=\"segment\" (ionChange)=\"clgDetailTabs($event)\"\n        #segmentElement>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsA\">\n          <ion-label>College info</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsB\">\n          <ion-label>Courses & Fees</ion-label>\n        </ion-segment-button>\n\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsC\">\n          <ion-label>Reviews</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsD\">\n          <ion-label>Admissions</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsE\">\n          <ion-label>Placements</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsF\">\n          <ion-label>Cut-Offs</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsG\">\n          <ion-label>Infrastructure</ion-label>\n        </ion-segment-button>\n\n\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsI\">\n          <ion-label>Compare</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsJ\">\n          <ion-label>Q&A</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsK\">\n          <ion-label>Scholarships</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsL\">\n          <ion-label>Articles</ion-label>\n        </ion-segment-button>\n\n\n        <!-- <ion-segment-button class=\"seg-btn\" value=\"tabsM\" *ngIf=\"segment=='tabsM'&&  selectedCourseIdB != ''\" *ngIf == \" TabselectedIndex =11;\"> -->\n\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabsM\" *ngIf=\"segment=='tabsM' ||  selectedCourseIdB != ''\">\n          <ion-label>Course Info</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n\n\n      <!-- segment container tabs-college info -->\n\n      <div *ngIf=\"segment === 'tabsA'\">\n        <div class=\"tabbody\">\n          <div class=\"px-10 pt-12\">\n            <div *ngIf=\"description\" class=\"clgdescription\" [innerHTML]=\"description\"></div>\n\n            <div *ngIf=\"whatnew\" class=\"bgsmockgray\">\n              <p [innerHTML]=\"whatnew\"></p>\n            </div>\n            <!-- table of content -->\n            <ion-accordion-group class=\"tblcontent accordians\" *ngIf=\"tblecontentArry && tblecontentArry.length > 0\">\n              <ion-accordion value=\"first\">\n                <ion-item detail=\"true\" slot=\"header\">\n                  <ion-label>\n                    <p>{{collegename}} {{currentYear}}</p>\n                    <h2>Table of content</h2>\n                  </ion-label>\n                </ion-item>\n\n                <div class=\"ion-padding paragraph tabecontent1\" slot=\"content\">\n                  <ul *ngFor=\"let item of tblecontentArry\">\n                    <!-- <p>{{collegename}} {{item.title}} </p> -->\n                    <a (click)=\"scrollTo(item.title)\"> {{collegename}} {{item.title}}</a>\n\n                  </ul>\n                </div>\n\n              </ion-accordion>\n            </ion-accordion-group>\n\n\n            <!-- iit  highlight section-->\n\n            <ion-accordion-group class=\"accordians\" *ngIf=\"clghightlight && clghightlight.length > 0\">\n              <ion-accordion value=\"first\" name=\"Highlights\">\n                <ion-item detail=\"true\" slot=\"header\">\n                  <ion-label>\n                    <p>{{collegename}} {{currentYear}} </p>\n                    <h2>Highlights</h2>\n                  </ion-label>\n                </ion-item>\n\n                <div class=\"ion-padding\" slot=\"content\">\n                  <ng-container>\n                    <ul *ngFor=\"let item of clghightlight\">\n                      <p [innerHTML]=\"item.text\"> </p>\n                    </ul>\n                  </ng-container>\n                </div>\n              </ion-accordion>\n            </ion-accordion-group>\n\n\n            <!-- <ion-accordion-group class=\"accordians\" *ngIf=\"clghightlight && clghightlight.length > 0\">\n              <ion-accordion value=\"first\" name=\"Highlights\">\n                <ion-item detail=\"true\" slot=\"header\">\n                  <ion-label>\n                    <p>{{collegename}} {{currentYear}} </p>\n                    <h2>Popular Programmes 2025</h2>\n                  </ion-label>\n                </ion-item>\n\n                <div class=\"ion-padding\" slot=\"content\">\n                  <ng-container>\n                    <ul *ngFor=\"let item of clghightlight\">\n                      <p [innerHTML]=\"item.text\"> </p>\n                    </ul>\n                  </ng-container>\n                </div>\n              </ion-accordion>\n            </ion-accordion-group> -->\n\n\n            <ion-accordion-group class=\"accordians\" *ngIf=\"clghightlight && clghightlight.length > 0\">\n              <ion-accordion value=\"first\" name=\"Highlights\">\n                <ion-item detail=\"true\" slot=\"header\">\n                  <ion-label>\n                    <p>{{collegename}} {{currentYear}} </p>\n                    <h2>Facilities 2025</h2>\n                  </ion-label>\n                </ion-item>\n\n                <div class=\"ion-padding\" slot=\"content\">\n                  <ng-container>\n                    <ul *ngFor=\"let title of facility_titles.split(',')\">\n                      <p >. {{title}} </p>\n                    </ul>\n                  </ng-container>\n                </div>\n              </ion-accordion>\n            </ion-accordion-group>\n            <!--Commonly asked questions on  highlight-->\n\n            <div class=\"caskqns\" *ngIf=\"qunanswer && qunanswer.length > 0\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions\n                      <p style=\"margin: 0;\">on highlights</p>\n                    </h5>\n                  </ion-col>\n                </ion-row>\n\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of qunanswer\" (click)=\"toggleAccordion(item)\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}}</ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\">\n\n                  </div>\n                </ion-accordion>\n\n              </ion-accordion-group>\n            </div>\n\n            <div class=\"populartxt\" *ngIf=\"prosesarray && prosesarray.length > 0\"\n              >\n              <h2 name=\"Admission Process And Important Dates\">  {{collegename}} Admission Process and Important Dates {{currentYear}} </h2>\n\n              <ion-accordion-group class=\"accordians\">\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of prosesarray\">\n                  <ion-item detail=\"true\" slot=\"header\">\n                    <ion-label>\n                      <h2>{{item.subCatName}} Admission {{currentYear}}</h2>\n                      <ion-label style=\"display: flex;\">{{item.courseCount}} courses . {{item.duration}}\n                        years</ion-label>\n                    </ion-label>\n                  </ion-item>\n\n\n                  <div class=\"ion-padding paragraph\" slot=\"content\"\n                    *ngIf=\"item?.eligibility?.qualification?.length || item?.eligibility?.cut_off?.length || item?.eligibility?.other_eligibility || item?.Examnotification_or_ImportantDates\">\n\n\n                    <div class=\"icontxt\"\n                      *ngIf=\"item?.eligibility && (item.eligibility.qualification?.length || item.eligibility.cut_off?.length || item.eligibility.other_eligibility)\">\n                      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n                      <span>Eligibility</span>\n\n                      <td>\n                        <p>Qualification - </p>\n                        <div *ngFor=\"let qualification of item.eligibility.qualification\">\n                          {{ qualification }}<br>\n                        </div>\n                        <p>Cut_off - </p>\n                        <div *ngFor=\"let cut_off of item.eligibility.cut_off\">\n                          {{ cut_off }}<br>\n                        </div>\n                        <div *ngIf=\"item.eligibility.other_eligibility\">\n                          {{ item.eligibility.other_eligibility }}\n                        </div>\n                      </td>\n                    </div>\n\n                    <ion-row>\n                      <ion-col size=\"6\" class=\"textcenter gray\">\n                        <ion-icon name=\"calendar-outline\"></ion-icon> Important Dates\n                      </ion-col>\n                      <ion-col size=\"6\" class=\"textcenter blue\" (click)=\"addmissiondatepdf(item.sub_category)\">\n                        Download Dates <ion-icon name=\"cloud-download-outline\"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                    <div [innerHTML]=\"item.Examnotification_or_ImportantDates\">\n                    </div>\n                  </div>\n\n\n                </ion-accordion>\n              </ion-accordion-group>\n            </div>\n\n            <!--iit popular programmes  section-->\n            <div name=\"Popular Programs\" class=\"populartxt\" *ngIf=\"popprogrmmArrydata && popprogrmmArrydata.length > 0\">\n              <h2>{{collegename}} Popular Programmes {{currentYear}} </h2>\n\n            \n              <div class=\"courseCard\" *ngFor=\"let item of popprogrmmArrydata\">\n                <ion-row class=\"headpart\">\n                  <ion-col size=\"10\">\n                    <h3 (click)=\"onCourseClicked(item.sub_category,item.course_category, 'tabsB')\">{{item.sub_category_name}}( {{item.course_category_name}})</h3>\n\n                    <ion-label style=\"display: flex;\" *ngIf=\"item.total_courses\">{{item.total_courses}} courses | <span\n                        style=\"padding-left: 7px;\" *ngIf=\"item.duration\"> {{item.duration}} years</span> </ion-label>\n                  </ion-col>\n                  <ion-col size=\"2\">\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"midpart\">\n                  <ion-col size=\"8\" *ngIf=\"item.entrance_exam_names\">\n                    <span>Exams Accepted</span>\n                    <p>{{item.entrance_exam_names}}</p>\n                  </ion-col>\n\n                </ion-row>\n\n                <ion-row class=\"footerpart\">\n\n                  <ion-button fill=\"outline\" shape=\"round\" class=\"capitalize mr-6\" (click)=\"compclg(collegeId)\">\n                    <ion-icon name=\"documents\" class=\"mr-6\"></ion-icon> Compare</ion-button>\n\n                  <ion-button shape=\"round\" class=\"capitalize greenbtn\" (click)=\"brochure(collegeId)\">\n                    <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure</ion-button>\n                    <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                        (click)=\"clgpredict(collegeId,item.CatId,item.subCatName)\">\n                        Predict Admission\n                      </ion-button>\n                    \n                \n                  </ion-row>\n                  <span class=\"capitalize\" style=\"    padding-bottom: 10px; padding-left: 19px;\">   Annual Fees (INR):    {{ item.total_fees ? item.total_fees : 'NA' }}</span>\n              </div>\n\n            </div>\n\n\n            <!-- commonly ask questions on Popular Programs-->\n            <div *ngIf=\"qunanswer && qunanswer.length > 0\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                    <p style=\"margin: 0;\">on Popular Programes</p>\n                  </ion-col>\n                </ion-row>\n\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of qunanswer\" (click)=\"toggleAccordion(item)\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}}</ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                </ion-accordion>\n              </ion-accordion-group>\n            </div>\n\n            <!--Addmission Process section  -->\n\n           \n\n\n\n            <!--asked questions on Admission -->\n            <div class=\"caskqns\" *ngIf=\"admissionQarray && admissionQarray.length > 0\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                    <p style=\"margin: 0;\">on Admission</p>\n                  </ion-col>\n                </ion-row>\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of admissionQarray\"\n                  (click)=\"toggleAccordion(item)\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}}</ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                </ion-accordion>\n              </ion-accordion-group>\n            </div>\n\n\n\n\n            <!-- placement section -->\n\n            <div  >\n              <div name=\"Placement\"  class=\"populartxt\" *ngIf=\"PlaceCategoryArr?.length > 0 && yearsArray?.length > 0\">\n                <h2>{{collegename}} Placements {{currentYear}} </h2>\n             \n              <div style=\"margin-top:1.2rem\">\n                <form [formGroup]=\"placementForm\">\n              \n                  <!-- Course Category Dropdown -->\n                  <mat-form-field appearance=\"outline\" class=\"setmat\">\n                    <mat-label>Select Course Category</mat-label>\n                    <mat-select formControlName=\"course_category\" (ngModelChange)=\"placemtyear($event)\">\n                      <mat-option *ngFor=\"let cat of PlaceCategoryArr\" [value]=\"cat.id\">\n                        {{ cat.name }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n              \n                  <!-- Year Dropdown -->\n                  <mat-form-field appearance=\"outline\" class=\"setmat\">\n                    <mat-label>Select Year</mat-label>\n                    <mat-select formControlName=\"year\" (ngModelChange)=\"placement()\">\n                      <mat-option *ngFor=\"let year of yearsArray\" [value]=\"year\">\n                        {{ year }}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n              \n                </form>\n              </div>\n            </div>\n\n\n              <!-- Display data when available -->\n              <div *ngIf=\"placementarray && placementarray.length > 0\">\n                <div *ngFor=\"let item of placementarray | slice: 0: 2\">\n                  <table style=\"width:100%; margin-bottom: 18px\">\n                    <tr>\n                      <th>\n                        <p>Particulars {{ item.categoryName }}</p>\n                      </th>\n                      <th>\n                        <p>Statistics ({{ item.year }})</p>\n                      </th>\n                    </tr>\n                    <tr>\n                      <td>\n                        <p>Academic year</p>\n                      </td>\n                      <td>\n                        <p>{{ item.year }}</p>\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>No. of companies visited</td>\n\n                      <td> {{item.no_of_companies_visited && item.no_of_companies_visited !== \"0\" ?\n                        item.no_of_companies_visited : 'NA' }}</td>\n\n                    </tr>\n                    <tr>\n                      <td>\n                        <p>Median salary of placed graduates (Amount in Rs.) </p>\n\n                      </td>\n                      <td>\n\n                        <p>{{ item.median_salary && item.median_salary !== \"0\" ? (item.median_salary | number:'1.2-2') :\n                          'NA' }}</p>\n\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>No. of student selected for higher education </td>\n\n                      <!-- <td>{{ item.no_of_student_selected }}</td> -->\n                      <td>{{ item.no_of_student_selected && item.no_of_student_selected !== \"0\" ?\n                        item.no_of_student_selected : 'NA' }}</td>\n                    </tr>\n                    <tr>\n                      <td>No. of student placed</td>\n                      <!-- <td>{{ item.no_of_students_placed }}</td> -->\n                      <td>{{ item.no_of_students_placed && item.no_of_students_placed !== \"0\" ?\n                        item.no_of_students_placed\n                        : 'NA' }}</td>\n\n                    </tr>\n                  </table>\n                </div>\n              </div>\n            </div>\n\n\n\n            <!--asked questions on Placement -->\n            <div class=\"caskqns m0\" *ngIf=\"placementQarray && placementQarray.length > 0\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                    <p style=\"margin: 0;\">on Placement</p>\n                  </ion-col>\n                </ion-row>\n\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of placementQarray\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}} </ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                </ion-accordion>\n              </ion-accordion-group>\n            </div>\n\n\n            <!--  -->\n\n\n            <!-- Ranking section -->\n\n            <div name=\"Ranking\" class=\"populartxt\" *ngIf=\"rankingarray && rankingarray.length > 0\">\n              <h2>{{collegename}} Rankings {{currentYear}}</h2>\n              <div class=\"tablediv\">\n                <table style=\"width:100%\">\n                  <tr>\n                    <th>Ranking Body</th>\n                    <th>Year</th>\n                    <th>Rank</th>\n                    <th>Description</th>\n                  </tr>\n                  <tr *ngFor=\"let item of rankingarray\">\n                    <td><img [src]=\"item.image\"></td>\n                    <td>{{item.year}}</td>\n                    <td>{{item.rank}}</td>\n                    <td>\n                      <div *ngIf=\"!item.showMore && item.description.length > 30\">{{item.description.slice(0, 30)}}...\n                        <a (click)=\"toggleDescription(item)\">Show More</a>\n                      </div>\n                      <div *ngIf=\"item.showMore || item.description.length <= 30\">{{item.description}}\n                        <a *ngIf=\"item.showMore\" (click)=\"toggleDescription(item)\">Show Less</a>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </div>\n\n\n\n\n            <!--asked questions on Ranking -->\n            <div class=\"caskqns\" *ngIf=\"rankingQarray && rankingQarray.length > 0\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                    <p style=\"margin: 0;\">on Ranking</p>\n                  </ion-col>\n                </ion-row>\n\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of rankingQarray\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}} </ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                </ion-accordion>\n\n              </ion-accordion-group>\n            </div>\n\n          </div>\n\n\n          <!-- popular similar colleges section -->\n\n\n          <div class=\"thirdsection\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n            <div class=\"HeadTxt\">\n              <h5>Explore popular similar colleges</h5>\n\n            </div>\n\n            <div>\n              <ion-slides [options]=\"slideOptssuited\">\n\n                <ion-slide class=\"slide_set\" *ngFor=\"let item of popularclgarry\">\n                  <ion-card class=\"size_set\" style=\"margin-left: 0;width: 97%!important;\">\n                    <div class=\"imgHead\">\n\n\n                      <p class=\"tit_set\" (click)=\"getclgid(item.collegeid)\">\n                        {{ item.title.length > 30 ? (item.title | slice:0:30) + '...' : item.title }}\n                      </p>\n                      <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                    </div>\n\n                    <p class=\"set_botm\">\n                      <ion-icon name=\"location-outline\"></ion-icon>{{item.city}}\n                    </p>\n                    <p style=\"display: flex;\"> <span class=\"spn\"></span>\n                      <span class=\"spnn\" *ngIf=\"item.rating> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                        {{item.ratings}}</span>\n                    </p>\n\n                    <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n                      <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                        [ngClass]=\"{'shortlisted': isShortlisted(item.collegeid)}\"\n                        (click)=\"toggleShortlist(item.collegeid)\">\n                        <ion-icon [name]=\"isShortlisted(item.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                          [class.active]=\"isShortlisted(item.collegeid)\">\n                        </ion-icon>\n                      </ion-button>\n\n                      <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n                        (click)=\"brochure(item.collegeid)\">\n                        <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n                        Brochure\n                      </ion-button>\n                      <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                        (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                        Predict Admission\n                      </ion-button>\n                      \n                    </div>\n\n                  </ion-card>\n                </ion-slide>\n              </ion-slides>\n\n            </div>\n          </div>\n\n\n\n\n          <div class=\"px-10\">\n\n\n\n            <!-- Review section -->\n\n\n\n            <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n\n              <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n                      {{ item.user_name.charAt(0) }}\n                    </h1>\n                    <ng-template #showDefaultIcon class=\"firstchar\">\n                      <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n                    </ng-template>\n                  </ion-col>\n                  <ion-col size=\"7\">\n                    <h2>{{item.user_name}}</h2>\n                    <p class=\"sbtxt\">{{item.coursename}}</p>\n                  </ion-col>\n                  <ion-col size=\"3\">\n                    <div class=\"rates\">\n                      <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <div class=\"ratingBtns\">\n                  <ion-button fill=\"outline\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n                  </ion-button>\n                  <ion-button fill=\"outline\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n                  </ion-button>\n                  <ion-button fill=\"outline\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n                  </ion-button>\n                  <ion-button fill=\"outline\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n                  </ion-button>\n                  <ion-button fill=\"outline\" size=\"small\">\n                    <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n                  </ion-button>\n                </div>\n                <p><span>Placements: </span> {{item.placement_desc}} </p>\n                <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n                <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n                <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n                <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n                <ion-row class=\"thumbicon\">\n                  <ion-col class=\"setlikecol\">\n                    <div>Was this review helpful </div>\n\n                    <div style=\"display: flex;\">\n                      <!-- Thumbs Up Icon -->\n                      <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n                        <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n                          [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n                        </ion-icon>\n                      </span>\n\n                      <!-- Separator -->\n                      <span class=\"span\">|</span>\n\n                      <!-- Thumbs Down Icon -->\n                      <span class=\"span\"\n                        (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n                        <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                          [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n                        </ion-icon>\n                      </span>\n                    </div>\n\n\n\n\n                  </ion-col>\n                </ion-row>\n              </div>\n\n            </div>\n\n\n            <!-- courses & fees section -->\n\n            <div class=\"populartxt m0\" *ngIf=\"coursefeesarray && coursefeesarray.length > 0\">\n              <h2 name=\"Courses And Fees\" style=\"margin-bottom:10px;\">{{collegename}} Courses & Fees {{currentYear}}\n              </h2>\n              <div style=\"overflow: auto;\">\n                <table style=\"width:50%\">\n                  <tr>\n                    <th>Category</th>\n                    <th>Course</th>\n                    <th>Annual Fees (INR)</th>\n                    <th>Eligibility</th>\n                  </tr>\n                  <tr *ngFor=\"let item of coursefeesarray; let i = index\">\n                    <td>{{item.subCategoryName}}</td>\n                    <td>{{item.name}}</td>\n                    <td *ngIf=\"item.total_fees > 0\">{{item.total_fees}}</td>\n                       <td *ngIf=\"item.total_fees == 0\">{{item.counseling_fees}} </td>\n                    <td>\n                      {{item.entranceexams}}\n\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </div>\n\n\n            <!--asked questions on Courses & Fees -->\n\n            <div *ngIf=\"coursfeeQarray && coursfeeQarray.length > 0\" class=\"caskqns\">\n              <ion-accordion-group>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                  </ion-col>\n                  <ion-col size=\"10\">\n                    <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                    <p style=\"margin: 0;\">on Courses & Fees</p>\n                  </ion-col>\n                </ion-row>\n\n                <ion-accordion [value]=\"item.value\" *ngFor=\"let item of coursfeeQarray\">\n                  <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}} </ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                </ion-accordion>\n\n              </ion-accordion-group>\n            </div>\n          </div>\n\n\n\n\n\n          <div class=\"populartxt\" *ngIf=\"scholershipQarray && scholershipQarray.length > 0\">\n\n            <!-- scholarship section -->\n            <div>\n              <div name=\"Scholarships\">\n                <h2>{{collegename}} Scholarship {{currentYear}}</h2>\n                <div *ngFor=\"let item of scholershiparray\">\n                  <p [innerHTML]=\"item.scholarship\"></p>\n                </div>\n              </div>\n\n              <div class=\"caskqns\">\n                <ion-accordion-group>\n                  <ion-row>\n                    <ion-col size=\"2\">\n                      <img src=\"../../../assets/icon/QandA.png\">\n                    </ion-col>\n                    <ion-col size=\"10\">\n                      <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                      <p style=\"margin: 0;\">on Scholarship</p>\n                    </ion-col>\n                  </ion-row>\n                  <ion-accordion [value]=\"item.value\" *ngFor=\"let item of scholershipQarray\">\n                    <ion-item slot=\"header\">\n                      <ion-label>Q: {{item.question}} </ion-label>\n                    </ion-item>\n                    <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n                  </ion-accordion>\n                </ion-accordion-group>\n              </div>\n            </div>\n          </div>\n\n          <!-- FAQS section -->\n\n          <div name=\"FAQ\" *ngIf=\"faqsarray && faqsarray.length > 0\" class=\"caskqns\">\n            <ion-accordion-group>\n              <ion-row>\n                <ion-col size=\"2\">\n                  <img src=\"../../../assets/icon/QandA.png\">\n                </ion-col>\n                <ion-col size=\"10\">\n                  <h5 style=\"margin: 0;\">Commonly asked questions</h5>\n                  <p style=\"margin: 0;\">on FAQS</p>\n                </ion-col>\n              </ion-row>\n\n              <ion-accordion [value]=\"item.value\" *ngFor=\"let item of faqsarray\">\n                <ion-item slot=\"header\">\n                  <ion-label>Q: {{item.question}} </ion-label>\n                </ion-item>\n                <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n              </ion-accordion>\n\n            </ion-accordion-group>\n          </div>\n\n\n\n          <!-- Notification section -->\n\n          <div *ngIf=\"notificationarry && notificationarry.length > 0\" class=\"setnotification\">\n            <ion-card>\n              <div class=\"settitle\">\n                <h5>{{collegename}} Notification {{currentYear}}</h5>\n              </div>\n              <ul *ngFor=\"let item of notificationarry\">\n                <li>{{item.notification}}</li>\n\n              </ul>\n            </ion-card>\n          </div>\n\n\n          <!-- best- suited colleges for u section -->\n\n          <div *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n            <div class=\"thirdsection\">\n              <div class=\"HeadTxt\">\n                <h5> Best suited colleges for you</h5>\n                <p>Because you showed interest in {{ selectedCourseName }} </p>\n              </div>\n\n              <div>\n                <ion-slides [options]=\"slideOptssuited\">\n                  <ion-slide class=\"slide_set\" *ngFor=\"let item of suitclgarry\">\n                    <ion-card class=\"size_set\" style=\"margin-left:0px;width:97%!important;\">\n                      <div class=\"imgHead\">\n                        <p class=\"tit_set\" (click)=\"getclgid(item.collegeid)\">{{item.title}}</p>\n                        <img class=\"img_align\" [src]=\"item.logo\"\n                          onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                      </div>\n\n                      <p class=\"set_botm\">\n                        <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n                      </p>\n                      <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n                        <span class=\"spnn\" *ngIf=\"item.rating.totalRateCount && item.rating.totalRateCount > 0\">\n                          <ion-icon name=\"star\" class=\"staicon\"></ion-icon> {{item.rating.totalRateCount}}</span>\n                      </p>\n\n                      <div class=\"footerpart\" style=\"display: flex;\n                      align-items: center;\">\n\n\n\n                        <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                          [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\" (click)=\"toggleShortlist(item.id)\">\n                          <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\n                            [class.active]=\"isShortlisted(item.id)\">\n                          </ion-icon>\n                        </ion-button>\n\n                        <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n                          (click)=\"brochuresuit(item.id)\">\n                          <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n                          Brochure\n                        </ion-button>\n                        <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                          (click)=\"clgpredict(item.id,item.CatId,item.subCatName)\">\n                          Predict Admission\n                        </ion-button>\n                      </div>\n                    </ion-card>\n                  </ion-slide>\n                </ion-slides>\n              </div>\n            </div>\n          </div>\n\n\n\n\n\n\n\n          <!-- clg photo & videos section -->\n          <div *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n            <ion-row>\n\n              <ion-col size=\"12\">\n                <p style=\"margin: 0;\">{{collegename}}</p>\n                <h5 style=\"margin: 0;\">Take a look at Campus</h5>\n              </ion-col>\n            </ion-row>\n            <ion-slides [options]=\"slidepic\">\n              <ion-slide *ngFor=\"let item of clgimgArry\">\n                <ion-card class=\"setpic\">\n                  <img class=\"setnoimage\" [src]=\"item.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                </ion-card>\n              </ion-slide>\n\n            </ion-slides>\n          </div>\n\n\n\n\n\n\n\n          <!-- latest & popular section-->\n          <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n            <div class=\"populartxt\">\n              <h2> Latest & Popular Articles </h2>\n            </div>\n\n            <div class=\"px-10\">\n              <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n                <ion-segment-button value=\"Latest\">\n                  <ion-label>Latest</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"Popular\">\n                  <ion-label>Popular</ion-label>\n                </ion-segment-button>\n              </ion-segment>\n              <div *ngIf=\"selectedSegment === 'Latest'\">\n                <div *ngFor=\"let item of latenpopArr\">\n                  <ion-row class=\"setrw\">\n                    <ion-col size=\"8\" (click)=\"Articlesdetails(item.id)\">\n                      <p class=\"p1\">{{item.title}}: </p>\n                      <p class=\"p2\"> {{item.post_rate_date}}</p>\n                      <p class=\"p3\">Views : {{item.views}} </p>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                      <img [src]=\"item.image\">\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n\n              <div *ngIf=\"selectedSegment === 'Popular'\">\n                <div *ngFor=\"let item of popularArr\">\n                  <ion-row class=\"setrw\">\n                    <ion-col size=\"8\" (click)=\"Articlesdetails(item.id)\">\n                      <p class=\"p1\">{{item.title}}: </p>\n                      <p class=\"p2\">{{item.post_rate_date}}</p>\n                      <p class=\"p3\">Views : {{item.views}} </p>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                      <img [src]=\"item.image\">\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <!-- college details contact section -->\n          <div *ngIf=\"detailsarry && detailsarry.length > 0\">\n            <div class=\"contactsec\" *ngFor=\"let detail of detailsarry\">\n\n              <ion-row class=\"firstrow\">\n                <ion-col size=\"2\">\n                  <img style=\"width:35px\" src=\"../../../assets/icon/email.png\">\n                </ion-col>\n                <ion-col size=\"10\">\n                  <p>{{collegename}}</p>\n                  <h5>Contact Information</h5>\n                </ion-col>\n              </ion-row>\n\n              <ion-row class=\"secrow\">\n                <ion-col size=\"4\">\n                  <p>Address</p>\n                </ion-col>\n                <ion-col size=\"8\">\n                  <p>{{detail.address}}</p>\n                  <!-- <p class=\"setloc\"><ion-icon name=\"location-outline\"></ion-icon><span>View on Map<ion-icon\n                      name=\"arrow-forward-outline\"></ion-icon> </span></p> -->\n                  <p class=\"setloc\">\n                    <ion-icon name=\"location-outline\"></ion-icon>\n                    <a [href]=\"getMapUrl(detail.map_location)\" target=\"_blank\">\n                      <span>View on Map <ion-icon name=\"arrow-forward-outline\"></ion-icon></span>\n                    </a>\n                  </p>\n                </ion-col>\n              </ion-row>\n\n\n              <ion-col size=\"6\">\n                <ion-button fill=\"outline\" shape=\"round\" expand=\"block\" class=\"capitalize setbttn\" [href]=\"detail.web\"\n                  target=\"_blank\">\n                  Go to College Website\n                  <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n\n\n\n            </div>\n          </div>\n\n          <!--  -->\n\n\n\n          <!-- student Forum section -->\n\n          <div class=\"forumsec\">\n            <ion-row class=\"firstrow\">\n              <ion-col size=\"12\">\n                <h4>{{collegename}}</h4>\n                <h5>Student Forum</h5>\n              </ion-col>\n            </ion-row>\n            <form [formGroup]=\"studentForum\">\n              <div class=\"setdiv\">\n                <ion-row class=\"firstrow\">\n                  <ion-col size=\"12\">\n                    <h5>Anything you would want to ask experts?</h5>\n                  </ion-col>\n                </ion-row>\n                <ion-input placeholder=\"Write here\" formControlName=\"studentque\">\n                </ion-input>\n                <ion-button (click)=\"postQuestion()\">Submit</ion-button>\n              </div>\n            </form>\n          </div>\n\n          <!--  -->\n\n        </div>\n      </div>\n\n\n\n\n      <!-- ----------------------------------------Tab B ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsB'\">\n        <div class=\"tabbody\">\n          <app-coursesfees (courseClicked)=\"onCourseClicked1($event)\"></app-coursesfees>\n        </div>\n      </div>\n\n\n      <!-- ----------------------------------------Tab c ------------------------------------------- -->\n      <div *ngIf=\"segment === 'tabsC'\">\n        <div class=\"tabbody\">\n          <app-reviews></app-reviews>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab D ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsD'\">\n        <div class=\"tabbody\">\n          <app-admissions></app-admissions>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab E ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsE'\">\n        <div class=\"tabbody\">\n          <app-placements></app-placements>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab F ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsF'\">\n        <div class=\"tabbody\">\n          <app-cutoffs></app-cutoffs>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab G ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsG'\">\n        <div class=\"tabbody\">\n          <app-infrastructure></app-infrastructure>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"segment === 'tabsI'\">\n        <div class=\"tabbody\">\n          <app-compare></app-compare>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab K ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsK'\">\n        <div class=\"tabbody\">\n          <app-scolarship></app-scolarship>\n        </div>\n      </div>\n\n\n      <!-- ----------------------------------------Tab L ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsL'\">\n        <div class=\"tabbody\">\n          <app-news></app-news>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab J ------------------------------------------- -->\n\n      <div *ngIf=\"segment === 'tabsJ'\">\n        <div class=\"tabbody\">\n          <app-questionans></app-questionans>\n        </div>\n      </div>\n\n      <!-- ----------------------------------------Tab M ------------------------------------------- -->\n\n      <div *ngIf=\"segment =='tabsM' \">\n        <div class=\"tabbody\">\n          <app-coursinfo></app-coursinfo>\n        </div>\n      </div>\n\n\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab1\">\n      <ion-icon name=\"home\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" tab=\"tab2\" routerLink=\"/tabs/tabs/tab2\">\n      <ion-icon name=\"search-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Search</ion-label>\n    </ion-tab-button>\n\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab3\">\n      <ion-icon name=\"albums-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Recommended</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab4\">\n      <ion-icon name=\"bookmark-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Shortlist</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab5\">\n      <ion-icon name=\"chatbox-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Assistant</ion-label>\n    </ion-tab-button>\n\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ 40110:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/compare/compare.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div class=\"px-12\">\n<div class=\"cardsections\" *ngIf=\"clgdetailArry && clgdetailArry.length > 0\">\n  <h5> {{collegename}}</h5>\n  <ion-card class=\"setcrd\">\n    <div class=\"vs\">VS</div>\n     <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of clgdetailArry\">\n      <div class=\"vsimg\"> <img class=\"setimg\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\"></div>\n       <p class=\"title\">{{item.title}} </p>\n       <p class=\"setclgN\"> {{item.title}}</p>\n      \n      </ion-col>\n      <ion-col size=\"6\">\n        <div class=\"vsimg\"> <p><ion-icon name=\"add-outline\"></ion-icon></p> Add College</div>\n       \n      </ion-col>\n     </ion-row>\n     <div class=\"setbtn\" >\n      <ion-button (click)=\"compclg(collegeId)\">Compare</ion-button>\n     </div> \n  </ion-card>\n</div>\n\n\n<div class=\"cardsections mt-24\" *ngIf=\"clglistforcomp && clglistforcomp.length > 0\">\n  <h5> {{collegename}} Popular comparisons</h5>\n  <ion-card class=\"setcrd\" *ngFor=\"let item of clglistforcomp\">\n    <div class=\"vs\">VS</div>\n     <ion-row>\n      <ion-col size=\"6\" >\n      <div class=\"vsimg\"> <img class=\"setimg\" [src]=\"clglogo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\"></div>\n       <p class=\"title\">{{collegename}}</p>\n      \n      </ion-col>\n      <ion-col size=\"6\" >\n        <div class=\"vsimg\"><img class=\"setimg\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\"> </div>\n        <p class=\"title\">{{item.title}}</p>\n       \n      </ion-col>\n     </ion-row>\n     <div class=\"setbtn\" >\n      <ion-button (click)=\"twoclgcompar(collegeId,collegeId2)\">Compare</ion-button>\n     </div> \n  </ion-card>\n\n</div>\n\n\n\n<!--  -->\n<div class=\"thirdsection\" style=\"padding-top:1.5rem;\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n \n  <div class=\"HeadTxt\">\n    <h5>Explore popular similar colleges</h5>\n    \n  </div>\n\n  <div>\n    <ion-slides [options]=\"slideOptspage\">\n\n      <ion-slide class=\"slide_set\" *ngFor=\"let item of popularclgarry\">\n        <ion-card class=\"size_set w100\">\n          <div class=\"imgHead\">\n            <p class=\"tit_set\">{{item.title}}</p>\n            <img class=\"img_align\" [src]=\"item.logo\"\n              onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n          </div>\n\n          <p class=\"set_botm\">\n            <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n          </p>\n          <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n            <ion-icon name=\"star\" class=\"starrate\"></ion-icon><span\n              class=\"spnn\">{{item.rating.totalRateCount}}</span>\n          </p>\n          \n\n          <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n            <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\" style=\"height: 30px;width: 30px;\">\n              <ion-icon name=\"bookmark-outline\"></ion-icon>\n            </ion-button>\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\">\n              <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brocher\n            </ion-button>\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" >\n              Predict Admission\n            </ion-button>\n        </div>\n\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>\n\n\n <!--  -->\n\n <div class=\"px-12\" *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n  <div class=\"HeadTxt mt0\">\n    <h5 > Photos & Videos</h5>\n  </div>\n  <ion-row>\n    <ion-col size=\"6\" *ngFor=\"let item of clgimgArry\">\n      <img class=\"\" [src]=\"item.image\">\n    </ion-col>\n    \n  </ion-row>\n  </div>\n <!--  -->\n\n\n <!--  -->\n <div class=\"thirdsection \" *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n   \n  <div class=\"HeadTxt\">\n    <h5>Best suited colleges for you</h5>\n    <p>Because you showed interest in {{ selectedCourseName }}</p>\n  </div>\n\n  <div>\n    <ion-slides [options]=\"slideOptspage\">\n\n      <ion-slide class=\"slide_set\" *ngFor=\"let item of suitclgarry\">\n        <ion-card class=\"size_set w100\">\n          <div class=\"imgHead\">\n            <p class=\"tit_set\">{{item.title}}</p>\n            <img class=\"img_align\" [src]=\"item.logo\"\n              onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n          </div>\n\n          <p class=\"set_botm\">\n            <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n          </p>\n          <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n            <ion-icon name=\"star\" class=\"starrate\"></ion-icon><span\n              class=\"spnn\">{{item.rating.totalRateCount}}</span>\n          </p>\n        \n\n          <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n            <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\" style=\"height: 30px;width: 30px;\">\n              <ion-icon name=\"bookmark-outline\"></ion-icon>\n            </ion-button>\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\">\n              <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brocher\n            </ion-button>\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" >\n              Predict Admission\n            </ion-button>\n        </div>\n\n        </ion-card>\n      </ion-slide> \n    </ion-slides>\n  </div>\n</div>\n\n <!--  -->\n\n\n   <!--  -->\n   <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n    <div class=\"populartxt\">\n      <h2> </h2>\n    </div>\n\n\n          <h5>Latest & Popular Articles </h5>\n          <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n            <ion-segment-button value=\"Latest\">\n              <ion-label>Latest</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"Popular\">\n              <ion-label>Popular</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n          <div *ngIf=\"selectedSegment === 'Latest'\">\n            <div *ngFor=\"let latest of latenpopArr\">\n              <ion-row  class=\"setrw\">\n                <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n                  <p class=\"p1\">{{latest.title}}: </p>\n                  <p class=\"p2\"> {{latest.post_rate_date}}</p>\n                  <p class=\"p3\">{{latest.views}} </p>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <img [src]=\"latest.image\">\n                </ion-col>\n              </ion-row>\n              </div>\n          </div>\n            <div *ngIf=\"selectedSegment === 'Popular'\">\n              <div *ngFor=\"let popular of popularArr\">\n                <ion-row class=\"setrw\">\n                  <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n                    <p class=\"p1\">{{popular.title}}: </p>\n                    <p class=\"p2\">{{popular.post_rate_date}}</p>\n                    <p class=\"p3\">{{popular.views}} </p>\n                  </ion-col>\n                  <ion-col size=\"4\">\n                    <img [src]=\"popular.image\">\n                  </ion-col>\n                </ion-row>\n                </div>\n              </div>\n          \n        </div>\n        \n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n ");

/***/ }),

/***/ 25744:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/coursesfees/coursesfees.page.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"tabbody\">\n  \n  <div class=\"px-10\">\n\n    <!--  -->\n\n    <div style=\"padding-bottom: 31px;\">\n      <div class=\"courseCard\" *ngFor=\"let item of feesbclgarray\">\n        <ion-row class=\"headpart\">\n          <ion-col size=\"10\">\n            <h3 (click)=\"onCourseClicked(item.courseid,'tabsM')\" *ngIf=\"item.name\">{{item.name}}</h3>\n\n            <ion-label *ngIf=\"item.duration\">{{item.duration}} years </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"midpart style\">\n        \n          <ion-col size=\"6\" *ngIf=\"item.total_intake >0\">\n            <span>Seats Intake</span>\n            <p>{{ item.total_intake ? item.total_intake : 'NA' }}</p>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"item.examNames\">\n            <span>Exams Accepted</span>\n          <p>{{ item.examNames }}</p>\n\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"midpart\">\n          <ion-col size=\"6\" *ngIf=\"item.total_fees\">\n            <span>Annual Fees (INR)</span>\n            <p>{{item.total_fees}} </p>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"item.median_salary >0\">\n            <span>Median Salary </span>\n            <p>{{item.median_salary}} </p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"footerpart\">\n\n\n          <ion-button fill=\"outline\" shape=\"round\" class=\"capitalize mr-6\" (click)=\"compclg(collegeId)\">\n            <ion-icon name=\"documents\" class=\"mr-6\"></ion-icon> Compare</ion-button>\n\n          <ion-button shape=\"round\" class=\"capitalize greenbtn\" (click)=\"brochure(collegeId)\">\n            <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure</ion-button>\n        </ion-row>\n      </div>\n    </div>\n\n    <!--  -->\n\n    <!-- first section -->\n\n    <div>\n      <div>\n        <h5 class=\"m0\">{{collegename}}</h5>\n      </div>\n\n      <div>\n        <h4>Others programs Offered</h4>\n        <div class=\"courseCard\" *ngFor=\"let item of selectedclgArr\">\n\n          <ion-row class=\"headpart\">\n            <ion-col size=\"10\">\n              <h3 (click)=\"onCourseClicked(item.courseid,'tabsM')\" *ngIf=\"item.name\">{{item.name}}</h3>\n\n              <ion-label *ngIf=\"item.duration\">{{item.duration}} years </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"midpart style\">\n            <ion-col size=\"6\" *ngIf=\"item.total_intake\">\n              <span>Seats Intake</span>\n              <p>{{item.total_intake}} </p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"item.examNames\">\n              <span>Exams Accepted</span>\n              <p>{{item.examNames}}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"midpart\">\n            <ion-col size=\"6\" *ngIf=\"item.total_fees\">\n              <span>Annual Fees (INR)</span>\n              <p>{{item.total_fees}} </p>\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"item.median_salary\">\n              <span>Median Salary </span>\n              <p>{{item.median_salary}} </p>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"footerpart\">\n         \n            <ion-button fill=\"outline\" shape=\"round\" class=\"capitalize mr-6\" (click)=\"compclg(collegeId)\">\n              <ion-icon name=\"documents\" class=\"mr-6\"></ion-icon> Compare</ion-button>\n\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" (click)=\"brochure(collegeId)\">\n              <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure</ion-button>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n\n\n    <!-- second section -->\n\n\n    <div class=\"trending\" *ngIf=\"cityotherclg && cityotherclg.length > 0\">\n      <div>\n        <h4>Other colleges offering Same  Courses in {{cityname}} City</h4>\n        <ion-item detail=\"true\" *ngFor=\"let item of cityotherclg\">\n          <ion-label class=\"ion-text-wrap\">\n            <h3 (click)=\"clgdetls(item.id)\">{{item.title}}</h3>\n          </ion-label>\n        </ion-item>\n      </div>\n    </div>\n\n\n\n\n    <!-- clg photo & videos section -->\n    <div *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n      <ion-row>\n\n        <ion-col size=\"12\">\n          <p style=\"margin: 0;\">{{collegename}}</p>\n          <h5 style=\"margin: 0;\">Take a look at Campus</h5>\n        </ion-col>\n      </ion-row>\n      <ion-slides [options]=\"slidepic\">\n        <ion-slide *ngFor=\"let item of clgimgArry\">\n          <ion-card class=\"setpic\">\n            <img class=\"setnoimage\" [src]=\"item.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n          </ion-card>\n        </ion-slide>\n\n      </ion-slides>\n    </div>\n\n\n\n    <!-- latest&popular news section -->\n    <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n      <div class=\"populartxt\">\n        <h2> Latest & Popular Articles </h2>\n      </div>\n\n      <div style=\"padding-top:16px;\">\n        <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button value=\"Latest\">\n            <ion-label>Latest</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Popular\">\n            <ion-label>Popular</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n        <div *ngIf=\"selectedSegment === 'Latest'\">\n          <div *ngFor=\"let latest of latenpopArr\">\n\n            <ion-row class=\"setrw\">\n              <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n                <p class=\"p1\">{{latest.title}}: </p>\n                <p class=\"p2\"> {{latest.post_rate_date}}</p>\n                <p class=\"p3\">Views : {{latest.views}} </p>\n              </ion-col>\n              <ion-col size=\"4\">\n                <img [src]=\"latest.image\">\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <div *ngIf=\"selectedSegment === 'Popular'\">\n          <div *ngFor=\"let popular of popularArr\">\n            <ion-row class=\"setrw\">\n              <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n                <p class=\"p1\">{{popular.title}}: </p>\n                <p class=\"p2\">{{popular.post_rate_date}}</p>\n                <p class=\"p3\">Views : {{popular.views}} </p>\n              </ion-col>\n              <ion-col size=\"4\">\n                <img [src]=\"popular.image\">\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n  </div>");

/***/ }),

/***/ 17647:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/coursinfo/coursinfo.page.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"px-12 pt-12\">\n\n    <!-- first section -->\n     <div class=\"courseCard\">\n        <div>\n            <ion-row style=\"padding:10px\">\n                <ion-col size=\"2\">\n                    <ion-icon style=\"font-size: 34px;color: #88d834;\" name=\"calendar-outline\"></ion-icon>\n\n                </ion-col>\n                <ion-col size=\"6\">\n                    <p style=\"margin: 0;\">{{coursename}}</p>\n\n                </ion-col>\n                <ion-col size=\"4\" (click)=\"openModal('open-modal')\">\n                    <ion-button id=\"open-modal\" style=\"font-size: 12px;\">Apply Now</ion-button>\n                </ion-col>\n            </ion-row>\n           \n        </div>\n\n        <div *ngFor=\"let item of courseinfoArr\">\n          \n            <div *ngIf=\"item.course_description\" style=\"margin-bottom: 16px; padding:10px\">\n                <h5 style=\"margin: 0; padding-left: 10px;\">Overview</h5>\n                <h1 [innerHTML]=\"item.course_description\"></h1>\n            </div>\n\n            <div class=\"wikiContents mt-3\" *ngIf=\"courseinfoArr && courseinfoArr.length > 0\">\n                <table class=\"table\">\n                   \n\n                    <tbody>\n                        <tr>\n                            <td>\n                                Duration\n                            </td>\n                            <td>\n                                {{ item.duration ? item.duration + ' years' : 'NA' }}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Course Level\n                            </td>\n                            <td>\n                                {{ item.level ? item.level : 'NA' }}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Annual Fees (INR)\n                            </td>\n                            <td>\n                                {{ item.total_fees ? item.total_fees : 'NA' }}\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                Eligibility\n                            </td>\n                            <td>\n                                <p>\n                                    Qualification:- {{ item?.eligibility || 'NA' }}\n                                </p>\n                                <!-- <p *ngIf=\"item.eligibility?.cut_off?.length\">\n                                    Cut Off:- {{ item.eligibility.cut_off.join(', ') }}\n                                </p>\n                                <p *ngIf=\"item.eligibility?.other_eligibility\">\n                                    Other Eligibility:- {{ item.eligibility.other_eligibility }}\n                                </p> -->\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                Scope\n                            </td>\n                            <td>\n                                {{ item.scope ? item.scope : 'NA' }}\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                Official Website\n                            </td>\n                            <td>\n                                <a *ngIf=\"item.website; else noWebsite\" [href]=\"item.website\">Go to Website</a>\n                                <ng-template #noWebsite>NA</ng-template>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"item.total_intake>0\">\n                            <td>\n                                Total Intake\n                            </td>\n                            <td>\n                                {{ item.total_intake ? item.total_intake : 'NA' }}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                College Type\n                            </td>\n                            <td>\n                                {{ item.college_type ? item.college_type : 'NA' }}\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                Job Profile\n                            </td>\n                            <td>\n                                {{ item.job_profile ? item.job_profile : 'NA' }}\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                Certification\n                            </td>\n                            <td>\n                                {{ item.certification ? item.certification : 'NA' }}\n                            </td>\n                        </tr>\n                    </tbody>\n                    \n                </table>\n            </div>\n        </div>\n    </div> \n    \n    \n    \n \n\n  \n\n\n    <!-- second section -->\n    <div class=\"courseCard\" *ngIf=\"crsfeesstuctreArry && crsfeesstuctreArry.length > 0\">\n        <div>\n            <ion-row style=\"padding:10px\">\n                <ion-col size=\"2\">\n                    <svg style=\"font-size: 34px;color: #88d834;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"38\"\n                        height=\"38\" fill=\"currentColor\" class=\"secondary-color bi bi-currency-rupee\"\n                        viewBox=\"0 0 16 16\">\n                        <path\n                            d=\"M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z\" />\n                    </svg>\n                </ion-col>\n                <ion-col size=\"10\">\n                    <p style=\"margin: 0;\">{{coursename}}</p>\n\n                </ion-col>\n\n            </ion-row>\n            <h5 style=\"margin: 0; padding-left: 10px;\">Fees</h5>\n        </div>\n\n\n\n        <div>\n            <table style=\"width:100%; margin-bottom : 18px\">\n                <tbody>\n                    <tr>\n                        <th>\n                            <p>Fee components</p>\n                        </th>\n                        <th width=\"200\">\n                            <p>Amount (4 years)</p>\n                        </th>\n                    </tr>\n                    <tr *ngFor=\"let item of crsfeesstuctreArry\">\n                        <td>\n                            <span class=\"font-medium\">{{item.feecomponent}}</span> <br>\n\n                        </td>\n                        <td>\n                            {{item.amount}}\n                        </td>\n                    </tr>\n\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <!-- second section closed-->\n\n\n   \n\n    <div class=\"courseCard\" *ngIf=\"courseexamArry && courseexamArry.length > 0\">\n        <div>\n          <ion-row style=\"padding:10px\">\n            <ion-col size=\"2\">\n              <ion-icon style=\"font-size: 34px; color: #88d834;\" name=\"book\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"10\">\n              <p style=\"margin: 0;\">{{coursename}}</p>\n            </ion-col>\n          </ion-row>\n          <h5 style=\"margin: 0; padding-left: 10px;\">Accepting Entrance Exams</h5>\n        </div>\n      \n        <div style=\"padding: 0 10px 4px;\" *ngFor=\"let item of courseexamArry\">\n          <h1 (click)=\"exmdetail(item.id)\">\n            {{item.exam_name}}\n          </h1>\n          <p [innerHTML]=\"item.description\"></p><br>\n          <p [innerHTML]=\"item.criteria\"></p>\n        </div>\n      </div>\n    <!-- third section closed-->\n\n    <!-- 4 section -->\n    <div class=\"caskqns\" *ngIf=\"commanlyaskedqaeArr && commanlyaskedqaeArr.length > 0\">\n        <ion-accordion-group>\n            <ion-row>\n                <ion-col size=\"2\">\n                    <img src=\"../../../assets/icon/QandA.png\">\n                </ion-col>\n                <ion-col size=\"10\">\n                    <h4 style=\"margin: 0;\">Frequently Asked Questions</h4>\n                    <!-- <p style=\"margin: 0;\">on Admission</p> -->\n                </ion-col>\n            </ion-row>\n\n            <ion-accordion [value]=\"item.value\" *ngFor=\"let item of commanlyaskedqaeArr\">\n                <ion-item slot=\"header\">\n                    <ion-label>Q: {{item.question}}</ion-label>\n                </ion-item>\n                <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\">\n\n                </div>\n            </ion-accordion>\n\n        </ion-accordion-group>\n    </div>\n    <!-- 4 section closed-->\n\n\n    <!-- 5 section Admission process -->\n\n   \n\n    <div class=\"courseCard\" *ngIf=\"admisionprocesArry && admisionprocesArry.length > 0\">\n        <div>\n          <ion-row style=\"padding:10px\">\n            <ion-col size=\"2\">\n              <ion-icon style=\"font-size: 34px;color: #88d834;\" name=\"school\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"10\">\n              <p style=\"margin: 0;\">{{coursename}}</p>\n              <h5 style=\"margin: 0; padding-left: 10px;\">Admission Process</h5>\n            </ion-col>\n          </ion-row>\n        </div>\n      \n        <div style=\"padding: 0 10px 4px;\" *ngFor=\"let item of admisionprocesArry\">\n          <p style=\"color: #2196f3\">Eligibility</p>\n          <p>{{item.eligibility}}</p>\n          <div class=\"flex justify-between\">\n            <p style=\"color: #2196f3\">Important Dates</p>\n          </div>\n          <div class=\"tabecontent mt-3\" #ImportantDates [innerHTML]=\"item.Examnotification_or_ImportantDates\"></div>\n        </div>\n      </div>\n      \n    <!-- 5 section Admission process closed-->\n\n\n\n\n   \n\n    <!-- 7 section Popular colleges -->\n    <div>\n        <div class=\"thirdsection\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n\n            <div class=\"HeadTxt\">\n                <h5> Explore popular similar colleges</h5>\n               \n            </div>\n\n            <div>\n                <ion-slides [options]=\"slideOptspage\">\n\n                    <ion-slide class=\"slide_set\" *ngFor=\"let item of popularclgarry\">\n                        <ion-card class=\"size_set\">\n                            <div class=\"imgHead\">\n                                \n                                <p class=\"tit_set\">\n                                    {{ item.title.length > 23 ? (item.title | slice:0:23) + '...' : item.title }}\n                                </p>\n                                <img class=\"img_align\" [src]=\"item.logo\"\n                                    onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                            </div>\n\n                            <p class=\"set_botm\">\n                                <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n                            </p>\n                            <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n                                <ion-icon name=\"star\" class=\"starrate\"></ion-icon><span\n                                    class=\"spnn\">{{item.rating.totalRateCount}}</span>\n                            </p>\n\n                            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n                                <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                                    style=\"height: 30px;width: 30px;\"\n                                    [ngClass]=\"{'shortlisted': shortlistedColleges.has(collegeId)}\"\n                                    (click)=\"addclgshortlist(collegeId)\">\n                                    <ion-icon [name]=\"isBookmarked ? 'bookmark' : 'bookmark-outline'\"\n                                        [class.active]=\"isBookmarked\"></ion-icon></ion-button>\n\n                                <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                                    style=\"margin-left:2px; margin-right:2px\" (click)=\"brochure(collegeId)\">\n                                    <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure\n                                </ion-button>\n                                <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                                    (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                                    Predict Admission\n                                </ion-button>\n                            </div>\n                        </ion-card>\n                    </ion-slide>\n                </ion-slides>\n            </div>\n        </div>\n\n\n    </div>\n    <!-- 7 section Popular colleges closed-->\n\n    <!-- 8 section  colleges Photo & videos -->\n    <div *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n        <ion-row>\n\n            <ion-col size=\"12\">\n                <p style=\"margin: 0;\">{{collegename}}</p>\n                <h5 style=\"margin: 0;\">Take a look at Campus</h5>\n            </ion-col>\n        </ion-row>\n        <ion-slides [options]=\"slidepic\">\n            <ion-slide *ngFor=\"let item of clgimgArry\">\n                <ion-card class=\"setpic\">\n                    <img class=\"setnoimage\" [src]=\"item.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                </ion-card>\n            </ion-slide>\n\n        </ion-slides>\n    </div>\n\n    <!-- 8 section  colleges Photo & videos closed-->\n\n    <!-- 9 Article section -->\n    <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n        <div>\n            <ion-row class=\"border-y\">\n\n                <ion-col size=\"12\" class=\"selfcenter\">\n                    <span style=\"font-weight: 500;font-size: 18px;\"> Latest & Popular Articles </span>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        <div class=\"mx10\">\n            <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n                <ion-segment-button value=\"Latest\">\n                    <ion-label>Latest</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"Popular\">\n                    <ion-label>Popular</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n            <div *ngIf=\"selectedSegment === 'Latest'\" class=\"mt10\">\n                <div *ngFor=\"let latest of latenpopArr\">\n                    <ion-row class=\"setrw mb5 mt6 pb0\">\n                        <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n                            <p class=\"atitle\">{{latest.title}}: </p>\n                            <p class=\"p2\"> {{latest.post_rate_date}}</p>\n                            <p class=\"p3\">Views : {{latest.views}} </p>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <img [src]=\"latest.image\">\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n            <div *ngIf=\"selectedSegment === 'Popular'\">\n                <div *ngFor=\"let popular of popularArr\">\n                    <ion-row class=\"setrw mb5 mt6 pb0\">\n                        <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n                            <p class=\"atitle\">{{popular.title}}: </p>\n                            <p class=\"p2\">{{popular.post_rate_date}}</p>\n                            <p class=\"p3\">Views : {{popular.views}} </p>\n                        </ion-col>\n                        <ion-col size=\"4\">\n                            <img [src]=\"popular.image\">\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <!-- 9 Article section closed-->\n\n\n<!--10 otherclgbycity -->\n<div class=\"trending\" *ngIf=\"sameclgArry && sameclgArry.length > 0\">\n    <div>\n      <h4>Other colleges offering {{coursename}} in {{cityname}}</h4>\n      <ion-item detail=\"true\" *ngFor=\"let item of sameclgArry\">\n        <ion-label class=\"ion-text-wrap\">\n          <h3 (click)=\"clgdetls(item.id)\">{{item.title}}</h3>\n        </ion-label>\n      </ion-item>\n    </div>\n  </div>\n\n  <!--10 otherclgbycity -->\n\n   \n\n    <!-- ion model 1 -->\n    <ion-modal trigger=\"open-modal\">\n        <ng-template>\n            <ion-content>\n               \n                <div class=\"matfield\">\n                    <ion-row style=\"border-bottom: 1px solid #cacaca;margin-bottom: 18px;\">\n                        <ion-col size=\"2\"></ion-col>\n                      <ion-col size=\"8\" class=\"headtxt\">\n                        <ion-icon style=\"color:#2196f3\" name=\"person\"></ion-icon>\n                        <h4 class=\"sethedding\">APPLY NOW</h4>\n                      </ion-col>\n                      <ion-col size=\"2\">\n                        <ion-icon class=\"iconclose\" name=\"close-outline\" (click)=\" close()\"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                   \n                    <form [formGroup]=\"aplicationForm\">\n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Student Name</mat-label>\n                        <input matInput placeholder=\"Enter your name\" formControlName=\"student_name\" (input)=\"checkValidInputDat($event, 'student_name')\" type=\"text\">\n                        <ion-icon name=\"person-outline\" class=\"icon\" matSuffix></ion-icon>\n                       \n                      </mat-form-field>\n                  \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Mobile Number</mat-label>\n                        <input matInput placeholder=\"Enter your mobile number\"  formControlName=\"mobile_no\" (input)=\"checkValidInputDat($event, 'mobile_no')\" type=\"tel\">\n                        <ion-icon name=\"call-outline\" class=\"icon\" matSuffix></ion-icon>\n                        \n                      </mat-form-field>\n                  \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Email</mat-label>\n                        <input matInput placeholder=\"Enter your name\"  formControlName=\"email\" >\n                        <ion-icon name=\"mail-outline\" class=\"icon\" matSuffix></ion-icon>\n                      </mat-form-field>\n                  \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Course Category</mat-label>\n                        <mat-select formControlName=\"category\" (ngModelChange)=\"getCourseByCategoryClg()\">\n                          <mat-option *ngFor=\"let course of CourseCategoryArr\" [value]=\"course.category_id\"> {{course.name}}</mat-option>\n                          \n                        </mat-select>\n                      </mat-form-field>\n                      \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Course</mat-label>\n                        <mat-select  formControlName=\"course\">\n                            <mat-option  *ngFor=\"let course of CoursesByCatArr\" [value]=\"course.name\">{{course.name}}</mat-option>\n                         \n                        </mat-select>\n                      </mat-form-field>\n                    \n                    \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>College</mat-label>\n                        <mat-select  formControlName=\"college\" >\n                            <mat-option  *ngFor=\"let item of clgdetailArry\" [value]=\"item.id\">{{item.title}}</mat-option>\n                         \n                        </mat-select>\n                        <ion-icon  class=\"icon\" matSuffix></ion-icon>\n                      </mat-form-field>\n                  \n                    \n                     \n\n\n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Entrance Exam</mat-label>\n                        <input type=\"text\"\n                               placeholder=\"Pick an exam\"\n                               aria-label=\"Entrance Exam\"\n                               matInput\n                               formControlName=\"entrence_exam\"\n                               [formControl]=\"entranceExamControl\"\n                               [matAutocomplete]=\"auto\">\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                          <mat-option *ngFor=\"let exam of filteredExams | async\" [value]=\"exam.title\">\n                            {{ exam.title }}\n                          </mat-option>\n                        </mat-autocomplete>\n                      </mat-form-field>\n                      \n                      \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Expected/Secured Rank</mat-label>\n                        <input matInput placeholder=\"Enter your rank\"  formControlName=\"rank\">\n                        <ion-icon  class=\"icon\" matSuffix></ion-icon>\n                      </mat-form-field>\n                  \n                      <mat-form-field class=\"w-75\" appearance=\"outline\">\n                        <mat-label>Expected/Secured Score</mat-label>\n                        <input matInput placeholder=\"Enter your score\" formControlName=\"score\" >\n                        <ion-icon  class=\"icon\" matSuffix></ion-icon>\n                      </mat-form-field>\n                    </form>  \n                    <button mat-raised-button color=\"primary\" class=\"px-12 justify-center mt-4 mb-10\" (click)=\"savCourseApplication()\">Submit</button>\n                  </div>\n\n            </ion-content>\n        </ng-template>\n    </ion-modal>\n    <!-- ion model close -->\n\n</div>\n\n\n <!-- 11 student forum -->\n <div class=\"forumsec\">\n    <ion-row class=\"firstrow\">\n        <ion-col size=\"12\">\n            <h4>{{collegename}}</h4>\n            <h5>Student Forum</h5>\n        </ion-col>\n    </ion-row>\n    <form [formGroup]=\"studentForum\">\n        <div class=\"setdiv\">\n            <ion-row class=\"firstrow\">\n                <ion-col size=\"12\">\n                    <h5>Anything you would want to ask experts?</h5>\n                </ion-col>\n            </ion-row>\n            <ion-input placeholder=\"Write here\" formControlName=\"studentque\">\n            </ion-input>\n            <ion-button (click)=\"postQuestion()\">Submit</ion-button>\n        </div>\n    </form>\n</div>\n<!-- 11 student forum -->\n");

/***/ }),

/***/ 24471:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/cutoffs/cutoffs.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<div class=\"tabbody\">\n \n\n    <div class=\"headcard\" *ngIf=\"collegename || description\">\n      <div class=\"clgdescription\">\n        <h2 *ngIf=\"collegename\">{{collegename}}</h2>\n        <p *ngIf=\"description\" [innerHTML]=\"description\"></p>\n      </div>\n    </div>\n    \n\n\n  <!-- cutoffs table data -->\n\n <div  *ngIf=\"round1 && round1.length > 0\">\n  <ion-card class=\"accard\">\n    <h6>{{collegename}} (AIT) KCET Cutoff</h6>\n    <ion-accordion-group class=\"accordiansnw\">\n      \n      <ion-accordion *ngIf=\"round1 && round1.length > 0\" value=\"first\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>Round-1</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"tbg\" slot=\"content\">\n          <div *ngFor=\"let item of round1\" class=\"divider\">\n            <ion-row *ngFor=\"let data of item\">\n              <ion-col size=\"4\">\n                <b>{{ data.label.charAt(0).toUpperCase() }}{{ data.label.slice(1) }}</b>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div>: {{ data.value }}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-accordion>\n\n      <ion-accordion *ngIf=\"round2 && round2.length > 0\" value=\"second\" class=\"margin-top\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>Round-2</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"tbg\" slot=\"content\">\n          <div *ngFor=\"let item of round2\" class=\"divider\">\n            <ion-row *ngFor=\"let data of item\">\n              <ion-col size=\"4\">\n                <b>{{ data.label.charAt(0).toUpperCase() }}{{ data.label.slice(1) }}</b>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div>: {{ data.value }}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-accordion>\n\n      <ion-accordion *ngIf=\"round3 && round3.length > 0\" value=\"third\" class=\"margin-top\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>Round-3</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"tbg\" slot=\"content\">\n          <div *ngFor=\"let item of round3\" class=\"divider\">\n            <ion-row *ngFor=\"let data of item\">\n              <ion-col size=\"4\">\n                <b>{{ data.label.charAt(0).toUpperCase() }}{{ data.label.slice(1) }}</b>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div>: {{ data.value }}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-accordion>\n    </ion-accordion-group>\n  </ion-card>\n</div> \n\n\n\n\n<div style=\"padding-bottom: 25px;\" *ngIf=\"comedround1 && comedround2.length > 0\">\n  <ion-card class=\"accard\">\n    <h6>{{collegename}} (AIT) COMEDK Cutoff </h6>\n    <ion-accordion-group class=\"accordiansnw\">\n\n      <ion-accordion value=\"second1\" class=\"margin-top\" *ngIf=\"comedround1 && comedround1.length > 0\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>Round-1</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"tbg\" slot=\"content\">\n          <div *ngFor=\"let item of comedround1\" class=\"divider\">\n            <ion-row *ngFor=\"let data of item\">\n              <ion-col size=\"4\">\n                <b>{{data.label.charAt(0).toUpperCase()}}{{data.label.slice(1)}}</b>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div>: {{data.value}}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-accordion>\n\n      <ion-accordion value=\"second2\" class=\"margin-top\" *ngIf=\"comedround2 && comedround2.length > 0\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>Round-2</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"tbg\" slot=\"content\">\n          <div *ngFor=\"let item of comedround2\" class=\"divider\">\n            <ion-row *ngFor=\"let data of item\">\n              <ion-col size=\"4\">\n                <b>{{data.label.charAt(0).toUpperCase()}}{{data.label.slice(1)}}</b>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div>: {{data.value}}</div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-accordion>\n\n    </ion-accordion-group>\n  </ion-card>\n</div>\n\n\n\n  <div class=\"px-12\" style=\"padding-top: 20px;\" *ngIf=\"tableOfContent && tableOfContent.length > 0\" >\n\n    <ion-accordion-group class=\"tblcontent accordians\" style=\"margin-top:-1px ;\">\n      <ion-accordion value=\"first\">\n        <ion-item detail=\"true\" slot=\"header\">\n          <ion-label>\n            <h2>{{collegename}} {{currentYear}}</h2>\n            <h2>Table of content</h2>\n          </ion-label>\n        </ion-item>\n        <div class=\"ion-padding paragraph tabecontent1\" slot=\"content\">\n          <ul *ngFor=\"let item of tableOfContent\">\n            <p>{{collegename}} {{item.title}} </p>\n          </ul>\n        </div>\n      </ion-accordion>\n    </ion-accordion-group>\n  </div>\n\n\n\n\n<!-- popular clg sec -->\n\n<div class=\"thirdsectionpop\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n  <div class=\"HeadTxt\">\n    <h5>Explore popular similar colleges</h5>\n   \n  </div>\n\n  <div>\n    <ion-slides [options]=\"slideOptsnew\">\n\n      <ion-slide *ngFor=\"let item of popularclgarry\">\n        <ion-card class=\"size_setpop\" style=\"margin-left: 0;width: 97%!important;\">\n          <div class=\"imgHeadpop\">\n\n\n            <p class=\"tit_setpop\" (click)=\"getclgid(item.collegeid)\">\n              {{ item.title.length > 30 ? (item.title | slice:0:30) + '...' : item.title }}\n            </p>\n            <img class=\"img_alignpop\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n          </div>\n\n          <p class=\"set_botm\">\n            <ion-icon name=\"location-outline\"></ion-icon>{{item.city}}\n          </p>\n          <p style=\"display: flex; height: 17px;\"> <span class=\"spnpop\"></span>\n            <span class=\"spnn\" *ngIf=\"item.ratings> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n              {{item.ratings}}</span>\n          </p>\n\n          <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n\n\n            <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n              [ngClass]=\"{'shortlisted': isShortlisted(item.collegeid)}\" (click)=\"toggleShortlist(item.collegeid)\">\n              <ion-icon [name]=\"isShortlisted(item.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                [class.active]=\"isShortlisted(item.collegeid)\">\n              </ion-icon>\n            </ion-button>\n\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n              (click)=\"brochure(item.collegeid)\">\n              <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n              Brochure\n            </ion-button>\n            <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n              (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n              Predict Admission\n            </ion-button>\n          </div>\n\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n</div>\n\n\n\n\n\n  <!--  -->\n\n\n\n  <div class=\"ovrallrating mx10\" style= \"padding-top: 20px;\">\n\n    <div *ngIf=\"totalRateCount > 0\">\n    <h5 class=\"headtxt\" style=\"margin-top:-10px ;\">\n      Average rating Of this institude\n    </h5>\n    <div>\n      <h2 class=\"headtxt\">Overall rating <span class=\"sbtxt\">(Out of 5)</span></h2>\n    </div>\n\n    <ion-row class=\"py-12\">\n      <ion-col size=\"2\">\n        <h1>{{totalRateCount}}</h1>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n\n        <p class=\"p\">Based on {{totalReview}} Verified Reviews</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"3\">\n        <span class=\"blutxt\">> 3-4 star</span>\n      </ion-col>\n      <ion-col size=\"7\" class=\"selfcenter\">\n        <mat-progress-bar mode=\"determinate\" [value]=\"three2fourRate\"></mat-progress-bar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span>{{three2fourRate}}%</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <span class=\"blutxt\">> 4-5 star</span>\n      </ion-col>\n      <ion-col size=\"7\" class=\"selfcenter\">\n        <mat-progress-bar mode=\"determinate\" [value]=\"four2fiveRate\"></mat-progress-bar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span>{{four2fiveRate}}%</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <span class=\"blutxt\">> 2-3 star</span>\n      </ion-col>\n      <ion-col size=\"7\" class=\"selfcenter\">\n        <mat-progress-bar mode=\"determinate\" [value]=\"two2threeRate\"></mat-progress-bar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span>{{two2threeRate}}%</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <span class=\"blutxt\">> 1-2 star</span>\n      </ion-col>\n      <ion-col size=\"7\" class=\"selfcenter\">\n        <mat-progress-bar mode=\"determinate\" [value]=\"one2twoRate\"></mat-progress-bar>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span>{{one2twoRate}}%</span>\n      </ion-col>\n    </ion-row>\n    </div>\n\n    <div class=\"populartxt\" *ngIf=\"reviewsssArr && reviewsssArr.length > 0\">\n      <h2>What Students say about {{collegename}} </h2>\n\n\n      <ion-segment [scrollable]=\"true\" class=\"segmentStud\" value=\"tabs1\" (ionChange)=\"studentSay($event)\">\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs1\">\n          <ion-label>Placements</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs2\">\n          <ion-label>Infrastructure </ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs3\">\n          <ion-label>Faculty </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs4\">\n          <ion-label>Hostel </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs5\">\n          <ion-label>Campus </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs6\">\n          <ion-label>Money </ion-label>\n        </ion-segment-button>\n\n      </ion-segment>\n      <div *ngIf=\"segmentStud === 'tabs1'\">\n        <div class=\"tabbody\">\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.placement_desc}}</li>\n          </ul>\n\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs2'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.infrastructure_desc}}</li>\n          </ul>\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs3'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.faculty_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs4'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.hostel_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs5'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.campus_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs6'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.money_desc}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- anonymous -->\n    <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n\n      <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\" class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n            <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n              {{ item.user_name.charAt(0) }}\n            </h1>\n            <ng-template #showDefaultIcon class=\"firstchar\">\n              <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n            </ng-template>  \n\n          \n          </ion-col>\n          <ion-col size=\"7\">\n            <h2>{{item.user_name}}</h2>\n            <p class=\"sbtxt\">{{item.coursename}}</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <div class=\"rates\">\n              <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"ratingBtns\">\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n          </ion-button>\n        </div>\n        <p><span>Placements: </span> {{item.placement_desc}} </p>\n        <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n        <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n        <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n        <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n        <ion-row class=\"thumbicon\">\n          <ion-col class=\"setlikecol\">\n            <div>Was this review helpful </div>\n            \n\n            <div style=\"display: flex;\">\n              <!-- Thumbs Up Icon -->\n              <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n                <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n                  [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n                </ion-icon>\n              </span>\n\n              <!-- Separator -->\n              <span class=\"span\">|</span>\n\n              <!-- Thumbs Down Icon -->\n              <span class=\"span\"\n                (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n                <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                  [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n                </ion-icon>\n              </span>\n            </div>\n\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </div>\n\n    <!-- anonymous -->\n\n\n\n<!-- suited  clg section -->\n\n<div *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n  <div class=\"thirdsection\">\n    <div class=\"HeadTxt\">\n      <h5> Best suited colleges for you</h5>\n      <p>Because you showed interest in {{ selectedCourseName }}\n      </p>\n    </div>\n    <div>\n      <ion-slides [options]=\"slideOptssuited\">\n\n        <ion-slide *ngFor=\"let item of suitclgarry\">\n          <ion-card  class=\"size_setsuited\">\n            <div class=\"imgHead\">\n\n              <p class=\"tit_set\">\n                {{ item.title.length > 23 ? (item.title | slice:0:23) + '...' : item.title }}\n              </p>\n              <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n            </p>\n            <p style=\"display: flex; height: 17px; \"> <span class=\"spnpop\" *ngIf=\"item.courseCount> 0\">Courses - {{item.courseCount}} |</span>\n              <span class=\"spnn\" *ngIf=\"item.rating.totalRateCount> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                {{item.rating.totalRateCount}}</span>\n            </p>\n\n            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n              <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\" (click)=\"toggleShortlist(item.id)\">\n                <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\n                  [class.active]=\"isShortlisted(item.id)\">\n                </ion-icon>\n              </ion-button>\n\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\" \n                (click)=\"brochuresuit(item.id)\">\n                <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure\n              </ion-button>\n              <ion-button shape=\"round\" class= \"capitalize greenbtn\"\n                (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </div>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</div>\n<!-- suiuted clg section closed-->\n\n\n\n\n\n\n    \n<div *ngIf=\"latenpopArr && popularArr.length > 0\">\n  <div class=\"populartxt\">\n    <h2> Latest & Popular Articles </h2>\n  </div>\n      <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"Latest\">\n          <ion-label>Latest</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Popular\">\n          <ion-label>Popular</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <div *ngIf=\"selectedSegment === 'Latest'\">\n\n        <div *ngFor=\"let latest of latenpopArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n              <p class=\"p1\">{{latest.title}}: </p>\n              <p class=\"p2\"> {{latest.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{latest.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"latest.image\">\n            </ion-col>\n          </ion-row>\n\n\n        </div>\n      </div>\n      <div *ngIf=\"selectedSegment === 'Popular'\">\n        <div *ngFor=\"let popular of popularArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n              <p class=\"p1\">{{popular.title}}: </p>\n              <p class=\"p2\">{{popular.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{popular.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"popular.image\">\n            </ion-col>\n          </ion-row>\n\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>");

/***/ }),

/***/ 33975:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/infrastructure/infrastructure.page.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div>\n\n  <div class=\"px-12\">\n    \n\n    <div class=\"HeadTxt\">\n      <h5> Infrastructure/Facilities</h5>\n    </div>\n    <div class=\"infrafacility\" >\n      <ion-list>\n        <ion-item lines=\"none\" *ngFor=\"let facility of facilitiesarr\">\n          <!-- Use Material Icons for Angular Material icons -->\n          <mat-icon *ngIf=\"!facility.icon.startsWith('fa')\">{{ facility.icon }}</mat-icon>\n          \n          <!-- Use Font Awesome for fa-* icons -->\n          <i *ngIf=\"facility.icon.startsWith('fa')\" class=\"fa {{ facility.icon }}\"></i>\n          \n          <span>{{ facility.name }}</span>\n        </ion-item>\n      </ion-list>\n    \n    </div>\n\n    <div>\n\n\n      <div *ngIf=\"infratotalrate\">\n      <h5 class=\"headtxt\">\n        Average rating Of this institude\n      </h5>\n    \n      <div class=\"ovrallrating\">\n      <div>\n        <h2 class=\"headtxt\">Overall Infrastructure Rating <span class=\"sbtxt\">(Out of 5)</span></h2>\n      </div>\n    \n      <ion-row >\n        <ion-col size=\"2\">\n          <h1>{{infratotalrate}}</h1>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n          <p class=\"p\">Based on {{totalReview}} Verified Reviews</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 3-4 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"three2fourRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{three2fourRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 4-5 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"four2fiveRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{four2fiveRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 2-3 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"two2threeRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{two2threeRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 1-2 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"one2twoRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{one2twoRate}}%</span>\n        </ion-col>\n      </ion-row>\n    </div>\n    </div>\n\n\n      <div class=\"populartxt\" *ngIf=\"reviewsssArr && reviewsssArr.length > 0\">\n        <h2>What Students say about {{collegename}} </h2>\n \n  \n      <ion-segment [scrollable]=\"true\" class=\"segmentStud\" value=\"tabs1\" (ionChange)=\"studentSay($event)\">\n  \n        <ion-segment-button class=\"seg-btn\" value=\"tabs1\">\n          <ion-label>Placements</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs2\">\n          <ion-label>Infrastructure </ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs3\">\n          <ion-label>Faculty </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs4\">\n          <ion-label>Hostel </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs5\">\n          <ion-label>Campus </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs6\">\n          <ion-label>Money </ion-label>\n        </ion-segment-button>\n\n      </ion-segment>\n      <div *ngIf=\"segmentStud === 'tabs1'\">\n        <div class=\"tabbody\">\n        <ul>\n          <li *ngFor=\"let item of reviewsssArr\">{{item.placement_desc}}</li>\n        </ul>\n\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs2'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.infrastructure_desc}}</li>\n          </ul>\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs3'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.faculty_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs4'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.hostel_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs5'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.campus_desc}}</li>\n          </ul>\n        </div>\n      </div>\n\n      <div *ngIf=\"segmentStud === 'tabs6'\">\n        <div class=\"tabbody\">\n\n          <ul>\n            <li *ngFor=\"let item of reviewsssArr\">{{item.money_desc}}</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n<!--  -->\n\n<div *ngIf=\"reviewsArry && reviewsArry.length > 0\">\n              \n  <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArry\">\n    <ion-row>\n      <ion-col size=\"2\">\n        <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\"  class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n     \n        <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n          {{ item.user_name.charAt(0) }}\n        </h1>\n        <ng-template #showDefaultIcon class=\"firstchar\">\n          <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n        </ng-template> \n      </ion-col>\n      <ion-col size=\"7\">\n        <h2>{{item.user_name}}</h2>\n        <p class=\"sbtxt\">{{item.coursename}}</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <div class=\"rates\">\n          <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n        </div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ratingBtns\">\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n      </ion-button>\n    </div>\n    <p><span>Placements: </span> {{item.placement_desc}} </p>\n    <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n    <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n    <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n    <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n    <ion-row class=\"thumbicon\">\n      <ion-col class=\"setlikecol\">\n        <div>Was this review helpful </div>\n\n        <div style=\"display: flex;\">\n          <!-- Thumbs Up Icon -->\n          <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n            <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n              [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n            </ion-icon>\n          </span>\n\n          <!-- Separator -->\n          <span class=\"span\">|</span>\n\n          <!-- Thumbs Down Icon -->\n          <span class=\"span\"\n            (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n            <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n              [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n            </ion-icon>\n          </span>\n        </div>\n      \n      \n      </ion-col>\n    </ion-row>\n  </div>\n\n</div>\n<!--  -->\n\n\n\n\n      </div>\n\n     </div>\n  </div>\n\n\n\n\n\n\n\n  <!--  -->\n\n\n\n  \n  <div class=\"px-12\" >\n\n    <div  *ngIf=\"latenpopArr && popularArr.length > 0\">\n      <ion-row >\n        <ion-col size=\"12\">\n          <span style=\" font-weight: 500;font-size: 16px;\"> Latest & Popular Articles </span>\n        </ion-col>\n      </ion-row>\n    \n        <div class=\"mt10\">\n          <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n            <ion-segment-button value=\"Latest\">\n              <ion-label>Latest</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"Popular\">\n              <ion-label>Popular</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n          <div *ngIf=\"selectedSegment === 'Latest'\">\n            <div *ngFor=\"let latest of latenpopArr\">\n              <ion-row  class=\"setrw\">\n                <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n                  <p class=\"p1\">{{latest.title}}: </p>\n                  <p class=\"p2\"> {{latest.post_rate_date}}</p>\n                  <p class=\"p3\">Views : {{latest.views}} </p>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <img [src]=\"latest.image\">\n                </ion-col>\n              </ion-row>\n              </div>\n              \n            </div>\n              <div *ngIf=\"selectedSegment === 'Popular'\">\n                <div *ngFor=\"let popular of popularArr\">\n                  <ion-row class=\"setrw\">\n                    <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n                      <p class=\"p1\">{{popular.title}}: </p>\n                      <p class=\"p2\">{{popular.post_rate_date}}</p>\n                      <p class=\"p3\">Views : {{popular.views}} </p>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                      <img [src]=\"popular.image\">\n                    </ion-col>\n                  </ion-row>\n                  </div>\n</div>\n\n</div>\n</div>\n\n<!--  -->\n\n</div>\n\n\n");

/***/ }),

/***/ 62660:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/news/news.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n\n\n\n  <div class=\"tabbody px-12\">\n   \n\n    <div class=\"ovrallrating\" *ngIf=\"totalRateCount.length > 0\">\n\n      <h5 class=\"headtxt\">\n        Average rating of this institude\n      </h5>\n\n      <div>\n        <h2 class=\"headtxt\">Overall rating <span class=\"sbtxt\">(Out og 5)</span></h2>\n      </div>\n\n      <ion-row class=\"py-12\">\n        <ion-col size=\"2\">\n          <h1>{{totalRateCount}}</h1>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n          <p class=\"p\"></p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 3-4 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{three2fourRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 4-5 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" value=\"20\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{four2fiveRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 2-3 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" value=\"10\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{two2threeRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxtx\">> 1-2 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" value=\"0\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{one2twoRate}}%</span>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"py-12\">\n        <h2 class=\"headtxt\">Component rating <span class=\"sbtxt\">(Out og 5)</span></h2>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"7\">\n          <span>Placements</span>\n        </ion-col>\n        <ion-col size=\"5\">\n          <span class=\"rtvalue\">{{totalPlacementRateCount}}</span>\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"7\">\n          <span>Infrastructure</span>\n        </ion-col>\n        <ion-col size=\"5\">\n          <span class=\"rtvalue\">{{totalInfrastructureRateCount}}</span>\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"7\">\n          <span>Faculty & Course Curriculum</span>\n        </ion-col>\n        <ion-col size=\"5\">\n          <span class=\"rtvalue\">{{totalFacultyRateCount }}</span>\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"7\">\n          <span>Crowed & Campus Life</span>\n        </ion-col>\n        <ion-col size=\"5\">\n          <span class=\"rtvalue\">{{totalCampusRateCount }}</span>\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"7\">\n          <span>Value For Money</span>\n        </ion-col>\n        <ion-col size=\"5\">\n          <span class=\"rtvalue\">{{totalMoneyRateCount}}</span>\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n\n\n      <ion-segment [scrollable]=\"true\" class=\"segmentStud\" value=\"tabs1\" (ionChange)=\"studentSay($event)\">\n\n        <ion-segment-button class=\"seg-btn\" value=\"tabs1\">\n          <ion-label>Placements</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs2\">\n          <ion-label>Infrastructure </ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"seg-btn\" value=\"tabs3\">\n          <ion-label>Faculty </ion-label>\n        </ion-segment-button>\n\n\n      </ion-segment>\n      <div *ngIf=\"segmentStud === 'tabs1'\">\n        <div class=\"tabbody\">\n          <p>{{placement}}</p>\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs2'\">\n        <div class=\"tabbody\">\n          <p>{{infra}}</p>\n        </div>\n      </div>\n      <div *ngIf=\"segmentStud === 'tabs3'\">\n        <div class=\"tabbody\">\n          <p>{{faculty}}</p>\n        </div>\n        <div>\n          <ion-row class=\"vertxt\">\n            <ion-col size=\"6\">\n              <span> Was this helpful?</span>\n              <ion-icon name=\"thumbs-down\"></ion-icon>\n              <ion-icon name=\"thumbs-up\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"3\" class=\"textright\">\n              <span> <ion-icon name=\"share-social-outline\"></ion-icon> Share</span>\n            </ion-col>\n            <ion-col size=\"3\" class=\"textright\">\n              <span> <ion-icon name=\"alert-circle-outline\"></ion-icon> Report</span>\n            </ion-col>\n          </ion-row>\n        </div>\n\n      </div>\n    </div>\n\n\n\n    <!-- review section -->\n\n    <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n\n      <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\"  class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n\n            <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n              {{ item.user_name.charAt(0) }}\n            </h1>\n            <ng-template #showDefaultIcon class=\"firstchar\">\n              <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n            </ng-template>\n\n          </ion-col>\n          <ion-col size=\"7\">\n            <h2>{{item.user_name}}</h2>\n            <p class=\"sbtxt\">{{item.coursename}}</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <div class=\"rates\">\n              <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"ratingBtns\">\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n          </ion-button>\n        </div>\n        <p><span>Placements: </span> {{item.placement_desc}} </p>\n        <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n        <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n        <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n        <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n        <ion-row class=\"thumbicon\">\n          <ion-col class=\"setlikecol\">\n            <div>Was this review helpful </div>\n\n            <div style=\"display: flex;\">\n              <!-- Thumbs Up Icon -->\n              <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n                <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\" [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n                </ion-icon>\n              </span>\n\n              <!-- Separator -->\n              <span class=\"span\">|</span>\n\n              <!-- Thumbs Down Icon -->\n              <span class=\"span\" (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n                <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                  [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n                </ion-icon>\n              </span>\n            </div>\n\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </div>\n\n    <!--review section closed  -->\n\n\n\n  </div>\n\n</div>\n\n\n\n<div>\n\n  <div class=\"thirdsection\" style=\"padding-top:1.5rem\" *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n    <div class=\"HeadTxt\">\n      <h5> Best suited colleges for you</h5>\n      <p>Because you showed interest in {{ selectedCourseName }}</p>\n    </div>\n    <div>\n      <ion-slides [options]=\"slideOptspage\">\n        <ion-slide class=\"slide_set\" *ngFor=\"let item of suitclgarry\">\n          <ion-card class=\"size_set w100\">\n            <div class=\"imgHead\">\n              <p class=\"tit_set\">{{item.title}}</p>\n              <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n            </p>\n            <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n              <ion-icon name=\"star\" class=\"starrate\"></ion-icon><span class=\"spnn\">{{item.rating.totalRateCount}}</span>\n            </p>\n\n\n            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n              <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\" style=\"height: 30px;width: 30px;\">\n                <ion-icon name=\"bookmark-outline\"></ion-icon>\n              </ion-button>\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\">\n                <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brocher\n              </ion-button>\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\">\n                Predict Admission\n              </ion-button>\n            </div>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n\n  </div>\n\n  <!-- photo&videos -->\n  <div *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n    <ion-row>\n\n      <ion-col size=\"12\">\n        <h5 style=\"margin: 0;\">Take a look at Campus</h5>\n      </ion-col>\n    </ion-row>\n    <ion-slides [options]=\"slidepic\">\n      <ion-slide *ngFor=\"let item of clgimgArry\">\n        <ion-card class=\"setpic\">\n          <img class=\"setnoimage\" [src]=\"item.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n        </ion-card>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n\n\n\n  <!-- Articles&events -->\n  <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n    <div>\n      <ion-row class=\"border-y mt-10\">\n\n        <ion-col size=\"12\" class=\"selfcenter\">\n          <span style=\"font-weight: 500;font-size: 18px;\"> Latest & Popular Articles </span>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"px-12\">\n      <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"Latest\">\n          <ion-label>Latest</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Popular\">\n          <ion-label>Popular</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <div *ngIf=\"selectedSegment === 'Latest'\">\n        <div *ngFor=\"let latest of latenpopArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n              <p class=\"p1\">{{latest.title}}: </p>\n              <p class=\"p2\"> {{latest.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{latest.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"latest.image\">\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n      <div *ngIf=\"selectedSegment === 'Popular'\">\n        <div *ngFor=\"let popular of popularArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n              <p class=\"p1\">{{popular.title}}: </p>\n              <p class=\"p2\">{{popular.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{popular.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"popular.image\">\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>");

/***/ }),

/***/ 37232:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/placements/placements.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n\n  <div class=\"px-12\">\n\n    <!-- section-1 -->\n   \n      <div class=\"headcard\">\n      \n\n      <div *ngIf=\"whatnew\" >\n        <p [innerHTML]=\"whatnew\"></p>\n      </div>\n    </div>\n\n\n    <!--closed table of content section -->\n\n\n    <!-- placement report section -->\n    <div>\n\n      <div *ngIf=\"placementdataarry && placementdataarry.length > 0\">\n        <h5>{{collegename}} Placement Report </h5>\n        <p>The Key highlights of {{collegename}} placements are presented below:</p>\n\n        <div style=\"overflow-x: scroll;\">\n          <table style=\"width:100%\">\n            <tr>\n              <th class=\"dblue\">Courses Category</th>\n              <th class=\"dblue\">year</th>\n              <th class=\"dblue\">Median Salary</th>\n              <th class=\"dblue\">No. of Companices Visied</th>\n              <th class=\"dblue\">No. of Student Selected</th>\n              <th class=\"dblue\">No. of Student Placed</th>\n            </tr>\n            <tr *ngFor=\"let item of placementdataarry\">\n              <td>{{item.course_category_name}}</td>\n              <td>{{item.year}}</td>\n              <td>{{item.median_salary}}</td>\n              <td>{{item.no_of_companies_visited}}</td>\n              <td>{{item.no_of_student_selected}}</td>\n              <td>{{item.no_of_students_placed}}</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n      <!--closed placement report section -->\n      <!-- placement Q&A -->\n\n\n\n\n      <!-- Q & Ans section  -->\n      <div class=\"caskqns mt1rem\" *ngIf=\"placementqaarry && placementqaarry.length > 0\">\n        <ion-accordion-group>\n          <ion-row>\n            <ion-col size=\"2\">\n              <img src=\"../../../assets/icon/QandA.png\">\n            </ion-col>\n            <ion-col size=\"10\">\n              <h4 style=\"margin: 0;\">Commonly asked questions</h4>\n              <p style=\"margin: 0;\">on Placement FAQS</p>\n            </ion-col>\n          </ion-row>\n\n          <ion-accordion [value]=\"item.value\" *ngFor=\"let item of placementqaarry\">\n            <ion-item slot=\"header\">\n              <ion-label>Q: {{item.question}} </ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\" [innerHTML]=\"item.answere\"> </div>\n          </ion-accordion>\n\n        </ion-accordion-group>\n      </div>\n\n    </div>\n    <!-- Q & Ans section  closed-->\n    \n\n  </div>\n\n\n  <!-- popular clg section -->\n\n\n  <div class=\"thirdsectionpop\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n    <div class=\"HeadTxt\">\n      <h5>Explore popular similar colleges</h5>\n     \n    </div>\n\n    <div>\n      <ion-slides [options]=\"slideOptsnew\">\n\n        <ion-slide *ngFor=\"let item of popularclgarry\">\n          <ion-card class=\"size_setpop\" style=\"margin-left: 0;width: 97%!important;\">\n            <div class=\"imgHeadpop\">\n\n\n              <p class=\"tit_setpop\" (click)=\"getclgid(item.collegeid)\">\n                {{ item.title.length > 30 ? (item.title | slice:0:30) + '...' : item.title }}\n              </p>\n              <img class=\"img_alignpop\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{item.city}}\n            </p>\n            <p style=\"display: flex; height: 17px;\"> <span class=\"spnpop\"></span>\n              <span class=\"spnn\" *ngIf=\"item.ratings> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                {{item.ratings}}</span>\n            </p>\n\n            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n\n\n              <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                [ngClass]=\"{'shortlisted': isShortlisted(item.collegeid)}\" (click)=\"toggleShortlist(item.collegeid)\">\n                <ion-icon [name]=\"isShortlisted(item.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n                  [class.active]=\"isShortlisted(item.collegeid)\">\n                </ion-icon>\n              </ion-button>\n\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n                (click)=\"brochure(item.collegeid)\">\n                <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n                Brochure\n              </ion-button>\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </div>\n\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n  </div>\n\n\n  \n  <!-- Best popular clg section closed-->\n\n\n  <!-- review section  -->\n  <div class=\"px-12\" *ngIf=\"totalPlacementRate\">\n    <div class=\"ovrallrating\">\n      <h5 class=\"headtxt\" style=\"margin-top:-20px;\">\n        Placement Reviews\n      </h5>\n      <div>\n        <h2 class=\"headtxt\">Overall Placement Rating <span class=\"sbtxt\">(Out Of 5)</span></h2>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"2\">\n          <h1>{{totalPlacementRate}}</h1>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-icon *ngFor=\"let star of getStarArray()\" [name]=\"star\" class=\"starrate\"></ion-icon>\n\n\n          <p class=\"p\">Based on {{totalReview}} Verified Reviews</p>\n        </ion-col>\n      </ion-row>\n     \n\n      <ion-row *ngIf=\"four2fiveRate !== null && four2fiveRate !== undefined\">\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 4-5 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"four2fiveRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{ four2fiveRate }}%</span>\n        </ion-col>\n      </ion-row>\n    \n      <ion-row *ngIf=\"three2fourRate !== null && three2fourRate !== undefined\">\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 3-4 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"three2fourRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{ three2fourRate }}%</span>\n        </ion-col>\n      </ion-row>\n    \n      <ion-row *ngIf=\"two2threeRate !== null && two2threeRate !== undefined\">\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 2-3 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"two2threeRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{ two2threeRate }}%</span>\n        </ion-col>\n      </ion-row>\n    \n      <ion-row *ngIf=\"one2twoRate !== null && one2twoRate !== undefined\">\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 1-2 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"one2twoRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{ one2twoRate }}%</span>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n<!-- review section closed -->\n\n\n\n\n  <div class=\"px-12 pt-12\">\n\n    <!--What Students say about  -->\n<div  *ngIf=\"placementinfo && placementinfo.length > 0\">\n    <div class=\"populartxt\">\n      <h2>What Students say about {{collegename}} </h2>\n    </div>\n\n    <ion-segment [scrollable]=\"true\" class=\"segmentStud\" value=\"tabs1\" (ionChange)=\"studentSay($event)\">\n\n      <ion-segment-button class=\"seg-btn\" value=\"tabs1\">\n        <ion-label>Placements</ion-label>\n      </ion-segment-button>\n      <ion-segment-button class=\"seg-btn\" value=\"tabs2\">\n        <ion-label>Infrastructure </ion-label>\n      </ion-segment-button>\n      <ion-segment-button class=\"seg-btn\" value=\"tabs3\">\n        <ion-label>Faculty </ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div *ngIf=\"segmentStud === 'tabs1'\">\n      <div class=\"tabbody\">\n        <ul>\n          <li *ngFor=\"let item of placementinfo\">\n            {{item.placement_desc}}\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div *ngIf=\"segmentStud === 'tabs2'\">\n      <div class=\"tabbody\">\n        <ul>\n          <li *ngFor=\"let item of placementinfo\">\n            {{item.infrastructure_desc}}\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div *ngIf=\"segmentStud === 'tabs3'\">\n      <div class=\"tabbody\">\n\n        <ul>\n          <li *ngFor=\"let item of placementinfo\">\n            {{item.faculty_desc}}\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n    <!-- closed What Students say about section -->\n\n\n    <!-- anonymous section -->\n    <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n              \n      <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\"  class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n            <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n              {{ item.user_name.charAt(0) }}\n            </h1>\n            <ng-template #showDefaultIcon class=\"firstchar\">\n              <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n            </ng-template>  \n\n        \n          </ion-col>\n          <ion-col size=\"7\">\n            <h2>{{item.user_name}}</h2>\n            <p class=\"sbtxt\">{{item.coursename}}</p>\n          </ion-col>\n          <ion-col size=\"3\">\n            <div class=\"rates\">\n              <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"ratingBtns\">\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n          </ion-button>\n          <ion-button fill=\"outline\" size=\"small\">\n            <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n          </ion-button>\n        </div>\n        <p><span>Placements: </span> {{item.placement_desc}} </p>\n        <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n        <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n        <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n        <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n        <ion-row class=\"thumbicon\">\n          <ion-col class=\"setlikecol\">\n            <div>Was this review helpful </div>\n\n            <div style=\"display: flex;\">\n              <!-- Thumbs Up Icon -->\n              <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n                <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n                  [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n                </ion-icon>\n              </span>\n\n              <!-- Separator -->\n              <span class=\"span\">|</span>\n\n              <!-- Thumbs Down Icon -->\n              <span class=\"span\"\n                (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n                <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                  [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n                </ion-icon>\n              </span>\n            </div>\n          \n          </ion-col>\n        </ion-row>\n      </div>\n  \n  </div>\n\n    <!--closed anonymous  -->\n\n  </div>\n\n\n  <!-- suited  clg section -->\n\n  <div *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n    <div class=\"thirdsection\">\n      <div class=\"HeadTxt\">\n        <h5> Best suited colleges for you</h5>\n        <p>Because you showed interest in {{ selectedCourseName }}\n        </p>\n      </div>\n      <div>\n        <ion-slides [options]=\"slideOptssuited\">\n\n          <ion-slide *ngFor=\"let item of suitclgarry\">\n            <ion-card  class=\"size_setsuited\">\n              <div class=\"imgHead\">\n\n                <p class=\"tit_set\">\n                  {{ item.title.length > 23 ? (item.title | slice:0:23) + '...' : item.title }}\n                </p>\n                <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n              </div>\n\n              <p class=\"set_botm\">\n                <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n              </p>\n              <p style=\"display: flex; height: 17px; \"> <span class=\"spnpop\" *ngIf=\"item.courseCount> 0\">Courses - {{item.courseCount}} |</span>\n                <span class=\"spnn\" *ngIf=\"item.rating.totalRateCount> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon>\n                  {{item.rating.totalRateCount}}</span>\n              </p>\n\n              <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n                <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\"\n                  [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\" (click)=\"toggleShortlist(item.id)\">\n                  <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\n                    [class.active]=\"isShortlisted(item.id)\">\n                  </ion-icon>\n                </ion-button>\n\n                <ion-button shape=\"round\" class=\"capitalize greenbtn\" \n                  (click)=\"brochuresuit(item.id)\">\n                  <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure\n                </ion-button>\n                <ion-button shape=\"round\" class= \"capitalize greenbtn\"\n                  (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                  Predict Admission\n                </ion-button>\n              </div>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n  </div>\n  <!-- suiuted clg section closed-->\n\n\n \n  <div class=\"mx10\">\n\n\n <!-- clg photo & videos section -->\n    <div *ngIf=\"clgimgArry && clgimgArry.length > 0\">\n      <h5>Take a look at Campus</h5>\n      <ion-slides [options]=\"slidepic\">\n        <ion-slide *ngFor=\"let item of clgimgArry\">\n          <ion-card class=\"setpic\">\n            <img [src]=\"item.image\">\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n\n\n\n\n    <!-- latest&popular section -->\n\n    <div  *ngIf=\"latenpopArr && popularArr.length > 0\">\n      <ion-row class=\"border-y\">\n       \n        <ion-col size=\"12\" class=\"selfcenter\">\n          <span style=\"font-weight: 500;font-size: 18px;\"> Latest & Popular Articles </span>\n        </ion-col>\n      </ion-row>\n    \n\n    <div style=\"margin-top:16px;\">\n      <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"Latest\">\n          <ion-label>Latest</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Popular\">\n          <ion-label>Popular</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <div *ngIf=\"selectedSegment === 'Latest'\">\n        <div *ngFor=\"let latest of latenpopArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n              <p class=\"p1\">{{latest.title}}: </p>\n              <p class=\"p2\"> {{latest.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{latest.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"latest.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </ion-col>\n          </ion-row>\n\n\n        </div>\n      </div>\n      <div *ngIf=\"selectedSegment === 'Popular'\">\n        <div *ngFor=\"let popular of popularArr\">\n          <ion-row class=\"setrw\">\n            <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n              <p class=\"p1\">{{popular.title}}: </p>\n              <p class=\"p2\">{{popular.post_rate_date}}</p>\n              <p class=\"p3\">Views : {{popular.views}} </p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <img [src]=\"popular.image\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </ion-col>\n          </ion-row>\n\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  </div>\n\n</div>");

/***/ }),

/***/ 72809:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/questionans/questionans.page.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div class=\"HeadTxt px-12\">\n  <h5 class=\"heading\"> {{collegename}} <span> </span></h5>\n  \n</div>\n\n\n<div class=\"px-12\">\n  <ion-segment [scrollable]=\"true\" value=\"Questions\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"Questions\">\n      <ion-label>Questions</ion-label>\n    </ion-segment-button>\n    \n    <ion-segment-button value=\"Unanswered\">\n      <ion-label>Unanswered</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n \n    <div *ngIf=\"selectedSegment === 'Questions'\" class=\"mx-10\">\n\n      <div *ngIf=\"!ansArry || ansArry.length === 0\" class=\"no-data-msg\">\n        No questions or answers found.\n      </div>\n      \n      <ion-card *ngFor=\"let item of ansArry;\"  class=\"qcard\">\n        <ion-card-header>\n          <ion-card-title>{{item.question}}</ion-card-title>\n          <span>{{item.QuestionFollowCount}} Follower -  {{item.views}} views</span>\n        </ion-card-header>\n        \n        <ion-row class=\"px-12\">\n          <ion-col size=\"2\">\n            <h1 class=\"firctchar\">{{ item.fullname?.charAt(0) || '' }}</h1>\n          </ion-col>\n          <ion-col size=\"6\">\n<h2>{{item.fullname}}</h2>\n           \n          </ion-col>\n          <ion-col size=\"4\">\n                        <div class=\"timeline\">\n              <ion-icon name=\"time-outline\"></ion-icon>{{item.question_asked}} </div>\n          </ion-col>\n        </ion-row>\n        <ion-card-content *ngFor=\"let answer of item.Answeres | slice:0:1\">\n          {{ answer.answer }}\n        \n          <ion-row>\n            <ion-col size=\"6\">\n              <div class=\"cbottom\">\n                <div class=\"likes\">\n                  <!-- Like Icon -->\n                  <ion-icon \n                    name=\"thumbs-up\" \n                    [ngClass]=\"{'blue-icon': answer.isLiked}\" \n                    (click)=\"toggleLikeDislike(answer, 'like')\">\n                  </ion-icon>\n                  <!-- Ensure likeCount is displayed properly and defaults to 0 -->\n                  <span>{{ answer.like || 0 }}</span>\n        \n                  <!-- Dislike Icon -->\n                  <ion-icon \n                    name=\"thumbs-down\" \n                    [ngClass]=\"{'blue-icon': answer.isDisliked}\" \n                    (click)=\"toggleLikeDislike(answer, 'dislike')\">\n                  </ion-icon>\n                  <!-- Ensure dislikeCount is displayed properly and defaults to 0 -->\n                  <span>{{ answer.dis_like || 0 }}</span>\n                </div>\n              </div>\n            </ion-col>\n        \n            <ion-col size=\"6\">\n              <div *ngIf=\"!item.isFollowing\" class=\"botomtxt\" (click)=\"toggleFollow(item)\">\n                Follow <ion-icon name=\"share-social\"></ion-icon>\n              </div>\n              <div *ngIf=\"item.isFollowing\" class=\"botomtxt\" (click)=\"toggleFollow(item)\">\n                UnFollow <ion-icon name=\"share-social\"></ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n        \n      </ion-card>\n    </div>\n\n\n\n    \n    <div *ngIf=\"selectedSegment === 'Unanswered'\" class=\"mx-10\">\n      <ion-card *ngFor=\"let item of unansArry;\" class=\"qcard\">\n        <ion-card-header>\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-card-title>{{item.question}}</ion-card-title>\n          <span class=\"mt-6\">{{item.QuestionFollowCount}} Follower - {{item.views}} Views</span>\n            </ion-col>\n            <ion-col size=\"4\">\n              \n          <div *ngIf=\"!item.isFollowing\" class=\"botomtxt\" (click)=\"toggleFollow(item)\">\n            Follow <ion-icon name=\"share-social\"></ion-icon>\n          </div>\n        \n          <!-- Unfollow Button -->\n          <div *ngIf=\"item.isFollowing\" class=\"botomtxt\" (click)=\"toggleFollow(item)\">\n            UnFollow <ion-icon name=\"share-social\"></ion-icon>\n          </div>\n            </ion-col>\n          </ion-row>\n\n        </ion-card-header>\n      </ion-card>\n    </div>\n</div>\n\n\n\n\n\n<!-- 11 student forum -->\n<div class=\"forumsec\">\n  <ion-row class=\"firstrow\">\n      <ion-col size=\"12\">\n          <h4>{{collegename}}</h4>\n          <h5>Student Forum</h5>\n      </ion-col>\n  </ion-row>\n  <form [formGroup]=\"studentForum\">\n      <div class=\"setdiv\">\n          <ion-row class=\"firstrow\">\n              <ion-col size=\"12\">\n                  <h5>Anything you would want to ask experts?</h5>\n              </ion-col>\n          </ion-row>\n          <ion-input placeholder=\"Write here\" formControlName=\"studentque\">\n          </ion-input>\n          <ion-button (click)=\"postQuestion()\">Submit</ion-button>\n      </div>\n  </form>\n</div>\n<!-- 11 student forum -->");

/***/ }),

/***/ 55351:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/reviews/reviews.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <div class=\"tabbody px-12\">\n\n\n\n    <div class=\"ovrallrating\">\n\n\n\n      <div *ngIf=\"totalRateCount !== null && totalRateCount !== undefined && \n             four2fiveRate !== null && four2fiveRate !== undefined &&\n             three2fourRate !== null && three2fourRate !== undefined &&\n             two2threeRate !== null && two2threeRate !== undefined &&\n             one2twoRate !== null && one2twoRate !== undefined\">\n        <h5 class=\"headtxt\">\n          Average rating of this institute\n        </h5>\n        <div>\n          <h2 class=\"headtxt\">Overall rating <span class=\"sbtxt\">(Out of 5)</span></h2>\n        </div>\n\n        <ion-row class=\"py-12\">\n          <ion-col size=\"2\">\n            <h1>{{ totalRateCount }}</h1>\n          </ion-col>\n          <ion-col size=\"10\">\n            <ion-icon *ngFor=\"let star of getStarArray(totalRateCount)\" [name]=\"star\" class=\"starrate\"></ion-icon>\n            <p class=\"p\">Based on {{ totalReview }} Verified Reviews</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"four2fiveRate !== null && four2fiveRate !== undefined\">\n          <ion-col size=\"3\">\n            <span class=\"blutxt\">> 4-5 star</span>\n          </ion-col>\n          <ion-col size=\"7\" class=\"selfcenter\">\n            <mat-progress-bar mode=\"determinate\" [value]=\"four2fiveRate\"></mat-progress-bar>\n          </ion-col>\n          <ion-col size=\"2\">\n            <span>{{ four2fiveRate }}%</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"three2fourRate !== null && three2fourRate !== undefined\">\n          <ion-col size=\"3\">\n            <span class=\"blutxt\">> 3-4 star</span>\n          </ion-col>\n          <ion-col size=\"7\" class=\"selfcenter\">\n            <mat-progress-bar mode=\"determinate\" [value]=\"three2fourRate\"></mat-progress-bar>\n          </ion-col>\n          <ion-col size=\"2\">\n            <span>{{ three2fourRate }}%</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"two2threeRate !== null && two2threeRate !== undefined\">\n          <ion-col size=\"3\">\n            <span class=\"blutxt\">> 2-3 star</span>\n          </ion-col>\n          <ion-col size=\"7\" class=\"selfcenter\">\n            <mat-progress-bar mode=\"determinate\" [value]=\"two2threeRate\"></mat-progress-bar>\n          </ion-col>\n          <ion-col size=\"2\">\n            <span>{{ two2threeRate }}%</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"one2twoRate !== null && one2twoRate !== undefined\">\n          <ion-col size=\"3\">\n            <span class=\"blutxt\">> 1-2 star</span>\n          </ion-col>\n          <ion-col size=\"7\" class=\"selfcenter\">\n            <mat-progress-bar mode=\"determinate\" [value]=\"one2twoRate\"></mat-progress-bar>\n          </ion-col>\n          <ion-col size=\"2\">\n            <span>{{ one2twoRate }}%</span>\n          </ion-col>\n        </ion-row>\n      </div>\n\n\n\n\n\n\n      <div class=\"py-12\">\n\n\n        <!-- Check if any rating count is null -->\n        <ng-container\n          *ngIf=\"!totalPlacementRateCount && !totalInfrastructureRateCount && !totalFacultyRateCount && !totalCampusRateCount && !totalMoneyRateCount; else ratingsContent\">\n          <p></p>\n        </ng-container>\n\n        <ng-template #ratingsContent>\n          <h2 class=\"headtxt\">Component rating <span class=\"sbtxt\">(Out of 5)</span></h2>\n          <ion-row>\n            <ion-col size=\"5\">\n              <span>Placements</span>\n            </ion-col>\n            <ion-col size=\"7\">\n              <span class=\"rtvalue\">{{totalPlacementRateCount}}</span>\n              <ion-icon *ngFor=\"let star of getStarArray(totalPlacementRateCount)\" [name]=\"star\"\n                class=\"starrate\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <span>Infrastructure</span>\n            </ion-col>\n            <ion-col size=\"7\">\n              <span class=\"rtvalue\">{{totalInfrastructureRateCount}}</span>\n              <ion-icon *ngFor=\"let star of getStarArray(totalInfrastructureRateCount)\" [name]=\"star\"\n                class=\"starrate\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <span>Faculty & Course Curriculum</span>\n            </ion-col>\n            <ion-col size=\"7\">\n              <span class=\"rtvalue\">{{totalFacultyRateCount}}</span>\n              <ion-icon *ngFor=\"let star of getStarArray(totalFacultyRateCount)\" [name]=\"star\"\n                class=\"starrate\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <span>Crowd & Campus Life</span>\n            </ion-col>\n            <ion-col size=\"7\">\n              <span class=\"rtvalue\">{{totalCampusRateCount}}</span>\n              <ion-icon *ngFor=\"let star of getStarArray(totalCampusRateCount)\" [name]=\"star\"\n                class=\"starrate\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"5\">\n              <span>Value For Money</span>\n            </ion-col>\n            <ion-col size=\"7\">\n              <span class=\"rtvalue\">{{totalMoneyRateCount}}</span>\n              <ion-icon *ngFor=\"let star of getStarArray(totalMoneyRateCount)\" [name]=\"star\"\n                class=\"starrate\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ng-template>\n      </div>\n\n\n\n\n      <div *ngIf=\"reviewsssArr && reviewsssArr.length > 0\">\n        <ion-segment [scrollable]=\"true\" class=\"segmentStud\" value=\"tabs1\" (ionChange)=\"studentSay($event)\">\n\n          <ion-segment-button class=\"seg-btn\" value=\"tabs1\">\n            <ion-label>Placements</ion-label>\n          </ion-segment-button>\n          <ion-segment-button class=\"seg-btn\" value=\"tabs2\">\n            <ion-label>Infrastructure </ion-label>\n          </ion-segment-button>\n          <ion-segment-button class=\"seg-btn\" value=\"tabs3\">\n            <ion-label>Faculty </ion-label>\n          </ion-segment-button>\n\n          <ion-segment-button class=\"seg-btn\" value=\"tabs4\">\n            <ion-label>Hostel </ion-label>\n          </ion-segment-button>\n\n          <ion-segment-button class=\"seg-btn\" value=\"tabs5\">\n            <ion-label>Campus </ion-label>\n          </ion-segment-button>\n\n          <ion-segment-button class=\"seg-btn\" value=\"tabs6\">\n            <ion-label>Money </ion-label>\n          </ion-segment-button>\n\n        </ion-segment>\n        <div *ngIf=\"segmentStud === 'tabs1'\">\n          <div class=\"tabbody\">\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.placement_desc}}</li>\n            </ul>\n\n          </div>\n        </div>\n        <div *ngIf=\"segmentStud === 'tabs2'\">\n          <div class=\"tabbody\">\n\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.infrastructure_desc}}</li>\n            </ul>\n          </div>\n        </div>\n        <div *ngIf=\"segmentStud === 'tabs3'\">\n          <div class=\"tabbody\">\n\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.faculty_desc}}</li>\n            </ul>\n          </div>\n        </div>\n\n        <div *ngIf=\"segmentStud === 'tabs4'\">\n          <div class=\"tabbody\">\n\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.hostel_desc}}</li>\n            </ul>\n          </div>\n        </div>\n\n        <div *ngIf=\"segmentStud === 'tabs5'\">\n          <div class=\"tabbody\">\n\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.campus_desc}}</li>\n            </ul>\n          </div>\n        </div>\n\n        <div *ngIf=\"segmentStud === 'tabs6'\">\n          <div class=\"tabbody\">\n\n            <ul>\n              <li *ngFor=\"let item of reviewsssArr\">{{item.money_desc}}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- review section  -->\n      <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n\n        <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n          <ion-row>\n            <ion-col size=\"2\">\n              <!-- <h1 *ngIf=\"item.user_name?.charAt(0)\" class=\"firctchar\">{{item.user_name.charAt(0)}}</h1> -->\n           \n              <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n                {{ item.user_name.charAt(0) }}\n              </h1>\n              <ng-template #showDefaultIcon class=\"firstchar\">\n                <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n              </ng-template>  \n\n           \n            </ion-col>\n            <ion-col size=\"7\">\n              <h2>{{item.user_name}}</h2>\n              <p class=\"sbtxt\">{{item.coursename}}</p>\n            </ion-col>\n            <ion-col size=\"3\">\n              <div class=\"rates\">\n                <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n              </div>\n            </ion-col>\n          </ion-row>\n          <div class=\"ratingBtns\">\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n            </ion-button>\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n            </ion-button>\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n            </ion-button>\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n            </ion-button>\n            <ion-button fill=\"outline\" size=\"small\">\n              <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n            </ion-button>\n          </div>\n          <p><span>Placements: </span> {{item.placement_desc}} </p>\n          <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n          <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n          <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n          <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n          <ion-row class=\"thumbicon\">\n            <ion-col class=\"setlikecol\">\n              <div>Was this review helpful </div>\n\n              <div style=\"display: flex;\">\n                <!-- Thumbs Up Icon -->\n                <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n                  <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n                    [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n                  </ion-icon>\n                </span>\n\n                <!-- Separator -->\n                <span class=\"span\">|</span>\n\n                <!-- Thumbs Down Icon -->\n                <span class=\"span\"\n                  (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n                  <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n                    [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n                  </ion-icon>\n                </span>\n              </div>\n\n\n            </ion-col>\n          </ion-row>\n        </div>\n\n      </div>\n\n      <!-- end -->\n\n    </div>\n  </div>\n\n\n\n  <!--  -->\n\n\n  <div class=\"thirdsectionpop\" *ngIf=\"popularclgarry && popularclgarry.length > 0\">\n    <div class=\"HeadTxt\">\n      <h5>Explore popular similar colleges</h5>\n     \n    </div>\n\n    <div>\n      <ion-slides [options]=\"slideOptsnew\">\n       \n        <ion-slide  *ngFor=\"let item of popularclgarry\">\n          <ion-card class=\"size_setpop\" style=\"margin-left: 0;width: 97%!important;\">\n            <div class=\"imgHeadpop\">\n            \n             \n                <p class=\"tit_setpop\" (click)=\"getclgid(item.collegeid)\">\n                {{ item.title.length > 30 ? (item.title | slice:0:30) + '...' : item.title }}\n              </p>\n              <img class=\"img_alignpop\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n\n            <p class=\"set_botm\">\n              <ion-icon name=\"location-outline\"></ion-icon>{{item.city}}\n            </p>\n            <p style=\"display: flex;\"> <span class=\"spnpop\"></span>\n              <span class=\"spnn\" *ngIf=\"item.rating> 0\"><ion-icon name=\"star\" class=\"starrate\"></ion-icon> {{item.ratings}}</span>\n            </p>\n\n            <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n             \n             \n\n            <ion-button fill=\"outline\" shape=\"round\" class=\"boomark\" [ngClass]=\"{'shortlisted': isShortlisted(item.collegeid)}\"\n            (click)=\"toggleShortlist(item.collegeid)\">\n            <ion-icon [name]=\"isShortlisted(item.collegeid) ? 'bookmark' : 'bookmark-outline'\"\n              [class.active]=\"isShortlisted(item.collegeid)\">\n            </ion-icon>\n          </ion-button>\n\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\" style=\"margin-left:2px; margin-right:2px\"\n                (click)=\"brochure(item.collegeid)\">\n                <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon>\n                Brochure\n              </ion-button>\n              <ion-button shape=\"round\" class=\"capitalize greenbtn\"\n                (click)=\"clgpredict(item.collegeid,item.CatId,item.subCatName)\">\n                Predict Admission\n              </ion-button>\n            </div>\n\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n  </div>\n\n\n\n\n\n  <div *ngIf=\"suitclgarry && suitclgarry.length > 0\">\n    <div class=\"thirdsection\">\n      <div class=\"HeadTxt\">\n        <h5> Best suited colleges for you</h5>\n        <p>Because you showed interest in {{ selectedCourseName }}\n        </p>\n      </div>\n      <div>\n        <ion-slides [options]=\"slideOptssuited\">\n\n          <ion-slide *ngFor=\"let item of suitclgarry\">\n            <ion-card  class=\"size_setpop\">\n              <div class=\"imgHead\">\n\n                <p class=\"tit_set\">\n                  {{ item.title.length > 23 ? (item.title | slice:0:23) + '...' : item.title }}\n                </p>\n                <img class=\"img_align\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n              </div>\n\n              <p class=\"set_botm\">\n                <ion-icon name=\"location-outline\"></ion-icon>{{item.cityname}}\n              </p>\n              <p style=\"display: flex;\"> <span class=\"spn\">{{item.courseCount}} courses</span>\n                <ion-icon name=\"star\" class=\"starrate\"></ion-icon><span\n                  class=\"spnn\">{{item.rating.totalRateCount}}</span>\n              </p>\n\n              <div class=\"footerpart\" style=\"display: flex;align-items: center;\">\n\n                <ion-button fill=\"outline\" shape=\"round\" class=\"bookmark\"\n                  [ngClass]=\"{'shortlisted': isShortlisted(item.id)}\" (click)=\"toggleShortlist(item.id)\">\n                  <ion-icon [name]=\"isShortlisted(item.id) ? 'bookmark' : 'bookmark-outline'\"\n                    [class.active]=\"isShortlisted(item.id)\">\n                  </ion-icon>\n                </ion-button>\n\n                <ion-button shape=\"round\" class=\"capitalize greenbtn\" \n                  (click)=\"brochuresuit(item.id)\">\n                  <ion-icon name=\"arrow-down-circle\" class=\"mr-6\"></ion-icon> Brochure\n                </ion-button>\n                <ion-button shape=\"round\" class= \"capitalize greenbtn\"\n                  (click)=\"clgpredict(item.id,item.CatId,item.subCatName)\">\n                  Predict Admission\n                </ion-button>\n              </div>\n            </ion-card>\n          </ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n  <!-- news & update -->\n  <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n    <ion-row class=\"border-y\">\n\n      <ion-col size=\"12\" class=\"selfcenter\">\n        <span style=\"font-weight: 500;font-size: 18px;\"> Latest & Popular Articles </span>\n      </ion-col>\n    </ion-row>\n  \n\n  <div class=\"mx10\">\n    <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button value=\"Latest\">\n        <ion-label>Latest</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"Popular\">\n        <ion-label>Popular</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <div *ngIf=\"selectedSegment === 'Latest'\" class=\"mt10\">\n      <div *ngFor=\"let latest of latenpopArr\">\n        <ion-row class=\"setrw mb5 mt6 pb0\">\n          <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n            <p class=\"p1\">{{latest.title}}: </p>\n            <p class=\"p2\"> {{latest.post_rate_date}}</p>\n            <p class=\"p3\">Views : {{latest.views}} </p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <img [src]=\"latest.image\">\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div *ngIf=\"selectedSegment === 'Popular'\">\n      <div *ngFor=\"let popular of popularArr\">\n        <ion-row class=\"setrw mb5 mt6 pb0\">\n          <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n            <p class=\"p1\">{{popular.title}}: </p>\n            <p class=\"p2\">{{popular.post_rate_date}}</p>\n            <p class=\"p3\">Views : {{popular.views}} </p>\n          </ion-col>\n          <ion-col size=\"4\">\n            <img [src]=\"popular.image\">\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n</div>");

/***/ }),

/***/ 94806:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgdetails/scolarship/scolarship.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div>\n  <div class=\"px-12\">\n    <div>\n    <h5>{{collegename}}</h5>\n    <p [innerHTML]=\"scholarshipdata\"></p>\n    </div> \n\n     \n\n    <div>\n    \n      <div class=\"ovrallrating\" *ngIf=\"totalRateCount\">\n      <div>\n        <h2 class=\"headtxt\">Overall rating <span class=\"sbtxt\">(Out of 5)</span></h2>\n      </div>\n      <ion-row>\n        <ion-col size=\"2\">\n          <h1>{{totalRateCount}}</h1>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-icon *ngFor=\"let star of getStarIcons().full\" name=\"star\" class=\"starrate\"></ion-icon>\n          <ion-icon *ngFor=\"let star of getStarIcons().half\" name=\"star-half\" class=\"starrate\"></ion-icon>\n          <ion-icon *ngFor=\"let star of getStarIcons().empty\" name=\"star-outline\" class=\"starrate\"></ion-icon>\n          <p class=\"p\">Based on {{totalReview}} Verified Reviews</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 3-4 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"three2fourRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{three2fourRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 4-5 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"four2fiveRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{four2fiveRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 2-3 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"two2threeRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{two2threeRate}}%</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"3\">\n          <span class=\"blutxt\">> 1-2 star</span>\n        </ion-col>\n        <ion-col size=\"7\" class=\"selfcenter\">\n          <mat-progress-bar mode=\"determinate\" [value]=\"one2twoRate\"></mat-progress-bar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <span>{{one2twoRate}}%</span>\n        </ion-col>\n      </ion-row>\n    \n      </div> \n\n    </div>\n\n  </div>\n\n\n\n\n <!-- review section -->\n\n <div *ngIf=\"reviewsArr && reviewsArr.length > 0\">\n              \n  <div class=\"cardcust userReview\" *ngFor=\"let item of reviewsArr\">\n    <ion-row>\n      <ion-col size=\"2\">\n       \n     \n        <h1 *ngIf=\"item?.user_name; else showDefaultIcon\" class=\"firstchar\">\n          {{ item.user_name.charAt(0) }}\n        </h1>\n        <ng-template #showDefaultIcon class=\"firstchar\">\n          <ion-icon name=\"person\" style=\"border: 10px solid #b74949;\"></ion-icon>\n        </ng-template>  \n\n     \n      </ion-col>\n      <ion-col size=\"7\">\n        <h2>{{item.user_name}}</h2>\n        <p class=\"sbtxt\">{{item.coursename}}</p>\n      </ion-col>\n      <ion-col size=\"3\">\n        <div class=\"rates\">\n          <ion-icon name=\"shield-checkmark\"></ion-icon> Verified\n        </div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ratingBtns\">\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.placement_rate}} Placements\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.infrastructure_rate}} Infrastructure\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.faculty_rate}} Faculty\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.campus_rate}} Campus life\n      </ion-button>\n      <ion-button fill=\"outline\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"star\"></ion-icon>{{item.money_rate}} Value For Money\n      </ion-button>\n    </div>\n    <p><span>Placements: </span> {{item.placement_desc}} </p>\n    <p><span>Infrastructure: </span> {{item.infrastructure_desc}}.</p>\n    <p><span>Faculty: </span> {{item.faculty_desc}}</p>\n    <p><span>Campus Life: </span> {{item.campus_desc}}</p>\n    <p><span>Value For Money: </span> {{item.money_desc}}</p>\n\n    <ion-row class=\"thumbicon\">\n      <ion-col class=\"setlikecol\">\n      \n        <div>Was this review helpful </div>\n\n        <div style=\"display: flex;\">\n          <!-- Thumbs Up Icon -->\n          <span class=\"span\" (click)=\"isThumbsUpClicked = !isThumbsUpClicked; isThumbsDownClicked = false;\">\n            <ion-icon name=\"thumbs-up\" class=\"icon thumbs-up\"\n              [style.color]=\"isThumbsUpClicked ? 'blue' : 'black'\">\n            </ion-icon>\n          </span>\n\n          <!-- Separator -->\n          <span class=\"span\">|</span>\n\n          <!-- Thumbs Down Icon -->\n          <span class=\"span\"\n            (click)=\"isThumbsDownClicked = !isThumbsDownClicked; isThumbsUpClicked = false;\">\n            <ion-icon name=\"thumbs-down\" class=\"icon thumbs-down\"\n              [style.color]=\"isThumbsDownClicked ? 'red' : 'black'\">\n            </ion-icon>\n          </span>\n        </div>\n      \n      </ion-col>\n    </ion-row>\n  </div>\n\n</div>\n\n    <!--review section closed  -->\n\n\n  \n\n\n\n    <div class=\"px-12 pt-12\">\n\n    <div *ngIf=\"latenpopArr && popularArr.length > 0\">\n      <ion-row class=\"ion-margin\">\n      \n        <ion-col size=\"12\">\n          <!-- <span>{{collegename}}</span><br> -->\n          <span style=\" font-weight: 500;font-size: 18px;\"> Latest & Popular Articles </span>\n        </ion-col>\n      </ion-row>\n  \n\n        <div style=\"padding-top: 0;\">\n          <ion-segment [scrollable]=\"true\" value=\"Latest\" (ionChange)=\"segmentChanged($event)\">\n            <ion-segment-button value=\"Latest\">\n              <ion-label>Latest</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"Popular\">\n              <ion-label>Popular</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n          <div *ngIf=\"selectedSegment === 'Latest'\">\n            <div *ngFor=\"let latest of latenpopArr\">\n              <ion-row  class=\"setrw\">\n                <ion-col size=\"8\" (click)=\"articlesdetails(latest.id)\">\n                  <p class=\"p1\">{{latest.title}}: </p>\n                  <p class=\"p2\"> {{latest.post_rate_date}}</p>\n                  <p class=\"p3\">Views : {{latest.views}} </p>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <img [src]=\"latest.image\">\n                </ion-col>\n              </ion-row>\n        \n             \n              </div>\n          </div>\n            <div *ngIf=\"selectedSegment === 'Popular'\">\n              <div *ngFor=\"let popular of popularArr\">\n                <ion-row class=\"setrw\">\n                  <ion-col size=\"8\" (click)=\"articlesdetails(popular.id)\">\n                    <p class=\"p1\">{{popular.title}}: </p>\n                    <p class=\"p2\">{{popular.post_rate_date}}</p>\n                    <p class=\"p3\">Views : {{popular.views}} </p>\n                  </ion-col>\n                  <ion-col size=\"4\">\n                    <img [src]=\"popular.image\">\n                  </ion-col>\n                </ion-row>\n                </div>\n              </div>\n          \n        </div>\n      </div>\n\n\n  \n  </div>\n  \n</div>");

/***/ }),

/***/ 51733:
/*!******************************************************************!*\
  !*** ./src/app/pages/clgdetails/admissions/admissions.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th {\n  background: aliceblue;\n  font-weight: 500;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin: 14px 0px;\n}\n\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n\n.caskqns {\n  margin-bottom: 14px;\n}\n\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n\n.filter-btn ion-icon {\n  vertical-align: middle;\n}\n\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\n\n.datevnt {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.datevnt ion-icon {\n  font-size: 18px;\n  vertical-align: sub;\n}\n\n.datevnt .blutxt {\n  color: #0081dc;\n  text-align: right;\n}\n\n.iconfix {\n  font-size: 20px;\n  vertical-align: text-top;\n}\n\n.blutxt {\n  color: #0081dc;\n}\n\n.settitl {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0;\n}\n\n.setnotification {\n  width: 360px;\n  height: 370px;\n}\n\n.setnotification .settitle {\n  text-align: center;\n  background: #a4affe;\n  position: relative;\n  top: -14px;\n  height: 35px;\n}\n\n.setnotification p {\n  color: #0083dc;\n}\n\n.setcrd {\n  width: 211px;\n  height: 197px;\n}\n\n.star-icon {\n  color: #e5b60c;\n}\n\n.dticon {\n  color: #11c918;\n}\n\n.thirdsection.mt {\n  margin-top: 1rem;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin-bottom: 2px;\n  margin-top: 2px;\n}\n\n.boomark {\n  --color: gray;\n  --border-color: #cfcfcf;\n  font-size: 12px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.setpic {\n  width: 100%;\n  max-height: 150px;\n  overflow: hidden;\n  margin: 6px 6px 20px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.suitedclg {\n  padding-top: 39px;\n}\n\n.forumsec {\n  background: #f6f5e6;\n  padding: 12px;\n  background: #e4ecef;\n  padding: 22px 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.forumsec ion-input {\n  border-bottom: 1px solid #ddd;\n}\n\n.forumsec .firstrow p {\n  margin: 0;\n}\n\n.forumsec .firstrow h5 {\n  margin: 0;\n}\n\n.setdiv {\n  background: white;\n  border-radius: 10px;\n  padding: 18px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.thirdsectionpop {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsectionpop .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsectionpop .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.size_setpop {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setpop ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setpop .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignpop {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spnpop {\n  color: var(--ion-color-secondary);\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_setpop {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-icon.active {\n  color: blue;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlzc2lvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBREk7RUFDSyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUdUOztBQURJO0VBQ0ksYUFBQTtBQUdSOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUlaOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFJWjs7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUlaOztBQUFRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFFWjs7QUFBUTtFQUNJLGdCQUFBO0FBRVo7O0FBRFk7RUFDSSxnQkFBQTtBQUdoQjs7QUFEWTtFQUNJLGNBQUE7QUFHaEI7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLHdGQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNJLGdCQUFBO0FBRVI7O0FBQUk7RUFDSSxtQkFBQTtBQUVSOztBQUFJO0VBQ0ksZ0NBQUE7QUFFUjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUdaOztBQURRO0VBQ0ksZ0JBQUE7QUFHWjs7QUFEUTtFQUNJLGVBQUE7QUFHWjs7QUFFSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0MscUJBQUE7RUFDQSxnQkFBQTtBQUVIOztBQUFFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQUdKOztBQURFO0VBQ0UsZ0JBQUE7QUFJSjs7QUFEQztFQUNHLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtBQUlKOztBQUhJO0VBQ0kscUNBQUE7QUFLUjs7QUFEQztFQUNHLG1CQUFBO0FBSUo7O0FBRkM7RUFDRyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUtK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Wjs7QUFBUTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFWjs7QUFLSTtFQUVPLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUhYOztBQUlXO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGZjs7QUFJVztFQUVJLGFBQUE7RUFDQSx5QkFBQTtBQUhmOztBQU1PO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFHQSx5QkFBQTtBQUxYOztBQU9PO0VBQ0ksaUNBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxYOztBQU9PO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUpYOztBQU1PO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBSFg7O0FBTU87RUFDQyxXQUFBO0FBSFI7O0FBUU07RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUxSOztBQVFJO0VBQ0ksZUFBQTtFQUFpQixnQkFBQTtFQUNqQixZQUFBO0VBQWMsNEJBQUE7RUFDZCxVQUFBO0VBQVksWUFBQTtFQUNaLG9CQUFBO0VBQXNCLGlCQUFBO0VBQ3RCLGVBQUE7RUFBaUIsNEJBQUE7RUFDakIsMkJBQUE7RUFBNkIsc0JBQUE7QUFDckM7O0FBRU0sMkJBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQVksMkJBQUE7QUFFcEI7O0FBQ00sNkJBQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQVcsMEJBQUE7QUFHbkIiLCJmaWxlIjoiYWRtaXNzaW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5weC0xMntcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG4ucHQtMTJ7XG4gICAgcGFkZGluZy10b3A6MTJweDtcbn1cbi50YWJib2R5e1xuICAgIHBhZGRpbmc6MTJweCAwcHg7XG4gICAgLmJnc21vY2tncmF5e1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmZTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICBwYWRkaW5nOjEycHg7XG4gICAgfVxuICAgIC5oZWFkY2FyZHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwODNkYztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2xpZHtcbiAgICAgICAgaW9uLWNhcmR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLldodGNhcmR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmFjY29yZGlhbnN7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgMTA1LCAwLjE1KSAwcHggMnB4IDVweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAxcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLnBhcmFncmFwaCBpb24tbGFiZWx7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxuICAgIGlvbi1hY2NvcmRpb257XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVseyAgIFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnRibGNvbnRlbnR7XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgY29sb3I6ICMwMDgzZGM7IFxuICAgIH1cbn1cbnRhYmxlLCB0aCwgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVkZmY7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBwYWRkaW5nOjZweCA4cHg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICB9XG4gIHRhYmxlIHRoe1xuICAgYmFja2dyb3VuZDphbGljZWJsdWU7XG4gICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5pY29uYnRue1xuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICB9XG4gIC5zZWdtZW50U3R1ZHtcbiAgICBtYXJnaW46IDE0cHggMHB4O1xuICB9XG4gXG4gLnNlcmNoYmFye1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOjAhaW1wb3J0YW50O1xuICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHggOHB4IDQ1cHghaW1wb3J0YW50OyAgIFxuICAgIH1cbiAgIFxuIH0gXG4gLmNhc2txbnN7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiB9XG4gLmZpbHRlci1idG57XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW46IDAgNHB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgfVxuIH1cbiAuY2FyZGN1c3R7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgyMDUsIDIxMSwgMjE0LCAwLjIxKSAwcHggOHB4IDI1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiB9XG4gLnBhZ2luYXRpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOjEuNXJlbTtcbiAgfVxuICBcbiAgLnBhZ2luYXRpb24gbGkge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLnBhZ2luYXRpb24gbGkuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJkZDI2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cbiAgLnBvcHVsYXJ0eHR7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBoMntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG59XG5pb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbjogMHB4IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuLnVzZXJSZXZpZXd7XG4gICAgLmZpcmN0Y2hhcntcbiAgICAgICAgYmFja2dyb3VuZDogI2ZkZGZlNDtcbiAgICAgICAgY29sb3I6ICNhNzBjMGM7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIHAuc2J0eHR7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICM0YjRiNGI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgLnJhdGVieXtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJhY2tncm91bmQ6ICMxMWM5MTg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgLnJhdGluZ0J0bnN7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgY29sb3I6ICMxMWM5MTg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICNkOWQ5ZDk7XG4gICAgICAgICAgICAtLWNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGgze1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4IWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLnRodW1iaWNvbntcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4YjhiOGI7XG4gICAgICAgICAgICBtYXJnaW46IDNweCA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kYXRldm50e1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICB9XG4gICAgLmJsdXR4dHtcbiAgICAgICBjb2xvcjogIzAwODFkYztcbiAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59XG4uaWNvbmZpeHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xufVxuLmJsdXR4dHtcbiAgICBjb2xvcjogIzAwODFkYztcbiB9XG5cblxuXG5cbiAuc2V0dGl0bHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDA7XG4gfVxuIFxuXG4gLnNldG5vdGlmaWNhdGlvbntcbiAgICB3aWR0aDozNjBweDtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICAgIC5zZXR0aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNhNGFmZmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTE0cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBjb2xvcjojMDA4M2RjO1xuICAgIH1cbn1cblxuLnNldGNyZHtcbiAgICB3aWR0aDogMjExcHg7XG4gICAgaGVpZ2h0OiAxOTdweDtcbn1cbi5zdGFyLWljb24ge1xuICAgIGNvbG9yOiAjZTViNjBjO1xuICB9XG4gIFxuICAuZHRpY29ue1xuICAgIGNvbG9yOiAjMTFjOTE4O1xuICB9XG4gIC50aGlyZHNlY3Rpb24ubXR7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuICAudzEwMHtcbiAgICB3aWR0aDoxMDAlO1xuICB9XG4gIC50aGlyZHNlY3Rpb24gLkhlYWRUeHQgaDUge1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59XG4uYm9vbWFya3tcbiAgICAtLWNvbG9yOiBncmF5O1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjY2ZjZmNmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4uc2V0cGlje1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiA2cHggNnB4IDIwcHg7XG59XG5cblxuLnJhdGVze1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIH1cbn1cblxuXG4uc3VpdGVkY2xne1xuICAgIHBhZGRpbmctdG9wOiAzOXB4O1xufVxuXG5cbi5mb3J1bXNlY3tcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ2IDI0NSAyMzApO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDIyOCAyMzYgMjM5KTtcbiAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIH1cblxuICAgIC5maXJzdHJvd3tcbiAgICBcbiAgICAgICAgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBoNXtcbiAgICAgICAgICAgIG1hcmdpbjogMDsgXG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2V0ZGl2e1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMThweDsgICAgXG4gICAgfVxuXG4gICAgLnNwYW57XG4gICAgICAgIGNvbG9yOiAjMDA4MWRjO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2V0bGlrZWNvbHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIFxuICAgIH1cbiAgXG5cblxuICAgIC50aGlyZHNlY3Rpb25wb3B7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDUsIDI1NSwgMC4zODAzOTIxNTY5KTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMDMpIDEwMCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGxpZ2h0ZW47XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAgIC5IZWFkVHh0IHtcbiAgICAgICAgaDV7XG4gICAgICAgICAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9IFxuXG4gIFxuICAgIC5zaXplX3NldHBvcCB7XG4gICAgICAgIC8vICAgbWluLWhlaWdodDogMjcwcHg7XG4gICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgIHdvcmQtc3BhY2luZzogMnB4O1xuICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgLS1vdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgICAgICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgY29udGFpbjogdW5zZXQ7XG4gICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyMDUsIDIxMSwgMjE0LCAwLjIxKSAwcHggOHB4IDI1cHg7XG4gICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA3cHg7XG4gICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDdweDtcbiAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuYm9vbWFya3tcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAtLWNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcbiAgICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICAuaW1nX2FsaWducG9wIHtcbiAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAvLyBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAvLyB0b3A6IC0xMiU7XG4gICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XG4gICAgICAgfVxuICAgICAgIC5zcG5wb3B7XG4gICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICBcbiAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICB9XG4gICAgICAgLnRpdF9zZXRwb3B7XG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICAgICB9XG4gICAgICAgLmJ0bnNldHN7XG4gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICB9XG5cbiAgICAgICBpb24taWNvbi5hY3RpdmUge1xuICAgICAgICBjb2xvcjogYmx1ZTsgXG4gICAgICB9XG5cblxuXG4gICAgICAuc3BhbntcbiAgICAgICAgY29sb3I6ICMwMDgxZGM7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4OyAvKiBBZGp1c3Qgc2l6ZSAqL1xuICAgICAgICBjb2xvcjogYmxhY2s7IC8qIEJsYWNrIG91dGxpbmUgaW5pdGlhbGx5ICovXG4gICAgICAgIGZpbGw6IG5vbmU7IC8qIE5vIGZpbGwgKi9cbiAgICAgICAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7IC8qIEJvcmRlciBjb2xvciAqL1xuICAgICAgICBzdHJva2Utd2lkdGg6IDI7IC8qIEFkanVzdCBib3JkZXIgdGhpY2tuZXNzICovXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gKi9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLyogVGh1bWJzLVVwIGljb24gY2xpY2tlZCAqL1xuICAgICAgLnRodW1icy11cFtzdHlsZSo9XCJibHVlXCJdIHtcbiAgICAgICAgZmlsbDogYmx1ZTsgLyogRmlsbCBibHVlIHdoZW4gY2xpY2tlZCAqL1xuICAgICAgfVxuICAgICAgXG4gICAgICAvKiBUaHVtYnMtRG93biBpY29uIGNsaWNrZWQgKi9cbiAgICAgIC50aHVtYnMtZG93bltzdHlsZSo9XCJyZWRcIl0ge1xuICAgICAgICBmaWxsOiByZWQ7IC8qIEZpbGwgcmVkIHdoZW4gY2xpY2tlZCAqL1xuICAgICAgfVxuICAgICJdfQ== */";

/***/ }),

/***/ 2537:
/*!*******************************************************!*\
  !*** ./src/app/pages/clgdetails/clgdetails.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "body {\n  font-size: 14px;\n}\n\n.blue {\n  color: #0083dc;\n}\n\n.green {\n  color: #88d834;\n}\n\n.greenbtn {\n  --background:#88d834!important;\n}\n\n.gray {\n  color: gray;\n}\n\n.bgblue {\n  background: #0083dc;\n}\n\n.bggreen {\n  background: #88d834;\n}\n\n.starrate {\n  color: #e5b60c;\n}\n\n.px-10 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.smllbtn {\n  --box-shadow: none;\n}\n\n.segment1 {\n  margin-top: 10px;\n}\n\n.segment1 ion-segment-button {\n  border-radius: 22px;\n  text-transform: capitalize;\n  margin: 5px;\n}\n\n.segment1 ion-label {\n  color: black;\n}\n\n.segment2 {\n  margin-top: 16px;\n}\n\n.segment2 ion-segment-button {\n  text-transform: capitalize;\n}\n\n.clgcoverphoto {\n  height: 17vh;\n  position: relative;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 2rem;\n}\n\n.clgcoverphoto img.log {\n  width: 70px;\n  height: 65px;\n  position: absolute;\n  bottom: -30px;\n  left: 10px;\n  border: 1px solid #d5d5d5;\n  background: #fff;\n  z-index: 1;\n  border-radius: 5px;\n  padding: 2px;\n  object-fit: cover;\n}\n\n.clgcoverphoto .imgclg {\n  width: 100%;\n  height: 18vh;\n}\n\n.shortInfo h4 {\n  margin: 0;\n  font-size: 16px;\n}\n\n.shortInfo p {\n  display: flex;\n  flex-wrap: wrap;\n  color: #0083dc;\n  margin: 6px 0px;\n  font-size: 14px;\n}\n\n.shortInfo p .location, .shortInfo p .cment {\n  color: #0083dc;\n}\n\n.shortInfo p .starrate {\n  color: #e5b60c;\n}\n\n.ml-4 {\n  margin-left: 4px;\n}\n\n.mr-6 {\n  margin-right: 6px;\n}\n\n.bglightgry {\n  background: #f1f5f9;\n  margin-right: 7px;\n  padding: 4px 8px;\n  display: inline-block;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin-right: 4px;\n  border: 1px solid #f1f1f1;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.rates {\n  text-align: right;\n}\n\n.rates ion-icon {\n  margin-right: 4px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 16px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.populartxt {\n  margin: 16px 10px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\n.courseCard {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 5px 5px 5px 5px;\n  border-radius: 10px;\n}\n\n.courseCard .headpart {\n  padding: 8px 10px;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.courseCard .headpart h3 {\n  font-weight: 500;\n  font-size: 16px !important;\n  color: #0083dc;\n  margin-bottom: 6px !important;\n}\n\n.courseCard .headpart .star {\n  color: #e5b60c;\n}\n\n.courseCard .midpart span {\n  color: #797979;\n}\n\n.courseCard .midpart p {\n  margin: 6px 0;\n}\n\n.courseCard .footerpart {\n  padding: 0px 10px 10px;\n}\n\n.courseCard .greenbtn {\n  --background:#88d834!important;\n}\n\n.courseCard .boomark {\n  --color: gray;\n  --border-color: #cfcfcf;\n  font-size: 12px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.courseCard ion-button {\n  --padding-end: 12px;\n  --padding-start: 12px;\n  --box-shadow: none;\n}\n\n.textcenter {\n  text-align: center;\n}\n\nul {\n  padding: 0;\n  font-size: 14px;\n  list-style-type: none;\n}\n\n.icontxt {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n}\n\n.icontxt ion-icon {\n  font-size: 24px;\n  margin-right: 4px;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th {\n  background: aliceblue;\n  font-weight: 500;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin-top: 12px;\n}\n\n.likeDis {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.likeDis .like {\n  color: green;\n}\n\n.likeDis .dislike {\n  color: red;\n}\n\n.likeDis p {\n  color: #0083dc;\n}\n\n.likeDis span {\n  vertical-align: middle;\n}\n\n.mx-12 {\n  margin: 0 12px;\n}\n\n.thirdsection {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsection .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.imgHead {\n  display: flex;\n  justify-content: space-between;\n}\n\n.size_set {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_set ion-button {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.size_set .boomark {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_align {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spn {\n  color: var(--ion-color-secondary);\n  border-right: 1px solid gray;\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_set {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\n.setrw {\n  border-bottom: 1px solid #e5e5e5;\n  margin: 12px 0;\n  padding-bottom: 8px;\n}\n\n.setrw img {\n  border-radius: 10px;\n  width: 100%;\n  border: 1px solid lightgray;\n  height: 85px;\n}\n\n.setrw p.p1 {\n  margin: 0;\n}\n\n.p2 {\n  font-size: 14px !important;\n  margin: 6px 0px !important;\n  color: gray !important;\n}\n\n.p3 {\n  font-size: 14px !important;\n  margin: 6px 0px !important;\n  color: gray !important;\n}\n\n.angular-editor-textarea ol {\n  list-style: decimal !important;\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n  padding: 1rem !important;\n}\n\n.angular-editor-textarea ul {\n  list-style: unset !important;\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n  padding: 1rem !important;\n}\n\nh1 {\n  font-size: 14px !important;\n}\n\n.tabecontent1 table th:first-child {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.tabecontent1 table th {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.tabecontent1 table th,\n.tabecontent1 table td.strong {\n  background-color: #bddbfa;\n  color: #353535 !important;\n  font-weight: 600 !important;\n  text-align: left !important;\n}\n\n.tabecontent1 table tr td:not(:last-child) {\n  border-right: 1px dashed #dfdfdf;\n}\n\n.tabecontent1 table tr td {\n  color: #353535;\n  text-align: left;\n  background-color: white;\n  font-size: var(--text-regular);\n  padding: 0.5rem 1.15rem;\n  line-height: 1.375rem;\n}\n\n.tabecontent1 table tr {\n  border-bottom: 1px dashed #dfdfdf;\n}\n\n.tabecontent1 table th:last-child {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.tabecontent1 p {\n  text-align: justify;\n}\n\n.tabecontent1 ul {\n  list-style: unset !important;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.setmat {\n  width: 100%;\n}\n\n.setnotification li {\n  color: dodgerblue;\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\n.setnotification .settitle {\n  text-align: center;\n  background: #0083dc;\n  color: #fff;\n  padding: 10px;\n}\n\n.setnotification .settitle h5 {\n  margin: 0;\n  font-weight: 400;\n}\n\n.setnotification p {\n  color: #0083dc;\n}\n\n.contactsec {\n  padding-top: 10px;\n  border-radius: 10px;\n  margin: 10px;\n}\n\n.setloc {\n  color: blue;\n  display: flex;\n}\n\nspan {\n  display: flex;\n  align-items: center;\n}\n\n.firstrow p {\n  margin: 0;\n}\n\n.firstrow h5 {\n  margin: 0;\n}\n\n.secrow {\n  border-bottom: 1px solid #ddd;\n}\n\n.setp {\n  margin: 5px;\n}\n\n.setbttn {\n  width: 80%;\n  margin: auto;\n}\n\n.forumsec {\n  background: #f6f5e6;\n  padding: 12px;\n  background: #e4ecef;\n  padding: 22px 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.forumsec ion-input {\n  border-bottom: 1px solid #ddd;\n}\n\n.forumsec .setdiv {\n  background: white;\n  border-radius: 10px;\n  padding: 18px;\n}\n\n.forumsec .text-center {\n  text-align: center;\n}\n\n.forumsec h5 {\n  font-size: 14px;\n}\n\n.tablediv {\n  overflow-x: scroll;\n}\n\n.setpic {\n  width: 100%;\n  max-height: 150px;\n  overflow: hidden;\n}\n\n.botmtabset {\n  font-size: 10px;\n}\n\n.shearesec {\n  margin: 10px 0px 2px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;\n  border-radius: 6px;\n  padding: 2px;\n}\n\n.shearesec .labelset {\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.shearesec .setimg {\n  width: 30px;\n  margin: 3px 6px;\n  border-radius: 4px;\n}\n\n.shearesec .set {\n  height: 30px;\n  position: relative;\n}\n\n.subact {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.subact .shareicon {\n  font-size: 20px;\n  color: #0081dc;\n}\n\n.caskqns {\n  margin-top: 1rem;\n}\n\n.setnoimage {\n  height: 150px;\n  width: 100%;\n}\n\n.bookMark {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 10px;\n  top: 6%;\n  border: 1px solid #746ac0;\n}\n\n.clgdescription {\n  background: #3b82f624;\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.datanfound {\n  border: 1px solid gray;\n  border-radius: 10px;\n  padding: 7px;\n  margin-bottom: 21px;\n}\n\n.staricon {\n  color: #FFC107;\n}\n\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n  /* Background color for shortlisted item */\n}\n\nion-icon.active {\n  color: blue;\n  /* Color for active bookmark (when shortlisted) */\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n/* Base styles for the icons */\n\n/* Default icon appearance with no fill (just border/outline) */\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZ2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ksOEJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtBQU1KOztBQUpDO0VBQ0csY0FBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtBQVFKOztBQU5BO0VBQ0ksaUJBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0FBVUo7O0FBUkE7RUFDSSxnQkFBQTtBQVdKOztBQVZJO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFZUjs7QUFWSTtFQUNJLFlBQUE7QUFZUjs7QUFUQTtFQUNJLGdCQUFBO0FBWUo7O0FBWEk7RUFDSSwwQkFBQTtBQWFSOztBQVZBO0VBRUksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBWEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBYUo7O0FBWEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWFKOztBQVRJO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUFZUjs7QUFWSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBWVI7O0FBWFE7RUFDSSxjQUFBO0FBYVo7O0FBWFE7RUFDSSxjQUFBO0FBYVo7O0FBVEE7RUFDSSxnQkFBQTtBQVlKOztBQVZBO0VBQ0ksaUJBQUE7QUFhSjs7QUFYQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFD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QUFzQixpQkFBQTtFQUN0QixlQUFBO0VBQWlCLDRCQUFBO0VBQ2pCLDJCQUFBO0VBQTZCLHNCQUFBO0FBcEJqQzs7QUF1QkUsMkJBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQVksMkJBQUE7QUFuQmhCOztBQXNCRSw2QkFBQTs7QUFDQTtFQUNFLFNBQUE7RUFBVywwQkFBQTtBQWxCZiIsImZpbGUiOiJjbGdkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYm9keSB7XG4gICAgZm9udC1zaXplOiAxNHB4OyAgXG59XG4uYmx1ZXtcbiAgICBjb2xvcjogIzAwODNkYztcbiB9XG4uZ3JlZW57XG4gICAgY29sb3I6ICM4OGQ4MzQ7XG59XG4uZ3JlZW5idG57XG4gICAgLS1iYWNrZ3JvdW5kOiM4OGQ4MzQhaW1wb3J0YW50O1xufVxuLmdyYXl7XG4gICAgY29sb3I6IGdyYXk7XG59XG4uYmdibHVle1xuICAgIGJhY2tncm91bmQ6ICMwMDgzZGM7XG4gfVxuLmJnZ3JlZW57XG4gICAgYmFja2dyb3VuZDogIzg4ZDgzNDtcbn1cbiAuc3RhcnJhdGV7XG4gICAgY29sb3I6ICNlNWI2MGM7XG59XG4ucHgtMTB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuLnB0LTEye1xuICAgIHBhZGRpbmctdG9wOjEycHg7XG59XG4uc21sbGJ0bntcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2VnbWVudDF7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweCA7ICAgXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICB9XG59XG4uc2VnbWVudDJ7IFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG4uY2xnY292ZXJwaG90b3tcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2NsZ19pbWcvY2xnX2ltZy5qcGcpO1xuICAgIGhlaWdodDogMTd2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgaW1nLmxvZ3tcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTMwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDVkNWQ1O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG4gIC5pbWdjbGd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxOHZoO1xuICB9XG59XG4uc2hvcnRJbmZve1xuICAgIGg0e1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xuICAgICAgICBtYXJnaW46IDZweCAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgLmxvY2F0aW9uLCAuY21lbnR7XG4gICAgICAgICAgICBjb2xvcjogIzAwODNkYztcbiAgICAgICAgfVxuICAgICAgICAuc3RhcnJhdGV7XG4gICAgICAgICAgICBjb2xvcjogI2U1YjYwYztcbiAgICAgICAgfVxuICAgIH1cbn1cbi5tbC00e1xuICAgIG1hcmdpbi1sZWZ0OjRweDtcbn1cbi5tci02e1xuICAgIG1hcmdpbi1yaWdodDo2cHg7XG59XG4uYmdsaWdodGdyeXtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbi1yaWdodDo0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbn1cbi5jYXBpdGFsaXple1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnRhYmJvZHl7XG4gICAgcGFkZGluZzoxMnB4IDBweDtcbiAgICAuYmdzbW9ja2dyYXl7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmZTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICBwYWRkaW5nOjEycHg7XG4gICAgfVxuICAgIC5oZWFkY2FyZHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNsaWR7XG4gICAgICAgIGlvbi1jYXJke1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5XaHRjYXJke1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5yYXRlcyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgaW9uLWljb257XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbn1cbi50Ymxjb250ZW50e1xuICAgIHB7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcbiAgICB9XG59XG4uYWNjb3JkaWFuc3tcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCAxMDUsIDAuMTUpIDBweCAycHggNXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDFweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAucGFyYWdyYXBoIGlvbi1sYWJlbHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG4gICAgaW9uLWFjY29yZGlvbntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWx7ICAgXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ucG9wdWxhcnR4dHtcbiAgICBtYXJnaW46IDE2cHggMTBweDtcbiAgICAvLyBtYXJnaW46IDEwcHg7XG4gICAgaDJ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxufVxuLmNvdXJzZUNhcmR7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgMTA1LCAwLjE1KSAwcHggMnB4IDVweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgNXB4IDVweCA1cHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLmhlYWRwYXJ0e1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgIGgze1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhcntcbiAgICAgICAgICAgIGNvbG9yOiAjZTViNjBjO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5taWRwYXJ0e1xuICAgICAgICAvLyBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb290ZXJwYXJ0e1xuICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAxMHB4O1xuICAgIH1cbiAgICAuZ3JlZW5idG57XG4gICAgICAgIC0tYmFja2dyb3VuZDojODhkODM0IWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJvb21hcmt7XG4gICAgICAgIC0tY29sb3I6IGdyYXk7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjY2ZjZmNmO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn1cblxuLnRleHRjZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbnVse1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5pY29udHh0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICBcbiAgICB9XG59XG50YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGZmO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcGFkZGluZzo2cHggOHB4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgfVxuICB0YWJsZSB0aHtcbiAgIGJhY2tncm91bmQ6YWxpY2VibHVlO1xuICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuaWNvbmJ0bntcbiAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgfVxuICAuc2VnbWVudFN0dWR7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuICAubGlrZURpc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5saWtle1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuICAgIC5kaXNsaWtle1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICBwe1xuICAgICAgICBjb2xvcjogIzAwODNkYztcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gIH1cbiAgLm14LTEye1xuICAgIG1hcmdpbjogMCAxMnB4O1xuICB9XG5cbi8vICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zbGlkZXIgY2FyZC0tLS0tLS0tLS0tLS1cblxuLnRoaXJkc2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjQ1LCAyNTUsIDAuMzgwMzkyMTU2OSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMDMpIDEwMCUpO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgLkhlYWRUeHQge1xuICAgIGg1e1xuICAgICAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gICAgfVxuICAgXG59XG5cbi5pbWdIZWFke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuICAuc2l6ZV9zZXQge1xuIC8vICAgbWluLWhlaWdodDogMjcwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdvcmQtc3BhY2luZzogMnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLS1vdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGNvbnRhaW46IHVuc2V0O1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgyMDUsIDIxMSwgMjE0LCAwLjIxKSAwcHggOHB4IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgICB9XG4gICAgLmJvb21hcmt7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA2cHg7XG4gICAgICAgIC0tY29sb3I6IGdyYXk7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgfVxufVxuLmltZ19hbGlnbiB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAvLyBsZWZ0OiAyMHB4O1xuICAgIC8vIHRvcDogLTEyJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xufVxuLnNwbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi50aXRfc2V0e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuLmJ0bnNldHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cblxuXG4vLyBuZXdzICZ1cGRhdGVzIHNlY3Rpb25cbi5zZXRydyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGhlaWdodDogODVweDtcbiAgICB9XG4gICAgcC5wMSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbi5wMntcbiAgICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNnB4IDBweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGdyYXkhaW1wb3J0YW50O1xufVxuXG4ucDN7XG4gICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcbiAgICBtYXJnaW46IDZweCAwcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiBncmF5IWltcG9ydGFudDtcbn1cblxuXG4uYW5ndWxhci1lZGl0b3ItdGV4dGFyZWEgb2wge1xuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWwgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLmFuZ3VsYXItZWRpdG9yLXRleHRhcmVhIHVsIHtcbiAgICBsaXN0LXN0eWxlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xufVxuXG5cblxuXG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgIFxuICAgIC8vIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIC50YWJlY29udGVudDEgdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgXG4gICAgLnRhYmVjb250ZW50MSB0YWJsZSB0aCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgIH1cbiAgICBcbiAgICAudGFiZWNvbnRlbnQxIHRhYmxlIHRoLFxuICAgIC50YWJlY29udGVudDEgdGFibGUgdGQuc3Ryb25nIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkZGJmYTtcbiAgICAgICAgY29sb3I6ICMzNTM1MzUgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC50YWJlY29udGVudDEgdGFibGUgdHIgdGQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCAjZGZkZmRmO1xuICAgIH1cbiAgICBcbiAgICAudGFiZWNvbnRlbnQxIHRhYmxlIHRyIHRkIHtcbiAgICAgICAgY29sb3I6ICMzNTM1MzU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXRleHQtcmVndWxhcik7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjE1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zNzVyZW07XG4gICAgfVxuICAgIFxuICAgIC50YWJlY29udGVudDEgdGFibGUgdHIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZmRmZGY7XG4gICAgfVxuICAgIFxuICAgIC50YWJlY29udGVudDEgdGFibGUgdGg6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgIFxuICAgIC50YWJlY29udGVudDEgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuICAgIFxuICAgIC50YWJlY29udGVudDEgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgLy8gcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgICAgcGFkZGluZzogMC4zZW0gMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuNWVtOyB9XG4gICAgICBcbiAgICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xuICAgICAgICAgIHdpZHRoOiAxMzMuMzMzMzMlO1xuICAgICAgfVxuLnNldG1hdHtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG5cblxuLnNldG5vdGlmaWNhdGlvbntcbiAgICAvLyB3aWR0aDozNjBweDtcbiAgICAvLyBoZWlnaHQ6IDM3MHB4O1xuICAgIGxpe1xuICAgICAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5zZXR0aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA4M2RjO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgaDV7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwOyBcbiAgICAgICAgfVxuXG4gICAgXG4gICAgfVxuICAgIHB7XG4gICAgICAgIGNvbG9yOiMwMDgzZGM7XG4gICAgfVxufVxuXG5cbi8vIGNvbGxlZ2UgY29udGFjdCBzZWN0aW9uXG5cbi5jb250YWN0c2Vje1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgXG59XG4uc2V0bG9je1xuICAgIGNvbG9yOiBibHVlO1xuZGlzcGxheTogZmxleDtcbn1cbnNwYW57XG4gICAgLy8gY29sb3I6IGJsdWU7XG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZpcnN0cm93e1xuICAgIFxucHtcbiAgICBtYXJnaW46IDA7XG59XG5oNXtcbiAgICBtYXJnaW46IDA7IFxufVxufVxuXG4uc2Vjcm93e1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XG5cbn1cbi5zZXRwe1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4uc2V0YnR0bntcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuXG4uZm9ydW1zZWN7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0NiAyNDUgMjMwKTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjggMjM2IDIzOSk7XG4gICAgcGFkZGluZzogMjJweCAxMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgaW9uLWlucHV0e1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICB9XG4gICAgLnNldGRpdntcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE4cHg7ICAgIFxuICAgIH1cbiAgICAudGV4dC1jZW50ZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaDV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG5cblxuLy8gcmFua2luZyBzZWN0aW9uXG5cbi50YWJsZWRpdntcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG59XG5cbi5zZXRwaWN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4uYm90bXRhYnNldHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5zaGVhcmVzZWMge1xuICAgIG1hcmdpbjogMTBweCAwcHggMnB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMHB4IDVweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMHB4IDFweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbn1cbi5zaGVhcmVzZWN7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIHBhZGRpbmc6NXB4O1xuICAgIC8vIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAvLyBtYXJnaW4tdG9wOiAxN3B4O1xuICAgICAubGFiZWxzZXR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgXG4gICAgLnNldGltZ3tcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIG1hcmdpbjogM3B4IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgICAuc2V0e1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgfVxufVxuXG4uc3ViYWN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLnNoYXJlaWNvbntcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogIzAwODFkYztcbiAgICB9XG59XG4uY2Fza3FucyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuXG4uc2V0bm9pbWFnZXtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9va01hcmt7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA2JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzQ2YWMwO1xufVxuXG4uY2xnZGVzY3JpcHRpb257XG4gICAgYmFja2dyb3VuZDogIzNiODJmNjI0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucmF0ZXN7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogIzExYzkxODtcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgfVxufVxuXG5cbi5zcGFue1xuICAgIGNvbG9yOiAjMDA4MWRjO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLnNldGxpa2Vjb2x7XG4gICAgZGlzcGxheTogZmxleDtcbiAgXG59XG5cbi5kYXRhbmZvdW5ke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjFweDtcbn1cbi8vIC5mb290ZXJwYXJ0e1xuLy8gICAgIHBhZGRpbmctbGVmdDogMzBweDtcbi8vIH1cblxuLnN0YXJpY29ue1xuICAgIGNvbG9yOiAjRkZDMTA3OyBcbiAgfSBcblxuICAuaW1nX2FsaWdubi5zaG9ydGxpc3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNzsgLyogQmFja2dyb3VuZCBjb2xvciBmb3Igc2hvcnRsaXN0ZWQgaXRlbSAqL1xuICB9XG4gIFxuICBpb24taWNvbi5hY3RpdmUge1xuICAgIGNvbG9yOiBibHVlOyAvKiBDb2xvciBmb3IgYWN0aXZlIGJvb2ttYXJrICh3aGVuIHNob3J0bGlzdGVkKSAqL1xuICB9XG4gIFxuICBcbiAgaHRtbHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgfVxuXG4gIC8qIEJhc2Ugc3R5bGVzIGZvciB0aGUgaWNvbnMgKi9cblxuXG4gLyogRGVmYXVsdCBpY29uIGFwcGVhcmFuY2Ugd2l0aCBubyBmaWxsIChqdXN0IGJvcmRlci9vdXRsaW5lKSAqL1xuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDsgLyogQWRqdXN0IHNpemUgKi9cbiAgICBjb2xvcjogYmxhY2s7IC8qIEJsYWNrIG91dGxpbmUgaW5pdGlhbGx5ICovXG4gICAgZmlsbDogbm9uZTsgLyogTm8gZmlsbCAqL1xuICAgIHN0cm9rZTogY3VycmVudENvbG9yOyAvKiBCb3JkZXIgY29sb3IgKi9cbiAgICBzdHJva2Utd2lkdGg6IDI7IC8qIEFkanVzdCBib3JkZXIgdGhpY2tuZXNzICovXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlOyAvKiBTbW9vdGggdHJhbnNpdGlvbiAqL1xuICB9XG4gIFxuICAvKiBUaHVtYnMtVXAgaWNvbiBjbGlja2VkICovXG4gIC50aHVtYnMtdXBbc3R5bGUqPVwiYmx1ZVwiXSB7XG4gICAgZmlsbDogYmx1ZTsgLyogRmlsbCBibHVlIHdoZW4gY2xpY2tlZCAqL1xuICB9XG4gIFxuICAvKiBUaHVtYnMtRG93biBpY29uIGNsaWNrZWQgKi9cbiAgLnRodW1icy1kb3duW3N0eWxlKj1cInJlZFwiXSB7XG4gICAgZmlsbDogcmVkOyAvKiBGaWxsIHJlZCB3aGVuIGNsaWNrZWQgKi9cbiAgfVxuICBcbiAgIl19 */";

/***/ }),

/***/ 80250:
/*!************************************************************!*\
  !*** ./src/app/pages/clgdetails/compare/compare.page.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.mt-24 {\n  margin-top: 1.5rem;\n}\n\n.mt-12 {\n  margin-top: 12px !important;\n}\n\n.shearesec {\n  padding-left: 10px;\n  background-color: white;\n  padding: 5px;\n  border-top: 2px solid lightgray;\n  border-bottom: 2px solid lightgray;\n  margin-top: 17px;\n}\n\n.shearesec .labelset {\n  position: relative;\n  top: 14px;\n  font-size: 15px;\n}\n\n.shearesec .setimg {\n  width: 35px;\n  margin: 6px;\n}\n\n.shearesec .set {\n  height: 35px;\n  position: relative;\n  top: -1px;\n}\n\n.cardsections .setcrd {\n  text-align: left;\n  padding: 12px;\n  position: relative;\n  margin: 0;\n  margin-bottom: 10px;\n}\n\n.cardsections .setcrd .vs {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-radius: 50px;\n  position: absolute;\n  color: #fff;\n  padding: 6px;\n  left: 45%;\n  top: 15%;\n  z-index: 1;\n  font-style: italic;\n}\n\n.cardsections .setcrd .setimg {\n  width: 82px;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n.cardsections .setcrd .title {\n  color: #000;\n  font-weight: 500;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.cardsections .setcrd .setclgN {\n  font-size: 12px;\n}\n\n.cardsections .setcrd .setrating {\n  font-size: 8px;\n}\n\n.cardsections .setcrd .seticons {\n  color: #FFC107;\n}\n\n.cardsections .setcrd .setbtn {\n  text-align: center;\n}\n\n.vsimg {\n  border: 1px solid #cbcbcb;\n  text-align: center;\n  padding: 6px;\n  height: 87px;\n}\n\n.vsimg ion-icon {\n  font-size: 26px;\n}\n\n.secdiv {\n  position: relative;\n}\n\n.secdiv .bordr {\n  position: absolute;\n  border-left: 1px solid #a0a0a0;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.mt0 {\n  margin-top: 0 !important;\n}\n\n.divmainabout {\n  background: white;\n  padding-left: 10px;\n}\n\n.divmainabout .setp {\n  color: blue;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSwyQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFISTtFQUNJLGtCQUFBO0VBQ0osU0FBQTtFQUNBLGVBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7RUFFQyxXQUFBO0FBR0w7O0FBREE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBR0o7O0FBT0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUpSOztBQUtRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBSFo7O0FBTUE7RUFDSSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQUxKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFMSjs7QUFPQTtFQUNJLGVBQUE7QUFMSjs7QUFPQTtFQUNJLGNBQUE7QUFMSjs7QUFPQTtFQUNJLGNBQUE7QUFMSjs7QUFPQTtFQUNJLGtCQUFBO0FBTEo7O0FBV0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFSSjs7QUFTSTtFQUNJLGVBQUE7QUFQUjs7QUFVQTtFQUNJLGtCQUFBO0FBUEo7O0FBUUk7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtBQU5SOztBQVNBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQU5KOztBQVFBO0VBQ0ksd0JBQUE7QUFMSjs7QUFTQTtFQUNJLGlCQUFBO0VBRUEsa0JBQUE7QUFQSjs7QUFXSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBVFIiLCJmaWxlIjoiY29tcGFyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5weC0xMntcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG4ucHQtMTJ7XG4gICAgcGFkZGluZy10b3A6MTJweDtcbn1cbi5tdC0yNHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4ubXQtMTJ7XG4gICAgbWFyZ2luLXRvcDogMTJweCFpbXBvcnRhbnQ7XG59XG4uc2hlYXJlc2Vje1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmF5O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgbWFyZ2luLXRvcDogMTdweDtcbiAgICAubGFiZWxzZXR7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE0cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuLnNldGltZ3tcbiAgICB3aWR0aDozNXB4O1xuXG4gICAgIG1hcmdpbjo2cHhcbn1cbi5zZXR7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xcHg7XG59XG59XG4uY2FyZHNlY3Rpb25zeyBcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIC8vIG1hcmdpbi10b3A6IDFyZW07XG4gICAgLnNldGNyZHtcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICBwYWRkaW5nOjEycHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAudnN7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgbGVmdDogNDUlO1xuICAgICAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICAgXG4uc2V0aW1ne1xuICAgIHdpZHRoOiA4MnB4O1xuICAgIC8vYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cbi50aXRsZXtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuLnNldGNsZ057XG4gICAgZm9udC1zaXplOjEycHg7XG59XG4uc2V0cmF0aW5ne1xuICAgIGZvbnQtc2l6ZTo4cHg7XG59XG4uc2V0aWNvbnN7XG4gICAgY29sb3I6ICNGRkMxMDc7XG59XG4uc2V0YnRue1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxufVxuXG59XG5cbi52c2ltZ3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgaGVpZ2h0OiA4N3B4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxufVxuLnNlY2RpdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmJvcmRye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2EwYTBhMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzg4ZDgzNDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luOiAwcHggM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG59XG4ubXQwe1xuICAgIG1hcmdpbi10b3A6IDAhaW1wb3J0YW50O1xufVxuXG5cbi5kaXZtYWluYWJvdXR7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAvLyBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC50aXRsZXtcbiAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIH1cbiAgICAuc2V0cHtcbiAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 86359:
/*!********************************************************************!*\
  !*** ./src/app/pages/clgdetails/coursesfees/coursesfees.page.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".setnotification {\n  width: 360px;\n  height: 370px;\n}\n.setnotification .settitle {\n  text-align: center;\n  background: #a4affe;\n  position: relative;\n  top: -14px;\n  height: 35px;\n}\n.setnotification p {\n  color: #0083dc;\n}\n.populartxt {\n  margin-top: 18px;\n}\n.populartxt h2 {\n  font-weight: 500;\n}\n.px-10 {\n  padding: 0 10px;\n}\n.px-12 {\n  padding: 0 12px;\n}\n.pt-12 {\n  padding-top: 12px;\n}\n.tabbody {\n  padding: 12px 0px;\n}\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n.tabbody .headcard {\n  display: flex;\n}\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\ntable th {\n  background: aliceblue;\n  font-weight: 500;\n}\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n.segmentStud {\n  margin: 14px 0px;\n}\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n.caskqns {\n  margin-bottom: 14px;\n}\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n.populartxt {\n  margin-top: 18px;\n}\n.populartxt h2 {\n  font-weight: 500;\n}\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\nion-modal {\n  --height: 80%;\n  --width:95%;\n  --border-radius: 14px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\nion-modal::part(backdrop) {\n  background: #d1d5db;\n  opacity: 1;\n}\n.popucontent ion-toolbar {\n  border-bottom: 1px solid #ddd;\n}\n.popucontent .filterpop {\n  height: 80%;\n  border-bottom: 1px solid #ddd;\n}\n.popucontent .filterSegment {\n  flex-direction: column;\n}\n.popucontent .filterSegment ion-segment-button {\n  --color-checked: #5aaf01;\n  --indicator-height: 0px;\n  font-size: 13px;\n  --background-checked: #f6ffec;\n  --border-radius: 6px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  border: 0;\n  font-weight: 100 !important;\n}\n.popucontent .brR {\n  border-right: 1px solid #ddd;\n}\n.popucontent ion-checkbox {\n  margin-right: 12px;\n}\n.boomark {\n  --color: gray;\n  --border-color: #cfcfcf;\n  font-size: 12px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n}\n.courseCard .midpart {\n  padding: 3px 10px;\n}\n.p2, .p3 {\n  font-size: 14px;\n  margin: 6px 0px;\n  color: gray;\n}\n.p1 {\n  margin: 0;\n}\n.trending {\n  background: #f2f9ff;\n  padding: 20px 10px;\n  border-radius: 16px;\n  border: 1px solid #b6ddff;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.trending .setlist {\n  padding: 10px;\n  border: 1px solid #b8b88a;\n  border-radius: 15px;\n  margin: 10px;\n}\n.trending ion-item {\n  --padding-start: 0;\n  padding-inline-end: 0;\n  --background: transparent;\n}\n.trending h4 {\n  margin-top: 0;\n}\n.footerpart {\n  padding-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXNmZWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0osbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRUo7QUFBSTtFQUNJLGNBQUE7QUFFUjtBQUVBO0VBQ0ksZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQUVBO0VBQ0ksZUFBQTtBQUNKO0FBU0E7RUFDSSxlQUFBO0FBTko7QUFRQTtFQUNJLGlCQUFBO0FBTEo7QUFPQTtFQUNJLGlCQUFBO0FBSko7QUFLSTtFQUNLLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSFQ7QUFLSTtFQUNJLGFBQUE7QUFIUjtBQUlRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUZaO0FBSVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUZaO0FBSVE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFGWjtBQU1RO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFKWjtBQU1RO0VBQ0ksZ0JBQUE7QUFKWjtBQUtZO0VBQ0ksZ0JBQUE7QUFIaEI7QUFLWTtFQUNJLGNBQUE7QUFIaEI7QUFRQTtFQUNJLGdCQUFBO0VBQ0Esd0ZBQUE7RUFDQSxtQkFBQTtBQUxKO0FBTUk7RUFDSSxnQkFBQTtBQUpSO0FBTUk7RUFDSSxtQkFBQTtBQUpSO0FBTUk7RUFDSSxnQ0FBQTtBQUpSO0FBS1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFIWjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWjtBQUtRO0VBQ0ksZUFBQTtBQUhaO0FBUUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUxSO0FBUUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0U7RUFDQyxxQkFBQTtFQUNBLGdCQUFBO0FBSkg7QUFNRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFISjtBQUtFO0VBQ0UsZ0JBQUE7QUFGSjtBQUtDO0VBQ0csNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0FBRko7QUFHSTtFQUNJLHFDQUFBO0FBRFI7QUFLQztFQUNHLG1CQUFBO0FBRko7QUFJQztFQUNHLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBREo7QUFHQztFQUNHLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSx5QkFBQTtBQUFKO0FBRUM7RUFDRyxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7QUFFSjtBQURJO0VBQ0ksZ0JBQUE7QUFHUjtBQUFBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUdKO0FBQUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUdSO0FBREk7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFHUjtBQURJO0VBQ0ksZUFBQTtFQUNKLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdKO0FBQVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFFWjtBQUFRO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUVaO0FBQ0k7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFDSTtFQUNJLDBCQUFBO0FBQ1I7QUFBUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVaO0FBS0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0ZBQUE7QUFGSjtBQUtFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBRko7QUFNSTtFQUNJLDZCQUFBO0FBSFI7QUFLSTtFQUNHLFdBQUE7RUFDQSw2QkFBQTtBQUhQO0FBS0k7RUFDSSxzQkFBQTtBQUhSO0FBSVE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBRUEsU0FBQTtFQUNBLDJCQUFBO0FBSFo7QUFPSTtFQUNFLDRCQUFBO0FBTE47QUFPSTtFQUNJLGtCQUFBO0FBTFI7QUFTRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBTko7QUFRRTtFQUNFLGlCQUFBO0FBTEo7QUFPQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUpKO0FBTUE7RUFDSSxTQUFBO0FBSEo7QUFRQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5KO0FBUUU7RUFDRSxhQUFBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFOTjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBUEo7QUFTRTtFQUNFLGFBQUE7QUFQSjtBQVlFO0VBQ0Usa0JBQUE7QUFUSiIsImZpbGUiOiJjb3Vyc2VzZmVlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0bm90aWZpY2F0aW9ue1xuICAgIHdpZHRoOjM2MHB4O1xuICAgIGhlaWdodDogMzcwcHg7XG4gICAgLnNldHRpdGxle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2E0YWZmZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTRweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGNvbG9yOiMwMDgzZGM7XG4gICAgfVxufVxuXG4ucG9wdWxhcnR4dHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGgye1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cblxuLnB4LTEwe1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbn1cbi8vIC5zdHlsZXtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZjZWJlYjtcbi8vIH1cblxuLy8gLmNvdXJzZUNhcmR7XG4vLyAgICAgcGFkZGluZy10b3A6MjBweDtcbi8vIH1cblxuLnB4LTEye1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbn1cbi5wdC0xMntcbiAgICBwYWRkaW5nLXRvcDoxMnB4O1xufVxuLnRhYmJvZHl7XG4gICAgcGFkZGluZzoxMnB4IDBweDtcbiAgICAuYmdzbW9ja2dyYXl7XG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZlO1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgIHBhZGRpbmc6MTJweDtcbiAgICB9XG4gICAgLmhlYWRjYXJke1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4M2RjO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zbGlke1xuICAgICAgICBpb24tY2FyZHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuV2h0Y2FyZHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwODNkYzsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uYWNjb3JkaWFuc3tcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCAxMDUsIDAuMTUpIDBweCAycHggNXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDFweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAucGFyYWdyYXBoIGlvbi1sYWJlbHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG4gICAgaW9uLWFjY29yZGlvbntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWx7ICAgXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4udGJsY29udGVudHtcbiAgICBwe1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBjb2xvcjogIzAwODNkYzsgXG4gICAgfVxufVxudGFibGUsIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWRmZjtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHBhZGRpbmc6NnB4IDhweDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gIH1cbiAgdGFibGUgdGh7XG4gICBiYWNrZ3JvdW5kOmFsaWNlYmx1ZTtcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLmljb25idG57XG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIH1cbiAgLnNlZ21lbnRTdHVke1xuICAgIG1hcmdpbjogMTRweCAwcHg7XG4gIH1cbiBcbiAuc2VyY2hiYXJ7XG4gICAgLS1ib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweCA4cHggNDVweCFpbXBvcnRhbnQ7ICAgXG4gICAgfVxuICAgXG4gfSBcbiAuY2Fza3Fuc3tcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuIH1cbiAuZmlsdGVyLWJ0bntcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1hcmdpbjogMCA0cHg7XG4gfVxuIC5jYXJkY3VzdHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuIH1cbiAucGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6MS41cmVtO1xuICB9XG4gIFxuICAucGFnaW5hdGlvbiBsaSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICAucGFnaW5hdGlvbiBsaS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MmRkMjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuICAucG9wdWxhcnR4dHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGgye1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzg4ZDgzNDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luOiAwcHggM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG59XG4udXNlclJldmlld3tcbiAgICAuZmlyY3RjaGFye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmRkZmU0O1xuICAgICAgICBjb2xvcjogI2E3MGMwYztcbiAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgcC5zYnR4dHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzRiNGI0YjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICAucmF0ZWJ5e1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYmFja2dyb3VuZDogIzExYzkxODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAucmF0aW5nQnRuc3tcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBjb2xvcjogIzExYzkxODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcbiAgICAgICAgICAgIC0tY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaDN7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAudGh1bWJpY29ue1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzhiOGI4YjtcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tcG9wdXAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmlvbi1tb2RhbCB7XG4gICAgLS1oZWlnaHQ6IDgwJTtcbiAgICAtLXdpZHRoOjk1JTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgLS1ib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XG4gIH1cbiAgXG4gIGlvbi1tb2RhbDo6cGFydChiYWNrZHJvcCkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjA5LCAyMTMsIDIxOSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgLnBvcHVjb250ZW50e1xuICAgIGlvbi10b29sYmFye1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICB9XG4gICAgLmZpbHRlcnBvcHtcbiAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICB9XG4gICAgLmZpbHRlclNlZ21lbnR7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICM1YWFmMDE7XG4gICAgICAgICAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZjZmZmVjO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAvL21hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJyUntcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7ICAgIFxuICAgIH1cbiAgICBpb24tY2hlY2tib3gge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxuICAgXG4gIH1cbiAgLmJvb21hcmt7XG4gICAgLS1jb2xvcjogZ3JheTtcbiAgICAtLWJvcmRlci1jb2xvcjogI2NmY2ZjZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICB9XG4gIC5jb3Vyc2VDYXJkIC5taWRwYXJ0IHtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbn1cbi5wMiAsLnAze1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDZweCAwcHg7XG4gICAgY29sb3I6IGdyYXk7XG59XG4ucDF7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5cblxuLnRyZW5kaW5ne1xuICAgIGJhY2tncm91bmQ6ICNmMmY5ZmY7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjZkZGZmO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgXG4gIC5zZXRsaXN0e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjhiODhhO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgfVxuIFxuICBpb24taXRlbXtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgaDR7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBcbiAgfVxuXG4gIC5mb290ZXJwYXJ0e1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbn0iXX0= */";

/***/ }),

/***/ 1669:
/*!****************************************************************!*\
  !*** ./src/app/pages/clgdetails/coursinfo/coursinfo.page.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "body {\n  font-size: 14px;\n}\n\n.blue {\n  color: #0083dc;\n}\n\n.green {\n  color: #88d834;\n}\n\n.greenbtn {\n  --background:#88d834!important;\n}\n\n.gray {\n  color: gray;\n}\n\n.bgblue {\n  background: #0083dc;\n}\n\n.bggreen {\n  background: #88d834;\n}\n\n.starrate {\n  color: #e5b60c;\n}\n\n.px-12 {\n  padding: 0 12px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.smllbtn {\n  --box-shadow: none;\n}\n\n.segment1 {\n  margin-top: 10px;\n}\n\n.segment1 ion-segment-button {\n  border-radius: 22px;\n  text-transform: capitalize;\n  margin: 5px;\n}\n\n.segment1 ion-label {\n  color: black;\n}\n\n.segment2 {\n  margin-top: 16px;\n}\n\n.segment2 ion-segment-button {\n  text-transform: capitalize;\n}\n\n.clgcoverphoto {\n  background: url('clg_img.jpg');\n  height: 17vh;\n  position: relative;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 2rem;\n}\n\n.clgcoverphoto img {\n  width: 70px;\n  position: absolute;\n  bottom: -30px;\n  left: 10px;\n  border: 1px solid #d5d5d5;\n  background: #fff;\n  z-index: 1;\n  border-radius: 5px;\n  padding: 2px;\n}\n\n.shortInfo h4 {\n  margin: 0;\n}\n\n.shortInfo p {\n  display: flex;\n  flex-wrap: wrap;\n  color: #0083dc;\n}\n\n.shortInfo p .location, .shortInfo p .cment {\n  color: #383838;\n}\n\n.shortInfo p .starrate {\n  color: #e5b60c;\n}\n\n.ml-4 {\n  margin-left: 4px;\n}\n\n.mr-6 {\n  margin-right: 6px;\n}\n\n.bglightgry {\n  background: #f1f5f9;\n  margin: 4px;\n  padding: 6px 8px;\n  display: inline-block;\n  border-radius: 4px;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n  font-size: 14px;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\n.courseCard {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.courseCard .headpart {\n  padding: 8px 10px;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.courseCard .headpart h3 {\n  font-weight: 500;\n  font-size: 20px !important;\n  color: #0083dc;\n  margin-bottom: 6px !important;\n}\n\n.courseCard .headpart .star {\n  color: #e5b60c;\n}\n\n.courseCard .midpart {\n  padding: 8px 10px;\n}\n\n.courseCard .midpart span {\n  color: #797979;\n}\n\n.courseCard .midpart p {\n  margin: 6px 0;\n}\n\n.courseCard .footerpart {\n  padding-bottom: 8px;\n}\n\n.courseCard .greenbtn {\n  --background:#88d834!important;\n}\n\n.courseCard .boomark {\n  width: 36px;\n  height: 36px;\n  --padding: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n}\n\n.courseCard ion-button {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.textcenter {\n  text-align: center;\n}\n\n.caskqns {\n  padding-top: 20px;\n}\n\nul {\n  padding: 0 26px;\n  font-size: 14px;\n}\n\n.icontxt {\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n}\n\n.icontxt ion-icon {\n  font-size: 24px;\n  margin-right: 4px;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th {\n  background: aliceblue;\n  font-weight: 500;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin-top: 12px;\n}\n\n.likeDis {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.likeDis .like {\n  color: green;\n}\n\n.likeDis .dislike {\n  color: red;\n}\n\n.likeDis p {\n  color: #0083dc;\n}\n\n.likeDis span {\n  vertical-align: middle;\n}\n\n.mx-12 {\n  margin: 0 12px;\n}\n\n.radius-0 {\n  border-radius: 0 !important;\n}\n\n.whcard {\n  margin: 0;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.whcard .bdycard {\n  padding: 16px 10px;\n}\n\n::ng-deep .fieldmat .mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n\n::ng-deep .fieldmat {\n  width: 100% !important;\n}\n\n.table {\n  width: 100%;\n}\n\n.forumsec {\n  background: #f6f5e6;\n  padding: 12px;\n  background: #e4ecef;\n  padding: 22px 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.forumsec ion-input {\n  border-bottom: 1px solid #ddd;\n}\n\n.forumsec .setdiv {\n  background: white;\n  border-radius: 10px;\n  padding: 18px;\n}\n\n.forumsec .text-center {\n  text-align: center;\n}\n\n.forumsec h5 {\n  font-size: 14px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.login {\n  margin-top: -55px;\n  margin-bottom: 20px;\n  text-align: center;\n  height: 60px;\n}\n\n.login {\n  margin-top: -30px;\n  text-align: center;\n  height: 40px;\n}\n\n.login {\n  margin-top: -30px;\n  margin-bottom: 20px;\n  text-align: center;\n  height: 60px;\n}\n\n.main-div {\n  background: \"/../../src/assets/icon/simple-img.png\";\n}\n\n.setimg {\n  text-align: right;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.btn {\n  width: 90%;\n  height: 50px;\n  background-color: #007fdc !important;\n  margin: 15px;\n}\n\n.span {\n  color: blue;\n}\n\n.p1 {\n  padding-left: 40%;\n  color: gray;\n  margin-top: -13px;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 12px;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.matfield {\n  text-align: center;\n  margin: 16px;\n  border: 1px solid gray;\n  padding: 10px;\n  border-radius: 10px;\n  padding-top: 6px;\n  background: white;\n}\n\n.w-75 {\n  width: 93%;\n}\n\n.iconclose {\n  font-size: 20px;\n  color: red;\n}\n\nion-content {\n  --background: none !important;\n}\n\n.setrw {\n  border-bottom: 1px solid #e5e5e5;\n  margin: 12px 0;\n  padding-bottom: 8px;\n}\n\n.setrw img {\n  border-radius: 10px;\n  width: 100%;\n  border: 1px solid lightgray;\n  height: 85px;\n}\n\n.setrw p.p1 {\n  margin: 0;\n}\n\n.trending {\n  background: #f2f9ff;\n  padding: 20px 10px;\n  border-radius: 16px;\n  border: 1px solid #b6ddff;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.trending .setlist {\n  padding: 10px;\n  border: 1px solid #b8b88a;\n  border-radius: 15px;\n  margin: 10px;\n}\n\n.trending ion-item {\n  --padding-start: 0;\n  padding-inline-end: 0;\n  --background: transparent;\n}\n\n.trending h4 {\n  margin-top: 0;\n}\n\n.forumsec {\n  background: #f6f5e6;\n  padding: 12px;\n  background: #e4ecef;\n  padding: 22px 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.forumsec ion-input {\n  border-bottom: 1px solid #ddd;\n}\n\n.forumsec ion-button {\n  margin-top: 18px;\n}\n\n.forumsec .setdiv {\n  background: white;\n  border-radius: 10px;\n  padding: 18px;\n}\n\n.forumsec .text-center {\n  text-align: center;\n}\n\n.forumsec h5 {\n  font-size: 14px;\n}\n\n.headtxt {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.headtxt h4 {\n  font-size: 14px;\n  margin: 4px;\n}\n\n.courseCard {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  margin: 20px 0;\n}\n\n.course-header {\n  border-bottom: 1px solid #f0f0f0;\n  margin-bottom: 10px;\n}\n\n.course-name {\n  font-size: 18px;\n  font-weight: bold;\n  color: #333;\n}\n\n.overview-title {\n  font-size: 16px;\n  color: #555;\n  margin-left: 10px;\n}\n\n.apply-btn {\n  background-color: #88d834;\n  color: #fff;\n  font-size: 12px;\n  padding: 5px 10px;\n}\n\n.course-description h1 {\n  font-size: 14px;\n  color: #444;\n  line-height: 1.5;\n}\n\n.wikiContents {\n  margin-top: 20px;\n}\n\n.course-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.course-table td {\n  padding: 10px;\n  border-bottom: 1px solid #f0f0f0;\n  color: #333;\n  font-size: 14px;\n}\n\n.course-table td:first-child {\n  font-weight: bold;\n}\n\n.website-link {\n  color: #007bff;\n  text-decoration: none;\n}\n\n.website-link:hover {\n  text-decoration: underline;\n}\n\n.no-data-container {\n  background-color: #f8d7da;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n  margin: 20px 0;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.no-data-container h2 {\n  color: #721c24;\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,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cUJFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBbEJKOztBQXFCRTtFQUNFLDBCQUFBO0FBbEJKOztBQXFCRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QUFsQko7O0FBcUJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFsQkoiLCJmaWxlIjoiY291cnNpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYm9keSB7XG4gICAgZm9udC1zaXplOiAxNHB4OyAgXG59XG4uYmx1ZXtcbiAgICBjb2xvcjogIzAwODNkYztcbiB9XG4uZ3JlZW57XG4gICAgY29sb3I6ICM4OGQ4MzQ7XG59XG4uZ3JlZW5idG57XG4gICAgLS1iYWNrZ3JvdW5kOiM4OGQ4MzQhaW1wb3J0YW50O1xufVxuLmdyYXl7XG4gICAgY29sb3I6IGdyYXk7XG59XG4uYmdibHVle1xuICAgIGJhY2tncm91bmQ6ICMwMDgzZGM7XG4gfVxuLmJnZ3JlZW57XG4gICAgYmFja2dyb3VuZDogIzg4ZDgzNDtcbn1cbiAuc3RhcnJhdGV7XG4gICAgY29sb3I6ICNlNWI2MGM7XG59XG4ucHgtMTJ7XG4gICAgcGFkZGluZzogMCAxMnB4O1xufVxuLnB0LTEye1xuICAgIHBhZGRpbmctdG9wOjEycHg7XG59XG4uc21sbGJ0bntcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uc2VnbWVudDF7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweCA7ICAgXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICB9XG59XG4uc2VnbWVudDJ7IFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9ue1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG4uY2xnY292ZXJwaG90b3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2NsZ19pbWcvY2xnX2ltZy5qcGcpO1xuICAgIGhlaWdodDogMTd2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgaW1ne1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZDVkNTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgfVxufVxuLnNob3J0SW5mb3tcbiAgICBoNHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBwe1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgY29sb3I6ICMwMDgzZGM7XG4gICAgICAgIC5sb2NhdGlvbiwgLmNtZW50e1xuICAgICAgICAgICAgY29sb3I6ICMzODM4Mzg7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXJyYXRle1xuICAgICAgICAgICAgY29sb3I6ICNlNWI2MGM7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubWwtNHtcbiAgICBtYXJnaW4tbGVmdDo0cHg7XG59XG4ubXItNntcbiAgICBtYXJnaW4tcmlnaHQ6NnB4O1xufVxuLmJnbGlnaHRncnl7XG4gICAgYmFja2dyb3VuZDojZjFmNWY5O1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHBhZGRpbmc6IDZweCA4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzg4ZDgzNDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luOiAwcHggM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG59XG4uY2FwaXRhbGl6ZXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi50YWJib2R5e1xuICAgIHBhZGRpbmc6MTJweCAwcHg7XG4gICAgLmJnc21vY2tncmF5e1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmZTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICBwYWRkaW5nOjEycHg7XG4gICAgfVxuICAgIC5oZWFkY2FyZHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwODNkYztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2xpZHtcbiAgICAgICAgaW9uLWNhcmR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLldodGNhcmR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGJsY29udGVudHtcbiAgICBwe1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBjb2xvcjogIzAwODNkYzsgXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG4uYWNjb3JkaWFuc3tcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCAxMDUsIDAuMTUpIDBweCAycHggNXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDFweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAucGFyYWdyYXBoIGlvbi1sYWJlbHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG4gICAgaW9uLWFjY29yZGlvbntcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgICAgICB9XG4gICAgICAgIGgye1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWx7ICAgXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ucG9wdWxhcnR4dHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGgye1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cbi5jb3Vyc2VDYXJke1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5oZWFkcGFydHtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICBoM3tcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4M2RjO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXJ7XG4gICAgICAgICAgICBjb2xvcjogI2U1YjYwYztcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWlkcGFydHtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZm9vdGVycGFydHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICB9XG4gICAgLmdyZWVuYnRue1xuICAgICAgICAtLWJhY2tncm91bmQ6Izg4ZDgzNCFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5ib29tYXJre1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAtLXBhZGRpbmc6IDA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAgIH1cbn1cblxuLnRleHRjZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4uY2Fza3Fuc3tcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xufVxudWx7XG4gICAgcGFkZGluZzogMCAyNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pY29udHh0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGlvbi1pY29ue1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICBcbiAgICB9XG59XG50YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGZmO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcGFkZGluZzo2cHggOHB4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgfVxuICB0YWJsZSB0aHtcbiAgIGJhY2tncm91bmQ6YWxpY2VibHVlO1xuICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuaWNvbmJ0bntcbiAgICAtLXBhZGRpbmctZW5kOiAxMnB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcbiAgfVxuICAuc2VnbWVudFN0dWR7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuICAubGlrZURpc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5saWtle1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuICAgIC5kaXNsaWtle1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICBwe1xuICAgICAgICBjb2xvcjogIzAwODNkYztcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gIH1cbiAgLm14LTEye1xuICAgIG1hcmdpbjogMCAxMnB4O1xuICB9XG4ucmFkaXVzLTB7Ym9yZGVyLXJhZGl1czogMCFpbXBvcnRhbnQ7fVxuLndoY2FyZHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5iZHljYXJke1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDEwcHg7XG4gICAgfVxufVxuXG46Om5nLWRlZXAgLmZpZWxkbWF0IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmZpZWxkbWF0IHtcbndpZHRoOiAxMDAlIWltcG9ydGFudDtcbn0gXG5cbi50YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcnVtc2Vje1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDYgMjQ1IDIzMCk7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI4IDIzNiAyMzkpO1xuICAgIHBhZGRpbmc6IDIycHggMTBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgfVxuICAgIC5zZXRkaXZ7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAxOHB4OyAgICBcbiAgICB9XG4gICAgLnRleHQtY2VudGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGg1e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuXG5cbi8vIGlvbiBtb2RhbCBmb3JtIGNzc1xuLy8gLnctMTAwe1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICB9XG4gIFxuLy8gICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuLy8gICAgIHBhZGRpbmc6IDAuM2VtIDBweCAxMHB4IDBweCAhaW1wb3J0YW50O1xuLy8gICAgIH1cbi8vICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cbiAgXG4vLyAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbi8vICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XG4vLyAgICAgICB3aWR0aDogMTMzLjMzMzMzJTtcbi8vICAgfVxuLy8gICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XG4vLyAgIH1cbiAgXG4gIFxuLy8gICAubWFpbi1kaXYge1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgfVxuICBcbiAgXG4vLyAgIC53LTc1e1xuLy8gICAgIHdpZHRoOjEwMCU7XG4vLyAgIH1cbi8vIGlvbi1pbnB1dHtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCA7XG4vLyAgICAgd2lkdGg6IDgwJTtcbi8vICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4vLyB9XG4gLmVycm9ye1xuICBjb2xvcjpyZWQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7ICBcbn0gXG4ubG9naW57XG4gIG1hcmdpbi10b3A6IC01NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDsgICBcbn1cbi5sb2dpbntcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4OyAgXG59XG4ubG9naW57XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDsgICBcbn1cblxuXG5cbi5tYWluLWRpdntcbiAgICBiYWNrZ3JvdW5kOiAoJy8uLi8uLi9zcmMvYXNzZXRzL2ljb24vc2ltcGxlLWltZy5wbmcnKTtcbn1cbi5zZXRpbWd7XG4gIHRleHQtYWxpZ246cmlnaHQ7XG59XG4uZXhhbXBsZS1jb250YWluZXIgbWF0LWZvcm0tZmllbGQgKyBtYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICAuZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH0gXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbi5pY29ue1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOnJnYig5OSwgOTIsIDkyKTtcbn1cbi5idG57XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2ZkYyFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTVweDtcbn1cbi5zcGFue1xuICBjb2xvcjogYmx1ZTtcbn1cbi5wMXtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgICBjb2xvcjpncmF5O1xuICAgIG1hcmdpbi10b3A6IC0xM3B4XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAwLjNlbSAwcHggMTBweCAwcHggIWltcG9ydGFudDtcbiAgIFxuICAgIH1cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cbiAgXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XG4gICAgICB3aWR0aDogMTMzLjMzMzMzJTtcbiAgfVxuICAubWF0ZmllbGR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjoxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLnctNzV7XG4gICAgd2lkdGg6OTMlO1xuICAgIFxuICB9XG5cbiBcbi5pY29uY2xvc2V7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuICAvLyBpb24gbW9kYWwgZm9ybSBjc3NcbiBcbiAgXG4gIC8vIG5ld3MgJnVwZGF0ZXMgc2VjdGlvblxuLnNldHJ3IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgICBtYXJnaW46IDEycHggMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGltZ3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xuICAgIH1cbiAgICBwLnAxIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC50cmVuZGluZ3tcbiAgICBiYWNrZ3JvdW5kOiAjZjJmOWZmO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I2ZGRmZjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIFxuICAuc2V0bGlzdHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjg4YTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiBcbiAgaW9uLWl0ZW17XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIGg0e1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgXG4gIH1cblxuXG4gIC5mb3J1bXNlY3tcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ2IDI0NSAyMzApO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDIyOCAyMzYgMjM5KTtcbiAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICBcbiAgICB9XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIH1cbiAgICAuc2V0ZGl2e1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMThweDsgICAgXG4gICAgfVxuICAgIC50ZXh0LWNlbnRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBoNXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cblxuXG4uaGVhZHR4dHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLmNvdXJzZUNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cbiAgXG4gIC5jb3Vyc2UtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAuY291cnNlLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgLm92ZXJ2aWV3LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5hcHBseS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OGQ4MzQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICB9XG4gIFxuICAuY291cnNlLWRlc2NyaXB0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuICBcbiAgLndpa2lDb250ZW50cyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgLmNvdXJzZS10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuICBcbiAgLmNvdXJzZS10YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgXG4gIC5jb3Vyc2UtdGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAud2Vic2l0ZS1saW5rIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC53ZWJzaXRlLWxpbms6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIFxuICAubm8tZGF0YS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIFxuICAubm8tZGF0YS1jb250YWluZXIgaDIge1xuICAgIGNvbG9yOiAjNzIxYzI0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgIl19 */";

/***/ }),

/***/ 80057:
/*!************************************************************!*\
  !*** ./src/app/pages/clgdetails/cutoffs/cutoffs.page.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th {\n  background: aliceblue;\n  font-weight: 500;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin: 14px 0px;\n}\n\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n\n.caskqns {\n  margin-bottom: 14px;\n}\n\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n\n.filter-btn ion-icon {\n  vertical-align: middle;\n}\n\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\n\nion-modal {\n  --height: 80%;\n  --width:95%;\n  --border-radius: 14px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n\nion-modal::part(backdrop) {\n  background: #d1d5db;\n  opacity: 1;\n}\n\n.popucontent ion-toolbar {\n  border-bottom: 1px solid #ddd;\n}\n\n.popucontent .filterpop {\n  height: 80%;\n  border-bottom: 1px solid #ddd;\n}\n\n.popucontent .filterSegment {\n  flex-direction: column;\n}\n\n.popucontent .filterSegment ion-segment-button {\n  --color-checked: #5aaf01;\n  --indicator-height: 0px;\n  font-size: 13px;\n  --background-checked: #f6ffec;\n  --border-radius: 6px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  border: 0;\n  font-weight: 100 !important;\n}\n\n.popucontent .brR {\n  border-right: 1px solid #ddd;\n}\n\n.popucontent ion-checkbox {\n  margin-right: 12px;\n}\n\n.clgdescription {\n  background: #3b82f624;\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.slide_set {\n  width: 320.91px !important;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.accard {\n  border-radius: 8px;\n  background: white;\n  padding: 12px;\n  margin-top: 2rem;\n  box-shadow: rgba(205, 211, 214, 0.7) 0px 8px 20px;\n  border: 1px solid #f1f1f1;\n}\n\n.accard ion-item.item.md.item-fill-none.ion-focusable.hydrated.item-label.item-lines-full.ion-activatable {\n  --background: #88d834;\n  border-radius: 10px;\n}\n\n.accard h6 {\n  margin-top: 6px;\n  color: #000;\n}\n\n.accard .tbg {\n  background: #c4dafa;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  border: 1px solid #80b3fc;\n  color: #373737;\n}\n\n.accard table th, .accard table td {\n  color: #000 !important;\n  border: 1px solid #fff !important;\n}\n\n.accard .margin-top {\n  margin-top: 1rem;\n}\n\n.accard .divider {\n  border-bottom: 1px solid #3880ff;\n  padding: 16px;\n}\n\n.thirdsectionpop {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsectionpop .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsectionpop .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.size_setpop {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setpop ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setpop .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignpop {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spnpop {\n  color: var(--ion-color-secondary);\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_setpop {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-icon.active {\n  color: blue;\n}\n\n.size_setsuited {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setsuited ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setsuited .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,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OEJBQUE7QUFsQlA7O0FBcUJHO0VBQ0MsV0FBQTtBQWxCSjs7QUF3QkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFyQko7O0FBc0JJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFwQlI7O0FBc0JJO0VBRUksYUFBQTtFQUNBLHlCQUFBO0FBckJSOztBQXlCQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBdEJKOztBQXlCQTtFQUNJLGVBQUE7RUFBaUIsZ0JBQUE7RUFDakIsWUFBQTtFQUFjLDRCQUFBO0VBQ2QsVUFBQTtFQUFZLFlBQUE7RUFDWixvQkFBQTtFQUFzQixpQkFBQTtFQUN0QixlQUFBO0VBQWlCLDRCQUFBO0VBQ2pCLDJCQUFBO0VBQTZCLHNCQUFBO0FBaEJqQzs7QUFtQkUsMkJBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQVksMkJBQUE7QUFmaEI7O0FBa0JFLDZCQUFBOztBQUNBO0VBQ0UsU0FBQTtFQUFXLDBCQUFBO0FBZGYiLCJmaWxlIjoiY3V0b2Zmcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5weC0xMntcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG4ucHQtMTJ7XG4gICAgcGFkZGluZy10b3A6MTJweDtcbn1cbi50YWJib2R5e1xuICAgIHBhZGRpbmc6MTJweCAwcHg7XG4gICAgLmJnc21vY2tncmF5e1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmZTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICBwYWRkaW5nOjEycHg7XG4gICAgfVxuICAgIC5oZWFkY2FyZHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwODNkYztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2xpZHtcbiAgICAgICAgaW9uLWNhcmR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLldodGNhcmR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmFjY29yZGlhbnN7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgMTA1LCAwLjE1KSAwcHggMnB4IDVweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAxcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLnBhcmFncmFwaCBpb24tbGFiZWx7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgfVxuICAgIGlvbi1hY2NvcmRpb257XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVseyAgIFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLnRibGNvbnRlbnR7XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgY29sb3I6ICMwMDgzZGM7IFxuICAgIH1cbn1cbnRhYmxlLCB0aCwgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVkZmY7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBwYWRkaW5nOjZweCA4cHg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICB9XG4gIHRhYmxlIHRoe1xuICAgYmFja2dyb3VuZDphbGljZWJsdWU7XG4gICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5pY29uYnRue1xuICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICB9XG4gIC5zZWdtZW50U3R1ZHtcbiAgICBtYXJnaW46IDE0cHggMHB4O1xuICB9XG4gXG4gLnNlcmNoYmFye1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOjAhaW1wb3J0YW50O1xuICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHggOHB4IDQ1cHghaW1wb3J0YW50OyAgIFxuICAgIH1cbiAgIFxuIH0gXG4gLmNhc2txbnN7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiB9XG4gLmZpbHRlci1idG57XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW46IDAgNHB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgfVxuIH1cbiAuY2FyZGN1c3R7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgyMDUsIDIxMSwgMjE0LCAwLjIxKSAwcHggOHB4IDI1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiB9XG4gLnBhZ2luYXRpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOjEuNXJlbTtcbiAgfVxuICBcbiAgLnBhZ2luYXRpb24gbGkge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLnBhZ2luYXRpb24gbGkuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJkZDI2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIH1cbiAgLnBvcHVsYXJ0eHR7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBoMntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG59XG5pb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbjogMHB4IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuLnVzZXJSZXZpZXd7XG4gICAgLmZpcmN0Y2hhcntcbiAgICAgICAgYmFja2dyb3VuZDogI2ZkZGZlNDtcbiAgICAgICAgY29sb3I6ICNhNzBjMGM7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIHAuc2J0eHR7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICM0YjRiNGI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgLnJhdGVieXtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJhY2tncm91bmQ6ICMxMWM5MTg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgLnJhdGluZ0J0bnN7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgY29sb3I6ICMxMWM5MTg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICNkOWQ5ZDk7XG4gICAgICAgICAgICAtLWNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGgze1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4IWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLnRodW1iaWNvbntcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4YjhiOGI7XG4gICAgICAgICAgICBtYXJnaW46IDNweCA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLXBvcHVwLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pb24tbW9kYWwge1xuICAgIC0taGVpZ2h0OiA4MCU7XG4gICAgLS13aWR0aDo5NSU7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIC0tYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDRweCA2cHggLTRweCByZ2IoMCAwIDAgLyAwLjEpO1xuICB9XG4gIFxuICBpb24tbW9kYWw6OnBhcnQoYmFja2Ryb3ApIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOSwgMjEzLCAyMTkpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC5wb3B1Y29udGVudHtcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgfVxuICAgIC5maWx0ZXJwb3B7XG4gICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgfVxuICAgIC5maWx0ZXJTZWdtZW50e1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiAjNWFhZjAxO1xuICAgICAgICAgICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2Y2ZmZlYztcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgLy9tYXJnaW4tbGVmdDogLTEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC8vIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIC5iclJ7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkOyAgICBcbiAgICB9XG4gICAgaW9uLWNoZWNrYm94IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgIFxuICB9XG5cbiAgLmNsZ2Rlc2NyaXB0aW9ue1xuICAgIGJhY2tncm91bmQ6ICMzYjgyZjYyNDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zcGFue1xuICAgIGNvbG9yOiAjMDA4MWRjO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLnNldGxpa2Vjb2x7XG4gICAgZGlzcGxheTogZmxleDtcbiAgXG59XG5cbi5zbGlkZV9zZXR7XG4gICAgd2lkdGg6IDMyMC45MXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yYXRlc3tcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xuICAgICAgICBjb2xvcjogIzExYzkxODtcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1uZXcgY3NzLS0tLS0tLS0tLS0tLS1cblxuXG4udGFiYm9keXtcbiAgICBwYWRkaW5nOjEycHggMHB4O1xuICAgIC5iZ3Ntb2NrZ3JheXtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmU7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgIH1cbiAgICAuaGVhZGNhcmR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNsaWR7XG4gICAgICAgIGlvbi1jYXJke1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5XaHRjYXJke1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5hY2NvcmRpYW5ze1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5wYXJhZ3JhcGggaW9uLWxhYmVse1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cbiAgICBpb24tYWNjb3JkaW9ue1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbHsgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi5hY2NhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuNykgMHB4IDhweCAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgaW9uLWl0ZW0uaXRlbS5tZC5pdGVtLWZpbGwtbm9uZS5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkLml0ZW0tbGFiZWwuaXRlbS1saW5lcy1mdWxsLmlvbi1hY3RpdmF0YWJsZSB7XG4gICAgICAtLWJhY2tncm91bmQ6ICM4OGQ4MzQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIGg2e1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuICAudGJne1xuICAgIGJhY2tncm91bmQ6ICNjNGRhZmE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvLyBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgwYjNmYztcbiAgICBjb2xvcjogIzM3MzczNztcbiAgfVxuICB0YWJsZSB0aCwgdGFibGUgdGR7XG4gICAgY29sb3I6ICMwMDAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmYhaW1wb3J0YW50O1xuICB9XG4gIC5tYXJnaW4tdG9we1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbiBcbiAgLmRpdmlkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzODgwZmY7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICB9XG5cbiAgLy8gLS0tLS1cblxuXG4udGhpcmRzZWN0aW9ucG9we1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDUsIDI1NSwgMC4zODAzOTIxNTY5KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTNkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NCkgMCUsIHJnYmEoMCwgMCwgMCwgMC4wMykgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBsaWdodGVuO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAuSGVhZFR4dCB7XG4gICAgaDV7XG4gICAgICAgIG1hcmdpbjogMnB4IDBweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzdmOGM4ZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICB9XG4gICBcbn0gXG5cblxuLnNpemVfc2V0cG9wIHtcbiAgICAvLyAgIG1pbi1oZWlnaHQ6IDI3MHB4O1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICB3b3JkLXNwYWNpbmc6IDJweDtcbiAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgIC0tb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICAgICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICBjb250YWluOiB1bnNldDtcbiAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgYm94LXNoYWRvdzogcmdiYSgyMDUsIDIxMSwgMjE0LCAwLjIxKSAwcHggOHB4IDI1cHg7XG4gICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDdweDtcbiAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA3cHg7XG4gICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgfVxuICAgICAgIC5ib29tYXJre1xuICAgICAgICAgIFxuICAgICAgICAgICAtLWNvbG9yOiBncmF5O1xuICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogbGlnaHRncmV5O1xuICAgICAgIH1cbiAgIH1cbiAgIC5pbWdfYWxpZ25wb3Age1xuICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgICAgLy8gbGVmdDogMjBweDtcbiAgICAgICAvLyB0b3A6IC0xMiU7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgIH1cbiAgIC5zcG5wb3B7XG4gICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgXG4gICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICB9XG4gICAudGl0X3NldHBvcHtcbiAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgbWFyZ2luOiAwO1xuICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgIH1cbiAgIC5idG5zZXRze1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgfVxuXG4gICBpb24taWNvbi5hY3RpdmUge1xuICAgIGNvbG9yOiBibHVlOyBcbiAgfVxuXG5cblxuXG4gIC5zaXplX3NldHN1aXRlZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd29yZC1zcGFjaW5nOiAycHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAtLW92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgY29udGFpbjogdW5zZXQ7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjA1LCAyMTEsIDIxNCwgMC4yMSkgMHB4IDhweCAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICBpb24tYnV0dG9ue1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA3cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogN3B4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuYm9vbWFya3tcbiAgICAgICBcbiAgICAgICAgLS1jb2xvcjogZ3JheTtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB9XG59XG5cbi5zcGFue1xuICAgIGNvbG9yOiAjMDA4MWRjO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDsgLyogQWRqdXN0IHNpemUgKi9cbiAgICBjb2xvcjogYmxhY2s7IC8qIEJsYWNrIG91dGxpbmUgaW5pdGlhbGx5ICovXG4gICAgZmlsbDogbm9uZTsgLyogTm8gZmlsbCAqL1xuICAgIHN0cm9rZTogY3VycmVudENvbG9yOyAvKiBCb3JkZXIgY29sb3IgKi9cbiAgICBzdHJva2Utd2lkdGg6IDI7IC8qIEFkanVzdCBib3JkZXIgdGhpY2tuZXNzICovXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlOyAvKiBTbW9vdGggdHJhbnNpdGlvbiAqL1xuICB9XG4gIFxuICAvKiBUaHVtYnMtVXAgaWNvbiBjbGlja2VkICovXG4gIC50aHVtYnMtdXBbc3R5bGUqPVwiYmx1ZVwiXSB7XG4gICAgZmlsbDogYmx1ZTsgLyogRmlsbCBibHVlIHdoZW4gY2xpY2tlZCAqL1xuICB9XG4gIFxuICAvKiBUaHVtYnMtRG93biBpY29uIGNsaWNrZWQgKi9cbiAgLnRodW1icy1kb3duW3N0eWxlKj1cInJlZFwiXSB7XG4gICAgZmlsbDogcmVkOyAvKiBGaWxsIHJlZCB3aGVuIGNsaWNrZWQgKi9cbiAgfVxuIl19 */";

/***/ }),

/***/ 77797:
/*!**************************************************************************!*\
  !*** ./src/app/pages/clgdetails/infrastructure/infrastructure.page.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th.dblue {\n  background: #004983;\n  font-weight: 500;\n  color: #fff;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin: 14px 0px;\n}\n\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n\n.caskqns {\n  margin-bottom: 14px;\n}\n\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n\n.filter-btn ion-icon {\n  vertical-align: middle;\n}\n\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\n\n.datevnt {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.datevnt ion-icon {\n  font-size: 18px;\n  vertical-align: sub;\n}\n\n.datevnt .blutxt {\n  color: #0081dc;\n  text-align: right;\n}\n\n.iconfix {\n  font-size: 20px;\n  vertical-align: text-top;\n}\n\n.blutxt {\n  color: #0081dc;\n}\n\n.colored {\n  color: red;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.infrafacility img {\n  width: 30px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n\n.infrafacility p {\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 12px;\n}\n\n.infrafacility h6 {\n  font-size: 14px;\n}\n\n.infrafacility ion-list {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.infrafacility mat-icon {\n  color: #0081dc;\n  margin-right: 6px;\n}\n\n.infrafacility ion-item {\n  width: 50%;\n  font-size: 14px;\n}\n\n.sbtxt {\n  font-size: 14px;\n  font-weight: 300 !important;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin-bottom: 2px;\n  margin-top: 2px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.thirdsectionpop {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsectionpop .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsectionpop .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.size_setpop {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setpop ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setpop .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignpop {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spnpop {\n  color: var(--ion-color-secondary);\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_setpop {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-icon.active {\n  color: blue;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZnJhc3RydWN0dXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQURJO0VBQ0sseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFHVDs7QUFESTtFQUNJLGFBQUE7QUFHUjs7QUFGUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFJWjs7QUFGUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBSVo7O0FBRlE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFJWjs7QUFBUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBRVo7O0FBQVE7RUFDSSxnQkFBQTtBQUVaOztBQURZO0VBQ0ksZ0JBQUE7QUFHaEI7O0FBRFk7RUFDSSxjQUFBO0FBR2hCOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSx3RkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQUk7RUFDSSxnQkFBQTtBQUVSOztBQUFJO0VBQ0ksbUJBQUE7QUFFUjs7QUFBSTtFQUNJLGdDQUFBO0FBRVI7O0FBRFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFHWjs7QUFEUTtFQUNJLGdCQUFBO0FBR1o7O0FBRFE7RUFDSSxlQUFBO0FBR1o7O0FBRUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNSOztBQUVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBR0o7O0FBREU7RUFDRSxnQkFBQTtBQUlKOztBQURDO0VBQ0csNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0FBSUo7O0FBSEk7RUFDSSxxQ0FBQTtBQUtSOztBQURDO0VBQ0csbUJBQUE7QUFJSjs7QUFGQztFQUNHLGlCQUFBO0VBQ0EsbUJBQUE7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REk7RUFDSSxlQUFBO0FBR1I7O0FBREk7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR1I7O0FBSUE7RUFFTyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFGUDs7QUFHTztFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRFg7O0FBR087RUFFSSxhQUFBO0VBQ0EseUJBQUE7QUFGWDs7QUFLRztFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBR0EseUJBQUE7QUFKUDs7QUFNRztFQUNJLGlDQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFKUDs7QUFNRztFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFIUDs7QUFLRztFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUZQOztBQUtHO0VBQ0MsV0FBQTtBQUZKOztBQUtFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFBaUIsZ0JBQUE7RUFDakIsWUFBQTtFQUFjLDRCQUFBO0VBQ2QsVUFBQTtFQUFZLFlBQUE7RUFDWixvQkFBQTtFQUFzQixpQkFBQTtFQUN0QixlQUFBO0VBQWlCLDRCQUFBO0VBQ2pCLDJCQUFBO0VBQTZCLHNCQUFBO0FBSWpDOztBQURFLDJCQUFBOztBQUNBO0VBQ0UsVUFBQTtFQUFZLDJCQUFBO0FBS2hCOztBQUZFLDZCQUFBOztBQUNBO0VBQ0UsU0FBQTtFQUFXLDBCQUFBO0FBTWYiLCJmaWxlIjoiaW5mcmFzdHJ1Y3R1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHgtMTJ7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuLnB0LTEye1xuICAgIHBhZGRpbmctdG9wOjEycHg7XG59XG4udGFiYm9keXtcbiAgICBwYWRkaW5nOjEycHggMHB4O1xuICAgIC5iZ3Ntb2NrZ3JheXtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmU7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgIH1cbiAgICAuaGVhZGNhcmR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNsaWR7XG4gICAgICAgIGlvbi1jYXJke1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5XaHRjYXJke1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5hY2NvcmRpYW5ze1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5wYXJhZ3JhcGggaW9uLWxhYmVse1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cbiAgICBpb24tYWNjb3JkaW9ue1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbHsgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi50Ymxjb250ZW50e1xuICAgIHB7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcbiAgICB9XG59XG50YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGZmO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcGFkZGluZzo2cHggOHB4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgfVxuICB0YWJsZSB0aC5kYmx1ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMDA0OTgzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmljb25idG57XG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIH1cbiAgLnNlZ21lbnRTdHVke1xuICAgIG1hcmdpbjogMTRweCAwcHg7XG4gIH1cbiBcbiAuc2VyY2hiYXJ7XG4gICAgLS1ib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweCA4cHggNDVweCFpbXBvcnRhbnQ7ICAgXG4gICAgfVxuICAgXG4gfSBcbiAuY2Fza3Fuc3tcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuIH1cbiAuZmlsdGVyLWJ0bntcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1hcmdpbjogMCA0cHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICB9XG4gfVxuIC5jYXJkY3VzdHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuIH1cbiAucGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6MS41cmVtO1xuICB9XG4gIFxuICAucGFnaW5hdGlvbiBsaSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICAucGFnaW5hdGlvbiBsaS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MmRkMjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuICAucG9wdWxhcnR4dHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGgye1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzg4ZDgzNDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luOiAwcHggM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG59XG4udXNlclJldmlld3tcbiAgICAuZmlyY3RjaGFye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmRkZmU0O1xuICAgICAgICBjb2xvcjogI2E3MGMwYztcbiAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgcC5zYnR4dHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzRiNGI0YjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICAucmF0ZWJ5e1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYmFja2dyb3VuZDogIzExYzkxODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAucmF0aW5nQnRuc3tcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBjb2xvcjogIzExYzkxODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcbiAgICAgICAgICAgIC0tY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaDN7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAudGh1bWJpY29ue1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzhiOGI4YjtcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRhdGV2bnR7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgIH1cbiAgICAuYmx1dHh0e1xuICAgICAgIGNvbG9yOiAjMDA4MWRjO1xuICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbn1cbi5pY29uZml4e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG59XG4uYmx1dHh0e1xuICAgIGNvbG9yOiAjMDA4MWRjO1xuIH1cbiAgLmNvbG9yZWR7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICAub3ZyYWxscmF0aW5ne1xuICAgIGgxe1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAucCwgLnN0YXJyYXRleHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG4gICAgLmJsdXR4dHtcbiAgICAgICAgY29sb3I6ICMwMDgzZGM7XG4gICAgfVxuICAgIC5zdGFycmF0ZXtcbiAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgfVxuICAgIC5ydHZhbHVle1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC52ZXJ0eHR7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBtYXJnaW46IDEycHggMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XG59XG4uaGlnaGxpZ3Rib3h7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAuYWxpY2VibHVle1xuICAgICAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxuICAgIC5waW5rbGlnaHR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWVjZWU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuICAgIFxufVxuLnJhdGVze1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIH1cbn1cbi5pbmZyYWZhY2lsaXR5e1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgfVxuICAgIGg2e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGlvbi1saXN0e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIG1hdC1pY29uIHtcbiAgICAgICBcbiAgICAgICAgY29sb3I6ICMwMDgxZGM7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgXG59XG4uc2J0eHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG59XG4udGhpcmRzZWN0aW9uIC5IZWFkVHh0IGg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uc3BhbntcbiAgICBjb2xvcjogIzAwODFkYztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi5zZXRsaWtlY29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIFxufVxuXG5cbi8vIC0tLS0tXG5cblxuLnRoaXJkc2VjdGlvbnBvcHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjQ1LCAyNTUsIDAuMzgwMzkyMTU2OSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMDMpIDEwMCUpO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgLkhlYWRUeHQge1xuICAgIGg1e1xuICAgICAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gICAgfVxuICAgXG59IFxuXG5cbi5zaXplX3NldHBvcCB7XG4gICAgLy8gICBtaW4taGVpZ2h0OiAyNzBweDtcbiAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgd29yZC1zcGFjaW5nOiAycHg7XG4gICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAtLW92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgICAgb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgY29udGFpbjogdW5zZXQ7XG4gICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjA1LCAyMTEsIDIxNCwgMC4yMSkgMHB4IDhweCAyNXB4O1xuICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA3cHg7XG4gICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogN3B4O1xuICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgIH1cbiAgICAgICAuYm9vbWFya3tcbiAgICAgICAgICBcbiAgICAgICAgICAgLS1jb2xvcjogZ3JheTtcbiAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcbiAgICAgICB9XG4gICB9XG4gICAuaW1nX2FsaWducG9wIHtcbiAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgIC8vIGxlZnQ6IDIwcHg7XG4gICAgICAgLy8gdG9wOiAtMTIlO1xuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWM5Yzk7XG4gICB9XG4gICAuc3BucG9we1xuICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIFxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgfVxuICAgLnRpdF9zZXRwb3B7XG4gICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gICB9XG4gICAuYnRuc2V0c3tcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgIH1cblxuICAgaW9uLWljb24uYWN0aXZlIHtcbiAgICBjb2xvcjogYmx1ZTsgXG4gIH1cblxuICAuc3BhbntcbiAgICBjb2xvcjogIzAwODFkYztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7IC8qIEFkanVzdCBzaXplICovXG4gICAgY29sb3I6IGJsYWNrOyAvKiBCbGFjayBvdXRsaW5lIGluaXRpYWxseSAqL1xuICAgIGZpbGw6IG5vbmU7IC8qIE5vIGZpbGwgKi9cbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjsgLyogQm9yZGVyIGNvbG9yICovXG4gICAgc3Ryb2tlLXdpZHRoOiAyOyAvKiBBZGp1c3QgYm9yZGVyIHRoaWNrbmVzcyAqL1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gKi9cbiAgfVxuICBcbiAgLyogVGh1bWJzLVVwIGljb24gY2xpY2tlZCAqL1xuICAudGh1bWJzLXVwW3N0eWxlKj1cImJsdWVcIl0ge1xuICAgIGZpbGw6IGJsdWU7IC8qIEZpbGwgYmx1ZSB3aGVuIGNsaWNrZWQgKi9cbiAgfVxuICBcbiAgLyogVGh1bWJzLURvd24gaWNvbiBjbGlja2VkICovXG4gIC50aHVtYnMtZG93bltzdHlsZSo9XCJyZWRcIl0ge1xuICAgIGZpbGw6IHJlZDsgLyogRmlsbCByZWQgd2hlbiBjbGlja2VkICovXG4gIH1cbiJdfQ== */";

/***/ }),

/***/ 28313:
/*!******************************************************!*\
  !*** ./src/app/pages/clgdetails/news/news.page.scss ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".px-12 {\n  padding: 0 10px !important;\n}\n\n.py-12 {\n  padding: 12px 0 !important;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.headtxt {\n  font-weight: 500 !important;\n}\n\n.sbtxt {\n  font-size: 14px;\n  font-weight: 300 !important;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\n.segmentStud {\n  margin-top: 12px;\n}\n\n.likeDis {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.likeDis .like {\n  color: green;\n}\n\n.likeDis .dislike {\n  color: red;\n}\n\n.likeDis p {\n  color: #0083dc;\n}\n\n.likeDis span {\n  vertical-align: middle;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.m-12 {\n  margin: 12px;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.border-y {\n  margin-bottom: 14px;\n  padding: 0px 12px;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.px-12 {\n  padding: 0 12px;\n}\n\n.mt0 {\n  margin-top: 0;\n}\n\n.firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\np.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin-bottom: 2px;\n  margin-top: 2px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.setpic {\n  width: 100%;\n  max-height: 150px;\n  overflow: hidden;\n}\n\n.setnoimage {\n  height: 150px;\n  width: 100%;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksMkJBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSwyQkFBQTtBQUtKOztBQUZJO0VBQ0ksZ0JBQUE7QUFLUjs7QUFISTtFQUNJLFNBQUE7RUFDQSxXQUFBO0FBS1I7O0FBSEk7RUFDSSxjQUFBO0FBS1I7O0FBSEk7RUFDQyxpQkFBQTtBQUtMOztBQUhJO0VBQ0ksa0JBQUE7QUFLUjs7QUFISTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUtSOztBQUpRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBTVo7O0FBREE7RUFDSSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFKSTtFQUNJLGdCQUFBO0FBTVI7O0FBSEE7RUFDSSxnQkFBQTtBQU1KOztBQUpFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFPSjs7QUFOSTtFQUNJLFlBQUE7QUFRUjs7QUFOSTtFQUNJLFVBQUE7QUFRUjs7QUFOSTtFQUNJLGNBQUE7QUFRUjs7QUFOSTtFQUNJLHNCQUFBO0FBUVI7O0FBTEU7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtBQVVKOztBQVRJO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBV1I7O0FBVEk7RUFDSSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVdSOztBQVBBO0VBQ0ksZUFBQTtBQVVKOztBQVRJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Ysc0JBQUE7QUFXTjs7QUFSQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFXSjs7QUFSQTtFQUNJLGdCQUFBO0FBV0o7O0FBVEE7RUFDSSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxhQUFBO0FBYUo7O0FBWEE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBZUo7O0FBYkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFnQko7O0FBWkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQWVKOztBQVpBO0VBQ0ksYUFBQTtBQWVKOztBQVhBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFjSjs7QUFaQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBZUo7O0FBWkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQWVKOztBQVpBO0VBQ0ksZUFBQTtFQUFpQixnQkFBQTtFQUNqQixZQUFBO0VBQWMsNEJBQUE7RUFDZCxVQUFBO0VBQVksWUFBQTtFQUNaLG9CQUFBO0VBQXNCLGlCQUFBO0VBQ3RCLGVBQUE7RUFBaUIsNEJBQUE7RUFDakIsMkJBQUE7RUFBNkIsc0JBQUE7QUFxQmpDOztBQWxCRSwyQkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFBWSwyQkFBQTtBQXNCaEI7O0FBbkJFLDZCQUFBOztBQUNBO0VBQ0UsU0FBQTtFQUFXLDBCQUFBO0FBdUJmIiwiZmlsZSI6Im5ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB4LTEye1xuICAgIHBhZGRpbmc6IDAgMTBweCFpbXBvcnRhbnQ7XG59XG4ucHktMTJ7XG4gICAgcGFkZGluZzogMTJweCAwIWltcG9ydGFudDtcbn1cbi5wdC0xMntcbiAgICBwYWRkaW5nLXRvcDoxMnB4O1xufVxuLmhlYWR0eHR7XG4gICAgZm9udC13ZWlnaHQ6IDUwMCFpbXBvcnRhbnQ7XG59XG4uc2J0eHR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDAhaW1wb3J0YW50O1xufVxuLm92cmFsbHJhdGluZ3tcbiAgICBoMXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLnAsIC5zdGFycmF0ZXh7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuICAgIC5ibHV0eHR7XG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xuICAgIH1cbiAgICAuc3RhcnJhdGV7XG4gICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIH1cbiAgICAucnR2YWx1ZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAudmVydHh0e1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgbWFyZ2luOiAxMnB4IDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTA3O1xufVxuLnBvcHVsYXJ0eHR7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBoMntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG59XG4uc2VnbWVudFN0dWR7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuICAubGlrZURpc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5saWtle1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuICAgIC5kaXNsaWtle1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICBwe1xuICAgICAgICBjb2xvcjogIzAwODNkYztcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gIH1cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmZmZmY7XG4gICAgLS1pbmRpY2F0b3ItaGVpZ2h0OiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjODhkODM0O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIGhlaWdodDogMzhweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW46IDBweCAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbn1cbi5tLTEye1xuICAgIG1hcmdpbjogMTJweDtcbn1cbi5oaWdobGlndGJveHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIC5hbGljZWJsdWV7XG4gICAgICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOjEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG4gICAgLnBpbmtsaWdodHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5ZWNlZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOjEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICB9XG4gICAgXG59XG4ucmF0ZXN7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogIzExYzkxODtcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgfVxufVxuLmJvcmRlci15e1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgcGFkZGluZzogMHB4IDEycHg7XG4gICAgLy9ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xufVxuLm10LTEwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucHgtMTJ7XG4gICAgcGFkZGluZzogMCAxMnB4O1xufVxuLm10MHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuLmZpcmN0Y2hhcntcbiAgICBiYWNrZ3JvdW5kOiAjZmRkZmU0O1xuICAgIGNvbG9yOiAjYTcwYzBjO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxucC5zYnR4dHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICM0YjRiNGI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLnRoaXJkc2VjdGlvbiAuSGVhZFR4dCBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cblxuXG4uc3BhbntcbiAgICBjb2xvcjogIzAwODFkYztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi5zZXRsaWtlY29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIFxufVxuXG4uc2V0cGlje1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2V0bm9pbWFnZXtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc3BhbntcbiAgICBjb2xvcjogIzAwODFkYztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7IC8qIEFkanVzdCBzaXplICovXG4gICAgY29sb3I6IGJsYWNrOyAvKiBCbGFjayBvdXRsaW5lIGluaXRpYWxseSAqL1xuICAgIGZpbGw6IG5vbmU7IC8qIE5vIGZpbGwgKi9cbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjsgLyogQm9yZGVyIGNvbG9yICovXG4gICAgc3Ryb2tlLXdpZHRoOiAyOyAvKiBBZGp1c3QgYm9yZGVyIHRoaWNrbmVzcyAqL1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gKi9cbiAgfVxuICBcbiAgLyogVGh1bWJzLVVwIGljb24gY2xpY2tlZCAqL1xuICAudGh1bWJzLXVwW3N0eWxlKj1cImJsdWVcIl0ge1xuICAgIGZpbGw6IGJsdWU7IC8qIEZpbGwgYmx1ZSB3aGVuIGNsaWNrZWQgKi9cbiAgfVxuICBcbiAgLyogVGh1bWJzLURvd24gaWNvbiBjbGlja2VkICovXG4gIC50aHVtYnMtZG93bltzdHlsZSo9XCJyZWRcIl0ge1xuICAgIGZpbGw6IHJlZDsgLyogRmlsbCByZWQgd2hlbiBjbGlja2VkICovXG4gIH1cbiAgIl19 */";

/***/ }),

/***/ 20816:
/*!******************************************************************!*\
  !*** ./src/app/pages/clgdetails/placements/placements.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 100%;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th.dblue {\n  background: #004983;\n  font-weight: 500;\n  color: #fff;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin: 14px 0px;\n}\n\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n\n.caskqns {\n  margin-bottom: 14px;\n}\n\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n\n.filter-btn ion-icon {\n  vertical-align: middle;\n}\n\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\n\n.datevnt {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.datevnt ion-icon {\n  font-size: 18px;\n  vertical-align: sub;\n}\n\n.datevnt .blutxt {\n  color: #0081dc;\n  text-align: right;\n}\n\n.iconfix {\n  font-size: 20px;\n  vertical-align: text-top;\n}\n\n.blutxt {\n  color: #0081dc;\n}\n\n.colored {\n  color: red;\n}\n\n.ovrallrating {\n  margin-top: 33px;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin-bottom: 2px;\n  margin-top: 2px;\n}\n\n.boomark {\n  --color: gray;\n  --border-color: #cfcfcf;\n  font-size: 12px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.tit_set {\n  word-break: break-all;\n}\n\n.setpic {\n  width: 100%;\n  max-height: 150px;\n  overflow: hidden;\n  margin: 6px 6px 20px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.thirdsectionpop {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsectionpop .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsectionpop .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.size_setpop {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setpop ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setpop .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignpop {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spnpop {\n  color: var(--ion-color-secondary);\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_setpop {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\nion-icon.active {\n  color: blue;\n}\n\n.size_setsuited {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setsuited ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setsuited .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBREk7RUFFSyxtQkFBQTtFQUNBLGFBQUE7QUFFVDs7QUFBSTtFQUNJLGFBQUE7QUFFUjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFHWjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBR1o7O0FBRFE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFHWjs7QUFDUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBQ1o7O0FBQ1E7RUFDSSxnQkFBQTtBQUNaOztBQUFZO0VBQ0ksZ0JBQUE7QUFFaEI7O0FBQVk7RUFDSSxjQUFBO0FBRWhCOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSx3RkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBQ0k7RUFDSSxnQkFBQTtBQUNSOztBQUNJO0VBQ0ksbUJBQUE7QUFDUjs7QUFDSTtFQUNJLGdDQUFBO0FBQ1I7O0FBQVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFFWjs7QUFBUTtFQUNJLGdCQUFBO0FBRVo7O0FBQVE7RUFDSSxlQUFBO0FBRVo7O0FBR0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUdBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUU7RUFDRSxnQkFBQTtBQUdKOztBQUFDO0VBQ0csNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0FBR0o7O0FBRkk7RUFDSSxxQ0FBQTtBQUlSOztBQUFDO0VBQ0csbUJBQUE7QUFHSjs7QUFEQztFQUNHLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSUo7O0FBSEk7RUFDSSxzQkFBQTtBQUtSOztBQUZDO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrREFBQTtFQUNBLHlCQUFBO0FBS0o7O0FBSEM7RUFDRyxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpFO0VBQ0UsZ0JBQUE7QUFPSjs7QUFOSTtFQUNJLGdCQUFBO0FBUVI7O0FBTEE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBUUo7O0FBTEk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVFSOztBQU5JO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBUVI7O0FBTkk7RUFDSSxlQUFBO0VBQ0osbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTFE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFPWjs7QUFMUTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFPWjs7QUFKSTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUFNUjs7QUFKSTtFQUNJLDBCQUFBO0FBTVI7O0FBTFE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFPWjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSkk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFNUjs7QUFKSTtFQUNHLGNBQUE7RUFDQSxpQkFBQTtBQU1QOztBQUhBO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEU7RUFDRSxVQUFBO0FBUUo7O0FBTkU7RUFDRSxnQkFBQTtBQVNKOztBQVJJO0VBQ0ksZ0JBQUE7QUFVUjs7QUFSSTtFQUNJLFNBQUE7RUFDQSxXQUFBO0FBVVI7O0FBUkk7RUFDSSxjQUFBO0FBVVI7O0FBUkk7RUFDQyxpQkFBQTtBQVVMOztBQVJJO0VBQ0ksa0JBQUE7QUFVUjs7QUFSSTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVVSOztBQVRRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBV1o7O0FBTkE7RUFDSSx5QkFBQTtBQVNKOztBQVBBO0VBQ0ksZ0JBQUE7QUFVSjs7QUFUSTtFQUNJLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVdSOztBQVRJO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFXUjs7QUFQQTtFQUNJLGVBQUE7QUFVSjs7QUFUSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNGLHNCQUFBO0FBV047O0FBUkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFXSjs7QUFUQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBWUo7O0FBVkE7RUFDSSxxQkFBQTtBQWFKOztBQVhBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQWNKOztBQVhBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFjSjs7QUFaQTtFQUNJLGFBQUE7QUFlSjs7QUFQQTtFQUNJLDZDQUFBO0VBQ0EsZ0dBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFVSjs7QUFSSTtFQUNJLGVBQUE7QUFVUjs7QUFSSTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFVUjs7QUFIQTtFQUVPLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUtQOztBQUpPO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFNWDs7QUFKTztFQUVJLGFBQUE7RUFDQSx5QkFBQTtBQUtYOztBQUZHO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFHQSx5QkFBQTtBQUdQOztBQURHO0VBQ0ksaUNBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdQOztBQURHO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUlQOztBQUZHO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBS1A7O0FBRkc7RUFDQyxXQUFBO0FBS0o7O0FBQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFESTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBR1I7O0FBREk7RUFFSSxhQUFBO0VBQ0EseUJBQUE7QUFFUjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQWlCLGdCQUFBO0VBQ2pCLFlBQUE7RUFBYyw0QkFBQTtFQUNkLFVBQUE7RUFBWSxZQUFBO0VBQ1osb0JBQUE7RUFBc0IsaUJBQUE7RUFDdEIsZUFBQTtFQUFpQiw0QkFBQTtFQUNqQiwyQkFBQTtFQUE2QixzQkFBQTtBQU9qQzs7QUFKRSwyQkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFBWSwyQkFBQTtBQVFoQjs7QUFMRSw2QkFBQTs7QUFDQTtFQUNFLFNBQUE7RUFBVywwQkFBQTtBQVNmIiwiZmlsZSI6InBsYWNlbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHgtMTJ7XG4gICAgcGFkZGluZzogMCAxMHB4O1xufVxuLnB0LTEye1xuICAgIHBhZGRpbmctdG9wOjEycHg7XG59XG4udGFiYm9keXtcbiAgICBwYWRkaW5nOjEycHggMHB4O1xuICAgIC5iZ3Ntb2NrZ3JheXtcbiAgICAgICAgLy8gIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmU7XG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgIH1cbiAgICAuaGVhZGNhcmR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDgzZGM7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNsaWR7XG4gICAgICAgIGlvbi1jYXJke1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5XaHRjYXJke1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5hY2NvcmRpYW5ze1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5wYXJhZ3JhcGggaW9uLWxhYmVse1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cbiAgICBpb24tYWNjb3JkaW9ue1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbHsgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi50Ymxjb250ZW50e1xuICAgIHB7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcbiAgICB9XG59XG50YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGZmO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcGFkZGluZzo2cHggOHB4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgfVxuICB0YWJsZSB0aC5kYmx1ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMDA0OTgzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmljb25idG57XG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIH1cbiAgLnNlZ21lbnRTdHVke1xuICAgIG1hcmdpbjogMTRweCAwcHg7XG4gIH1cbiBcbiAuc2VyY2hiYXJ7XG4gICAgLS1ib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweCA4cHggNDVweCFpbXBvcnRhbnQ7ICAgXG4gICAgfVxuICAgXG4gfSBcbiAuY2Fza3Fuc3tcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuIH1cbiAuZmlsdGVyLWJ0bntcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1hcmdpbjogMCA0cHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICB9XG4gfVxuIC5jYXJkY3VzdHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuIH1cbiAucGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6MS41cmVtO1xuICB9XG4gIFxuICAucGFnaW5hdGlvbiBsaSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICAucGFnaW5hdGlvbiBsaS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MmRkMjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuICAucG9wdWxhcnR4dHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGgye1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzg4ZDgzNDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luOiAwcHggM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG59XG4udXNlclJldmlld3tcbiAgICAuZmlyY3RjaGFye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmRkZmU0O1xuICAgICAgICBjb2xvcjogI2E3MGMwYztcbiAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgcC5zYnR4dHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzRiNGI0YjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICAucmF0ZWJ5e1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYmFja2dyb3VuZDogIzExYzkxODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAucmF0aW5nQnRuc3tcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBjb2xvcjogIzExYzkxODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcbiAgICAgICAgICAgIC0tY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaDN7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAudGh1bWJpY29ue1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzhiOGI4YjtcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRhdGV2bnR7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgIH1cbiAgICAuYmx1dHh0e1xuICAgICAgIGNvbG9yOiAjMDA4MWRjO1xuICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbn1cbi5pY29uZml4e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG59XG4uYmx1dHh0e1xuICAgIGNvbG9yOiAjMDA4MWRjO1xuIH1cbiAgLmNvbG9yZWR7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICAub3ZyYWxscmF0aW5ne1xuICAgIG1hcmdpbi10b3A6MzNweDtcbiAgICBoMXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLnAsIC5zdGFycmF0ZXh7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuICAgIC5ibHV0eHR7XG4gICAgICAgIGNvbG9yOiAjMDA4M2RjO1xuICAgIH1cbiAgICAuc3RhcnJhdGV7XG4gICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIH1cbiAgICAucnR2YWx1ZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAudmVydHh0e1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgbWFyZ2luOiAxMnB4IDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMTA3O1xufVxuLmhpZ2hsaWd0Ym94e1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgLmFsaWNlYmx1ZXtcbiAgICAgICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6MTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICAucGlua2xpZ2h0e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjllY2VlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6MTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cbiAgICBcbn1cbi5yYXRlc3tcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xuICAgICAgICBjb2xvcjogIzExYzkxODtcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICB9XG59XG4udGhpcmRzZWN0aW9uIC5IZWFkVHh0IGg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuLmJvb21hcmt7XG4gICAgLS1jb2xvcjogZ3JheTtcbiAgICAtLWJvcmRlci1jb2xvcjogI2NmY2ZjZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuLnRpdF9zZXR7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLnNldHBpY3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogNnB4IDZweCAyMHB4O1xufVxuXG4uc3BhbntcbiAgICBjb2xvcjogIzAwODFkYztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG4uc2V0bGlrZWNvbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBcbn1cblxuXG4vLyAtLS0tLVxuXG5cbi50aGlyZHNlY3Rpb25wb3B7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsIDI0NSwgMjU1LCAwLjM4MDM5MjE1NjkpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxM2RlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjAzKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGxpZ2h0ZW47XG4gICAgcGFkZGluZzogMjBweCAxMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgIC5IZWFkVHh0IHtcbiAgICBoNXtcbiAgICAgICAgbWFyZ2luOiAycHggMHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiAjN2Y4YzhkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuICAgIH1cbiAgIFxufSBcblxuXG4uc2l6ZV9zZXRwb3Age1xuICAgIC8vICAgbWluLWhlaWdodDogMjcwcHg7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgIHdvcmQtc3BhY2luZzogMnB4O1xuICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgLS1vdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgIGNvbnRhaW46IHVuc2V0O1xuICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcbiAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogN3B4O1xuICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDdweDtcbiAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICB9XG4gICAgICAgLmJvb21hcmt7XG4gICAgICAgICAgXG4gICAgICAgICAgIC0tY29sb3I6IGdyYXk7XG4gICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgfVxuICAgfVxuICAgLmltZ19hbGlnbnBvcCB7XG4gICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgICAvLyBsZWZ0OiAyMHB4O1xuICAgICAgIC8vIHRvcDogLTEyJTtcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xuICAgfVxuICAgLnNwbnBvcHtcbiAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBcbiAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgIH1cbiAgIC50aXRfc2V0cG9we1xuICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICBtYXJnaW46IDA7XG4gICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xuICAgfVxuICAgLmJ0bnNldHN7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICB9XG5cbiAgIGlvbi1pY29uLmFjdGl2ZSB7XG4gICAgY29sb3I6IGJsdWU7IFxuICB9XG5cblxuXG5cbiAgLnNpemVfc2V0c3VpdGVke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3b3JkLXNwYWNpbmc6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIC0tb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgICBjb250YWluOiB1bnNldDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgyMDUsIDIxMSwgMjE0LCAwLjIxKSAwcHggOHB4IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDdweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA3cHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5ib29tYXJre1xuICAgICAgIFxuICAgICAgICAtLWNvbG9yOiBncmF5O1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogbGlnaHRncmV5O1xuICAgIH1cbn1cblxuLnNwYW57XG4gICAgY29sb3I6ICMwMDgxZGM7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4OyAvKiBBZGp1c3Qgc2l6ZSAqL1xuICAgIGNvbG9yOiBibGFjazsgLyogQmxhY2sgb3V0bGluZSBpbml0aWFsbHkgKi9cbiAgICBmaWxsOiBub25lOyAvKiBObyBmaWxsICovXG4gICAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7IC8qIEJvcmRlciBjb2xvciAqL1xuICAgIHN0cm9rZS13aWR0aDogMjsgLyogQWRqdXN0IGJvcmRlciB0aGlja25lc3MgKi9cbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCB0cmFuc2l0aW9uICovXG4gIH1cbiAgXG4gIC8qIFRodW1icy1VcCBpY29uIGNsaWNrZWQgKi9cbiAgLnRodW1icy11cFtzdHlsZSo9XCJibHVlXCJdIHtcbiAgICBmaWxsOiBibHVlOyAvKiBGaWxsIGJsdWUgd2hlbiBjbGlja2VkICovXG4gIH1cbiAgXG4gIC8qIFRodW1icy1Eb3duIGljb24gY2xpY2tlZCAqL1xuICAudGh1bWJzLWRvd25bc3R5bGUqPVwicmVkXCJdIHtcbiAgICBmaWxsOiByZWQ7IC8qIEZpbGwgcmVkIHdoZW4gY2xpY2tlZCAqL1xuICB9Il19 */";

/***/ }),

/***/ 88046:
/*!********************************************************************!*\
  !*** ./src/app/pages/clgdetails/questionans/questionans.page.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".p-12 {\n  padding: 12px;\n}\n\n.px-12 {\n  padding: 0 12px;\n  padding-bottom: 7px;\n}\n\n.firctchar {\n  background: #f4fbea;\n  color: #4CAF50;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\np.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.timeline {\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n}\n\n.timeline ion-icon {\n  margin-right: 4px;\n}\n\n.cbottom {\n  padding: 0 12px;\n}\n\n.cbottom p {\n  margin-top: 0px;\n  color: #47a5f1;\n}\n\n.cbottom .likes {\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.cbottom .likes ion-icon {\n  margin: 0px 6px;\n  font-size: 16px;\n  color: #aaa;\n}\n\n.heading {\n  font-weight: 500;\n}\n\n.heading span {\n  color: #68da44;\n  font-size: 16px;\n  display: inline-block;\n  margin-top: 10px;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.discusion ion-card {\n  margin: 0;\n}\n\n.oinfo {\n  padding: 2px 30px;\n  color: #249bd1;\n  line-height: 1.8;\n  margin-top: 0;\n}\n\n.botomtxt {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n}\n\n.botomtxt ion-icon {\n  margin-left: 10px;\n  font-size: 16px;\n  color: #2196F3;\n}\n\n.mt-6 {\n  margin-top: 6px;\n  display: block;\n}\n\n.mx-10 ion-card {\n  margin: 10px 0 !important;\n}\n\n.clgList {\n  padding-left: 20px;\n  color: blue;\n}\n\n.clgList li {\n  padding: 5px 0px;\n}\n\n.forumsec {\n  background: #f6f5e6;\n  padding: 12px;\n  background: #e4ecef;\n  padding: 22px 10px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.forumsec ion-input {\n  border-bottom: 1px solid #ddd;\n}\n\n.forumsec ion-button {\n  margin-top: 18px;\n}\n\n.forumsec .setdiv {\n  background: white;\n  border-radius: 10px;\n  padding: 18px;\n}\n\n.forumsec .text-center {\n  text-align: center;\n}\n\n.forumsec h5 {\n  font-size: 14px;\n}\n\n.blue-icon {\n  color: blue;\n}\n\n.no-data-msg {\n  text-align: center;\n  color: #777;\n  font-size: 1.2rem;\n  margin-top: 20px;\n}\n\n.qcard ion-card-header, .qcard ion-card-title {\n  color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUZJO0VBQ0ksaUJBQUE7QUFJUjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFISTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBS1I7O0FBSEk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUtSOztBQUpRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTVo7O0FBRkE7RUFFSSxnQkFBQTtBQUlKOztBQUhJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBS1I7O0FBRkE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBS0o7O0FBRkk7RUFDSSxTQUFBO0FBS1I7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBTUo7O0FBSkk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTVI7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUhJO0VBQ0kseUJBQUE7QUFNUjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQU1KOztBQUxJO0VBQ0ksZ0JBQUE7QUFPUjs7QUFIQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBTUo7O0FBTEk7RUFDSSw2QkFBQTtBQU9SOztBQUhJO0VBQ0ksZ0JBQUE7QUFLUjs7QUFISTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBS1I7O0FBSEk7RUFDSSxrQkFBQTtBQUtSOztBQUhJO0VBQ0ksZUFBQTtBQUtSOztBQURBO0VBQ0ksV0FBQTtBQUlKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUNJO0VBQ0ksc0JBQUE7QUFFUiIsImZpbGUiOiJxdWVzdGlvbmFucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wLTEye1xuICAgIHBhZGRpbmc6IDEycHg7XG59XG4ucHgtMTJ7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5cbi5maXJjdGNoYXJ7XG4gICAgYmFja2dyb3VuZDogI2Y0ZmJlYTtcbiAgICBjb2xvcjogIzRDQUY1MDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbnAuc2J0eHR7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjNGI0YjRiO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbi50aW1lbGluZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG59XG4uY2JvdHRvbXtcbiAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgcHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBjb2xvcjogIzQ3YTVmMTtcbiAgICB9XG4gICAgLmxpa2Vze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICB9XG4gICAgfVxufVxuLmhlYWRpbmd7XG4gICAvLyBjb2xvcjogIzRjOWRkZDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiAjNjhkYTQ0O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59XG5pb24tc2VnbWVudC1idXR0b24ge1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbjogMHB4IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xufVxuLmRpc2N1c2lvbntcbiAgICBpb24tY2FyZHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cbi5vaW5mb3tcbiAgICBwYWRkaW5nOiAycHggMzBweDtcbiAgICBjb2xvcjogIzI0OWJkMTtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG4uYm90b210eHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgLy9wYWRkaW5nLWxlZnQ6IDU3cHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMjE5NkYzO1xuICAgIH1cbn1cbi5tdC02e1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5teC0xMHtcbiAgICBpb24tY2FyZHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5jbGdMaXN0e1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBsaXtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICB9XG59XG5cbi5mb3J1bXNlY3tcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ2IDI0NSAyMzApO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDIyOCAyMzYgMjM5KTtcbiAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICBcbiAgICB9XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIH1cbiAgICAuc2V0ZGl2e1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogMThweDsgICAgXG4gICAgfVxuICAgIC50ZXh0LWNlbnRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBoNXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbn1cblxuLmJsdWUtaWNvbiB7XG4gICAgY29sb3I6IGJsdWU7XG4gIH1cbiAgXG5cbiAgLm5vLWRhdGEtbXNnIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5xY2FyZHtcbiAgICBpb24tY2FyZC1oZWFkZXIsIGlvbi1jYXJkLXRpdGxle1xuICAgICAgICBjb2xvcjogIzAwMCFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gIH0iXX0= */";

/***/ }),

/***/ 31219:
/*!************************************************************!*\
  !*** ./src/app/pages/clgdetails/reviews/reviews.page.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".px-12 {\n  padding: 0 10px !important;\n}\n\n.py-12 {\n  padding: 10px 0 !important;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.headtxt {\n  font-weight: 500 !important;\n}\n\n.sbtxt {\n  font-size: 14px;\n  font-weight: 300 !important;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\n.segmentStud {\n  margin-top: 12px;\n}\n\n.likeDis {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.likeDis .like {\n  color: green;\n}\n\n.likeDis .dislike {\n  color: red;\n}\n\n.likeDis p {\n  color: #0083dc;\n}\n\n.likeDis span {\n  vertical-align: middle;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.m-12 {\n  margin: 12px;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.border-y {\n  margin-bottom: 14px;\n  padding: 0px 12px;\n}\n\n.p1 {\n  margin: 0;\n}\n\n.p2 {\n  font-size: 14px !important;\n  margin: 6px 0px !important;\n  color: gray !important;\n}\n\n.p3 {\n  font-size: 14px !important;\n  margin: 6px 0px !important;\n  color: gray !important;\n}\n\n.setspn {\n  color: blue;\n}\n\n.setnotification {\n  width: 360px;\n  height: 370px;\n}\n\n.setnotification .settitle {\n  text-align: center;\n  background: #a4affe;\n  position: relative;\n  top: -14px;\n  height: 35px;\n}\n\n.setnotification p {\n  color: #0083dc;\n}\n\n.thirdsection {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsection .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.font-semibold {\n  font-weight: bold;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.starrate {\n  color: #FFD700;\n  /* Gold color for stars */\n  font-size: 18px;\n  /* Adjust star size */\n  margin-right: 2px;\n  /* Space between stars */\n}\n\n.rtvalue {\n  font-weight: bold;\n  margin-right: 10px;\n}\n\n.bookmark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignn.shortlisted {\n  background-color: #ffc107;\n}\n\nion-icon.active {\n  color: blue;\n}\n\n.thirdsectionpop {\n  background: rgba(241, 245, 255, 0.3803921569);\n  background-image: linear-gradient(13deg, rgba(255, 255, 255, 0.94) 0%, rgba(0, 0, 0, 0.03) 100%);\n  background-blend-mode: lighten;\n  padding: 20px 10px 0px;\n  border-radius: 24px;\n}\n\n.thirdsectionpop .HeadTxt h5 {\n  margin: 2px 0px;\n}\n\n.thirdsectionpop .HeadTxt p {\n  margin: 0;\n  color: #7f8c8d;\n  margin-bottom: 4px;\n}\n\n.imgHeadpop {\n  display: flex;\n  justify-content: space-between;\n}\n\n.size_setpop {\n  width: 100%;\n  border-radius: 8px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible !important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 5px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  margin-bottom: 2rem;\n  border: 1px solid #f1f1f1;\n}\n\n.size_setpop ion-button {\n  --padding-end: 7px;\n  --padding-start: 7px;\n  height: 30px;\n  --box-shadow: none;\n  font-size: 12px;\n}\n\n.size_setpop .boomark {\n  --color: gray;\n  --border-color: lightgrey;\n}\n\n.img_alignpop {\n  padding: 2px;\n  height: 50px !important;\n  width: 50px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: relative !important;\n  border: 1px solid #c9c9c9;\n}\n\n.spnpop {\n  color: var(--ion-color-secondary);\n  border-right: 1px solid gray;\n  padding-right: 10px;\n  font-size: 16px;\n  margin-right: 8px;\n}\n\n.tit_setpop {\n  font-size: 16px;\n  color: black;\n  font-weight: 500;\n  margin: 0;\n  padding-right: 6px;\n}\n\n.btnsets {\n  display: flex;\n  justify-content: space-between;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,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RSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFOSjs7QUFPSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTFI7O0FBT0k7RUFFSSxhQUFBO0VBQ0EseUJBQUE7QUFOUjs7QUFTQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBR0EseUJBQUE7QUFSSjs7QUFVQTtFQUNJLGlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVNBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBTEo7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtFQUFpQixnQkFBQTtFQUNqQixZQUFBO0VBQWMsNEJBQUE7RUFDZCxVQUFBO0VBQVksWUFBQTtFQUNaLG9CQUFBO0VBQXNCLGlCQUFBO0VBQ3RCLGVBQUE7RUFBaUIsNEJBQUE7RUFDakIsMkJBQUE7RUFBNkIsc0JBQUE7QUFBakM7O0FBR0UsMkJBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQVksMkJBQUE7QUFDaEI7O0FBRUUsNkJBQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQVcsMEJBQUE7QUFFZiIsImZpbGUiOiJyZXZpZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5weC0xMntcbiAgICBwYWRkaW5nOiAwIDEwcHghaW1wb3J0YW50O1xufVxuLnB5LTEye1xuICAgIHBhZGRpbmc6IDEwcHggMCFpbXBvcnRhbnQ7XG59XG4ucHQtMTJ7XG4gICAgcGFkZGluZy10b3A6MTJweDtcbn1cbi5oZWFkdHh0e1xuICAgIGZvbnQtd2VpZ2h0OiA1MDAhaW1wb3J0YW50O1xufVxuLnNidHh0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwIWltcG9ydGFudDtcbn1cbi5vdnJhbGxyYXRpbmd7XG4gICAgaDF7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5wLCAuc3RhcnJhdGV4e1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgICAuYmx1dHh0e1xuICAgICAgICBjb2xvcjogIzAwODNkYztcbiAgICB9XG4gICAgLnN0YXJyYXRle1xuICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICB9XG4gICAgLnJ0dmFsdWV7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLnZlcnR4dHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIG1hcmdpbjogMTJweCAwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzEwNztcbn1cbi5wb3B1bGFydHh0e1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgaDJ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxufVxuLnNlZ21lbnRTdHVke1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbiAgLmxpa2VEaXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAubGlrZXtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICAuZGlzbGlrZXtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgY29sb3I6ICMwMDgzZGM7XG4gICAgfVxuICAgIHNwYW57XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICB9XG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzg4ZDgzNDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luOiAwcHggM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG59XG4ubS0xMntcbiAgICBtYXJnaW46IDEycHg7XG59XG4uaGlnaGxpZ3Rib3h7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAuYWxpY2VibHVle1xuICAgICAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxuICAgIC5waW5rbGlnaHR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWVjZWU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuICAgIFxufVxuLnJhdGVze1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIH1cbn1cbi5ib3JkZXIteXtcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgIC8vYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcbn1cblxuLnAxIHtcbiAgICBtYXJnaW46IDA7XG59XG4ucDJ7XG5mb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xubWFyZ2luOiA2cHggMHB4IWltcG9ydGFudDtcbmNvbG9yOiBncmF5IWltcG9ydGFudDtcbn1cblxuLnAze1xuZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcbm1hcmdpbjogNnB4IDBweCFpbXBvcnRhbnQ7XG5jb2xvcjogZ3JheSFpbXBvcnRhbnQ7XG59XG5cblxuLnNldHNwbntcbiAgICBjb2xvcjpibHVlO1xufVxuXG4uc2V0bm90aWZpY2F0aW9ue1xuICAgIHdpZHRoOjM2MHB4O1xuICAgIGhlaWdodDogMzcwcHg7XG4gICAgLnNldHRpdGxle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2E0YWZmZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTRweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGNvbG9yOiMwMDgzZGM7XG4gICAgfVxufVxuXG4udGhpcmRzZWN0aW9ue1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDUsIDI1NSwgMC4zODAzOTIxNTY5KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTNkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NCkgMCUsIHJnYmEoMCwgMCwgMCwgMC4wMykgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBsaWdodGVuO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAuSGVhZFR4dCB7XG4gICAgaDV7XG4gICAgICAgIG1hcmdpbjogMnB4IDBweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzdmOGM4ZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICB9XG4gICBcbn1cblxuXG5cbi5mb250LXNlbWlib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5cbi5zcGFue1xuICAgIGNvbG9yOiAjMDA4MWRjO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLnNldGxpa2Vjb2x7XG4gICAgZGlzcGxheTogZmxleDtcbiAgXG59XG5cblxuXG5cbi5zdGFycmF0ZSB7XG4gICAgY29sb3I6ICNGRkQ3MDA7IC8qIEdvbGQgY29sb3IgZm9yIHN0YXJzICovXG4gICAgZm9udC1zaXplOiAxOHB4OyAvKiBBZGp1c3Qgc3RhciBzaXplICovXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7IC8qIFNwYWNlIGJldHdlZW4gc3RhcnMgKi9cbiAgfVxuICBcbiAgLnJ0dmFsdWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICBcbiAgLmJvb2ttYXJre1xuICAgIC0tY29sb3I6IGdyYXk7XG4gICAgLS1ib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcbiAgIFxuICB9XG5cbiAgLmltZ19hbGlnbm4uc2hvcnRsaXN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7IFxuICB9XG4gIFxuICBpb24taWNvbi5hY3RpdmUge1xuICAgIGNvbG9yOiBibHVlOyBcbiAgfVxuICBcblxuXG5cblxuLnRoaXJkc2VjdGlvbnBvcHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MSwgMjQ1LCAyNTUsIDAuMzgwMzkyMTU2OSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQpIDAlLCByZ2JhKDAsIDAsIDAsIDAuMDMpIDEwMCUpO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgLkhlYWRUeHQge1xuICAgIGg1e1xuICAgICAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICM3ZjhjOGQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gICAgfVxuICAgXG59XG5cbi5pbWdIZWFkcG9we1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuICAuc2l6ZV9zZXRwb3Age1xuIC8vICAgbWluLWhlaWdodDogMjcwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdvcmQtc3BhY2luZzogMnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLS1vdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGNvbnRhaW46IHVuc2V0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogN3B4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDdweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmJvb21hcmt7XG4gICAgICAgXG4gICAgICAgIC0tY29sb3I6IGdyYXk7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgfVxufVxuLmltZ19hbGlnbnBvcCB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAvLyBsZWZ0OiAyMHB4O1xuICAgIC8vIHRvcDogLTEyJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xufVxuLnNwbnBvcHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi50aXRfc2V0cG9we1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuLmJ0bnNldHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cblxuLnNwYW57XG4gICAgY29sb3I6ICMwMDgxZGM7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4OyAvKiBBZGp1c3Qgc2l6ZSAqL1xuICAgIGNvbG9yOiBibGFjazsgLyogQmxhY2sgb3V0bGluZSBpbml0aWFsbHkgKi9cbiAgICBmaWxsOiBub25lOyAvKiBObyBmaWxsICovXG4gICAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7IC8qIEJvcmRlciBjb2xvciAqL1xuICAgIHN0cm9rZS13aWR0aDogMjsgLyogQWRqdXN0IGJvcmRlciB0aGlja25lc3MgKi9cbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7IC8qIFNtb290aCB0cmFuc2l0aW9uICovXG4gIH1cbiAgXG4gIC8qIFRodW1icy1VcCBpY29uIGNsaWNrZWQgKi9cbiAgLnRodW1icy11cFtzdHlsZSo9XCJibHVlXCJdIHtcbiAgICBmaWxsOiBibHVlOyAvKiBGaWxsIGJsdWUgd2hlbiBjbGlja2VkICovXG4gIH1cbiAgXG4gIC8qIFRodW1icy1Eb3duIGljb24gY2xpY2tlZCAqL1xuICAudGh1bWJzLWRvd25bc3R5bGUqPVwicmVkXCJdIHtcbiAgICBmaWxsOiByZWQ7IC8qIEZpbGwgcmVkIHdoZW4gY2xpY2tlZCAqL1xuICB9XG4iXX0= */";

/***/ }),

/***/ 91010:
/*!******************************************************************!*\
  !*** ./src/app/pages/clgdetails/scolarship/scolarship.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".px-12 {\n  padding: 0 10px;\n}\n\n.pt-12 {\n  padding-top: 12px;\n}\n\n.tabbody {\n  padding: 12px 0px;\n}\n\n.tabbody .bgsmockgray {\n  background-color: #f6f8fe;\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.tabbody .headcard {\n  display: flex;\n}\n\n.tabbody .headcard ion-icon {\n  font-size: 35px;\n  color: #0083dc;\n  margin-right: 8px;\n}\n\n.tabbody .headcard span {\n  font-size: 14px;\n  color: #797979;\n}\n\n.tabbody .headcard h2 {\n  font-weight: 500;\n  color: #000;\n}\n\n.tabbody .slid ion-card {\n  width: 205px;\n  padding: 10px;\n}\n\n.tabbody .slid .Whtcard {\n  text-align: left;\n}\n\n.tabbody .slid .Whtcard h3 {\n  font-weight: 500;\n}\n\n.tabbody .slid .Whtcard span {\n  color: #0083dc;\n}\n\n.accordians {\n  margin-top: 12px;\n  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;\n  border-radius: 10px;\n}\n\n.accordians .paragraph ion-label {\n  line-height: 1.5;\n}\n\n.accordians ion-accordion {\n  border-radius: 10px;\n}\n\n.accordians ion-item {\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.accordians ion-item p {\n  font-size: 14px;\n  color: #777;\n  margin: 6px 0;\n}\n\n.accordians ion-item h2 {\n  font-weight: 500;\n}\n\n.accordians ion-item ion-label {\n  font-size: 14px;\n}\n\n.tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th.dblue {\n  background: #004983;\n  font-weight: 500;\n  color: #fff;\n}\n\n.iconbtn {\n  --padding-end: 12px;\n  --padding-start: 12px;\n}\n\n.segmentStud {\n  margin: 14px 0px;\n}\n\n.serchbar {\n  --box-shadow: none!important;\n  border-bottom: 1px solid !important;\n  padding: 0 !important;\n}\n\n.serchbar .searchbar-input.sc-ion-searchbar-md {\n  padding: 8px 10px 8px 45px !important;\n}\n\n.caskqns {\n  margin-bottom: 14px;\n}\n\n.filter-btn {\n  border: 1px solid;\n  border-radius: 50px;\n  margin: 0 4px;\n}\n\n.filter-btn ion-icon {\n  vertical-align: middle;\n}\n\n.cardcust {\n  border-radius: 8px;\n  background: white;\n  padding: 14px;\n  box-shadow: rgba(205, 211, 214, 0.21) 0px 8px 25px;\n  border: 1px solid #f1f1f1;\n}\n\n.pagination {\n  display: inline-block;\n  list-style-type: none;\n  padding: 0;\n  margin-top: 1.5rem;\n}\n\n.pagination li {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.pagination li.active {\n  background-color: #52dd26;\n  color: white;\n  border-radius: 3px;\n}\n\n.populartxt {\n  margin-top: 18px;\n}\n\n.populartxt h2 {\n  font-weight: 500;\n}\n\nion-segment-button {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 0px 3px;\n  border: 1px solid #f1f1f1;\n}\n\n.userReview .firctchar {\n  background: #fddfe4;\n  color: #a70c0c;\n  padding: 6px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.userReview p.sbtxt {\n  margin: 0;\n  color: #4b4b4b;\n  font-size: 13px;\n}\n\n.userReview .rateby {\n  font-size: 13px;\n  background: #11c918;\n  color: #fff;\n  padding: 4px;\n  border-radius: 3px;\n}\n\n.userReview .ratingBtns ion-icon {\n  color: #11c918;\n  font-size: 10px;\n  position: relative;\n  top: -2px;\n  left: -1px;\n}\n\n.userReview .ratingBtns ion-button {\n  text-transform: capitalize;\n  --border-width: 1px;\n  --border-color: #d9d9d9;\n  --color: #000;\n}\n\n.userReview h3 {\n  margin-top: 10px !important;\n  font-weight: 500;\n}\n\n.userReview .thumbicon {\n  border-top: 1px solid #ddd;\n}\n\n.userReview .thumbicon ion-icon {\n  font-size: 20px;\n  color: #8b8b8b;\n  margin: 3px 5px;\n}\n\n.datevnt {\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.datevnt ion-icon {\n  font-size: 18px;\n  vertical-align: sub;\n}\n\n.datevnt .blutxt {\n  color: #0081dc;\n  text-align: right;\n}\n\n.iconfix {\n  font-size: 20px;\n  vertical-align: text-top;\n}\n\n.blutxt {\n  color: #0081dc;\n}\n\n.colored {\n  color: red;\n}\n\n.ovrallrating h1 {\n  font-weight: 600;\n}\n\n.ovrallrating .p, .ovrallrating .starratex {\n  margin: 0;\n  color: gray;\n}\n\n.ovrallrating .blutxt {\n  color: #0083dc;\n}\n\n.ovrallrating .starrate {\n  margin-right: 3px;\n}\n\n.ovrallrating .rtvalue {\n  margin-right: 10px;\n}\n\n.ovrallrating .vertxt {\n  border-top: 1px solid gray;\n  margin: 12px 0px;\n  padding-top: 10px;\n}\n\n.ovrallrating .vertxt ion-icon {\n  color: gray;\n  margin-left: 4px;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: #FFC107;\n}\n\n.highligtbox {\n  margin-top: 12px;\n}\n\n.highligtbox .aliceblue {\n  background: aliceblue;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n}\n\n.highligtbox .pinklight {\n  background: #f9ecee;\n  margin: 0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n\n.rates {\n  font-size: 13px;\n}\n\n.rates ion-icon {\n  color: #11c918;\n  color: #11c918;\n  font-size: 19px;\n  vertical-align: bottom;\n}\n\n.infrafacility img {\n  width: 30px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n\n.infrafacility p {\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 12px;\n}\n\n.infrafacility h6 {\n  font-size: 14px;\n}\n\n.sbtxt {\n  font-size: 14px;\n  font-weight: 300 !important;\n}\n\ntable.infotbl, th, td {\n  border: 1px solid #ddd;\n  border-collapse: collapse;\n  padding: 4px 6px;\n}\n\ntable.infotbl th {\n  background: #004983;\n  color: #fff;\n  font-weight: 500;\n}\n\n.thirdsection .HeadTxt h5 {\n  margin-bottom: 2px;\n  margin-top: 2px;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.setlikecol {\n  display: flex;\n}\n\n.span {\n  color: #0081dc;\n  margin-left: 10px;\n  font-weight: normal !important;\n}\n\n.icon {\n  font-size: 24px;\n  /* Adjust size */\n  color: black;\n  /* Black outline initially */\n  fill: none;\n  /* No fill */\n  stroke: currentColor;\n  /* Border color */\n  stroke-width: 2;\n  /* Adjust border thickness */\n  transition: color 0.3s ease;\n  /* Smooth transition */\n}\n\n/* Thumbs-Up icon clicked */\n\n.thumbs-up[style*=blue] {\n  fill: blue;\n  /* Fill blue when clicked */\n}\n\n/* Thumbs-Down icon clicked */\n\n.thumbs-down[style*=red] {\n  fill: red;\n  /* Fill red when clicked */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb2xhcnNoaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBREk7RUFDSyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUdUOztBQURJO0VBQ0ksYUFBQTtBQUdSOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUlaOztBQUZRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFJWjs7QUFGUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQUlaOztBQUFRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFFWjs7QUFBUTtFQUNJLGdCQUFBO0FBRVo7O0FBRFk7RUFDSSxnQkFBQTtBQUdoQjs7QUFEWTtFQUNJLGNBQUE7QUFHaEI7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLHdGQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFBSTtFQUNJLGdCQUFBO0FBRVI7O0FBQUk7RUFDSSxtQkFBQTtBQUVSOztBQUFJO0VBQ0ksZ0NBQUE7QUFFUjs7QUFEUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUdaOztBQURRO0VBQ0ksZ0JBQUE7QUFHWjs7QUFEUTtFQUNJLGVBQUE7QUFHWjs7QUFFSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFHSjs7QUFERTtFQUNFLGdCQUFBO0FBSUo7O0FBREM7RUFDRyw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFISTtFQUNJLHFDQUFBO0FBS1I7O0FBREM7RUFDRyxtQkFBQTtBQUlKOztBQUZDO0VBQ0csaUJBQUE7RUFDQSxtQkFBQTtFQUNB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QTtFQUFjLDRCQUFBO0VBQ2QsVUFBQTtFQUFZLFlBQUE7RUFDWixvQkFBQTtFQUFzQixpQkFBQTtFQUN0QixlQUFBO0VBQWlCLDRCQUFBO0VBQ2pCLDJCQUFBO0VBQTZCLHNCQUFBO0FBZ0JqQzs7QUFiRSwyQkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFBWSwyQkFBQTtBQWlCaEI7O0FBZEUsNkJBQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQVcsMEJBQUE7QUFrQmYiLCJmaWxlIjoic2NvbGFyc2hpcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5weC0xMntcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG59XG4ucHQtMTJ7XG4gICAgcGFkZGluZy10b3A6MTJweDtcbn1cbi50YWJib2R5e1xuICAgIHBhZGRpbmc6MTJweCAwcHg7XG4gICAgLmJnc21vY2tncmF5e1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmZTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICBwYWRkaW5nOjEycHg7XG4gICAgfVxuICAgIC5oZWFkY2FyZHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwODNkYztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgfVxuICAgICAgICBoMntcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2xpZHtcbiAgICAgICAgaW9uLWNhcmR7XG4gICAgICAgICAgICB3aWR0aDogMjA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5XaHRjYXJke1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5hY2NvcmRpYW5ze1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDEwNSwgMC4xNSkgMHB4IDJweCA1cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMXB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5wYXJhZ3JhcGggaW9uLWxhYmVse1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cbiAgICBpb24tYWNjb3JkaW9ue1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzc3NztcbiAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDJ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbHsgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi50Ymxjb250ZW50e1xuICAgIHB7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGNvbG9yOiAjMDA4M2RjOyBcbiAgICB9XG59XG50YWJsZSwgdGgsIHRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllZGZmO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcGFkZGluZzo2cHggOHB4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgfVxuICB0YWJsZSB0aC5kYmx1ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMDA0OTgzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmljb25idG57XG4gICAgLS1wYWRkaW5nLWVuZDogMTJweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gIH1cbiAgLnNlZ21lbnRTdHVke1xuICAgIG1hcmdpbjogMTRweCAwcHg7XG4gIH1cbiBcbiAuc2VyY2hiYXJ7XG4gICAgLS1ib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6MCFpbXBvcnRhbnQ7XG4gICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweCA4cHggNDVweCFpbXBvcnRhbnQ7ICAgXG4gICAgfVxuICAgXG4gfSBcbiAuY2Fza3Fuc3tcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuIH1cbiAuZmlsdGVyLWJ0bntcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1hcmdpbjogMCA0cHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICB9XG4gfVxuIC5jYXJkY3VzdHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDIwNSwgMjExLCAyMTQsIDAuMjEpIDBweCA4cHggMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuIH1cbiAucGFnaW5hdGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6MS41cmVtO1xuICB9XG4gIFxuICAucGFnaW5hdGlvbiBsaSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICAucGFnaW5hdGlvbiBsaS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MmRkMjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgfVxuICAucG9wdWxhcnR4dHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGgye1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgLS1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xuICAgIC0taW5kaWNhdG9yLWhlaWdodDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzg4ZDgzNDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luOiAwcHggM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XG59XG4udXNlclJldmlld3tcbiAgICAuZmlyY3RjaGFye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmRkZmU0O1xuICAgICAgICBjb2xvcjogI2E3MGMwYztcbiAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgcC5zYnR4dHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzRiNGI0YjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICAucmF0ZWJ5e1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYmFja2dyb3VuZDogIzExYzkxODtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAucmF0aW5nQnRuc3tcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBjb2xvcjogIzExYzkxODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcbiAgICAgICAgICAgIC0tY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaDN7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAudGh1bWJpY29ue1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzhiOGI4YjtcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRhdGV2bnR7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgIH1cbiAgICAuYmx1dHh0e1xuICAgICAgIGNvbG9yOiAjMDA4MWRjO1xuICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbn1cbi5pY29uZml4e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG59XG4uYmx1dHh0e1xuICAgIGNvbG9yOiAjMDA4MWRjO1xuIH1cbiAgLmNvbG9yZWR7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICAub3ZyYWxscmF0aW5ne1xuICAgIGgxe1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAucCwgLnN0YXJyYXRleHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG4gICAgLmJsdXR4dHtcbiAgICAgICAgY29sb3I6ICMwMDgzZGM7XG4gICAgfVxuICAgIC5zdGFycmF0ZXtcbiAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgfVxuICAgIC5ydHZhbHVle1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC52ZXJ0eHR7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBtYXJnaW46IDEycHggMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XG59XG4uaGlnaGxpZ3Rib3h7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAuYWxpY2VibHVle1xuICAgICAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxuICAgIC5waW5rbGlnaHR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWVjZWU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgfVxuICAgIFxufVxuLnJhdGVze1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6ICMxMWM5MTg7XG4gICAgICAgIGNvbG9yOiAjMTFjOTE4O1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIH1cbn1cbi5pbmZyYWZhY2lsaXR5e1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgfVxuICAgIGg2e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuLnNidHh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xufVxuXG50YWJsZS5pbmZvdGJsLCB0aCwgdGQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICBwYWRkaW5nOjRweCA2cHg7XG59XG50YWJsZS5pbmZvdGJsIHRoe1xuICAgYmFja2dyb3VuZDogIzAwNDk4MztcbiAgIGNvbG9yOiAjZmZmO1xuICAgZm9udC13ZWlnaHQ6IDUwMDtcbn0gXG4udGhpcmRzZWN0aW9uIC5IZWFkVHh0IGg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uc3BhbntcbiAgICBjb2xvcjogIzAwODFkYztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi5zZXRsaWtlY29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIFxufVxuXG4uc3BhbntcbiAgICBjb2xvcjogIzAwODFkYztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7IC8qIEFkanVzdCBzaXplICovXG4gICAgY29sb3I6IGJsYWNrOyAvKiBCbGFjayBvdXRsaW5lIGluaXRpYWxseSAqL1xuICAgIGZpbGw6IG5vbmU7IC8qIE5vIGZpbGwgKi9cbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjsgLyogQm9yZGVyIGNvbG9yICovXG4gICAgc3Ryb2tlLXdpZHRoOiAyOyAvKiBBZGp1c3QgYm9yZGVyIHRoaWNrbmVzcyAqL1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTsgLyogU21vb3RoIHRyYW5zaXRpb24gKi9cbiAgfVxuICBcbiAgLyogVGh1bWJzLVVwIGljb24gY2xpY2tlZCAqL1xuICAudGh1bWJzLXVwW3N0eWxlKj1cImJsdWVcIl0ge1xuICAgIGZpbGw6IGJsdWU7IC8qIEZpbGwgYmx1ZSB3aGVuIGNsaWNrZWQgKi9cbiAgfVxuICBcbiAgLyogVGh1bWJzLURvd24gaWNvbiBjbGlja2VkICovXG4gIC50aHVtYnMtZG93bltzdHlsZSo9XCJyZWRcIl0ge1xuICAgIGZpbGw6IHJlZDsgLyogRmlsbCByZWQgd2hlbiBjbGlja2VkICovXG4gIH1cbiAgIl19 */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_clgdetails_clgdetails-routing_module_ts.js.map