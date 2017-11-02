"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DeliveryDate = (function () {
    function DeliveryDate() {
    }
    return DeliveryDate;
}());
exports.DeliveryDate = DeliveryDate;
var DeliveryDateService = (function () {
    function DeliveryDateService(http) {
        this.http = http;
    }
    DeliveryDateService.prototype.getDeliveryDates = function () {
        return this.http.get('/api/delivery-dates', null)
            .map(function (response) { return response.json(); })
            .map(function (data) { return data; });
    };
    return DeliveryDateService;
}());
DeliveryDateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DeliveryDateService);
exports.DeliveryDateService = DeliveryDateService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnktZGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVsaXZlcnktZGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxpQ0FBOEI7QUFFOUI7SUFBQTtJQUdBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksb0NBQVk7QUFNekIsSUFBYSxtQkFBbUI7SUFHNUIsNkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBRTlCLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUU7YUFDakMsR0FBRyxDQUFFLFVBQUEsSUFBSSxJQUFJLE9BQWlCLElBQUksRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBRTdDLENBQUM7SUFJTCwwQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksbUJBQW1CO0lBRC9CLGlCQUFVLEVBQUU7cUNBSWlCLFdBQUk7R0FIckIsbUJBQW1CLENBZ0IvQjtBQWhCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWxpdmVyeURhdGUge1xyXG4gICAgZGF0ZTogRGF0ZTtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5RGF0ZVNlcnZpY2Uge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAgKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldERlbGl2ZXJ5RGF0ZXMoKTogT2JzZXJ2YWJsZTxEZWxpdmVyeURhdGVbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL2RlbGl2ZXJ5LWRhdGVzJywgbnVsbClcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgKVxyXG4gICAgICAgICAgICAubWFwKCBkYXRhID0+IDxEZWxpdmVyeURhdGVbXT4gZGF0YSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==