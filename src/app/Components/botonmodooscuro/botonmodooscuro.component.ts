import { Component } from '@angular/core';

@Component({
  selector: 'app-botonmodooscuro',
  standalone: true,
  templateUrl: './botonmodooscuro.component.html',
  styleUrls: ['./botonmodooscuro.component.css']
})
export class BotonmodooscuroComponent {
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode'); // Alternar clase de modo oscuro
  }
}