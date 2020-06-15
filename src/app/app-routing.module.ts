import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from "./user/register/register.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./home/contact/contact.component";
import { AboutComponent } from "./home/about/about.component";
import { MdcareComponent } from "./mdcare/mdcare.component";
import { Case1Component } from "./mdcare/case1/case1.component";
import { Case2Component } from "./mdcare/case2/case2.component";
import { Case3Component } from "./mdcare/case3/case3.component";
import { Case4Component } from "./mdcare/case4/case4.component";
import { SearchComponent } from "./search/search.component";
import { ShprofileComponent } from "./search/shprofile/shprofile.component"
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mdcare', component: MdcareComponent },
  { path: 'case1', component: Case1Component },
  { path: 'case2', component: Case2Component },
  { path: 'case3', component: Case3Component },
  { path: 'case4', component: Case4Component },
  { path: 'search', component: SearchComponent },
  { path: 'shprofile', component: ShprofileComponent },
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
