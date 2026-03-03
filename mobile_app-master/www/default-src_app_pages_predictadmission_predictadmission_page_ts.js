"use strict";
(self["webpackChunkOhCampus"] = self["webpackChunkOhCampus"] || []).push([["default-src_app_pages_predictadmission_predictadmission_page_ts"],{

/***/ 21663:
/*!*****************************************************************!*\
  !*** ./src/app/pages/predictadmission/predictadmission.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictadmissionPage": () => (/* binding */ PredictadmissionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_predictadmission_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./predictadmission.page.html */ 72258);
/* harmony import */ var _predictadmission_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predictadmission.page.scss */ 90752);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 81864);
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ 59353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33927);











let PredictadmissionPage = class PredictadmissionPage {
    constructor(formBuilder, router, http, service, loadingController, toastController, route, modalController, alertController, navParams) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.http = http;
        this.service = service;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.route = route;
        this.modalController = modalController;
        this.alertController = alertController;
        this.navParams = navParams;
        this.entranceExamControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(); // Control for the autocomplete field
        this.searchTerm = ''; // Search term for the filter
        this.examListArr = []; // Full exam list from API
        this.CoursesByCatArr = [];
        this.CourseCategoryArr = [];
        this.clgdetailsArray = [];
        this.id = this.navParams.get('id'); // Retrieve the id from navigation params
    }
    ngOnInit() {
        this.predictaddmi = this.formBuilder.group({
            student_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[a-zA-Z \'-]+$')]],
            mobile_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[0-9]{10}$')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            course: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            college: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            entrance_exam: ['',],
            rank: ['',],
            score: ['',],
        });
        // Get exam list and set up filtering
        this.populateUserData(); // Populate form fields with user data
        this.setupAutocomplete(); // Setup autocomplete for entrance exam
        this.clgdetails(); // Fetch college details
        this.getcourscategory(); // Fetch course categories
        this.populateUserDataFromLocalStorage();
        this.getexamlist();
    }
    // Fetch user data and populate form fields
    populateUserData() {
        this.simpleuserdata();
        this.getResponseDataFromLocalStorage();
        // Populate form fields if user data exists
        if (this.loginuserId) {
            this.predictaddmi.patchValue({
                student_name: this.username,
                email: this.email,
                // mobile_no: this.phone,
            });
        }
    }
    getexamlist() {
        this.service.getexamlist('').subscribe(res => {
            this.examListArr = res.response_data;
            console.log(this.examListArr);
        });
    }
    setupAutocomplete() {
        this.filteredExams = this.entranceExamControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(value => this.filterExams(value)));
        this.entranceExamControl.valueChanges.subscribe(value => {
            this.predictaddmi.patchValue({ entrance_exam: value });
        });
    }
    // Filtering logic for exams based on search term
    filterExams(searchTerm) {
        if (!searchTerm) {
            return this.examListArr; // Return the full list if search term is empty
        }
        return this.examListArr.filter(exam => exam.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    populateUserDataFromLocalStorage() {
        const storedData = JSON.parse(localStorage.getItem('predictFormData'));
        if (storedData) {
            this.predictaddmi.patchValue({
                mobile_no: storedData.mobile_no || '',
                category: storedData.category || '',
                course: storedData.course || '',
                entrance_exam: storedData.entrance_exam || '',
                rank: storedData.rank || '',
                score: storedData.score || '',
            });
        }
    }
    savpredictApplication() {
        console.log(this.predictaddmi);
        if (this.predictaddmi.invalid) {
            this.predictaddmi.markAllAsTouched();
            return;
        }
        if (this.predictaddmi.valid) {
            // localStorage.setItem('predictFormData', JSON.stringify(this.predictaddmi.value));
            this.service.predictaddmission(this.predictaddmi.value.student_name, this.predictaddmi.value.email, this.predictaddmi.value.mobile_no, this.predictaddmi.value.category, this.id, this.predictaddmi.value.course, 
            // this.predictaddmi.value.entrance_exam,
            // this.predictaddmi.value.rank,
            // this.predictaddmi.value.score
            this.predictaddmi.value.entrance_exam || '', // Handle optional fields
            this.predictaddmi.value.rank || '', // Handle optional fields
            this.predictaddmi.value.score || '' // Handle optional fields
            ).subscribe({
                next: (res) => {
                    this.showAlert('Submitted!', 'Your request has been successfully submitted...! We will contact you as soon as possible. Thank you.');
                    this.close();
                    this.predictaddmi.reset();
                    this.predictaddmi.patchValue({
                        student_name: null,
                        email: null,
                        mobile_no: null,
                        category: null,
                        course: null,
                        entrance_exam: null,
                        rank: null,
                        score: null
                    });
                },
                error: (err) => {
                    this.showAlert('Error', 'There was an issue submitting your details. Please try again.');
                }
            });
        }
    }
    getcourscategory() {
        this.service.getCoursescategory().subscribe(res => {
            this.CourseCategoryArr = res.data;
        });
    }
    getCourseByCategoryClg(selectedCategoryId) {
        console.log(selectedCategoryId);
        this.collegeId = this.id; // Ensure `this.id` is assigned with the correct value
        this.service.getcourcatogorybyclg(selectedCategoryId, this.collegeId).subscribe(res => {
            this.CoursesByCatArr = res.data;
            console.log(this.CoursesByCatArr);
        }, error => {
            console.error('Error fetching courses by category:', error);
        });
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
    // Fetch college details
    clgdetails() {
        this.collegeId = this.id;
        this.service.getclgdetails(this.collegeId).subscribe(res => {
            this.clgdetailsArray = res.college_detail;
            console.log(this.clgdetailsArray);
            this.collegename = res.college_detail[0].title;
            this.categoryid = res.college_detail[0].categoryid;
            this.getexamlist();
        });
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
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
    checkValidInputData(event, controlName) {
        var _a, _b;
        const input = event.target.value;
        const numericValue = input.replace(/\D/g, ''); // Remove non-digit characters
        (_a = this.predictaddmi.get(controlName)) === null || _a === void 0 ? void 0 : _a.setValue(numericValue);
        if (numericValue.length > 10) {
            (_b = this.predictaddmi.get(controlName)) === null || _b === void 0 ? void 0 : _b.setValue(numericValue.substring(0, 10));
        }
    }
    checkValidInputDat(event, field) {
        var _a;
        if (field === 'student_name') {
            const pattern = /^[a-zA-Z \'-]+$/;
            if (!pattern.test(event.target.value)) {
                (_a = this.predictaddmi.get(field)) === null || _a === void 0 ? void 0 : _a.setValue(event.target.value.replace(/[^a-zA-Z \'-]/g, ''));
            }
        }
        else if (field === 'mobile_no') {
            this.checkValidInputData(event, field);
        }
    }
};
PredictadmissionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient },
    { type: src_app_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavParams }
];
PredictadmissionPage.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    CatId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    subCatName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
PredictadmissionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-predictadmission',
        template: _D_ohcampus_mobile_app_developed_main_mobile_app_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_predictadmission_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_predictadmission_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PredictadmissionPage);



/***/ }),

/***/ 72258:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/predictadmission/predictadmission.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n    <div class=\"matfield\">\n      <ion-row>\n        <ion-col size=\"10\">\n          <h4 class=\"sethedding\">PREDICT ADMISSION</h4>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-icon class=\"iconclose\" name=\"close-outline\" (click)=\"close()\"></ion-icon>\n        </ion-col>\n      </ion-row>\n  \n      <form [formGroup]=\"predictaddmi\">\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Student Name</mat-label>\n          <input matInput placeholder=\"Enter your name\" formControlName=\"student_name\" (input)=\"checkValidInputDat($event, 'student_name')\" type=\"text\" >\n          <ion-icon name=\"person-outline\" class=\"icon\" matSuffix></ion-icon>\n        </mat-form-field>\n  \n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Email</mat-label>\n          <input matInput placeholder=\"Enter your email\" formControlName=\"email\" type=\"text\">\n          <ion-icon name=\"mail-outline\" class=\"icon\" matSuffix></ion-icon>\n        </mat-form-field>\n  \n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Mobile Number</mat-label>\n          <input \n              matInput \n              placeholder=\"Enter your mobile number\" \n              formControlName=\"mobile_no\" \n              (input)=\"checkValidInputData($event, 'mobile_no')\" \n              maxlength=\"10\" \n              type=\"tel\" \n              pattern=\"[0-9]*\">\n          <ion-icon name=\"call-outline\" class=\"icon\" matSuffix></ion-icon>\n      </mat-form-field>\n\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Course Category</mat-label>\n          <mat-select formControlName=\"category\" (selectionChange)=\"getCourseByCategoryClg($event.value)\">\n            <mat-option *ngFor=\"let category of CourseCategoryArr\" [value]=\"category.category_id\">\n              {{category.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        \n  \n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Course</mat-label>\n          <mat-select formControlName=\"course\">\n            <mat-option *ngFor=\"let course of CoursesByCatArr\" [value]=\"course.id\">\n              {{course.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n  \n\n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>College</mat-label>\n          <input matInput [(ngModel)]=\"collegename\" readonly  formControlName=\"college\">\n        </mat-form-field>\n        \n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Entrance Exam</mat-label>\n          <input type=\"text\"\n                 placeholder=\"Pick an exam\"\n                 aria-label=\"Entrance Exam\"\n                 matInput\n                 formControlName=\"entrance_exam\"\n                 [formControl]=\"entranceExamControl\"\n                 [matAutocomplete]=\"auto\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let exam of filteredExams | async\" [value]=\"exam.title\">\n              {{ exam.title }}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n        \n        <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Expected/Secured Rank</mat-label>\n          <input matInput placeholder=\"Enter your rank\" formControlName=\"rank\" type=\"number\">\n          <ion-icon class=\"icon\" matSuffix></ion-icon>\n      </mat-form-field>\n      \n      <mat-form-field class=\"w-75\" appearance=\"outline\">\n          <mat-label>Expected/Secured Score</mat-label>\n          <input matInput placeholder=\"Enter your score\" formControlName=\"score\" type=\"number\">\n          <ion-icon class=\"icon\" matSuffix></ion-icon>\n      </mat-form-field>\n        <button mat-raised-button color=\"primary\" class=\"px-12 justify-center mt-4 mb-10\" type=\"submit\" (click)=\"savpredictApplication()\" >Submit</button>\n      </form>\n\n\n    </div>\n  </ion-content>  \n\n\n\n\n  \n\n\n\n\n\n   ");

/***/ }),

