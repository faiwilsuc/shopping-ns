"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateFormat = require('dateformat');
var FakeDeliveryDates = (function () {
    function FakeDeliveryDates() {
    }
    FakeDeliveryDates.get = function () {
        var rtn = [];
        var today = new Date().getTime();
        for (var i = 0; i < 7; i++) {
            var date = new Date(today + i * 24 * 3600 * 1000);
            rtn.push({
                date: date,
                label: dateFormat(date, "ddd dS mmm")
            });
        }
        return rtn;
    };
    return FakeDeliveryDates;
}());
exports.FakeDeliveryDates = FakeDeliveryDates;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZS1kZWxpdmVyeS1kYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZha2UtZGVsaXZlcnktZGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFekM7SUFBQTtJQW1CQSxDQUFDO0lBakJXLHFCQUFHLEdBQVg7UUFFSSxJQUFNLEdBQUcsR0FBbUIsRUFBRSxDQUFDO1FBRS9CLElBQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QixJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxHQUFDLEVBQUUsR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDTCxJQUFJLE1BQUE7Z0JBQ0osS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDO2FBQ3hDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBRWYsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RlbGl2ZXJ5RGF0ZX0gZnJvbSAnLi4vZGVsaXZlcnktZGF0ZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGRhdGVGb3JtYXQgPSByZXF1aXJlKCdkYXRlZm9ybWF0Jyk7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFrZURlbGl2ZXJ5RGF0ZXMge1xyXG5cclxuICAgIHN0YXRpYyAgZ2V0KCk6IERlbGl2ZXJ5RGF0ZVtdIHtcclxuXHJcbiAgICAgICAgY29uc3QgcnRuOiBEZWxpdmVyeURhdGVbXSA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0b2RheStpKjI0KjM2MDAqMTAwMCk7XHJcbiAgICAgICAgICAgIHJ0bi5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogZGF0ZUZvcm1hdChkYXRlLCBcImRkZCBkUyBtbW1cIilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcnRuO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19