import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';
import { MdcareComponent } from './mdcare/mdcare.component';
import { Case1Component } from './mdcare/case1/case1.component';
import { Case2Component } from './mdcare/case2/case2.component';
import { Case3Component } from './mdcare/case3/case3.component';
import { Case4Component } from './mdcare/case4/case4.component';
import { SearchComponent } from './search/search.component';
import { ShprofileComponent } from './search/shprofile/shprofile.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent,
    MdcareComponent,
    Case1Component,
    Case2Component,
    Case3Component,
    Case4Component,
    SearchComponent,
    ShprofileComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
