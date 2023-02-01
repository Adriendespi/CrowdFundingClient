import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
messageError : string ="";

constructor(service :UserService, private _router : Router) {
  this._service = service;
} 

login()
{
 this._service.Login(
  {
    identifiant : this.identifiant,
    pwd : this.pwd
  }).subscribe({
    next : (tokken)=> (localStorage.setItem('key',tokken),this._router.navigate([''])),
    error : (err) => {this.messageError = err}
  })
}
}
