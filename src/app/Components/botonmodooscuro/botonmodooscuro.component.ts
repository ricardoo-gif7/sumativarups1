import { Component } from '@angular/core';

@Component({
  selector: 'app-botonmodooscuro',
  standalone: true,
  imports: [],
  templateUrl: './botonmodooscuro.component.html',
  styleUrl: './botonmodooscuro.component.css'
})
export class BotonmodooscuroComponent {
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode'); // Alternar clase de modo oscuro
  }

}
