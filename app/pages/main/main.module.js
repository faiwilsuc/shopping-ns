"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("nativescript-angular/router");
var shared_pages_module_1 = require("../shared-pages/shared-pages.module");
var main_component_1 = require("./main.component");
var product_list_component_1 = require("./product-list/product-list.component");
var product_item_component_1 = require("./product-item/product-item.component");
var cart_item_component_1 = require("./cart-item/cart-item.component");
var start_order_modal_component_1 = require("./start-order-modal/start-order-modal.component");
var checkout_component_1 = require("./checkout/checkout.component");
var cart_component_1 = require("./cart/cart.component");
var routes = [
    {
        path: '',
        component: main_component_1.MainComponent,
        children: [
            { path: 'cart', component: cart_component_1.CartComponent },
            { path: 'checkout', component: checkout_component_1.CheckoutComponent },
            { path: '', component: product_list_component_1.ProductListComponent }
        ]
    }
];
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        declarations: [
            cart_component_1.CartComponent,
            checkout_component_1.CheckoutComponent,
            start_order_modal_component_1.StartOrderModalComponent,
            main_component_1.MainComponent,
            product_list_component_1.ProductListComponent,
            product_item_component_1.ProductItemComponent,
            cart_item_component_1.CartItemComponent
        ],
        imports: [
            common_1.CommonModule,
            shared_pages_module_1.SharedPagesModule,
            router_1.NativeScriptRouterModule.forChild(routes)
        ],
        entryComponents: [
            start_order_modal_component_1.StartOrderModalComponent
        ]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0Msc0RBQXVFO0FBRXZFLDJFQUFzRTtBQUN0RSxtREFBZ0Q7QUFDaEQsZ0ZBQTJFO0FBQzNFLGdGQUEyRTtBQUMzRSx1RUFBa0U7QUFDbEUsK0ZBQXlGO0FBQ3pGLG9FQUFnRTtBQUNoRSx3REFBb0Q7QUFFcEQsSUFBTSxNQUFNLEdBQUc7SUFDWDtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDhCQUFhO1FBQ3hCLFFBQVEsRUFBRTtZQUNOLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtZQUMxQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO1lBQ2xELEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7U0FFaEQ7S0FDSjtDQUNKLENBQUM7QUF1QkYsSUFBYSxVQUFVO0lBQXZCO0lBQXlCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixVQUFVO0lBckJ0QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDViw4QkFBYTtZQUNiLHNDQUFpQjtZQUNqQixzREFBd0I7WUFDeEIsOEJBQWE7WUFDYiw2Q0FBb0I7WUFDcEIsNkNBQW9CO1lBQ3BCLHVDQUFpQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNMLHFCQUFZO1lBRVosdUNBQWlCO1lBQ2pCLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDNUM7UUFDRCxlQUFlLEVBQUU7WUFDYixzREFBd0I7U0FDM0I7S0FDSixDQUFDO0dBRVcsVUFBVSxDQUFHO0FBQWIsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge1NoYXJlZFBhZ2VzTW9kdWxlfSBmcm9tICcuLi9zaGFyZWQtcGFnZXMvc2hhcmVkLXBhZ2VzLm1vZHVsZSc7XHJcbmltcG9ydCB7TWFpbkNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Byb2R1Y3RMaXN0Q29tcG9uZW50fSBmcm9tICcuL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtQcm9kdWN0SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2FydEl0ZW1Db21wb25lbnR9IGZyb20gJy4vY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0YXJ0T3JkZXJNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9zdGFydC1vcmRlci1tb2RhbC9zdGFydC1vcmRlci1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NoZWNrb3V0Q29tcG9uZW50fSBmcm9tICcuL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2FydENvbXBvbmVudH0gZnJvbSAnLi9jYXJ0L2NhcnQuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6IE1haW5Db21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgeyBwYXRoOiAnY2FydCcsIGNvbXBvbmVudDogQ2FydENvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdjaGVja291dCcsIGNvbXBvbmVudDogQ2hlY2tvdXRDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBQcm9kdWN0TGlzdENvbXBvbmVudCB9XHJcblxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDYXJ0Q29tcG9uZW50LFxyXG4gICAgICAgIENoZWNrb3V0Q29tcG9uZW50LFxyXG4gICAgICAgIFN0YXJ0T3JkZXJNb2RhbENvbXBvbmVudCxcclxuICAgICAgICBNYWluQ29tcG9uZW50LFxyXG4gICAgICAgIFByb2R1Y3RMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIFByb2R1Y3RJdGVtQ29tcG9uZW50LFxyXG4gICAgICAgIENhcnRJdGVtQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuXHJcbiAgICAgICAgU2hhcmVkUGFnZXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgICAgICBTdGFydE9yZGVyTW9kYWxDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTW9kdWxlIHt9XHJcbiJdfQ==