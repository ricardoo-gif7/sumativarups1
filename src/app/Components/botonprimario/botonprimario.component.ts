// src/app/Components/botonprimario/botonprimario.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonprimario',
  standalone: true,
  templateUrl: './botonprimario.component.html',
  styleUrls: ['./botonprimario.component.css']
})
export class BotonprimarioComponent {
  @Output() shapeChange = new EventEmitter<void>();

  onClick() {
    this.shapeChange.emit(); // Emitir evento al hacer clic
  }
}