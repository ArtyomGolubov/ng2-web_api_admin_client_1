import { Component } from '@angular/core';
import { AccountService } from './account.service';
import { HttpService } from './http.service';
import { AlertComponent } from './alert/alert.component';

import { Alert, Alerts} from './alert/alert.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isLogin = true;
  name = 'user';
  alerts: Alerts = new Alerts();

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
        this.alerts.addAlert({text: responseStatisInfo.description + ' status: ' 
        + responseStatisInfo.status + ' index: ' 
        + this.alerts.addAlert.length.toString(), class: responseStatisInfo.type, id: this.alerts.addAlert.length});
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
