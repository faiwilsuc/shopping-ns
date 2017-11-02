import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'ns-test',
    moduleId: module.id,
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {

    loading: boolean = false;

    constructor(
        private routerExtensions: RouterExtensions

    ) { }

    ngOnInit() {
    }


}
