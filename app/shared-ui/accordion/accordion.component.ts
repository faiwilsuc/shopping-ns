import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "ns-accordion",
    moduleId: module.id,
    templateUrl: "./accordion.component.html",
    styleUrls: ["./accordion.component.css"],
})
export class AccordionComponent {
    @Input() icon: string;
    @Input() label: string;
    @Input() open: boolean;
    @Output() onOpened: EventEmitter<boolean> = new EventEmitter();


    onTap() {
        this.open = !this.open;
        this.onOpened.emit(this.open);
    }
}
