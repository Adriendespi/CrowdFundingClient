import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
_service : UserService;

identifiant : string ="";
pwd : string ="";

constructor(service :UserService) {
  this._service = service;
} 

login()
{
 this._service.Login(
  {
    identifiant : this.identifiant,
    pwd : this.pwd
  })
}
}
