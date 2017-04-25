import { Component } from '@angular/core';
import {NavController, App, PopoverController} from 'ionic-angular';
import {ClubDetail} from "../club-detail/club-detail";
import {LogoutPopover} from "../../components/logout-popover/logout-popover";

@Component({
  selector: 'page-clubs-list',
  templateUrl: 'clubs-list.html'
})
export class ClubsListPage {

  clubs: any;

  constructor(public navCtrl: NavController, public appCtrl: App, public popoverCtrl: PopoverController) {
    this.getClubs();
  }

  private getClubs = () => {
    this.clubs = ['Club 1', 'Club 2', 'Club 3'];
  };

  private onClubClick = (club: any) => {
    this.navCtrl.push(
      ClubDetail,
      {
        club: club
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
