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

}