/***/ 90752:
/*!*******************************************************************!*\
  !*** ./src/app/pages/predictadmission/predictadmission.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-input {\n  border: 1px solid;\n  width: 80%;\n  border-radius: 8px;\n}\n\n.error {\n  color: red;\n  list-style: none;\n}\n\n.login {\n  margin-top: -55px;\n  margin-bottom: 20px;\n  text-align: center;\n  height: 60px;\n}\n\n.login {\n  margin-top: -30px;\n  text-align: center;\n  height: 40px;\n}\n\n.login {\n  margin-top: -30px;\n  margin-bottom: 20px;\n  text-align: center;\n  height: 60px;\n}\n\n.main-div {\n  background: \"/../../src/assets/icon/simple-img.png\";\n}\n\n.setimg {\n  text-align: right;\n}\n\n.example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\n.icon {\n  font-size: 20px;\n  padding-right: 10px;\n  color: #635c5c;\n}\n\n.btn {\n  width: 90%;\n  height: 50px;\n  background-color: #007fdc !important;\n  margin: 15px;\n}\n\n.span {\n  color: blue;\n}\n\n.p1 {\n  padding-left: 40%;\n  color: gray;\n  margin-top: -13px;\n}\n\n::ng-deep .mat-form-field-wrapper {\n  padding-bottom: 12px;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.3em 0px 10px 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n.matfield {\n  text-align: center;\n  margin: 16px;\n  border: 1px solid gray;\n  padding: 10px;\n  border-radius: 10px;\n  padding-top: 6px;\n  background: white;\n}\n\n.w-75 {\n  width: 93%;\n}\n\n.sethedding {\n  padding-left: 48px;\n}\n\n.iconclose {\n  font-size: 26px;\n  padding-left: 21px;\n}\n\nion-content {\n  --background: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWRpY3RhZG1pc3Npb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQztFQUNDLFVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFLRjs7QUFBQTtFQUNJLG1EQUFBO0FBR0o7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFIRTtFQUNFLGlCQUFBO0FBTUo7O0FBSkU7O0VBRUUsYUFBQTtBQU9KOztBQUxBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVFGOztBQU5BO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7QUFVRjs7QUFSQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBV0o7O0FBVEU7RUFDRSxvQkFBQTtBQVlKOztBQVRBO0VBQ0ksc0NBQUE7QUFZSjs7QUFURTtFQUEwQyxXQUFBO0FBYTVDOztBQVhFO0VBQ0kseUNBQUE7RUFDQSxpQkFBQTtBQWNOOztBQVpFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBZUo7O0FBYkU7RUFDRSxVQUFBO0FBZ0JKOztBQWJBO0VBQ0ksa0JBQUE7QUFnQko7O0FBYkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFnQko7O0FBYkE7RUFDSSw2QkFBQTtBQWdCSiIsImZpbGUiOiJwcmVkaWN0YWRtaXNzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCA7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4gLmVycm9ye1xuICBjb2xvcjpyZWQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7ICBcbn0gXG4ubG9naW57XG4gIG1hcmdpbi10b3A6IC01NXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDsgICBcbn1cbi5sb2dpbntcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4OyAgXG59XG4ubG9naW57XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDsgICBcbn1cblxuXG5cbi5tYWluLWRpdntcbiAgICBiYWNrZ3JvdW5kOiAoJy8uLi8uLi9zcmMvYXNzZXRzL2ljb24vc2ltcGxlLWltZy5wbmcnKTtcbn1cbi5zZXRpbWd7XG4gIHRleHQtYWxpZ246cmlnaHQ7XG59XG4uZXhhbXBsZS1jb250YWluZXIgbWF0LWZvcm0tZmllbGQgKyBtYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuICAuZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH0gXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbi5pY29ue1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOnJnYig5OSwgOTIsIDkyKTtcbn1cbi5idG57XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2ZkYyFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTVweDtcbn1cbi5zcGFue1xuICBjb2xvcjogYmx1ZTtcbn1cbi5wMXtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgICBjb2xvcjpncmF5O1xuICAgIG1hcmdpbi10b3A6IC0xM3B4XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAwLjNlbSAwcHggMTBweCAwcHggIWltcG9ydGFudDtcbiAgIFxuICAgIH1cbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cbiAgXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XG4gICAgICB3aWR0aDogMTMzLjMzMzMzJTtcbiAgfVxuICAubWF0ZmllbGR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjoxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLnctNzV7XG4gICAgd2lkdGg6OTMlO1xuICAgIFxuICB9XG4uc2V0aGVkZGluZ3tcbiAgICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XG59XG4gXG4uaWNvbmNsb3Nle1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIxcHg7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_predictadmission_predictadmission_page_ts.js.map