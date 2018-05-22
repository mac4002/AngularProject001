import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TEAM INFO';
  team = 'Manchester United';
  isEditable: boolean ;
  mimi: string;
  url: string;
  constructor() {
    this.mimi = 'mimi';
    this.url = 'http://www.google.com';
    this.isEditable = true;
  }
  public changeStyle() {
    this.isEditable = !this.isEditable;
  }

}
