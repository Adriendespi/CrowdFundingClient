import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';


const routes: Routes = [
{path:'',component: AcceuilComponent},
{path:"user",loadChildren:()=>
import('./modules/user/user.module').then(m=>m.UserModule)},

{path:"project",loadChildren:()=>
import('./modules/project/project.module').then(m=>m.ProjectModule)},



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
