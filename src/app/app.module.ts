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
    RegistrationComponent
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
