import { componentFactoryName } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DeshboardComponent } from './pages/deshboard/deshboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { PromesaComponent } from './pages/promesa/promesa.component';
import { ObservableComponent } from './pages/observable/observable.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'deshboard', component: DeshboardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'promesa', component: PromesaComponent },
      { path: 'observable', component: ObservableComponent },
      { path: 'login', component: LoginComponent },
      { path:'', pathMatch:'full',redirectTo:'/home'}
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'deshboard', component: DeshboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: NotfoundComponent }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
