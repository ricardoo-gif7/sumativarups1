import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonsecundario',
  standalone: true,
  templateUrl: './botonsecundario.component.html',
  styleUrls: ['./botonsecundario.component.css']
})
export class BotonsecundarioComponent {
  @Output() shapeChange = new EventEmitter<void>(); // Define el evento shapeChange

  onClick() {
    this.shapeChange.emit(); // Emite el evento shapeChange al hacer clic
  }
}