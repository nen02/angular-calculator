import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  @Input() value!: string;
  @Input() displayHeight!: number;
  @Input() borderWidth!: number;
  @Input() borderRadius!: number;
}
