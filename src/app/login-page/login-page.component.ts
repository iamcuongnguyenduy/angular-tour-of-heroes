import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonValidators } from '../validators/common.validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(10),
      // CommonValidators.shouldBeUnique
    ]),
    password: new FormControl('', [Validators.required, CommonValidators.cannotContainSpace])
  });

  get username(){
    return this.form.get('username')
  }
  get password(){
    return this.form.get('password')
  }

  login(){
    this.form.setErrors({
      invalidLogin: true,
    })
  }

}
