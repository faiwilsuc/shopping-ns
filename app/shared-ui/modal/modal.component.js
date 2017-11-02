"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ModalComponent = (function () {
    function ModalComponent() {
        this.showButtons = true;
        this.confirmLabel = 'CONFIRM';
        this.onCancel = new core_1.EventEmitter();
        this.onConfirm = new core_1.EventEmitter();
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent.prototype.close = function () {
        this.onCancel.emit();
    };
    ModalComponent.prototype.confirm = function () {
        this.onConfirm.emit();
    };
    return ModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "showButtons", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "confirmLabel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ModalComponent.prototype, "onConfirm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ModalComponent.prototype, "onCancel", void 0);
ModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-modal',
        templateUrl: './modal.component.html',
        styleUrls: ['./modal.component.css']
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZFO0FBUTdFLElBQWEsY0FBYztJQVN6QjtRQVBpQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixpQkFBWSxHQUFHLFNBQVMsQ0FBQztRQVF4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFDOUMsQ0FBQztJQUVELGlDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRU4sOEJBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLGdDQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF2Qlc7SUFBVCxZQUFLLEVBQUc7OzZDQUFzQjtBQUNyQjtJQUFULFlBQUssRUFBRzs7bURBQTJCO0FBQzFCO0lBQVQsWUFBSyxFQUFHOztvREFBaUM7QUFDaEM7SUFBVCxhQUFNLEVBQUU7OEJBQW1CLG1CQUFZO2lEQUFTO0FBQ3ZDO0lBQVQsYUFBTSxFQUFFOzhCQUFrQixtQkFBWTtnREFBUztBQUxyQyxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztLQUNyQyxDQUFDOztHQUNXLGNBQWMsQ0F3QjFCO0FBeEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICducy1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQgKCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0ICgpIHB1YmxpYyBzaG93QnV0dG9ucyA9IHRydWU7XHJcbiAgQElucHV0ICgpIHB1YmxpYyBjb25maXJtTGFiZWwgPSAnQ09ORklSTSc7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkNvbmZpcm06IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25DYW5jZWw6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB0aGlzLm9uQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgICB0aGlzLm9uQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICB0aGlzLm9uQ2FuY2VsLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25maXJtKCl7XHJcbiAgICB0aGlzLm9uQ29uZmlybS5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==