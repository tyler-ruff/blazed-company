import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DirectoryComponent } from './pages/directory/directory.component';
import { DivisionsComponent } from './pages/divisions/divisions.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { SuccessComponent } from './pages/success/success.component';
import { UnknownComponent } from './pages/unknown/unknown.component';
import { BrandComponent } from './pages/brand/brand.component';

import { PreloadAllModules } from '@angular/router';
import { HumansComponent } from './pages/humans/humans.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'divisions', component: DivisionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'humans', component: HumansComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
