import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Asegúrate de que provideRouter(routes) esté aquí
    provideAnimations(),
    provideHttpClient(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
};

