"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ngzx_table_component_1 = require("./table/ngzx-table.component");
var NgZxModule = /** @class */ (function () {
    function NgZxModule() {
    }
    NgZxModule_1 = NgZxModule;
    NgZxModule.forRoot = function () {
        return { ngModule: NgZxModule_1, providers: [] };
    };
    NgZxModule = NgZxModule_1 = __decorate([
        core_1.NgModule({
            declarations: [
                ngzx_table_component_1.NgZxTableComponent
            ],
            exports: [
                ngzx_table_component_1.NgZxTableComponent
            ]
        })
    ], NgZxModule);
    return NgZxModule;
    var NgZxModule_1;
}());
exports.NgZxModule = NgZxModule;
//# sourceMappingURL=ngzx.module.js.map