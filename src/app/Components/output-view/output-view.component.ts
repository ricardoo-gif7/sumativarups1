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

  shape: string = 'square'; // Forma inicial
  happyFace: boolean = false; // Estado de la carita

  rotate() {
    this.isRotated = true;
    this.isRed = true;

    // Reset rotation after animation
    setTimeout(() => {
      this.isRotated = false;
    }, 1000);
  }

  reset() {
    this.isRed = false;
    this.isSmall = true;

    // Reset small animation after it completes
    setTimeout(() => {
      this.isSmall = false;
    }, 500);
  }

  changeShape() {
    const shapes = ['square', 'triangle', 'circle', 'diamond'];
    const currentIndex = shapes.indexOf(this.shape);
    this.shape = shapes[(currentIndex + 1) % shapes.length]; // Cambia a la siguiente forma
  }

  toggleFace() {
    this.happyFace = !this.happyFace; // Cambia entre carita feliz y triste
  }
}