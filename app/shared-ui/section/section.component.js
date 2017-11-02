"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SectionComponent = (function () {
    function SectionComponent() {
    }
    return SectionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SectionComponent.prototype, "label", void 0);
SectionComponent = __decorate([
    core_1.Component({
        selector: "section",
        moduleId: module.id,
        template: "\n      <StackLayout orientation=\"vertical\">\n        <Label [text]=\"label\" class=\"bottom-border gray-bg\"></Label>\n        <ng-content></ng-content>\n      </StackLayout>\n    ",
        styles: ["\n      Label {\n        height: 50;\n        padding-left: 10;\n        color: #686868;\n        font-size: 14;\n        font-weight: bold;\n      }\n    "],
    })
], SectionComponent);
exports.SectionComponent = SectionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFpRDtBQXFCakQsSUFBYSxnQkFBZ0I7SUFBN0I7SUFFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQURZO0lBQVIsWUFBSyxFQUFFOzsrQ0FBZTtBQURkLGdCQUFnQjtJQW5CNUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUseUxBS1Q7UUFDRCxNQUFNLEVBQUUsQ0FBQyw2SkFRUixDQUFDO0tBQ0wsQ0FBQztHQUNXLGdCQUFnQixDQUU1QjtBQUZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwic2VjdGlvblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgPExhYmVsIFt0ZXh0XT1cImxhYmVsXCIgY2xhc3M9XCJib3R0b20tYm9yZGVyIGdyYXktYmdcIj48L0xhYmVsPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9TdGFja0xheW91dD5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgIExhYmVsIHtcclxuICAgICAgICBoZWlnaHQ6IDUwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTA7XHJcbiAgICAgICAgY29sb3I6ICM2ODY4Njg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWN0aW9uQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuIl19