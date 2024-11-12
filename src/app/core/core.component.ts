import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { DisplayComponent } from './display/display.component';
import { HEIGHT_TO_SCREEN_RATIO, WIDTH_TO_HEIGHT_RATIO } from '../shared';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [CommonModule, DisplayComponent],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss',
})
export class CoreComponent {
  calculatorHeight!: number;
  calculatorWidth!: number;
  padding!: number;
  borderWidth!: number;

  ngOnInit() {
    this.calculatorHeight = window.innerHeight * HEIGHT_TO_SCREEN_RATIO;
    this.calculatorWidth = window.innerHeight * WIDTH_TO_HEIGHT_RATIO;
    this.padding = this.calculatorHeight * 0.07;
    this.borderWidth = this.calculatorHeight * 0.012;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.calculatorHeight = window.innerHeight * HEIGHT_TO_SCREEN_RATIO;
    this.calculatorWidth = window.innerHeight * WIDTH_TO_HEIGHT_RATIO;
    this.padding = this.calculatorHeight * 0.06;
    this.borderWidth = this.calculatorHeight * 0.012;
  }
}
