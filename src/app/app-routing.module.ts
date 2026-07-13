import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './Components/landing/landing.component';
import { LoginComponent } from './Components/login/login.component';
import { ChangePasswordComponent } from './Components/login/change-password/change-password.component';
import { HeroComponent } from './Components/hero/hero.component';
import { ServicesComponent } from './Components/services/services.component';
import { AboutComponent } from './Components/about/about.component';
import { ConsultationComponent } from './Components/consultation/consultation.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { UserListComponent } from './Components/admin/user-list/user-list.component';
import { MyBookingsComponent } from './Components/customer/my-bookings/my-bookings.component';
import { InquiriesComponent } from './Components/admin/inquiries/inquiries.component';
import { ReferClientComponent } from './Components/broker/refer-client/refer-client.component';
import { LeadsComponent } from './Components/broker/leads/leads.component';
import { AllLeadsComponent } from './Components/admin/all-leads/all-leads.component';
import { AdminDashboardComponent } from './Components/dashboard/admin-dashboard/admin-dashboard.component';
import { BrokerDashboardComponent } from './Components/dashboard/broker-dashboard/broker-dashboard.component';
import { UserlistDashboardComponent } from './Components/dashboard/userlist-dashboard/userlist-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  // Open Landing page first
   { path: '', component: LandingComponent },

  // Login page
  { path: 'login', component: LoginComponent },

  // Register page (when created)
  // { path: 'register', component: RegistrationComponent },

  // Main pages
  { path: 'hero', component: HeroComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent ,canActivate: [AuthGuard]},
  { path: 'consultation', component: ConsultationComponent},
  {path:'change-password',component:ChangePasswordComponent},
   {path: 'registration', component:  RegistrationComponent },
   {path: 'users',component:UserListComponent},
    {path : 'mybooking',component:MyBookingsComponent},
    { path: 'inquiries', component: InquiriesComponent },
    {path :'refer',component:ReferClientComponent},
    {path : 'leads',component:LeadsComponent},
    {path: 'all-leads',component:AllLeadsComponent},
    {path: 'admin-dashboard',component:AdminDashboardComponent},
    {path:'broker-dashboard',component:BrokerDashboardComponent},
    {path:'userlist-dashboard',component:UserlistDashboardComponent},




  // Redirect invalid URLs to landing page
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }