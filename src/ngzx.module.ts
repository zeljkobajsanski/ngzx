import {ModuleWithProviders, NgModule} from "@angular/core";
import {NgZxTableComponent} from "./table/ngzx-table.component";

@NgModule({
    declarations: [
        NgZxTableComponent
    ],
    exports: [
        NgZxTableComponent
    ]
})
export class NgZxModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: NgZxModule, providers: []}
    }
}