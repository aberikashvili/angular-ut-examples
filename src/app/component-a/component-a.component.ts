import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-a',
  template: `<div>
    <div>Component A</div>
    <button (click)="handleClick()">Click Me!</button>
  </div>`,
})
export class ComponentAComponent implements OnInit {
  data: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.loadAll()
      .subscribe(data => this.data = data);
  }

  handleClick(): void {
    this.showAlert('button clicked');
  }

  private showAlert(message: string): void {
    window.alert(message);
  }
}
