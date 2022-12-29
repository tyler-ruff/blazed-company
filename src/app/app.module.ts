import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { ContactCtaComponent } from './components/contact-cta/contact-cta.component';
import { LazyLoadDirective } from './lazyload.directive';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './pages/about/about.component';
import { DivisionsComponent } from './pages/divisions/divisions.component';
import { DirectoryComponent } from './pages/directory/directory.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SuccessComponent } from './pages/success/success.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { NewsletterHeroComponent } from './components/newsletter-hero/newsletter-hero.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { RuffSealComponent } from './components/ruff-seal/ruff-seal.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { UnknownComponent } from './pages/unknown/unknown.component';
import { PhoneFormatPipe } from './utils/format-phone-pipe/format-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    HeroComponent,
    FeaturesComponent,
    ContactCtaComponent,
    AboutComponent,
    DivisionsComponent,
    DirectoryComponent,
    ContactComponent,
    SuccessComponent,
    NewsletterComponent,
    NewsletterHeroComponent,
    DiscoverComponent,
    RuffSealComponent,
    AboutCardComponent,
    UnknownComponent,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
