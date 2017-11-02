"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ShoppingCartWidgetComponent = (function () {
    function ShoppingCartWidgetComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.minOrder = "Min order $25";
        this.totalPrice = "$0.00";
        this.cartCount = 0;
    }
    ShoppingCartWidgetComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartWidgetComponent.prototype.goCheckout = function () {
        this.routerExtensions.navigate(['/main/cart'], { clearHistory: false });
    };
    return ShoppingCartWidgetComponent;
}());
ShoppingCartWidgetComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-shopping-cart-widget',
        templateUrl: './shopping-cart-widget.component.html',
        styleUrls: ['./shopping-cart-widget.component.css']
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], ShoppingCartWidgetComponent);
exports.ShoppingCartWidgetComponent = ShoppingCartWidgetComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctY2FydC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcHBpbmctY2FydC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBQ3ZFLHNEQUErRDtBQVEvRCxJQUFhLDJCQUEyQjtJQU1wQyxxQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFKdEQsYUFBUSxHQUFXLGVBQWUsQ0FBQztRQUNuQyxlQUFVLEdBQVcsT0FBTyxDQUFDO1FBQzdCLGNBQVMsR0FBVyxDQUFDLENBQUM7SUFHdEIsQ0FBQztJQUVELDhDQUFRLEdBQVI7SUFFQSxDQUFDO0lBQ0QsZ0RBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0lBQ3hFLENBQUM7SUFFTCxrQ0FBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksMkJBQTJCO0lBTnZDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxXQUFXLEVBQUUsdUNBQXVDO1FBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO0tBQ3RELENBQUM7cUNBT3dDLHlCQUFnQjtHQU43QywyQkFBMkIsQ0FnQnZDO0FBaEJZLGtFQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LFZpZXdDb250YWluZXJSZWYsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25zLXNob3BwaW5nLWNhcnQtd2lkZ2V0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zaG9wcGluZy1jYXJ0LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zaG9wcGluZy1jYXJ0LXdpZGdldC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nQ2FydFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgbWluT3JkZXI6IHN0cmluZyA9IFwiTWluIG9yZGVyICQyNVwiO1xyXG4gICAgdG90YWxQcmljZTogc3RyaW5nID0gXCIkMC4wMFwiO1xyXG4gICAgY2FydENvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBnb0NoZWNrb3V0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL21haW4vY2FydCddLCB7Y2xlYXJIaXN0b3J5OmZhbHNlfSlcclxuICAgIH1cclxuXHJcbn1cclxuIl19