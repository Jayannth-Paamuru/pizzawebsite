import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ViewpizzaComponent } from './viewpizza/viewpizza.component';
import { AddtocartComponent } from './addtocart/addtocart.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'login',component:LoginComponent
  },

  {
    path:'viewpizza',component:ViewpizzaComponent
  },
  {
    path:'addtocart',component:AddtocartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
