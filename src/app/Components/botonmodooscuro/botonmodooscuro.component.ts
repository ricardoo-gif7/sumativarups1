import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonmodooscuro',
  standalone: true,
  templateUrl: './botonmodooscuro.component.html',
  styleUrls: ['./botonmodooscuro.component.css']
})
export class BotonmodooscuroComponent {
  @Output() darkModeToggle = new EventEmitter<void>();
  isDarkMode: boolean = false; // Estado del modo oscuro

  onClick() {
    this.isDarkMode = !this.isDarkMode; // Alternar estado
    this.darkModeToggle.emit(); // Emitir evento al hacer clic
  }

  get emoji() {
    return this.isDarkMode ? '🌞' : '🌜'; // Cambiar emoji según el estado
  }
}