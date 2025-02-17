import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score',
  imports: [CommonModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css',
})
export class ScoreComponent {
  public message: string = 'No hay publicaciones';

  getScore(number: number): string {
    if (number >= 90) {
      this.message = 'Excelente';
    } else if (number >= 60 && number <= 89) {
      this.message = 'Aprobado';
    } else {
      this.message = 'Reprobado';
    }
    return this.message;
  }
}
