"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_citylist_citylist_module_ts"],{

/***/ 22554:
/*!***********************************************************!*\
  !*** ./src/app/pages/citylist/citylist-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitylistPageRoutingModule": () => (/* binding */ CitylistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _citylist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./citylist.page */ 25136);




const routes = [
    {
        path: '',
        component: _citylist_page__WEBPACK_IMPORTED_MODULE_0__.CitylistPage
    }
];
let CitylistPageRoutingModule = class CitylistPageRoutingModule {
};
CitylistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CitylistPageRoutingModule);



/***/ }),

/***/ 53178:
/*!***************************************************!*\
  !*** ./src/app/pages/citylist/citylist.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitylistPageModule": () => (/* binding */ CitylistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _citylist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./citylist-routing.module */ 22554);
/* harmony import */ var _citylist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./citylist.page */ 25136);







let CitylistPageModule = class CitylistPageModule {
};
CitylistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _citylist_routing_module__WEBPACK_IMPORTED_MODULE_0__.CitylistPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_citylist_page__WEBPACK_IMPORTED_MODULE_1__.CitylistPage]
    })
], CitylistPageModule);



/***/ }),

/***/ 25136:
/*!*************************************************!*\
  !*** ./src/app/pages/citylist/citylist.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitylistPage": () => (/* binding */ CitylistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_citylist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./citylist.page.html */ 73305);
/* harmony import */ var _citylist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./citylist.page.scss */ 14662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);







let CitylistPage = class CitylistPage {
    constructor(router, service, formBuilder) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.locationArr = [];
        this.filteredLocations = [];
        this.selected_loc = [];
    }
    ngOnInit() {
        this.selected_loc = [];
        this.cityform = this.formBuilder.group({
            searchvalue: ['']
        });
        this.getLoc();
    }
    getLoc() {
        this.service.getLocation(this.cityform.value.searchvalue).subscribe(res => {
            this.locationArr = res.response_data;
            this.filteredLocations = this.locationArr;
        });
    }
    onSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.filteredLocations = this.locationArr.filter(item => item.city.toLowerCase().includes(searchTerm));
    }
    clglistbyloc1(id) {
        this.router.navigate(['/clglist']);
    }
    clglistbyloc(event, id) {
        if (event.detail.checked) {
            if (this.selected_loc) {
                this.selected_loc += `${id},`;
            }
            else {
                this.selected_loc = `${id},`;
            }
        }
        else {
            const idsArray = this.selected_loc.split(',').filter(Boolean); // filter out empty strings
            const index = idsArray.indexOf(id.toString());
            if (index !== -1) {
                idsArray.splice(index, 1);
            }
            this.selected_loc = idsArray.join(',') + ','; // Add back the comma
        }
        this.selected_loc = this.selected_loc.replace(/ +$/, ''); // Remove any trailing commas
        localStorage.setItem('selectedLocationIds', this.selected_loc);
    }
};
CitylistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
CitylistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-citylist',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_citylist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_citylist_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CitylistPage);



/***/ }),

/***/ 73305:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/citylist/citylist.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-buttons>\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-header>\n\n \n\n\n<ion-content style=\"--background:aliceblue;\">\n  <form [formGroup]=\"cityform\">\n    <div>\n      <h5 class=\"m10\">Choose Locations</h5>\n      <div class=\"searchbar\">\n        <ion-searchbar (ionInput)=\"onSearch($event)\" formControlName=\"searchvalue\"></ion-searchbar>\n      </div>\n      <div>\n        <ion-list class=\"locationlist\">\n        <ion-item *ngFor=\"let item of filteredLocations\">\n          <ion-checkbox slot=\"end\" (ionChange)=\"clglistbyloc($event,item.id)\"></ion-checkbox>\n          <ion-label>{{item.city}}</ion-label>\n        </ion-item>\n      </ion-list>\n\n      <div class=\"setbtn\" >\n        <ion-button class=\"btn1\" routerLink=\"/tabs/tabs/tab1\">Cancel</ion-button>\n        <ion-button (click)=\"clglistbyloc1(id)\">Done</ion-button>\n      </div>\n       \n      </div>\n    </div>\n  </form>\n</ion-content >\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n\n\n");

/***/ }),

