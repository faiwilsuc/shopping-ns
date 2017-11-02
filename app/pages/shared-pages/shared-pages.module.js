"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var shared_ui_module_1 = require("../../shared-ui/shared-ui.module");
var header_component_1 = require("./header/header.component");
var shopping_cart_widget_component_1 = require("./shopping-cart-widget/shopping-cart-widget.component");
var SHARED_PAGES_COMPONENTS = [
    shopping_cart_widget_component_1.ShoppingCartWidgetComponent,
    header_component_1.HeaderComponent
];
var SharedPagesModule = (function () {
    function SharedPagesModule() {
    }
    return SharedPagesModule;
}());
SharedPagesModule = __decorate([
    core_1.NgModule({
        declarations: SHARED_PAGES_COMPONENTS,
        imports: [
            common_1.CommonModule,
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            shared_ui_module_1.SharedUIModule
        ],
        exports: [
            shared_ui_module_1.SharedUIModule,
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule
        ].concat(SHARED_PAGES_COMPONENTS),
        entryComponents: []
    })
], SharedPagesModule);
exports.SharedPagesModule = SharedPagesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLXBhZ2VzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC1wYWdlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLGdGQUE4RTtBQUM5RSxzREFBdUU7QUFDdkUscUVBQWtFO0FBRWxFLDhEQUEwRDtBQUMxRCx3R0FBa0c7QUFFbEcsSUFBTSx1QkFBdUIsR0FBRztJQUM1Qiw0REFBMkI7SUFDM0Isa0NBQWU7Q0FDbEIsQ0FBQztBQXFCRixJQUFhLGlCQUFpQjtJQUE5QjtJQUFnQyxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGlCQUFpQjtJQW5CN0IsZUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFLHVCQUF1QjtRQUNyQyxPQUFPLEVBQUU7WUFDTCxxQkFBWTtZQUNaLHdDQUFrQjtZQUNsQixpQ0FBd0I7WUFDeEIsaUNBQWM7U0FDakI7UUFDRCxPQUFPO1lBQ0gsaUNBQWM7WUFDZCx3Q0FBa0I7WUFDbEIsaUNBQXdCO2lCQUNyQix1QkFBdUIsQ0FDN0I7UUFDRCxlQUFlLEVBQUMsRUFFZjtLQUNKLENBQUM7R0FFVyxpQkFBaUIsQ0FBRztBQUFwQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2hhcmVkVUlNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQtdWkvc2hhcmVkLXVpLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2hvcHBpbmdDYXJ0V2lkZ2V0Q29tcG9uZW50fSBmcm9tICcuL3Nob3BwaW5nLWNhcnQtd2lkZ2V0L3Nob3BwaW5nLWNhcnQtd2lkZ2V0LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBTSEFSRURfUEFHRVNfQ09NUE9ORU5UUyA9IFtcclxuICAgIFNob3BwaW5nQ2FydFdpZGdldENvbXBvbmVudCxcclxuICAgIEhlYWRlckNvbXBvbmVudFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogU0hBUkVEX1BBR0VTX0NPTVBPTkVOVFMsXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkVUlNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgU2hhcmVkVUlNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICAuLi5TSEFSRURfUEFHRVNfQ09NUE9ORU5UU1xyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czpbXHJcblxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYXJlZFBhZ2VzTW9kdWxlIHt9XHJcbiJdfQ==