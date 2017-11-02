"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_models_1 = require("../../../services/api/product.models");
var CartComponent = (function () {
    function CartComponent() {
        this.orders = [
            {
                productId: '7772170f-a09a-4d1a-9256-91e7af22b0d1',
                label: 'Fish of the Day',
                detail: 'Served with salad or fries and sauce',
                condiment: product_models_1.CondimentOperation.force,
                price: 14
            },
            {
                productId: 'b4cf86e1-cbdd-4c09-8bb5-7767d21eaa35',
                label: 'Prawn Cutlet Pack',
                detail: '5 freshly battered or crumbled and deep fried. Served with salad or fries or sauce',
                condiment: product_models_1.CondimentOperation.force,
                price: 19.5
            }
        ];
        this.subTotal = 0;
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var item = _a[_i];
            this.subTotal += item.price;
        }
        this.fee = 5.00;
        this.total = this.subTotal + this.fee;
        this.fee = "$" + this.fee.toFixed(2);
        this.subTotal = "$" + this.subTotal.toFixed(2);
        this.total = "$" + this.total.toFixed(2);
    }
    CartComponent.prototype.confirm = function () {
        this.cancel();
    };
    CartComponent.prototype.cancel = function () {
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'ns-cart',
        moduleId: module.id,
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.css']
    }),
    __metadata("design:paramtypes", [])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6Qyx1RUFBd0U7QUFVeEUsSUFBYSxhQUFhO0lBcUJ0QjtRQXBCQSxXQUFNLEdBQWE7WUFDSDtnQkFDSSxTQUFTLEVBQUUsc0NBQXNDO2dCQUNqRCxLQUFLLEVBQUUsaUJBQWlCO2dCQUN4QixNQUFNLEVBQUUsc0NBQXNDO2dCQUM5QyxTQUFTLEVBQUUsbUNBQWtCLENBQUMsS0FBSztnQkFDbkMsS0FBSyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNJLFNBQVMsRUFBRSxzQ0FBc0M7Z0JBQ2pELEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLE1BQU0sRUFBRSxvRkFBb0Y7Z0JBQzVGLFNBQVMsRUFBRSxtQ0FBa0IsQ0FBQyxLQUFLO2dCQUNuQyxLQUFLLEVBQUUsSUFBSTthQUNkO1NBQ0osQ0FBQTtRQU1ULElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEdBQUcsQ0FBQSxDQUFhLFVBQVcsRUFBWCxLQUFBLElBQUksQ0FBQyxNQUFNLEVBQVgsY0FBVyxFQUFYLElBQVc7WUFBdkIsSUFBSSxJQUFJLFNBQUE7WUFDUixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUV0QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBR00sK0JBQU8sR0FBZDtRQUVJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sOEJBQU0sR0FBYjtJQUVBLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQzs7R0FFVyxhQUFhLENBNEN6QjtBQTVDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29uZGltZW50T3BlcmF0aW9ufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hcGkvcHJvZHVjdC5tb2RlbHMnO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2luZGV4XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtY2FydCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2FydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJ0Q29tcG9uZW50ICB7XHJcbiAgICBvcmRlcnM6UHJvZHVjdFtdID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiAnNzc3MjE3MGYtYTA5YS00ZDFhLTkyNTYtOTFlN2FmMjJiMGQxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdGaXNoIG9mIHRoZSBEYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6ICdTZXJ2ZWQgd2l0aCBzYWxhZCBvciBmcmllcyBhbmQgc2F1Y2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaW1lbnQ6IENvbmRpbWVudE9wZXJhdGlvbi5mb3JjZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IDE0XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogJ2I0Y2Y4NmUxLWNiZGQtNGMwOS04YmI1LTc3NjdkMjFlYWEzNScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJhd24gQ3V0bGV0IFBhY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6ICc1IGZyZXNobHkgYmF0dGVyZWQgb3IgY3J1bWJsZWQgYW5kIGRlZXAgZnJpZWQuIFNlcnZlZCB3aXRoIHNhbGFkIG9yIGZyaWVzIG9yIHNhdWNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGltZW50OiBDb25kaW1lbnRPcGVyYXRpb24uZm9yY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiAxOS41XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgc3ViVG90YWw6YW55O1xyXG4gICAgZmVlOmFueTtcclxuICAgIHRvdGFsOmFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN1YlRvdGFsID0gMDtcclxuICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy5vcmRlcnMpe1xyXG4gICAgICAgICAgICB0aGlzLnN1YlRvdGFsICs9IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmVlID0gNS4wMDtcclxuICAgICAgICB0aGlzLnRvdGFsID0gdGhpcy5zdWJUb3RhbCArIHRoaXMuZmVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZmVlID0gXCIkXCIgKyB0aGlzLmZlZS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIHRoaXMuc3ViVG90YWwgPSBcIiRcIiArIHRoaXMuc3ViVG90YWwudG9GaXhlZCgyKTtcclxuICAgICAgICB0aGlzLnRvdGFsID0gXCIkXCIgKyB0aGlzLnRvdGFsLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIHB1YmxpYyBjb25maXJtKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWwoKSB7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19