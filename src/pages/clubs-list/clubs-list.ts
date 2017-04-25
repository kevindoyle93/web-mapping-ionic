import { Component } from '@angular/core';
import {NavController, App, PopoverController} from 'ionic-angular';
import {ClubDetail} from "../club-detail/club-detail";
import {LogoutPopover} from "../../components/logout-popover/logout-popover";
import {ClubService} from "../../api/services/club-service";
import {Club} from "../../api/models/club";

@Component({
  selector: 'page-clubs-list',
  templateUrl: 'clubs-list.html',
  providers: [ClubService]
})
export class ClubsListPage {

  clubs: Club[];

  constructor(public navCtrl: NavController, public appCtrl: App, public popoverCtrl: PopoverController, public clubService: ClubService) {
    this.getClubs();
  }

  private getClubs = () => {
    this.clubService.getClubs()
      .subscribe(
        res => this.clubs = res,
        err => console.log(err)
      );
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
