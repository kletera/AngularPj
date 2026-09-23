import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RandomUser {
    private apiUrl = 'https://randomuser.me/api/';

  // Méthode pour récupérer un utilisateur aléatoire
  async getRandomUser(): Promise<any> {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const data = await response.json();
      return data.results[0]; // Retourne le premier utilisateur du tableau results
    } catch (error) {
      console.error('Erreur API :', error);
      throw error;
    }
  }
}
