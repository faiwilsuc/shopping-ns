import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "radio-group",
    moduleId: module.id,
    templateUrl: "./radio-group.component.html",
    styleUrls: ["./radio-group.component.css"],
})
export class RadioGroupComponent {
  @Input() items: object[];
  @Input() selectedItem: object;
  @Output() onSelected: EventEmitter<object> = new EventEmitter();

  onSelect(item) {
    this.selectedItem = item;
    this.onSelected.emit(item);
  }
}
