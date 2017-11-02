
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedUIModule } from '../../shared-ui/shared-ui.module';

import {HeaderComponent} from './header/header.component';
import {ShoppingCartWidgetComponent} from './shopping-cart-widget/shopping-cart-widget.component';

const SHARED_PAGES_COMPONENTS = [
    ShoppingCartWidgetComponent,
    HeaderComponent
];

@NgModule({
    declarations: SHARED_PAGES_COMPONENTS,
    imports: [
        CommonModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        SharedUIModule
    ],
    exports: [
        SharedUIModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        ...SHARED_PAGES_COMPONENTS
    ],
    entryComponents:[

    ]
})

export class SharedPagesModule {}
