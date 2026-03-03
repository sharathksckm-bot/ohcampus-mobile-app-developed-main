"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_coursewiseqna_coursewiseqna_module_ts"],{

/***/ 94471:
/*!*********************************************************************!*\
  !*** ./src/app/pages/coursewiseqna/coursewiseqna-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseqnaPageRoutingModule": () => (/* binding */ CoursewiseqnaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _coursewiseqna_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursewiseqna.page */ 90637);




const routes = [
    {
        path: '',
        component: _coursewiseqna_page__WEBPACK_IMPORTED_MODULE_0__.CoursewiseqnaPage
    }
];
let CoursewiseqnaPageRoutingModule = class CoursewiseqnaPageRoutingModule {
};
CoursewiseqnaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoursewiseqnaPageRoutingModule);



/***/ }),

/***/ 27645:
/*!*************************************************************!*\
  !*** ./src/app/pages/coursewiseqna/coursewiseqna.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseqnaPageModule": () => (/* binding */ CoursewiseqnaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _coursewiseqna_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coursewiseqna-routing.module */ 94471);
/* harmony import */ var _coursewiseqna_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursewiseqna.page */ 90637);







let CoursewiseqnaPageModule = class CoursewiseqnaPageModule {
};
CoursewiseqnaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _coursewiseqna_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoursewiseqnaPageRoutingModule
        ],
        declarations: [_coursewiseqna_page__WEBPACK_IMPORTED_MODULE_1__.CoursewiseqnaPage]
    })
], CoursewiseqnaPageModule);



/***/ }),

/***/ 90637:
/*!***********************************************************!*\
  !*** ./src/app/pages/coursewiseqna/coursewiseqna.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursewiseqnaPage": () => (/* binding */ CoursewiseqnaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coursewiseqna_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./coursewiseqna.page.html */ 29603);
/* harmony import */ var _coursewiseqna_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coursewiseqna.page.scss */ 28867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);








let CoursewiseqnaPage = class CoursewiseqnaPage {
    constructor(service, activatedRoute, router, loadingController) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.course_categoryId = localStorage.getItem('catID');
        console.log(this.course_categoryId);
        this.qunnans();
    }
    qunnans() {
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
            this.service.getqnans(this.course_categoryId).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                var _a;
                this.qansarry = res.QueAnsAboutCourses;
                this.answerarry = ((_a = res.QueAnsAboutCourses) === null || _a === void 0 ? void 0 : _a.Answeres) || [];
                console.log(this.answerarry);
                yield loader.dismiss(); // Dismiss the loader once data is received
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                console.error('Error fetching questions and answers:', err);
                yield loader.dismiss(); // Dismiss the loader in case of an error
            }));
        });
    }
};
CoursewiseqnaPage.ctorParameters = () => [
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
CoursewiseqnaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-coursewiseqna',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_coursewiseqna_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_coursewiseqna_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoursewiseqnaPage);



/***/ }),

/***/ 29603:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/coursewiseqna/coursewiseqna.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <!-- <div class=\"notification\"><ion-icon name=\"notifications-outline\"></ion-icon>\n            <ion-badge color=\"danger\"></ion-badge>\n          </div> -->\n          <ion-icon routerLink=\"/editprofile\" class=\"primary-color\" name=\"person-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div  class=\"maindiv\">\n    <!-- <div *ngFor = \"let item of qansarry\" >\n    <p class=\"qns\">Q : {{item.question}}</p>\n\n    <div *ngFor = \"let item of answerarry\">\n      <div class=\"ans\"><p>Ans :</p>  <p>{{item}}</p></div>\n    </div>\n    \n  </div> -->\n  <div *ngFor=\"let question of qansarry\">\n    <p class=\"qns\">Q :{{ question.question }}</p>\n  \n    <div>\n      <div class=\"ans\" *ngFor=\"let answer of question.Answeres\">\n       <p>Ans :</p> <p>{{ answer.answer }}</p> \n      </div>\n    </div>\n  </div>\n  </div>\n\n   \n\n</ion-content>\n\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ 28867:
/*!*************************************************************!*\
  !*** ./src/app/pages/coursewiseqna/coursewiseqna.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".maindiv {\n  margin-bottom: 1.5rem;\n}\n.maindiv .qns {\n  font-weight: 500;\n  background-color: aliceblue;\n  padding: 8px 10px;\n  font-size: 15px;\n  line-height: 1.4;\n}\n.maindiv .ans {\n  margin: 10px;\n  color: gray;\n  font-size: 15px;\n  display: flex;\n}\n.maindiv .ans p {\n  margin: 0;\n  min-width: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXdpc2VxbmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUJBQUE7QUFBSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDUjtBQUFRO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUFFWiIsImZpbGUiOiJjb3Vyc2V3aXNlcW5hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW5kaXZ7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIC5xbnN7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICB9XG4gICAgLmFuc3tcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwe1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0MnB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_coursewiseqna_coursewiseqna_module_ts.js.map