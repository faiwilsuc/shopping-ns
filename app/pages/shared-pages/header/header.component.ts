import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { RouterExtensions  } from "nativescript-angular/router";

import {MainMenuService, MainMenuItem } from '../../../services/main-menu.service';
import { LoginModalComponent } from '../../login-modal/login-modal.component';
import { CartComponent } from '../../main/cart/cart.component';


@Component({
    selector: 'ns-header',
    moduleId: module.id,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

    showMainMenu = false;
    isAuthenticated = false;

    constructor(private routerExtensions: RouterExtensions,
                private viewContainerRef: ViewContainerRef,
                private modalService: ModalDialogService,
                private mainMenuService: MainMenuService){

    }

    get navBtnVisible(): boolean {
        return this.routerExtensions.canGoBack();
    }

    get mainMenuItems():MainMenuItem[] {
        return this.mainMenuService.mainMenuItems;
    }

    onNavBtnTap(){
        this.routerExtensions.back();
    }

    onToggleMainMenu() {
        this.showMainMenu = !this.showMainMenu;
    }

    onNavToMain() {
        this.routerExtensions.navigate(['/main'], {clearHistory:false})
    }
    onMainMenuNavigate(route: string) {
        this.showMainMenu = false;
        this.routerExtensions.navigate([route], {clearHistory:false})
    }

    onLogin() {
        this.showMainMenu = false;
        if (this.isAuthenticated) {
           this.isAuthenticated = false;
        } else {
            const options: ModalDialogOptions = {
                context: {},
                fullscreen:false,
                viewContainerRef: this.viewContainerRef
            };
            this.modalService.showModal(LoginModalComponent, options);
        }
    }

}
