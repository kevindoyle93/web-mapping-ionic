import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Club } from '../../api/models/club';
import { MapService } from '../../providers/map-service';

@Component({
  selector: 'page-club-detail',
  templateUrl: 'club-detail.html',
  providers: [MapService]
})
export class ClubDetail {

  club: Club;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mapService: MapService) {
    this.club = navParams.get('club');
  }

}
