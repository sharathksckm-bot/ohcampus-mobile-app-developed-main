"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_placemntdetails_placemntdetails_module_ts"],{

/***/ 70644:
/*!*************************************************************************!*\
  !*** ./src/app/pages/placemntdetails/placemntdetails-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacemntdetailsPageRoutingModule": () => (/* binding */ PlacemntdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _placemntdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placemntdetails.page */ 27915);




const routes = [
    {
        path: '',
        component: _placemntdetails_page__WEBPACK_IMPORTED_MODULE_0__.PlacemntdetailsPage
    }
];
let PlacemntdetailsPageRoutingModule = class PlacemntdetailsPageRoutingModule {
};
PlacemntdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlacemntdetailsPageRoutingModule);



/***/ }),

/***/ 37309:
/*!*****************************************************************!*\
  !*** ./src/app/pages/placemntdetails/placemntdetails.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacemntdetailsPageModule": () => (/* binding */ PlacemntdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _placemntdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placemntdetails-routing.module */ 70644);
/* harmony import */ var _placemntdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placemntdetails.page */ 27915);







let PlacemntdetailsPageModule = class PlacemntdetailsPageModule {
};
PlacemntdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _placemntdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlacemntdetailsPageRoutingModule
        ],
        declarations: [_placemntdetails_page__WEBPACK_IMPORTED_MODULE_1__.PlacemntdetailsPage]
    })
], PlacemntdetailsPageModule);



/***/ }),

/***/ 27915:
/*!***************************************************************!*\
  !*** ./src/app/pages/placemntdetails/placemntdetails.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacemntdetailsPage": () => (/* binding */ PlacemntdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_placemntdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./placemntdetails.page.html */ 56982);
/* harmony import */ var _placemntdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placemntdetails.page.scss */ 95924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);








let PlacemntdetailsPage = class PlacemntdetailsPage {
    constructor(router, service, route, loadingController) {
        this.router = router;
        this.service = service;
        this.route = route;
        this.loadingController = loadingController;
        this.clgdetailArry = [];
        this.clgimgArry = [];
    }
    ngOnInit() {
        this.collegeId = this.route.snapshot.paramMap.get('id');
        this.placementdetail();
        this.getclgdetail();
    }
    getclgdetail() {
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
            this.service.getclgdetails(this.collegeId).subscribe(res => {
                this.clgdetailArry = res.college_detail; // Assign college detail array
                this.clglogo = res.college_detail[0].logo; // Get college logo
                this.collegename = res.college_detail[0].title; // Get college name
                this.description = res.college_detail[0].description; // Get description
                this.clgimgArry = res.college_images; // Get college images
                // Log data for debugging
                console.log(this.clgdetailArry);
                console.log(this.collegename);
                loading.dismiss(); // Dismiss the loader once data is fetched
            }, error => {
                console.error('Error fetching college details:', error);
                loading.dismiss(); // Dismiss the loader in case of an error
            });
        });
    }
    placementdetail() {
        this.searchYear = '';
        this.searchCategory = '';
        this.service.getplacementdtil(this.collegeId, this.searchYear, this.searchCategory).subscribe(res => {
            console.log(res);
            this.placementdetailarry = res.placementlist;
            console.log(this.placementdetailarry);
        });
    }
};
PlacemntdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
PlacemntdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-placemntdetails',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_placemntdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_placemntdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlacemntdetailsPage);



/***/ }),

