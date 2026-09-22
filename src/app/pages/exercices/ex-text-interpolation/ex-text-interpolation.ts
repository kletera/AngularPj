import { Component } from '@angular/core';
//Si besoin une ptite interface pour faciliter typage.
interface Me {
  role:string,
  nameC:string,
  prenomC:string,
  statut:boolean,
}

@Component({
  imports: [],
  selector: 'app-ex-text-interpolation',
  styleUrl: './ex-text-interpolation.css',
  templateUrl: './ex-text-interpolation.html',
})

export class ExTextInterpolation {
  // 1. String & Number
  courseTitle:string='Exercie : Interpolation de texte';
  noteM:number= 20;
  score:number=15;
  pourcent:number= this.score/this.noteM*100;

  // 2. Objet typé
  me:Me={
    role:"Dev",
    nameC:'Dalle Carbonare',
    prenomC: 'Olivier',
    statut:true
  }
  
  // 3. Tableau (Array)
  skill:string[]=['Angular 22','Type Script', 'DaisyUI'];
  
  // 4. Méthode utilisable dans le template
  getFullName(): string {
    return `${this.me.prenomC} ${this.me.nameC.toUpperCase()}`;
  }
}


