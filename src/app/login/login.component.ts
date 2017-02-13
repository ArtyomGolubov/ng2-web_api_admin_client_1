import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AccountService } from '../account.service';

import { LoginViewModel } from '../models/login-view-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginViewModel = new LoginViewModel();

  constructor(private httpService: HttpService, private accountService: AccountService) { }

  ngOnInit() {
    //this.httpService.getSimpleValues().subscribe((data) => console.log(data));
    
  }

  Login () {
    this.accountService.Login(this.model).subscribe(
      data => data
    );
  }
}
