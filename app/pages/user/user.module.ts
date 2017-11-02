import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {SharedPagesModule} from '../shared-pages/shared-pages.module';

import {UserComponent} from './user.component';
import {AccountComponent} from './account/account.component';

const routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: '', component: AccountComponent }
        ]
    }
];

@NgModule({
    declarations: [
        AccountComponent,
        UserComponent
    ],
    imports: [
        CommonModule,

        SharedPagesModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    entryComponents: [

    ]
})

export class UserModule {}
