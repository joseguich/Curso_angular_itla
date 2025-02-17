import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'children-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input()
  public count: number = 0;

  @Output()
  public onIncrease: EventEmitter<number> = new EventEmitter();

  counterIncrease(value: number): void {
    this.onIncrease.emit(value);
  }
}
