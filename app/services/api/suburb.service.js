"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Suburb = (function () {
    function Suburb() {
    }
    return Suburb;
}());
exports.Suburb = Suburb;
var SuburbService = (function () {
    function SuburbService(http) {
        var _this = this;
        this.http = http;
        this._suburbs = [];
        this.getSuburbs().subscribe(function (data) { return _this._suburbs = data; });
    }
    SuburbService.prototype.getSuburbs = function () {
        return this.http.get('/api/suburbs', null)
            .map(function (response) { return response.json(); })
            .map(function (data) { return data; });
    };
    Object.defineProperty(SuburbService.prototype, "suburbs", {
        get: function () {
            return this._suburbs;
        },
        enumerable: true,
        configurable: true
    });
    return SuburbService;
}());
SuburbService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SuburbService);
exports.SuburbService = SuburbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidXJiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdWJ1cmIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFFeEQsaUNBQThCO0FBRTlCO0lBQUE7SUFHQSxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksd0JBQU07QUFNbkIsSUFBYSxhQUFhO0lBSXRCLHVCQUFvQixJQUFVO1FBQTlCLGlCQUlDO1FBSm1CLFNBQUksR0FBSixJQUFJLENBQU07UUFGdEIsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUN2QixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFwQixDQUFvQixDQUMvQixDQUFDO0lBQ04sQ0FBQztJQUVPLGtDQUFVLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUM7YUFDckMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBRTthQUNqQyxHQUFHLENBQUUsVUFBQSxJQUFJLElBQUksT0FBVyxJQUFJLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHNCQUFJLGtDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVMLG9CQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBS2lCLFdBQUk7R0FKckIsYUFBYSxDQW9CekI7QUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJ1cmIge1xyXG4gICAgcG9zdGNvZGU6IG51bWJlcjtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN1YnVyYlNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnVyYnM6IFN1YnVyYltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwICkge1xyXG4gICAgICAgIHRoaXMuZ2V0U3VidXJicygpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLl9zdWJ1cmJzID0gZGF0YVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTdWJ1cmJzKCk6IE9ic2VydmFibGU8U3VidXJiW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnL2FwaS9zdWJ1cmJzJywgbnVsbClcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgKVxyXG4gICAgICAgICAgICAubWFwKCBkYXRhID0+IDxTdWJ1cmJbXT4gZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN1YnVyYnMoKSA6U3VidXJiW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJ1cmJzO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=