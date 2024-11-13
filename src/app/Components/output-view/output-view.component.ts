import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output-view',
  standalone: true,
  templateUrl: './output-view.component.html',
  styleUrls: ['./output-view.component.css']
})
export class OutputViewComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() text: string = '';
  animate: boolean = false;

  onAnimate() {
    this.animate = true;
    setTimeout(() => {
      this.animate = false; // Para quitar la animación después de un tiempo
    }, 500); // Duración de la animación
  }
}