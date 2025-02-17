import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'children-color-box',
  imports: [CommonModule],
  templateUrl: './color-box.component.html',
  styleUrl: './color-box.component.css',
})
export class ColorBoxComponent {
  @Input()
  public bgColor!: string;

  // Crea un componente ColorBoxComponent que reciba mediante @Input() un color y lo
  // aplique como fondo de un cuadro (div).
}
