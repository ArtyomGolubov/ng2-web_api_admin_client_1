import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isLogin = true;
  name = 'user';

  Logout() {
    this.isLogin = false;
    //window.location.href = '/';
  }
}
