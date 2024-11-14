import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() value!: number | string;
  @Input() width!: number;
  @Input() height!: number;
  @Input() borderWidth!: number;
  @Input() borderRadius!: number;

  onClick(event: Event) {
    console.log(event);
  }
}
