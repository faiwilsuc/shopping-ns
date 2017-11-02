"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var shared_pages_module_1 = require("../shared-pages/shared-pages.module");
var user_component_1 = require("./user.component");
var account_component_1 = require("./account/account.component");
var routes = [
    {
        path: '',
        component: user_component_1.UserComponent,
        children: [
            { path: '', component: account_component_1.AccountComponent }
        ]
    }
];
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        declarations: [
            account_component_1.AccountComponent,
            user_component_1.UserComponent
        ],
        imports: [
            common_1.CommonModule,
            shared_pages_module_1.SharedPagesModule,
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forChild(routes)
        ],
        entryComponents: []
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUV2RSwyRUFBc0U7QUFFdEUsbURBQStDO0FBQy9DLGlFQUE2RDtBQUU3RCxJQUFNLE1BQU0sR0FBRztJQUNYO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsOEJBQWE7UUFDeEIsUUFBUSxFQUFFO1lBQ04sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtTQUM1QztLQUNKO0NBQ0osQ0FBQztBQW9CRixJQUFhLFVBQVU7SUFBdkI7SUFBeUIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFVBQVU7SUFsQnRCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLG9DQUFnQjtZQUNoQiw4QkFBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLHFCQUFZO1lBRVosdUNBQWlCO1lBQ2pCLHdDQUFrQjtZQUNsQixpQ0FBd0I7WUFDeEIsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUM1QztRQUNELGVBQWUsRUFBRSxFQUVoQjtLQUNKLENBQUM7R0FFVyxVQUFVLENBQUc7QUFBYixnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7U2hhcmVkUGFnZXNNb2R1bGV9IGZyb20gJy4uL3NoYXJlZC1wYWdlcy9zaGFyZWQtcGFnZXMubW9kdWxlJztcclxuXHJcbmltcG9ydCB7VXNlckNvbXBvbmVudH0gZnJvbSAnLi91c2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QWNjb3VudENvbXBvbmVudH0gZnJvbSAnLi9hY2NvdW50L2FjY291bnQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6IFVzZXJDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBBY2NvdW50Q29tcG9uZW50IH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQWNjb3VudENvbXBvbmVudCxcclxuICAgICAgICBVc2VyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuXHJcbiAgICAgICAgU2hhcmVkUGFnZXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG5cclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlIHt9XHJcbiJdfQ==