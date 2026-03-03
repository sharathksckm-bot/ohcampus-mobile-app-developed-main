"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_clgcompare_clgcompare_module_ts"],{

/***/ 86307:
/*!***************************************************************!*\
  !*** ./src/app/pages/clgcompare/clgcompare-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClgcomparePageRoutingModule": () => (/* binding */ ClgcomparePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _clgcompare_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clgcompare.page */ 47544);




const routes = [
    {
        path: '',
        component: _clgcompare_page__WEBPACK_IMPORTED_MODULE_0__.ClgcomparePage
    }
];
let ClgcomparePageRoutingModule = class ClgcomparePageRoutingModule {
};
ClgcomparePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClgcomparePageRoutingModule);



/***/ }),

/***/ 79512:
/*!*******************************************************!*\
  !*** ./src/app/pages/clgcompare/clgcompare.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClgcomparePageModule": () => (/* binding */ ClgcomparePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _clgcompare_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clgcompare-routing.module */ 86307);
/* harmony import */ var _clgcompare_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clgcompare.page */ 47544);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 52529);








let ClgcomparePageModule = class ClgcomparePageModule {
};
ClgcomparePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _clgcompare_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClgcomparePageRoutingModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule
        ],
        declarations: [_clgcompare_page__WEBPACK_IMPORTED_MODULE_1__.ClgcomparePage]
    })
], ClgcomparePageModule);



/***/ }),

/***/ 47544:
/*!*****************************************************!*\
  !*** ./src/app/pages/clgcompare/clgcompare.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClgcomparePage": () => (/* binding */ ClgcomparePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_clgcompare_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./clgcompare.page.html */ 76965);
/* harmony import */ var _clgcompare_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clgcompare.page.scss */ 28234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 1331);













