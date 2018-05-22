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
  classesBtn: Object;
  objStyle: object;

  constructor() {
    this.mimi = 'mimi';
    this.url = 'http://www.google.com';
    this.isEditable = true;

  }
  public changeStyle() {
    this.isEditable = !this.isEditable;
    this.updateclassesBtn();
    this.updateclassesBtn();
    console.log(this.classesBtn);
  }


  private updateclassesBtn() {
    this.classesBtn = {
    'teal' : this.isEditable,
    'orange' : !this.isEditable
  };
  this.objStyle = {
    'color' : this.isEditable ? 'chocolate' : 'royalblue',
    'border-left': !this.isEditable ? '4px solid royalblue' : 'none'
   };
  }
}
