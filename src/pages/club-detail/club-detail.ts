import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Club } from '../../api/models/club';
import { MapService } from '../../providers/map-service';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'page-club-detail',
  templateUrl: 'club-detail.html',
  providers: [MapService]
})
export class ClubDetail implements OnInit {

  club: Club;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mapService: MapService) {
    this.club = navParams.get('club');
  }

  ngOnInit(): void {
    this.mapService.createMap('map', this.club.clubhouseLocation[1], this.club.clubhouseLocation[0]);
    this.mapService.addPoint(this.club.clubhouseLocation[1], this.club.clubhouseLocation[0], 15);
  }

}
