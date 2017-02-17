import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, URLSearchParams }   from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ResponseStatusInfo } from './models/response-status-info';

@Injectable()
export class HttpService {

  apiUrl: string = 'http://localhost:55177/';

  private responseStatusInfo: ResponseStatusInfo = new ResponseStatusInfo();

  constructor(private http: Http) { }

  // EventEmitter нужен для создания события (событие изменения responseStatusInfo)
  responseStatusInfoUpdated:EventEmitter<ResponseStatusInfo> = new EventEmitter<ResponseStatusInfo>();

  setResponseStatusInfo(responseStatusInfo: ResponseStatusInfo) {
    this.responseStatusInfo.status = responseStatusInfo.status;
    this.responseStatusInfo.description = responseStatusInfo.description;
    this.responseStatusInfo.type = responseStatusInfo.type;
    this.responseStatusInfoUpdated.emit(this.responseStatusInfo); // вызываем событие
  }

  getResponseStatusInfo() {
    return this.responseStatusInfo;
  }

  getSimpleValues() {
    return this.http.get(this.apiUrl + 'api/values/').map(
      (res) => res.json()
    );
  }

  // Login(p) {
  //   let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); 
  //   var params = new URLSearchParams();
  //   params.set('grant_type', 'password');
  //   params.set('username', p.username);
  //   params.set('password', p.password);
  //   return this.http.post(this.apiUrl + 'Token', params.toString(), { headers: headers }).map(
  //     (res) => {
  //       //console.log(res.status);
  //       this.status = res.status;
  //       return res.json();
  //     }
  //   )
  //   .catch((error: any)=> {
  //     //console.log(error.status);
  //     this.status = error.status; 
  //     return Observable.throw(error);
  //   });
  //}

}
