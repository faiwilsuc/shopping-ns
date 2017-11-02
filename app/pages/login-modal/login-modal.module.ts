import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {SharedPagesModule} from '../shared-pages/shared-pages.module';
import {LoginModalComponent} from './login-modal.component';


@NgModule({
    declarations: [
        LoginModalComponent
    ],
    imports: [
        CommonModule,
        SharedPagesModule,
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    entryComponents: [
        LoginModalComponent
    ]
})

export class LoginModule {

}
