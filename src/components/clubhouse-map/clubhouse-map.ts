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
    this.mapService.addMarker(centre, MapService.blueMarker());

    for (let pitch of this.club.pitches) {
      this.mapService.addMarker(MapService.geoPointToLatLng(pitch.location), MapService.greenMarker());
    }
  }

}
