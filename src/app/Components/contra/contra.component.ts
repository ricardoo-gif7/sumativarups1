// src/app/Components/contra/contra.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contra.component.html',
  styleUrls: ['./contra.component.css']
})
export class ContraComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  isValid: boolean = true; // Estado de validación

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // Aseguramos que el target sea un HTMLInputElement
    this.valueChange.emit(input.value);
    this.isValid = this.validatePassword(input.value); // Validar contraseña
  }

  validatePassword(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password); // Verificar mayúscula
    const hasNumber = /\d/.test(password); // Verificar número
    return hasUpperCase && hasNumber; // Retornar true si ambas condiciones se cumplen
  }
}