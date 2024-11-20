import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botoncancelar',
  standalone: true,
  imports: [],
  templateUrl: './botoncancelar.component.html',
  styleUrl: './botoncancelar.component.css'
})
export class BotoncancelarComponent {
  @Output() cancelClick = new EventEmitter<void>();

  onClick() {
    this.cancelClick.emit(); // Emitir evento al hacer clic
  }
}
