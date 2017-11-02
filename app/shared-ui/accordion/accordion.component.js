"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AccordionComponent = (function () {
    function AccordionComponent() {
        this.onOpened = new core_1.EventEmitter();
    }
    AccordionComponent.prototype.onTap = function () {
        this.open = !this.open;
        this.onOpened.emit(this.open);
    };
    return AccordionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AccordionComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AccordionComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AccordionComponent.prototype, "open", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AccordionComponent.prototype, "onOpened", void 0);
AccordionComponent = __decorate([
    core_1.Component({
        selector: "ns-accordion",
        moduleId: module.id,
        templateUrl: "./accordion.component.html",
        styleUrls: ["./accordion.component.css"],
    })
], AccordionComponent);
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY29yZGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUU7QUFRdkUsSUFBYSxrQkFBa0I7SUFOL0I7UUFVYyxhQUFRLEdBQTBCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBT25FLENBQUM7SUFKRyxrQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBVlk7SUFBUixZQUFLLEVBQUU7O2dEQUFjO0FBQ2I7SUFBUixZQUFLLEVBQUU7O2lEQUFlO0FBQ2Q7SUFBUixZQUFLLEVBQUU7O2dEQUFlO0FBQ2I7SUFBVCxhQUFNLEVBQUU7OEJBQVcsbUJBQVk7b0RBQStCO0FBSnRELGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7S0FDM0MsQ0FBQztHQUNXLGtCQUFrQixDQVc5QjtBQVhZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtYWNjb3JkaW9uXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9hY2NvcmRpb24uY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgb3BlbjogYm9vbGVhbjtcclxuICAgIEBPdXRwdXQoKSBvbk9wZW5lZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcbiAgICBvblRhcCgpIHtcclxuICAgICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xyXG4gICAgICAgIHRoaXMub25PcGVuZWQuZW1pdCh0aGlzLm9wZW4pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==