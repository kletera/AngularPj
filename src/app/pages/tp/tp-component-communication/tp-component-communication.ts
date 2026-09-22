import { Component } from '@angular/core';
import { ActiveUserComponent } from './active-user-component/active-user-component';
import { UserDataComponent } from './user-data-component/user-data-component';

interface User{
  name:string,
  age:string,
}

@Component({
  imports: [ActiveUserComponent, UserDataComponent],
  selector: 'app-tp-component-communication',
  styleUrl: './tp-component-communication.css',
  templateUrl: './tp-component-communication.html',
})
export class TpComponentCommunication {
  oneUser:User={
    name:"Azerty",
    age:"45",
  }
  onSubmitAdd(event:User){
    // console.log(event);
    this.oneUser=event;
  }
  
}
