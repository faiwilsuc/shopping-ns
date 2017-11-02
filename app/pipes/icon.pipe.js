"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var icon_service_1 = require("../services/icon.service");
var IconPipe = (function () {
    function IconPipe(iconService) {
        this.iconService = iconService;
    }
    IconPipe.prototype.transform = function (value) {
        return this.iconService.getIconString(value);
    };
    return IconPipe;
}());
IconPipe = __decorate([
    core_1.Pipe({ name: 'icon' }),
    __metadata("design:paramtypes", [icon_service_1.IconService])
], IconPipe);
exports.IconPipe = IconPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaWNvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELHlEQUFxRDtBQUdyRCxJQUFhLFFBQVE7SUFDakIsa0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUUsQ0FBQztJQUMvQyw0QkFBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLFFBQVE7SUFEcEIsV0FBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3FDQUVnQiwwQkFBVztHQURuQyxRQUFRLENBS3BCO0FBTFksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJY29uU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvaWNvbi5zZXJ2aWNlJztcclxuXHJcbkBQaXBlKHtuYW1lOiAnaWNvbid9KVxyXG5leHBvcnQgY2xhc3MgSWNvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaWNvblNlcnZpY2U6IEljb25TZXJ2aWNlKXt9XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWNvblNlcnZpY2UuZ2V0SWNvblN0cmluZyh2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19