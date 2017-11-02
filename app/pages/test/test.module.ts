import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {SharedPagesModule} from '../shared-pages/shared-pages.module';

import {TestComponent} from './test.component';
import {ModalTestComponent, SampleModalComponent} from './modal-test/index';

const routers = [
    {
        path: '',
        component: TestComponent,
        children: [
            { path: '', component: ModalTestComponent }
        ]
    }
];

@NgModule({
    declarations: [
        SampleModalComponent,
        ModalTestComponent,
        TestComponent
    ],
    imports: [
        CommonModule,

        SharedPagesModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routers)
    ],
    entryComponents: [
        ModalTestComponent,
        SampleModalComponent

    ]
})

export class TestModule {}
