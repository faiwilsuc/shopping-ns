import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { SampleModalComponent } from './sample-modal/sample-modal.component';
import { LoginModalComponent } from '../../login-modal/login-modal.component';

@Component({
    selector: "ns-modal-test",
    moduleId: module.id,
    templateUrl: "./modal-test.component.html",
    styleUrls: ["./modal-test.component.css"],
})
export class ModalTestComponent  {


    constructor(
        private viewContainerRef: ViewContainerRef,
        private modalService: ModalDialogService

    ) { }


    onOpenModal(){
        const options: ModalDialogOptions = {
            context: { },
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(SampleModalComponent, options);
    }

    onOpenLoginModal(){
        const options: ModalDialogOptions = {
            context: { },
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(LoginModalComponent, options);
    }



}

