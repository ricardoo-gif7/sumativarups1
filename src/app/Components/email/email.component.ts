// src/app/Components/email/email.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  isValid: boolean = true; // Estado de validación

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // Aseguramos que el target sea un HTMLInputElement
    this.valueChange.emit(input.value);
    this.isValid = this.validateEmail(input.value); // Validar email
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del email
    return emailRegex.test(email);
  }
}