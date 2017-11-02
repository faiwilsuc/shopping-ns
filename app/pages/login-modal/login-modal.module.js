"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var shared_pages_module_1 = require("../shared-pages/shared-pages.module");
var login_modal_component_1 = require("./login-modal.component");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        declarations: [
            login_modal_component_1.LoginModalComponent
        ],
        imports: [
            common_1.CommonModule,
            shared_pages_module_1.SharedPagesModule,
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule
        ],
        entryComponents: [
            login_modal_component_1.LoginModalComponent
        ]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4tbW9kYWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLDBDQUErQztBQUMvQyxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBRXZFLDJFQUFzRTtBQUN0RSxpRUFBNEQ7QUFrQjVELElBQWEsV0FBVztJQUF4QjtJQUVBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksV0FBVztJQWZ2QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDViwyQ0FBbUI7U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDTCxxQkFBWTtZQUNaLHVDQUFpQjtZQUNqQix3Q0FBa0I7WUFDbEIsaUNBQXdCO1NBQzNCO1FBQ0QsZUFBZSxFQUFFO1lBQ2IsMkNBQW1CO1NBQ3RCO0tBQ0osQ0FBQztHQUVXLFdBQVcsQ0FFdkI7QUFGWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge1NoYXJlZFBhZ2VzTW9kdWxlfSBmcm9tICcuLi9zaGFyZWQtcGFnZXMvc2hhcmVkLXBhZ2VzLm1vZHVsZSc7XHJcbmltcG9ydCB7TG9naW5Nb2RhbENvbXBvbmVudH0gZnJvbSAnLi9sb2dpbi1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBMb2dpbk1vZGFsQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTaGFyZWRQYWdlc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgTG9naW5Nb2RhbENvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHtcclxuXHJcbn1cclxuIl19