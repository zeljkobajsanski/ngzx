"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var NgZxSelectComponent = /** @class */ (function () {
    function NgZxSelectComponent(el) {
        this.el = el;
        this.propagateChange = function (_) {
        };
    }
    NgZxSelectComponent_1 = NgZxSelectComponent;
    NgZxSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.element = $(this.el.nativeElement.firstChild).select2({ width: '100%', data: this.data });
        this.element.on('change.select2', function () { return _this.propagateChange(_this.element.val()); });
    };
    NgZxSelectComponent.prototype.writeValue = function (obj) {
        this.value = obj;
        this.setValue();
    };
    NgZxSelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    NgZxSelectComponent.prototype.registerOnTouched = function (fn) {
    };
    NgZxSelectComponent.prototype.setDisabledState = function (isDisabled) {
    };
    NgZxSelectComponent.prototype.setValue = function () {
        this.element.val(this.value).trigger('change');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgZxSelectComponent.prototype, "data", void 0);
    NgZxSelectComponent = NgZxSelectComponent_1 = __decorate([
        core_1.Component({
            selector: 'ngzx-select',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return NgZxSelectComponent_1; }),
                    multi: true
                }
            ],
            template: '<select></select>'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], NgZxSelectComponent);
    return NgZxSelectComponent;
    var NgZxSelectComponent_1;
}());
exports.NgZxSelectComponent = NgZxSelectComponent;
//# sourceMappingURL=ngzx-select.component.js.map