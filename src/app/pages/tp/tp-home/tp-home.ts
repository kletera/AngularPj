import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TP {
  title: string;
  description: string;
  path: string;
};


@Component({
  imports: [RouterLink],
  selector: 'app-tp-home',
  styleUrl: './tp-home.css',
  templateUrl: './tp-home.html',
})

export class TpHome {
  tp: TP[] = [
    {
      title: 'TP 1 :TP Directives',
      description: "",
      path: '/tp/tp-directives',
    },
    
  ];
}
