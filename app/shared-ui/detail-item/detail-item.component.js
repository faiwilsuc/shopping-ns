"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DetailItemComponent = (function () {
    function DetailItemComponent() {
        this.color = '#575959';
        this.tap = new core_1.EventEmitter();
    }
    DetailItemComponent.prototype.onClick = function () {
        this.tap.emit(this);
    };
    return DetailItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DetailItemComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DetailItemComponent.prototype, "color", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DetailItemComponent.prototype, "tap", void 0);
DetailItemComponent = __decorate([
    core_1.Component({
        selector: "detail-item",
        moduleId: module.id,
        template: "\n        <FlexboxLayout (tap)=\"onClick()\">\n            <Label\n                flexGrow=\"1\"\n                [text]=\"label\"\n                [color]=\"color\"></Label>\n            <Image src=\"~/images/arrow_icon.png\" width=\"32\"></Image>\n        </FlexboxLayout>\n    ",
        styles: ["\n        FlexboxLayout {\n            height: 50;\n            padding-left: 10;\n            background-color: #ffffff;\n            border-bottom-color: #d0d0d0;\n            border-bottom-width: 0.5;\n        }\n    "],
    })
], DetailItemComponent);
exports.DetailItemComponent = DetailItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBd0J2RSxJQUFhLG1CQUFtQjtJQXRCaEM7UUF3QmEsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUN6QixRQUFHLEdBQXNDLElBQUksbUJBQVksRUFBRSxDQUFDO0lBSzFFLENBQUM7SUFIRyxxQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFQWTtJQUFSLFlBQUssRUFBRTs7a0RBQWU7QUFDZDtJQUFSLFlBQUssRUFBRTs7a0RBQTJCO0FBQ3pCO0lBQVQsYUFBTSxFQUFFOzhCQUFNLG1CQUFZO2dEQUEyQztBQUg3RCxtQkFBbUI7SUF0Qi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLDJSQVFUO1FBQ0QsTUFBTSxFQUFFLENBQUMsOE5BUVIsQ0FBQztLQUNMLENBQUM7R0FDVyxtQkFBbUIsQ0FRL0I7QUFSWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImRldGFpbC1pdGVtXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8RmxleGJveExheW91dCAodGFwKT1cIm9uQ2xpY2soKVwiPlxyXG4gICAgICAgICAgICA8TGFiZWxcclxuICAgICAgICAgICAgICAgIGZsZXhHcm93PVwiMVwiXHJcbiAgICAgICAgICAgICAgICBbdGV4dF09XCJsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBbY29sb3JdPVwiY29sb3JcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwifi9pbWFnZXMvYXJyb3dfaWNvbi5wbmdcIiB3aWR0aD1cIjMyXCI+PC9JbWFnZT5cclxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIEZsZXhib3hMYXlvdXQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZDBkMGQwO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxJdGVtQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJyM1NzU5NTknO1xyXG4gICAgQE91dHB1dCgpIHRhcDogRXZlbnRFbWl0dGVyPERldGFpbEl0ZW1Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy50YXAuZW1pdCh0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=