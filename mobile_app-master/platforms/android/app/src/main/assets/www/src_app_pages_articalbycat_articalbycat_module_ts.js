"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["src_app_pages_articalbycat_articalbycat_module_ts"],{

/***/ 60293:
/*!*******************************************************************!*\
  !*** ./src/app/pages/articalbycat/articalbycat-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticalbycatPageRoutingModule": () => (/* binding */ ArticalbycatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _articalbycat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articalbycat.page */ 9918);




const routes = [
    {
        path: '',
        component: _articalbycat_page__WEBPACK_IMPORTED_MODULE_0__.ArticalbycatPage
    }
];
let ArticalbycatPageRoutingModule = class ArticalbycatPageRoutingModule {
};
ArticalbycatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArticalbycatPageRoutingModule);



/***/ }),

/***/ 43763:
/*!***********************************************************!*\
  !*** ./src/app/pages/articalbycat/articalbycat.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticalbycatPageModule": () => (/* binding */ ArticalbycatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _articalbycat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articalbycat-routing.module */ 60293);
/* harmony import */ var _articalbycat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articalbycat.page */ 9918);







let ArticalbycatPageModule = class ArticalbycatPageModule {
};
ArticalbycatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _articalbycat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticalbycatPageRoutingModule
        ],
        declarations: [_articalbycat_page__WEBPACK_IMPORTED_MODULE_1__.ArticalbycatPage]
    })
], ArticalbycatPageModule);



/***/ }),

/***/ 9918:
/*!*********************************************************!*\
  !*** ./src/app/pages/articalbycat/articalbycat.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticalbycatPage": () => (/* binding */ ArticalbycatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_articalbycat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./articalbycat.page.html */ 84973);
/* harmony import */ var _articalbycat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articalbycat.page.scss */ 3209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 64314);









let ArticalbycatPage = class ArticalbycatPage {
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
        this.asyncrelatedArt();
    }
    asyncrelatedArt() {
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
            this.service.relatedArt(this.blogId).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                // this.articldetailarry = res.blogdetails;
                this.relateddetails = res.relatedblog;
                yield loader.dismiss(); // Dismiss the loader when data is received
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.error(err);
                yield loader.dismiss(); // Dismiss the loader even if there is an error
            }));
        });
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
                // this.relateddetails = res.relatedblog;
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
    //   shareBlog(blog: any) {
    //   const title = blog.title;
    //   const subtitle = blog.subtitle || '';
    //   const description = this.removeHtml(blog.short_desc);
    //   const truncatedDesc = description.length > 10 ? description.substring(0, 10) + "..." : description;
    //   const blogUrl = `https://ohcampus.com/articledetails/${blog.blog_id}`;
    //   const imageUrl = blog.image;
    //   const message =
    //     `${title}\n\n${subtitle}\n\n${truncatedDesc}\n\nRead more: ${blogUrl}\n\n${imageUrl}`;
    //   const options = {
    //     message: message,   
    //     subject: title,
    //   };
    //   this.socialSharing.shareWithOptions(options)
    //     .then(() => console.log("Shared successfully"))
    //     .catch(err => console.error("Share error:", err));
    // }
    // Remove HTML tags
    //
    getlatestArticle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.searchCategory = this.blogId;
            this.value = '';
            this.service.article(this.searchCategory, this.value, this.statename).subscribe((res) => {
                console.log(res);
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
ArticalbycatPage.ctorParameters = () => [
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
ArticalbycatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-articalbycat',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_articalbycat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_articalbycat_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ArticalbycatPage);



/***/ }),

/***/ 84973:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/articalbycat/articalbycat.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n   \n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon style=\"margin-top: 5px;\" name=\"chevron-back-outline\"  routerLink=\"/tabs/tabs/tab1\"></ion-icon>  \n        </ion-col>\n        <ion-col size=\"8\">\n          <!-- <ion-buttons> -->\n            <!-- <ion-menu-button></ion-menu-button> -->\n          <!-- </ion-buttons> -->\n        </ion-col>\n        <ion-col size=\"3\" class=\"text-right selfcenter flex just-right\">\n          <div class=\"notification\">\n            <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n            <ion-badge color=\"danger\"></ion-badge>\n          <ion-icon routerLink=\"/editprofile\" name=\"person-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"maindiv\">\n \n<!-- section1 -->\n<div  *ngFor=\"let item of articldetailarry;\">\n  <h5>{{item.category_name}}</h5>\n  <div class=\"m10\">\n  <ion-card>\n    <img [src]=\"item.image\">\n  </ion-card>\n  <h6>{{item.title}}  \n    <button class=\"share-btn\" (click)=\"shareBlog(item)\">\n  <ion-icon name=\"share-social-outline\"></ion-icon>\n  <span>Share</span>\n</button>\n\n    </h6>\n\n</div>\n</div>\n<!-- 2 section -->\n<div *ngFor=\"let item of articldetailarry;\">\n  <div class=\"m10\"> <p class=\"description\"  [innerHTML]=\"item.description\"></p></div>\n</div>\n<!-- 3rd section -->\n<div>\n  <h5>Related Articles</h5>\n  <div *ngFor=\"let item of relateddetails;\" class=\"articlelist\">\n    <ion-row (click)=\"articlesdetails(item.id)\">\n      <ion-col size=\"3\">\n        <img [src]=\"item.image\">\n      </ion-col>\n      <ion-col size=\"9\" >\n        <p>{{item.title}}</p>\n        \n      </ion-col>\n    </ion-row>\n  </div>\n\n</div>\n\n<!-- 4th section -->\n<div>\n  <h5>Latest Articles</h5>\n  <div *ngFor=\"let item of latestartiarry;\" class=\"articlelist\">\n    <ion-row (click)=\"articlesdetails(item.id)\">\n      <ion-col size=\"3\">\n        <img [src]=\"item.image\">\n      </ion-col>\n      <ion-col size=\"9\" >\n        <p>{{item.title}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n</div>\n</div>\n</ion-content>\n\n<ion-footer class=\"main-footer\">\n  <ion-toolbar>\n\n    <div class=\"footer-tabs\">\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <span>Home</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab2\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n        <span>Search</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab3\">\n        <ion-icon name=\"albums-outline\"></ion-icon>\n        <span>Recommended</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab4\">\n        <ion-icon name=\"bookmark-outline\"></ion-icon>\n        <span>Shortlist</span>\n      </div>\n\n      <div class=\"footer-btn\" routerLink=\"/tabs/tabs/tab5\">\n        <ion-icon name=\"chatbox-outline\"></ion-icon>\n        <span>Assistant</span>\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n\n");

