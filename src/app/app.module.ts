import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material-module.module';
import { CoffeeComponent } from './coffee/coffee.component';
import { HP01Component } from './hp01/hp01.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    HP01Component
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
