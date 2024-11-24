import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonsecundario',
  standalone: true,
  templateUrl: './botonsecundario.component.html',
  styleUrls: ['./botonsecundario.component.css']
})
export class BotonsecundarioComponent {
  @Output() faceToggle = new EventEmitter<void>(); // Evento para alternar la carita

  onClick() {
    this.faceToggle.emit(); // Emitir evento al hacer clic
  }
}