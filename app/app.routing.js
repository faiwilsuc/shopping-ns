"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: 'test',
        loadChildren: './pages/test/test.module#TestModule'
    },
    {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule',
    },
    {
        path: 'main',
        loadChildren: './pages/main/main.module#MainModule',
    },
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule],
        providers: [
            { provide: core_1.NgModuleFactoryLoader, useClass: router_1.NSModuleFactoryLoader }
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRTtBQUNoRSxzREFBOEY7QUFHOUYsSUFBTSxNQUFNLEdBQVc7SUFFbkIsRUFBSSxJQUFJLEVBQUUsTUFBTTtRQUNaLFlBQVksRUFBRSxxQ0FBcUM7S0FDdEQ7SUFDRDtRQUNJLElBQUksRUFBRSxNQUFNO1FBQ1osWUFBWSxFQUFFLHFDQUFxQztLQUV0RDtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixZQUFZLEVBQUUscUNBQXFDO0tBRXREO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxPQUFPO1FBQ25CLFNBQVMsRUFBRSxNQUFNO0tBQ3BCO0NBRUosQ0FBQztBQVNGLElBQWEsZ0JBQWdCO0lBQTdCO0lBQWdDLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFBakMsSUFBaUM7QUFBcEIsZ0JBQWdCO0lBUDVCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztRQUNuQyxTQUFTLEVBQUU7WUFDUCxFQUFFLE9BQU8sRUFBRSw0QkFBcUIsRUFBRSxRQUFRLEVBQUUsOEJBQXFCLEVBQUU7U0FDdEU7S0FDSixDQUFDO0dBQ1csZ0JBQWdCLENBQUk7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG5cbiAgICB7ICAgcGF0aDogJ3Rlc3QnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICcuL3BhZ2VzL3Rlc3QvdGVzdC5tb2R1bGUjVGVzdE1vZHVsZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ3VzZXInLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICcuL3BhZ2VzL3VzZXIvdXNlci5tb2R1bGUjVXNlck1vZHVsZScsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJ21haW4nLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICcuL3BhZ2VzL21haW4vbWFpbi5tb2R1bGUjTWFpbk1vZHVsZScsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIHJlZGlyZWN0VG86ICcvbWFpbicsXG4gICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXG4gICAgfVxuXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIHVzZUNsYXNzOiBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=