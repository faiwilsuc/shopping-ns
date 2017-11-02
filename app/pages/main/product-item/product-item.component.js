"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var start_order_modal_component_1 = require("../start-order-modal/start-order-modal.component");
var index_1 = require("../../../services/index");
var ProductItemComponent = (function () {
    function ProductItemComponent(viewContainerRef, modalService) {
        this.viewContainerRef = viewContainerRef;
        this.modalService = modalService;
        this.onAdd = new core_1.EventEmitter();
        this.isShoppingCartEmpty = true;
        //this.price = '$' + this.model.price.toFixed(2);
    }
    ProductItemComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProductItemComponent.prototype, "price", {
        get: function () {
            return '$' + this.model.price.toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    ProductItemComponent.prototype.add = function (event) {
        if (this.isShoppingCartEmpty) {
            var options = {
                context: {},
                fullscreen: false,
                viewContainerRef: this.viewContainerRef
            };
            this.modalService.showModal(start_order_modal_component_1.StartOrderModalComponent, options);
        }
        else {
            this.onAdd.emit({
                id: this.model.productId
            });
        }
    };
    ProductItemComponent.prototype.customize = function (event) {
        if (this.isShoppingCartEmpty) {
            var options = {
                context: { customize: true },
                fullscreen: false,
                viewContainerRef: this.viewContainerRef
            };
            this.modalService.showModal(start_order_modal_component_1.StartOrderModalComponent, options);
        }
        else {
            this.onAdd.emit({
                id: this.model.productId,
                customize: true
            });
        }
    };
    return ProductItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.Product)
], ProductItemComponent.prototype, "model", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductItemComponent.prototype, "onAdd", void 0);
ProductItemComponent = __decorate([
    core_1.Component({
        selector: 'ns-product-item',
        moduleId: module.id,
        templateUrl: './product-item.component.html',
        styleUrls: ['./product-item.component.css'],
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef,
        modal_dialog_1.ModalDialogService])
], ProductItemComponent);
exports.ProductItemComponent = ProductItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsa0VBQTJGO0FBRTNGLGdHQUE0RjtBQUU1RixpREFBa0Q7QUFRbEQsSUFBYSxvQkFBb0I7SUFLN0IsOEJBQXFCLGdCQUFrQyxFQUNsQyxZQUFnQztRQURoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUozQyxVQUFLLEdBQXlCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBS3ZELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDaEMsaURBQWlEO0lBQ3JELENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHNCQUFJLHVDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUNELGtDQUFHLEdBQUgsVUFBSSxLQUFTO1FBRVQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQztZQUN6QixJQUFNLE9BQU8sR0FBdUI7Z0JBQ2hDLE9BQU8sRUFBRSxFQUFHO2dCQUNaLFVBQVUsRUFBQyxLQUFLO2dCQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2FBQzFDLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxzREFBd0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFFSixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDWixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO2FBQzNCLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVMsR0FBVCxVQUFVLEtBQVM7UUFDZixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLElBQU0sT0FBTyxHQUF1QjtnQkFDaEMsT0FBTyxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRTtnQkFDM0IsVUFBVSxFQUFDLEtBQUs7Z0JBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7YUFDMUMsQ0FBQztZQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHNEQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRW5FLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUVKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNaLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQ3hCLFNBQVMsRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUwsMkJBQUM7QUFBRCxDQUFDLEFBckRELElBcURDO0FBcERZO0lBQVIsWUFBSyxFQUFFOzhCQUFRLGVBQU87bURBQUM7QUFDZDtJQUFULGFBQU0sRUFBRTs4QkFBUSxtQkFBWTttREFBOEI7QUFGbEQsb0JBQW9CO0lBTmhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsK0JBQStCO1FBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO0tBQzlDLENBQUM7cUNBTXlDLHVCQUFnQjtRQUNwQixpQ0FBa0I7R0FONUMsb0JBQW9CLENBcURoQztBQXJEWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCxWaWV3Q29udGFpbmVyUmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XHJcblxyXG5pbXBvcnQgeyBTdGFydE9yZGVyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9zdGFydC1vcmRlci1tb2RhbC9zdGFydC1vcmRlci1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zLXByb2R1Y3QtaXRlbScsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgbW9kZWw6IFByb2R1Y3Q7XHJcbiAgICBAT3V0cHV0KCkgb25BZGQ6IEV2ZW50RW1pdHRlcjxvYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGlzU2hvcHBpbmdDYXJ0RW1wdHk6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UgKSB7XHJcbiAgICAgICAgdGhpcy5pc1Nob3BwaW5nQ2FydEVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICAvL3RoaXMucHJpY2UgPSAnJCcgKyB0aGlzLm1vZGVsLnByaWNlLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmljZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnJCcgKyB0aGlzLm1vZGVsLnByaWNlLnRvRml4ZWQoMik7XHJcbiAgICB9XHJcbiAgICBhZGQoZXZlbnQ6YW55KSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNTaG9wcGluZ0NhcnRFbXB0eSl7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHsgfSxcclxuICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW46ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWZcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFN0YXJ0T3JkZXJNb2RhbENvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25BZGQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5tb2RlbC5wcm9kdWN0SWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGN1c3RvbWl6ZShldmVudDphbnkpIHtcclxuICAgICAgICBpZih0aGlzLmlzU2hvcHBpbmdDYXJ0RW1wdHkpe1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB7Y3VzdG9taXplOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChTdGFydE9yZGVyTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vbkFkZC5lbWl0KHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLm1vZGVsLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWl6ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==