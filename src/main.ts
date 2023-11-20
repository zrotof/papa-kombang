import { enableProdMode, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Routes, provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

import { environment } from './environments/environment';

import { AppComponent } from './app/app.component';

const routes: Routes = [
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
      importProvidersFrom(BrowserModule.withServerTransition({ appId: 'serverApp' }), FontAwesomeModule, HttpClientModule),
      provideAnimations(),
      provideRouter(routes, withEnabledBlockingInitialNavigation())
  ]
})
.catch(err => console.error(err));
