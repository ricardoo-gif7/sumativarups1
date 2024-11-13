import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-texto',
  standalone: true,
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // Aseguramos que el target sea un HTMLInputElement
    this.valueChange.emit(input.value);
  }
}