import { Component, Input } from '@angular/core';

@Component({
  selector: 'children-message',
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})
export class MessageComponent {
  @Input()
  public message: string = '';
}
