import { Routes } from '@angular/router';
import { HerramientaDetailsComponent } from './components/herramienta-details/herramienta-details';
import { HerramientaFormComponent } from './components/herramienta-form/herramienta-form';
import { HerramientaListComponent } from './components/herramienta-list/herramienta-list';




export const routes: Routes = [
    {path: '', redirectTo: 'herramientas', pathMatch: 'full'},
    {path: 'herramientas', component: HerramientaListComponent},
    {path: 'herramientas/:id', component: HerramientaDetailsComponent},
    {path: 'agregar', component: HerramientaFormComponent}
];
