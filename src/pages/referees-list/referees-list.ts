import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-referees-list',
  templateUrl: 'referees-list.html',
})
export class RefereesListPage {

  referees: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getReferees();
  }

  private getReferees = () => {
    this.referees = ['Ref 1', 'Ref 2', 'Ref 3'];
  }

}
