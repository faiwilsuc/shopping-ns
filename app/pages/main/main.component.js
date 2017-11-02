"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var MainComponent = (function () {
    function MainComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.loading = false;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        selector: "ns-main",
        moduleId: module.id,
        templateUrl: "./main.component.html",
        styleUrls: ["./main.component.css"],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFRL0QsSUFBYSxhQUFhO0lBSXRCLHVCQUNZLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSDlDLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFLckIsQ0FBQztJQUVMLGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBR0wsb0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3RDLENBQUM7cUNBTWdDLHlCQUFnQjtHQUxyQyxhQUFhLENBYXpCO0FBYlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtbWFpblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbWFpbi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL21haW4uY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19