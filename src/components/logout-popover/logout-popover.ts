import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {LocalStorageService} from "../../providers/local-storage-service";

@Component({
  selector: 'logout-popover',
  templateUrl: 'logout-popover.html',
  providers: [LocalStorageService]
})
export class LogoutPopover {

  constructor(public viewCtrl: ViewController, public localStorage: LocalStorageService) {

  }

  private onLogoutClick = () => {
    this.localStorage.setToken(null);
    this.viewCtrl.dismiss({loggedOut: true});
  };

}
