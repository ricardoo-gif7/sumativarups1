// src/app/Components/output-view/output-view.component.ts
import { Component, Input} from '@angular/core';
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

  rotate() {
    this.isRotated = true;
    this.isRed = true;

    // Reset rotation after animation
    setTimeout(() => {
      this.isRotated = false;
    }, 1000); // 1000ms para que coincida con la duración de la animación
  }

  reset() {
    this.isRed = false;
    this.isSmall = true;

    // Reset small animation after it completes
    setTimeout(() => {
      this.isSmall = false;
    }, 500); // 500ms para que coincida con la duración de la animación
  }
}