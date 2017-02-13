import { Component } from '@angular/core';
import { AccountService } from './account.service';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isLogin = true;
  name = 'user';

  constructor(private accountService: AccountService, private httpService: HttpService) { }

  ngOnInit() {

    this.accountService.ngOnInit();

    this.accountService.getToken() != 'undefined' ? this.isLogin = true : this.isLogin = false;
    this.name = this.accountService.getUserName();
    //console.log('isLogin = ', this.isLogin);

    // подписываемся на изменения token
    this.accountService.tokenUpdated.subscribe(
      (token) => {
        token != undefined ? this.isLogin = true : this.isLogin = false;
        this.name = this.accountService.getUserName();
        //console.log(this.accountService.getUserName());
        //console.log('isLogin = ', this.isLogin);
      }
    );

    // подписываемся на изменения responseStatusInfo
    this.httpService.responseStatusInfoUpdated.subscribe(
      (responseStatisInfo) => {
        console.log('responseStatisInfo = ', responseStatisInfo);
      }
    );

  }

  Logout() {
    this.isLogin = false;
    this.accountService.setToken(undefined);
    this.accountService.setUserName(undefined);
    //window.location.href = '/';
  }
}
