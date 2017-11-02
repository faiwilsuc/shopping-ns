"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_1 = require("nativescript-angular/router");
var main_menu_service_1 = require("../../../services/main-menu.service");
var login_modal_component_1 = require("../../login-modal/login-modal.component");
var HeaderComponent = (function () {
    function HeaderComponent(routerExtensions, viewContainerRef, modalService, mainMenuService) {
        this.routerExtensions = routerExtensions;
        this.viewContainerRef = viewContainerRef;
        this.modalService = modalService;
        this.mainMenuService = mainMenuService;
        this.showMainMenu = false;
        this.isAuthenticated = false;
    }
    Object.defineProperty(HeaderComponent.prototype, "navBtnVisible", {
        get: function () {
            return this.routerExtensions.canGoBack();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "mainMenuItems", {
        get: function () {
            return this.mainMenuService.mainMenuItems;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.onNavBtnTap = function () {
        this.routerExtensions.back();
    };
    HeaderComponent.prototype.onToggleMainMenu = function () {
        this.showMainMenu = !this.showMainMenu;
    };
    HeaderComponent.prototype.onNavToMain = function () {
        this.routerExtensions.navigate(['/main'], { clearHistory: false });
    };
    HeaderComponent.prototype.onMainMenuNavigate = function (route) {
        this.showMainMenu = false;
        this.routerExtensions.navigate([route], { clearHistory: false });
    };
    HeaderComponent.prototype.onLogin = function () {
        this.showMainMenu = false;
        if (this.isAuthenticated) {
            this.isAuthenticated = false;
        }
        else {
            var options = {
                context: {},
                fullscreen: false,
                viewContainerRef: this.viewContainerRef
            };
            this.modalService.showModal(login_modal_component_1.LoginModalComponent, options);
        }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'ns-header',
        moduleId: module.id,
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions,
        core_1.ViewContainerRef,
        modal_dialog_1.ModalDialogService,
        main_menu_service_1.MainMenuService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsa0VBQTJGO0FBQzNGLHNEQUFnRTtBQUVoRSx5RUFBbUY7QUFDbkYsaUZBQThFO0FBVTlFLElBQWEsZUFBZTtJQUt4Qix5QkFBb0IsZ0JBQWtDLEVBQ2xDLGdCQUFrQyxFQUNsQyxZQUFnQyxFQUNoQyxlQUFnQztRQUhoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQU5wRCxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixvQkFBZSxHQUFHLEtBQUssQ0FBQztJQU94QixDQUFDO0lBRUQsc0JBQUksMENBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMENBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCwwQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFDRCw0Q0FBa0IsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0lBRUQsaUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQU0sT0FBTyxHQUF1QjtnQkFDaEMsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsVUFBVSxFQUFDLEtBQUs7Z0JBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7YUFDMUMsQ0FBQztZQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLDJDQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlELENBQUM7SUFDTCxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLGVBQWU7SUFOM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO0tBQ3hDLENBQUM7cUNBTXdDLHlCQUFnQjtRQUNoQix1QkFBZ0I7UUFDcEIsaUNBQWtCO1FBQ2YsbUNBQWU7R0FSM0MsZUFBZSxDQWtEM0I7QUFsRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHtNYWluTWVudVNlcnZpY2UsIE1haW5NZW51SXRlbSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21haW4tbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9naW5Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tYWluL2NhcnQvY2FydC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICducy1oZWFkZXInLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XHJcblxyXG4gICAgc2hvd01haW5NZW51ID0gZmFsc2U7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBtYWluTWVudVNlcnZpY2U6IE1haW5NZW51U2VydmljZSl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBuYXZCdG5WaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlckV4dGVuc2lvbnMuY2FuR29CYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1haW5NZW51SXRlbXMoKTpNYWluTWVudUl0ZW1bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbk1lbnVTZXJ2aWNlLm1haW5NZW51SXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZCdG5UYXAoKXtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9nZ2xlTWFpbk1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TWFpbk1lbnUgPSAhdGhpcy5zaG93TWFpbk1lbnU7XHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZUb01haW4oKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL21haW4nXSwge2NsZWFySGlzdG9yeTpmYWxzZX0pXHJcbiAgICB9XHJcbiAgICBvbk1haW5NZW51TmF2aWdhdGUocm91dGU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2hvd01haW5NZW51ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtyb3V0ZV0sIHtjbGVhckhpc3Rvcnk6ZmFsc2V9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TWFpbk1lbnUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgICAgICAgICAgZnVsbHNjcmVlbjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoTG9naW5Nb2RhbENvbXBvbmVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=