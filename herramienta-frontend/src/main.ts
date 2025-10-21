import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';


bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
});
  
