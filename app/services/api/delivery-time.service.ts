import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

export class DeliveryTime {
    label: string;
}

@Injectable()
export class DeliveryTimeService {


    constructor(private http: Http ) {

    }

    getDeliveryTimes(): Observable<DeliveryTime[]> {
        return this.http.get('/api/delivery-times', null)
            .map(response => response.json() )
            .map( data => <DeliveryTime[]> data);

    }



}
