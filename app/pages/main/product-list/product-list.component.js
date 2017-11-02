"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../../services/index");
var ProductListComponent = (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.openedIndex = -1;
        this.loading = false;
        console.error('created product list');
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.productService.getProductGroups()
            .subscribe(function (data) {
            _this.loading = false;
            _this.productGroup = data;
        }, function (error) {
        });
    };
    ProductListComponent.prototype.onOpenGroup = function (index) {
        this.openedIndex = index;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'ns-product-list',
        moduleId: module.id,
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css'],
    }),
    __metadata("design:paramtypes", [index_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsaURBQXVFO0FBUXZFLElBQWEsb0JBQW9CO0lBTTdCLDhCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKbEQsZ0JBQVcsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBSXJCLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRTthQUNqQyxTQUFTLENBQUUsVUFBQSxJQUFJO1lBQ1osS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxLQUFhO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFHTCwyQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6Qlksb0JBQW9CO0lBTmhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsK0JBQStCO1FBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO0tBQzlDLENBQUM7cUNBT3NDLHNCQUFjO0dBTnpDLG9CQUFvQixDQXlCaEM7QUF6Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlLCBQcm9kdWN0R3JvdXAgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtcHJvZHVjdC1saXN0JyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgb3BlbmVkSW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvZHVjdEdyb3VwOiBQcm9kdWN0R3JvdXBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdjcmVhdGVkIHByb2R1Y3QgbGlzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0R3JvdXBzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSggZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdEdyb3VwID0gZGF0YTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW5Hcm91cChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuZWRJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19