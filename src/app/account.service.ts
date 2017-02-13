import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, URLSearchParams }   from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpService } from './http.service';
import { LoginViewModel } from './models/login-view-model';
import { RegisterViewModel } from './models/register-view-model';
import { ChangePasswordViewModel } from './models/change-password-view-model';

@Injectable()
export class AccountService {

  constructor(private http: Http, private httpService: HttpService) { }

  private token: string;
  private userName: string;

  // EventEmitter нужен для создания события (событие изменения token)
  tokenUpdated:EventEmitter<string> = new EventEmitter<string>();

  setToken(token: string) {
    this.token = token;
    sessionStorage.setItem("token", this.token);
    
    this.tokenUpdated.emit(this.token); // вызываем событие
  }

  getToken() {
    return this.token;
  }

  setUserName(userName: string) {
    this.userName = userName;
    sessionStorage.setItem("userName", this.userName);
  }

  getUserName() {
    return this.userName;
  }

  ngOnInit() {
    console.log('ngOnInit()');
    this.setToken(sessionStorage.getItem("token"));
    this.setUserName(sessionStorage.getItem("userName"));
    //console.log(this.getToken());
  }

  Login(p: LoginViewModel) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
    var params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', p.userName);
    params.set('password', p.password);
    return this.http.post(this.httpService.apiUrl + 'Token', params.toString(), { headers: headers }).map(
      (res) => {
        //console.log(res.json());
        let data = res.json();

        this.httpService.setResponseStatusInfo({status: res.status, description: res.statusText});
        this.setUserName(data.userName);
        this.setToken(data.access_token);

        return data;
      }
    )
    .catch((error: any)=> {
      //console.log(error.json());

      this.httpService.setResponseStatusInfo({status: error.status, description: error.json().error_description});
      return Observable.throw(error.json().error_description);
    });
  }

  Register(p: RegisterViewModel) {

    return this.http.post(this.httpService.apiUrl + 'api/Account/Register', p, {}).map(
      (res) => {
        let data = res.json();

        this.httpService.setResponseStatusInfo({status: res.status, description: res.statusText});

        return data;
      }
    )
    .catch((error: any)=> {
      //console.log(error.json().ModelState[""][1]);
      this.httpService.setResponseStatusInfo({status: error.status, description: error.json().ModelState[""][1] || error.statusText});
      return Observable.throw(error.statusText);
    });
  }

  ChangePassword (p: ChangePasswordViewModel) {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.getToken() }); 
    return this.http.post(this.httpService.apiUrl + 'api/Account/ChangePassword', p, { headers: headers }).map(
      (res) => {

        this.httpService.setResponseStatusInfo({status: res.status, description: res.statusText});
        let data = res.json();

        return data;
      }
    )
    .catch((error: any)=> {
      this.httpService.setResponseStatusInfo({status: error.status, description: error.statusText});
      return Observable.throw(error.statusText);
    });
  }

}
