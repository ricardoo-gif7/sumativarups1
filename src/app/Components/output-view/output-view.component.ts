// src/app/Components/output-view/output-view.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-output-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output-view.component.html',
  styleUrls: ['./output-view.component.css']
})
export class OutputViewComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() text: string = '';

  isRotated: boolean = false;
  isRed: boolean = false;
  isSmall: boolean = false;
  
  shape: string = 'square'; // forma inicial
  happyFace: boolean = false; // estado de la carita

  rotate() {
    this.isRotated = true;
    this.isRed = true;

    // Reset rotation after animation
    setTimeout(() => {
      this.isRotated = false;
      this.isRed = false; // Restablecer color después de la rotación
    }, 1000); // 1000ms para que coincida con la duración de la animación
  }

  reset() {
    this.isSmall = true; // Hacer pequeño el cuadrado

    // Reset small animation after it completes
    setTimeout(() => {
      this.isSmall = false; // Volver al tamaño original
    }, 500); // 500ms para que coincida con la duración de la animación
  }

  changeShape() {
    const shapes = ['square', 'circle', 'triangle', 'diamond'];
    const currentIndex = shapes.indexOf(this.shape);
    this.shape = shapes[(currentIndex + 1) % shapes.length]; // Cambia a la siguiente forma
  }

  toggleFace() {
    this.happyFace = !this.happyFace; // Cambia el estado de la carita
  }
}