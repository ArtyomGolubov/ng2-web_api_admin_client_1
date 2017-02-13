import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { AccountService } from '../account.service';

import { RegisterViewModel } from '../models/register-view-model'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model: RegisterViewModel = new RegisterViewModel();

  constructor(private httpService: HttpService, private accountService: AccountService) { }

  ngOnInit() {
  }

  Registration() {
    this.accountService.Register(this.model).subscribe(
      data => {

      },
      error => {

      }
    );
  }

}
