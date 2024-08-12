import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppListComponent } from './app-list/app-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'angular17_directive_ngFor';
}
