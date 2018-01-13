import {Component, ElementRef, Input, OnInit} from "@angular/core";

declare let $: any;

@Component({
    selector: "ngzx-table",
    template: "<table></table>"
})
export class NgZxTableComponent implements OnInit {

    table$;
    @Input() options = {};

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.table$ = $(this.el.nativeElement.firstChild).bootstrapTable(this.options);
    }

    loadData(data: any[]) {
        this.table$.bootstrapTable('load', data);
    }

}