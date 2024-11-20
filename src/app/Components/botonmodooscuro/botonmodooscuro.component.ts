import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonmodooscuro',
  standalone: true,
  templateUrl: './botonmodooscuro.component.html',
  styleUrls: ['./botonmodooscuro.component.css']
})
export class BotonmodooscuroComponent {
  @Output() darkModeToggle = new EventEmitter<void>();

  onClick() {
    this.darkModeToggle.emit(); // Emitir evento al hacer clic
  }
}