let ClgcomparePage = class ClgcomparePage {
    constructor(iab, service, activatedRoute, router, modalController, cdr, sanitizer, matIconRegistry) {
        this.iab = iab;
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalController = modalController;
        this.cdr = cdr;
        this.sanitizer = sanitizer;
        this.matIconRegistry = matIconRegistry;
        this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1.4,
        };
        this.slideOptss = {
            initialSlide: 0,
            slidesPerView: 1.4,
        };
        this.cmprclgArr = [];
        this.clgdetailArry = [];
        this.searchTerm = '';
        this.showResults = true;
        this.hide = false;
        this.hidediv1 = true;
        this.hidediv = true;
        this.isModalOpen = false;
        this.isModalOpen2 = false;
        this.myflag1 = false;
        this.myflag2 = false;
        this.limit = 20;
        this.start = 0;
        this.searchResults = [];
        this.errorMessage = '';
        this.locationArry = [];
        this.courselevel = '';
        this.courseArry = [];
        this.addcollegediv = true;
        this.clgdetailsdiv = true;
        this.clgdetailsdiv2 = true;
        this.clgid1 = [];
        this.clgid2 = null;
        this.shareText = 'Check this out!';
        this.shareTitle = 'Example Title';
        this.shareSummary = 'Example Summary';
        this.shareSource = 'Example Source';
        this.RankArr = [];
        this.RankArr2 = [];
        this.coursesandfeesArr = [];
        this.coursesandfeesArr2 = [];
        this.AdminssionprocessArr = [];
        this.AdminssionprocessArr2 = [];
        this.facilitiesArr = [];
        this.facilitiesArr2 = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.collegeId = params['collegeId'];
            console.log(this.collegeId);
            this.collegeId2 = params['collegeId2'];
            console.log(this.collegeId2);
            if (this.collegeId2 != undefined) {
                this.clgcomaprsec(this.collegeId2);
            }
            if (this.collegeId != undefined) {
                this.clgcomaprfir(this.collegeId, this.subcategory, this.courselevel);
            }
        });
    }
    isSupportedIcon(icon) {
        const supportedMaterialIcons = ['home', 'star', 'check', 'menu', 'search']; // Valid Material icons.
        return icon.startsWith('fa-') || supportedMaterialIcons.includes(icon);
    }
    getFontAwesomeIconClass(icon) {
        return `fa ${icon}`;
    }
    getSafeUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    getclgdetail() {
        this.service.cmpclgdetails(this.collegeId, this.subcategory, this.courselevel).subscribe(res => {
            console.log(res);
            this.clgdetailArry = res.college_detail;
            console.log(this.clgdetailArry);
            this.categoryid = res.college_detail[0].categoryid;
            console.log(this.categoryid);
            this.collegename = res.college_detail.title;
            this.currentYear = (new Date()).getFullYear();
        });
    }
    notification() {
        this.router.navigateByUrl('/notification');
    }
    getpopclgcmr() {
        this.categoryid = this.Categoryidclg1;
        this.service.popclgcmpre(this.categoryid).subscribe(res => {
            console.log(res);
            this.cmprclgArr = res.CollegeListForCompare;
            console.log(this.cmprclgArr);
            this.cmprclgid = res.CollegeListForCompare[0].id;
            console.log(this.cmprclgid);
        });
    }
    resetSelections() {
        this.searchTerm = '';
        this.searchResults = [];
        this.showResults = false;
        this.hide = false;
        this.courselevel = null;
        this.courseArry = [];
    }
    cancel() {
        this.isModalOpen = false;
        this.modal.dismiss('/clgcompare');
        this.modalController.dismiss({
            dismissed: true,
        }).then(() => {
            this.resetSelections();
        });
    }
    cancel2() {
        this.modal.dismiss('/clgcompare');
        this.modalController.dismiss({
            dismissed: true,
        }).then(() => {
            this.resetSelections();
        });
    }
    onWillDismiss(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.message = `Hello, ${ev.detail.data}!`;
        }
    }
    search() {
        console.log(this.searchTerm);
        if (this.searchTerm !== '') {
            this.service.getcomprclgsrch(this.searchTerm, this.limit, this.start)
                .subscribe((response) => {
                this.searchResults = response.data;
                this.showResults = true;
            }, (error) => {
                console.error('Error occurred while searching:', error);
                this.errorMessage = 'Error occurred while searching';
            });
        }
        else {
            this.hide = false;
            this.showResults = false;
        }
    }
    selectResult(result) {
        this.hide = true;
        this.searchTerm = result.title;
        this.showResults = false;
        this.collegeId = result.id; // Assuming 'id' is the property holding the selected ID
        this.getcouselevel(); // Call getdgreelts with the selected ID
        this.getcourselts();
        this.getclgdetail();
    }
    closeResults() {
        setTimeout(() => {
            this.showResults = false;
        }, 200);
    }
    getcouselevel() {
        this.service.getCourselevel(this.collegeId).subscribe(res => {
            console.log(res);
            this.locationArry = res.response_data;
            console.log(this.locationArry);
        });
    }
    // getcourselts() {
    //   console.log(this.courselts);
    //   console.log('collegeId:', this.collegeId);
    //   console.log('Courselevel:', this.courselevel);
    //    this.service.getcourselts(this.collegeId, this.courselevel).subscribe(res => {
    //     console.log(res);
    //     this.courseArry = res.data;
    //   });
    // }
    getcollgelevel(item) {
        console.log('courselevel:', item.level);
        this.courselevels = item.level;
        console.log('collegeId:', this.collegeId);
        console.log('subcategory:', item.id);
        this.subcategory = item.id;
        this.getcourselts();
    }
    getcourselts() {
        // console.log('courselevel:', item.level);
        // console.log('collegeId:', this.collegeId);
        // console.log('selectcourseId:', item.id);
        if (this.collegeId && this.courselevel) {
            this.service.getcourselts(this.collegeId, this.courselevels, this.subcategory).subscribe(res => {
                console.log('API Response:', res);
                this.courseArry = res.data || [];
            }, err => {
                console.error('API Error:', err);
            });
        }
        else {
            console.warn('collegeId or courselevel is missing');
        }
    }
    clgcomapr(collegeId, selectcourseId, courselevel) {
        console.log(this.myflag1 + ">>>>>>" + this.myflag2);
        if (this.myflag1 == true) {
            this.clgdetailsdiv = false;
            this.service.cmpclgdetails(this.collegeId, selectcourseId, this.courselevels).subscribe(res => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                this.clgid1 = res.college_detail;
                this.Courseslist = res.college_detail[0].Courses_list;
                this.clgidclg1 = res.college_detail[0].id;
                this.Categoryidclg1 = res.college_detail[0].categoryid;
                this.Rating = res.college_detail[0].ReviewRating.totalRateCount;
                this.totalReview = res.college_detail[0].ReviewRating.totalReview;
                this.RankArr = res.college_detail[0].Rank;
                this.coursesandfeesArr = (_a = res.college_detail[0]) === null || _a === void 0 ? void 0 : _a.coursesandfees;
                this.AdminssionprocessArr = (_b = res.college_detail[0]) === null || _b === void 0 ? void 0 : _b.Adminssionprocess;
                this.median_salary = (_d = (_c = res.college_detail[0]) === null || _c === void 0 ? void 0 : _c.Academic_Date[0]) === null || _d === void 0 ? void 0 : _d.median_salary;
                this.no_of_companies_visited = (_f = (_e = res.college_detail[0]) === null || _e === void 0 ? void 0 : _e.Academic_Date[0]) === null || _f === void 0 ? void 0 : _f.no_of_companies_visited;
                this.no_of_student_selected = (_h = (_g = res.college_detail[0]) === null || _g === void 0 ? void 0 : _g.Academic_Date[0]) === null || _h === void 0 ? void 0 : _h.no_of_student_selected;
                this.no_of_students_placed = (_k = (_j = res.college_detail[0]) === null || _j === void 0 ? void 0 : _j.Academic_Date[0]) === null || _k === void 0 ? void 0 : _k.no_of_students_placed;
                this.year = (_m = (_l = res.college_detail[0]) === null || _l === void 0 ? void 0 : _l.Academic_Date[0]) === null || _m === void 0 ? void 0 : _m.year;
                this.facilitiesArr = res.college_detail[0].facilities;
                this.image = res.college_detail[0].image;
                if (this.clgid1.length > 0) {
                    this.hidediv = false;
                    this.myflag1 = false;
                }
                this.isModalOpen = false;
                this.clgdetailsdiv = true;
                this.modalController.dismiss({
                    dismissed: true,
                }).then(() => {
                    this.resetSelections();
                });
            });
        }
        if (this.myflag2 == true) {
            this.clgdetailsdiv2 = false;
            this.service.cmpclgdetails(this.collegeId, selectcourseId, courselevel).subscribe(res => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                this.clgid2 = res.college_detail;
                this.Courseslist2 = res.college_detail[0].Courses_list;
                this.Rating2 = res.college_detail[0].ReviewRating.totalRateCount;
                this.totalReview2 = res.college_detail[0].ReviewRating.totalReview;
                this.RankArr2 = res.college_detail[0].Rank;
                this.coursesandfeesArr2 = (_a = res.college_detail[0]) === null || _a === void 0 ? void 0 : _a.coursesandfees;
                this.AdminssionprocessArr2 = (_b = res.college_detail[0]) === null || _b === void 0 ? void 0 : _b.Adminssionprocess;
                this.median_salary2 = (_d = (_c = res.college_detail[0]) === null || _c === void 0 ? void 0 : _c.Academic_Date[0]) === null || _d === void 0 ? void 0 : _d.median_salary;
                this.no_of_companies_visited2 = (_f = (_e = res.college_detail[0]) === null || _e === void 0 ? void 0 : _e.Academic_Date[0]) === null || _f === void 0 ? void 0 : _f.no_of_companies_visited;
                this.no_of_student_selected2 = (_h = (_g = res.college_detail[0]) === null || _g === void 0 ? void 0 : _g.Academic_Date[0]) === null || _h === void 0 ? void 0 : _h.no_of_student_selected;
                this.no_of_students_placed2 = (_k = (_j = res.college_detail[0]) === null || _j === void 0 ? void 0 : _j.Academic_Date[0]) === null || _k === void 0 ? void 0 : _k.no_of_students_placed;
                this.year2 = (_m = (_l = res.college_detail[0]) === null || _l === void 0 ? void 0 : _l.Academic_Date[0]) === null || _m === void 0 ? void 0 : _m.year;
                this.facilitiesArr2 = res.college_detail[0].facilities;
                this.image2 = res.college_detail[0].image;
                if (this.clgid2.length > 0) {
                    this.hidediv1 = false;
                    this.myflag2 = false;
                }
                this.isModalOpen = false;
                this.clgdetailsdiv2 = true;
                this.modalController.dismiss({
                    dismissed: true,
                }).then(() => {
                    this.resetSelections();
                });
            });
        }
    }
    clgcomaprfir(collegeId, selectcourseId, courselevel) {
        this.clgdetailsdiv = false;
        console.log(collegeId);
        this.service.cmpclgdetails(this.collegeId, this.selectcourseId, courselevel).subscribe(res => {
            var _a, _b;
            this.clgid1 = res.college_detail;
            console.log(this.clgid1);
            this.Courseslist = res.college_detail[0].Courses_list;
            this.RankArr = res.college_detail[0].Rank;
            this.coursesandfeesArr = (_a = res.college_detail[0]) === null || _a === void 0 ? void 0 : _a.coursesandfees;
            this.AdminssionprocessArr = (_b = res.college_detail[0]) === null || _b === void 0 ? void 0 : _b.Adminssionprocess;
            this.facilitiesArr = res.college_detail[0].facilities;
            console.log(this.facilitiesArr);
            if (this.clgid1.length > 0) {
                this.hidediv = false;
            }
            this.isModalOpen = false;
            this.clgdetailsdiv = true;
            this.modalController.dismiss({
                dismissed: true,
            }).then(() => {
                this.resetSelections();
            });
        });
    }
    clgcomaprsec(collegeId2) {
        this.clgdetailsdiv2 = false;
        console.log(collegeId2);
        this.service.cmpclgdetails(this.collegeId2, this.selectcourseId, this.courselevel).subscribe(res => {
            var _a, _b;
            this.clgid2 = res.college_detail;
            console.log(this.clgid2);
            this.Courseslist2 = res.college_detail[0].Courses_list;
            this.RankArr2 = res.college_detail[0].Rank;
            this.coursesandfeesArr2 = (_a = res.college_detail[0]) === null || _a === void 0 ? void 0 : _a.coursesandfees;
            this.AdminssionprocessArr2 = (_b = res.college_detail[0]) === null || _b === void 0 ? void 0 : _b.Adminssionprocess;
            this.facilitiesArr2 = res.college_detail[0].facilities;
            if (this.clgid2.length > 0) {
                this.hidediv1 = false;
            }
            this.isModalOpen = false;
            this.clgdetailsdiv2 = true;
            this.modalController.dismiss({
                dismissed: true,
            }).then(() => {
                this.resetSelections();
            });
        });
    }
    openModal(modalId) {
        if (modalId == 'open-modal') {
            this.isModalOpen = true;
            this.myflag1 = true;
        }
        if (modalId == 'open-modal1') {
            this.isModalOpen = true;
            this.myflag2 = true;
        }
    }
    removeCollege1(index) {
        this.clgid1.splice(index, 1);
        if (this.clgid1.length > 0) {
            this.hidediv = false;
            this.myflag1 = false;
        }
        else {
            this.hidediv = true;
        }
    }
    removeCollege2(index) {
        this.clgid2.splice(index, 1);
        if (this.clgid2.length > 0) {
            this.hidediv1 = false;
            this.myflag2 = false;
        }
        else {
            this.hidediv1 = true;
        }
    }
    checkValue(value) {
        if (value === null || value === undefined || value === '' || value === '0') {
            return 'N/A'; // Show 'N/A' for null, undefined, empty, or "0" values
        }
        return value; // If value is valid, return the value
    }
    compr2clg(id1, id2) {
        this.clgcomapr(id1, this.selectcourseId, this.courselevel);
        this.clgcomapr(id2, this.selectcourseId, this.courselevel);
    }
    ;
    shareOnFacebook() {
        const url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(this.shareUrl);
        // window.open(url, '_blank');
        this.iab.create(url, '_system');
    }
    shareOnWhatsApp() {
        const url = 'https://www.ohcampus.com';
        const text = `Check out this link. For more details visit ${url}`;
        const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        this.iab.create(shareUrl, '_system');
        // window.open(shareUrl, '_blank');
    }
    shareOnTwitter() {
        const text = 'Check out this amazing link!';
        const url = 'https://www.ohcampus.com';
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        this.iab.create(shareUrl, '_system');
        // window.open(shareUrl, '_blank');
    }
    shareOnLinkedIn() {
        const url = 'https://www.ohcampus.com';
        const title = 'Amazing Website';
        const summary = 'Check out this amazing link for more details.';
        const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}
      &title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
        this.iab.create(shareUrl, '_system');
        // window.open(shareUrl, '_blank');
    }
};
ClgcomparePage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer },
    { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconRegistry }
];
ClgcomparePage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonModal,] }],
    modal1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['open-modal',] }],
    modal2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['open-modal',] }]
};
ClgcomparePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-clgcompare',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_clgcompare_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clgcompare_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClgcomparePage);



