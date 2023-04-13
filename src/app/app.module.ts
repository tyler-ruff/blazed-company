import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Services
import { AppService } from './shared/app.service';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DivisionsComponent } from './pages/divisions/divisions.component';
import { DirectoryComponent } from './pages/directory/directory.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrandComponent } from './pages/brand/brand.component';
import { HumansComponent } from './pages/humans/humans.component';
import { SuccessComponent } from './pages/success/success.component';
import { UnknownComponent } from './pages/unknown/unknown.component';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

// Widgets
import { HeroComponent } from './widgets/hero/hero.component';
import { FeaturesComponent } from './widgets/features/features.component';
import { ContactCtaComponent } from './widgets/contact-cta/contact-cta.component';
import { DiscoverComponent } from './widgets/discover/discover.component';
import { RuffSealComponent } from './widgets/ruff-seal/ruff-seal.component';
import { AboutCardComponent } from './widgets/about-card/about-card.component';
import { NewsletterHeroComponent } from './widgets/newsletter-hero/newsletter-hero.component';

// Utilities
import { LazyLoadDirective } from './utils/lazyload.directive';
import { PhoneFormatPipe } from './utils/format-phone.pipe';
import { RelativeTimePipe } from './utils/relative-time.pipe';

import { CommonModule } from '@angular/common';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
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
    PhoneFormatPipe,
    RelativeTimePipe,
    BrandComponent,
    HumansComponent
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
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
