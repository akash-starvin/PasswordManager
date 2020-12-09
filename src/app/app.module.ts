import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavigationMenuComponent } from './modules/navigation-menu/navigation-menu.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
//import { AppRoutingModule, routingComponents } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavigationMenuComponent,
    HomePageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }