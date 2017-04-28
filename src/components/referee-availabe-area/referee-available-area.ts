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
    let availableArea = this.referee.availableArea['coordinates'][0];
    this.mapService.createMap('map', availableArea[0][1], availableArea[0][0]);
    this.mapService.addPolygon(this.referee.availableArea);
  }

}
