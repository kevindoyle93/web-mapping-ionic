import {Injectable} from "@angular/core";
import * as Leaflet from 'leaflet';
import LatLng = L.LatLng;

@Injectable()
export class MapService {
  public map: any;
  public baseMaps: any;

  constructor() {

  }

  public createMap = (elementId: string, lat: number, lng: number) => {
    this.map = Leaflet.map(elementId);

    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);

    this.map.setView(new LatLng(lat, lng), 14);
  };

  public addPoint = (lat: number, lng: number, radius: number) => {
    Leaflet.circle(new LatLng(lat, lng), radius).addTo(this.map);
  };

  public addMarker = (lat: number, lng: number, markerIcon: any) => {
    let marker = Leaflet.marker(new LatLng(lat, lng), {icon: markerIcon});
    marker.addTo(this.map);
    return marker;
  };

  public static blueMarker = () => {
    return Leaflet.icon({
      iconUrl: 'assets/images/marker-icons/blue/marker-icon-2x.png',
      shadowUrl: 'assets/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  };

  public static greenMarker = () => {
    return Leaflet.icon({
      iconUrl: 'assets/images/marker-icons/green/marker-icon-2x.png',
      shadowUrl: 'assets/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  };
}
