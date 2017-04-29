import {Injectable} from "@angular/core";
import * as Leaflet from 'leaflet';

@Injectable()
export class MapService {
  public map: any;

  constructor() {

  }

  public createMap = (elementId: string, centre: any) => {
    this.map = Leaflet.map(elementId);

    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);

    this.map.setView(centre, 14);
  };

  public addPoint = (point: any, radius: number) => {
    let circle = Leaflet.circle(point, radius);
    circle.addTo(this.map);
    return circle;
  };

  public addPolygon = (points: any, goToCentre?: boolean) => {
    let polygon = Leaflet.geoJSON(points);
    polygon.addTo(this.map);

    if (goToCentre) {
      this.map.setView(polygon.getBounds().getCenter());
    }

    return polygon;
  };

  public addMarker = (location, markerIcon: any) => {
    let marker = Leaflet.marker(location, {icon: markerIcon});
    marker.addTo(this.map);
    return marker;
  };

  public static geoPointToLatLng = (point: any) => {
    let lat, lng;
    if (point.hasOwnProperty('coordinates')) {
      lat = point['coordinates'][1];
      lng = point['coordinates'][0];
    }
    else {
      lat = point[1];
      lng = point[0];
    }
    return [lat, lng];
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
