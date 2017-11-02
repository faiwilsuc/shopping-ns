"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FakeCondiments = (function () {
    function FakeCondiments() {
    }
    FakeCondiments.get = function (productId) {
        var rtn = [];
        if (productId === '67e8ca3c-849e-4a21-862b-e26ae6953dc0') {
            rtn = [
                {
                    label: "REMOVE",
                    condiments: [
                        {
                            productId: '78075cea-07a6-472e-ac21-3a2717dd115a',
                            label: 'NO Lettuce',
                            price: 0
                        },
                        {
                            productId: '462587a1-2824-44ce-be1d-473db7976ac0',
                            label: 'NO Onion',
                            price: 0
                        },
                        {
                            productId: '0058ef35-dfd1-421a-97a3-86c8fed89334',
                            label: 'NO Tomato',
                            price: 0
                        }
                    ]
                },
                {
                    label: "EXTRAS",
                    condiments: [
                        {
                            productId: 'cdfeba5c-a6e5-4c02-a6e7-7da2b415ad00',
                            label: 'Egg',
                            price: 1
                        }
                    ]
                }
            ];
        }
        else if (productId === 'c3ceb76e-725c-4bf2-b740-8cfb9999e675') {
        }
        return rtn;
    };
    return FakeCondiments;
}());
exports.FakeCondiments = FakeCondiments;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZS1jb25kaW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmFrZS1jb25kaW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFBQTtJQWdEQSxDQUFDO0lBOUNXLGtCQUFHLEdBQVgsVUFBWSxTQUFpQjtRQUV6QixJQUFJLEdBQUcsR0FBcUIsRUFBRSxDQUFDO1FBRS9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7WUFDdkQsR0FBRyxHQUFHO2dCQUNGO29CQUNJLEtBQUssRUFBRSxRQUFRO29CQUNmLFVBQVUsRUFBRTt3QkFDUjs0QkFDSSxTQUFTLEVBQUUsc0NBQXNDOzRCQUNqRCxLQUFLLEVBQUUsWUFBWTs0QkFDbkIsS0FBSyxFQUFFLENBQUM7eUJBQ1g7d0JBQ0Q7NEJBQ0ksU0FBUyxFQUFFLHNDQUFzQzs0QkFDakQsS0FBSyxFQUFFLFVBQVU7NEJBQ2pCLEtBQUssRUFBRSxDQUFDO3lCQUNYO3dCQUNEOzRCQUNJLFNBQVMsRUFBRSxzQ0FBc0M7NEJBQ2pELEtBQUssRUFBRSxXQUFXOzRCQUNsQixLQUFLLEVBQUUsQ0FBQzt5QkFDWDtxQkFDSjtpQkFDSjtnQkFDRDtvQkFDSSxLQUFLLEVBQUUsUUFBUTtvQkFDZixVQUFVLEVBQUU7d0JBQ1I7NEJBQ0ksU0FBUyxFQUFFLHNDQUFzQzs0QkFDakQsS0FBSyxFQUFFLEtBQUs7NEJBQ1osS0FBSyxFQUFFLENBQUM7eUJBQ1g7cUJBQ0o7aUJBQ0o7YUFDSixDQUFDO1FBRU4sQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBR2xFLENBQUM7UUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVMLHFCQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQztBQWhEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29uZGltZW50R3JvdXB9IGZyb20gJy4uL3Byb2R1Y3QubW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWtlQ29uZGltZW50cyB7XHJcblxyXG4gICAgc3RhdGljICBnZXQocHJvZHVjdElkOiBzdHJpbmcpOiBDb25kaW1lbnRHcm91cFtdIHtcclxuXHJcbiAgICAgICAgbGV0IHJ0bjogQ29uZGltZW50R3JvdXBbXSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdElkID09PSAnNjdlOGNhM2MtODQ5ZS00YTIxLTg2MmItZTI2YWU2OTUzZGMwJykge1xyXG4gICAgICAgICAgICBydG4gPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUkVNT1ZFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGltZW50czogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6ICc3ODA3NWNlYS0wN2E2LTQ3MmUtYWMyMS0zYTI3MTdkZDExNWEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOTyBMZXR0dWNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogJzQ2MjU4N2ExLTI4MjQtNDRjZS1iZTFkLTQ3M2RiNzk3NmFjMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05PIE9uaW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogJzAwNThlZjM1LWRmZDEtNDIxYS05N2EzLTg2YzhmZWQ4OTMzNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05PIFRvbWF0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFWFRSQVNcIixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaW1lbnRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogJ2NkZmViYTVjLWE2ZTUtNGMwMi1hNmU3LTdkYTJiNDE1YWQwMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0VnZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHByb2R1Y3RJZCA9PT0gJ2MzY2ViNzZlLTcyNWMtNGJmMi1iNzQwLThjZmI5OTk5ZTY3NScpIHtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJ0bjtcclxuICAgIH1cclxuXHJcbn1cclxuIl19