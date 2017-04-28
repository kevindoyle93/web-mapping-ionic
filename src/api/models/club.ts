import {Pitch} from "./pitch";
import {Secretary} from "./secretary";


export class Club {
  id: number;
  name: string;
  homeColours: string;
  awayColours: string;
  secretary: Secretary;
  clubhouseLocation: any;
  pitches: Pitch[];
  url: string;


  constructor(id: number, name: string, homeColours: string, awayColours: string, secretary: Secretary, clubhouseLocation: any, pitches: Pitch[], url: string) {
    this.id = id;
    this.name = name;
    this.homeColours = homeColours;
    this.awayColours = awayColours;
    this.secretary = secretary;
    this.clubhouseLocation = clubhouseLocation;
    this.pitches = pitches;
    this.url = url;
  }

  public static fromJson = (data) => {
    let pitches: Pitch[] = [];
    for (let p of data['pitches']) {
      pitches.push(Pitch.fromJson(p));
    }

    return new Club(
      data['id'],
      data['name'],
      data['home_colours'],
      data['away_colours'],
      Secretary.fromJson(data['secretary']),
      data['clubhouse_location'],
      pitches,
      data['url']
    );
  };
}
