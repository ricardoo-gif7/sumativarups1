import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-botonaceptar',
  standalone: true,
  imports: [],
  templateUrl: './botonaceptar.component.html',
  styleUrl: './botonaceptar.component.css'
})
export class BotonaceptarComponent {
  @Output() acceptClick = new EventEmitter<void>();

  onClick() {
    this.acceptClick.emit(); // Emitir evento al hacer clic
  }
}
