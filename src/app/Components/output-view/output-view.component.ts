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

  isRotated = false;
  isRed = false;
  isSmall = false;
  happyFace = false; 
  shape = 'square'; // Forma inicial

  rotate() {
    this.isRotated = true;
    this.isRed = true;
    setTimeout(() => {
      this.isRotated = false;
      this.isRed = false;
    }, 1000);
  }
  
  reset() {
    this.isSmall = true;
    setTimeout(() => {
      this.isSmall = false;
    }, 500);
  }
  
  // Método para cambiar la forma
  changeShape() {
    const shapes = ['square', 'circle', 'triangle', 'diamond'];
    const currentIndex = shapes.indexOf(this.shape);
    this.shape = shapes[(currentIndex + 1) % shapes.length];
  }

  // Método para alternar la carita
  toggleFace() {
    this.happyFace = !this.happyFace; // Alternar estado de la carita
  }

  // Método para activar el modo oscuro
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
}