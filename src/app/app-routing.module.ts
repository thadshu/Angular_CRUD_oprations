import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { authGuard } from './shared/auth.guard';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'addcontact',component:AddContactComponent,canActivate:[authGuard]},
  {path:'contactlist',component:ContactListComponent,canActivate:[authGuard]},
  {path:'updatecontact/:id',component:UpdateContactComponent,canActivate:[authGuard]},
  {path:'login-signup',component:LoginSignupComponent},
  {path:'',redirectTo:'login-signup',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
