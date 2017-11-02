import { NgModule, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { Routes } from "@angular/router";

const routes: Routes = [

    {   path: 'test',
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

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ]
})
export class AppRoutingModule { }