import { Component } from '@angular/core';
import { NavController, App, PopoverController } from 'ionic-angular';
import {LeagueDetail} from "../league-detail/league-detail";
import {LogoutPopover} from "../../components/logout-popover/logout-popover";

@Component({
  selector: 'page-leagues-list',
  templateUrl: 'leagues-list.html'
})
export class LeaguesListPage {

  leagues: any;

  constructor(public navCtrl: NavController, public appCtrl: App, public popoverCtrl: PopoverController) {
    this.getLeagues();
  }

  private getLeagues = () => {
    this.leagues = ['Premier A', 'Premier B', 'Premier C'];
  };

  private onLeagueClick = (league: any) => {
    this.navCtrl.push(
      LeagueDetail,
      {
        league: league
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
