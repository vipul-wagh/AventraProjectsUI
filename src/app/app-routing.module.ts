import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './Components/hero/hero.component';
import { ServicesComponent } from './Components/services/services.component';
import { AboutComponent } from './Components/about/about.component';
import { ConsultationComponent } from './Components/consultation/consultation.component';
const routes: Routes = [
  { path: '', component: HeroComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'about', component: AboutComponent },
     { path: 'consultation', component: ConsultationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
