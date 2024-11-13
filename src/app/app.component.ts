import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SumativaViewComponent } from "./Components/sumativa-view/sumativa-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SumativaViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
