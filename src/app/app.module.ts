import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material-module.module';
import { CoffeeComponent } from './coffee/coffee.component';
import { HP01Component } from './hp01/hp01.component';
import { IntroComponent } from './hp01/intro/intro.component';
import { GalleryComponent } from './hp01/gallery/gallery.component';
import { ContentComponent } from './hp01/content/content.component';
import { TestimonialComponent } from './hp01/testimonial/testimonial.component';
import { FooterComponent } from './hp01/footer/footer.component';
import { ClientsComponent } from './hp01/clients/clients.component';
import { PricingComponent } from './hp01/pricing/pricing.component';
import { HeaderComponent } from './hp01/header/header.component';
import { SocialComponent } from './hp01/social/social.component';
import { NavigationComponent } from './hp01/navigation/navigation.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './education/home/home.component';
import { CourseComponent } from './education/course/course.component';
import { JoinnowComponent } from './education/joinnow/joinnow.component';
import { AboutComponent } from './education/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    HP01Component,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    FooterComponent,
    ClientsComponent,
    PricingComponent,
    HeaderComponent,
    SocialComponent,
    NavigationComponent,
    EducationComponent,
    HomeComponent,
    CourseComponent,
    JoinnowComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
