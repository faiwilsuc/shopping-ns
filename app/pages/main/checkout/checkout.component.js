"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("nativescript-angular/router");
var animation_1 = require("ui/animation");
var enums_1 = require("ui/enums");
var index_1 = require("../../../services/index");
var CheckoutPickupSubpage;
(function (CheckoutPickupSubpage) {
    CheckoutPickupSubpage[CheckoutPickupSubpage["none"] = 0] = "none";
    CheckoutPickupSubpage[CheckoutPickupSubpage["datePage"] = 1] = "datePage";
    CheckoutPickupSubpage[CheckoutPickupSubpage["timePage"] = 2] = "timePage";
})(CheckoutPickupSubpage = exports.CheckoutPickupSubpage || (exports.CheckoutPickupSubpage = {}));
var CheckoutMode;
(function (CheckoutMode) {
    CheckoutMode[CheckoutMode["delivery"] = 0] = "delivery";
    CheckoutMode[CheckoutMode["pickup"] = 1] = "pickup";
})(CheckoutMode = exports.CheckoutMode || (exports.CheckoutMode = {}));
var CheckoutComponent = (function () {
    function CheckoutComponent(page, routerExtensions, deliveryDateService, deliveryTimeService) {
        // page.actionBarHidden = true;
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.deliveryDateService = deliveryDateService;
        this.deliveryTimeService = deliveryTimeService;
        this.pageTitle = 'Start Order';
        this.title = 'Start Order';
        this.totalPrice = "$16.00";
        this.cartCount = 1;
        this.suburb = "Padstow, NSW";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.code = "";
        this.cardData = [{ icon: "~/images/visa_icon.png", label: "Visa" }, { icon: "~/images/master_icon.png", label: "Master Card" }, { icon: "~/images/amex_icon.jpg", label: "AMEX" },
            { icon: "~/images/paypal_icon.png", label: "PayPal" }, { icon: "~/images/cash_icon.jpg", label: "Cash" }];
        this.selIndex = -1;
        this.requestedTime = "ASAP";
        this.pickType = 0;
        this.streetNo = "";
        this.streetName = "";
        this.deliveryDates = [];
        this.deliveryTimes = [];
        this.showMainpage = true;
        this.showFinalPage = false;
        this.componentSubpage = CheckoutPickupSubpage.none;
        this.CheckoutPickupSubpage = CheckoutPickupSubpage;
        this.componentCheckoutMode = CheckoutMode.delivery; //change the default mode here for development
        this.CheckoutMode = CheckoutMode;
        this.deliveryDateService.getDeliveryDates()
            .subscribe(function (data) { return _this.deliveryDates = data; });
        this.deliveryTimeService.getDeliveryTimes()
            .subscribe(function (data) { return _this.deliveryTimes = data; });
    }
    CheckoutComponent.prototype.back = function () {
        this.routerExtensions.backToPreviousPage();
    };
    CheckoutComponent.prototype.next = function () {
        // this.status = this.status + 1;
        // let firstPage = <View>this.firstPage.nativeElement;
        // let secondPage = <View>this.secondPage.nativeElement;
        // if(this.status==2){
        // 	firstPage = <View>this.secondPage.nativeElement;
        //     secondPage = <View>this.thirdPage.nativeElement;
        // }
        // let animations = [{
        //     target: firstPage,
        //     translate: {x: -360, y: 0},
        //     duration: 250,
        //     curve: AnimationCurve.easeInOut,
        // }, {
        //     target: secondPage,
        //     translate: {x: 0, y: 0},
        //     duration: 250,
        //     curve: AnimationCurve.easeInOut,
        // }];
        // new Animation(animations, false).play();
    };
    CheckoutComponent.prototype.login = function () {
    };
    CheckoutComponent.prototype.placeOrder = function () {
        if (this.selIndex < 0) {
            alert("select payment method!");
            return;
        }
        if (this.pickType == 1) {
            if (!this.selectedDate) {
                alert("select Date!");
                return;
            }
            else if (!this.selectedTime) {
                alert("select Time!");
                return;
            }
            this.requestedTime = this.selectedTime.label + " on " + this.selectedDate.label;
        }
        this.showFinalPage = true;
        var page1 = this.mainpageElement.nativeElement;
        var finalPage = this.finalPageElement.nativeElement;
        var animations = [{
                target: page1,
                translate: { x: -360, y: 0 },
                duration: 250,
                curve: enums_1.AnimationCurve.easeInOut,
            }, {
                target: finalPage,
                translate: { x: 0, y: 0 },
                duration: 250,
                curve: enums_1.AnimationCurve.easeInOut,
            }];
        new animation_1.Animation(animations, false).play();
    };
    CheckoutComponent.prototype.onSelectCard = function (index) {
        this.selIndex = index;
    };
    CheckoutComponent.prototype.onSelType = function (index) {
        this.pickType = index;
    };
    CheckoutComponent.prototype.showDates = function () {
        this.pushNav(CheckoutPickupSubpage.datePage);
    };
    CheckoutComponent.prototype.showTimes = function () {
        this.pushNav(CheckoutPickupSubpage.timePage);
    };
    CheckoutComponent.prototype.onCloseSubpage = function (item) {
        switch (this.componentSubpage) {
            case CheckoutPickupSubpage.datePage: {
                this.selectedDate = item;
                break;
            }
            case CheckoutPickupSubpage.timePage: {
                this.selectedTime = item;
                break;
            }
        }
        this.popNav();
    };
    CheckoutComponent.prototype.pushNav = function (subpage) {
        var _this = this;
        this.componentSubpage = subpage;
        switch (this.componentSubpage) {
            case CheckoutPickupSubpage.datePage: {
                this.title = 'select delivery date';
                break;
            }
            case CheckoutPickupSubpage.timePage: {
                this.title = 'select delivery time';
                break;
            }
            default: {
                this.title = 'select delivery time';
                break;
            }
        }
        var animations = [{
                target: this.mainpageElement.nativeElement,
                translate: { x: -380, y: 0 },
                duration: 250,
                curve: enums_1.AnimationCurve.easeInOut,
            }, {
                target: this.subpageElement.nativeElement,
                translate: { x: 0, y: 0 },
                duration: 250,
                curve: enums_1.AnimationCurve.easeInOut,
            }];
        new animation_1.Animation(animations, false).play()
            .then(function () { return _this.showMainpage = false; });
    };
    CheckoutComponent.prototype.popNav = function () {
        var _this = this;
        if (this.componentSubpage != CheckoutPickupSubpage.none) {
            this.title = this.pageTitle;
            this.showMainpage = true;
            var animations = [{
                    target: this.mainpageElement.nativeElement,
                    translate: { x: 0, y: 0 },
                    duration: 250,
                    curve: enums_1.AnimationCurve.easeInOut,
                }, {
                    target: this.subpageElement.nativeElement,
                    translate: { x: 360, y: 0 },
                    duration: 250,
                    curve: enums_1.AnimationCurve.easeInOut,
                }];
            new animation_1.Animation(animations, false).play()
                .then(function () { return _this.componentSubpage = CheckoutPickupSubpage.none; });
        }
    };
    return CheckoutComponent;
}());
__decorate([
    core_1.ViewChild("mainPage"),
    __metadata("design:type", core_1.ElementRef)
], CheckoutComponent.prototype, "mainpageElement", void 0);
__decorate([
    core_1.ViewChild("finalPage"),
    __metadata("design:type", core_1.ElementRef)
], CheckoutComponent.prototype, "finalPageElement", void 0);
__decorate([
    core_1.ViewChild("subPage"),
    __metadata("design:type", core_1.ElementRef)
], CheckoutComponent.prototype, "subpageElement", void 0);
CheckoutComponent = __decorate([
    core_1.Component({
        selector: 'ns-checkout',
        moduleId: module.id,
        templateUrl: './checkout.component.html',
        styleUrls: ['./checkout.component.css']
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.RouterExtensions,
        index_1.DeliveryDateService,
        index_1.DeliveryTimeService])
], CheckoutComponent);
exports.CheckoutComponent = CheckoutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hlY2tvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9GO0FBRXBGLGdDQUE2QjtBQUM3QixzREFBNkQ7QUFFN0QsMENBQXlDO0FBQ3pDLGtDQUEwQztBQUcxQyxpREFDdUU7QUFFdkUsSUFBWSxxQkFJWDtBQUpELFdBQVkscUJBQXFCO0lBQzdCLGlFQUFJLENBQUE7SUFDSix5RUFBUSxDQUFBO0lBQ1IseUVBQVEsQ0FBQTtBQUNaLENBQUMsRUFKVyxxQkFBcUIsR0FBckIsNkJBQXFCLEtBQXJCLDZCQUFxQixRQUloQztBQUVELElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUNwQix1REFBUSxDQUFBO0lBQ1IsbURBQU0sQ0FBQTtBQUNWLENBQUMsRUFIVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUd2QjtBQVNELElBQWEsaUJBQWlCO0lBdUMxQiwyQkFBWSxJQUFTLEVBQ0QsZ0JBQWtDLEVBQ2xDLG1CQUF3QyxFQUN4QyxtQkFBd0M7UUFFeEQsK0JBQStCO1FBTG5DLGlCQWVDO1FBZG1CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBeENwRCxjQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLFVBQUssR0FBRyxhQUFhLENBQUM7UUFFdEIsZUFBVSxHQUFXLFFBQVEsQ0FBQztRQUM5QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFdBQU0sR0FBVSxjQUFjLENBQUM7UUFDL0IsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsU0FBSSxHQUFVLEVBQUUsQ0FB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QyxDQUFDLENBQUM7WUFDSCxJQUFJLHFCQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRTtpQkFDbEMsSUFBSSxDQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcscUJBQXFCLENBQUMsSUFBSSxFQUFsRCxDQUFrRCxDQUFFLENBQUM7UUFFMUUsQ0FBQztJQUVMLENBQUM7SUFFTCx3QkFBQztBQUFELENBQUMsQUFuTkQsSUFtTkM7QUF6TDBCO0lBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDOzhCQUFrQixpQkFBVTswREFBQztBQUMzQjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBbUIsaUJBQVU7MkRBQUM7QUFDL0I7SUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7OEJBQWlCLGlCQUFVO3lEQUFDO0FBNUJ4QyxpQkFBaUI7SUFQN0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO0tBQzFDLENBQUM7cUNBeUNtQixXQUFJO1FBQ2lCLHlCQUFnQjtRQUNiLDJCQUFtQjtRQUNuQiwyQkFBbUI7R0ExQ25ELGlCQUFpQixDQW1ON0I7QUFuTlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gJ3VpL3BhZ2UnO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tICd1aS9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gJ3VpL2VudW1zJztcclxuXHJcblxyXG5pbXBvcnQgeyBEZWxpdmVyeVRpbWVTZXJ2aWNlLCBEZWxpdmVyeVRpbWUsXHJcbiAgICBEZWxpdmVyeURhdGVTZXJ2aWNlLCBEZWxpdmVyeURhdGUgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG5leHBvcnQgZW51bSBDaGVja291dFBpY2t1cFN1YnBhZ2Uge1xyXG4gICAgbm9uZSxcclxuICAgIGRhdGVQYWdlLFxyXG4gICAgdGltZVBhZ2UsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENoZWNrb3V0TW9kZSB7XHJcbiAgICBkZWxpdmVyeSxcclxuICAgIHBpY2t1cFxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtY2hlY2tvdXQnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jaGVja291dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jaGVja291dC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja291dENvbXBvbmVudCAge1xyXG5cclxuICAgIHByaXZhdGUgcGFnZVRpdGxlID0gJ1N0YXJ0IE9yZGVyJztcclxuICAgIHRpdGxlID0gJ1N0YXJ0IE9yZGVyJztcclxuXHJcbiAgICB0b3RhbFByaWNlOiBzdHJpbmcgPSBcIiQxNi4wMFwiO1xyXG4gICAgY2FydENvdW50OiBudW1iZXIgPSAxO1xyXG4gICAgc3VidXJiOnN0cmluZyA9IFwiUGFkc3RvdywgTlNXXCI7XHJcbiAgICBmaXJzdE5hbWU6c3RyaW5nID0gXCJcIjtcclxuICAgIGxhc3ROYW1lOnN0cmluZyA9IFwiXCI7XHJcbiAgICBlbWFpbDpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcGhvbmVOdW1iZXI6c3RyaW5nID0gXCJcIjtcclxuICAgIGNvZGU6c3RyaW5nID0gXCJcIjtcclxuICAgIGNhcmREYXRhOmFueVtdPVt7aWNvbjpcIn4vaW1hZ2VzL3Zpc2FfaWNvbi5wbmdcIiwgbGFiZWw6XCJWaXNhXCJ9LHtpY29uOlwifi9pbWFnZXMvbWFzdGVyX2ljb24ucG5nXCIsIGxhYmVsOlwiTWFzdGVyIENhcmRcIn0se2ljb246XCJ+L2ltYWdlcy9hbWV4X2ljb24uanBnXCIsIGxhYmVsOlwiQU1FWFwifSxcclxuICAgICAgICB7aWNvbjpcIn4vaW1hZ2VzL3BheXBhbF9pY29uLnBuZ1wiLCBsYWJlbDpcIlBheVBhbFwifSx7aWNvbjpcIn4vaW1hZ2VzL2Nhc2hfaWNvbi5qcGdcIiwgbGFiZWw6XCJDYXNoXCJ9XVxyXG4gICAgc2VsSW5kZXg6IG51bWJlciA9IC0xO1xyXG4gICAgcmVxdWVzdGVkVGltZTpzdHJpbmc9XCJBU0FQXCI7XHJcbiAgICBwaWNrVHlwZTpudW1iZXIgPSAwO1xyXG4gICAgc2VsZWN0ZWREYXRlOiBhbnk7XHJcbiAgICBzZWxlY3RlZFRpbWU6IGFueTtcclxuICAgIHN0cmVldE5vOnN0cmluZz1cIlwiO1xyXG4gICAgc3RyZWV0TmFtZTpzdHJpbmc9XCJcIjtcclxuXHJcbiAgICBkZWxpdmVyeURhdGVzOiBEZWxpdmVyeURhdGVbXSA9IFtdO1xyXG4gICAgZGVsaXZlcnlUaW1lczogRGVsaXZlcnlUaW1lIFtdID0gW107XHJcblxyXG4gICAgQFZpZXdDaGlsZChcIm1haW5QYWdlXCIpIG1haW5wYWdlRWxlbWVudDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJmaW5hbFBhZ2VcIikgZmluYWxQYWdlRWxlbWVudDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJzdWJQYWdlXCIpIHN1YnBhZ2VFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHNob3dNYWlucGFnZSA9IHRydWU7XHJcbiAgICBzaG93RmluYWxQYWdlID0gZmFsc2U7XHJcblxyXG4gICAgY29tcG9uZW50U3VicGFnZSA9IENoZWNrb3V0UGlja3VwU3VicGFnZS5ub25lO1xyXG4gICAgQ2hlY2tvdXRQaWNrdXBTdWJwYWdlID0gQ2hlY2tvdXRQaWNrdXBTdWJwYWdlO1xyXG5cclxuICAgIGNvbXBvbmVudENoZWNrb3V0TW9kZSA9IENoZWNrb3V0TW9kZS5kZWxpdmVyeTsgLy9jaGFuZ2UgdGhlIGRlZmF1bHQgbW9kZSBoZXJlIGZvciBkZXZlbG9wbWVudFxyXG4gICAgQ2hlY2tvdXRNb2RlID0gQ2hlY2tvdXRNb2RlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhZ2U6UGFnZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgZGVsaXZlcnlEYXRlU2VydmljZTogRGVsaXZlcnlEYXRlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgZGVsaXZlcnlUaW1lU2VydmljZTogRGVsaXZlcnlUaW1lU2VydmljZSkge1xyXG5cclxuICAgICAgICAvLyBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgIFxyXG4gICAgICAgIHRoaXMuZGVsaXZlcnlEYXRlU2VydmljZS5nZXREZWxpdmVyeURhdGVzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChkYXRhKSA9PiB0aGlzLmRlbGl2ZXJ5RGF0ZXMgPSBkYXRhXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5kZWxpdmVyeVRpbWVTZXJ2aWNlLmdldERlbGl2ZXJ5VGltZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+IHRoaXMuZGVsaXZlcnlUaW1lcyA9IGRhdGFcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYmFjaygpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCl7XHJcbiAgICAgICAgLy8gdGhpcy5zdGF0dXMgPSB0aGlzLnN0YXR1cyArIDE7XHJcbiAgICAgICAgLy8gbGV0IGZpcnN0UGFnZSA9IDxWaWV3PnRoaXMuZmlyc3RQYWdlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgLy8gbGV0IHNlY29uZFBhZ2UgPSA8Vmlldz50aGlzLnNlY29uZFBhZ2UubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAvLyBpZih0aGlzLnN0YXR1cz09Mil7XHJcbiAgICAgICAgLy8gXHRmaXJzdFBhZ2UgPSA8Vmlldz50aGlzLnNlY29uZFBhZ2UubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAvLyAgICAgc2Vjb25kUGFnZSA9IDxWaWV3PnRoaXMudGhpcmRQYWdlLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGxldCBhbmltYXRpb25zID0gW3tcclxuICAgICAgICAvLyAgICAgdGFyZ2V0OiBmaXJzdFBhZ2UsXHJcbiAgICAgICAgLy8gICAgIHRyYW5zbGF0ZToge3g6IC0zNjAsIHk6IDB9LFxyXG4gICAgICAgIC8vICAgICBkdXJhdGlvbjogMjUwLFxyXG4gICAgICAgIC8vICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0LFxyXG4gICAgICAgIC8vIH0sIHtcclxuICAgICAgICAvLyAgICAgdGFyZ2V0OiBzZWNvbmRQYWdlLFxyXG4gICAgICAgIC8vICAgICB0cmFuc2xhdGU6IHt4OiAwLCB5OiAwfSxcclxuICAgICAgICAvLyAgICAgZHVyYXRpb246IDI1MCxcclxuICAgICAgICAvLyAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dCxcclxuICAgICAgICAvLyB9XTtcclxuICAgICAgICAvLyBuZXcgQW5pbWF0aW9uKGFuaW1hdGlvbnMsIGZhbHNlKS5wbGF5KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlT3JkZXIoKXtcclxuICAgICAgICBpZih0aGlzLnNlbEluZGV4PDApIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJzZWxlY3QgcGF5bWVudCBtZXRob2QhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucGlja1R5cGU9PTEpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5zZWxlY3RlZERhdGUpe1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJzZWxlY3QgRGF0ZSFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZighdGhpcy5zZWxlY3RlZFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJzZWxlY3QgVGltZSFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0ZWRUaW1lID0gdGhpcy5zZWxlY3RlZFRpbWUubGFiZWwgKyBcIiBvbiBcIiArIHRoaXMuc2VsZWN0ZWREYXRlLmxhYmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaG93RmluYWxQYWdlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcGFnZTEgPSA8Vmlldz50aGlzLm1haW5wYWdlRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGxldCBmaW5hbFBhZ2UgPSA8Vmlldz50aGlzLmZpbmFsUGFnZUVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBsZXQgYW5pbWF0aW9ucyA9IFt7XHJcbiAgICAgICAgICAgIHRhcmdldDogcGFnZTEsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZToge3g6IC0zNjAsIHk6IDB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjUwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0LFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBmaW5hbFBhZ2UsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZToge3g6IDAsIHk6IDB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjUwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0LFxyXG4gICAgICAgIH1dO1xyXG4gICAgICAgIG5ldyBBbmltYXRpb24oYW5pbWF0aW9ucywgZmFsc2UpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdENhcmQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2VsSW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbFR5cGUoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMucGlja1R5cGUgPSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoTmF2KENoZWNrb3V0UGlja3VwU3VicGFnZS5kYXRlUGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1RpbWVzKCkge1xyXG4gICAgICAgIHRoaXMucHVzaE5hdihDaGVja291dFBpY2t1cFN1YnBhZ2UudGltZVBhZ2UpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIG9uQ2xvc2VTdWJwYWdlKGl0ZW06IG9iamVjdCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jb21wb25lbnRTdWJwYWdlKXtcclxuICAgICAgICAgICAgY2FzZSBDaGVja291dFBpY2t1cFN1YnBhZ2UuZGF0ZVBhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQ2hlY2tvdXRQaWNrdXBTdWJwYWdlLnRpbWVQYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGltZSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvcE5hdigpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdXNoTmF2KHN1YnBhZ2U6IENoZWNrb3V0UGlja3VwU3VicGFnZSkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudFN1YnBhZ2UgPSBzdWJwYWdlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuY29tcG9uZW50U3VicGFnZSl7XHJcbiAgICAgICAgICAgIGNhc2UgQ2hlY2tvdXRQaWNrdXBTdWJwYWdlLmRhdGVQYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gJ3NlbGVjdCBkZWxpdmVyeSBkYXRlJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQ2hlY2tvdXRQaWNrdXBTdWJwYWdlLnRpbWVQYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gJ3NlbGVjdCBkZWxpdmVyeSB0aW1lJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSAnc2VsZWN0IGRlbGl2ZXJ5IHRpbWUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhbmltYXRpb25zID0gW3tcclxuICAgICAgICAgICAgdGFyZ2V0OiAgPFZpZXc+dGhpcy5tYWlucGFnZUVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7eDogLTM4MCwgeTogMH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXQsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IDxWaWV3PnRoaXMuc3VicGFnZUVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7eDogMCwgeTogMH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5PdXQsXHJcbiAgICAgICAgfV07XHJcbiAgICAgICAgbmV3IEFuaW1hdGlvbihhbmltYXRpb25zLCBmYWxzZSkucGxheSgpXHJcbiAgICAgICAgICAgIC50aGVuKCAoKSA9PiB0aGlzLnNob3dNYWlucGFnZSA9IGZhbHNlICk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wTmF2KCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnRTdWJwYWdlICE9IENoZWNrb3V0UGlja3VwU3VicGFnZS5ub25lKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLnBhZ2VUaXRsZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TWFpbnBhZ2UgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IFt7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICA8Vmlldz50aGlzLm1haW5wYWdlRWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7eDogMCwgeTogMH0sXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjUwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dCxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiA8Vmlldz50aGlzLnN1YnBhZ2VFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7eDogMzYwLCB5OiAwfSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0LFxyXG4gICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgbmV3IEFuaW1hdGlvbihhbmltYXRpb25zLCBmYWxzZSkucGxheSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbiggKCkgPT4gdGhpcy5jb21wb25lbnRTdWJwYWdlID0gQ2hlY2tvdXRQaWNrdXBTdWJwYWdlLm5vbmUgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==