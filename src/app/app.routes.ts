import { Routes } from '@angular/router';
import { FormulariosComponent } from './components/formularios/formularios.component';

export const routes: Routes = [
    {path: 'formulario', component: FormulariosComponent},
    {path: '**', redirectTo: 'formulario'}

];
