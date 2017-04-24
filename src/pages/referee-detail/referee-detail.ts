import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-referee-detail',
  templateUrl: 'referee-detail.html',
})
export class RefereeDetail {

  referee: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.referee = navParams.get('referee');
  }

}
