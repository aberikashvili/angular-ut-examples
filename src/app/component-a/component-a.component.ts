import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component-a',
  template: `<div>
    <div>Component A</div>
    <button (click)="handleClick()">Click Me!</button>
    <button (click)="loadUserDetails(1)">Click Me!</button>
    <!--<button (click)="updateStr()">Click Me!</button>-->
  </div>`,
})
export class ComponentAComponent implements OnInit {
  data: any[] = [];
  userDetails: any = {};

  private str: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.loadAll()
      .subscribe(data => this.data = data);
  }

  handleClick(): void {
    this.showAlert('button clicked');
  }

  loadUserDetails(id: number): void {
    this.userService.loadById(id)
      .subscribe(details => {
        this.userDetails = details;
      });
  }

  // updateStr(): void {
  //   this.updateString();
  // }

  private showAlert(message: string): void {
    window.alert(message);
  }

  // private updateString(): void {
  //   this.str = 'new value';
  // }
}
