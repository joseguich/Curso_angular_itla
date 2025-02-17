import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'children-alert-button',
  imports: [],
  templateUrl: './alert-button.component.html',
})
export class AlertButtonComponent {
  @Output()
  public alertMessage: EventEmitter<string> = new EventEmitter();

  onAlertButton(message: string): void {
    this.alertMessage.emit(message);
  }
}
