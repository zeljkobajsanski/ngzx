import { ElementRef, OnInit } from "@angular/core";
export declare class NgZxTableComponent implements OnInit {
    private el;
    table$: any;
    options: {};
    constructor(el: ElementRef);
    ngOnInit(): void;
    loadData(data: any[]): void;
}
