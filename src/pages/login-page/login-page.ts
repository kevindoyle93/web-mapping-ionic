import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { LoginService } from "../../api/services/login-service";
import { LocalStorageService } from "../../providers/local-storage-service";

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
  providers: [LoginService, LocalStorageService]
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService: LoginService, public localStorage: LocalStorageService) {

  }

  private onLoginClick = () => {
    this.loginService.getToken(this.username, this.password)
      .subscribe(
        res => {
          this.localStorage.setToken(res.token);
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
