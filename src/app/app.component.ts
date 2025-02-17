import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { CommonModule } from '@angular/common';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ScoreComponent } from './components/score/score.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ParentComponent } from './components/output_input/parent/parent.component';

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
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'itla-angular';
}
