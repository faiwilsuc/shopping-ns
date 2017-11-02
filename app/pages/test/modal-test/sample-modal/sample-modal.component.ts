import {Component, OnInit} from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';


@Component({
    moduleId: module.id,
    selector: 'ns-sample-modal',
    templateUrl: './sample-modal.component.html',
    styleUrls: ['./sample-modal.component.css']
})
export class SampleModalComponent implements OnInit {

    public constructor( private params: ModalDialogParams) {
    }

    ngOnInit() {
    }

    public confirm() {
        this.cancel();
    }

    public cancel() {
        this.params.closeCallback('close');
    }
}
