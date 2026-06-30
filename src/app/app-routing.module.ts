import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/login/login.component';
import { HeroComponent } from './Components/hero/hero.component';
import { ServicesComponent } from './Components/services/services.component';
import { AboutComponent } from './Components/about/about.component';
import { ConsultationComponent } from './Components/consultation/consultation.component';
import { RegistrationComponent } from './Components/registration/registration.component';
const routes: Routes = [
  // Open Landing page first
  { path: '', component: LandingComponent },

  // Login page
  { path: 'login', component: LoginComponent },

  // Register page (when created)
  // { path: 'register', component: RegisterComponent },

  // Main pages
  { path: 'hero', component: HeroComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'consultation', component: ConsultationComponent },
   {
    path: 'registration', component:  RegistrationComponent },

  // Redirect invalid URLs to landing page
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }