import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ProductService, ProductGroup } from '../../../services/index';

@Component({
    selector: 'ns-product-list',
    moduleId: module.id,
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

    openedIndex: number = -1;
    loading: boolean = false;
    productGroup: ProductGroup[];

    constructor(private productService: ProductService ) {
        console.error('created product list');
    }

    ngOnInit() {
        this.loading = true;
        this.productService.getProductGroups()
            .subscribe( data => {
                this.loading = false;
                this.productGroup = data;
            }, error => {
            });
    }

    onOpenGroup(index: number) {
        this.openedIndex = index;
    }


}
