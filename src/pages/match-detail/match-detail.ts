import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Match } from '../../api/models/match';

@Component({
  selector: 'page-match-detail',
  templateUrl: 'match-detail.html',
})
export class MatchDetail {

  match: Match;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.match = navParams.get('match');
  }

}
