"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_coursewiseexam_coursewiseexam_module_ts"],{

/***/ 88210:
/*!***********************************************************************!*\
  !*** ./src/app/pages/coursewiseexam/coursewiseexam-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseexamPageRoutingModule": () => (/* binding */ CoursewiseexamPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _coursewiseexam_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursewiseexam.page */ 69675);




const routes = [
    {
        path: '',
        component: _coursewiseexam_page__WEBPACK_IMPORTED_MODULE_0__.CoursewiseexamPage
    }
];
let CoursewiseexamPageRoutingModule = class CoursewiseexamPageRoutingModule {
};
CoursewiseexamPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoursewiseexamPageRoutingModule);



/***/ }),

/***/ 92727:
/*!***************************************************************!*\
  !*** ./src/app/pages/coursewiseexam/coursewiseexam.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseexamPageModule": () => (/* binding */ CoursewiseexamPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _coursewiseexam_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursewiseexam-routing.module */ 88210);
/* harmony import */ var _coursewiseexam_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursewiseexam.page */ 69675);







let CoursewiseexamPageModule = class CoursewiseexamPageModule {
};
CoursewiseexamPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _coursewiseexam_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoursewiseexamPageRoutingModule
        ],
        declarations: [_coursewiseexam_page__WEBPACK_IMPORTED_MODULE_1__.CoursewiseexamPage]
    })
], CoursewiseexamPageModule);



/***/ }),

/***/ 69675:
/*!*************************************************************!*\
  !*** ./src/app/pages/coursewiseexam/coursewiseexam.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseexamPage": () => (/* binding */ CoursewiseexamPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coursewiseexam_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coursewiseexam.page.html */ 13952);
/* harmony import */ var _coursewiseexam_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursewiseexam.page.scss */ 2977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);








let CoursewiseexamPage = class CoursewiseexamPage {
    constructor(service, activatedRoute, router, loadingController) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingController = loadingController;
        this.selectedSegment = 'Criteria';
        this.itemsToShow = 10; // Initial number of items to display
        this.increment = 50; // Number of items to add when clicking "View More"
        this.showDetails = false;
        this.nodata = false;
        this.statename = JSON.parse(localStorage.getItem('state'));
    }
    ngOnInit() {
        var _a, _b;
        const coursedata = localStorage.getItem('courses');
        this.coursesArray = JSON.parse(coursedata);
        this.coursename = (_a = this.coursesArray[0]) === null || _a === void 0 ? void 0 : _a.name;
        this.courseId = (_b = this.coursesArray[0]) === null || _b === void 0 ? void 0 : _b.id;
        this.courseCatId = JSON.parse(localStorage.getItem('catID'));
        this.academic_category = localStorage.getItem("academic_category");
        this.getexamlist();
    }
    viewMore() {
        this.itemsToShow += this.increment;
    }
    onViewDetails() {
        this.showDetails = true;
    }
    hideDetails() {
        this.showDetails = false;
    }
    segmentChanged(event) {
        this.selectedSegment = event.detail.value;
    }
    getexamlist() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
            yield loader.present(); // Show the loader
            this.service.getexams(this.courseCatId, this.statename, this.academic_category).subscribe(
            // this.service.examlistbycategory(this.courseCatId, this.courseId,this.statename).subscribe(
            (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                if (res.response_code == 200) {
                    this.coursesArray = res.examslist;
                    console.log(this.coursesArray);
                    this.nodata = false;
                    yield loader.dismiss();
                }
                if (res.response_code == 400) {
                    this.nodata = true;
                    yield loader.dismiss();
                }
                // Dismiss the loader once data is received
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.error('Error fetching exam list:', err);
                yield loader.dismiss(); // Dismiss the loader in case of an error
            }));
        });
    }
    exmdetail(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/coursewiseexamdetails', id]);
        });
    }
};
CoursewiseexamPage.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
CoursewiseexamPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-coursewiseexam',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coursewiseexam_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_coursewiseexam_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoursewiseexamPage);



/***/ }),

/***/ 13952:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/coursewiseexam/coursewiseexam.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          \n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n <ion-content >\n  <div style=\"margin:10px;\">\n    <div *ngIf=\"!nodata\">\n      <h5 style=\"margin:10px 0\">{{coursename}} Exam List</h5>\n      <div *ngIf=\"!nodata\">\n      <div *ngFor=\"let item of coursesArray | slice:0:itemsToShow\">\n        <ion-row class=\"setrow\">\n          <ion-col size=\"5\">\n            <img class=\"imgset\" [src]=\"item.image\">\n          </ion-col>\n          <ion-col size=\"7\" class=\"vwdetails\">\n            <h5>{{item.title}}</h5>\n            <p class=\"pset\" (click)=\"exmdetail(item.id)\">view details</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    </div>\n    <div  *ngIf=\"!nodata\">\n    <div *ngIf=\"itemsToShow < coursesArray.length\" style=\"text-align:center; margin-top:20px;\">\n      <ion-button (click)=\"viewMore()\">View More</ion-button>\n    </div>\n  </div>\n  <div  *ngIf=\"nodata\">\n  <h6>No Data</h6>\n  </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 2977:
/*!***************************************************************!*\
  !*** ./src/app/pages/coursewiseexam/coursewiseexam.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".setrow {\n  border: 1px solid lightgray;\n  margin-bottom: 10px;\n  border-radius: 5px;\n}\n\n.seg-btnns {\n  --color-checked: #ffffff;\n  --indicator-height: 0px;\n  font-size: 14px;\n  --background-checked: #88d834;\n  --border-radius: 50px;\n  min-height: 0;\n  height: 38px;\n  text-transform: capitalize;\n  margin: 16px 5px;\n  border: 1px solid #f1f1f1;\n}\n\n.imageset {\n  height: 120px;\n  margin-left: 11px;\n}\n\n.f30 {\n  text-align: end;\n}\n\n.pset {\n  font-size: 15px;\n  width: 100px;\n  text-align: center;\n  background: #0081dc;\n  border-radius: 5px;\n  color: white;\n  padding: 5px;\n  margin: 0;\n}\n\n.imgset {\n  height: 96px;\n}\n\n.notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n\n.vwdetails {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXdpc2VleGFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFLRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUlFO0VBQ0UsZUFBQTtBQURKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFGSjs7QUFLRTtFQUNFLFlBQUE7QUFGSjs7QUFLRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRFI7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFERiIsImZpbGUiOiJjb3Vyc2V3aXNlZXhhbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zZXRyb3d7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2VnLWJ0bm5ze1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAtLWluZGljYXRvci1oZWlnaHQ6IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4OGQ4MzQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbjogMTZweCA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgICAvLyBtaW4td2lkdGg6IDE3OXB4O1xuICBcbiAgfVxuXG4gIC5pbWFnZXNldHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICB9XG4gIC5mMzB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICB9XG4gIFxuXG4gIC5wc2V0e1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMwMDgxZGM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmltZ3NldHtcbiAgICBoZWlnaHQ6IDk2cHg7XG5cbiAgfVxuICAubm90aWZpY2F0aW9ue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGlvbi1iYWRnZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTUlO1xuICAgICAgICB0b3A6IC03cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDRweDtcbiAgICB9XG59XG4udndkZXRhaWxze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_coursewiseexam_coursewiseexam_module_ts.js.map