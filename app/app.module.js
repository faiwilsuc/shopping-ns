"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
// used to create fake backend
var index_1 = require("./services/api/fake-data/index");
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var index_2 = require("./services/api/index");
var index_3 = require("./services/index");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var login_modal_module_1 = require("./pages/login-modal/login-modal.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            login_modal_module_1.LoginModule,
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule,
            http_1.NativeScriptHttpModule,
            common_1.CommonModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        entryComponents: [],
        providers: [
            index_3.MainMenuService,
            index_3.IconService,
            index_2.SuburbService,
            index_2.ProductService,
            index_2.DeliveryDateService,
            index_2.DeliveryTimeService,
            // providers used to create fake backend
            index_1.FakeBackendProvider,
            testing_1.MockBackend,
            http_2.BaseRequestOptions
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsMENBQStDO0FBQy9DLGdGQUE4RTtBQUM5RSxrREFBbUU7QUFFbkUsOEJBQThCO0FBQzlCLHdEQUFxRTtBQUNyRSxpREFBb0Q7QUFDcEQsc0NBQW1EO0FBRW5ELDhDQUErRztBQUMvRywwQ0FBZ0U7QUFHaEUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUMvQyw2RUFBcUU7QUFpQ3JFLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQS9CckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLGdDQUFXO1lBQ1gsd0NBQWtCO1lBQ2xCLDhCQUFnQjtZQUNoQiw2QkFBc0I7WUFDdEIscUJBQVk7U0FDZjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxlQUFlLEVBQUUsRUFBRztRQUNwQixTQUFTLEVBQUU7WUFDUCx1QkFBZTtZQUNmLG1CQUFXO1lBQ1gscUJBQWE7WUFDYixzQkFBYztZQUNkLDJCQUFtQjtZQUNuQiwyQkFBbUI7WUFDbkIsd0NBQXdDO1lBQ3hDLDJCQUFtQjtZQUNuQixxQkFBVztZQUNYLHlCQUFrQjtTQUNyQjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbi8vIHVzZWQgdG8gY3JlYXRlIGZha2UgYmFja2VuZFxuaW1wb3J0IHsgRmFrZUJhY2tlbmRQcm92aWRlciB9IGZyb20gJy4vc2VydmljZXMvYXBpL2Zha2UtZGF0YS9pbmRleCc7XG5pbXBvcnQgeyBNb2NrQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAvdGVzdGluZyc7XG5pbXBvcnQgeyBCYXNlUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UsIFN1YnVyYlNlcnZpY2UsIERlbGl2ZXJ5RGF0ZVNlcnZpY2UsIERlbGl2ZXJ5VGltZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS9pbmRleCc7XG5pbXBvcnQgeyBJY29uU2VydmljZSwgTWFpbk1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gJy4vcGFnZXMvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIExvZ2luTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE1haW5NZW51U2VydmljZSxcbiAgICAgICAgSWNvblNlcnZpY2UsXG4gICAgICAgIFN1YnVyYlNlcnZpY2UsXG4gICAgICAgIFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICBEZWxpdmVyeURhdGVTZXJ2aWNlLFxuICAgICAgICBEZWxpdmVyeVRpbWVTZXJ2aWNlLFxuICAgICAgICAvLyBwcm92aWRlcnMgdXNlZCB0byBjcmVhdGUgZmFrZSBiYWNrZW5kXG4gICAgICAgIEZha2VCYWNrZW5kUHJvdmlkZXIsXG4gICAgICAgIE1vY2tCYWNrZW5kLFxuICAgICAgICBCYXNlUmVxdWVzdE9wdGlvbnNcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19