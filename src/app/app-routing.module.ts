import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 
import { IntroComponent } from './hp01/intro/intro.component';
import { GalleryComponent } from './hp01/gallery/gallery.component';
import { ContentComponent } from './hp01/content/content.component';
import { TestimonialComponent } from './hp01/testimonial/testimonial.component';
import { ClientsComponent } from './hp01/clients/clients.component';
import { PricingComponent } from './hp01/pricing/pricing.component';
import { HeaderComponent } from './hp01/header/header.component';

const routes: Routes = [
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'About', component: IntroComponent },
  { path: 'Services', component: ContentComponent },
  { path: 'Testimonials', component: TestimonialComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: '', component: HeaderComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
