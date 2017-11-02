"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MainMenuItem = (function () {
    function MainMenuItem() {
    }
    return MainMenuItem;
}());
exports.MainMenuItem = MainMenuItem;
var MainMenuService = (function () {
    function MainMenuService() {
        this._mainMenuItems = [
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
    }
    Object.defineProperty(MainMenuService.prototype, "mainMenuItems", {
        get: function () {
            return this._mainMenuItems;
        },
        enumerable: true,
        configurable: true
    });
    return MainMenuService;
}());
MainMenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MainMenuService);
exports.MainMenuService = MainMenuService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQztJQUFBO0lBR0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSxvQ0FBWTtBQU16QixJQUFhLGVBQWU7SUF3QnhCO1FBdEJRLG1CQUFjLEdBQW1CO1lBQ3JDO2dCQUNJLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSxPQUFPO2FBQ2pCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLEtBQUssRUFBRSxZQUFZO2FBQ3RCO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLEtBQUssRUFBRSxPQUFPO2FBQ2pCO1lBRUQ7Z0JBQ0ksS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLEtBQUssRUFBRSxPQUFPO2FBQ2pCO1NBR0osQ0FBQztJQUdGLENBQUM7SUFHRCxzQkFBSSwwQ0FBYTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUwsc0JBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTs7R0FDQSxlQUFlLENBZ0MzQjtBQWhDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudUl0ZW0ge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHJvdXRlOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1haW5NZW51U2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbWFpbk1lbnVJdGVtczogTWFpbk1lbnVJdGVtW10gPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0hvbWUnLFxyXG4gICAgICAgICAgICByb3V0ZTogJy9tYWluJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ015IENhcnQnLFxyXG4gICAgICAgICAgICByb3V0ZTogJy9tYWluL2NhcnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnTXkgQWNjb3VudCcsXHJcbiAgICAgICAgICAgIHJvdXRlOiAnL3VzZXInXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogJ01vZGFsIFRlc3QnLFxyXG4gICAgICAgICAgICByb3V0ZTogJy90ZXN0J1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggKSB7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCBtYWluTWVudUl0ZW1zKCkgOk1haW5NZW51SXRlbVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFpbk1lbnVJdGVtcztcclxuICAgIH1cclxuXHJcbn1cclxuIl19