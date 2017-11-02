import { Injectable } from '@angular/core';

export class MainMenuItem {
    label: string;
    route: string;
}

@Injectable()
export class MainMenuService {

    private _mainMenuItems: MainMenuItem[] = [
        {
            label: 'Home',
            route: '/main'
        },
        {
            label: 'My Cart',
            route: '/main/cart'
        },
        {
            label: 'My Account',
            route: '/user'
        },

        {
            label: 'Modal Test',
            route: '/test'
        }


    ];

    constructor( ) {
    }


    get mainMenuItems() :MainMenuItem[] {
        return this._mainMenuItems;
    }

}
