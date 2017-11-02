"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IconService = (function () {
    function IconService() {
        this.iconMap = new Map([
            ['arrow-left', 0xf060],
            ['star', 0xf005],
            ['up-arrow', 0xf106],
            ['down-arrow', 0xf107],
            ['circle', 0xf10c],
            ['filled-circle', 0xf111],
            ['basket', 0xf291],
            ['menu', 0xf0c9],
            ['close', 0xf00d],
            ['add', 0xf196]
        ]);
    }
    IconService.prototype.getIconString = function (iconName) {
        return String.fromCharCode(this.iconMap.get(iconName));
    };
    return IconService;
}());
IconService = __decorate([
    core_1.Injectable()
], IconService);
exports.IconService = IconService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLElBQWEsV0FBVztJQUR4QjtRQUdZLFlBQU8sR0FBd0IsSUFBSSxHQUFHLENBQWlCO1lBQzNELENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztZQUN0QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7WUFDaEIsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO1lBQ3BCLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQztZQUN0QixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7WUFDbEIsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDO1lBQ3pCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztZQUNsQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7WUFDaEIsQ0FBQyxPQUFPLEVBQUMsTUFBTSxDQUFDO1lBQ2hCLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQztTQUNqQixDQUFDLENBQUM7SUFNUCxDQUFDO0lBSlUsbUNBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtHQUNBLFdBQVcsQ0FtQnZCO0FBbkJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSWNvblNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgaWNvbk1hcDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KFtcclxuICAgICAgICBbJ2Fycm93LWxlZnQnLCAweGYwNjBdLFxyXG4gICAgICAgIFsnc3RhcicsIDB4ZjAwNV0sXHJcbiAgICAgICAgWyd1cC1hcnJvdycsIDB4ZjEwNl0sXHJcbiAgICAgICAgWydkb3duLWFycm93JywgMHhmMTA3XSxcclxuICAgICAgICBbJ2NpcmNsZScsIDB4ZjEwY10sXHJcbiAgICAgICAgWydmaWxsZWQtY2lyY2xlJywgMHhmMTExXSxcclxuICAgICAgICBbJ2Jhc2tldCcsIDB4ZjI5MV0sXHJcbiAgICAgICAgWydtZW51JywgMHhmMGM5XSxcclxuICAgICAgICBbJ2Nsb3NlJywweGYwMGRdLFxyXG4gICAgICAgIFsnYWRkJywweGYxOTZdXHJcbiAgICBdKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0SWNvblN0cmluZyhpY29uTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmljb25NYXAuZ2V0KGljb25OYW1lKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==