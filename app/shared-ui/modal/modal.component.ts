import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ns-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input () public title: string;
  @Input () public showButtons = true;
  @Input () public confirmLabel = 'CONFIRM';
  @Output() public onConfirm: EventEmitter<string>;
  @Output() public onCancel: EventEmitter<string>;



  public constructor() {

    this.onCancel = new EventEmitter<string>();
    this.onConfirm = new EventEmitter<string>();
  }

  ngOnInit() {}

  public close() {
    this.onCancel.emit();
  }

  public confirm(){
    this.onConfirm.emit();
  }
}
