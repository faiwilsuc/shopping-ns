import { Component, OnInit, Input, Output,ViewContainerRef, EventEmitter } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { StartOrderModalComponent } from '../start-order-modal/start-order-modal.component';

import { Product } from "../../../services/index";

@Component({
    selector: 'ns-product-item',
    moduleId: module.id,
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
    @Input() model: Product;
    @Output() onAdd: EventEmitter<object> = new EventEmitter();

    isShoppingCartEmpty: boolean;
    constructor( private viewContainerRef: ViewContainerRef,
                 private modalService: ModalDialogService ) {
        this.isShoppingCartEmpty = true;
        //this.price = '$' + this.model.price.toFixed(2);
    }

    ngOnInit() {

    }

    get price(): string {
        return '$' + this.model.price.toFixed(2);
    }
    add(event:any) {

        if(this.isShoppingCartEmpty){
            const options: ModalDialogOptions = {
                context: { },
                fullscreen:false,
                viewContainerRef: this.viewContainerRef
            };
            this.modalService.showModal(StartOrderModalComponent, options);
        } else {

            this.onAdd.emit({
                id: this.model.productId
            });
        }
    }

    customize(event:any) {
        if(this.isShoppingCartEmpty){
            const options: ModalDialogOptions = {
                context: {customize: true },
                fullscreen:false,
                viewContainerRef: this.viewContainerRef
            };
            this.modalService.showModal(StartOrderModalComponent, options);

        } else {

            this.onAdd.emit({
                id: this.model.productId,
                customize: true
            });
        }
    }

}
