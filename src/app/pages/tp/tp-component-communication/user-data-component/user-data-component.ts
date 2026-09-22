import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User{
  name:string;
  age:string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-user-data-component',
  styleUrl: './user-data-component.css',
  templateUrl: './user-data-component.html',
})
export class UserDataComponent {
  // Nom user
  newUser:User={
    name:"",
    age:"",
  }
 
  @Output() userDataEmitUpdate = new EventEmitter <User>();
  
  // Click button
  addNewUser(){
    this.userDataEmitUpdate.emit(this.newUser);
  }


}
