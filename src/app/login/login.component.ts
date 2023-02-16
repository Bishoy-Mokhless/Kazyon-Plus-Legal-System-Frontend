import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DateAdapter } from '@angular/material/core';
import {ActivatedRoute} from "@angular/router";
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success = true;
  admin = false;
  errorStatus = 0;
  errorMessage="";
  authForm: FormGroup | undefined;
  isSubmitted = false;

  constructor(private router:Router, private auth: LoginService ,
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

        localStorage.setItem("token",JSON.stringify(data))
        //this.router.navigate(['error']);
        this.router.navigate(['lawsuit'])
        //console.log(data)
    },
    (error) => {
      this.errorStatus = error.status;
      this.errorMessage=error.error;
      console.error(error.status);
      this.router.navigate(['error']);
      console.error(this.errorStatus);
      document.getElementById("nn")!.innerHTML ="Wrong Cerdintails";

    }
    );

  }


}
