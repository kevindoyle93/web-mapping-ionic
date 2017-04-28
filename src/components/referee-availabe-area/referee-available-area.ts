import { Component, Input } from '@angular/core';
import {MapService} from "../../providers/map-service";
import {Referee} from "../../api/models/referee";

@Component({
  selector: 'referee-available-area',
  templateUrl: 'referee-available-area.html',
  providers: [MapService]
})
export class RefereeAvailableArea {

  @Input() referee: Referee;

  constructor(public mapService: MapService) {

  }

  ngOnInit() {
    let centre = MapService.geoPointToLatLng(this.referee.availableArea['coordinates'][0][0]);
    this.mapService.createMap('map', centre);
    this.mapService.addPolygon(this.referee.availableArea, true);

    for (let pitch of this.referee.pitches) {
      this.mapService.addMarker(MapService.geoPointToLatLng(pitch.location), MapService.greenMarker());
    }
  }

}
