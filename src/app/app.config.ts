import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment.development';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAuth, getAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(()=>getDatabase()),
    provideAuth(() => getAuth()),
  ]
};
