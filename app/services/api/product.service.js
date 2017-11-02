"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProductGroups = function () {
        return this.http.get('/api/products', null)
            .map(function (response) { return response.json(); })
            .map(function (data) { return data; });
    };
    ProductService.prototype.getCondimentGroups = function (productId) {
        return this.http.get('/api/condiments/' + productId)
            .map(function (response) { return response.json(); })
            .map(function (data) { return data; });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxpQ0FBOEI7QUFLOUIsSUFBYSxjQUFjO0lBQ3ZCLHdCQUNZLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQ2QsQ0FBQztJQUVULHlDQUFnQixHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDO2FBQ3RDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUU7YUFDakMsR0FBRyxDQUFFLFVBQUEsSUFBSSxJQUFJLE9BQWlCLElBQUksRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEIsVUFBbUIsU0FBaUI7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQzthQUMvQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFFO2FBQ2pDLEdBQUcsQ0FBRSxVQUFBLElBQUksSUFBSSxPQUFtQixJQUFJLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTtxQ0FHUyxXQUFJO0dBRmIsY0FBYyxDQWlCMUI7QUFqQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcclxuXHJcbmltcG9ydCB7UHJvZHVjdEdyb3VwLCBDb25kaW1lbnRHcm91cH0gZnJvbSAnLi9wcm9kdWN0Lm1vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBcclxuICAgICAgICApIHsgfVxyXG5cclxuICAgIGdldFByb2R1Y3RHcm91cHMoKTogT2JzZXJ2YWJsZTxQcm9kdWN0R3JvdXBbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL3Byb2R1Y3RzJywgbnVsbClcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkgKVxyXG4gICAgICAgICAgICAubWFwKCBkYXRhID0+IDxQcm9kdWN0R3JvdXBbXT4gZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uZGltZW50R3JvdXBzKHByb2R1Y3RJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb25kaW1lbnRHcm91cFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy9hcGkvY29uZGltZW50cy8nICsgcHJvZHVjdElkKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSApXHJcbiAgICAgICAgICAgIC5tYXAoIGRhdGEgPT4gPENvbmRpbWVudEdyb3VwW10+IGRhdGEpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=