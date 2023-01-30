import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public form :FormGroup
  _service :UserService
  constructor(service: UserService, _formBuilder:FormBuilder) {

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
        pwd: this.form.value.pwd
      })
  }


}
