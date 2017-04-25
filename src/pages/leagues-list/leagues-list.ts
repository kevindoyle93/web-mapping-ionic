import { Component } from '@angular/core';
import { NavController, App, PopoverController } from 'ionic-angular';
import {LeagueDetail} from "../league-detail/league-detail";
import {LogoutPopover} from "../../components/logout-popover/logout-popover";
import {LeagueService} from "../../api/services/league-service";
import {League} from "../../api/models/league";

@Component({
  selector: 'page-leagues-list',
  templateUrl: 'leagues-list.html',
  providers: [LeagueService]
})
export class LeaguesListPage {

  leagues: League;

  constructor(public navCtrl: NavController, public appCtrl: App, public popoverCtrl: PopoverController, public leagueService: LeagueService) {
    this.getLeagues();
  }

  private getLeagues = () => {
    this.leagueService.getLeagues()
      .subscribe(
        res => this.leagues = res,
        err => console.log(err)
      );
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
