import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string, data?: any) {
    console.log(message, data);
  }

  constructor() {}
}
