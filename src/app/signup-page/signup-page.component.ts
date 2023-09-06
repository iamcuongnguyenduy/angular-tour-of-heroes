import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonValidators } from '../validators/common.validators';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
    // form = new FormGroup({
    //   username: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(10),
    //     Validators.email,
    //     CommonValidators.shouldBeUnique
    //   ]),
    //   password: new FormControl('', [
    //     Validators.required,
    //     CommonValidators.cannotContainSpace,        
    //   ]),
    //   confirmPassword: new FormControl('', [
    //     Validators.required,
        
    //   ]),
    //   mobileNumber: new FormControl('',[
    //     Validators.required
    //   ])
    // })

    form;
    constructor(fb: FormBuilder){
      this.form = fb.group({
        username: ['', [
            Validators.required,
            Validators.email, 
            Validators.minLength(10), 
            CommonValidators.shouldBeUnique
          ]
        ],
        password: ['', [
            Validators.required, 
            CommonValidators.cannotContainSpace
          ]
        ],
        confirmPassword: ['', Validators.required],
        mobileNumber: ['', Validators.required]
      })
    }

    get username(){
      return this.form.get('username');
    }

    get password(){
      return this.form.get('password');
    }

    get confirmPassword(){
      return this.form.get('confirmPassword')
    }

    get mobileNumber(){
      return this.form.get('mobileNumber')
    }

    signup(){
      this.form.setErrors({
        invalidSignUp: true
      })
    }

}
