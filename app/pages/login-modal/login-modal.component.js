"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var LoginModalComponent = (function () {
    function LoginModalComponent(params) {
        this.params = params;
        this.email = "";
        this.password = "";
        this.title = "Log in";
        this.confirmLabel = "Log in";
        this.isReset = false;
    }
    LoginModalComponent.prototype.confirm = function () {
        //this.params = { loggedIn: true};
        this.cancel();
    };
    LoginModalComponent.prototype.cancel = function () {
        this.params.closeCallback('close');
    };
    LoginModalComponent.prototype.goResetPassword = function () {
        this.isReset = true;
        this.title = "Reset Password";
        this.confirmLabel = "Continue";
    };
    return LoginModalComponent;
}());
LoginModalComponent = __decorate([
    core_1.Component({
        selector: 'ns-login-modal',
        moduleId: module.id,
        templateUrl: './login-modal.component.html',
        styleUrls: ['./login-modal.component.css']
    }),
    __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
], LoginModalComponent);
exports.LoginModalComponent = LoginModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4tbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLGtFQUFzRTtBQVN0RSxJQUFhLG1CQUFtQjtJQVE1Qiw2QkFBNEIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFOckQsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBVSxRQUFRLENBQUM7UUFDeEIsaUJBQVksR0FBRyxRQUFRLENBQUM7UUFDeEIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUdoQixDQUFDO0lBRU0scUNBQU8sR0FBZDtRQUNJLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVNLG9DQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7SUFFbkMsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxtQkFBbUI7SUFQL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7S0FDN0MsQ0FBQztxQ0FVc0MsZ0NBQWlCO0dBUjVDLG1CQUFtQixDQTBCL0I7QUExQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zLWxvZ2luLW1vZGFsJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4tbW9kYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Nb2RhbENvbXBvbmVudCAge1xyXG5cclxuICAgIGVtYWlsOnN0cmluZyA9IFwiXCI7XHJcbiAgICBwYXNzd29yZDpzdHJpbmcgPSBcIlwiO1xyXG4gICAgdGl0bGU6c3RyaW5nID0gXCJMb2cgaW5cIjtcclxuICAgIGNvbmZpcm1MYWJlbCA9IFwiTG9nIGluXCI7XHJcbiAgICBpc1Jlc2V0ID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgICAgICAvL3RoaXMucGFyYW1zID0geyBsb2dnZWRJbjogdHJ1ZX07XHJcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soJ2Nsb3NlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29SZXNldFBhc3N3b3JkKCl7XHJcbiAgICAgICAgdGhpcy5pc1Jlc2V0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJSZXNldCBQYXNzd29yZFwiO1xyXG4gICAgICAgIHRoaXMuY29uZmlybUxhYmVsID0gXCJDb250aW51ZVwiO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19