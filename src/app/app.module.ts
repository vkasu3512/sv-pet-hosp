import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageHeaderComponent } from './core/page-header/page-header.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { WelcomeComponent } from './feature/welcome/welcome.component';
import { AboutComponent } from './feature/about/about.component';
import { ServicesComponent } from './feature/services/services.component';
import { ContactComponent } from './feature/contact/contact.component';
import { PortfolioComponent } from './feature/portfolio/portfolio.component';
import { MedicalStoreComponent } from './feature/medical-store/medical-store.component';
import { ContactFormComponent } from './feature/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    PortfolioComponent,
    PageHeaderComponent,
    MedicalStoreComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgbRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
