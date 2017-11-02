"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var sample_modal_component_1 = require("./sample-modal/sample-modal.component");
var login_modal_component_1 = require("../../login-modal/login-modal.component");
var ModalTestComponent = (function () {
    function ModalTestComponent(viewContainerRef, modalService) {
        this.viewContainerRef = viewContainerRef;
        this.modalService = modalService;
    }
    ModalTestComponent.prototype.onOpenModal = function () {
        var options = {
            context: {},
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(sample_modal_component_1.SampleModalComponent, options);
    };
    ModalTestComponent.prototype.onOpenLoginModal = function () {
        var options = {
            context: {},
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(login_modal_component_1.LoginModalComponent, options);
    };
    return ModalTestComponent;
}());
ModalTestComponent = __decorate([
    core_1.Component({
        selector: "ns-modal-test",
        moduleId: module.id,
        templateUrl: "./modal-test.component.html",
        styleUrls: ["./modal-test.component.css"],
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef,
        modal_dialog_1.ModalDialogService])
], ModalTestComponent);
exports.ModalTestComponent = ModalTestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb2RhbC10ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RDtBQUM1RCxrRUFBMkY7QUFDM0YsZ0ZBQTZFO0FBQzdFLGlGQUE4RTtBQVE5RSxJQUFhLGtCQUFrQjtJQUczQiw0QkFDWSxnQkFBa0MsRUFDbEMsWUFBZ0M7UUFEaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7SUFFeEMsQ0FBQztJQUdMLHdDQUFXLEdBQVg7UUFDSSxJQUFNLE9BQU8sR0FBdUI7WUFDaEMsT0FBTyxFQUFFLEVBQUc7WUFDWixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzFDLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyw2Q0FBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsNkNBQWdCLEdBQWhCO1FBQ0ksSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLE9BQU8sRUFBRSxFQUFHO1lBQ1osZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUMxQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsMkNBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUlMLHlCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSxrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO0tBQzVDLENBQUM7cUNBS2dDLHVCQUFnQjtRQUNwQixpQ0FBa0I7R0FMbkMsa0JBQWtCLENBNEI5QjtBQTVCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XHJcbmltcG9ydCB7IFNhbXBsZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zYW1wbGUtbW9kYWwvc2FtcGxlLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9sb2dpbi1tb2RhbC9sb2dpbi1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1tb2RhbC10ZXN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9tb2RhbC10ZXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbW9kYWwtdGVzdC5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxUZXN0Q29tcG9uZW50ICB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlXHJcblxyXG4gICAgKSB7IH1cclxuXHJcblxyXG4gICAgb25PcGVuTW9kYWwoKXtcclxuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgfSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoU2FtcGxlTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbkxvZ2luTW9kYWwoKXtcclxuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgfSxcclxuICAgICAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoTG9naW5Nb2RhbENvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ==