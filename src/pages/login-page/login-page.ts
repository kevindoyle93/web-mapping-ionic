import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { LoginService } from "../../api/services/login-service";

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
  providers: [LoginService]
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService: LoginService) {

  }

  private onLoginClick = () => {
    this.loginService.getToken(this.username, this.password)
      .subscribe(
        res => {
          // Store token
          console.log(res.token);
          this.goToMainPage();
        },
        err => console.log(err)
      );
  };

  private goToMainPage = () => {
    this.navCtrl.push(
      TabsPage
    );
  };

}
