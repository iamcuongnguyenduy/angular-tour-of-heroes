import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'login', component: LoginFormComponent },
  // { path: 'login', component: LoginPageComponent },
  // { path: 'signup', component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
