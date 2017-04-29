import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Match } from '../../api/models/match';
import { MapService } from '../../providers/map-service';

@Component({
  selector: 'page-match-detail',
  templateUrl: 'match-detail.html',
  providers: [Geolocation, MapService]
})
export class MatchDetail {

  match: Match;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public  mapService: MapService) {
    this.match = navParams.get('match');

    geolocation.getCurrentPosition().then((data) => {
      console.log('My latitude : ', data.coords.latitude);
      console.log('My longitude: ', data.coords.longitude);
    });
  }

}
