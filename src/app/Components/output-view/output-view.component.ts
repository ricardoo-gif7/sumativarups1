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
  happyFace = false; // Inicialmente no hay carita
  square = 'square'; // Forma inicial

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

  changeShape() {
    const shapes = ['square', 'circle', 'triangle'];
    const currentIndex = shapes.indexOf(this.square);
    this.square = shapes[(currentIndex + 1) % shapes.length]; // Cambiar la forma
  }

  toggleFace() {
    this.happyFace = !this.happyFace; // Alternar estado de la carita
  }
}