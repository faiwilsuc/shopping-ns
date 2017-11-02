"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
var fake_products_1 = require("./fake-products");
var fake_condiments_1 = require("./fake-condiments");
var fake_suburbs_1 = require("./fake-suburbs");
var fake_delivery_dates_1 = require("./fake-delivery-dates");
var fake_delivery_times_1 = require("./fake-delivery-times");
function FakeBackendFactory(backend, options, realBackend) {
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        setTimeout(function () {
            if (connection.request.url.endsWith('/api/suburbs') && connection.request.method === http_1.RequestMethod.Get) {
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: fake_suburbs_1.FakeSuburbs.getAll() })));
                return;
            }
            if (connection.request.url.endsWith('/api/products') && connection.request.method === http_1.RequestMethod.Get) {
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: fake_products_1.FakeProducts.getAll() })));
                return;
            }
            if (connection.request.url.endsWith('/api/condiments') && connection.request.method === http_1.RequestMethod.Get) {
                var urlParts = connection.request.url.split('/');
                var id = urlParts[urlParts.length - 1];
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: fake_condiments_1.FakeCondiments.get(id) })));
                return;
            }
            if (connection.request.url.endsWith('/api/delivery-times') && connection.request.method === http_1.RequestMethod.Get) {
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: fake_delivery_times_1.FakeDeliveryTimes.get() })));
                return;
            }
            if (connection.request.url.endsWith('/api/delivery-dates') && connection.request.method === http_1.RequestMethod.Get) {
                connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: fake_delivery_dates_1.FakeDeliveryDates.get() })));
                return;
            }
        }, 2000);
    });
    return new http_1.Http(backend, options);
}
exports.FakeBackendFactory = FakeBackendFactory;
;
exports.FakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: http_1.Http,
    useFactory: FakeBackendFactory,
    deps: [testing_1.MockBackend, http_1.BaseRequestOptions, http_1.XHRBackend]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZS1iYWNrZW5kLWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYWtlLWJhY2tlbmQtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUErSDtBQUMvSCxpREFBb0U7QUFDcEUsaURBQStDO0FBQy9DLHFEQUFtRDtBQUNuRCwrQ0FBNkM7QUFDN0MsNkRBQTBEO0FBQzFELDZEQUEwRDtBQUUxRCw0QkFBbUMsT0FBb0IsRUFBRSxPQUEyQixFQUFFLFdBQXVCO0lBRXpHLHlCQUF5QjtJQUN6QixPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFVBQTBCO1FBRXJELFVBQVUsQ0FBQztZQUVQLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxvQkFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JHLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFRLENBQUMsSUFBSSxzQkFBZSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsMEJBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2RyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLG9CQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGVBQVEsQ0FBQyxJQUFJLHNCQUFlLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSw0QkFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTVHLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxvQkFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hHLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkQsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFRLENBQUMsSUFBSSxzQkFBZSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZ0NBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFekcsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLG9CQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGVBQVEsQ0FBQyxJQUFJLHNCQUFlLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSx1Q0FBaUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUxRyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssb0JBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM1RyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksZUFBUSxDQUFDLElBQUksc0JBQWUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLHVDQUFpQixDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTFHLE1BQU0sQ0FBQztZQUNYLENBQUM7UUFFTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFYixDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxJQUFJLFdBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQXpDRCxnREF5Q0M7QUFBQSxDQUFDO0FBRVMsUUFBQSxtQkFBbUIsR0FBRztJQUM3Qix5RUFBeUU7SUFDekUsT0FBTyxFQUFFLFdBQUk7SUFDYixVQUFVLEVBQUUsa0JBQWtCO0lBQzlCLElBQUksRUFBRSxDQUFDLHFCQUFXLEVBQUUseUJBQWtCLEVBQUUsaUJBQVUsQ0FBQztDQUN0RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgQmFzZVJlcXVlc3RPcHRpb25zLCBSZXNwb25zZSwgUmVzcG9uc2VPcHRpb25zLCBSZXF1ZXN0TWV0aG9kLCBYSFJCYWNrZW5kLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2NrQmFja2VuZCwgTW9ja0Nvbm5lY3Rpb24gfSBmcm9tICdAYW5ndWxhci9odHRwL3Rlc3RpbmcnO1xyXG5pbXBvcnQgeyBGYWtlUHJvZHVjdHMgfSBmcm9tICcuL2Zha2UtcHJvZHVjdHMnO1xyXG5pbXBvcnQgeyBGYWtlQ29uZGltZW50cyB9IGZyb20gJy4vZmFrZS1jb25kaW1lbnRzJztcclxuaW1wb3J0IHsgRmFrZVN1YnVyYnMgfSBmcm9tICcuL2Zha2Utc3VidXJicyc7XHJcbmltcG9ydCB7IEZha2VEZWxpdmVyeURhdGVzIH0gZnJvbSAnLi9mYWtlLWRlbGl2ZXJ5LWRhdGVzJztcclxuaW1wb3J0IHsgRmFrZURlbGl2ZXJ5VGltZXMgfSBmcm9tICcuL2Zha2UtZGVsaXZlcnktdGltZXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZha2VCYWNrZW5kRmFjdG9yeShiYWNrZW5kOiBNb2NrQmFja2VuZCwgb3B0aW9uczogQmFzZVJlcXVlc3RPcHRpb25zLCByZWFsQmFja2VuZDogWEhSQmFja2VuZCkge1xyXG5cclxuICAgIC8vIGNvbmZpZ3VyZSBmYWtlIGJhY2tlbmRcclxuICAgIGJhY2tlbmQuY29ubmVjdGlvbnMuc3Vic2NyaWJlKChjb25uZWN0aW9uOiBNb2NrQ29ubmVjdGlvbikgPT4ge1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLnJlcXVlc3QudXJsLmVuZHNXaXRoKCcvYXBpL3N1YnVyYnMnKSAmJiBjb25uZWN0aW9uLnJlcXVlc3QubWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkdldCkge1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5tb2NrUmVzcG9uZChuZXcgUmVzcG9uc2UobmV3IFJlc3BvbnNlT3B0aW9ucyh7IHN0YXR1czogMjAwLCBib2R5OiBGYWtlU3VidXJicy5nZXRBbGwoKSB9KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24ucmVxdWVzdC51cmwuZW5kc1dpdGgoJy9hcGkvcHJvZHVjdHMnKSAmJiBjb25uZWN0aW9uLnJlcXVlc3QubWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ubW9ja1Jlc3BvbmQobmV3IFJlc3BvbnNlKG5ldyBSZXNwb25zZU9wdGlvbnMoeyBzdGF0dXM6IDIwMCwgYm9keTogRmFrZVByb2R1Y3RzLmdldEFsbCgpIH0pKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLnJlcXVlc3QudXJsLmVuZHNXaXRoKCcvYXBpL2NvbmRpbWVudHMnKSAmJiBjb25uZWN0aW9uLnJlcXVlc3QubWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkdldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsUGFydHMgPSBjb25uZWN0aW9uLnJlcXVlc3QudXJsLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHVybFBhcnRzW3VybFBhcnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5tb2NrUmVzcG9uZChuZXcgUmVzcG9uc2UobmV3IFJlc3BvbnNlT3B0aW9ucyh7IHN0YXR1czogMjAwLCBib2R5OiBGYWtlQ29uZGltZW50cy5nZXQoaWQpIH0pKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLnJlcXVlc3QudXJsLmVuZHNXaXRoKCcvYXBpL2RlbGl2ZXJ5LXRpbWVzJykgJiYgY29ubmVjdGlvbi5yZXF1ZXN0Lm1ldGhvZCA9PT0gUmVxdWVzdE1ldGhvZC5HZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ubW9ja1Jlc3BvbmQobmV3IFJlc3BvbnNlKG5ldyBSZXNwb25zZU9wdGlvbnMoeyBzdGF0dXM6IDIwMCwgYm9keTogRmFrZURlbGl2ZXJ5VGltZXMuZ2V0KCkgfSkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24ucmVxdWVzdC51cmwuZW5kc1dpdGgoJy9hcGkvZGVsaXZlcnktZGF0ZXMnKSAmJiBjb25uZWN0aW9uLnJlcXVlc3QubWV0aG9kID09PSBSZXF1ZXN0TWV0aG9kLkdldCkge1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5tb2NrUmVzcG9uZChuZXcgUmVzcG9uc2UobmV3IFJlc3BvbnNlT3B0aW9ucyh7IHN0YXR1czogMjAwLCBib2R5OiBGYWtlRGVsaXZlcnlEYXRlcy5nZXQoKSB9KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEh0dHAoYmFja2VuZCwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgbGV0IEZha2VCYWNrZW5kUHJvdmlkZXIgPSB7XHJcbiAgICAvLyB1c2UgZmFrZSBiYWNrZW5kIGluIHBsYWNlIG9mIEh0dHAgc2VydmljZSBmb3IgYmFja2VuZC1sZXNzIGRldmVsb3BtZW50XHJcbiAgICBwcm92aWRlOiBIdHRwLFxyXG4gICAgdXNlRmFjdG9yeTogRmFrZUJhY2tlbmRGYWN0b3J5LFxyXG4gICAgZGVwczogW01vY2tCYWNrZW5kLCBCYXNlUmVxdWVzdE9wdGlvbnMsIFhIUkJhY2tlbmRdXHJcbn07XHJcbiJdfQ==