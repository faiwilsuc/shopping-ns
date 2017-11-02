import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

export class DeliveryDate {
    date: Date;
    label: string;
}

@Injectable()
export class DeliveryDateService {


    constructor(private http: Http ) {

    }

    getDeliveryDates(): Observable<DeliveryDate[]> {
        return this.http.get('/api/delivery-dates', null)
            .map(response => response.json() )
            .map( data => <DeliveryDate[]> data);

    }



}
