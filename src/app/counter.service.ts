import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private counter: number = 0;

  public add(): number {
    return this.counter++;
  }
}
