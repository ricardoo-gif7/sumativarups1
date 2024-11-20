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

    this.password = newPassword;

    this.passwordWarning = this.checkPasswordStrength(newPassword);

  }


  onTextChange(newText: string) {

    this.text = newText;

  }


  validateEmail(email: string): boolean {

    return true; // Cambia esto según tu lógica

  }


  checkPasswordStrength(password: string): boolean {

    return password.length < 8; // Cambia esto según tu lógica

  }

  onButtonClick(action: string) {
    console.log(action);
    if (action === 'accept') {
      this.outputView.rotate();
    } else if (action === 'cancel') {
      this.outputView.reset();
    }
  }

}