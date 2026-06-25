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
@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ServicesComponent,
    AboutComponent,
    ConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
