import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-clubs-list',
  templateUrl: 'clubs-list.html'
})
export class ClubsListPage {

  clubs: any;

  constructor(public navCtrl: NavController) {
    this.getClubs();
  }

  private getClubs = () => {
    this.clubs = ['Club 1', 'Club 2', 'Club 3'];
  }

}
