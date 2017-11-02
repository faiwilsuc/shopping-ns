import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-main",
    moduleId: module.id,
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {

    loading: boolean = false;

    constructor(
        private routerExtensions: RouterExtensions

    ) { }

    ngOnInit() {
    }


}
