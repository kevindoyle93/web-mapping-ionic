import { Component } from '@angular/core';
import { NavController, NavParams, App, PopoverController } from 'ionic-angular';
import {RefereeDetail} from "../referee-detail/referee-detail";
import {LogoutPopover} from "../../components/logout-popover/logout-popover";

@Component({
  selector: 'page-referees-list',
  templateUrl: 'referees-list.html',
})
export class RefereesListPage {

  referees: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public popoverCtrl: PopoverController) {
    this.getReferees();
  }

  private getReferees = () => {
    this.referees = ['Ref 1', 'Ref 2', 'Ref 3'];
  };

  private onRefClick = (referee: any) => {
    this.navCtrl.push(
      RefereeDetail,
      {
        referee: referee
      }
    );
  };

  private presentPopover = (event) => {
    let popover = this.popoverCtrl.create(LogoutPopover);
    popover.onDidDismiss((data) => {
      if (data.loggedOut) {
        this.appCtrl.getRootNav().popToRoot();
      }
    });

    popover.present({ev: event});
  };

}
