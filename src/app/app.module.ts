import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './modules/user/user.module';
import { ProjectModule } from './modules/project/project.module';
import { CommentaryModule } from './modules/commentary/commentary.module';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ProjectModule,
    CommentaryModule,
    FormsModule,
    ReactiveFormsModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
