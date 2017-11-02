import { Component} from '@angular/core';
import {CondimentOperation} from '../../../services/api/product.models';
import { Product } from "../../../services/index";

@Component({
    selector: 'ns-cart',
    moduleId: module.id,
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent  {
    orders:Product[] = [
                    {
                        productId: '7772170f-a09a-4d1a-9256-91e7af22b0d1',
                        label: 'Fish of the Day',
                        detail: 'Served with salad or fries and sauce',
                        condiment: CondimentOperation.force,
                        price: 14
                    },
                    {
                        productId: 'b4cf86e1-cbdd-4c09-8bb5-7767d21eaa35',
                        label: 'Prawn Cutlet Pack',
                        detail: '5 freshly battered or crumbled and deep fried. Served with salad or fries or sauce',
                        condiment: CondimentOperation.force,
                        price: 19.5
                    }
                ]
    subTotal:any;
    fee:any;
    total:any;

    constructor() {
        this.subTotal = 0;
        for(let item of this.orders){
            this.subTotal += item.price;
        }
        this.fee = 5.00;
        this.total = this.subTotal + this.fee;
        
        this.fee = "$" + this.fee.toFixed(2);
        this.subTotal = "$" + this.subTotal.toFixed(2);
        this.total = "$" + this.total.toFixed(2);
    }

   
    public confirm() {

        this.cancel();
    }

    public cancel() {

    }

}

