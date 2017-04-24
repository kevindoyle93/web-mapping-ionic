import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-league-detail',
  templateUrl: 'league-detail.html',
})
export class LeagueDetail {

  league: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.league = navParams.get('league');
  }

}
