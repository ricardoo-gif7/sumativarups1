import { Component, ViewChild } from '@angular/core';
import { OutputViewComponent } from '../output-view/output-view.component';
import { CommonModule } from '@angular/common';
import { BotonaceptarComponent } from '../botonaceptar/botonaceptar.component';
import { BotoncancelarComponent } from '../botoncancelar/botoncancelar.component';
import { BotonmodooscuroComponent } from '../botonmodooscuro/botonmodooscuro.component';
import { BotonprimarioComponent } from '../botonprimario/botonprimario.component';
import { BotonsecundarioComponent } from '../botonsecundario/botonsecundario.component';
import { EmailComponent } from '../email/email.component';
import { ContraComponent } from '../contra/contra.component';
import { TextoComponent } from '../texto/texto.component';

@Component({
  selector: 'app-sumativa-view',
  standalone: true,
  imports: [CommonModule, BotonaceptarComponent, BotoncancelarComponent, BotonmodooscuroComponent, BotonprimarioComponent, BotonsecundarioComponent, EmailComponent, ContraComponent, TextoComponent, OutputViewComponent],
  templateUrl: './sumativa-view.component.html',
  styleUrls: ['./sumativa-view.component.css']
})
export class SumativaViewComponent {
  @ViewChild(OutputViewComponent) outputView!: OutputViewComponent;
  email: string = '';
  password: string = '';
  text: string = '';
  emailValidation: boolean = true;
  passwordWarning: boolean = false;

  onEmailChange(newEmail: string) {
    this.email = newEmail;
    this.emailValidation = this.validateEmail(newEmail);
  }
  
  onPasswordChange(newPassword: string) {
    this.password = newPassword; // Asignar el nuevo valor a la contraseña
    this.passwordWarning = !this.checkPasswordStrength(newPassword); // Advertencia si la contraseña no es fuerte
  }

  onTextChange(newText: string) {
    this.text = newText; // Actualizar el texto
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del email
    return emailRegex.test(email);
  }
  
  checkPasswordStrength(password: string): boolean {
    const hasUpperCase = /[A-Z]/.test(password); // Verificar mayúscula
    const hasNumber = /\d/.test(password); // Verificar número
    return hasUpperCase && hasNumber; // Retornar true si ambas condiciones se cumplen
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode'); // Alternar clase de modo oscuro
  }

  onAcceptClick() {
    this.outputView.rotate(); // Rotar y cambiar color al hacer clic en aceptar
  }
  
  onCancelClick() {
    this.outputView.reset(); // Restablecer al hacer clic en cancelar
  }
  
  onShapeChange() {
    this.outputView.changeShape(); // Cambiar la forma
  }

  onFaceToggle() {
    this.outputView.toggleFace(); // Cambiar la carita
  }
}