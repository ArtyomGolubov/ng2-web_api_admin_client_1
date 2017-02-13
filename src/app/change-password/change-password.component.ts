import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { AccountService } from '../account.service';

import { ChangePasswordViewModel } from '../models/change-password-view-model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  model: ChangePasswordViewModel = new ChangePasswordViewModel();

  constructor(private httpService: HttpService, private accountService: AccountService) { }

  ngOnInit() {
  }

  ChangePassword() {
    console.log('model = ', this.model)
    this.accountService.ChangePassword(this.model).subscribe(
      data => data,
      error => error
    );
  }

}
