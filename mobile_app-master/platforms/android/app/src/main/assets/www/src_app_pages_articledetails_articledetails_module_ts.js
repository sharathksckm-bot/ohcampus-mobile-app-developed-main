"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_articledetails_articledetails_module_ts"],{

/***/ 26609:
/*!***********************************************************************!*\
  !*** ./src/app/pages/articledetails/articledetails-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticledetailsPageRoutingModule": () => (/* binding */ ArticledetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _articledetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articledetails.page */ 30548);




const routes = [
    {
        path: '',
        component: _articledetails_page__WEBPACK_IMPORTED_MODULE_0__.ArticledetailsPage
    }
];
let ArticledetailsPageRoutingModule = class ArticledetailsPageRoutingModule {
};
ArticledetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArticledetailsPageRoutingModule);



/***/ }),

/***/ 46637:
/*!***************************************************************!*\
  !*** ./src/app/pages/articledetails/articledetails.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticledetailsPageModule": () => (/* binding */ ArticledetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _articledetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articledetails-routing.module */ 26609);
/* harmony import */ var _articledetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articledetails.page */ 30548);







let ArticledetailsPageModule = class ArticledetailsPageModule {
};
ArticledetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _articledetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticledetailsPageRoutingModule
        ],
        declarations: [_articledetails_page__WEBPACK_IMPORTED_MODULE_1__.ArticledetailsPage]
    })
], ArticledetailsPageModule);



/***/ }),

/***/ 30548:
/*!*************************************************************!*\
  !*** ./src/app/pages/articledetails/articledetails.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticledetailsPage": () => (/* binding */ ArticledetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_articledetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./articledetails.page.html */ 17491);
/* harmony import */ var _articledetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articledetails.page.scss */ 44243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 64314);









let ArticledetailsPage = class ArticledetailsPage {
    constructor(socialSharing, router, service, route, loadingController) {
        this.socialSharing = socialSharing;
        this.router = router;
        this.service = service;
        this.route = route;
        this.loadingController = loadingController;
        this.statename = JSON.parse(localStorage.getItem('state'));
    }
    ngOnInit() {
        this.blogId = this.route.snapshot.paramMap.get('blogId');
        this.articledetail();
        this.getlatestArticle();
        // this.asyncrelatedArt();
    }
    articledetail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
            this.service.articledetail(this.blogId, 1).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                this.articldetailarry = res.blogdetails;
                this.relateddetails = res.relatedblog;
                yield loader.dismiss(); // Dismiss the loader when data is received
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.error(err);
                yield loader.dismiss(); // Dismiss the loader even if there is an error
            }));
        });
    }
    shareBlog(item) {
        let id = item.blog_id;
        let selectpara = {
            "id": id,
            "type": "article"
        };
        this.service.generateLink_req(selectpara).subscribe((res) => {
            this.sharelink = res.data.share_link;
            this.socialSharing.share(this.sharelink).then(() => {
                console.log("Shared successfully");
            });
        });
    }
    getlatestArticle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // alert(this.blogId)
            this.searchCategory = '';
            this.value = '';
            this.service.article(this.searchCategory, this.value, this.statename).subscribe((res) => {
                console.log(res);
                // alert(JSON.stringify(res))
                this.latestartiarry = res.response_data;
            }, (err) => {
                console.error(err);
            });
        });
    }
    articlesdetails(id) {
        this.router.navigate(['/articledetails', id]);
    }
};
ArticledetailsPage.ctorParameters = () => [
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
ArticledetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-articledetails',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_articledetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_articledetails_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArticledetailsPage);



/***/ }),