/***/ 14662:
/*!***************************************************!*\
  !*** ./src/app/pages/citylist/citylist.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".searchbar ion-searchbar {\n  --border-radius: 50px;\n  padding: 0px 16px 10px;\n}\n\n.notification {\n  color: var(--ion-color-primary);\n  position: relative;\n}\n\n.notification ion-badge {\n  position: absolute;\n  right: -5%;\n  top: -7px;\n  font-size: 10px;\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n  padding: 6px 4px;\n}\n\n.size_set {\n  border-radius: 20px;\n  word-spacing: 2px;\n  background: white;\n  text-align: left;\n  --overflow: visible!important;\n  overflow: unset !important;\n  contain: unset;\n  padding: 20px 20px 12px;\n  margin: 0rem;\n  margin-top: 2.5rem !important;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px !important;\n  box-shadow: none;\n}\n\n.size_set ion-button {\n  --box-shadow: none!important;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: normal;\n  --border-radius: 50px;\n  --padding-start: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.tit_set {\n  font-size: 0.9rem;\n  color: black;\n  font-weight: 500;\n  padding-top: 14px;\n  margin-top: 20px;\n}\n\n.set_botm {\n  border-bottom: 1px dashed #f3f3f3;\n  font-size: 14px;\n  padding-bottom: 6px;\n  margin: 0;\n  display: flex;\n  align-items: center;\n}\n\n.fees {\n  font-size: 16px;\n  margin: 5px;\n}\n\n.img_align {\n  padding: 5px;\n  height: 70px !important;\n  width: 70px !important;\n  background: #ffffff !important;\n  border-radius: 10px !important;\n  position: absolute !important;\n  left: 20px;\n  top: -14%;\n  border: 1px solid #c9c9c9;\n}\n\n.bookMark {\n  padding: 5px;\n  background: #ffffff !important;\n  border-radius: 20px !important;\n  position: absolute !important;\n  right: 10px;\n  top: 6%;\n  border: 1px solid #746ac0;\n}\n\n.locationlist {\n  margin: 10px;\n  border-radius: 16px;\n  margin-bottom: 4rem;\n}\n\n.setbtn {\n  position: fixed;\n  bottom: 46px;\n  background: white;\n  width: 100%;\n  text-align: center;\n  padding: 6px;\n}\n\n.setbtn ion-button {\n  --border-radius: 50px;\n  border-radius: 50px;\n}\n\nion-searchbar {\n  --color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHlsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkU7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBcEJKOztBQXdCQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7QUFyQko7O0FBc0JJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFwQlI7O0FBNkJBO0VBR0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBRUEsc0RBQUE7RUFFRSxnQkFBQTtBQTdCSjs7QUE4QkU7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBNUJKOztBQWdDQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQTdCRjs7QUErQkE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUE1QkY7O0FBK0JBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUE1QkE7O0FBK0JBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBNUJKOztBQStCQztFQUNLLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBNUJOOztBQStCRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBNUJKOztBQStCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBNUJKOztBQTZCSTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUEzQk47O0FBZ0NFO0VBQ0UseUJBQUE7QUE3QkoiLCJmaWxlIjoiY2l0eWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAuc2V0YnRue1xuXG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICAgIGJvdHRvbTogNTVweDtcbi8vICAgICB6LWluZGV4OiAxMTE7XG4vLyAgICAgcmlnaHQ6IDEwcHg7XG5cbi8vIH1cblxuLy8gaDV7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xuLy8gfVxuXG4vLyAuYnRuMXtcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuLy8gfVxuXG5cbi5zZWFyY2hiYXJ7XG5cbiAgaW9uLXNlYXJjaGJhcntcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZzogMHB4IDE2cHggMTBweDtcbiAgfVxufVxuXG4ubm90aWZpY2F0aW9ue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGlvbi1iYWRnZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTUlO1xuICAgICAgICB0b3A6IC03cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDRweDtcbiAgICB9XG59XG5cbi8vIGNhcmQgYWxpZ25cblxuXG4vLyBjYXJkIGFsaWduXG5cbi5zaXplX3NldHtcbiAgLy8gICBoZWlnaHQ6IDI2N3B4O1xuICAvLyB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdvcmQtc3BhY2luZzogMnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLS1vdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICBjb250YWluOiB1bnNldDtcbiAgcGFkZGluZzogMjBweCAyMHB4IDEycHg7XG4gIG1hcmdpbjogMHJlbTtcbiAgbWFyZ2luLXRvcDogMi41cmVtICFpbXBvcnRhbnQ7XG4gXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHghaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICBpb24tYnV0dG9ue1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMS41ZW07XG4gIH1cbn1cbiBcbi50aXRfc2V0e1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMTRweDsgXG4gIG1hcmdpbi10b3A6MjBweDtcbn1cbi5zZXRfYm90bXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjNmM2YzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZlZXN7XG5mb250LXNpemU6IDE2cHg7XG5tYXJnaW46NXB4O1xufVxuXG4uaW1nX2FsaWdue1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMjBweDtcbiAgICB0b3A6IC0xNCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgfVxuXG4gLmJvb2tNYXJre1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogNiU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzQ2YWMwO1xuICB9XG5cbiAgLmxvY2F0aW9ubGlzdHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICB9XG5cbiAgLnNldGJ0bntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA0NnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgfVxuICAgXG4gIH1cblxuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWNvbG9yOiBibGFjayAhaW1wb3J0YW50OyBcbiAgIFxuICB9Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_citylist_citylist_module_ts.js.map