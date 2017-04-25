import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { League } from '../../api/models/league';

@Component({
  selector: 'page-league-detail',
  templateUrl: 'league-detail.html',
})
export class LeagueDetail {

  league: League;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.league = navParams.get('league');
  }

}
