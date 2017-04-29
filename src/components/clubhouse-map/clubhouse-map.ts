import { Component, Input } from '@angular/core';
import { MapService } from '../../providers/map-service';
import {Club} from "../../api/models/club";

@Component({
  selector: 'clubhouse-map',
  templateUrl: 'clubhouse-map.html',
  providers: [MapService]
})
export class ClubhouseMap {

  @Input() club: Club;

  constructor(public mapService: MapService) {

  }

  ngOnInit() {
    let centre = MapService.geoPointToLatLng(this.club.clubhouseLocation);
    this.mapService.createMap('map', centre);
    let clubhouseMarker = this.mapService.addMarker(centre, MapService.blueMarker());
    clubhouseMarker.bindPopup(this.club.name + ' Clubhouse');

    for (let pitch of this.club.pitches) {
      let marker = this.mapService.addMarker(MapService.geoPointToLatLng(pitch.location), MapService.greenMarker());
      marker.bindPopup(pitch.name);
    }
  }

}
