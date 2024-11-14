import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private spacingY = new BehaviorSubject<number>(0);
  private peaceHeight = new BehaviorSubject<number>(0);
  private innerHeight = new BehaviorSubject<number>(0);
  private innerWidth = new BehaviorSubject<number>(0);

  spacingY$: Observable<number> = this.spacingY.asObservable();
  peaceHeight$: Observable<number> = this.peaceHeight.asObservable();
  innerHeight$: Observable<number> = this.innerHeight.asObservable();
  innerWidth$: Observable<number> = this.innerWidth.asObservable();

  constructor() {}

  setSpacingY(value: number) {
    this.spacingY.next(value);
  }

  setPeaceHeight(value: number) {
    this.peaceHeight.next(value);
  }

  setInnerHeight(value: number) {
    this.innerHeight.next(value);
  }

  setInnerWidth(value: number) {
    this.innerWidth.next(value);
  }
}
