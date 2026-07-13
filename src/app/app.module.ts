import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HeroComponent } from './Components/hero/hero.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ServicesComponent } from './Components/services/services.component';
import { AboutComponent } from './Components/about/about.component';
import { ConsultationComponent } from './Components/consultation/consultation.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './Components/landing/landing.component';
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
import { ChangePasswordComponent } from './Components/login/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ServicesComponent,
    AboutComponent,
    ConsultationComponent,
    LoginComponent,
    LandingComponent,
    RegistrationComponent,
    UserListComponent,
    MyBookingsComponent,
    InquiriesComponent,
    ReferClientComponent,
    LeadsComponent,
    AllLeadsComponent,
    AdminDashboardComponent,
    BrokerDashboardComponent,
    UserlistDashboardComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
