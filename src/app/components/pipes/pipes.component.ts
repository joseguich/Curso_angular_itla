import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FirstWordPipe } from './first-word.pipe';
import { ReverserTextPipe } from './reverser-text.pipe';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, FirstWordPipe, ReverserTextPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  public message: string = 'Este pipe convierte todo en mayuscula';
}
