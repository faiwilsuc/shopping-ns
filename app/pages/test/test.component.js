"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var TestComponent = (function () {
    function TestComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.loading = false;
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'ns-test',
        moduleId: module.id,
        templateUrl: './test.component.html',
        styleUrls: ['./test.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBK0Q7QUFRL0QsSUFBYSxhQUFhO0lBSXRCLHVCQUNZLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSDlDLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFLckIsQ0FBQztJQUVMLGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBR0wsb0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQztBQWJZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3RDLENBQUM7cUNBTWdDLHlCQUFnQjtHQUxyQyxhQUFhLENBYXpCO0FBYlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zLXRlc3QnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3Rlc3QuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGVzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG5cclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=