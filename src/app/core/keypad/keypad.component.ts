import { Component, Input } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../../shared/logger.service';
import { ButtonComponent } from '../../shared';

@Component({
  selector: 'app-keypad',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './keypad.component.html',
  styleUrl: './keypad.component.scss',
})
export class KeypadComponent {
  @Input() borderWidth!: number;
  @Input() borderRadius!: number;

  spacingY!: number;
  peaceHeight!: number;
  keyWidth!: number;

  constructor(private dataService: DataService, private logger: LoggerService) {
    this.dataService.spacingY$.subscribe((value) => {
      this.spacingY = value;
    });
    this.dataService.peaceHeight$.subscribe((value) => {
      this.peaceHeight = value;
    });

    this.dataService.innerWidth$.subscribe((value) => {
      this.keyWidth = (value - this.spacingY * 3) / 4;
    });
  }
}
