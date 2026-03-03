"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_specourselist_specourselist_module_ts"],{

/***/ 85493:
/*!*********************************************************************!*\
  !*** ./src/app/pages/specourselist/specourselist-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecourselistPageRoutingModule": () => (/* binding */ SpecourselistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _specourselist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specourselist.page */ 51991);




const routes = [
    {
        path: '',
        component: _specourselist_page__WEBPACK_IMPORTED_MODULE_0__.SpecourselistPage
    }
];
let SpecourselistPageRoutingModule = class SpecourselistPageRoutingModule {
};
SpecourselistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpecourselistPageRoutingModule);



/***/ }),

/***/ 57464:
/*!*************************************************************!*\
  !*** ./src/app/pages/specourselist/specourselist.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecourselistPageModule": () => (/* binding */ SpecourselistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _specourselist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specourselist-routing.module */ 85493);
/* harmony import */ var _specourselist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specourselist.page */ 51991);







let SpecourselistPageModule = class SpecourselistPageModule {
};
SpecourselistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _specourselist_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpecourselistPageRoutingModule
        ],
        declarations: [_specourselist_page__WEBPACK_IMPORTED_MODULE_1__.SpecourselistPage]
    })
], SpecourselistPageModule);



/***/ }),

/***/ 51991:
/*!***********************************************************!*\
  !*** ./src/app/pages/specourselist/specourselist.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecourselistPage": () => (/* binding */ SpecourselistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_specourselist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./specourselist.page.html */ 38541);
/* harmony import */ var _specourselist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specourselist.page.scss */ 56164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);
// import { Component, OnInit } from '@angular/core';
// import { ServiceService } from 'src/app/service.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { LoadingController } from '@ionic/angular';



// @Component({
//   selector: 'app-specourselist',
//   templateUrl: './specourselist.page.html',
//   styleUrls: ['./specourselist.page.scss'],
// })
// export class SpecourselistPage implements OnInit {
//   keyword: string;courseltsArry: any[];value: any;
//   search: string;searchCourseForm: any;subcategory: any;
//   activeTabId: any;courseId: string;coursename: string;
//   constructor(
//     public service: ServiceService,
//     public activatedRoute: ActivatedRoute,
//     public router: Router,
//     public loadingController: LoadingController
//   ) { }
//   ngOnInit() {
//     const storedCourseId = localStorage.getItem('selectedCourseId');
//     const storedCourseName = localStorage.getItem('selectedCourseName');
//     if (storedCourseId && storedCourseName) {
//       this.courseId = storedCourseId;
//       this.coursename = storedCourseName;
//       console.log('Retrieved courseId:', this.courseId);
//       console.log('Retrieved courseName:', this.coursename);
//     }
//     this.value = localStorage.getItem('selectedKeyword');
//     console.log('Retrieved keyword from localStorage:', this.keyword);
//     this. getcourselts();
//   }
//  getcourselts() {
//     this.subcategory = this.courseId;
//     this.service.specicourselist(this.value, this.subcategory).subscribe(res => {
//       this.courseltsArry = res.data;
//     });
//   }
//   async clglts(id) {
//     this.router.navigate(['/specoursebyclglts', id]);
// }
// }




let SpecourselistPage = class SpecourselistPage {
    constructor(service, activatedRoute, router, loadingController) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingController = loadingController;
        this.courseltsArry = []; // Initialize with an empty array
        this.isLoading = false; // Controls the loading state
    }
    ngOnInit() {
        const storedCourseId = localStorage.getItem('selectedCourseId');
        const storedCourseName = localStorage.getItem('selectedCourseName');
        if (storedCourseId && storedCourseName) {
            this.courseId = storedCourseId;
            this.coursename = storedCourseName;
            console.log('Retrieved courseId:', this.courseId);
            console.log('Retrieved courseName:', this.coursename);
        }
        this.value = localStorage.getItem('selectedKeyword');
        console.log('Retrieved keyword from localStorage:', this.keyword);
        this.getcourselts();
    }
    getcourselts() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true; // Set loading state to true
            const loader = yield this.loadingController.create({
                message: `
        <div class="custom-spinner-container">
          <img src="assets/icon/logo11_50x38-removebg-preview.png" class="custom-spinner-icon" style="border-radius: 50%;">
          <ion-spinner name="crescent" class="custom-spinner"></ion-spinner>
        </div>
         <span style="margin-top: 10px;"></span>`,
                spinner: null,
                translucent: true,
                cssClass: 'custom-loading',
            });
            yield loader.present(); // Show the loader
            this.subcategory = this.courseId;
            this.service.specicourselist(this.value, this.subcategory).subscribe((res) => {
                this.courseltsArry = res.data || []; // Handle null/undefined response safely
                this.isLoading = false; // Stop loading
                loader.dismiss(); // Hide the loader
            }, (error) => {
                console.error('Error fetching courses:', error);
                this.courseltsArry = []; // Set empty array on error
                this.isLoading = false; // Stop loading
                loader.dismiss(); // Hide the loader
            });
        });
    }
    clglts(id) {
        this.router.navigate(['/specoursebyclglts', id]);
    }
};
SpecourselistPage.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
SpecourselistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-specourselist',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_specourselist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_specourselist_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpecourselistPage);



