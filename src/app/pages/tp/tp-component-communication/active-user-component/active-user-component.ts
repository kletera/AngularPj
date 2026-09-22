import { Component, Input, Output } from '@angular/core';

interface User{
  name:string;
  age:string;
}

@Component({
  imports: [],
  selector: 'app-active-user-component',
  styleUrl: './active-user-component.css',
  templateUrl: './active-user-component.html',
})
export class ActiveUserComponent {
  @Input() activeUser:User={
    name:"",
    age:"0",
  }
}
