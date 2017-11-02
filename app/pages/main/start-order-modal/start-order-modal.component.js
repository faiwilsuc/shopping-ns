"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var enums_1 = require("ui/enums");
var animation_1 = require("ui/animation");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var index_1 = require("../../../services/index");
var StartOrderSubpage;
(function (StartOrderSubpage) {
    StartOrderSubpage[StartOrderSubpage["none"] = 0] = "none";
    StartOrderSubpage[StartOrderSubpage["suburbsPage"] = 1] = "suburbsPage";
    StartOrderSubpage[StartOrderSubpage["datePage"] = 2] = "datePage";
    StartOrderSubpage[StartOrderSubpage["timePage"] = 3] = "timePage";
})(StartOrderSubpage = exports.StartOrderSubpage || (exports.StartOrderSubpage = {}));
var StartOrderModalComponent = (function () {
    function StartOrderModalComponent(params, suburbService, deliveryDateService, deliveryTimeService) {
        var _this = this;
        this.params = params;
        this.suburbService = suburbService;
        this.deliveryDateService = deliveryDateService;
        this.deliveryTimeService = deliveryTimeService;
        this.pageTitle = 'Start Order';
        this.title = 'Start Order';
        this.showMainpage = true;
        this.componentSubpage = StartOrderSubpage.none;
        this.StartOrderSubpage = StartOrderSubpage;
        this.orderTypes = [{ label: 'Delivery' }, { label: 'Pick up' }];
        this.deliveryDates = [];
        this.deliveryTimes = [];
        this.deliveryDateService.getDeliveryDates()
            .subscribe(function (data) { return _this.deliveryDates = data; });
        this.deliveryTimeService.getDeliveryTimes()
            .subscribe(function (data) { return _this.deliveryTimes = data; });
    }
    Object.defineProperty(StartOrderModalComponent.prototype, "showModalButtons", {
        get: function () {
            return this.showMainpage;
        },
        enumerable: true,
        configurable: true
    });
    StartOrderModalComponent.prototype.pushNav = function (subpage) {
        var _this = this;
        this.componentSubpage = subpage;
        switch (this.componentSubpage) {
            case StartOrderSubpage.suburbsPage: {
                this.title = 'select suburb';
                break;
            }
            case StartOrderSubpage.datePage: {
                this.title = 'select delivery date';
                break;
            }
            case StartOrderSubpage.timePage: {
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
                translate: { x: -360, y: 0 },
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
    StartOrderModalComponent.prototype.popNav = function () {
        var _this = this;
        if (this.componentSubpage != StartOrderSubpage.none) {
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
                .then(function () { return _this.componentSubpage = StartOrderSubpage.none; });
        }
    };
    StartOrderModalComponent.prototype.confirm = function () {
        this.cancel();
    };
    StartOrderModalComponent.prototype.cancel = function () {
        this.params.closeCallback('close');
    };
    StartOrderModalComponent.prototype.onSelectedType = function (item) {
    };
    StartOrderModalComponent.prototype.showSuburbs = function () {
        this.pushNav(StartOrderSubpage.suburbsPage);
    };
    StartOrderModalComponent.prototype.showDates = function () {
        this.pushNav(StartOrderSubpage.datePage);
    };
    StartOrderModalComponent.prototype.showTimes = function () {
        this.pushNav(StartOrderSubpage.timePage);
    };
    StartOrderModalComponent.prototype.onCloseSubpage = function (item) {
        switch (this.componentSubpage) {
            case StartOrderSubpage.suburbsPage: {
                this.selectedSuburb = item;
                break;
            }
            case StartOrderSubpage.datePage: {
                this.selectedDate = item;
                break;
            }
            case StartOrderSubpage.timePage: {
                this.selectedTime = item;
                break;
            }
        }
        this.popNav();
    };
    return StartOrderModalComponent;
}());
__decorate([
    core_1.ViewChild('mainPage'),
    __metadata("design:type", core_1.ElementRef)
], StartOrderModalComponent.prototype, "mainpageElement", void 0);
__decorate([
    core_1.ViewChild('subPage'),
    __metadata("design:type", core_1.ElementRef)
], StartOrderModalComponent.prototype, "subpageElement", void 0);
StartOrderModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-start-order-modal',
        templateUrl: './start-order-modal.component.html',
        styleUrls: ['./start-order-modal.component.css']
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
        index_1.SuburbService,
        index_1.DeliveryDateService,
        index_1.DeliveryTimeService])
], StartOrderModalComponent);
exports.StartOrderModalComponent = StartOrderModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtb3JkZXItbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhcnQtb3JkZXItbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBR3ZFLGtDQUEwQztBQUMxQywwQ0FBeUM7QUFHekMsa0VBQXNFO0FBRXRFLGlEQUUyRTtBQUczRSxJQUFZLGlCQUtYO0FBTEQsV0FBWSxpQkFBaUI7SUFDekIseURBQUksQ0FBQTtJQUNKLHVFQUFXLENBQUE7SUFDWCxpRUFBUSxDQUFBO0lBQ1IsaUVBQVEsQ0FBQTtBQUNaLENBQUMsRUFMVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUs1QjtBQVFELElBQWEsd0JBQXdCO0lBc0JqQyxrQ0FBNEIsTUFBeUIsRUFDekIsYUFBNEIsRUFDNUIsbUJBQXdDLEVBQ3hDLG1CQUF3QztRQUhwRSxpQkFjQztRQWQyQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUF2QjVELGNBQVMsR0FBRyxhQUFhLENBQUM7UUFDbEMsVUFBSyxHQUFHLGFBQWEsQ0FBQztRQUt0QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVwQixxQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFDMUMsc0JBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFFdEMsZUFBVSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUUzRCxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBb0IsRUFBRSxDQUFDO1FBV2hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRTthQUN0QyxT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RyxJQUFJLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQztZQUNWLENBQUM7WUFDRCxLQUFLLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFbEIsQ0FBQztJQUdMLCtCQUFDO0FBQUQsQ0FBQyxBQXZKRCxJQXVKQztBQWxKMEI7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQWtCLGlCQUFVO2lFQUFDO0FBQzdCO0lBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDOzhCQUFpQixpQkFBVTtnRUFBQztBQU54Qyx3QkFBd0I7SUFOcEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFdBQVcsRUFBRSxvQ0FBb0M7UUFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7S0FDbkQsQ0FBQztxQ0F1QnNDLGdDQUFpQjtRQUNWLHFCQUFhO1FBQ1AsMkJBQW1CO1FBQ25CLDJCQUFtQjtHQXpCM0Qsd0JBQXdCLENBdUpwQztBQXZKWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3VpL2NvcmUvdmlldyc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSAndWkvZW51bXMnO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tICd1aS9hbmltYXRpb24nO1xyXG5cclxuXHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcclxuXHJcbmltcG9ydCB7IFN1YnVyYlNlcnZpY2UsIFN1YnVyYixcclxuICAgICAgICBEZWxpdmVyeVRpbWVTZXJ2aWNlLCBEZWxpdmVyeVRpbWUsXHJcbiAgICAgICAgRGVsaXZlcnlEYXRlU2VydmljZSwgRGVsaXZlcnlEYXRlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvaW5kZXgnO1xyXG5cclxuXHJcbmV4cG9ydCBlbnVtIFN0YXJ0T3JkZXJTdWJwYWdlIHtcclxuICAgIG5vbmUsXHJcbiAgICBzdWJ1cmJzUGFnZSxcclxuICAgIGRhdGVQYWdlLFxyXG4gICAgdGltZVBhZ2VcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICducy1zdGFydC1vcmRlci1tb2RhbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3RhcnQtb3JkZXItbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc3RhcnQtb3JkZXItbW9kYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGFydE9yZGVyTW9kYWxDb21wb25lbnQgIHtcclxuXHJcbiAgICBwcml2YXRlIHBhZ2VUaXRsZSA9ICdTdGFydCBPcmRlcic7XHJcbiAgICB0aXRsZSA9ICdTdGFydCBPcmRlcic7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnbWFpblBhZ2UnKSBtYWlucGFnZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdzdWJQYWdlJykgc3VicGFnZUVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgc2hvd01haW5wYWdlID0gdHJ1ZTtcclxuXHJcbiAgICBjb21wb25lbnRTdWJwYWdlID0gU3RhcnRPcmRlclN1YnBhZ2Uubm9uZTtcclxuICAgIFN0YXJ0T3JkZXJTdWJwYWdlID0gU3RhcnRPcmRlclN1YnBhZ2U7XHJcblxyXG4gICAgb3JkZXJUeXBlcyA9IFt7IGxhYmVsOiAnRGVsaXZlcnknIH0sIHsgbGFiZWw6ICdQaWNrIHVwJyB9XTtcclxuXHJcbiAgICBkZWxpdmVyeURhdGVzOiBEZWxpdmVyeURhdGVbXSA9IFtdO1xyXG4gICAgZGVsaXZlcnlUaW1lczogRGVsaXZlcnlUaW1lIFtdID0gW107XHJcblxyXG4gICAgc2VsZWN0ZWRTdWJ1cmI6IG9iamVjdDtcclxuICAgIHNlbGVjdGVkRGF0ZTogb2JqZWN0O1xyXG4gICAgc2VsZWN0ZWRUaW1lOiBvYmplY3Q7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgc3VidXJiU2VydmljZTogU3VidXJiU2VydmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBkZWxpdmVyeURhdGVTZXJ2aWNlOiBEZWxpdmVyeURhdGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGRlbGl2ZXJ5VGltZVNlcnZpY2U6IERlbGl2ZXJ5VGltZVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kZWxpdmVyeURhdGVTZXJ2aWNlLmdldERlbGl2ZXJ5RGF0ZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+IHRoaXMuZGVsaXZlcnlEYXRlcyA9IGRhdGFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmRlbGl2ZXJ5VGltZVNlcnZpY2UuZ2V0RGVsaXZlcnlUaW1lcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4gdGhpcy5kZWxpdmVyeVRpbWVzID0gZGF0YVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IHNob3dNb2RhbEJ1dHRvbnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd01haW5wYWdlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHB1c2hOYXYoc3VicGFnZTogU3RhcnRPcmRlclN1YnBhZ2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRTdWJwYWdlID0gc3VicGFnZTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvbXBvbmVudFN1YnBhZ2Upe1xyXG4gICAgICAgICAgICBjYXNlIFN0YXJ0T3JkZXJTdWJwYWdlLnN1YnVyYnNQYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gJ3NlbGVjdCBzdWJ1cmInO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTdGFydE9yZGVyU3VicGFnZS5kYXRlUGFnZToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9ICdzZWxlY3QgZGVsaXZlcnkgZGF0ZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFN0YXJ0T3JkZXJTdWJwYWdlLnRpbWVQYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gJ3NlbGVjdCBkZWxpdmVyeSB0aW1lJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSAnc2VsZWN0IGRlbGl2ZXJ5IHRpbWUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IFt7XHJcbiAgICAgICAgICAgICB0YXJnZXQ6ICA8Vmlldz50aGlzLm1haW5wYWdlRWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgICAgdHJhbnNsYXRlOiB7eDogLTM2MCwgeTogMH0sXHJcbiAgICAgICAgICAgICBkdXJhdGlvbjogMjUwLFxyXG4gICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dCxcclxuICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgdGFyZ2V0OiA8Vmlldz50aGlzLnN1YnBhZ2VFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICB0cmFuc2xhdGU6IHt4OiAwLCB5OiAwfSxcclxuICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXHJcbiAgICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0LFxyXG4gICAgICAgICB9XTtcclxuICAgICAgICAgbmV3IEFuaW1hdGlvbihhbmltYXRpb25zLCBmYWxzZSkucGxheSgpXHJcbiAgICAgICAgICAgICAudGhlbiggKCkgPT4gdGhpcy5zaG93TWFpbnBhZ2UgPSBmYWxzZSApO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcE5hdigpIHtcclxuXHJcbiAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudFN1YnBhZ2UgIT0gU3RhcnRPcmRlclN1YnBhZ2Uubm9uZSkge1xyXG4gICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMucGFnZVRpdGxlO1xyXG4gICAgICAgICAgICAgdGhpcy5zaG93TWFpbnBhZ2UgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBbe1xyXG4gICAgICAgICAgICAgICAgIHRhcmdldDogIDxWaWV3PnRoaXMubWFpbnBhZ2VFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7eDogMCwgeTogMH0sXHJcbiAgICAgICAgICAgICAgICAgZHVyYXRpb246IDI1MCxcclxuICAgICAgICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0LFxyXG4gICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgIHRhcmdldDogPFZpZXc+dGhpcy5zdWJwYWdlRWxlbWVudC5uYXRpdmVFbGVtZW50ICxcclxuICAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHt4OiAzNjAsIHk6IDB9LFxyXG4gICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTAsXHJcbiAgICAgICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJbk91dCxcclxuICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICAgbmV3IEFuaW1hdGlvbihhbmltYXRpb25zLCBmYWxzZSkucGxheSgpXHJcbiAgICAgICAgICAgICAgICAgLnRoZW4oICgpID0+IHRoaXMuY29tcG9uZW50U3VicGFnZSA9IFN0YXJ0T3JkZXJTdWJwYWdlLm5vbmUgKTtcclxuXHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygnY2xvc2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdGVkVHlwZShpdGVtOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1N1YnVyYnMoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoTmF2KFN0YXJ0T3JkZXJTdWJwYWdlLnN1YnVyYnNQYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoTmF2KFN0YXJ0T3JkZXJTdWJwYWdlLmRhdGVQYWdlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvd1RpbWVzKCkge1xyXG4gICAgICAgIHRoaXMucHVzaE5hdihTdGFydE9yZGVyU3VicGFnZS50aW1lUGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZVN1YnBhZ2UoaXRlbTogb2JqZWN0KSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmNvbXBvbmVudFN1YnBhZ2Upe1xyXG4gICAgICAgICAgICBjYXNlIFN0YXJ0T3JkZXJTdWJwYWdlLnN1YnVyYnNQYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU3VidXJiID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU3RhcnRPcmRlclN1YnBhZ2UuZGF0ZVBhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU3RhcnRPcmRlclN1YnBhZ2UudGltZVBhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUaW1lID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9wTmF2KCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19