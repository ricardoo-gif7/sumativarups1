// src/app/Components/botonsecundario/botonsecundario.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonsecundario',
  standalone: true,
  templateUrl: './botonsecundario.component.html',
  styleUrls: ['./botonsecundario.component.css']
})
export class BotonsecundarioComponent {
  @Output() faceToggle = new EventEmitter<void>();

  onClick() {
    this.faceToggle.emit(); // Emitir evento al hacer clic
  }
}