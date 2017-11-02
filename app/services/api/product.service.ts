import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import {ProductGroup, CondimentGroup} from './product.models';

@Injectable()
export class ProductService {
    constructor(
        private http: Http
        ) { }

    getProductGroups(): Observable<ProductGroup[]> {
        return this.http.get('/api/products', null)
            .map(response => response.json() )
            .map( data => <ProductGroup[]> data);
    }

    getCondimentGroups(productId: string): Observable<CondimentGroup[]> {
        return this.http.get('/api/condiments/' + productId)
            .map(response => response.json() )
            .map( data => <CondimentGroup[]> data);
    }

}
