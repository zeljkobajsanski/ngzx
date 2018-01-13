import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Component, forwardRef, OnInit, ElementRef, Input} from "@angular/core";

@Component({
    selector: 'ngzx-select',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgZxSelectComponent),
            multi: true
        }
    ],
    template: '<select></select>'
})
export class NgZxSelectComponent implements ControlValueAccessor, OnInit {

    element;
    value;
    @Input() data;

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
        this.element = $(this.el.nativeElement.firstChild).select2({width: '100%', data: this.data});
        this.element.on('change.select2', () => this.propagateChange(this.element.val()));
    }

    writeValue(obj: any): void {
        this.value = obj;
        this.setValue();
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    setDisabledState?(isDisabled: boolean): void {

    }

    private propagateChange = (_: any) => {
    }

    private setValue() {
        this.element.val(this.value).trigger('change');
    }
}
