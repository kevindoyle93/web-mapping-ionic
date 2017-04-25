import { Component } from '@angular/core';
import { NavController, NavParams, App, PopoverController } from 'ionic-angular';
import {RefereeDetail} from "../referee-detail/referee-detail";
import {LogoutPopover} from "../../components/logout-popover/logout-popover";
import {RefereeService} from "../../api/services/referee-service";
import {Referee} from "../../api/models/referee";

@Component({
  selector: 'page-referees-list',
  templateUrl: 'referees-list.html',
  providers: [RefereeService]
})
export class RefereesListPage {

  referees: Referee[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public popoverCtrl: PopoverController, public refService: RefereeService) {
    this.getReferees();
  }

  private getReferees = () => {
    this.refService.getReferees()
      .subscribe(
        res => this.referees = res,
        err => console.log(err)
      );
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
