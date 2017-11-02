import {Component,ViewContainerRef, Input, OnInit} from '@angular/core'
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    selector: 'ns-shopping-cart-widget',
    templateUrl: './shopping-cart-widget.component.html',
    styleUrls: ['./shopping-cart-widget.component.css']
})
export class ShoppingCartWidgetComponent implements OnInit {

    minOrder: string = "Min order $25";
    totalPrice: string = "$0.00";
    cartCount: number = 0;

    constructor(private routerExtensions: RouterExtensions ) {
    }

    ngOnInit() {

    }
    goCheckout(){
        this.routerExtensions.navigate(['/main/cart'], {clearHistory:false})
    }

}
