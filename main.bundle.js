webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/* main */\r\n#new-message {\r\n  border-radius: 0.4rem 0.4rem 0 0;\r\n  padding: 1em;\r\n  border-bottom: 0.1em solid #cee4f5;\r\n  background-color: #ebf4fb;\r\n}\r\n\r\n#new-message .input-group-addon {\r\n  background-color: #fff;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nul#feed {\r\n  margin: 0;\r\n}\r\n\r\nul#feed li {\r\n  padding: 1em 1em;\r\n}\r\n\r\nul#feed .feed-avatar {\r\n  width: 13%;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\nul#feed .feed-post {\r\n  width: 80%;\r\n  display: inline-block;\r\n  margin-left: 2%;\r\n}\r\n\r\nul#feed .feed-post h5 {\r\n  font-weight: bold;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\nul#feed .feed-post h5 > small {\r\n  font-size: 1.2rem;\r\n}\r\n\r\nul#feed .action-list {\r\n  margin-left: 13%;\r\n  padding-left: 1em;\r\n}\r\n\r\nul#feed .action-list a {\r\n  width: 15%;\r\n  display: inline-block;\r\n}\r\n\r\nul#feed .action-list a:hover {\r\n  text-decoration: none;\r\n}\r\n\r\nul#feed .action-list .retweet-count {\r\n  padding-left: 0.2em;\r\n  font-weight: bold;\r\n}\r\n\r\nul#feed li {\r\n  padding: .5em 1em .5em 1em;\r\n  border-bottom: 0.1rem solid #e5e5e5;\r\n}\r\n\r\n.title-img{\r\n  margin-bottom:1rem;\r\n}\r\n\r\n#new-message img{\r\n  width: 25%;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n/* 手機螢幕 */\r\n@media (max-width: 34em) {\r\n  #new-message img{\r\n    width: 30%;\r\n  }\r\n}\r\n/* main end */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <section>\r\n\r\n    <div class=\"card\">\r\n\r\n      <div id=\"new-message\">\r\n\r\n        <div class=\"input-group\">\r\n\r\n          <select class=\"btn btn-info dropdown-toggle\" (change)=\"selectUser($event.target.value)\">\r\n            <option class=\"dropdown-item text-light\">\r\n              <i class=\"material-icons\"></i>\r\n            </option>\r\n            <option *ngFor=\"let user of users\" [value]=\"user.birdId\" class=\"dropdown-item text-light\">{{ user.name}}</option>\r\n          </select>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"title-img text-center bg-light\">\r\n          <img class=\"rounded-circle\" [src]=\"user.imageUrl\">\r\n        </div>\r\n\r\n        <!-- 輸入文字區 -->\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"reflashMessage()\">\r\n              <i class=\"material-icons\">autorenew</i>\r\n            </button>\r\n          </span>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"發生了什麼事?\" [(ngModel)]=\"message\">\r\n\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"addMessage()\" [disabled]=\"disabledSend\">\r\n              <i class=\"material-icons\">send</i>\r\n            </button>\r\n          </span>\r\n        </div>\r\n        <!-- 輸入文字區 end -->\r\n\r\n      </div>\r\n\r\n      <ul id=\"feed\" class=\"list-unstyled\">\r\n        <li *ngFor=\"let item of userMessages | orderPipe : true\">\r\n          <img class=\"rounded-circle feed-avatar\" [src]=\"item.imageUrl\">\r\n          <div class=\"feed-post\">\r\n            <h5>{{item.name}}\r\n              <small> - {{item.dateTime | date:'HH:mm'}}</small>\r\n            </h5>\r\n            <p>{{item.message}}</p>\r\n          </div>\r\n          <!-- <div class=\"action-list\">\r\n            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"回覆\">\r\n              <span class=\"material-icons\">redo</span>\r\n              <span class=\"retweet-count\">107</span>\r\n            </a>\r\n            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"轉推\">\r\n              <span class=\"material-icons\">autorenew</span>\r\n              <span class=\"retweet-count\">66</span>\r\n            </a>\r\n            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"棒\">\r\n              <span class=\"material-icons\">star_rate</span>\r\n              <span class=\"retweet-count\">203</span>\r\n            </a>\r\n          </div> -->\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n  </section>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(dataSer) {
        this.dataSer = dataSer;
        this.message = "";
        this.userMessages = [];
        this.user = {
            birdId: "",
            userName: "",
            imageUrl: ""
        };
        this.isSelect = false;
        this.disabledSend = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //取得人員名單
        this.dataSer.getUsers().subscribe(function (req) { return (_this.users = req); });
        this.dataSer.getUserMessage().subscribe(function (data) { return (_this.userMessages = data); });
    };
    //加入訊息
    AppComponent.prototype.addMessage = function () {
        var _this = this;
        //如果有值
        if (this.isSelect && this.message) {
            this.disabledSend = true;
            var userMessage = {
                birdId: this.user.birdId,
                message: this.message
            };
            this.dataSer.addUserMessage(userMessage).subscribe(function (data) {
                _this.message = "";
                _this.dataSer.getUserMessage().subscribe(function (data) {
                    _this.userMessages = data;
                    _this.disabledSend = false;
                });
            });
        }
    };
    //選擇使用者
    AppComponent.prototype.selectUser = function (birdId) {
        var _this = this;
        if (birdId) {
            this.user = this.users.find(function (item) {
                _this.isSelect = true;
                return item.birdId == birdId;
            });
        }
        else {
            this.isSelect = false;
        }
    };
    //重新載入訊息
    AppComponent.prototype.reflashMessage = function () {
        var _this = this;
        this.dataSer.getUserMessage().subscribe(function (data) { return (_this.userMessages = data); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_pipe_pipe__ = __webpack_require__("../../../../../src/app/order-pipe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__order_pipe_pipe__["a" /* OrderPipePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(http) {
        this.http = http;
        //test機
        // apiUsers = "http://localhost:11053/api/Users";
        // apiBirdMessage = "http://localhost:11053/api/birdmessages";
        //正式機
        this.apiUsers = "https://birdprojectapi20171121042818.azurewebsites.net/api/Users";
        this.apiBirdMessage = "https://birdprojectapi20171121042818.azurewebsites.net/api/BirdMessages";
    }
    DataService.prototype.getUsers = function () {
        return this.http.get(this.apiUsers);
    };
    DataService.prototype.getUserMessage = function () {
        return this.http.get(this.apiBirdMessage);
    };
    DataService.prototype.addUserMessage = function (UserMessage) {
        return this.http.post(this.apiBirdMessage, UserMessage);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/order-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderPipePipe = (function () {
    function OrderPipePipe() {
    }
    OrderPipePipe.prototype.transform = function (value, type) {
        if (type) {
            value.sort(function (a, b) { return b.Id - a.Id; });
        }
        return value;
    };
    OrderPipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'orderPipe'
        })
    ], OrderPipePipe);
    return OrderPipePipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map