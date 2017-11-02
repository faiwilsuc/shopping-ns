"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var shared_pages_module_1 = require("../shared-pages/shared-pages.module");
var test_component_1 = require("./test.component");
var index_1 = require("./modal-test/index");
var routers = [
    {
        path: '',
        component: test_component_1.TestComponent,
        children: [
            { path: '', component: index_1.ModalTestComponent }
        ]
    }
];
var TestModule = (function () {
    function TestModule() {
    }
    return TestModule;
}());
TestModule = __decorate([
    core_1.NgModule({
        declarations: [
            index_1.SampleModalComponent,
            index_1.ModalTestComponent,
            test_component_1.TestComponent
        ],
        imports: [
            common_1.CommonModule,
            shared_pages_module_1.SharedPagesModule,
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forChild(routers)
        ],
        entryComponents: [
            index_1.ModalTestComponent,
            index_1.SampleModalComponent
        ]
    })
], TestModule);
exports.TestModule = TestModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUV2RSwyRUFBc0U7QUFFdEUsbURBQStDO0FBQy9DLDRDQUE0RTtBQUU1RSxJQUFNLE9BQU8sR0FBRztJQUNaO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsOEJBQWE7UUFDeEIsUUFBUSxFQUFFO1lBQ04sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSwwQkFBa0IsRUFBRTtTQUM5QztLQUNKO0NBQ0osQ0FBQztBQXVCRixJQUFhLFVBQVU7SUFBdkI7SUFBeUIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFVBQVU7SUFyQnRCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDRCQUFvQjtZQUNwQiwwQkFBa0I7WUFDbEIsOEJBQWE7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDTCxxQkFBWTtZQUVaLHVDQUFpQjtZQUNqQix3Q0FBa0I7WUFDbEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7U0FDN0M7UUFDRCxlQUFlLEVBQUU7WUFDYiwwQkFBa0I7WUFDbEIsNEJBQW9CO1NBRXZCO0tBQ0osQ0FBQztHQUVXLFVBQVUsQ0FBRztBQUFiLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHtTaGFyZWRQYWdlc01vZHVsZX0gZnJvbSAnLi4vc2hhcmVkLXBhZ2VzL3NoYXJlZC1wYWdlcy5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHtUZXN0Q29tcG9uZW50fSBmcm9tICcuL3Rlc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtNb2RhbFRlc3RDb21wb25lbnQsIFNhbXBsZU1vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsLXRlc3QvaW5kZXgnO1xyXG5cclxuY29uc3Qgcm91dGVycyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6IFRlc3RDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBNb2RhbFRlc3RDb21wb25lbnQgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTYW1wbGVNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBNb2RhbFRlc3RDb21wb25lbnQsXHJcbiAgICAgICAgVGVzdENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcblxyXG4gICAgICAgIFNoYXJlZFBhZ2VzTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcnMpXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgTW9kYWxUZXN0Q29tcG9uZW50LFxyXG4gICAgICAgIFNhbXBsZU1vZGFsQ29tcG9uZW50XHJcblxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RNb2R1bGUge31cclxuIl19