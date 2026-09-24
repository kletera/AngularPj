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
    {
      title: 'Exercice 4 :  HTTP Module API (LifeCycle NgOnInit) ',
      description: `Faire un service qui contacte cette API 
https://randomuser.me/api/`,
      path: '/exercices/ex-http-module-api',
    },
    {
      title: 'Exercice 5 :  Observables  ',
      description: ``,
      path: '/exercices/ex-observables',
    },
    {
      title: 'Exercice 6 :  SIGNALS Calculateur de Panier e-Commerce Dynamique  ',
      description: ``,
      path: '/exercices/ex-signals',
    },
    {
      title: 'Exercice 7 : Validation de Formulaire  ',
      description: `Validation temps réel via RegEx et computed() sans dépendre de ReactiveForms`,
      path: '/exercices/ex-formulaire',
    },
    {
      title: 'Exercice 8 : Liste des Tache Firebase  ',
      description: `Utilisation de Firebase`,
      path: '/exercices/ex-task-list-fb',
    },
  ];
}