/***/ }),

/***/ 38541:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/specourselist/specourselist.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/specialiclg\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          \n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          \n          <div class=\"notification\"><ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n            <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <!-- <div class=\"trending\">\n  <h5 style=\"margin:10px\">Trending Specialization Courses List</h5>\n    <ng-container *ngIf=\"courseltsArry?.length > 0; else noData\">\n      <ion-item detail=\"true\" *ngFor=\"let item of courseltsArry\">\n        <ion-label>\n          <h3 (click)=\"clglts(item.id)\">{{item.name}}</h3>\n        </ion-label>\n      </ion-item>\n    </ng-container>\n    \n    <ng-template #noData>\n      <ion-item>\n        <ion-label>\n          <h3>No data found</h3>\n        </ion-label>\n      </ion-item>\n    </ng-template>\n  </div> -->\n\n\n  <div class=\"trending\">\n    <h5 style=\"margin: 10px\">Trending Specialization Courses List</h5>\n  \n    <ng-container *ngIf=\"!isLoading; else loadingTemplate\">\n      <ng-container *ngIf=\"courseltsArry?.length > 0; else noDataTemplate\">\n        <ion-item detail=\"true\" *ngFor=\"let item of courseltsArry\">\n          <ion-label>\n            <h3 (click)=\"clglts(item.id)\">{{ item.name }}</h3>\n          </ion-label>\n        </ion-item>\n      </ng-container>\n    </ng-container>\n  \n    <ng-template #loadingTemplate>\n      <ion-item>\n        <ion-label>\n          <!-- <h3>Loading...</h3> -->\n        </ion-label>\n      </ion-item>\n    </ng-template>\n  \n    <ng-template #noDataTemplate>\n      <ion-item>\n        <ion-label>\n          <h3>No data found</h3>\n        </ion-label>\n      </ion-item>\n    </ng-template>\n  </div>\n\n\n</ion-content>\n\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ 56164:
/*!*************************************************************!*\
  !*** ./src/app/pages/specourselist/specourselist.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --padding-start: 0;\n  padding-inline-end: 0;\n  --background: transparent;\n}\n\n.trending {\n  background: #f2f9ff;\n  padding: 20px 10px;\n  border-radius: 16px;\n  margin: 0px 10px 10px;\n  border: 1px solid #b6ddff;\n}\n\n.trending .setlist {\n  padding: 10px;\n  border: 1px solid #b8b88a;\n  border-radius: 15px;\n  margin: 10px;\n}\n\n.trending ion-item {\n  --padding-start: 0;\n  padding-inline-end: 0;\n  --background: transparent;\n}\n\n.trending h4 {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNvdXJzZWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBS0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRko7O0FBSUU7RUFDRSxhQUFBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFGTjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQUtFO0VBQ0UsYUFBQTtBQUhKIiwiZmlsZSI6InNwZWNvdXJzZWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG5cblxuXG5cbiAgLnRyZW5kaW5ne1xuICAgIGJhY2tncm91bmQ6ICNmMmY5ZmY7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgbWFyZ2luOiAwcHggMTBweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNmRkZmY7XG4gIFxuICAuc2V0bGlzdHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I4Yjg4YTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgXG4gIGlvbi1pdGVte1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBoNHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIFxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_specourselist_specourselist_module_ts.js.map