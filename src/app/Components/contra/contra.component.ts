import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contra',
  standalone: true,
  templateUrl: './contra.component.html',
  styleUrls: ['./contra.component.css']
})
export class ContraComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // Aseguramos que el target sea un HTMLInputElement
    this.valueChange.emit(input.value);
  }
}