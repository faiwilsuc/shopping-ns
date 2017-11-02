import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "card-item",
    moduleId: module.id,
    templateUrl: "./card-item.component.html",
    styleUrls: ["./card-item.component.css"],
})
export class CardItemComponent implements OnInit {
    @Input() icon: string;
    @Input() label: string;
    @Output() selected: EventEmitter<boolean> = new EventEmitter();
    @Input() isSelected:boolean;
    ngOnInit() {

    }

    onTap() {
        
      this.selected.emit(this.isSelected);
    }
}
