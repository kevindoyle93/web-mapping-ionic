import { Component } from '@angular/core';
import { MapService } from '../../providers/map-service';

@Component({
  selector: 'clubhouse-map',
  templateUrl: 'clubhouse-map.html',
  providers: [MapService]
})
export class ClubhouseMap {

  constructor(public mapService: MapService) {

  }

  ngOnInit() {
    let map = L.map("map");

    let osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    let osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    let osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

    // L.control.zoom({position: "topright"}).addTo(map);
    // L.control.layers(this.mapService.baseMaps).addTo(map);
    // L.control.scale().addTo(map);

    map.setView(new L.LatLng(51.3, 0.7),9);
    map.addLayer(osm);

    this.mapService.map = map;
  }

}
