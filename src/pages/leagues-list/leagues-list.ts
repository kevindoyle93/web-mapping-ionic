import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  }

}
