import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  public rest: number = 10;
  opRest(num1: number, num2: number): number {
    this.rest = num1 - num2;

    return this.rest;
  }
}
