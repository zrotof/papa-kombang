import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withEnabledBlockingInitialNavigation(), withInMemoryScrolling({scrollPositionRestoration:'enabled'})),
    provideHttpClient(),
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(FontAwesomeModule),
  ]
};