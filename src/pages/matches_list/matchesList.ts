import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-matches-list',
  templateUrl: 'matches_list.html'
})
export class MatchesListPage {

  matches: any;

  constructor(public navCtrl: NavController) {
    this.getMatches();
  }

  private getMatches = () => {
    this.matches = ['Match 1', 'Match 2', 'Match 3'];
  }

}
