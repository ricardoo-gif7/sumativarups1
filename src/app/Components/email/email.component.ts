import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email',
  standalone: true,
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // Aseguramos que el target sea un HTMLInputElement
    this.valueChange.emit(input.value);
  }
}