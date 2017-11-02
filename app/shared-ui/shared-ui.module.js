"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var accordion_component_1 = require("./accordion/accordion.component");
var detail_item_component_1 = require("./detail-item/detail-item.component");
var dialog_component_1 = require("./dialog/dialog.component");
var radio_group_component_1 = require("./radio-group/radio-group.component");
var section_component_1 = require("./section/section.component");
var card_item_component_1 = require("./card-item/card-item.component");
var modal_component_1 = require("./modal/modal.component");
var icon_pipe_1 = require("../pipes/icon.pipe");
var SHARED_UI_COMPONENTS = [
    icon_pipe_1.IconPipe,
    modal_component_1.ModalComponent,
    accordion_component_1.AccordionComponent,
    detail_item_component_1.DetailItemComponent,
    dialog_component_1.DialogComponent,
    radio_group_component_1.RadioGroupComponent,
    section_component_1.SectionComponent,
    card_item_component_1.CardItemComponent
];
var SharedUIModule = (function () {
    function SharedUIModule() {
    }
    return SharedUIModule;
}());
SharedUIModule = __decorate([
    core_1.NgModule({
        declarations: SHARED_UI_COMPONENTS,
        imports: [
            common_1.CommonModule,
            nativescript_module_1.NativeScriptModule
        ],
        exports: SHARED_UI_COMPONENTS,
        entryComponents: []
    })
], SharedUIModule);
exports.SharedUIModule = SharedUIModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLXVpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC11aS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLGdGQUE4RTtBQUU5RSx1RUFBbUU7QUFDbkUsNkVBQXdFO0FBQ3hFLDhEQUEwRDtBQUMxRCw2RUFBd0U7QUFDeEUsaUVBQTZEO0FBQzdELHVFQUFrRTtBQUNsRSwyREFBdUQ7QUFDdkQsZ0RBQTRDO0FBRTVDLElBQU0sb0JBQW9CLEdBQUc7SUFDekIsb0JBQVE7SUFDUixnQ0FBYztJQUNkLHdDQUFrQjtJQUNsQiwyQ0FBbUI7SUFDbkIsa0NBQWU7SUFDZiwyQ0FBbUI7SUFDbkIsb0NBQWdCO0lBQ2hCLHVDQUFpQjtDQUNwQixDQUFDO0FBWUYsSUFBYSxjQUFjO0lBQTNCO0lBQTZCLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFBOUIsSUFBOEI7QUFBakIsY0FBYztJQVYxQixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsb0JBQW9CO1FBQ2xDLE9BQU8sRUFBRTtZQUNMLHFCQUFZO1lBQ1osd0NBQWtCO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixlQUFlLEVBQUMsRUFBRTtLQUNyQixDQUFDO0dBRVcsY0FBYyxDQUFHO0FBQWpCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcblxyXG5pbXBvcnQge0FjY29yZGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGV0YWlsSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9kZXRhaWwtaXRlbS9kZXRhaWwtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RpYWxvZ0NvbXBvbmVudH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UmFkaW9Hcm91cENvbXBvbmVudH0gZnJvbSAnLi9yYWRpby1ncm91cC9yYWRpby1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlY3Rpb25Db21wb25lbnR9IGZyb20gJy4vc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2FyZEl0ZW1Db21wb25lbnR9IGZyb20gJy4vY2FyZC1pdGVtL2NhcmQtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SWNvblBpcGV9IGZyb20gJy4uL3BpcGVzL2ljb24ucGlwZSc7XHJcblxyXG5jb25zdCBTSEFSRURfVUlfQ09NUE9ORU5UUyA9IFtcclxuICAgIEljb25QaXBlLFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBBY2NvcmRpb25Db21wb25lbnQsXHJcbiAgICBEZXRhaWxJdGVtQ29tcG9uZW50LFxyXG4gICAgRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgUmFkaW9Hcm91cENvbXBvbmVudCxcclxuICAgIFNlY3Rpb25Db21wb25lbnQsXHJcbiAgICBDYXJkSXRlbUNvbXBvbmVudFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogU0hBUkVEX1VJX0NPTVBPTkVOVFMsXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFNIQVJFRF9VSV9DT01QT05FTlRTLFxyXG4gICAgZW50cnlDb21wb25lbnRzOltdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2hhcmVkVUlNb2R1bGUge31cclxuIl19