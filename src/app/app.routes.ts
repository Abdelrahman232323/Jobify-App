import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // Add protected routes with AuthGuard
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  // Add a wildcard route for 404 page
  { path: '**', redirectTo: '/login' }
];
