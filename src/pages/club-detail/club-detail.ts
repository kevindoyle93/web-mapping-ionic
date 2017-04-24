import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-club-detail',
  templateUrl: 'club-detail.html',
})
export class ClubDetail {

  club: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.club = navParams.get('club');
  }

}
