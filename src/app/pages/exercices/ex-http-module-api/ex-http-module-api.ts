import { Component } from '@angular/core';
import { RandomUser } from '../../../services/random-user';
import { NgIf } from '@angular/common';

@Component({
  imports: [NgIf],
  selector: 'app-ex-http-module-api',
  styleUrl: './ex-http-module-api.css',
  templateUrl: './ex-http-module-api.html',
})
export class ExHttpModuleApi {
  user: any = null; // Pour stocker les données de l'utilisateur
  isLoading = true; // Pour gérer l'état de chargement
  constructor(private userApiService: RandomUser) {}

  async ngOnInit() {
    try {
      this.user = await this.userApiService.getRandomUser();
    } catch (error) {
      console.error('Erreur :', error);
    } finally {
      this.isLoading = false; // Désactiver le chargement une fois terminé
    }
  }
  
  onClick(){
    this.ngOnInit();
  }
}
