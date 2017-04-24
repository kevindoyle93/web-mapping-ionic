import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MatchDetail} from "../match-detail/match-detail";

@Component({
  selector: 'page-matches-list',
  templateUrl: 'matches-list.html'
})
export class MatchesListPage {

  matches: any;

  constructor(public navCtrl: NavController) {
    this.getMatches();
  }

  private getMatches = () => {
    this.matches = ['Match 1', 'Match 2', 'Match 3'];
  };

  private onMatchClick = (match: any) => {
    this.navCtrl.push(
      MatchDetail,
      {
        match: match
      }
    )
  };

}