/***/ 56982:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/placemntdetails/placemntdetails.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"maindiv\">\n    <h5>{{collegename}} College Placement Details</h5>\n    <div *ngFor=\"let item of clgdetailArry\">\n    <div class=\"m10\" >\n    <ion-card>\n      <img [src]=\"item.image\">\n    </ion-card>\n    <h6>{{item.name}}</h6>\n  </div>\n  \n    <div class=\"m10\"> \n      <h6>College Description :</h6>\n      <p class=\"m0\" [innerHTML]=\"description\"></p>\n  </div>\n</div>\n\n\n\n<div>\n \n  <div class=\"m10 settble\" *ngIf=\"placementdetailarry && placementdetailarry.length > 0; else noData\">\n\n    <h5>{{collegename}} College Placement Report</h5>\n\n    <table style=\"width:100%\">\n      <tr>\n        <th class=\"dblue\">Courses Category</th>\n        <th class=\"dblue\">Year</th>\n        <th class=\"dblue\">Median Salary</th>\n        <th class=\"dblue\">No. of Companies Visited</th>\n        <th class=\"dblue\">No. of Students Selected</th>\n        <th class=\"dblue\">No. of Students Placed</th>\n      </tr>\n\n      <!-- <tr *ngFor=\"let item of placementdetailarry\">\n        <td>{{item.categoryName}}</td>\n        <td>{{item.year}}</td>\n        <td>{{item.median_salary }}</td>\n        <td>{{item.no_of_companies_visited }}</td>\n        <td>{{item.no_of_student_selected }}</td>\n        <td>{{item.no_of_students_placed }}</td>\n      </tr> -->\n\n       <tr *ngFor=\"let item of placementdetailarry\">\n        <td>{{item.categoryName}}</td>\n        <td>{{item.year}}</td>\n        <td>\n                       \n          <p>{{ item.median_salary && item.median_salary !== \"0\" ? (item.median_salary | number:'1.2-2') :\n            'NA' }}</p>\n        </td>\n        <td> {{item.no_of_companies_visited && item.no_of_companies_visited !== \"0\" ?\n          item.no_of_companies_visited : 'NA' }}</td>\n\n          <td> {{item.no_of_student_selected  && item.no_of_student_selected  !== \"0\" ?\n            item.no_of_student_selected  : 'NA' }}</td>\n\n            <td> {{item.no_of_students_placed && item.no_of_students_placed !== \"0\" ?\n              item.no_of_students_placed : 'NA' }}</td>\n      </tr>\n\n    </table>\n  </div>\n\n  <ng-template #noData>\n    <div class=\"no-data-message\">\n  \n    </div>\n  </ng-template>\n</div>\n\n\n</div>\n</ion-content>\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 95924:
/*!*****************************************************************!*\
  !*** ./src/app/pages/placemntdetails/placemntdetails.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = ".tblcontent p {\n  margin: 8px 0;\n  color: #0083dc;\n}\n\ntable, th, td {\n  border: 1px solid #e9edff;\n  border-collapse: collapse;\n  padding: 6px 8px;\n  text-align: left;\n}\n\ntable th.dblue {\n  background: #004983;\n  font-weight: 500;\n  color: #fff;\n}\n\n.maindiv ion-card {\n  margin: 0;\n  --box-shadow:none;\n  box-shadow: none;\n  border-radius: 12px;\n}\n\n.maindiv ion-card img {\n  width: 100%;\n  display: block;\n}\n\n.maindiv h5 {\n  background-color: aliceblue;\n  padding: 8px 10px;\n}\n\nh5 {\n  background-color: aliceblue;\n  padding: 8px 10px;\n}\n\n.settble {\n  margin-bottom: 20px !important;\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlbW50ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUdBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBS0k7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRlI7O0FBR1E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQURaOztBQUtJO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtBQUhSOztBQU1FO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1BO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQUhGIiwiZmlsZSI6InBsYWNlbW50ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGJsY29udGVudHtcbiAgICBwe1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBjb2xvcjogIzAwODNkYzsgXG4gICAgfVxufVxudGFibGUsIHRoLCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWRmZjtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHBhZGRpbmc6NnB4IDhweDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gIH1cbiAgdGFibGUgdGguZGJsdWV7XG4gICAgYmFja2dyb3VuZDogIzAwNDk4MztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cblxuICAubWFpbmRpdntcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xuICAgIGlvbi1jYXJke1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgICAgICBib3gtc2hhZG93Om5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBoNXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICB9XG4gIH1cbiAgaDV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xufVxuXG4uc2V0dGJsZXtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_placemntdetails_placemntdetails_module_ts.js.map