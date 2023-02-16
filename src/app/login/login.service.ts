import { Injectable, Injector, NgModule } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalComponent } from '../global-component';

@Injectable({
  providedIn: 'root'
})

export class LoginService  {
  constructor(private _HttpClient:HttpClient) {
  }
  login(username:any,password:any){
    return this._HttpClient.post<any>(GlobalComponent.appUrl+'/v1/validate',{username,password}, {
      headers: {
        'Authorization':'Basic SGFzc2FuOjEyMzQ=',
      }
    })
    //Basic U2FtOjEyMzQ=

  }
  errorMessage(){
    localStorage.setItem("error","Wrong Cerdintails");
  }
}
