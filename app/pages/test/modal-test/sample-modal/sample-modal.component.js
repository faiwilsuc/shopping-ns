"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var SampleModalComponent = (function () {
    function SampleModalComponent(params) {
        this.params = params;
    }
    SampleModalComponent.prototype.ngOnInit = function () {
    };
    SampleModalComponent.prototype.confirm = function () {
        this.cancel();
    };
    SampleModalComponent.prototype.cancel = function () {
        this.params.closeCallback('close');
    };
    return SampleModalComponent;
}());
SampleModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-sample-modal',
        templateUrl: './sample-modal.component.html',
        styleUrls: ['./sample-modal.component.css']
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
], SampleModalComponent);
exports.SampleModalComponent = SampleModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhbXBsZS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsa0VBQXNFO0FBU3RFLElBQWEsb0JBQW9CO0lBRTdCLDhCQUE0QixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUNyRCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSxzQ0FBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxxQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxvQkFBb0I7SUFOaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7S0FDOUMsQ0FBQztxQ0FHc0MsZ0NBQWlCO0dBRjVDLG9CQUFvQixDQWVoQztBQWZZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICducy1zYW1wbGUtbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NhbXBsZS1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zYW1wbGUtbW9kYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYW1wbGVNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygnY2xvc2UnKTtcclxuICAgIH1cclxufVxyXG4iXX0=