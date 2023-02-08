import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
//import {LoginService} from '../../core/services/login.service';

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

  constructor(private router: Router/* , private loginService: LoginService */,
              private formBuilder: FormBuilder) {
  }

  /* get formControls() {
    return this.authForm.controls;
  } */

  ngOnInit(): void {
   /*  this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }); */
  }

  /* loginUser(event) {
    this.errorStatus = 0;
    this.isSubmitted = true;
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#defaultLoginForUsername').value;
    const password = target.querySelector('#defaultLoginFormPassword').value;
    const user = {
      userName: username,
      password: password
    };

    this.loginService.login(user).subscribe((response: any) => {
        if (response.body.user.initialPassword === true) {
          this.loginService.setUsernameAndPasswordAndFirstName(username, password, response.body.user.firstName);
          this.loginService.setIsSetPasswordFlag(true);
          this.router.navigate(['set-password']);
        } else {
          this.loginService.setUsernameAndPasswordAndFirstName(username, password, response.body.user.firstName);
          this.loginService.encryptAndSaveTokensFromHeaders(response.headers);
          this.router.navigate(['']);
        }
      },
      (error) => {
        this.errorStatus = error.status;
        //console.error(error.status);
      });
  } */

}
