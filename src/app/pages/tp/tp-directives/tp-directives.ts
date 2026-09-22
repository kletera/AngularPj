import { NgStyle, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgStyle, NgClass],
  selector: 'app-tp-directives',
  styleUrl: './tp-directives.css',
  templateUrl: './tp-directives.html',
})
export class TpDirectives {
  compteur:number[]=[];
  isActif=false;
  numb:number=0

  onClick(){
    this.numb++
    this.isActif=!this.isActif
    this.compteur.push(this.numb)

  }
}
