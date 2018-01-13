import {ModuleWithProviders, NgModule} from "@angular/core";
import {NgZxTableComponent} from "./table/ngzx-table.component";
import {NgZxSelectComponent} from "./select/ngzx-select.component";

@NgModule({
    declarations: [
        NgZxTableComponent,
        NgZxSelectComponent
    ],
    exports: [
        NgZxTableComponent,
        NgZxSelectComponent
    ]
})
export class NgZxModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: NgZxModule, providers: []}
    }
}