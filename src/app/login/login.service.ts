/* import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request.model';
import { Page } from '../models/common/page.model';
import { BaseService } from './base.service';
import { HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<any> {

  authSegment = 'api/auth/';
  loginUrl = this.domain + this.authSegment + 'login';
  setPasswordUrl = this.domain + this.authSegment + 'set-password';
  refreshTokenUrl = this.domain + this.authSegment + 'refresh-token';

  private permissionsService: NgxPermissionsService;
  private isSetPasswordFlag = false;
  usernameObservable: Observable<any>;
  passwordObservable: Observable<any>;
  firstNameObservable: Observable<any>;
  private username = new BehaviorSubject(null);
  private password = new BehaviorSubject(null);
  private firstName = new BehaviorSubject(null);

  constructor(injector: Injector) {
    super(injector);
    this.permissionsService = injector.get(NgxPermissionsService);
    this.usernameObservable = this.username.asObservable();
    this.passwordObservable = this.password.asObservable();
    this.firstNameObservable = this.firstName.asObservable();
  }

  getAll(pageToDisplay?: Page<any>, parameters?: any) {
  }

  setUsernameAndPasswordAndFirstName(username, password, firstName) {
    this.username.next(username);
    this.password.next(password);
    this.firstName.next(firstName);
  }

  isAuthenticated() {
    return this.cookieService.check('accessToken');
  }

  login(login: LoginRequest) {
    return this.doPost(this.loginUrl, login);
  }

  signout() {
    this.emptyCookies();
    this.permissionsService.flushPermissions();
  }

  setPassword(loginAndNewPassword) {
    return this.doPost(this.setPasswordUrl, loginAndNewPassword);
  }

  refreshToken() : Observable<any> {
    const encryptedRefreshToken = this.cookieService.get('refreshToken');
    const decryptedRefreshToken = this.encryptionService.decryptData(encryptedRefreshToken);
    return this.doPost(this.refreshTokenUrl, {"refreshToken": decryptedRefreshToken}).pipe(tap((response:any) => {
      this.encryptAndSaveTokensFromBody(response.body);
    }));
  }

  encryptAndSaveTokensFromHeaders(headers: HttpHeaders) {
    const encryptedAccessToken = this.encryptionService.encryptData(headers.get('accessToken'));
    const encryptedRefreshToken = this.encryptionService.encryptData(headers.get('refreshToken'));
    this.extractSupplierNameFromJwt(headers.get('accessToken'));
    this.addCookie('accessToken', encryptedAccessToken);
    this.addCookie('refreshToken', encryptedRefreshToken);
    this.addCookie('firstName', this.firstName.value);
  }

  encryptAndSaveTokensFromBody(body: any) {
    const encryptedAccessToken = this.encryptionService.encryptData(body.accessToken);
    const encryptedRefreshToken = this.encryptionService.encryptData(body.refreshToken);
    this.extractSupplierNameFromJwt(body.accessToken);
    this.addCookie('accessToken', encryptedAccessToken);
    this.addCookie('refreshToken', encryptedRefreshToken);
  }

  emptyCookies() {
    this.removeCookie('accessToken');
    this.removeCookie('refreshToken');
    this.removeCookie('firstName');
    this.removeCookie('supplier');
  }

  removeCookie(cookieName: string){
    if(this.cookieService.get(cookieName)) {
      this.cookieService.delete(cookieName, '/');
    }
  }

  addCookie(cookieName: string, cookieValue: any){
    this.cookieService.set(cookieName, cookieValue, undefined, '/');
  }

  isSetPassword() {
    return this.isSetPasswordFlag;
  }

  setIsSetPasswordFlag(flag: boolean) {
    this.isSetPasswordFlag = flag
  }

  extractSupplierNameFromJwt(accessToken: string) {
    let jwtData = accessToken.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    const supplier = decodedJwtData.SUPPLIER;
    if(supplier) {
      this.addCookie('supplier', supplier);
    } else {
      this.removeCookie('supplier');
    }
  }
}
 */
