import { Component, OnInit, Input, Output,ViewContainerRef, EventEmitter } from "@angular/core";

import { Product } from "../../../services/index";

@Component({
    selector: 'ns-cart-item',
    moduleId: module.id,
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
    @Input() model: Product;

    constructor() {
        //this.price = '$' + this.model.price.toFixed(2);
    }

    ngOnInit() {

    }

    get price(): string {
        return '$' + this.model.price.toFixed(2);
    }
    add(event:any) {

    }

    remove(event:any) {

    }

}
