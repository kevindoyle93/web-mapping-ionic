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
    this.mapService.createMap('map', this.club.clubhouseLocation[1], this.club.clubhouseLocation[0]);
    this.mapService.addPoint(this.club.clubhouseLocation[1], this.club.clubhouseLocation[0], 20);
  }

}
