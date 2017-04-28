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
    let lat = this.club.clubhouseLocation[1];
    let lng = this.club.clubhouseLocation[0];
    this.mapService.createMap('map', lat, lng);
    // this.mapService.addPoint(lat, lng, 20);
    this.mapService.addMarker(lat, lng);
  }

}