/***/ }),

/***/ 76965:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/clgcompare/clgcompare.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon name=\"chevron-back-outline\" routerLink=\"/tabs/tabs/tab1\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"8\">\n\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <!-- <div class=\"notification\" (click)=\"notification()\"><ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n          </div> -->\n          <ion-icon routerLink=\"/editprofile\" class=\"notification\" name=\"person-outline\"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"maindiv\">\n\n    <div class=\"firstsection\">\n      <h5>Compare Colleges</h5>\n      <p>Compare Colleges on the basis of their Fees, Placement, Cut off, Reviews, Seats, Courses and Other details.\n        Download fee details, Placement report, Eligibility criteria etc.</p>\n    </div>\n\n    <div class=\"secdiv\">\n\n\n      <div class=\"cmprsection\">\n        <table>\n\n\n          <tr style=\"height: 110px;\">\n\n            <td>\n              <div *ngIf=\"hidediv===false\">\n                <div *ngFor=\"let item of clgid1; let i = index\">\n                  <div class=\"vss\">VS</div>\n                  <ion-icon name=\"close-outline\" class=\"closecard\" (click)=\"removeCollege1(i)\"></ion-icon>\n                  <img class=\"setimg\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                </div>\n              </div>\n\n              <div>\n                <ion-card class=\"setcard\" (click)=\"openModal('open-modal')\" *ngIf=\"hidediv===true\">\n                  <ion-icon id=\"open-modal\" name=\"add-outline\"></ion-icon>\n                  <ion-label>Add College</ion-label>\n                </ion-card>\n              </div>\n            </td>\n\n\n            <td>\n\n              <div *ngIf=\"hidediv1===false\">\n                <div *ngFor=\"let item of clgid2; let i = index\">\n                  <ion-icon name=\"close-outline\" class=\"closecard\" (click)=\"removeCollege2(i)\"></ion-icon>\n                  <img class=\"setimg\" [src]=\"item.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n                </div>\n              </div>\n\n              <div>\n                <ion-card class=\"setcard\" (click)=\"openModal('open-modal1')\" *ngIf=\"hidediv1===true\">\n                  <ion-icon id=\"open-modal\" name=\"add-outline\"></ion-icon>\n                  <ion-label>Add College</ion-label>\n                </ion-card>\n              </div>\n\n\n            </td>\n          </tr>\n\n          <ng-container *ngIf=\"(clgid1 && clgid1.length > 0) || (clgid2 && clgid2.length > 0)\">\n\n            <tr style=\"height: 110px;\">\n              <td>\n                <div *ngFor=\"let item of clgid1\">\n                  <div>\n                    <h6> {{item.title}}</h6>\n                    <span><ion-icon name=\"location-outline\"></ion-icon>{{item.city}}</span>\n                    <p>{{item.courseName}}</p>\n                    <!-- <ion-button fill=\"outline\">Modify Selection</ion-button> -->\n                  </div>\n                </div>\n              </td>\n\n              <td>\n                <div *ngFor=\"let item of clgid2\">\n                  <div>\n                    <h6>{{item.title}}</h6>\n                    <span><ion-icon name=\"location-outline\"></ion-icon> {{item.city}}</span>\n                    <p>{{item.courseName}}</p>\n                    <!-- <ion-button fill=\"outline\">Modify Selection</ion-button> -->\n                  </div>\n                </div>\n              </td>\n            </tr>\n          </ng-container>\n        </table>\n\n        <ng-container *ngIf=\"(clgid1 && clgid1.length > 0) || (clgid2 && clgid2.length > 0)\">\n          <ion-accordion-group [multiple]=\"true\"\n            [value]=\"['first', 'second', 'third', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']\">\n            <ion-accordion value=\"first\">\n              <ion-item slot=\"header\">\n                <h5 class=\"settitlcolor\">Institute Information</h5>\n              </ion-item>\n              <div slot=\"content\">\n                <table>\n                  <tr>\n                    <td>\n                      <div *ngFor=\"let item of clgid1\">\n                        <span class=\"gray\"> Established Year </span>\n                        <p>{{item.estd}}</p>\n                        <span class=\"gray\">Ownership</span>\n                        <p>{{item.Collage_category}}</p>\n                        <h6>Total Courses <span class=\"blue\">({{item.Courses_Count}})</span></h6>\n                        <!-- <span class=\"gray\">B.Tech.</span>\n                <p>27 Courses</p> -->\n                      </div>\n                    </td>\n                    <td>\n                      <div *ngFor=\"let item of clgid2\">\n                        <span class=\"gray\"> Established Year </span>\n                        <p>{{item.estd}}</p>\n                        <span class=\"gray\">Ownership</span>\n                        <p>{{item.Collage_category}}</p>\n                        <h6>Total Courses <span class=\"blue\">({{item.Courses_Count}})</span></h6>\n                        <!-- <span class=\"gray\">B.Tech.</span>\n              <p>27 Courses</p> -->\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </ion-accordion>\n            <ion-accordion value=\"second\">\n              <ion-item slot=\"header\">\n                <h5>Course Details</h5>\n              </ion-item>\n              <div slot=\"content\">\n                <table>\n                  <tr>\n                    <td>\n                      <div *ngFor=\"let item of clgid1\">\n                        <div *ngFor=\"let item of Courseslist\">\n                          <span class=\"gray\"> Course Credential </span>\n                          <p>Degree</p>\n                          <span class=\"gray\">Course Level</span>\n                          <p>{{item.level}}</p>\n                          <span class=\"gray\">Duration</span>\n                          <p>{{item.duration}} Years</p>\n                          <span class=\"gray\">Mode</span>\n                          <p>Full Time</p>\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div *ngFor=\"let item of clgid2\">\n                        <div *ngFor=\"let dtls of Courseslist2\">\n                          <span class=\"gray\"> Course Credential </span>\n                          <p>Degree</p>\n                          <span class=\"gray\">Course Level</span>\n                          <p>{{dtls.level}}</p>\n                          <span class=\"gray\">Duration</span>\n                          <p>{{dtls.duration}} Years</p>\n                          <span class=\"gray\">Mode</span>\n                          <p>Full Time</p>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </ion-accordion>\n            <ion-accordion value=\"third\">\n              <ion-item slot=\"header\">\n                <h5>Student Rating & Reviews </h5>\n              </ion-item>\n              <div slot=\"content\">\n                <table>\n                  <tr>\n                    <td class=\"reviewSec\">\n                      <div *ngFor=\"let item of clgid1\">\n                        <p class=\"bold\">Overall Rating</p>\n                        <h1>{{Rating}}</h1>\n                        <ion-icon class=\"seticons\" name=\"star\"></ion-icon>\n                        <ion-icon class=\"seticons\" name=\"star\"></ion-icon>\n                        <ion-icon class=\"seticons\" name=\"star\"></ion-icon>\n                        <ion-icon class=\"seticons\" name=\"star\"></ion-icon>\n                        <ion-icon class=\"seticons\" name=\"star\"></ion-icon>\n\n                        <p>Based on {{totalReview}} verified review</p>\n                        <p>Placements <ion-icon class=\"seticons\" name=\"star\"></ion-icon></p>\n                        <p>Infrastructure <ion-icon class=\"seticons\" name=\"star\"></ion-icon></p>\n                        <p>Faculty <ion-icon class=\"seticons\" name=\"star\"></ion-icon></p>\n                        <p>Crowed & Campus <ion-icon class=\"seticons\" name=\"star\"></ion-icon></p>\n                        <p>Value for Money <ion-icon class=\"seticons\" name=\"star\"></ion-icon></p>\n\n                      </div>\n                    </td>\n                    <td class=\"reviewSec\">\n                      <div *ngFor=\"let item of clgid2\">\n                        <p class=\"bold\">Overall Rating</p>\n                        <h1>{{Rating2}}</h1>\n                        <ion-icon class=\"seticons\" name=\"star\"></ion-icon>\n                        <ion-icon class=\"seticons\" name=\"star\"></ion-icon>\n                        <ion-icon class=\"seticons\" name=\"star\"></ion-icon>\n                        <ion-icon class=\"seticons\" name=\"star\"></ion-icon>\n                        <ion-icon class=\"seticons\" name=\"star\"></ion-icon>\n\n                        <p>Based on {{totalReview2}} verified review</p>\n                        <p>Placements <ion-icon class=\"seticons\" name=\"star\"></ion-icon></p>\n                        <p>Infrastructure <ion-icon class=\"seticons\" name=\"star\"></ion-icon></p>\n                        <p>Faculty <ion-icon class=\"seticons\" name=\"star\"></ion-icon></p>\n                        <p>Crowed & Campus <ion-icon class=\"seticons\" name=\"star\"></ion-icon></p>\n                        <p>Value for Money <ion-icon class=\"seticons\" name=\"star\"></ion-icon></p>\n\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </ion-accordion>\n\n\n            <ion-accordion value=\"four\">\n              <ion-item slot=\"header\">\n                <h5>Ranking</h5>\n              </ion-item>\n              <div slot=\"content\">\n                <table>\n                  <tr>\n                    <td>\n                      <div *ngFor=\"let item of clgid1\">\n                        <div *ngFor=\"let ranking of RankArr\">\n\n                          <span class=\"gray\">{{ ranking.title }}</span>\n                          <p class=\"value\">{{ ranking.rank || 'Not Ranked' }}</p>\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div *ngFor=\"let item of clgid2\">\n                        <div *ngFor=\"let ranking of RankArr2\">\n\n                          <span class=\"gray\">{{ ranking.title }}</span>\n                          <p class=\"value\">{{ ranking.rank || 'Not Ranked' }}</p>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </ion-accordion>\n\n\n\n            <ion-accordion value=\"five\">\n              <ion-item slot=\"header\">\n                <h5>Placement </h5>\n              </ion-item>\n              <div slot=\"content\">\n\n                <table>\n                  <tr>\n                    <!-- <td>\n                      <div *ngFor=\"let item of clgid1\">\n                        <span class=\"gray\"> Median Salary </span>\n                        \n                        <p>{{ median_salary ? median_salary : 'N/A' }}</p>\n                        <span class=\"gray\"> No of companies visited </span>\n                      \n                        <p>{{ no_of_companies_visited ? no_of_companies_visited : 'N/A' }}</p>\n                        <span class=\"gray\"> No of student selected </span>\n                       \n                        <p>{{ no_of_student_selected ? no_of_student_selected : 'N/A' }}</p>\n                        <span class=\"gray\"> No of student placed </span>\n                       \n                        <p>{{ no_of_students_placed ? no_of_students_placed : 'N/A' }}</p>\n                        <span class=\"gray\"> Year </span>\n                       \n                        <p>{{ year ? year : 'N/A' }}</p>\n                      </div>\n                    </td> -->\n\n                    <!-- <td>\n                      <div *ngFor=\"let item of clgid2\">\n                        <span class=\"gray\"> Median Salary </span>\n                        <p>{{ median_salary2 ? median_salary2 : 'N/A' }}</p>\n                        <span class=\"gray\"> No of companies visited </span>\n                        <p>{{ no_of_companies_visited2 ? no_of_companies_visited2 : 'N/A' }}</p>\n                        <span class=\"gray\"> No of student selected </span>\n                        <p>{{ no_of_student_selected2 ? no_of_student_selected2 : 'N/A' }}</p>\n                        <span class=\"gray\"> No of student placed </span>\n                        <p>{{ no_of_students_placed2 ? no_of_students_placed2 : 'N/A' }}</p>\n                        <span class=\"gray\"> Year </span>\n                        <p>{{ year2 ? year2 : 'N/A' }}</p>\n                      </div>\n                    </td> -->\n\n\n\n                    <td>\n                      <div *ngFor=\"let item of clgid1\">\n\n                        <span class=\"gray\">Academic year </span>\n                        <p>{{ (year && year !== '0') ? year : 'N/A' }}</p>\n\n                        <span class=\"gray\"> No. of companies visited </span>\n                        <p>{{ (no_of_companies_visited && no_of_companies_visited !== '0') ? no_of_companies_visited\n                          : 'N/A' }}</p>\n\n                        <span class=\"gray\"> No. of students placed </span>\n                        <p>{{ (no_of_students_placed && no_of_students_placed !== '0') ? no_of_students_placed :\n                          'N/A' }}</p>\n\n                        <span class=\"gray\"> Median salary (INR) </span>\n                        <p>{{ (median_salary && median_salary !== '0') ? median_salary : 'N/A' }}</p>\n\n\n\n                        <span class=\"gray\"> No. of students selected for higher education</span>\n                        <p>{{ (no_of_student_selected && no_of_student_selected !== '0') ? no_of_student_selected :\n                          'N/A' }}</p>\n\n                      </div>\n                    </td>\n\n\n\n                    <td>\n                      <div *ngFor=\"let item of clgid2\">\n\n                        <span class=\"gray\"> Academic year </span>\n                        <p>{{ (year2 && year2 !== '0') ? year2 : 'N/A' }}</p>\n\n                        <span class=\"gray\"> No. of companies visited </span>\n                        <p>{{ (no_of_companies_visited2 && no_of_companies_visited2 !== '0') ? no_of_companies_visited2\n                          : 'N/A' }}</p>\n\n\n                        <span class=\"gray\"> No. of students placed </span>\n                        <p>{{ (no_of_students_placed2 && no_of_students_placed2 !== '0') ? no_of_students_placed2 :\n                          'N/A' }}</p>\n\n\n                        <span class=\"gray\"> Median salary (INR) </span>\n                        <p>{{ (median_salary2 && median_salary2 !== '0') ? median_salary2 : 'N/A' }}</p>\n\n\n\n                        <span class=\"gray\"> No. of students selected for higher education </span>\n                        <p>{{ (no_of_student_selected2 && no_of_student_selected2 !== '0') ? no_of_student_selected2 :\n                          'N/A' }}</p>\n\n                      </div>\n                    </td>\n\n\n                  </tr>\n                </table>\n\n\n\n\n\n\n              </div>\n            </ion-accordion>\n\n            <ion-accordion value=\"six\">\n              <ion-item slot=\"header\">\n                <h5>Course Fees </h5>\n              </ion-item>\n              <div slot=\"content\">\n                <table>\n                  <tr>\n                    <td>\n                      <div *ngFor=\"let item of clgid1\">\n                        <div *ngFor=\"let item of coursesandfeesArr\">\n                          <span class=\"gray\"> Course Name</span>\n                          <p>{{item.name}}</p>\n                          <span class=\"gray\"> Subcategory </span>\n                          <p>{{item.subCategoryName }}</p>\n                          <span class=\"gray\"> Category </span>\n                          <p>{{item.courseCategoryName}}</p>\n                          <span class=\"gray\">Annual Fees </span>\n                          <p>{{ item.total_fees ? item.total_fees : 'N/A' }}</p>\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div *ngFor=\"let item of clgid2\">\n                        <div *ngFor=\"let item of coursesandfeesArr2\">\n                          <span class=\"gray\"> course name</span>\n                          <p>{{item.name}}</p>\n                          <span class=\"gray\"> Subcategory </span>\n                          <p>{{item.subCategoryName }}</p>\n                          <span class=\"gray\"> Category </span>\n                          <p>{{item.courseCategoryName}}</p>\n                          <span class=\"gray\"> Annual Fees </span>\n                          <p>{{ item.total_fees ? item.total_fees : 'N/A' }}</p>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </ion-accordion>\n\n\n\n            <ion-accordion value=\"seven\">\n              <ion-item slot=\"header\">\n                <h5>Admission Info </h5>\n              </ion-item>\n              <div slot=\"content\">\n                <table>\n                  <tr>\n                    <td>\n                      <div *ngFor=\"let item of clgid1\">\n                        <div *ngFor=\"let item of AdminssionprocessArr\">\n                          <span class=\"gray\"> Accepted Exams </span>\n\n                          <p>{{ item.Accepting_Exams ? item.Accepting_Exams : 'N/A' }}</p>\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div *ngFor=\"let item of clgid2\">\n                        <div *ngFor=\"let item of AdminssionprocessArr2\">\n                          <span class=\"gray\"> Accepted Exams </span>\n                          <p>{{ item.Accepting_Exams ? item.Accepting_Exams : 'N/A' }}</p>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </ion-accordion>\n\n\n\n\n\n            <ion-accordion value=\"ten\">\n              <ion-item slot=\"header\">\n                <h5>Infrastructure & Facilities</h5>\n              </ion-item>\n              <div slot=\"content\">\n                <table>\n                  <tr>\n                    <td class=\"facility\">\n\n\n                      <div *ngFor=\"let clgItem of clgid1\">\n                        <div class=\"facelityarr\" *ngFor=\"let facility of facilitiesArr\">\n                          <ng-container *ngIf=\"isSupportedIcon(facility.icon)\">\n                            <p style=\"display: flex; align-items: center; gap: 8px;\">\n                              <ng-container *ngIf=\"facility.icon.startsWith('fa-'); else materialIcon\">\n                                <!-- Font Awesome Icon -->\n                                <i [ngClass]=\"getFontAwesomeIconClass(facility.icon)\"\n                                  style=\"color: blue; font-size: 10px;\"></i>\n                              </ng-container>\n                              <ng-template #materialIcon>\n                                <!-- Material Icon -->\n                                <mat-icon style=\"color: blue; font-size: 10px;\">{{ facility.icon }}</mat-icon>\n                              </ng-template>\n                              <span>{{ facility.name }}</span>\n                            </p>\n                          </ng-container>\n                        </div>\n                      </div>\n\n                    </td>\n\n                    <td class=\"facility\">\n\n\n                      <div *ngFor=\"let clgItem of clgid2\">\n                        <div class=\"facelityarr\" *ngFor=\"let facility of facilitiesArr2\">\n                          <ng-container *ngIf=\"isSupportedIcon(facility.icon)\">\n                            <p style=\"display: flex; align-items: center; gap: 8px;\">\n                              <ng-container *ngIf=\"facility.icon.startsWith('fa-'); else materialIcon\">\n                                <!-- Font Awesome Icon -->\n                                <i [ngClass]=\"getFontAwesomeIconClass(facility.icon)\"\n                                  style=\"color: blue; font-size: 10px;\"></i>\n                              </ng-container>\n                              <ng-template #materialIcon>\n                                <!-- Material Icon -->\n                                <mat-icon style=\"color: blue; font-size: 10px;\">{{ facility.icon }}</mat-icon>\n                              </ng-template>\n                              <span>{{ facility.name }}</span>\n                            </p>\n                          </ng-container>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </ion-accordion>\n\n\n\n\n          </ion-accordion-group>\n        </ng-container>\n      </div>\n    </div>\n\n\n    <div class=\"shearesec1\">\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-label class=\"labelset\">Share this :</ion-label>\n        </ion-col>\n        <ion-col size=\"9\">\n          <img class=\"setimg\" (click)=\" shareOnFacebook()\" src=\"../../../assets/icon/facebook.png\">\n          <img class=\"setimg\" (click)=\" shareOnWhatsApp()\" src=\"../../../assets/icon/whatsapp.png\">\n          <img class=\"setimg\" (click)=\"  shareOnTwitter()\" src=\"../../../assets/icon/twitter.png\">\n          <img class=\"setimg\" (click)=\"  shareOnLinkedIn()\" src=\"../../../assets/icon/linkedin.png\">\n          <!-- <img class=\"setimg set\" src=\"../../../assets/icon/email.png\"> -->\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n    <!-- 4th section -->\n    <!-- <div class=\"cardsection\" >\n      <h4>Popular comparisons </h4>\n\n      <ion-slides [options]=\"slideOpts\">\n\n        <ion-slide >\n          <ion-card class=\"setcrd\">\n            <div class=\"vs\">VS</div>\n            <ion-row>\n              <div *ngFor=\"let item of clgid1;\" >\n              <ion-col size=\"6\">\n                <div class=\"vsimg\"> <img class=\"setimg\" [src]=\"item[0].logo\"\n                    onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\"></div>\n                <p class=\"title\">{{item[0].title}}</p>\n                <p class=\"setclgN\">{{item[0].branch}} </p>\n\n                <p class=\"setrating\">\n                  {{item[0].rating}}\n                  <ng-container *ngFor=\"let star of [1, 2, 3, 4, 5]; let i = index\">\n                    <ion-icon class=\"seticons\" [name]=\"i < item[0].rating ? 'star' : 'star-outline'\"></ion-icon>\n                  </ng-container>\n                  ({{item[0].totalRatings}})\n                  {{item[0].reviews}}\n                </p>\n\n              </ion-col>\n            </div>\n              <ion-col size=\"6\" *ngFor=\"let item of cmprclgArr\">\n                <div class=\"vsimg\"> <img class=\"setimg\" [src]=\"item.logo\"\n                    onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\"></div>\n                <p class=\"title\">{{item[1].title}}</p>\n                <p class=\"setclgN\">{{item[1].branch}}</p>\n                <p class=\"setrating\">\n                  {{item[0].rating}}\n                  <ng-container *ngFor=\"let star of [1, 2, 3, 4, 5]; let i = index\">\n                    <ion-icon class=\"seticons\" [name]=\"i < item[1].rating ? 'star' : 'star-outline'\"></ion-icon>\n                  </ng-container>\n                  ({{item[1].totalRatings}})\n                  {{item[1].reviews}}\n                </p>\n              </ion-col>\n            </ion-row>\n            <div class=\"setbtn\" (click)=\"compr2clg(item[0].id,item[1].id)\">\n              <ion-button>Compare</ion-button>\n            </div>\n\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n\n    </div> -->\n\n\n    <!-- 4th section -->\n    <!-- <div class=\"cardsection\" *ngIf=\"clgid1 && clgid1.length > 0 && cmprclgArr && cmprclgArr.length > 0\">\n  <h4>Popular comparisons</h4>\n  <ion-slides [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let cmpClg of cmprclgArr; let i = index\">\n      <ion-card class=\"setcrd\">\n        <div class=\"vs\">VS</div>\n        <ion-row>\n          <ion-col size=\"6\">\n            <div class=\"vsimg\">\n              <img class=\"setimg\" [src]=\"clgid1[0].logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n            <p class=\"title\">{{ clgid1[0].title }}</p>\n            <p class=\"setclgN\">{{ clgid1[0].branch }}</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <div class=\"vsimg\">\n              <img class=\"setimg\" [src]=\"cmpClg.logo\" onerror=\"this.src='../../assets/clg_img/no_image2.jpg';\">\n            </div>\n            <p class=\"title\">{{ cmpClg.title }}</p>\n            <p class=\"setclgN\">{{ cmpClg.branch }}</p>\n          </ion-col>\n        </ion-row>\n        <div class=\"setbtn\" (click)=\"compr2clg(clgidclg1,cmprclgid)\">\n          <ion-button>Compare</ion-button>\n        </div>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div> -->\n\n\n\n\n\n\n\n\n\n\n\n\n    <!-- ion model 1 -->\n\n    <ion-modal [isOpen]=\"isModalOpen\" (willDismiss)=\"onWillDismiss($event)\">\n      <ng-template>\n\n        <ion-content>\n\n          <ion-card class=\"collegecard\">\n\n            <ion-card-header>\n              <ion-row>\n                <ion-col size=\"11\">\n                  <ion-card-title>Select Degree and Course </ion-card-title>\n                </ion-col>\n                <ion-col size=\"1\">\n                  <ion-icon (click)=\"cancel()\" name=\"close-outline\" class=\"setclose\"></ion-icon>\n                </ion-col>\n              </ion-row>\n\n\n            </ion-card-header>\n            <ion-card-content>\n              <ion-searchbar [(ngModel)]=\"searchTerm\" (ionChange)=\"search()\" (ionBlur)=\"closeResults()\"\n                placeholder=\"Search college\" class=\"searchbar\"></ion-searchbar>\n\n              <div *ngIf=\"!hide\" class=\"setlist\">\n                <ul *ngIf=\"showResults\">\n                  <li *ngFor=\"let result of searchResults\">\n                    <div (click)=\"selectResult(result)\" style=\"color:black !important\">{{ result.title }}</div>\n                  </li>\n                </ul>\n              </div>\n\n\n              <!-- <ion-item>\n                <ion-label>Select Course Level</ion-label>\n                <ion-select [(ngModel)]=\"courselevel\" (ionChange)=\"getcourselts()\">\n                  <ion-select-option *ngFor=\"let item of locationArry\" [value]=\"item.id\"\n                    style=\"color:black !important; --color:black;\">\n                    {{ item.name}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item> -->\n              <ion-item>\n                <ion-label>Select Course Level</ion-label>\n                <ion-select [(ngModel)]=\"courselevel\" (ionChange)=\"getcollgelevel(courselevel)\">\n                  <ion-select-option *ngFor=\"let item of locationArry\" [value]=\"item\">\n                    {{ item.name }}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label>Select Course</ion-label>\n                <!-- \n                <ion-select [(ngModel)]=\"selectcourseId\"  >\n                  <ion-select-option class=\"select-text ionselect\" style=\"height: 100px;\" *ngFor=\"let item of courseArry\" [value]=\"item.id\"\n                    style=\"color:black !important; --color:black; white-space: normal !important;\">\n                    {{item.name}}\n                  </ion-select-option>\n                </ion-select> -->\n                <ion-select [(ngModel)]=\"selectcourseId\" interface=\"alert\">\n                  <ion-select-option *ngFor=\"let item of courseArry\" [value]=\"item.id\" class=\"multi-line-option\">\n                    {{ item.name }}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n              <div>\n                <ion-button (click)=\"clgcomapr(collegeId,selectcourseId,courselevel)\" expand=\"block\">Apply</ion-button>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n    <!-- ion model close -->\n\n\n\n  </div>\n</ion-content>\n\n\n\n\n\n<ion-footer>\n  <ion-row>\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab1\">\n      <ion-icon name=\"home\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" tab=\"tab2\" routerLink=\"/tabs/tabs/tab2\">\n      <ion-icon name=\"search-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Search</ion-label>\n    </ion-tab-button>\n\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab3\">\n      <ion-icon name=\"albums-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Recommended</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab4\">\n      <ion-icon name=\"bookmark-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Shortlist</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"botmtabset\" routerLink=\"/tabs/tabs/tab5\">\n      <ion-icon name=\"chatbox-outline\" style=\"font-size:20px; color:black !important\"></ion-icon>\n      <ion-label style=\"color:black !important\">Assistant</ion-label>\n    </ion-tab-button>\n\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ 28234:
/*!*******************************************************!*\
  !*** ./src/app/pages/clgcompare/clgcompare.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".firstsection {\n  background-color: white;\n  padding-left: 10px;\n}\n\n.secdiv {\n  background-color: white;\n  margin-top: 13px;\n  border-top: 2px solid lightgray;\n  position: relative;\n  padding: 16px 6px 0;\n  border-top: 2px solid lightgray;\n}\n\n.secdiv .border {\n  position: relative;\n}\n\n.setcard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 110px;\n  box-shadow: none;\n  border: 1px dashed gray;\n  border-radius: 10px;\n}\n\n.setcard ion-icon {\n  font-size: 30px;\n}\n\n.setcard ion-label {\n  text-align: end;\n}\n\n.shearesec {\n  padding-left: 10px;\n  background-color: white;\n  padding: 5px;\n  border-top: 2px solid lightgray;\n  border-bottom: 2px solid lightgray;\n  margin-top: 17px;\n}\n\n.shearesec .labelset {\n  position: relative;\n  top: 14px;\n  font-size: 15px;\n}\n\n.shearesec .setimg {\n  width: 100px !important;\n  height: 100px !important;\n  margin: 6px;\n}\n\n.shearesec .set {\n  height: 35px;\n  position: relative;\n  top: -1px;\n}\n\n.cardsection {\n  padding-left: 10px;\n  background-color: white;\n  width: 400px;\n  height: 400px;\n  margin-top: 15px;\n  border-top: 2px solid lightgray;\n  border-bottom: 2px solid lightgray;\n}\n\n.cardsection .setcrd {\n  text-align: left;\n  padding: 12px;\n  position: relative;\n}\n\n.cardsection .setcrd .vs {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-radius: 50px;\n  position: absolute;\n  color: #fff;\n  padding: 6px;\n  left: 45%;\n  top: 15%;\n  z-index: 1;\n  font-style: italic;\n}\n\n.cardsection .setcrd .setimg {\n  width: 82px;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n.cardsection .setcrd .title {\n  color: black;\n  font-weight: bold;\n  font-size: 11px;\n}\n\n.cardsection .setcrd .setclgN {\n  font-size: 11px;\n}\n\n.cardsection .setcrd .setrating {\n  font-size: 8px;\n}\n\n.cardsection .setcrd .seticons {\n  color: #c2c26d;\n}\n\n.cardsection .setcrd .setbtn {\n  text-align: center;\n}\n\n.vsimg {\n  border: 1px solid #cbcbcb;\n  text-align: center;\n  padding: 6px;\n}\n\n.secdiv {\n  position: relative;\n}\n\n.secdiv .bordr {\n  position: absolute;\n  border-left: 1px solid #a0a0a0;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\n.cardsection {\n  padding-left: 10px;\n  background-color: white;\n  padding-bottom: 12px;\n  border-top: 1px solid lightgray;\n  border-bottom: 1px solid lightgray;\n  margin-top: 1rem;\n}\n\n.cardsection .setcrd {\n  text-align: left;\n  padding: 12px;\n  position: relative;\n}\n\n.cardsection .setcrd .vs {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-radius: 50px;\n  position: absolute;\n  color: #fff;\n  padding: 6px;\n  left: 45%;\n  top: 15%;\n  z-index: 1;\n  font-style: italic;\n}\n\n.cardsection .setcrd .setimg {\n  width: 82px;\n  padding-left: 6px;\n  padding-right: 6px;\n}\n\n.cardsection .setcrd .title {\n  color: #000;\n  font-weight: 500;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.cardsection .setcrd .setclgN {\n  font-size: 12px;\n}\n\n.cardsection .setcrd .setrating {\n  font-size: 8px;\n}\n\n.cardsection .setcrd .seticons {\n  color: #FFC107;\n}\n\n.cardsection .setcrd .setbtn {\n  text-align: center;\n}\n\n.vsimg {\n  border: 1px solid #cbcbcb;\n  text-align: center;\n  padding: 6px;\n  height: 87px;\n}\n\n.secdiv {\n  position: relative;\n}\n\n.secdiv .bordr {\n  position: absolute;\n  border-left: 1px solid #a0a0a0;\n  height: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n\nion-header ion-icon {\n  font-size: 24px !important;\n  padding-top: 4px;\n}\n\n.cmprsection img {\n  width: 100px;\n  margin: auto;\n  display: block;\n}\n\n.cmprsection table {\n  width: 100%;\n}\n\n.cmprsection table td {\n  width: 50%;\n  text-align: left;\n  border: 1px solid lightgray;\n  padding: 8px 12px;\n}\n\n.cmprsection h6 {\n  color: #3F51B5;\n  font-weight: 500;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.cmprsection p {\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.cmprsection ion-button {\n  --border-width: 1px;\n  text-transform: capitalize;\n}\n\n.cmprsection .vss {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border-radius: 50px;\n  position: absolute;\n  color: #fff;\n  padding: 6px;\n  left: 47%;\n  top: 2%;\n  z-index: 1;\n  font-style: italic;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n\n.cmprsection .closecard {\n  display: block;\n  margin-left: auto;\n  font-size: 20px;\n  border-radius: 50px;\n  padding: 2px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n}\n\n.cmprsection ion-accordion-group h5 {\n  margin: auto;\n  color: black;\n}\n\n.cmprsection .reviewSec p.bold {\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.cmprsection .reviewSec .seticons {\n  color: #FFC107;\n}\n\n.cmprsection .reviewSec .lightgray {\n  color: #dbdbdb;\n}\n\n.cmprsection .reviewSec ion-icon {\n  font-size: 18px;\n  vertical-align: middle;\n}\n\n.facility p {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.facility img {\n  width: 24px;\n  margin: 0px 14px 0px 0px;\n}\n\n.blue {\n  color: #0083dc;\n}\n\n.gray {\n  color: gray;\n}\n\n.shearesec1 {\n  padding-left: 10px;\n  background-color: white;\n  padding: 5px;\n  border-top: 2px solid lightgray;\n  border-bottom: 2px solid lightgray;\n  margin-top: 17px;\n}\n\n.shearesec1 .labelset {\n  position: relative;\n  top: 14px;\n  font-size: 15px;\n}\n\n.shearesec1 .setimg {\n  width: 35px;\n  margin: 6px;\n}\n\n.shearesec1 .set {\n  height: 35px;\n  position: relative;\n  top: -1px;\n}\n\n.setcard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 110px;\n  box-shadow: none;\n  border: 1px dashed gray;\n  border-radius: 10px;\n}\n\n.setcard ion-icon {\n  font-size: 30px;\n}\n\n.setcard ion-label {\n  text-align: end;\n}\n\n.inputset {\n  position: relative;\n  text-align: center;\n  width: 100%;\n  margin: 15px;\n}\n\n.inputset input {\n  border: 0;\n  height: 40px;\n  width: 80%;\n  border-bottom: 1px solid lightgray;\n}\n\n.title h5 {\n  color: white;\n}\n\n.title .iconset {\n  font-size: 28px;\n  padding-top: 15px;\n  padding-left: 8px;\n  color: white;\n}\n\n.btndiv {\n  text-align: center;\n  position: relative;\n  top: 156px;\n  background: #c8c8c8;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 100%;\n}\n\n.searchbar {\n  --border-radius: 50px;\n  padding: 0;\n  --box-shadow: none;\n  border: 1px solid gray;\n  border-radius: 50px;\n}\n\nion-searchbar {\n  --color: black !important;\n}\n\n.degree-course-card {\n  margin-top: 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.btndiv {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.btndiv ion-button {\n  background-color: #007bff;\n  color: #ffffff;\n  border-radius: 10px;\n  padding: 10px 20px;\n}\n\n.collegecard {\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.collegecard ion-card-title {\n  font-size: 18px;\n}\n\n.collegecard ion-card-header {\n  background: #9bd61e;\n  margin-bottom: 12px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.setclose {\n  font-size: 29px;\n  color: black;\n}\n\n.facelityarr p {\n  display: flex;\n  align-items: center;\n  /* Align text and icons vertically */\n  grid-gap: 8px;\n  gap: 8px;\n  /* Space between icon and text */\n}\n\n.facelityarr i, .facelityarr mat-icon {\n  color: blue;\n  /* Set icon color to blue */\n  font-size: 10px;\n  /* Set icon size to 10px */\n}\n\n.facelityarr span {\n  font-size: 14px;\n  /* Adjust text size as needed */\n}\n\n.iconsset {\n  font-size: 22px;\n  color: blue;\n  margin-right: 6px;\n}\n\nion-select {\n  white-space: normal !important;\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n\n::ng-deep .alert-radio-label.sc-ion-alert-md {\n  white-space: normal !important;\n  overflow-wrap: break-word;\n  line-height: 1.4;\n}\n\n::ng-deep ion-select-option.ionselect {\n  white-space: normal !important;\n  height: auto !important;\n  line-height: 1.2 !important;\n  padding: 10px;\n  display: block;\n}\n\n.text-wrapper {\n  max-width: 100%;\n  overflow-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFBO0FBakNSOztBQXFDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBbENKOztBQXVDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUFxQixvQ0FBQTtFQUNyQixhQUFBO0VBQUEsUUFBQTtFQUFVLGdDQUFBO0FBbENsQjs7QUFxQ007RUFDRSxXQUFBO0VBQWEsMkJBQUE7RUFDYixlQUFBO0VBQWlCLDBCQUFBO0FBakN6Qjs7QUFvQ007RUFDRSxlQUFBO0VBQWlCLCtCQUFBO0FBakN6Qjs7QUFxQ0M7RUFDRyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBbENKOztBQXFDQTtFQUNFLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWxDRjs7QUFxQ0E7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFsQ0Y7O0FBb0NBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFqQ0Y7O0FBbUNBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBaENGIiwiZmlsZSI6ImNsZ2NvbXBhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0c2VjdGlvbntcblxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5wYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5zZWNkaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDoxM3B4O1xuICAgIGJvcmRlci10b3A6MnB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNnB4IDZweCAwO1xuYm9yZGVyLXRvcDoycHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgLmJvcmRlcntcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgfVxufVxuXG4uc2V0Y2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgYm9yZGVyOiAxcHggZGFzaGVkIGdyYXk7XG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgaW9uLWxhYmVse1xuICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxufVxuXG4vLyAzcmQgc2VjdGlvblxuLnNoZWFyZXNlY3tcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmF5O1xuICAgIG1hcmdpbi10b3A6IDE3cHg7XG4gICAgLmxhYmVsc2V0e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbi5zZXRpbWd7XG4gICAgd2lkdGg6MTAwcHggICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEwMHB4ICAhaW1wb3J0YW50O1xuICAgICBtYXJnaW46NnB4XG59XG4uc2V0e1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMXB4O1xufVxufVxuXG4vLyA0dGggc2VjdGlvblxuXG4uY2FyZHNlY3Rpb257IFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbndpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmF5O1xuICAgIC5zZXRjcmR7XG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC52c3tcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICBsZWZ0OiA0NSU7XG4gICAgICAgICAgICB0b3A6IDE1JTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICBcbi5zZXRpbWd7XG4gICAgd2lkdGg6IDgycHg7XG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuLnRpdGxle1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6MTFweDtcbn1cbi5zZXRjbGdOe1xuICAgIGZvbnQtc2l6ZToxMXB4O1xufVxuLnNldHJhdGluZ3tcbiAgICBmb250LXNpemU6OHB4O1xufVxuLnNldGljb25ze1xuICAgIGNvbG9yOiAjYzJjMjZkO1xufVxuLnNldGJ0bntcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbiAgICB9XG5cbn1cblxuLnZzaW1ne1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmNiY2I7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDZweDtcbn1cblxuXG4uc2VjZGl2e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuYm9yZHJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYTBhMGEwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxufVxuXG4vLyBjb21wYXJlIGNsZ2RldGFpbHMgc2VjdGlvbiBjc3NcblxuLy8gNHRoIHNlY3Rpb25cbiAgICBcbi5jYXJkc2VjdGlvbnsgXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIC5zZXRjcmR7XG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC52c3tcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICBsZWZ0OiA0NSU7XG4gICAgICAgICAgICB0b3A6IDE1JTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICBcbi5zZXRpbWd7XG4gICAgd2lkdGg6IDgycHg7XG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuLnRpdGxle1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG4uc2V0Y2xnTntcbiAgICBmb250LXNpemU6MTJweDtcbn1cbi5zZXRyYXRpbmd7XG4gICAgZm9udC1zaXplOjhweDtcbn1cbi5zZXRpY29uc3tcbiAgICBjb2xvcjogI0ZGQzEwNztcbn1cbi5zZXRidG57XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG4gICAgfVxuXG59XG5cbi52c2ltZ3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgaGVpZ2h0OiA4N3B4O1xufVxuLnNlY2RpdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmJvcmRye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2EwYTBhMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbn1cbmlvbi1oZWFkZXIgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5jbXByc2VjdGlvbntcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgdGFibGV7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICB0YWJsZSB0ZCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgfVxuICAgIGg2e1xuICAgICAgICBjb2xvcjogIzNGNTFCNTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICAgIC52c3N7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgIGxlZnQ6IDQ3JTtcbiAgICAgICAgdG9wOiAyJTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTkpIDBweCAxMHB4IDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDZweCA2cHg7XG4gICAgfVxuICAgIC5jbG9zZWNhcmR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDJweCA1cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxcHggM3B4IC0xcHg7XG4gICAgfVxuICAgIGlvbi1hY2NvcmRpb24tZ3JvdXB7XG4gICAgICAgIGg1e1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yZXZpZXdTZWN7XG4gICAgICAgIHAuYm9sZHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNldGljb25ze1xuICAgICAgICAgICAgY29sb3I6ICNGRkMxMDc7XG4gICAgICAgIH1cbiAgICAgICAubGlnaHRncmF5IHtcbiAgICAgICAgICAgIGNvbG9yOiNkYmRiZGI7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxufVxuLmZhY2lsaXR5e1xuICAgIHB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMTRweCAwcHggMHB4O1xuICAgIH1cbn1cbi5ibHVle1xuICAgIGNvbG9yOiAjMDA4M2RjO1xufVxuLmdyYXl7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi8vIDNyZCBzZWN0aW9uXG4uc2hlYXJlc2VjMXtcbnBhZGRpbmctbGVmdDogMTBweDtcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xucGFkZGluZzo1cHg7XG5ib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRncmF5O1xuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbm1hcmdpbi10b3A6IDE3cHg7XG4ubGFiZWxzZXR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xudG9wOiAxNHB4O1xuZm9udC1zaXplOiAxNXB4O1xufVxuXG4uc2V0aW1ne1xud2lkdGg6MzVweDtcblxuIG1hcmdpbjo2cHhcbn1cbi5zZXR7XG5oZWlnaHQ6IDM1cHg7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG50b3A6IC0xcHg7XG59XG59XG5cblxuLnNldGNhcmR7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiBoZWlnaHQ6IDExMHB4O1xuIGJveC1zaGFkb3c6IG5vbmU7XG4gYm9yZGVyOiAxcHggZGFzaGVkIGdyYXk7XG4gYm9yZGVyLXJhZGl1czogMTBweDtcbmlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbmlvbi1sYWJlbHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG59XG5cblxuLy8gbW9kZWwgY3NzXG5cbi5pbnB1dHNldHtcbnBvc2l0aW9uOnJlbGF0aXZlO1xudGV4dC1hbGlnbjogY2VudGVyO1xud2lkdGg6IDEwMCU7XG5tYXJnaW46MTVweDtcbmlucHV0e1xuICAgIGJvcmRlcjowO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDo4MCU7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgbGlnaHRncmF5O1xuICAgXG59XG59XG5cbi50aXRsZXtcbi8vIGJhY2tncm91bmQ6ICM1MzY1OGE7ICBcblxuaDV7XG5jb2xvcjp3aGl0ZTsgIFxufVxuXG4uaWNvbnNldHtcbmZvbnQtc2l6ZTogMjhweDtcbnBhZGRpbmctdG9wOjE1cHg7XG5wYWRkaW5nLWxlZnQ6OHB4O1xuY29sb3I6d2hpdGU7XG5cbn1cblxufVxuXG4uYnRuZGl2e1xudGV4dC1hbGlnbjogY2VudGVyO1xucG9zaXRpb246IHJlbGF0aXZlO1xudG9wOiAxNTZweDtcbmJhY2tncm91bmQ6ICNjOGM4Yzg7XG59XG5cblxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xucGFkZGluZzogMC4zZW0gMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjVlbTsgfVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5zZWFyY2hiYXIge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIFxufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgICAtLWNvbG9yOiBibGFjayAhaW1wb3J0YW50OyBcbiAgIFxuICB9XG4gIC5kZWdyZWUtY291cnNlLWNhcmQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIFxuICAuYnRuZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLmJ0bmRpdiBpb24tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG4gIC5jb2xsZWdlY2FyZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGlvbi1jYXJkLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgYmFja2dyb3VuZDogIzliZDYxZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5zZXRjbG9zZXtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cblxuIC5mYWNlbGl0eWFycntcbiAgICBwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQWxpZ24gdGV4dCBhbmQgaWNvbnMgdmVydGljYWxseSAqL1xuICAgICAgICBnYXA6IDhweDsgLyogU3BhY2UgYmV0d2VlbiBpY29uIGFuZCB0ZXh0ICovXG4gICAgICB9XG4gICAgICBcbiAgICAgIGksIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6IGJsdWU7IC8qIFNldCBpY29uIGNvbG9yIHRvIGJsdWUgKi9cbiAgICAgICAgZm9udC1zaXplOiAxMHB4OyAvKiBTZXQgaWNvbiBzaXplIHRvIDEwcHggKi9cbiAgICAgIH1cbiAgICAgIFxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDsgLyogQWRqdXN0IHRleHQgc2l6ZSBhcyBuZWVkZWQgKi9cbiAgICAgIH1cbiB9XG5cbiAuaWNvbnNzZXR7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiBibHVlO1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuIH1cblxuaW9uLXNlbGVjdCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMnB4O1xuICAtLXBhZGRpbmctZW5kOiAxMnB4O1xufVxuIFxuOjpuZy1kZWVwIC5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtbWQgIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuOjpuZy1kZWVwICBpb24tc2VsZWN0LW9wdGlvbi5pb25zZWxlY3R7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udGV4dC13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_clgcompare_clgcompare_module_ts.js.map