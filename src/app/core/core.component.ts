import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { DisplayComponent } from './display/display.component';
import { HEIGHT_TO_SCREEN_RATIO, WIDTH_TO_HEIGHT_RATIO } from '../shared';
import { DataService } from '../shared/data.service';
import { KeypadComponent } from './keypad/keypad.component';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [CommonModule, DisplayComponent, KeypadComponent],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss',
})
export class CoreComponent {
  calculatorHeight!: number;
  calculatorWidth!: number;
  padding!: number;
  borderWidth!: number;
  borderRadius!: number;

  innerHeight!: number;
  innerWidth!: number;
  spacingY!: number;
  peaceHeight!: number;

  constructor(private dataService: DataService) {}

  setProperties() {
    this.calculatorHeight = window.innerHeight * HEIGHT_TO_SCREEN_RATIO;
    this.calculatorWidth = window.innerHeight * WIDTH_TO_HEIGHT_RATIO;
    this.padding = this.calculatorHeight * 0.07;
    this.borderWidth = this.calculatorHeight * 0.012;
    this.borderRadius = this.padding / 2;

    this.innerHeight =
      this.calculatorHeight - (this.padding + this.borderWidth) * 2;
    this.innerWidth =
      this.calculatorWidth - (this.padding + this.borderWidth) * 2;

    this.spacingY = this.innerHeight * 0.035;
    this.peaceHeight = (this.innerHeight - this.spacingY * 4) / 5;

    this.dataService.setSpacingY(this.spacingY);
    this.dataService.setPeaceHeight(this.peaceHeight);
    this.dataService.setInnerHeight(this.innerHeight);
    this.dataService.setInnerWidth(this.innerWidth);
  }

  ngOnInit() {
    this.setProperties();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.setProperties();
  }
}
