"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CardItemComponent = (function () {
    function CardItemComponent() {
        this.selected = new core_1.EventEmitter();
    }
    CardItemComponent.prototype.ngOnInit = function () {
    };
    CardItemComponent.prototype.onTap = function () {
        this.selected.emit(this.isSelected);
    };
    return CardItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CardItemComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CardItemComponent.prototype, "label", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CardItemComponent.prototype, "selected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CardItemComponent.prototype, "isSelected", void 0);
CardItemComponent = __decorate([
    core_1.Component({
        selector: "card-item",
        moduleId: module.id,
        templateUrl: "./card-item.component.html",
        styleUrls: ["./card-item.component.css"],
    })
], CardItemComponent);
exports.CardItemComponent = CardItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFRL0UsSUFBYSxpQkFBaUI7SUFOOUI7UUFTYyxhQUFRLEdBQTBCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBVW5FLENBQUM7SUFSRyxvQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFFRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFaWTtJQUFSLFlBQUssRUFBRTs7K0NBQWM7QUFDYjtJQUFSLFlBQUssRUFBRTs7Z0RBQWU7QUFDYjtJQUFULGFBQU0sRUFBRTs4QkFBVyxtQkFBWTttREFBK0I7QUFDdEQ7SUFBUixZQUFLLEVBQUU7O3FEQUFvQjtBQUpuQixpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBQzNDLENBQUM7R0FDVyxpQkFBaUIsQ0FhN0I7QUFiWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY2FyZC1pdGVtXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkLWl0ZW0uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9jYXJkLWl0ZW0uY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBJbnB1dCgpIGlzU2VsZWN0ZWQ6Ym9vbGVhbjtcclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblRhcCgpIHtcclxuICAgICAgICBcclxuICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KHRoaXMuaXNTZWxlY3RlZCk7XHJcbiAgICB9XHJcbn1cclxuIl19