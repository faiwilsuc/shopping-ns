import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptRouterModule } from "nativescript-angular/router";

import {SharedPagesModule} from '../shared-pages/shared-pages.module';
import {MainComponent } from './main.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {CartItemComponent} from './cart-item/cart-item.component';
import {StartOrderModalComponent} from './start-order-modal/start-order-modal.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {CartComponent} from './cart/cart.component';

const routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: 'cart', component: CartComponent },
            { path: 'checkout', component: CheckoutComponent },
            { path: '', component: ProductListComponent }

        ]
    }
];

@NgModule({
    declarations: [
        CartComponent,
        CheckoutComponent,
        StartOrderModalComponent,
        MainComponent,
        ProductListComponent,
        ProductItemComponent,
        CartItemComponent
    ],
    imports: [
        CommonModule,

        SharedPagesModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    entryComponents: [
        StartOrderModalComponent
    ]
})

export class MainModule {}
