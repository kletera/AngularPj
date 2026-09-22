import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ex-event-binding',
  styleUrl: './ex-event-binding.css',
  templateUrl: './ex-event-binding.html',
})
export class ExEventBinding {

  textInput:string=""

  isActif=true;

  onInputChange(event:Event){
    console.log(event);
    console.log(event.target);
    const input=event.target as HTMLInputElement;
    this.textInput=input.value;
    this.isActif=false
  }

  constructor(){
    console.log('Début de vie du composant (moment ou angular instancie le composant)');
    
    // Logique du setimeout
    setTimeout(()=>{
      this.isActif=true
    },5000)
  };
  // Logique du composant (les données et méthodes)
  listFriendsCreationStatus:string="aucun ami";

  addFriend(event:Event){
    event.preventDefault();
    if(this.textInput.length>0){
      new ExEventBinding();
      this.listFriendsCreationStatus="Votre ami a été ajouter"
    }
  }

}
