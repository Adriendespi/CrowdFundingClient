import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { UserModuleModule } from './user-module/user-module.module';
import { ProjectModuleModule } from './project-module/project-module.module';
import { CommentaryModuleModule } from './commentary-module/commentary-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModuleModule,
    ProjectModuleModule,
    CommentaryModuleModule,
    FormsModule,
    ReactiveFormsModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
