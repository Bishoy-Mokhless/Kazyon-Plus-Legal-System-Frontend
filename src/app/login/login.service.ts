import { Injectable, Injector } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService  {
  constructor(private _HttpClient:HttpClient) {
  }
  login(username:any,password:any){
    return this._HttpClient.post<any>('http://localhost:8080/v1/validate',{username,password}, {
      headers: {
        'Authorization':'Basic U2FtOjEyMzQ=',
      }
    })
    //Basic U2FtOjEyMzQ=

  }
}
