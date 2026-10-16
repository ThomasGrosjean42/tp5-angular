import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConsultActiviteComponent } from './consult-activite/consult-activite.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index.html', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'consultAct', component: ConsultActiviteComponent },
  { path: 'consultAct/:id', component: ConsultActiviteComponent }
];
