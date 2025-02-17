import { Component } from '@angular/core';
import { MessageComponent } from '../children/message/message.component';
import { AlertButtonComponent } from '../children/alaert-button/alert-button.component';
import { ColorBoxComponent } from '../children/color-box/color-box.component';
import { CounterComponent } from '../children/counter/counter.component';

@Component({
  selector: 'app-parent',
  imports: [
    MessageComponent,
    ColorBoxComponent,
    AlertButtonComponent,
    CounterComponent,
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  public count: number = 0;
  showAlert(message: string): void {
    alert(message);
  }

  counterIncrease(value: number): void {
    this.count += value;
    if (this.count < 0) {
      this.count = 0;
      return;
    }
  }
}
