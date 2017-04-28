import { Component } from '@angular/core';
import { NavController, App, PopoverController } from 'ionic-angular';
import { MatchDetail } from "../match-detail/match-detail";
import { MatchService } from "../../api/services/match-service";
import { LogoutPopover } from "../../components/logout-popover/logout-popover";
import { LocalStorageService } from "../../providers/local-storage-service";
import { Match } from "../../api/models/match";


@Component({
  selector: 'page-matches-list',
  templateUrl: 'matches-list.html',
  providers: [MatchService, LocalStorageService]
})
export class MatchesListPage {

  matches: Match[];

  constructor(public navCtrl: NavController, public appCtrl: App, public popoverCtrl: PopoverController, public matchService: MatchService, public localStorage: LocalStorageService) {
    this.getMatches();
  }

  private getMatches = () => {
    this.matchService.getMatches(this.localStorage.getToken())
      .subscribe(
        res => this.matches = res,
        err => console.log(err)
      );
  };

  private onMatchClick = (match: Match) => {
    this.navCtrl.push(
      MatchDetail,
      {
        match: match
      }
    )
  };

  private presentPopover = (event) => {
    let popover = this.popoverCtrl.create(LogoutPopover);
    popover.onDidDismiss((data) => {
      if (data) {
        if (data.loggedOut) {
          this.appCtrl.getRootNav().popToRoot();
        }
      }
    });

    popover.present({ev: event});
  };

}