/***/ }),

/***/ 3209:
/*!***********************************************************!*\
  !*** ./src/app/pages/articalbycat/articalbycat.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".maindiv ion-card {\n  margin: 0;\n  --box-shadow:none;\n  box-shadow: none;\n  border-radius: 12px;\n}\n.maindiv ion-card img {\n  width: 100%;\n  display: block;\n}\n.maindiv h5 {\n  background-color: aliceblue;\n  padding: 8px 10px;\n}\n.maindiv .articlelist img {\n  border: 1px solid lightgray;\n  height: 70px;\n  width: 100%;\n  border-radius: 8px;\n}\n.maindiv p {\n  margin: 0;\n  font-size: 14px;\n}\n.maindiv ion-row {\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 12px;\n  margin: 10px;\n}\n.description {\n  text-align: justify;\n}\n.description h4 {\n  font-size: 14px !important;\n}\n.share-btn {\n  display: flex;\n  align-items: center;\n  grid-gap: 6px;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  color: #3880ff;\n  /* Ionic primary color */\n  font-size: 14px;\n  cursor: pointer;\n}\n.share-btn {\n  display: flex;\n  align-items: center;\n  grid-gap: 6px;\n  gap: 6px;\n  background: transparent;\n  border: none;\n  color: #3880ff;\n  /* Ionic primary color */\n  font-size: 14px;\n  cursor: pointer;\n}\n.share-btn ion-icon {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljYWxieWNhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFFUTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBQVo7QUFJSTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUtJO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSFI7QUFNSTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FBSlI7QUFNSTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSlI7QUFRQTtFQUNJLG1CQUFBO0FBTEo7QUFNSTtFQUNJLDBCQUFBO0FBSlI7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUFnQix3QkFBQTtFQUNoQixlQUFBO0VBQ0EsZUFBQTtBQUpGO0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFBZ0Isd0JBQUE7RUFDaEIsZUFBQTtFQUNBLGVBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtBQUhGIiwiZmlsZSI6ImFydGljYWxieWNhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmRpdntcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xuICAgIGlvbi1jYXJke1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC0tYm94LXNoYWRvdzpub25lO1xuICAgICAgICBib3gtc2hhZG93Om5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBoNXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICB9XG4gICAgLmFydGljbGVsaXN0e1xuICAgIGltZ3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgfVxuICAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGlvbi1yb3d7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG59XG5cbi5kZXNjcmlwdGlvbntcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5zaGFyZS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMzODgwZmY7IC8qIElvbmljIHByaW1hcnkgY29sb3IgKi9cbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaGFyZS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMzODgwZmY7IC8qIElvbmljIHByaW1hcnkgY29sb3IgKi9cbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaGFyZS1idG4gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_articalbycat_articalbycat_module_ts.js.map