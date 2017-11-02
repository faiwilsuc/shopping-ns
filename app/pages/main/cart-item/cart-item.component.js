"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../../services/index");
var CartItemComponent = (function () {
    function CartItemComponent() {
        //this.price = '$' + this.model.price.toFixed(2);
    }
    CartItemComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CartItemComponent.prototype, "price", {
        get: function () {
            return '$' + this.model.price.toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    CartItemComponent.prototype.add = function (event) {
    };
    CartItemComponent.prototype.remove = function (event) {
    };
    return CartItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Product)
], CartItemComponent.prototype, "model", void 0);
CartItemComponent = __decorate([
    core_1.Component({
        selector: 'ns-cart-item',
        moduleId: module.id,
        templateUrl: './cart-item.component.html',
        styleUrls: ['./cart-item.component.css'],
    }),
    __metadata("design:paramtypes", [])
], CartItemComponent);
exports.CartItemComponent = CartItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFFaEcsaURBQWtEO0FBUWxELElBQWEsaUJBQWlCO0lBRzFCO1FBQ0ksaURBQWlEO0lBQ3JELENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHNCQUFJLG9DQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUNELCtCQUFHLEdBQUgsVUFBSSxLQUFTO0lBRWIsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxLQUFTO0lBRWhCLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUFyQlk7SUFBUixZQUFLLEVBQUU7OEJBQVEsZUFBTztnREFBQztBQURmLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7S0FDM0MsQ0FBQzs7R0FDVyxpQkFBaUIsQ0FzQjdCO0FBdEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LFZpZXdDb250YWluZXJSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtY2FydC1pdGVtJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NhcnQtaXRlbS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBtb2RlbDogUHJvZHVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL3RoaXMucHJpY2UgPSAnJCcgKyB0aGlzLm1vZGVsLnByaWNlLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmljZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnJCcgKyB0aGlzLm1vZGVsLnByaWNlLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcbiAgICBhZGQoZXZlbnQ6YW55KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZShldmVudDphbnkpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==