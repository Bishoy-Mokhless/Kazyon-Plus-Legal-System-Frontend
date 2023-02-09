import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success = true;
  admin = false;
  errorStatus = 0;
  authForm: FormGroup | undefined;
  isSubmitted = false;

  constructor(private router: Router , private auth: LoginService ,
              ) {
  }


  ngOnInit(): void {

  }
  loginUser(event:any){
    event.preventDefault()
    const target=event.target
    const username=target.querySelector('#defaultLoginForUsername').value
    const password=target.querySelector('#defaultLoginFormPassword').value
    localStorage.setItem("username",JSON.stringify(username))
    this.auth.login(username,password).subscribe(
      data=>{

        localStorage.setItem("token",JSON.stringify(data)
        )

        this.router.navigate(['contracts'])
        console.log(data)
    })

  }


}
