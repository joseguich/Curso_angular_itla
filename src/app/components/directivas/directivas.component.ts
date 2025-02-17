import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  imports: [FormsModule, TitleCasePipe],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css',
})
export class DirectivasComponent {
  public isVisible: boolean = false;

  public nameFruit: string = '';
  public alert: string = '';

  public fruits: string[] = [
    'manzana',
    'plátano',
    'cereza',
    'durazno',
    'fresa',
  ];

  // Mostrar el mensaje y ocultar
  showMessage(value: boolean): void {
    this.isVisible = value;
  }

  verified(name: string): boolean {
    name = name.toLowerCase();

    return this.fruits.includes(name);
  }

  addFruits(): void {
    if (!this.nameFruit || this.nameFruit.trim() === '') {
      this.alert = 'Campo esta vacio';
      return;
    } else if (this.verified(this.nameFruit)) {
      this.alert = 'Esta fruta ya esta agregada';
      return;
    }
    this.fruits.push(this.nameFruit);

    this.nameFruit = '';

    setTimeout(() => {
      this.alert = '';
    }, 100);
  }
}
