"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DeliveryTime = (function () {
    function DeliveryTime() {
    }
    return DeliveryTime;
}());
exports.DeliveryTime = DeliveryTime;
var DeliveryTimeService = (function () {
    function DeliveryTimeService(http) {
        this.http = http;
    }
    DeliveryTimeService.prototype.getDeliveryTimes = function () {
        return this.http.get('/api/delivery-times', null)
            .map(function (response) { return response.json(); })
            .map(function (data) { return data; });
    };
    return DeliveryTimeService;
}());
DeliveryTimeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DeliveryTimeService);
exports.DeliveryTimeService = DeliveryTimeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktdGltZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVsaXZlcnktdGltZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxpQ0FBOEI7QUFFOUI7SUFBQTtJQUVBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksb0NBQVk7QUFLekIsSUFBYSxtQkFBbUI7SUFHNUIsNkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTlCLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUU7YUFDakMsR0FBRyxDQUFFLFVBQUEsSUFBSSxJQUFJLE9BQWlCLElBQUksRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBRTdDLENBQUM7SUFJTCwwQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksbUJBQW1CO0lBRC9CLGlCQUFVLEVBQUU7cUNBSWlCLFdBQUk7R0FIckIsbUJBQW1CLENBZ0IvQjtBQWhCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxpdmVyeVRpbWUge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlUaW1lU2VydmljZSB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVsaXZlcnlUaW1lcygpOiBPYnNlcnZhYmxlPERlbGl2ZXJ5VGltZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvZGVsaXZlcnktdGltZXMnLCBudWxsKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSApXHJcbiAgICAgICAgICAgIC5tYXAoIGRhdGEgPT4gPERlbGl2ZXJ5VGltZVtdPiBkYXRhKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19