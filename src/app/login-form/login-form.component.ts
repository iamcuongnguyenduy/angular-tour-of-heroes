import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  log(message: any){
    console.log(message)
  }

  submit(f: { value: any; }){
    console.log(f)
    f.value;
  }

  onRemember(f: any){
    
  }

  contactMethod=[
    {id: 1, name:'Phone'},
    {id: 2, name: 'Email'}
  ]

}
