import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserServiceService } from '../services/user-service.service';


@NgModule({
  declarations: [],
  
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    
  ]
})
export class UserModuleModule { }
