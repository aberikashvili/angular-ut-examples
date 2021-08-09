import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-component-b',
  template: `<div>
    <div>Component B</div>
    <button (click)="handleClick()">Click Me!</button>
  </div>`,
  providers: [CounterService],
})
export class ComponentBComponent implements OnInit {
  count: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.increase();
  }

  handleClick(): void {
    this.increase();
  }

  private increase(): void {
    this.count = this.counterService.add();
    console.log('Count', this.count);
  }
}
