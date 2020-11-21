import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { loginValidator } from './login.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="john";
  password:string;
  loginForm:FormGroup;
  constructor(private fb:FormBuilder) { }

fun(){
  alert(this.username)
}

// submit(username,password){
//   alert(username+" and "+password);
// }

submit(){
  alert(this.loginForm.controls.username.dirty)
}

  ngOnInit() {
    this.loginForm=this.fb.group({
      username:["john",[Validators.required,Validators.minLength(4), loginValidator.userNameValidator]],
      password:["",null]
    })
  }

}
