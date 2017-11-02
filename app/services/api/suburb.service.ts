import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

export class Suburb {
    postcode: number;
    label: string;
}

@Injectable()
export class SuburbService {

    private _suburbs: Suburb[] = [];

    constructor(private http: Http ) {
        this.getSuburbs().subscribe(
            data => this._suburbs = data
        );
    }

    private getSuburbs(): Observable<Suburb[]> {
        return this.http.get('/api/suburbs', null)
            .map(response => response.json() )
            .map( data => <Suburb[]> data);
    }

    get suburbs() :Suburb[] {
        return this._suburbs;
    }

}
