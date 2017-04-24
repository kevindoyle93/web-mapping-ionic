import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MatchDetail} from "../match-detail/match-detail";
import {MatchService} from "../../api/services/match-service";

@Component({
  selector: 'page-matches-list',
  templateUrl: 'matches-list.html',
  providers: [MatchService, ]
})
export class MatchesListPage {

  matches: any;

  constructor(public navCtrl: NavController, public matchService: MatchService) {
    this.getMatches();
  }

  private getMatches = () => {
    this.matches = ['Match 1', 'Match 2', 'Match 3'];
    this.matchService.getMatches()
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
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
