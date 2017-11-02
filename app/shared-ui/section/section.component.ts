
import { Component, Input } from "@angular/core";

@Component({
    selector: "section",
    moduleId: module.id,
    template: `
      <StackLayout orientation="vertical">
        <Label [text]="label" class="bottom-border gray-bg"></Label>
        <ng-content></ng-content>
      </StackLayout>
    `,
    styles: [`
      Label {
        height: 50;
        padding-left: 10;
        color: #686868;
        font-size: 14;
        font-weight: bold;
      }
    `],
})
export class SectionComponent {
    @Input() label: string;
}