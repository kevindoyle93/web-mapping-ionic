import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Club } from '../../api/models/club';

@Component({
  selector: 'page-club-detail',
  templateUrl: 'club-detail.html',
})
export class ClubDetail {

  club: Club;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.club = navParams.get('club');
  }

}
