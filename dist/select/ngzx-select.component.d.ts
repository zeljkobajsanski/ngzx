import { ControlValueAccessor } from "@angular/forms";
import { OnInit, ElementRef } from "@angular/core";
export declare class NgZxSelectComponent implements ControlValueAccessor, OnInit {
    private el;
    element: any;
    value: any;
    data: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    private propagateChange;
    private setValue();
}
