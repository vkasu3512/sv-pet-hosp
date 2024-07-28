import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './feature/welcome/welcome.component';
import { AboutComponent } from './feature/about/about.component';
import { ServicesComponent } from './feature/services/services.component';
import { PortfolioComponent } from './feature/portfolio/portfolio.component';
import { MedicalStoreComponent } from './feature/medical-store/medical-store.component';
import { ContactComponent } from './feature/contact/contact.component';

const routes: Routes = [

  { path: '', component: WelcomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'medical-store', component: MedicalStoreComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // Wild Card Route for 404 request
  { path: '**', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
