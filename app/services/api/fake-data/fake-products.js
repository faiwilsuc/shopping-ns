"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_models_1 = require("../product.models");
var FakeProducts = (function () {
    function FakeProducts() {
    }
    FakeProducts.getAll = function () {
        return [
            {
                productGroupId: '13130770-c215-4404-a8cd-9fe72fa5eb06',
                label: 'Popular Dishes',
                icon: 'star',
                products: [
                    {
                        productId: '67e8ca3c-849e-4a21-862b-e26ae6953dc0',
                        label: 'Fish and Chips Pack (1 Freshly Battered Fish)',
                        detail: 'Served with salad or fries and sauce',
                        condiment: product_models_1.CondimentOperation.force,
                        price: 4
                    },
                    {
                        productId: 'c3ceb76e-725c-4bf2-b740-8cfb9999e675',
                        label: 'Gourmet Steak Burger',
                        detail: 'Scotch fillet, lettuce, tomato, caramelised onion, pickled beetroot and peri peri aioli',
                        condiment: product_models_1.CondimentOperation.force,
                        price: 6
                    },
                    {
                        productId: '7772170f-a09a-4d1a-9356-91e7af22b0d1',
                        label: 'Marinated Grilled Chicken Burger',
                        detail: 'Chicken breast, mozzarella cheese, tomato, garden leaves and smoked chipotle chilli mayo',
                        condiment: product_models_1.CondimentOperation.force,
                        price: 23
                    }
                ]
            },
            {
                productGroupId: '55f266dc-6c37-4c11-b7c2-7b9cec778390',
                label: 'Deep Fried Meals',
                icon: '',
                products: [
                    {
                        productId: '7772170f-a09a-4d1a-9256-91e7af22b0d1',
                        label: 'Fish of the Day',
                        detail: 'Served with salad or fries and sauce',
                        condiment: product_models_1.CondimentOperation.force,
                        price: 14
                    },
                    {
                        productId: 'b4cf86e1-cbdd-4c09-8bb5-7767d21eaa35',
                        label: 'Prawn Cutlet Pack',
                        detail: '5 freshly battered or crumbled and deep fried. Served with salad or fries or sauce',
                        condiment: product_models_1.CondimentOperation.force,
                        price: 19.5
                    }
                ]
            }
        ];
    };
    return FakeProducts;
}());
exports.FakeProducts = FakeProducts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZS1wcm9kdWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZha2UtcHJvZHVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBbUU7QUFFbkU7SUFBQTtJQTBEQSxDQUFDO0lBeERXLG1CQUFNLEdBQWQ7UUFFSSxNQUFNLENBQUM7WUFDSDtnQkFDSSxjQUFjLEVBQUMsc0NBQXNDO2dCQUNyRCxLQUFLLEVBQUUsZ0JBQWdCO2dCQUN2QixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUU7b0JBQ047d0JBQ0ksU0FBUyxFQUFFLHNDQUFzQzt3QkFDakQsS0FBSyxFQUFFLCtDQUErQzt3QkFDdEQsTUFBTSxFQUFFLHNDQUFzQzt3QkFDOUMsU0FBUyxFQUFFLG1DQUFrQixDQUFDLEtBQUs7d0JBQ25DLEtBQUssRUFBRSxDQUFDO3FCQUNYO29CQUNEO3dCQUNJLFNBQVMsRUFBRSxzQ0FBc0M7d0JBQ2pELEtBQUssRUFBRSxzQkFBc0I7d0JBQzdCLE1BQU0sRUFBRSx5RkFBeUY7d0JBQ2pHLFNBQVMsRUFBRSxtQ0FBa0IsQ0FBQyxLQUFLO3dCQUNuQyxLQUFLLEVBQUUsQ0FBQztxQkFDWDtvQkFDRDt3QkFDSSxTQUFTLEVBQUUsc0NBQXNDO3dCQUNqRCxLQUFLLEVBQUUsa0NBQWtDO3dCQUN6QyxNQUFNLEVBQUUsMEZBQTBGO3dCQUNsRyxTQUFTLEVBQUUsbUNBQWtCLENBQUMsS0FBSzt3QkFDbkMsS0FBSyxFQUFFLEVBQUU7cUJBQ1o7aUJBQ0o7YUFDSjtZQUNEO2dCQUNJLGNBQWMsRUFBRSxzQ0FBc0M7Z0JBQ3RELEtBQUssRUFBRSxrQkFBa0I7Z0JBQ3pCLElBQUksRUFBRSxFQUFFO2dCQUNSLFFBQVEsRUFBRTtvQkFDTjt3QkFDSSxTQUFTLEVBQUUsc0NBQXNDO3dCQUNqRCxLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixNQUFNLEVBQUUsc0NBQXNDO3dCQUM5QyxTQUFTLEVBQUUsbUNBQWtCLENBQUMsS0FBSzt3QkFDbkMsS0FBSyxFQUFFLEVBQUU7cUJBQ1o7b0JBQ0Q7d0JBQ0ksU0FBUyxFQUFFLHNDQUFzQzt3QkFDakQsS0FBSyxFQUFFLG1CQUFtQjt3QkFDMUIsTUFBTSxFQUFFLG9GQUFvRjt3QkFDNUYsU0FBUyxFQUFFLG1DQUFrQixDQUFDLEtBQUs7d0JBQ25DLEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0o7U0FDSixDQUFBO0lBRUwsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQztBQTFEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZHVjdEdyb3VwLCBDb25kaW1lbnRPcGVyYXRpb259IGZyb20gJy4uL3Byb2R1Y3QubW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWtlUHJvZHVjdHMge1xyXG5cclxuICAgIHN0YXRpYyAgZ2V0QWxsKCk6IFByb2R1Y3RHcm91cFtdIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdEdyb3VwSWQ6JzEzMTMwNzcwLWMyMTUtNDQwNC1hOGNkLTlmZTcyZmE1ZWIwNicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1BvcHVsYXIgRGlzaGVzJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzdGFyJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6ICc2N2U4Y2EzYy04NDllLTRhMjEtODYyYi1lMjZhZTY5NTNkYzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Zpc2ggYW5kIENoaXBzIFBhY2sgKDEgRnJlc2hseSBCYXR0ZXJlZCBGaXNoKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogJ1NlcnZlZCB3aXRoIHNhbGFkIG9yIGZyaWVzIGFuZCBzYXVjZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpbWVudDogQ29uZGltZW50T3BlcmF0aW9uLmZvcmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogNFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6ICdjM2NlYjc2ZS03MjVjLTRiZjItYjc0MC04Y2ZiOTk5OWU2NzUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0dvdXJtZXQgU3RlYWsgQnVyZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiAnU2NvdGNoIGZpbGxldCwgbGV0dHVjZSwgdG9tYXRvLCBjYXJhbWVsaXNlZCBvbmlvbiwgcGlja2xlZCBiZWV0cm9vdCBhbmQgcGVyaSBwZXJpIGFpb2xpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGltZW50OiBDb25kaW1lbnRPcGVyYXRpb24uZm9yY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiA2XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogJzc3NzIxNzBmLWEwOWEtNGQxYS05MzU2LTkxZTdhZjIyYjBkMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTWFyaW5hdGVkIEdyaWxsZWQgQ2hpY2tlbiBCdXJnZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6ICdDaGlja2VuIGJyZWFzdCwgbW96emFyZWxsYSBjaGVlc2UsIHRvbWF0bywgZ2FyZGVuIGxlYXZlcyBhbmQgc21va2VkIGNoaXBvdGxlIGNoaWxsaSBtYXlvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGltZW50OiBDb25kaW1lbnRPcGVyYXRpb24uZm9yY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiAyM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdEdyb3VwSWQ6ICc1NWYyNjZkYy02YzM3LTRjMTEtYjdjMi03YjljZWM3NzgzOTAnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEZWVwIEZyaWVkIE1lYWxzJyxcclxuICAgICAgICAgICAgICAgIGljb246ICcnLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogJzc3NzIxNzBmLWEwOWEtNGQxYS05MjU2LTkxZTdhZjIyYjBkMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRmlzaCBvZiB0aGUgRGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiAnU2VydmVkIHdpdGggc2FsYWQgb3IgZnJpZXMgYW5kIHNhdWNlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGltZW50OiBDb25kaW1lbnRPcGVyYXRpb24uZm9yY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiAxNFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6ICdiNGNmODZlMS1jYmRkLTRjMDktOGJiNS03NzY3ZDIxZWFhMzUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1ByYXduIEN1dGxldCBQYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiAnNSBmcmVzaGx5IGJhdHRlcmVkIG9yIGNydW1ibGVkIGFuZCBkZWVwIGZyaWVkLiBTZXJ2ZWQgd2l0aCBzYWxhZCBvciBmcmllcyBvciBzYXVjZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpbWVudDogQ29uZGltZW50T3BlcmF0aW9uLmZvcmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogMTkuNVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==