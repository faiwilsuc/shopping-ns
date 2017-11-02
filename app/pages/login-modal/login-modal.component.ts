import { Component} from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

@Component({
    selector: 'ns-login-modal',
    moduleId: module.id,
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.css']
})

export class LoginModalComponent  {

    email:string = "";
    password:string = "";
    title:string = "Log in";
    confirmLabel = "Log in";
    isReset = false;

    public constructor( private params: ModalDialogParams) {
    }

    public confirm() {
        //this.params = { loggedIn: true};
        this.cancel();
    }

    public cancel() {
        this.params.closeCallback('close');
    }

    goResetPassword(){
        this.isReset = true;
        this.title = "Reset Password";
        this.confirmLabel = "Continue";

    }
}

