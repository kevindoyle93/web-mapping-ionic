import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LeagueDetail} from "../league-detail/league-detail";

@Component({
  selector: 'page-leagues-list',
  templateUrl: 'leagues-list.html'
})
export class LeaguesListPage {

  leagues: any;

  constructor(public navCtrl: NavController) {
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

}
