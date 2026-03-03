"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_editstate_editstate_module_ts"],{

/***/ 50208:
/*!*************************************************************!*\
  !*** ./src/app/pages/editstate/editstate-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditstatePageRoutingModule": () => (/* binding */ EditstatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _editstate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editstate.page */ 6413);




const routes = [
    {
        path: '',
        component: _editstate_page__WEBPACK_IMPORTED_MODULE_0__.EditstatePage
    }
];
let EditstatePageRoutingModule = class EditstatePageRoutingModule {
};
EditstatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditstatePageRoutingModule);



/***/ }),

/***/ 71395:
/*!*****************************************************!*\
  !*** ./src/app/pages/editstate/editstate.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditstatePageModule": () => (/* binding */ EditstatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _editstate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editstate-routing.module */ 50208);
/* harmony import */ var _editstate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editstate.page */ 6413);







let EditstatePageModule = class EditstatePageModule {
};
EditstatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editstate_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditstatePageRoutingModule
        ],
        declarations: [_editstate_page__WEBPACK_IMPORTED_MODULE_1__.EditstatePage]
    })
], EditstatePageModule);



/***/ }),

/***/ 6413:
/*!***************************************************!*\
  !*** ./src/app/pages/editstate/editstate.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditstatePage": () => (/* binding */ EditstatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editstate_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./editstate.page.html */ 14772);
/* harmony import */ var _editstate_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editstate.page.scss */ 71310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 81864);







let EditstatePage = class EditstatePage {
    constructor(activatedRoute, service, router, loadingController) {
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.router = router;
        this.loadingController = loadingController;
        this.clist = [];
        this.selectedOptions = [];
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            // this.catID = params.id;
            // this.listid = params.Lid;
            // localStorage.setItem('catID', JSON.stringify(this.catID));
            // this.getsubclist();
            this.getstate();
        });
    }
    getsubclist() {
        this.service.getsubclist(this.catID, this.listid).subscribe(res => {
            this.clist = res.data;
            console.log(this.clist);
        });
    }
    getstate() {
        this.service.statelist().subscribe(res => {
            this.statelist = res.res_data;
            console.log(res);
        });
    }
    // toggleSelection(event, value) {
    //   if (event.detail.checked) {
    //     if (!this.selectedOptions.includes(value)) {
    //       this.selectedOptions.push(value);
    //     }
    //     console.log( this.selectedOptions.push(value))
    //   } else {
    //     const index = this.selectedOptions.indexOf(value);
    //     if (index !== -1) {
    //       this.selectedOptions.splice(index, 1);
    //     }
    //   }
    // }
    toggleSelection(event, value) {
        if (event.detail.checked) {
            if (!this.selectedOptions.includes(value)) {
                this.selectedOptions.push(value);
            }
        }
        else {
            this.selectedOptions = this.selectedOptions.filter(item => item !== value);
        }
        console.log('Selected options:', this.selectedOptions);
    }
    getCollegelist() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const selectedStateNames = this.selectedOptions.map(item => item.statename);
            localStorage.setItem('state', JSON.stringify(selectedStateNames));
            this.router.navigate(['/tabs/tabs/tab1']).then(() => {
                window.location.reload();
            });
        });
    }
    handleButtonClick() {
        this.getCollegelist();
    }
};
EditstatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
EditstatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-editstate',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_editstate_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editstate_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditstatePage);



/***/ }),

/***/ 14772:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/editstate/editstate.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--   \n   \n \n  \n  <ion-header [translucent]=\"true\" >\n    <ion-toolbar>\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"2\">\n                    <ion-icon name=\"arrow-back\" routerLink=\"/editpreferences\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"8\" class=\"selfcenter text-center\">\n                    <h6 class=\"m0\"> State List</h6>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background:aliceblue ;\">\n    <div class=\"ion-margin\">\n        <p>Choose your preferred State List</p>\n    </div>\n    <ion-list class=\"choosecourse\">\n        <ion-item *ngFor=\"let item of statelist\" lines=\"none\">\n            <ion-label>{{item.statename}}</ion-label>\n            <ion-checkbox [value]=\"item.statename\" (ionChange)=\"toggleSelection($event, item)\"></ion-checkbox>\n        </ion-item>\n    </ion-list>\n    <div class=\"footerFix\">\n      <ion-button (click)=\"handleButtonClick()\" [disabled]=\"selectedOptions.length === 0\">\n        Done\n    </ion-button>\n    </div>\n    \n</ion-content> -->\n\n\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-icon name=\"arrow-back\" routerLink=\"/editpreferences\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"8\" class=\"selfcenter text-center\">\n          <h6 class=\"m0\">State List </h6>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" style=\"--background: aliceblue;\">\n  <div class=\"ion-margin\">\n    <p>Choose your preferred State List</p>\n  </div>\n\n  <ion-list class=\"choosecourse\">\n    <ion-item *ngFor=\"let item of statelist\" lines=\"none\">\n      <ion-label>{{ item.statename }}</ion-label>\n      <ion-checkbox\n        [value]=\"item.statename\"\n        (ionChange)=\"toggleSelection($event, item)\">\n      </ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\"\n      (click)=\"handleButtonClick()\"\n      [disabled]=\"selectedOptions.length === 0\">\n      Done\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n\n\n");

