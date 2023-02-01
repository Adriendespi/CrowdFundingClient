import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public form :FormGroup
  _service :UserService
  messageError : string = ""
  
  
  constructor(service: UserService, _formBuilder:FormBuilder,private _router:Router) {
    this._service= service
    this.form = _formBuilder.group([
    {pseudo: [null,Validators.required]},
    {mail: [null,Validators.email,Validators.required]},
    {pwd: [null,Validators.required]}
    ])
  }

  OnSubmit()
  {
       this._service.Register(
      {
        pseudo : this.form.value.pseudo,
        mail : this.form.value.mail,
        pwd: this.form.value.pw
      })
      .subscribe({
        next: ()=> {this._service.Login({identifiant: this.form.value.mail, pwd: this.form.value.pwd})
                                  .subscribe({
                                  next: (tokken)=> (localStorage.setItem('key',tokken) ,this._router.navigate([''] ))
                                  })
                                
                    },
        error : (err) => {this.messageError = err}
        
        })
      
                 
      
        
        
        
       
        
        
    

  }


}
