import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RecommendationComponent } from './Components/recommendation/recommendation.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'recommendations', component: RecommendationComponent },
  // Add a wildcard route for 404 page
  { path: '**', redirectTo: '/login' }
];
