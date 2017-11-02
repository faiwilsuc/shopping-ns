import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";

// used to create fake backend
import { FakeBackendProvider } from './services/api/fake-data/index';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { ProductService, SuburbService, DeliveryDateService, DeliveryTimeService } from './services/api/index';
import { IconService, MainMenuService } from './services/index';


import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { LoginModule } from './pages/login-modal/login-modal.module';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        LoginModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        CommonModule
    ],
    declarations: [
        AppComponent
    ],
    entryComponents: [ ],
    providers: [
        MainMenuService,
        IconService,
        SuburbService,
        ProductService,
        DeliveryDateService,
        DeliveryTimeService,
        // providers used to create fake backend
        FakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
