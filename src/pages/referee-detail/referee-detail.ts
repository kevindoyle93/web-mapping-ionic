import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Referee } from '../../api/models/referee';

@Component({
  selector: 'page-referee-detail',
  templateUrl: 'referee-detail.html',
})
export class RefereeDetail {

  referee: Referee;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.referee = navParams.get('referee');
  }

}