/***/ 17491:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/articledetails/articledetails.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n   \n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <!-- <ion-buttons> -->\n            <!-- <ion-menu-button></ion-menu-button> -->\n          <!-- </ion-buttons> -->\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"maindiv\">\n \n<!-- section1 -->\n<div  *ngFor=\"let item of articldetailarry;\">\n  <h5>{{item.category_name}}</h5>\n  <div class=\"m10\">\n  <ion-card>\n    <img [src]=\"item.image\">\n  </ion-card>\n  <h6>{{item.title}}  \n    <button class=\"share-btn\" (click)=\"shareBlog(item)\">\n  <ion-icon name=\"share-social-outline\"></ion-icon>\n  <span>Share</span>\n</button>\n\n    </h6>\n\n</div>\n</div>\n<!-- 2 section -->\n<div *ngFor=\"let item of articldetailarry;\">\n  <div class=\"m10\"> <p class=\"description\"  [innerHTML]=\"item.description\"></p></div>\n</div>\n<!-- 3rd section -->\n<div>\n  <h5>Related Articles</h5>\n  <div *ngFor=\"let item of relateddetails;\" class=\"articlelist\">\n    <ion-row (click)=\"articlesdetails(item.id)\">\n      <ion-col size=\"3\">\n        <img [src]=\"item.image\">\n      </ion-col>\n      <ion-col size=\"9\" >\n        <p>{{item.title}}</p>\n        \n      </ion-col>\n    </ion-row>\n  </div>\n\n</div>\n\n<!-- 4th section -->\n<div>\n  <h5>Latest Articles</h5>\n  <div *ngFor=\"let item of latestartiarry;\" class=\"articlelist\">\n    <ion-row (click)=\"articlesdetails(item.id)\">\n      <ion-col size=\"3\">\n        <img [src]=\"item.image\">\n      </ion-col>\n      <ion-col size=\"9\" >\n        <p>{{item.title}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n</div>\n</div>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n");

/***/ }),

/***/ 44243:
/*!***************************************************************!*\
  !*** ./src/app/pages/articledetails/articledetails.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".maindiv ion-card {\n  margin: 0;\n  --box-shadow:none;\n  box-shadow: none;\n  border-radius: 12px;\n}\n.maindiv ion-card img {\n  width: 100%;\n  display: block;\n}\n.maindiv h5 {\n  background-color: aliceblue;\n  padding: 8px 10px;\n}\n.maindiv .articlelist img {\n  border: 1px solid lightgray;\n  height: 70px;\n  width: 100%;\n  border-radius: 8px;\n}\n.maindiv p {\n  margin: 0;\n  font-size: 14px;\n}\n.maindiv ion-row {\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 12px;\n  margin: 10px;\n}\n.description {\n  text-align: justify;\n}\n.description h4 {\n  font-size: 14px !important;\n}\n.share-btn {\n  display: flex;\n  align-items: center;\n  grid-gap: 6px;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  color: #3880ff;\n  /* Ionic primary color */\n  font-size: 14px;\n  cursor: pointer;\n}\n.share-btn {\n  display: flex;\n  align-items: center;\n  grid-gap: 6px;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  color: #3880ff;\n  /* Ionic primary color */\n  font-size: 14px;\n  cursor: pointer;\n}\n.share-btn ion-icon {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGVkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUVRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFBWjtBQUlJO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtBQUZSO0FBS0k7RUFDSSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQU1JO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUFKUjtBQU1JO0VBQ0ksa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFKUjtBQVFBO0VBQ0ksbUJBQUE7QUFMSjtBQU1JO0VBQ0ksMEJBQUE7QUFKUjtBQVFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQWdCLHdCQUFBO0VBQ2hCLGVBQUE7RUFDQSxlQUFBO0FBSkY7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUFnQix3QkFBQTtFQUNoQixlQUFBO0VBQ0EsZUFBQTtBQUhGO0FBTUE7RUFDRSxlQUFBO0FBSEYiLCJmaWxlIjoiYXJ0aWNsZWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5kaXZ7XG4gICAgLy8gcGFkZGluZzogMTBweDtcbiAgICBpb24tY2FyZHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzpub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaDV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgfVxuICAgIC5hcnRpY2xlbGlzdHtcbiAgICBpbWd7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgIH1cbiAgICAgfVxuICAgIHB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBpb24tcm93e1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxufVxuXG4uZGVzY3JpcHRpb257XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uc2hhcmUtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMzg4MGZmOyAvKiBJb25pYyBwcmltYXJ5IGNvbG9yICovXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2hhcmUtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA2cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMzg4MGZmOyAvKiBJb25pYyBwcmltYXJ5IGNvbG9yICovXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2hhcmUtYnRuIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_articledetails_articledetails_module_ts.js.map