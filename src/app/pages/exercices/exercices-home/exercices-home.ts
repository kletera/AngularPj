import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Exercice {
  title: string;
  description: string;
  path: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-exercices-home',
  styleUrl: './exercices-home.css',
  templateUrl: './exercices-home.html',
})
export class ExercicesHome {
  exercices: Exercice[] = [
    {
      title: 'Exercice 1 :Text Interpolation',
      description: "Afficher des valeurs avec {{ }}.",
      path: '/exercices/ex-text-interpolation',
    },
    {
      title: 'Exercice 2 : Attribute Binding',
      description: 'Lier des propriétés et attributs HTML.',
      path: '/exercices/ex-attribute-binding',
    },
    {
      title: 'Exercice 3 : Event Binding',
      description: "Maitriser l'utilisation des event.",
      path: '/exercices/ex-event-binding',
    },
  ];
}
