import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [DatePipe],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css',
})
export class InterpolationComponent implements OnInit {
  public welcomenMessage: string = 'Bienvenidso a mi aplicaicón de Angular';

  public person = {
    name: 'José Elpidio Guichardo Mieses',
    age: 25,
  };

  public isLoggedin: boolean = true;

  public radius: number = 5;

  public currentDate: Date = new Date();

  calculateArea(radius: number): number {
    return Math.floor(Math.PI * Math.pow(radius, 2));
  }

  ngOnInit(): void {
    const result = this.calculateArea(10);
    console.log(result);
  }
}
