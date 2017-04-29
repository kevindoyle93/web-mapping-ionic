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
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((data) => {
      let point = this.mapService.addPoint([data.coords.latitude, data.coords.longitude], 15);
      point.bindPopup('It\'s you!');
    });

    this.mapService.createMap('map', MapService.geoPointToLatLng(this.match.pitch.location));
    let marker = this.mapService.addMarker(MapService.geoPointToLatLng(this.match.pitch.location), MapService.greenMarker());
    marker.bindPopup(this.match.pitch.name);
  }

}
