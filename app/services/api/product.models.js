"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CondimentOperation;
(function (CondimentOperation) {
    CondimentOperation[CondimentOperation["none"] = 0] = "none";
    CondimentOperation[CondimentOperation["optional"] = 1] = "optional";
    CondimentOperation[CondimentOperation["force"] = 2] = "force";
})(CondimentOperation = exports.CondimentOperation || (exports.CondimentOperation = {}));
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var ProductGroup = (function () {
    function ProductGroup() {
    }
    return ProductGroup;
}());
exports.ProductGroup = ProductGroup;
var Condiment = (function () {
    function Condiment() {
    }
    return Condiment;
}());
exports.Condiment = Condiment;
var CondimentGroup = (function () {
    function CondimentGroup() {
    }
    return CondimentGroup;
}());
exports.CondimentGroup = CondimentGroup;
var SpecialGroupSelection = (function () {
    function SpecialGroupSelection() {
    }
    return SpecialGroupSelection;
}());
exports.SpecialGroupSelection = SpecialGroupSelection;
var SpecialProduct = (function () {
    function SpecialProduct() {
    }
    return SpecialProduct;
}());
exports.SpecialProduct = SpecialProduct;
var CartProductLine = (function () {
    function CartProductLine() {
    }
    return CartProductLine;
}());
exports.CartProductLine = CartProductLine;
var CartTransaction = (function () {
    function CartTransaction() {
    }
    return CartTransaction;
}());
exports.CartTransaction = CartTransaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2RlbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0Lm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQVksa0JBSVg7QUFKRCxXQUFZLGtCQUFrQjtJQUMxQiwyREFBSSxDQUFBO0lBQ0osbUVBQVEsQ0FBQTtJQUNSLDZEQUFLLENBQUE7QUFDVCxDQUFDLEVBSlcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFJN0I7QUFFRDtJQUFBO0lBT0EsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLDBCQUFPO0FBU3BCO0lBQUE7SUFLQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLG9DQUFZO0FBUXpCO0lBQUE7SUFLQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLDhCQUFTO0FBT3RCO0lBQUE7SUFJQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLHdDQUFjO0FBTTNCO0lBQUE7SUFHQSxDQUFDO0lBQUQsNEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLHNEQUFxQjtBQUtsQztJQUFBO0lBR0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSx3Q0FBYztBQU0zQjtJQUFBO0lBSUEsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSwwQ0FBZTtBQU01QjtJQUFBO0lBR0EsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZW51bSBDb25kaW1lbnRPcGVyYXRpb24ge1xyXG4gICAgbm9uZSxcclxuICAgIG9wdGlvbmFsLFxyXG4gICAgZm9yY2VcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3Qge1xyXG4gICAgcHJvZHVjdElkOiBzdHJpbmc7XHJcbiAgICBjb25kaW1lbnQ6IENvbmRpbWVudE9wZXJhdGlvbjtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBkZXRhaWw6IHN0cmluZztcclxuICAgIHByaWNlOiBudW1iZXI7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdEdyb3VwIHtcclxuICAgIHByb2R1Y3RHcm91cElkOiBzdHJpbmc7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgcHJvZHVjdHM6IFByb2R1Y3RbXTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25kaW1lbnQge1xyXG4gICAgcHJvZHVjdElkOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgcHJpY2U6IG51bWJlcjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25kaW1lbnRHcm91cCB7XHJcbiAgICBsYWJlbDogc3RyaW5nOyAvLyBlZyBSRU1PVkUsIEVYVFJBU1xyXG4gICAgY29uZGltZW50czogQ29uZGltZW50W107XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3BlY2lhbEdyb3VwU2VsZWN0aW9uIHtcclxuICAgIHByb2R1Y3RzOiBQcm9kdWN0W107XHJcbiAgICBzZWxlY3RlZDogUHJvZHVjdDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwZWNpYWxQcm9kdWN0IHtcclxuICAgIHByb2R1Y3RzOiBTcGVjaWFsR3JvdXBTZWxlY3Rpb25bXTtcclxuICAgIGNvbWVzV2l0aDogc3RyaW5nW107XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FydFByb2R1Y3RMaW5lIHtcclxuICAgIHByb2R1Y3RJZDogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHByaWNlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJ0VHJhbnNhY3Rpb24ge1xyXG4gICAgcHJvZHVjdHM6IENhcnRQcm9kdWN0TGluZVtdO1xyXG4gICAgdG90YWxQcmljZTogbnVtYmVyO1xyXG59XHJcbiJdfQ==