/***/ }),

/***/ 71310:
/*!*****************************************************!*\
  !*** ./src/app/pages/editstate/editstate.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".set_btn {\n  position: fixed;\n  bottom: 5px;\n  right: 10px;\n}\n\nion-radio {\n  width: 30px;\n  height: 30px;\n}\n\nion-radio::part(container) {\n  border-radius: 8px;\n  border: 2px solid #ddd;\n}\n\nion-radio::part(mark) {\n  background: none;\n  transition: none;\n  transform: none;\n  border-radius: 0;\n}\n\nion-radio.radio-checked::part(container) {\n  background: #0081dc;\n  border-color: transparent;\n}\n\nion-radio.radio-checked::part(mark) {\n  width: 6px;\n  height: 10px;\n  border-width: 0px 2px 2px 0px;\n  border-style: solid;\n  border-color: #fff;\n  transform: rotate(45deg);\n}\n\n.footerFix {\n  background: #fff;\n  width: 100%;\n  position: fixed;\n  z-index: 1111;\n  bottom: 0px;\n  text-align: center;\n  height: 55px;\n  padding: 5px;\n}\n\n.custom-spinner .spinner {\n  width: 100px !important;\n  height: 100px !important;\n  background-image: url('loader.gif') !important;\n  background-size: contain !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n}\n\n.custom-spinner .spinner-crescent {\n  display: none !important;\n}\n\n.custom-loader .loading-wrapper {\n  background: white;\n  color: black;\n  /* Adjust text color if necessary */\n}\n\n.custom-loader .spinner-crescent {\n  stroke: black;\n  /* Change the spinner color if you are using a spinner */\n}\n\n.choosecourse {\n  padding: 0;\n  margin: 10px;\n  --background: aliceblue;\n  background: aliceblue;\n}\n\n.choosecourse ion-item {\n  margin-bottom: 10px;\n  border-radius: 8px;\n}\n\n.custom-loading {\n  --background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRzdGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLHdCQUFBO0FBRko7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRkY7O0FBbUJBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhDQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0FBaEJGOztBQW1CQTtFQUNFLHdCQUFBO0FBaEJGOztBQW9CRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUFjLG1DQUFBO0FBaEJsQjs7QUFtQkU7RUFDRSxhQUFBO0VBQWUsd0RBQUE7QUFoQm5COztBQW9CQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQWpCSjs7QUFtQkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBakJKOztBQXFCQTtFQUNFLGtCQUFBO0FBbEJGIiwiZmlsZSI6ImVkaXRzdGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0X2J0bntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG59XG5cblxuaW9uLXJhZGlvIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIGlvbi1yYWRpbzo6cGFydChjb250YWluZXIpIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcbiAgfVxuICBcbiAgaW9uLXJhZGlvOjpwYXJ0KG1hcmspIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgXG4gIGlvbi1yYWRpby5yYWRpby1jaGVja2VkOjpwYXJ0KGNvbnRhaW5lcikge1xuICAgIGJhY2tncm91bmQ6IzAwODFkYztcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICBpb24tcmFkaW8ucmFkaW8tY2hlY2tlZDo6cGFydChtYXJrKSB7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIFxuICAgIGJvcmRlci13aWR0aDogMHB4IDJweCAycHggMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICBcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cblxuLmZvb3RlckZpeHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTExMTtcbiAgYm90dG9tOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA1NXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cblxuLy8gLmN1c3RvbS1zcGlubmVyIC5zcGlubmVyIHtcbi8vICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbi9sb2FkZXIuZ2lmJykgIWltcG9ydGFudDtcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4vLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbi8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5jdXN0b20tc3Bpbm5lciAuc3Bpbm5lci1jcmVzY2VudCB7XG4vLyAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbi8vIH1cblxuLmN1c3RvbS1zcGlubmVyIC5zcGlubmVyIHtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaWNvbi9sb2FkZXIuZ2lmJykgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tc3Bpbm5lciAuc3Bpbm5lci1jcmVzY2VudCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1sb2FkZXIge1xuICAubG9hZGluZy13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7IC8qIEFkanVzdCB0ZXh0IGNvbG9yIGlmIG5lY2Vzc2FyeSAqL1xuICB9XG5cbiAgLnNwaW5uZXItY3Jlc2NlbnQge1xuICAgIHN0cm9rZTogYmxhY2s7IC8qIENoYW5nZSB0aGUgc3Bpbm5lciBjb2xvciBpZiB5b3UgYXJlIHVzaW5nIGEgc3Bpbm5lciAqL1xuICB9XG59XG5cbi5jaG9vc2Vjb3Vyc2V7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4gICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgIFxuICBpb24taXRlbXtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxufVxuXG4uY3VzdG9tLWxvYWRpbmcge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7IFxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_editstate_editstate_module_ts.js.map