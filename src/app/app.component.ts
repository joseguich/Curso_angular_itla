import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { CommonModule } from '@angular/common';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ScoreComponent } from './components/score/score.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ParentComponent } from './components/output_input/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PerritoService } from './services/Perrito.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    DirectivasComponent,
    HeaderComponent,
    InterpolationComponent,
    ScoreComponent,
    ListUserComponent,
    ParentComponent,
    PipesComponent,
    RouterOutlet,
    RouterLink,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public img: string = '';
  constructor(private servicePerrito: PerritoService) {}

  ngOnInit(): void {
    this.servicePerrito.getDog().subscribe((data: any) => {
      this.img = data.message;
    });
  }
}
