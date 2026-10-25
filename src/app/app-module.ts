import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

/* Feature Modules for each page */
import { HomeModule } from './pages/home/home-module';
import { AboutModule } from './pages/about/about-module';
import { ServicesModule } from './pages/services/services-module';
import { WorkforceModule } from './pages/workforce/workforce-module';
import { WhyChooseUsModule } from './pages/why-choose-us/why-choose-us-module';
import { ContactModule } from './pages/contact/contact-module';
import { GalleryModule } from './pages/gallery/gallery-module';
import { TermsModule } from './pages/terms/terms-module';
import { PrivacyModule } from './pages/privacy/privacy-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AboutModule,
    ServicesModule,
    WorkforceModule,
    WhyChooseUsModule,
    ContactModule,
    GalleryModule,
    TermsModule,
    PrivacyModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
